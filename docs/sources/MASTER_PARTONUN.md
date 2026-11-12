# MASTER_PARTONUN.md

## Dokumen Induk, Indeks Keputusan, dan Daftar Kebutuhan Data PARTONUN

**Nama platform:** PARTONUN\
**Arah desain:** Contemporary Batak Heritage Editorial\
**Tema:** Smart Digital Economy & Sociopreneurship\
**Framework:** Next.js\
**Dokumen produk utama:** `MASTER_PRD_ULOS_HITA_INVOFEST_2026_V3.md`

------------------------------------------------------------------------

# 1. Tujuan Dokumen

Dokumen ini menjadi pusat kendali perencanaan PARTONUN. Isinya adalah
daftar kebutuhan data, keputusan produk, arahan visual, dan panduan
implementasi agar pemilik project dapat mengumpulkan bahan secara
bertahap dan Claude Code dapat mengimplementasikannya tanpa mengarang
konten.

Dokumen ini menjawab: 1. Data apa yang harus dikumpulkan untuk setiap
halaman. 2. Informasi minimum untuk setiap Ulos, penenun, dan rumah
tenun. 3. Foto, video, dan aset visual yang perlu disiapkan. 4. Sumber
dan bukti yang harus dicatat. 5. Hubungan antara Ulos, penenun, rumah
tenun, dan proses produksi. 6. Identitas visual, warna, tipografi,
fotografi, animasi, dan responsivitas. 7. Data yang wajib, diutamakan,
dan opsional. 8. Hal yang boleh dikerjakan meskipun sebagian data belum
tersedia.

Dokumen ini adalah indeks dan checklist induk. Data rinci dapat
ditempatkan dalam dokumen pendamping agar mudah diperbarui.

**Prinsip utama:** kumpulkan data yang tersedia. Jangan mengarang data
untuk mengisi bagian kosong. Tandai informasi yang belum tersedia secara
jelas.

# 2. Cara Menggunakan Checklist

Gunakan status berikut: - `[WAJIB]` Penting untuk membangun halaman atau
mendukung klaim. - `[DIUTAMAKAN]` Sangat membantu kualitas konten dan
visual. - `[OPSIONAL]` Nilai tambah jika tersedia. - `[BELUM TERSEDIA]`
Belum ditemukan atau dikumpulkan. - `[PERLU VERIFIKASI]` Sudah ada,
tetapi sumber atau akurasinya perlu diperiksa. - `[SIAP]` Sudah
terkumpul dan dapat digunakan.

Untuk setiap data, catat: - Nama data dan isinya. - Sumber informasi. -
Nama narasumber atau pemilik data jika relevan. - Tanggal pengumpulan. -
Status verifikasi. - Izin publikasi jika berupa foto, kutipan, atau
informasi pribadi. - Halaman dan komponen tempat data akan digunakan.

Tidak semua data harus tersedia sebelum pengembangan dimulai. Data
minimum dapat digunakan untuk membangun struktur. Data tambahan dapat
dimasukkan kemudian.

# 3. Identitas dan Batasan Produk

## 3.1 Identitas

-   Nama publik: **PARTONUN**.
-   Tagline: **Menghidupkan Cerita, Merawat Warisan Tenun.**
-   Tema: **Smart Digital Economy & Sociopreneurship**.
-   Arah visual: **Contemporary Batak Heritage Editorial**.
-   Karakter: cinematic photography, cultural storytelling, premium
    editorial, minimalist navigation.
-   Fokus: Ulos, penenun, rumah tenun, pengetahuan budaya, proses
    produksi, dan nilai ekonomi-sosial ekosistem tenun.

## 3.2 Batasan produk yang wajib dipertahankan

-   PARTONUN adalah platform katalog, dokumentasi, edukasi, dan
    storytelling digital.
-   Platform bukan marketplace transaksi.
-   Tidak ada checkout, keranjang belanja, pembayaran, atau pengelolaan
    pesanan.
-   Tidak ada login atau registrasi pengguna.
-   Tidak ada dashboard pengguna atau admin.
-   Implementasi berfokus pada frontend Next.js.
-   Informasi harga dapat ditampilkan jika tersedia dan relevan, tetapi
    tidak boleh dihubungkan dengan transaksi di dalam platform.
-   Jangan menambahkan fitur yang mengubah ruang lingkup produk tanpa
    persetujuan pemilik project.

## 3.3 Halaman dan route

Pertahankan route yang telah ditetapkan dalam PRD V3.

  ------------------------------------------------------------------------
  Halaman                 Route                    Fungsi
  ----------------------- ------------------------ -----------------------
  Beranda                 `/`                      Pengenalan PARTONUN dan
                                                   pintu eksplorasi

  Ulos Hita               `/ulos-hita`             Katalog koleksi Ulos

  Detail Ulos             `/ulos-hita/[slug]`      Informasi lengkap
                                                   setiap Ulos

  Penenun Hita            `/penenun-hita`          Profil dan cerita
                                                   penenun

  Detail Penenun          `/penenun-hita/[slug]`   Cerita dan karya
                                                   penenun

  Detail Rumah Tenun      `/rumah-tenun/[slug]`    Profil rumah atau
                                                   tempat produksi

  Belajar Ulos            `/belajar-ulos`          Pengetahuan dan edukasi
                                                   Ulos

  Proses Menenun          `/proses-menenun`        Dokumentasi proses
                                                   pembuatan

  Tentang Platform        `/tentang-platform`      Latar belakang, tujuan,
                                                   pendekatan, dan dampak
  ------------------------------------------------------------------------

Nama **Ulos Hita** dan **Penenun Hita** dipertahankan. Jangan mengganti
nama atau route tanpa persetujuan.

# 4. DATA MASTER 01: SELURUH KOLEKSI ULOS

**Dokumen pendamping:** `01_ULOS_MASTER_DATA.md`\
**Halaman:** Ulos Hita dan Detail Ulos.

## 4.1 Daftar koleksi

-   \[WAJIB\] Nama setiap Ulos yang benar.
-   \[WAJIB\] Ejaan alternatif atau nama lokal jika ada.
-   \[WAJIB\] Kategori atau jenis Ulos.
-   \[WAJIB\] Deskripsi singkat bersumber.
-   \[DIUTAMAKAN\] Daerah atau komunitas asal yang dapat diverifikasi.
-   \[DIUTAMAKAN\] Status dokumentasi foto.
-   \[DIUTAMAKAN\] Nama penenun atau kelompok pembuat jika diketahui.
-   \[OPSIONAL\] Tahun atau periode pembuatan jika diketahui.

