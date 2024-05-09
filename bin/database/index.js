const Borgoose = require("borgoose");

//set path
const path = "./bin/database/";

//TESTING DATABASE
const userSessionDB = new Borgoose(path + "session.json", {
  syncOnWrite: true,
  createWithId: false,
});

exports.database = { userSessionDB };
