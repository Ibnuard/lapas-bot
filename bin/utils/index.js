const moment = require("moment");
const { database } = require("../database");
const { constants } = require("./constants");

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkUserSession(wa) {
  const sessionDB = database.userSessionDB;

  // check if user exist
  const ext = sessionDB.findOne({ wa: wa });

  if (!ext) {
    sessionDB.create({
      wa: wa,
      session: constants.SESSION_LEVEL.INTRO,
      lastUpdate: moment().format(),
    });
    return constants.SESSION_LEVEL.INTRO;
  }

  const isExpired = isSessionExpired(wa);

  if (isExpired) {
    updateLastSessionTime(wa);
    return constants.SESSION_LEVEL.INTRO;
  }

  return ext.session;
}

function updateUserSession(wa, session) {
  const sessionDB = database.userSessionDB;

  sessionDB.updateOne({ wa: wa }, { session: session });
}

function updateLastSessionTime(wa) {
  const sessionDB = database.userSessionDB;

  sessionDB.updateOne({ wa: wa }, { lastUpdate: moment().format() });
}

const calculateHourDifference = (startTime, endTime) => {
  const start = moment(startTime);
  const end = moment(endTime);
  const duration = moment.duration(end.diff(start));
  const hours = duration.asMinutes();
  return hours;
};

function isSessionExpired(wa) {
  const sessionDB = database.userSessionDB;
  const session = sessionDB.findOne({ wa: wa });

  const lastUpdate = session.lastUpdate;
  const currentTime = moment().format();

  const diff = calculateHourDifference(lastUpdate, currentTime);

  if (diff < 60) {
    return false;
  }

  return true;
}

module.exports = {
  randomInt,
  checkUserSession,
  updateUserSession,
  updateLastSessionTime,
  calculateHourDifference,
};