Jumlah koleksi tidak perlu dipaksakan. Lebih baik menampilkan sedikit
koleksi dengan informasi benar daripada banyak koleksi dengan data tidak
jelas.

## 4.2 Sembilan informasi pada setiap Detail Ulos

Gunakan sembilan bidang yang telah menjadi keputusan desain sebelumnya.
Cocokkan label dan urutannya dengan tabel E3 pada PRD V3 sebelum
implementasi final.

1.  \[WAJIB\] **Identitas/Jenis Ulos:** nama, jenis, dan nama alternatif
    jika terverifikasi.
2.  \[WAJIB\] **Bahan:** jenis benang atau bahan yang digunakan.
3.  \[DIUTAMAKAN\] **Pewarna:** jenis pewarna, alami atau sintetis, jika
    diketahui.
4.  \[WAJIB\] **Teknik pembuatan:** teknik tenun dan alat yang
    digunakan.
5.  \[DIUTAMAKAN\] **Kerumitan motif:** deskripsi pola dan tingkat
    kerumitan berdasarkan keterangan penenun atau sumber ahli.
6.  \[WAJIB\] **Makna motif:** makna yang dapat dipertanggungjawabkan,
    termasuk variasi penafsiran.
7.  \[DIUTAMAKAN\] **Lama pengerjaan:** durasi produk atau contoh yang
    didokumentasikan; jangan menggeneralisasi.
8.  \[DIUTAMAKAN\] **Identitas pengrajin/penenun:** nama atau profil
    pembuat jika diizinkan dan diketahui.
9.  \[OPSIONAL\] **Harga:** harga indikatif jika tersedia, disertai
    tanggal informasi dan keterangan bahwa harga dapat berubah. Tidak
    ada transaksi di platform.

Jika informasi belum ditemukan, jangan mengarang. Tampilkan
`Informasi belum tersedia` jika bidang harus tetap terlihat. Gunakan
`Tidak relevan` hanya jika sudah dikonfirmasi.

## 4.3 Informasi tambahan

-   \[DIUTAMAKAN\] Cerita atau latar budaya Ulos.
-   \[DIUTAMAKAN\] Fungsi dan konteks penggunaan.
-   \[DIUTAMAKAN\] Konteks adat atau siklus kehidupan jika
    terverifikasi.
-   \[DIUTAMAKAN\] Penjelasan motif per bagian kain.
-   \[OPSIONAL\] Variasi motif atau warna.
-   \[OPSIONAL\] Perbedaan versi tradisional dan pengembangan
    kontemporer.
-   \[OPSIONAL\] Cara perawatan kain.
-   \[OPSIONAL\] Catatan konservasi atau keaslian.
-   \[OPSIONAL\] Referensi buku, artikel, museum, atau narasumber.

## 4.4 Foto setiap Ulos

-   \[WAJIB\] Foto utama seluruh kain, idealnya portrait 4:5.
-   \[DIUTAMAKAN\] Resolusi foto utama minimal sekitar 1600 px pada sisi
    terpanjang.
-   \[DIUTAMAKAN\] Foto detail motif atau tekstur.
-   \[DIUTAMAKAN\] Foto bagian ujung, badan, dan detail khas kain.
-   \[OPSIONAL\] Foto proses pembuatan.
-   \[OPSIONAL\] Foto penenun yang membuatnya.
-   \[OPSIONAL\] Foto Ulos saat digunakan dalam konteks yang tepat dan
    memiliki izin.

Catat nama file, ID Ulos, pemilik/fotografer, sumber, izin, resolusi,
orientasi, focal point, crop desktop/mobile, alt text, caption, dan
kredit.

## 4.5 Template satu data Ulos

``` yaml
id: ULOS-001
slug: nama-ulos
nama: ""
nama_alternatif: []
jenis: ""
daerah_asal: ""
deskripsi_singkat: ""
bahan: ""
pewarna: ""
teknik_pembuatan: ""
alat_tenun: ""
kerumitan_motif: ""
makna_motif: ""
fungsi_penggunaan: ""
konteks_adat: ""
lama_pengerjaan: ""
penenun_ids: []
rumah_tenun_ids: []
harga_indikatif: null
tanggal_informasi_harga: null
foto_utama: ""
foto_detail: []
foto_proses: []
sumber: []
status_verifikasi: "belum diverifikasi"
catatan: ""
```

# 5. DATA MASTER 02: PROFIL PENENUN

**Dokumen pendamping:** `02_PENENUN_MASTER_DATA.md`\
**Halaman:** Penenun Hita dan Detail Penenun.

## 5.1 Data minimum

-   \[WAJIB\] Nama yang boleh dipublikasikan.
-   \[WAJIB\] Foto portrait atau foto representatif dengan izin.
-   \[WAJIB\] Cerita singkat aktivitas menenun berdasarkan wawancara
    atau sumber.
-   \[DIUTAMAKAN\] Asal atau wilayah aktivitas menenun.
-   \[DIUTAMAKAN\] Keahlian atau teknik yang dikuasai.
-   \[DIUTAMAKAN\] Jenis Ulos atau karya yang pernah dibuat.
-   \[DIUTAMAKAN\] Foto aktivitas menenun.
-   \[OPSIONAL\] Lama pengalaman jika dikonfirmasi.
-   \[OPSIONAL\] Riwayat belajar menenun atau pewarisan keterampilan.
-   \[OPSIONAL\] Penghargaan, pelatihan, atau pengakuan.
-   \[OPSIONAL\] Kutipan langsung dari penenun.

## 5.2 Pertanyaan wawancara yang dapat digunakan

-   Siapa yang mengenalkan keterampilan menenun?
-   Kapan mulai belajar atau menenun, jika narasumber mengingatnya?
-   Siapa guru atau pewaris pengetahuan?
-   Apa yang membuat penenun tetap menjalankan pekerjaan ini?
-   Apa ciri khas karya yang dibuat?
-   Apa tantangan dalam proses produksi?
-   Bagaimana perubahan pasar atau teknologi memengaruhi pekerjaan?
-   Apa harapan penenun terhadap generasi muda?
-   Apa pesan penenun tentang Ulos dan budaya Batak?

Pertanyaan ini panduan, bukan kewajiban untuk menjawab semuanya. Jangan
memaksa narasumber menceritakan hal pribadi.

## 5.3 Foto dan dokumentasi

