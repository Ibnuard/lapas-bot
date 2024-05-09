const SESSION_LEVEL = {
  INTRO: "INTRO",
  SELECT: "SELECT",
};

const MSG_INTRO = `*Pesan Otomatis*
*Selamat Datang di Layanan Lapas Nusakambangan Ujung Jari*
📍Jl. Candi, Pulau Nusa Kambangan, Tambakreja, Kec. Cilacap Sel., Kabupaten Cilacap, Jawa Tengah 53263

Ada yang bisa kami bantu?

Silahkan Pilih angka sesuai dengan pertanyaan yang anda diinginkan

1.⁠ ⁠Apa saja Hak dan Kewajiban Warga Binaan dan Keluarga?
2.⁠ ⁠Bagaimana tata tertib pelaksanaan kunjungan pada Lembaga Pemasyarakatan di Nusakambangan?
3.⁠ ⁠Bagaimana alur pelayanan dan syarat melakukan Kunjungan Warga Binaan secara tatap muka?
4.⁠ ⁠Bagaimana alur pelayanan Kunjungan Warga Binaan secara online/daring?
5.⁠ ⁠Bagaimana alur pelayanan Kunjungan tamu dinas?
6.⁠ ⁠Saya ingin mendaftar sebagai pengunjung.
7.⁠ ⁠Saya ingin informasi lebih lanjut.
`;

const MSG_SELECT_6 =
  "Untuk terhubung ke layanan kunjungan silakan klik pada tautan berikut\n" +
  "https://wa.me/6285713888066\n\n" +
  "Petugas kami akan segera melayani Anda dari akun tersebut pada Hari Senin - Sabtu (kecuali tanggal merah) pukul 08.00 - 13.00\n\n" +
  "Terima Kasih 🙏";

const MSG_SELECT_7 =
  "Anda bisa mengunjungi laman\n" +
  "https://lapasbatu.kemenkumham.go.id/\n" +
  "untuk mendapatkan informasi lebih lanjut.";

const MSG_HELP = `Apakah ada yang perlu kami bantu lagi?
Silahkan pilih angka sesuai dengan pertanyaan apabila masih ada yang ingin anda tanyakan!

1.⁠ ⁠Apa saja Hak dan Kewajiban Warga Binaan dan Keluarga?
2.⁠ ⁠Bagaimana tata tertib pelaksanaan kunjungan pada Lembaga Pemasyarakatan di Nusakambangan?
3.⁠ ⁠Bagaimana alur pelayanan dan syarat melakukan Kunjungan Warga Binaan secara tatap muka?
4.⁠ ⁠Bagaimana alur pelayanan Kunjungan Warga Binaan secara online/daring?
5.⁠ ⁠Bagaimana alur pelayanan Kunjungan tamu dinas?
6.⁠ ⁠Saya ingin mendaftar sebagai pengunjung.
7.⁠ ⁠Saya ingin informasi lebih lanjut.
`;

const REPLY_MASTER = {
  INTRO: MSG_INTRO,
  MSG_6: MSG_SELECT_6,
  MSG_7: MSG_SELECT_7,
  MSG_HELP: MSG_HELP,
};

exports.constants = { SESSION_LEVEL, REPLY_MASTER };
