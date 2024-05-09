const SESSION_LEVEL = {
  INTRO: "INTRO",
  SELECT: "SELECT",
};

const MSG_INTRO =
  "*Selamat Datang di Layanan Lapas ABC Nusakambangan*\n\nAda yang bisa kami bantu?\n\nSilahkan Pilih angka sesuai dengan pertanyaan yang anda diinginkan\n\n1.⁠ ⁠Apa saja Hak dan Kewajiban Warga Binaan dan Keluarga?\n2.⁠ ⁠Bagaimana tata tertib pelaksanaan kunjungan pada Lembaga Pemasyarakatan di Nusakambangan?\n3.⁠ ⁠Bagaimana alur pelayanan dan syarat melakukan Kunjungan Warga Binaan secara tatap muka?\n4.⁠ ⁠Bagaimana alur pelayanan Kunjungan Warga Binaan secara online/daring?\n5.⁠ ⁠Bagaimana alur pelayanan Kunjungan tamu dinas?\n6.⁠ ⁠Saya ingin mendaftar sebagai pengunjung.\n7.⁠ ⁠Saya ingin informasi lebih lanjut.";

const MSG_SELECT_6 =
  "Untuk terhubung ke layanan kunjungan silakan klik pada tautan berikut\n" +
  "https://wa.me/6285713888066\n\n" +
  "Petugas kami akan segera melayani Anda dari akun tersebut pada Hari Senin - Sabtu (kecuali tanggal merah) pukul 08.00 - 13.00\n\n" +
  "Terima Kasih 🙏";

const MSG_SELECT_7 =
  "Anda bisa mengunjungi laman\n" +
  "https://lapasbatu.kemenkumham.go.id/\n" +
  "untuk mendapatkan informasi lebih lanjut.";

const REPLY_MASTER = {
  INTRO: MSG_INTRO,
  MSG_6: MSG_SELECT_6,
  MSG_7: MSG_SELECT_7,
};

exports.constants = { SESSION_LEVEL, REPLY_MASTER };