-   \[WAJIB\] Portrait utama.
-   \[DIUTAMAKAN\] Foto sedang bekerja di alat tenun.
-   \[DIUTAMAKAN\] Foto tangan dan detail proses.
-   \[DIUTAMAKAN\] Foto bersama hasil tenunan.
-   \[OPSIONAL\] Foto alat dan ruang kerja.
-   \[OPSIONAL\] Foto bersama keluarga atau penerus keterampilan, hanya
    dengan persetujuan.
-   \[OPSIONAL\] Video pendek proses menenun.
-   \[OPSIONAL\] Rekaman kutipan suara untuk dokumentasi internal.

## 5.4 Etika dan izin

-   Minta persetujuan penggunaan nama dan foto.
-   Jelaskan bahwa foto dan cerita akan dipublikasikan di website
    PARTONUN.
-   Catat pemberi izin dan tanggal persetujuan.
-   Jangan menampilkan alamat rumah pribadi atau nomor kontak pribadi
    tanpa izin khusus.
-   Jangan mengubah kutipan sehingga mengubah maksud narasumber.
-   Jangan membuat riwayat, usia, pengalaman, atau prestasi berdasarkan
    perkiraan.
-   Hormati permintaan narasumber untuk tidak mempublikasikan bagian
    tertentu.

## 5.5 Template satu penenun

``` yaml
id: ARTISAN-001
slug: nama-penenun
nama_publik: ""
nama_panggilan: ""
wilayah: ""
desa_kecamatan_kabupaten: ""
bio_singkat: ""
cerita_perjalanan: ""
awal_belajar_menenun: ""
guru_atau_pewaris_keterampilan: ""
pengalaman_tahun: null
teknik_dikuasai: []
ciri_khas_karya: ""
tantangan_dan_harapan: ""
kutipan_langsung: ""
ulos_ids: []
rumah_tenun_ids: []
foto_portrait: ""
foto_aktivitas: []
foto_karya: []
video: []
izin_publikasi: "belum dikonfirmasi"
sumber: []
status_verifikasi: "belum diverifikasi"
catatan: ""
```

# 6. DATA MASTER 03: RUMAH TENUN

**Dokumen pendamping:** `03_RUMAH_TENUN_MASTER_DATA.md`\
**Halaman:** Detail Rumah Tenun.

## 6.1 Data minimum

-   \[WAJIB\] Nama rumah tenun atau usaha yang boleh dipublikasikan.
-   \[WAJIB\] Deskripsi singkat aktivitas.
-   \[DIUTAMAKAN\] Wilayah atau lokasi umum.
-   \[DIUTAMAKAN\] Foto tempat atau aktivitas produksi.
-   \[DIUTAMAKAN\] Ciri khas hasil tenun.
-   \[DIUTAMAKAN\] Hubungan dengan penenun yang terlibat.
-   \[OPSIONAL\] Nama pemilik atau pengelola jika diizinkan.
-   \[OPSIONAL\] Tahun berdiri jika dapat diverifikasi.
-   \[OPSIONAL\] Riwayat perkembangan.
-   \[OPSIONAL\] Informasi kunjungan jika menerima pengunjung dan
    datanya terkonfirmasi.
-   \[OPSIONAL\] Kanal resmi usaha yang boleh dipublikasikan.

## 6.2 Pertanyaan pengumpulan informasi

-   Bagaimana rumah tenun dimulai?
-   Siapa yang mengelola?
-   Apa ciri khas hasil tenunnya?
-   Jenis Ulos apa yang dibuat?
-   Teknik atau alat apa yang digunakan?
-   Siapa penenun yang berkarya di sana?
-   Bagaimana pengetahuan menenun diwariskan?
-   Apakah tempat terbuka untuk kunjungan atau edukasi?
-   Apa tantangan menjaga keberlanjutan produksi?

## 6.3 Foto rumah tenun

-   \[WAJIB\] Foto utama tempat atau suasana produksi.
-   \[DIUTAMAKAN\] Foto interior atau area kerja.
-   \[DIUTAMAKAN\] Foto alat tenun.
-   \[DIUTAMAKAN\] Foto penenun yang bekerja.
-   \[DIUTAMAKAN\] Foto hasil Ulos.
-   \[OPSIONAL\] Foto eksterior atau lingkungan sekitar.
-   \[OPSIONAL\] Foto kegiatan edukasi atau kunjungan.

## 6.4 Template rumah tenun

``` yaml
id: HOUSE-001
slug: nama-rumah-tenun
nama: ""
nama_pengelola: ""
wilayah: ""
lokasi_umum: ""
deskripsi_singkat: ""
sejarah: ""
tahun_berdiri: null
ciri_khas: ""
teknik_dan_alat: []
jenis_ulos: []
artisan_ids: []
foto_utama: ""
foto_galeri: []
informasi_kunjungan: ""
kanal_resmi: []
izin_publikasi: "belum dikonfirmasi"
sumber: []
status_verifikasi: "belum diverifikasi"
catatan: ""
```

# 7. DATA MASTER 04: BELAJAR ULOS

**Dokumen pendamping:** `04_BELAJAR_ULOS.md`\
**Halaman:** Belajar Ulos.

Materi yang dapat dikumpulkan:

## 7.1 Pengenalan Ulos

-   \[WAJIB\] Definisi dan pengenalan Ulos.
-   \[DIUTAMAKAN\] Sejarah dan perkembangan.
-   \[DIUTAMAKAN\] Peran Ulos dalam kehidupan masyarakat Batak.
-   \[DIUTAMAKAN\] Nilai sosial, budaya, dan simbolik.
-   \[OPSIONAL\] Dokumentasi koleksi museum atau arsip.

## 7.2 Jenis, motif, dan fungsi

-   \[WAJIB\] Nama jenis Ulos yang dijelaskan.
-   \[WAJIB\] Foto atau ilustrasi jenis yang dijelaskan.
-   \[DIUTAMAKAN\] Ciri visual dan struktur motif.
-   \[DIUTAMAKAN\] Fungsi dan konteks penggunaan.
-   \[DIUTAMAKAN\] Makna berdasarkan sumber atau narasumber.
-   \[OPSIONAL\] Perbandingan variasi antarwilayah atau komunitas.

## 7.3 Nilai budaya dan konteks adat

-   \[DIUTAMAKAN\] Istilah adat yang berkaitan.
-   \[DIUTAMAKAN\] Konteks pemberian atau penggunaan Ulos.
-   \[DIUTAMAKAN\] Hubungan dengan kekerabatan dan kehidupan sosial.
-   \[OPSIONAL\] Glosarium istilah Batak beserta ejaan dan arti yang
    diverifikasi.

Jangan menyamaratakan praktik semua kelompok Batak. Catat konteks
subkelompok, wilayah, narasumber, atau sumber yang menjelaskan praktik
tersebut.

## 7.4 Template materi edukasi

``` yaml
id: LEARN-001
slug: topik-pembelajaran
judul: ""
ringkasan: ""
isi: ""
istilah_lokal: []
ulos_terkait: []
gambar: []
sumber: []
penulis_atau_narasumber: ""
status_verifikasi: "belum diverifikasi"
catatan: ""
```

# 8. DATA MASTER 05: PROSES MENENUN

**Dokumen pendamping:** `05_PROSES_MENENUN.md`\
**Halaman:** Proses Menenun.

## 8.1 Data yang perlu dikumpulkan

-   \[WAJIB\] Gambaran umum proses menenun yang didokumentasikan.
-   \[DIUTAMAKAN\] Tahapan persiapan benang.
-   \[DIUTAMAKAN\] Alat yang digunakan dan nama lokalnya.
-   \[DIUTAMAKAN\] Bahan yang digunakan.
-   \[DIUTAMAKAN\] Tahap pembentukan motif.
-   \[DIUTAMAKAN\] Tahap penenunan.
-   \[DIUTAMAKAN\] Tahap penyelesaian kain.
-   \[OPSIONAL\] Durasi setiap tahap.
-   \[OPSIONAL\] Perbedaan proses berdasarkan jenis Ulos atau penenun.

## 8.2 Dokumentasi visual

-   Foto bahan.
-   Foto benang.
-   Foto alat tenun.
-   Foto persiapan alat.
-   Foto tangan penenun.
-   Foto pembentukan motif.
-   Foto kain setengah jadi.
-   Foto hasil akhir.
-   Video pendek tiap tahapan jika tersedia.

Nama tahap, alat, dan istilah proses dapat berbeda berdasarkan daerah,
komunitas, atau teknik. Gunakan istilah dari penenun atau sumber yang
jelas. Jangan memaksakan satu urutan sebagai aturan universal.

## 8.3 Template tahapan

``` yaml
id: PROCESS-001
urutan: 1
nama_tahap: ""
nama_lokal: ""
deskripsi: ""
alat: []
bahan: []
foto: []
video: []
narasumber: ""
sumber: []
status_verifikasi: "belum diverifikasi"
catatan: ""
```

# 9. DATA MASTER 06: BERANDA

**Halaman:** `/`

-   \[WAJIB\] Pernyataan singkat tentang PARTONUN.
-   \[WAJIB\] Masalah utama yang ingin dijawab.
-   \[WAJIB\] Tujuan platform.
-   \[WAJIB\] Penjelasan bahwa platform adalah katalog dan ruang
    dokumentasi digital, bukan marketplace transaksi.
-   \[DIUTAMAKAN\] Foto hero autentik.
-   \[DIUTAMAKAN\] Headline utama.
-   \[DIUTAMAKAN\] Ringkasan nilai budaya dan ekonomi.
-   \[DIUTAMAKAN\] Koleksi Ulos unggulan yang terdokumentasi.
-   \[DIUTAMAKAN\] Profil penenun pilihan.
-   \[DIUTAMAKAN\] Rumah tenun pilihan.
-   \[DIUTAMAKAN\] Pengantar edukasi.
-   \[OPSIONAL\] Angka dampak yang memiliki bukti.

Jangan menampilkan statistik jumlah penenun, koleksi, atau rumah tenun
jika belum dihitung dari data nyata.

# 10. DATA MASTER 07: TENTANG PLATFORM

**Halaman:** `/tentang-platform`

-   \[WAJIB\] Latar belakang masalah.
-   \[WAJIB\] Alasan perlunya dokumentasi digital.
-   \[WAJIB\] Tujuan PARTONUN.
-   \[WAJIB\] Sasaran pengguna atau penerima manfaat.
-   \[WAJIB\] Penjelasan solusi.
-   \[DIUTAMAKAN\] Hubungan dengan Smart Digital Economy.
-   \[DIUTAMAKAN\] Hubungan dengan Sociopreneurship.
-   \[DIUTAMAKAN\] Potensi penguatan visibilitas karya dan identitas
    penenun.
-   \[DIUTAMAKAN\] Potensi pelestarian pengetahuan dan dokumentasi.
-   \[OPSIONAL\] Rencana pengembangan berikutnya.
-   \[OPSIONAL\] Indikator dampak yang realistis dan dapat diukur.

## 10.1 Bukti untuk menjelaskan masalah

Cari bukti atau informasi tentang: - Keterbatasan dokumentasi digital
penenun dan karya. - Kesulitan menemukan informasi Ulos yang
terstruktur. - Keterbatasan visibilitas cerita dan identitas penenun. -
Tantangan regenerasi keterampilan menenun, jika ada data. - Tantangan
pemasaran dan akses informasi, jika ada bukti. - Perubahan penggunaan
Ulos dalam kehidupan kontemporer.

Jangan mengklaim masalah berlaku pada semua penenun tanpa bukti. Gunakan
wawancara, observasi, dokumen, atau penelitian yang relevan.

## 10.2 Indikator dampak

-   Jumlah Ulos yang terdokumentasi.
-   Jumlah profil penenun yang dipublikasikan dengan izin.
-   Jumlah rumah tenun yang terdokumentasi.
-   Jumlah materi edukasi yang diverifikasi.
-   Jumlah aset foto dan video berizin.
-   Jumlah kunjungan atau interaksi katalog setelah website berjalan,
    jika analitik diterapkan.

Bedakan target, hasil aktual, dan proyeksi. Jangan menampilkan target
sebagai capaian.

# 11. IMAGE ASSET MANIFEST

**Dokumen pendamping:** `06_IMAGE_ASSET_MANIFEST.md`

## 11.1 Jenis aset

  Kode                 Jenis aset               Penggunaan
  -------------------- ------------------------ -----------------------------
  HOME-HERO            Foto hero Beranda        Background pembuka
  HOME-STORY           Foto storytelling        Section Beranda
  ULOS-COVER           Foto seluruh kain        Kartu katalog dan detail
  ULOS-MACRO           Detail motif/tekstur     Section detail Ulos
  ULOS-PROCESS         Proses pembuatan         Detail Ulos atau proses
  ARTISAN-PORTRAIT     Portrait penenun         Lingkaran profil dan detail
  ARTISAN-BACKGROUND   Penenun saat bekerja     Background cinematic
  ARTISAN-WORK         Foto aktivitas           Cerita penenun
  HOUSE-COVER          Foto rumah tenun         Detail rumah tenun
  HOUSE-INTERIOR       Foto ruang produksi      Galeri rumah tenun
  PROCESS-STEP         Foto tahap menenun       Proses Menenun
  LEARN-DETAIL         Foto pendukung edukasi   Belajar Ulos
  ABOUT-HERO           Foto identitas budaya    Tentang Platform

## 11.2 Informasi wajib setiap aset

-   \[WAJIB\] ID aset.
-   \[WAJIB\] Nama file asli.
-   \[WAJIB\] Lokasi file.
-   \[WAJIB\] Halaman dan section tujuan.
-   \[WAJIB\] Entitas terkait.
-   \[WAJIB\] Sumber foto atau pemilik.
-   \[WAJIB\] Status izin penggunaan.
-   \[DIUTAMAKAN\] Resolusi dan ukuran file.
-   \[DIUTAMAKAN\] Orientasi.
-   \[DIUTAMAKAN\] Focal point.
-   \[DIUTAMAKAN\] Alt text.
-   \[DIUTAMAKAN\] Caption dan kredit.
-   \[OPSIONAL\] Versi crop desktop dan mobile.

## 11.3 Aturan fotografi

-   Gunakan foto asli dan relevan.
-   Jangan menampilkan foto penenun yang salah pada profil tertentu.
-   Jangan menganggap foto internet bebas digunakan.
-   Simpan sumber dan izin.
-   Hindari foto buram, terlalu kecil, atau watermark yang mengganggu.
-   Siapkan gambar portrait dan landscape sesuai kebutuhan.
-   Background harus memiliki ruang cukup untuk teks.
-   Tentukan focal point agar wajah, kain, dan aktivitas tidak tertutup.
-   Gunakan overlay dan blur secara selektif.
-   Jangan menghasilkan foto AI yang diklaim sebagai dokumentasi penenun
    atau rumah tenun nyata.

## 11.4 Template aset

``` yaml
id: ARTISAN-001-PORTRAIT
file_name: ""
file_path: ""
entity_id: "ARTISAN-001"
page: "/penenun-hita"
section: "portrait-navigation"
role: "portrait"
photographer_or_owner: ""
source: ""
permission_status: "belum dikonfirmasi"
width: null
height: null
orientation: ""
focal_point: "50% 50%"
alt_text: ""
caption: ""
credit: ""
desktop_crop: ""
mobile_crop: ""
status: "belum diverifikasi"
notes: ""
```

# 12. DESIGN SYSTEM: BATAK HERITAGE GOLD

**Dokumen pendamping:** `07_DESIGN_SYSTEM.md`

## 12.1 Arah desain

**Contemporary Batak Heritage Editorial**

Cinematic Photography · Cultural Storytelling · Premium Editorial ·
Minimalist Navigation.

Karakter: - Editorial dan berkelas. - Mengutamakan fotografi autentik. -
Memiliki ruang kosong cukup. - Komposisi asimetris secara terukur. -
Identitas budaya melalui konten dan detail visual yang tepat. - Tidak
terlihat seperti template marketplace. - Tidak menggunakan widget
generik tanpa fungsi. - Tidak menggunakan ornamen Batak sembarangan.

## 12.2 Palet warna awal

  Nama warna            Hex         Fungsi
  --------------------- ----------- -------------------------
  Obsidian              `#100E0C`   Background utama
  Dark Brown            `#241A13`   Background sekunder
  Batak Heritage Gold   `#C6A15B`   Emas identitas utama
  Woven Gold            `#E2C078`   Highlight dan interaksi
  Antique Bronze        `#8A642E`   Aksen emas gelap
  Warm Ivory            `#E8DFCF`   Section terang
  Ulos Red              `#963F37`   Aksen budaya terbatas
  Charcoal              `#282522`   Teks pada latar terang

Warna ini adalah baseline. Uji kontras dan keterbacaan sebelum
implementasi final. Jangan menjadikan emas sebagai warna semua teks atau
semua bidang.

## 12.3 Logo dan tipografi

-   Gunakan logo master PARTONUN dari pemilik project.
-   Pertahankan bentuk, proporsi, dan background transparan.
-   Jangan membuat ulang simbol menggunakan CSS atau SVG.
-   Bodoni Moda: wordmark PARTONUN sesuai referensi yang disetujui.
-   DM Serif Display: headline dan judul editorial.
-   Manrope: body, navigasi, label, dan informasi antarmuka.
-   Tagline mengikuti komposisi identitas yang disetujui.
-   Jangan mengganti logo atau font identitas tanpa persetujuan.

## 12.4 Background photography

Sediakan wadah visual untuk: - Hero background. - Section background. -
Full-width photography. - Macro texture background. - Portrait
background. - Editorial gallery. - Sticky image storytelling.

Setiap wadah memiliki ID aset, tujuan visual, rasio, overlay, focal
point, crop desktop/mobile, kontras teks, dan alt text atau perlakuan
dekoratif yang tepat.

# 13. ART DIRECTION PER HALAMAN

**Dokumen pendamping:** `08_PAGE_ART_DIRECTION.md`

## 13.1 Beranda

-   Hero fotografi sinematik.
-   Headline editorial.
-   Pengenalan PARTONUN.
-   Jalur eksplorasi menuju Ulos Hita dan Penenun Hita.
-   Koleksi dan cerita yang memiliki data.
-   Perpaduan section gelap dan terang.

## 13.2 Ulos Hita

-   Katalog editorial, bukan grid marketplace.
-   Carousel portrait bertingkat sesuai keputusan sebelumnya.
-   Foto kain menjadi pusat perhatian.
-   Filter hanya jika terdapat minimal dua jenis nyata.
-   Pencarian hanya jika jumlah koleksi dan kebutuhan mendukung.
-   Tidak ada cart, checkout, atau tombol transaksi.

## 13.3 Detail Ulos

-   Foto utama dominan.
-   Detail tekstur dan motif.
-   Sembilan informasi sesuai struktur PRD V3.
-   Narasi budaya dan fungsi.
-   Hubungan dengan penenun.
-   Koleksi lain jika tersedia.
-   Informasi yang belum terverifikasi tidak boleh dikarang.

## 13.4 Penenun Hita

-   Pertahankan circular portrait navigation vertikal melengkung yang
    sudah tersedia.
-   Lingkaran aktif dan nonaktif.
-   Garis penghubung emas.
-   Panel deskripsi di samping.
-   Foto penenun menyatu dengan background.
-   Background portrait atau aktivitas menenun.
-   Pergantian profil memperbarui foto, nama, dan cerita.
-   Jangan membangun ulang sistem lingkaran jika cukup menambahkan data.
-   Data penenun harus dinamis dari sumber terstruktur.

## 13.5 Detail Penenun

-   Portrait atau foto aktivitas dominan.
-   Cerita perjalanan.
-   Keahlian dan ciri khas karya.
-   Galeri dokumentasi.
-   Ulos yang dibuat.
-   Rumah tenun terkait.
-   Kutipan hanya jika berasal dari narasumber dan mendapat izin.

## 13.6 Detail Rumah Tenun

-   Foto utama tempat.
-   Galeri asimetris.
-   Cerita rumah tenun.
-   Ciri khas produksi.
-   Penenun terkait.
-   Ulos yang dihasilkan.
-   Informasi kunjungan jika tersedia dan terverifikasi.

## 13.7 Belajar Ulos

-   Layout editorial edukatif.
-   Materi tersusun berdasarkan topik.
-   Foto motif dan detail kain.
-   Glosarium jika data tersedia.
-   Sumber materi yang dapat diperiksa.

## 13.8 Proses Menenun

-   Tahapan proses yang terverifikasi.
-   Fotografi alat, bahan, tangan, dan proses.
-   Timeline atau storytelling bertahap.
-   Video jika tersedia.
-   Istilah lokal sesuai penjelasan penenun.

## 13.9 Tentang Platform

-   Latar belakang masalah.
-   Tujuan platform.
-   Pendekatan Smart Digital Economy.
-   Pendekatan Sociopreneurship.
-   Nilai untuk penenun, komunitas, dan generasi penerus.
-   Batasan bahwa platform bukan marketplace transaksi.

# 14. SCROLL CHOREOGRAPHY DAN CINEMATIC ANIMATION

**Dokumen pendamping:** `09_MOTION_SCROLL_CHOREOGRAPHY.md`

Animasi yang dapat dipertimbangkan: - Scroll reveal untuk teks dan
foto. - Image mask reveal. - Sticky storytelling. - Parallax ringan. -
Text entrance. - Gallery transition. - Background image transition. -
Circular portrait interaction. - Section transition. - Hover yang halus
dan fungsional.

Ketentuan: - Setiap animasi harus mendukung informasi atau orientasi
pengguna. - Jangan menganimasikan semua elemen. - Hindari gerakan
berlebihan. - Jangan mengunci scroll tanpa alasan kuat. - Hormati
`prefers-reduced-motion`. - Perhatikan performa perangkat mobile. -
Hindari layout shift ketika gambar dimuat. - Gunakan teknologi dan
dependency yang kompatibel dengan project. - Audit kebutuhan sebelum
menambah library animasi baru.

## 14.1 Branded Page Transition

Konsep yang disetujui untuk diuji: - Transisi antarrute internal
menampilkan identitas PARTONUN di tengah layar. - Background Obsidian. -
Logo master PARTONUN. - Aksen Batak Heritage Gold. - Durasi visual
target sekitar 300 ms. - Efek opacity dan scale yang halus. - Halaman
tujuan masuk dengan reveal yang sesuai. - Jangan menambahkan jeda buatan
jika halaman sudah siap. - Tidak digunakan untuk anchor scroll atau
interaksi non-navigasi halaman. - Hormati reduced motion. - Jangan
mengganggu back/forward navigation, aksesibilitas, atau loading state.

Alternatif lebih ringan: logo kecil muncul sebagai branded wipe atau
overlay singkat. Pilih setelah prototipe diuji.

# 15. RESPONSIVE SPECIFICATION

**Dokumen pendamping:** `10_RESPONSIVE_SPECIFICATION.md`

Ukuran pengujian minimum: - 360 px. - 390 px. - 768 px. - 1024 px. -
1440 px. - 1920 px.

Tentukan per halaman: - Struktur grid. - Ukuran headline. - Lebar
teks. - Rasio foto. - Focal point. - Urutan konten. - Navigasi. - Target
sentuh. - Posisi CTA. - Perilaku carousel. - Perilaku background. -
Animasi yang dipertahankan atau disederhanakan.

Aturan: - Jangan sekadar mengecilkan layout desktop. - Tidak boleh ada
horizontal overflow. - Target sentuh minimal 44 px. - Teks harus
terbaca. - Foto mempertahankan subjek utama. - Mobile boleh memiliki
crop dan komposisi foto tersendiri. - Konten tidak boleh hilang hanya
karena layar lebih kecil.

# 16. PROMPT IMPLEMENTASI PER HALAMAN

**Dokumen pendamping:** `11_PAGE_IMPLEMENTATION_PROMPTS.md`

Setiap prompt Claude Code harus memuat: 1. Tujuan halaman. 2. Route. 3.
Masalah pengguna yang dijawab. 4. Data yang ditampilkan. 5. Sumber data.
6. Komponen yang sudah tersedia dan harus dipertahankan. 7. Struktur
layout. 8. Foto dan ID aset. 9. Palet warna. 10. Tipografi. 11. Animasi
dan interaksi. 12. Responsivitas. 13. Aksesibilitas. 14. Batasan yang
tidak boleh dilanggar. 15. Kriteria penerimaan. 16. Pengujian lint,
build, dan regresi.

Pengerjaan dilakukan bertahap per halaman. Jangan meminta Claude
membangun ulang seluruh project sekaligus.

# 17. HUBUNGAN ANTARDATA

Gunakan ID stabil: - `ULOS-001` - `ARTISAN-001` - `HOUSE-001` -
`PROCESS-001` - `LEARN-001` - `HOME-HERO-01`

Relasi yang diperbolehkan: - Satu Ulos dapat terkait dengan satu atau
lebih penenun jika ada bukti. - Satu penenun dapat menghasilkan beberapa
jenis Ulos. - Satu rumah tenun dapat memiliki beberapa penenun. - Satu
rumah tenun dapat menghasilkan beberapa jenis Ulos. - Satu foto dapat
terkait dengan entitas dan section penggunaan. - Satu cerita dapat
memiliki beberapa sumber.

Jangan menghubungkan entitas hanya berdasarkan kemiripan nama. Hubungan
harus didukung data.

# 18. SUMBER DATA DAN VALIDASI

Sumber yang dapat dicari: - Wawancara langsung dengan penenun. -
Wawancara pengelola rumah tenun. - Observasi proses menenun. - Foto dan
arsip milik penenun atau komunitas. - Buku dan penelitian akademik. -
Museum dan lembaga kebudayaan. - Pemerintah daerah dan instansi
kebudayaan. - Arsip Warisan Budaya Takbenda. - Artikel ilmiah yang
relevan. - Dokumentasi kegiatan budaya.

Makna motif, fungsi adat, istilah lokal, dan sejarah dapat memiliki
variasi. Jangan menampilkan satu penafsiran sebagai satu-satunya
kebenaran jika sumber menunjukkan variasi.

## 18.1 Referensi awal untuk penelusuran

Referensi ini merupakan titik awal, bukan pengganti verifikasi lapangan:

1.  Indonesia Travel, "Ulos: Kain Tradisional Batak yang Penuh Makna dan
    Filosofi"\
    https://www.indonesia.travel/id/id/travel-ideas/heritage/tak-hanya-memesona-5-kain-ulos-khas-danau-toba-ini-juga-sarat-makna

2.  Indonesia Travel, "Mengenal Filosofi Hingga Jenis Kain Ulos
    Tradisional Batak"\
    https://www.indonesia.travel/id/id/travel-ideas/culture/kain-tenun-ulos-khas-batak

3.  Repositori Kemendikdasmen, "Buku Panduan Penetapan Warisan Budaya
    Takbenda Indonesia Tahun 2014"\
    https://repositori.kemendikdasmen.go.id/12378/1/Buku%20Panduan%20Penetapan%20Warisan%20Budaya%20Takbenda%20Indonesia%20Tahun%202014.pdf

4.  Pemerintah Provinsi Sumatera Utara, dokumentasi Galeri Ulos Hutaraja
    dan proses pembuatan Ulos\
    https://sumutprov.go.id/artikel/artikel/kunjungi-galeri-ulos-hutaraja-kahiyang-ayu-terkesima-bagaimana-cara-pembuatan-ulos

5.  Jurnal Patrawidya, "Ulos Sebagai Kearifan Budaya Batak Menuju
    Warisan Dunia (World Heritage)"\
    https://patrawidya.kemenbud.go.id/index.php/patrawidya/article/download/346/196/739

6.  Google Arts & Culture, "Kisah Tenun Indonesia: Ulos" oleh Unit
    Pengelola Museum Seni\
    https://artsandculture.google.com/story/kisah-tenun-indonesia-ulos-unit-pengelola-museum-seni/iAVxZ2f7TrgoKw?hl=id

Gunakan referensi tersebut untuk menemukan istilah, kategori, sejarah,
dan pertanyaan lanjutan. Cocokkan informasi dengan penenun, komunitas,
sumber akademik, dan konteks daerah.

# 19. DAFTAR PENGUMPULAN DATA: APA YANG HARUS DICARI

## Prioritas A: Data inti

-   [ ] Daftar nama Ulos yang benar-benar akan ditampilkan.
-   [ ] Foto utama setiap Ulos.
-   [ ] Deskripsi singkat setiap Ulos.
-   [ ] Data sembilan informasi setiap Ulos sejauh tersedia.
-   [ ] Nama penenun yang bersedia dipublikasikan.
-   [ ] Foto portrait penenun.
-   [ ] Cerita singkat setiap penenun.
-   [ ] Foto aktivitas menenun.
-   [ ] Nama rumah tenun yang akan ditampilkan.
-   [ ] Deskripsi rumah tenun.
-   [ ] Foto tempat atau aktivitas produksi.
-   [ ] Sumber informasi dan izin penggunaan foto.

## Prioritas B: Data yang sangat meningkatkan kualitas

-   [ ] Detail motif Ulos.
-   [ ] Makna motif dari sumber yang dapat dipertanggungjawabkan.
-   [ ] Bahan dan jenis benang.
-   [ ] Jenis pewarna.
-   [ ] Teknik dan alat menenun.
-   [ ] Lama pengerjaan contoh Ulos.
-   [ ] Hubungan penenun dengan rumah tenun.
-   [ ] Hubungan penenun dengan koleksi Ulos.
-   [ ] Sejarah penenun.
-   [ ] Sejarah rumah tenun.
-   [ ] Dokumentasi proses dari awal hingga akhir.
-   [ ] Foto macro tekstur Ulos.
-   [ ] Kutipan penenun dengan izin.

## Prioritas C: Data tambahan

-   [ ] Video penenun sedang bekerja.
-   [ ] Rekaman wawancara.
-   [ ] Foto generasi penerus.
-   [ ] Dokumentasi pewarisan keterampilan.
-   [ ] Foto alat tenun tradisional.
-   [ ] Dokumentasi kegiatan budaya.
-   [ ] Arsip atau foto lama.
-   [ ] Perubahan desain Ulos dari masa ke masa.
-   [ ] Cerita tantangan ekonomi penenun.
-   [ ] Cerita regenerasi penenun.
-   [ ] Informasi kunjungan rumah tenun.
-   [ ] Penghargaan atau pencapaian terverifikasi.

## Prioritas D: Materi identitas platform

-   [ ] Rumusan masalah dengan bukti.
-   [ ] Tujuan PARTONUN.
-   [ ] Sasaran pengguna.
-   [ ] Manfaat untuk penenun.
-   [ ] Manfaat untuk masyarakat dan generasi muda.
-   [ ] Hubungan dengan Smart Digital Economy.
-   [ ] Hubungan dengan Sociopreneurship.
-   [ ] Indikator dampak terukur.
-   [ ] Referensi visual final.
-   [ ] Referensi tipografi resolusi tinggi jika tersedia.
-   [ ] Foto hero utama.
-   [ ] Foto pendukung setiap halaman.

# 20. FORMAT PENGUMPULAN DATA SEDERHANA

Gunakan spreadsheet jika lebih mudah.

## 20.1 Daftar Ulos

  ID         Nama Ulos   Deskripsi   Foto   Penenun   Sumber   Status
  ---------- ----------- ----------- ------ --------- -------- -------------------
  ULOS-001                                                     Belum dikumpulkan
  ULOS-002                                                     Belum dikumpulkan

## 20.2 Daftar Penenun

  ID            Nama   Wilayah   Cerita   Portrait   Foto aktivitas   Izin
  ------------- ------ --------- -------- ---------- ---------------- --------------------
  ARTISAN-001                                                         Belum dikonfirmasi
  ARTISAN-002                                                         Belum dikonfirmasi

## 20.3 Daftar Rumah Tenun

  ID          Nama   Wilayah   Sejarah   Foto   Penenun terkait   Sumber
  ----------- ------ --------- --------- ------ ----------------- -------------------
  HOUSE-001                                                       Belum dikumpulkan
  HOUSE-002                                                       Belum dikumpulkan

## 20.4 Daftar aset visual

  ----------------------------------------------------------------------------------------------
  ID aset                Nama file  Jenis foto Entitas       Kredit     Izin       Status
  ---------------------- ---------- ---------- ------------- ---------- ---------- -------------
  HOME-HERO-01                      Hero       Beranda                             Belum
                                                                                   dikumpulkan

  ULOS-001-HERO                     Foto Ulos  ULOS-001                            Belum
                                                                                   dikumpulkan

  ARTISAN-001-PORTRAIT              Portrait   ARTISAN-001                         Belum
                                                                                   dikumpulkan
  ----------------------------------------------------------------------------------------------

# 21. JIKA DATA TIDAK LENGKAP

-   Jika belum ada foto rumah tenun, gunakan placeholder pengembangan
    yang jelas.
-   Jika belum ada sejarah penenun, tampilkan profil dasar yang sudah
    terverifikasi.
-   Jika makna motif belum ditemukan, jangan menebak.
-   Jika harga tidak tersedia, hilangkan atau tandai belum tersedia
    sesuai keputusan desain.
-   Jika hubungan penenun dengan Ulos belum terverifikasi, jangan
    membuat relasi.
-   Jika foto belum memiliki izin, jangan publikasikan.
-   Jika koleksi masih sedikit, jangan membuat kartu fiktif.
-   Jika konten belum cukup, gunakan ruang editorial dan informasi yang
    tersedia, bukan teks pengisi yang mengaku sebagai fakta.

Placeholder pengembangan harus dibedakan dari konten produksi.

# 22. KRITERIA PENERIMAAN MASTER CONTENT

-   [ ] Semua entitas memiliki ID konsisten.
-   [ ] Setiap Ulos memiliki nama dan data dasar.
-   [ ] Sembilan bidang Detail Ulos dipetakan sesuai PRD V3.
-   [ ] Setiap penenun memiliki identitas dan izin publikasi yang jelas.
-   [ ] Rumah tenun memiliki data dasar.
-   [ ] Hubungan Ulos, penenun, dan rumah tenun dapat ditelusuri.
-   [ ] Setiap foto memiliki ID dan pemetaan penggunaan.
-   [ ] Sumber informasi dicatat.
-   [ ] Informasi yang belum tersedia ditandai.
-   [ ] Tidak ada klaim yang dibuat-buat.
-   [ ] Konten tidak mengubah batasan produk.
-   [ ] Claude Code dapat memahami data tanpa menebak.

Tidak semua kolom opsional harus terisi. Yang penting data minimum,
sumber, relasi, dan batasan sudah jelas.

# 23. ATURAN UNTUK CLAUDE CODE

1.  Baca `MASTER_PRD_ULOS_HITA_INVOFEST_2026_V3.md` terlebih dahulu.
2.  Baca `MASTER_PARTONUN.md` dan dokumen pendamping yang dirujuk.
3.  Audit struktur repository sebelum mengubah kode.
4.  Pertahankan route, data, dan komponen yang sudah disetujui.
5.  Jangan mengarang data, foto, sejarah, kutipan, harga, atau
    statistik.
6.  Jangan mengubah platform menjadi marketplace.
7.  Jangan menambahkan login, dashboard, checkout, atau backend.
8.  Jangan membuat ulang logo master PARTONUN.
9.  Gunakan data dan gambar berdasarkan ID yang tercatat.
10. Jika aset tidak ditemukan, laporkan dan jangan menggantinya dengan
    aset yang tidak berkaitan.
11. Implementasikan per halaman sesuai prompt yang disetujui.
12. Uji desktop, tablet, mobile, aksesibilitas, performa, lint, dan
    build.
13. Jangan melakukan perubahan besar di luar cakupan prompt.
14. Laporkan file yang dibuat, diubah, dan dihapus.
15. Jangan commit tanpa persetujuan pemilik project.

# 24. LOG KEPUTUSAN DAN PERUBAHAN

  ---------------------------------------------------------------------------
  Tanggal           Keputusan/perubahan   Dampak dokumen    Status
  ----------------- --------------------- ----------------- -----------------
  2026-11-11        PARTONUN menjadi      Semua halaman dan Disetujui
                    identitas publik      branding          

  2026-11-11        Contemporary Batak    Design system     Disetujui
                    Heritage Editorial                      

  2026-11-11        Batak Heritage Gold   Design system     Disetujui
                    menjadi warna                           
                    identitas utama                         

  2026-11-11        Background            Asset manifest    Disetujui
                    photography dan       dan art direction 
                    cinematic                               
                    storytelling                            

  2026-11-11        Scroll choreography   Motion            Disetujui
                    dan motion design     specification     

  2026-11-11        Responsive desktop,   Responsive        Disetujui
                    tablet, mobile        specification     

  2026-11-11        Branded page          Page transition   Disetujui untuk
                    transition sekitar    system            diuji
                    300 ms                                  

  2026-11-11        Circular portrait     Art direction     Disetujui
                    Penenun Hita          Penenun Hita      
                    dipertahankan                           
  ---------------------------------------------------------------------------

Tambahkan keputusan baru hanya setelah disetujui pemilik project.

# 25. LANGKAH KERJA SETELAH DOKUMEN INI

1.  Pemilik project mengumpulkan data Ulos, penenun, rumah tenun, foto,
    dan sumber.
2.  Data mentah diperiksa dan dikelompokkan.
3.  Dokumen pendamping diisi berdasarkan data nyata.
4.  Relasi antardata dan pemetaan gambar diverifikasi.
5.  Design system dan art direction diselesaikan.
6.  Motion, scroll, page transition, dan responsivitas dirinci.
7.  Prompt implementasi per halaman disiapkan.
8.  Claude Code mengimplementasikan halaman secara bertahap.
9.  Setiap hasil dievaluasi sebelum lanjut ke halaman berikutnya.
10. Final QA dilakukan sebelum deployment.

**Prinsip penutup:** PARTONUN harus kuat pada akurasi budaya,
dokumentasi penenun, kualitas fotografi, identitas visual, dan
pengalaman digital. Kelengkapan data tidak boleh dicapai dengan
mengarang informasi. Mulai dari data yang benar-benar tersedia, lalu
kembangkan secara bertahap.
