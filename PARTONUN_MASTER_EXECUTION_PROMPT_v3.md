# MASTER EXECUTION PROMPT v3.0

# PARTONUN --- BUILD THE COMPLETE WEBSITE

Kamu adalah **Senior Product Designer, Creative Director, UX Architect,
Frontend Engineer, Motion Designer, dan QA Engineer** yang bekerja pada
satu proyek yang sama. Tugasmu bukan hanya memberi saran atau membuat
mockup. Tugasmu adalah mengaudit repository yang sudah ada, menerapkan
desain, membangun seluruh halaman, menghubungkan data dan aset lokal,
memastikan responsivitas, lalu menguji hasilnya sampai dapat dijalankan.

**Jangan membuat project baru. Jangan berhenti hanya pada rencana.
Kerjakan langsung di repository yang sudah ada setelah audit awal.**

------------------------------------------------------------------------

## 0. KONTEKS DAN KEPUTUSAN TERBARU

Nama platform: **PARTONUN**\
Tagline: **Menghidupkan Cerita, Merawat Warisan Tenun.**\
Tema kompetisi: **Digital Economy & Sociopreneurship (SDG 8 & SDG
10).**\
Objek utama: **Ulos Batak.**

Arah visual: **Contemporary Batak Heritage Editorial**\
*Cinematic photography · Cultural storytelling · Premium editorial ·
Minimalist navigation.*

PARTONUN adalah platform katalog digital, dokumentasi budaya, edukasi,
dan storytelling yang memperkenalkan Ulos Batak, penenun, rumah
tenun/galeri, dan proses menenun. Platform membantu pengunjung memahami
nilai budaya dan proses di balik kain serta mengenali pihak yang membuat
atau menyediakan Ulos.

### Keputusan paling baru tentang Rumah Tenun

**RUMAH TENUN TETAP DIBANGUN.**\
Jangan mengikuti instruksi lama dalam paket v2 yang sempat menghapus
Rumah Tenun dan menggantinya dengan halaman Toko Ulos. Keputusan v2
tersebut sudah dibatalkan.

Gunakan tiga profil utama dari `08_TOKO_ULOS_TENUN.md`: 1. Dame Ulos. 2.
Galeri Ulos Sianipar. 3. Tobatenun dan rumah komunitas Jabu Bonang.

Buat section **"Rumah Tenun & Galeri Ulos Pilihan"** pada halaman
Penenun Hita dan halaman detail melalui route `/rumah-tenun/[slug]`,
sesuai PRD V3.

Untuk tahap ini **jangan membuat route publik terpisah `/toko-ulos`**.
Informasi nama toko, profil usaha, lokasi, kontak, dan koleksi disajikan
pada profil Rumah Tenun/Galeri Ulos. Ini mencegah duplikasi konten dan
entitas.

### Batasan produk yang tidak boleh dilanggar

PARTONUN bukan marketplace. Dilarang menambahkan: - Login atau
registrasi. - Dashboard admin atau pengguna. - Backend, database, atau
API server. - Cart, wishlist, checkout, payment gateway, pemesanan, dan
manajemen pesanan. - Tombol "Beli sekarang", "Tambah ke keranjang", atau
CTA transaksi. - Data produk, penenun, toko, sejarah, harga, motif,
kutipan, atau statistik rekaan.

Harga boleh ditampilkan sebagai informasi referensi jika sumber,
tanggal, cakupan produk, dan izin jelas. Harga bukan penawaran transaksi
dan harus diberi konteks. Jika belum layak tampil, simpan dalam data
sumber tetapi sembunyikan pada UI.

------------------------------------------------------------------------

## 1. WAJIB BACA SEMUA DOKUMEN SEBELUM CODING

Cari dokumen berikut di repository. Periksa juga folder `docs/`,
`content/`, atau folder dokumentasi yang sudah digunakan proyek. Jangan
membuat salinan data baru sebelum memeriksa apakah dokumen sudah ada.

1.  `MASTER_PRD_ULOS_HITA_INVOFEST_2026_V3.md`
2.  `MASTER_PARTONUN.md`
3.  `PARTONUN_MASTER_IMPLEMENTATION_PACK_v3.md`
4.  `01_ULOS_MASTER_DATA.md`
5.  `PARTONUN_Profil_5_Penenun_Ulos.md`
6.  `02_PENENUN_REFERENSI_PUBLIK.md`
7.  `03_RUMAH_TENUN_MASTER_DATA.md`
8.  `04_BELAJAR_ULOS.md`
9.  `05_PROSES_MENENUN.md`
10. `06_IMAGE_ASSET_MANIFEST.md`
11. `07_KONTEN_BERANDA_DAN_TENTANG_v2.md`
12. `08_TOKO_ULOS_TENUN.md`
13. `99_DAFTAR_SUMBER (1).md`

Jika nama file sedikit berbeda, cari padanan yang sudah ada. Jangan
menghapus atau menimpa file sumber. `08_TOKO_ULOS_TENUN.md` adalah
sumber utama untuk tiga profil Rumah Tenun/Galeri Ulos pilihan. Jika di
project masih bernama `08_TOKO_ULOS_TENUN (2).md`, gunakan file itu dan
jangan membuat duplikasi yang membingungkan.

Jika dokumen penting tidak ditemukan, laporkan file yang hilang,
lanjutkan menggunakan data yang tersedia, dan jangan mengarang
penggantinya.

------------------------------------------------------------------------

## 2. TAHAP PERTAMA: AUDIT REPOSITORY

Sebelum mengubah kode:

1.  Periksa direktori kerja dan pastikan repository yang benar.
2.  Periksa `package.json`, framework, versi Next.js, router, CSS
    framework, dependensi, dan perintah yang tersedia.
3.  Periksa struktur `app/` atau `pages/`, komponen, layout, route,
    data, styles, fonts, dan assets.
4.  Periksa status Git. Jangan melakukan commit.
5.  Periksa halaman yang sudah jadi dan komponen yang sudah berfungsi.
    Pertahankan bagian yang baik.
6.  Periksa file logo, referensi logo dan tipografi, serta aset visual
    yang disediakan.
7.  Periksa semua gambar di `public/images/`, termasuk folder:
    -   `public/images/ulos/`
    -   `public/images/penenun/`
    -   `public/images/backgrounds/` jika tersedia
    -   `public/images/RUMAH_TENUN/`
    -   aset lain yang tercatat dalam manifest.
8.  Periksa apakah ada server development yang sedang berjalan. Jangan
    menghentikannya tanpa kebutuhan.
9.  Jangan menghapus cache, folder, atau aset secara destruktif. Jangan
    menjalankan perintah reset atau clean yang berisiko.

Setelah audit, buat ringkasan singkat internal lalu langsung lanjutkan
implementasi. **Jangan berhenti untuk meminta persetujuan atas setiap
langkah.** Minta konfirmasi hanya jika ada konflik data identitas, file
penting yang hilang, atau tindakan yang berisiko menghapus pekerjaan
pengguna.

------------------------------------------------------------------------

## 3. INFORMATION ARCHITECTURE DAN ROUTE FINAL

Gunakan Next.js App Router jika project saat ini memang memakai Next.js
App Router. Pertahankan stack yang telah dipakai kecuali ada alasan
teknis kuat.

Route final:

``` text
/
 /ulos-hita
 /ulos-hita/[slug]
 /penenun-hita
 /penenun-hita/[slug]
 /rumah-tenun/[slug]
 /belajar-ulos
 /proses-menenun
 /tentang-platform
```

Jangan menambahkan `/toko-ulos` sebagai route terpisah pada tahap ini.
Tiga entitas toko/galeri yang disediakan masuk ke section Rumah Tenun &
Galeri Ulos Pilihan dan detail `/rumah-tenun/[slug]`.

Nama halaman: - Beranda - Ulos Hita - Detail Ulos - Penenun Hita -
Detail Penenun - Detail Rumah Tenun - Belajar Ulos - Proses Menenun -
Tentang Platform

Hanya nama **Ulos Hita** dan **Penenun Hita** yang memakai istilah
Batak. Jangan mengubah nama halaman lain.

------------------------------------------------------------------------

## 4. MASTER DATA DAN HUBUNGAN ANTARHALAMAN

### 4.1 Katalog 10 jenis Ulos

Gunakan `01_ULOS_MASTER_DATA.md` sebagai sumber utama. Jangan menyusun
ulang makna atau karakteristik dengan tebakan. Sepuluh koleksi: 1. Ulos
Pinuncaan. 2. Ulos Ragidup. 3. Ulos Ragi Hotang. 4. Ulos Sibolang. 5.
Ulos Sitoluntuho / Sitolu Tuho. 6. Ulos Mangiring. 7. Ulos Bintang
Maratur. 8. Ulos Sadum. 9. Ulos Antak-Antak. 10. Ulos Suri-suri /
Suri-suri Ganjang.

Setiap detail Ulos mengikuti sembilan bidang yang ditentukan master: -
Identitas/jenis. - Bahan. - Pewarna. - Teknik pembuatan. - Kerumitan
motif. - Makna motif. - Lama pengerjaan. - Identitas
pengrajin/penenun. - Harga.

Bidang yang belum tersedia harus ditulis "Informasi belum tersedia" atau
tidak ditampilkan jika bersifat opsional. Jangan mengisi semua produk
dengan data umum jika data khususnya tidak ada. Bedakan karakter umum
satu jenis Ulos dari detail satu kain tertentu.

### 4.2 Lima profil penenun

Gunakan `PARTONUN_Profil_5_Penenun_Ulos.md` dan foto di
`public/images/penenun/`. Nama yang tercatat dalam file profil: - Elida
Boru Siahaan. - Evi Boru Simanjuntak. - Candro Fernando Sitorus. - Renny
Katrina Manurung. - Op Valen br Situmorang.

**Penting:** cocokkan setiap foto dengan nama yang benar berdasarkan
file, dokumen, dan konfirmasi pemilik proyek. Ada potensi
ketidaksesuaian antara nama kelima pada dokumen profil dan nama file
foto yang tersedia. Jangan menganggap `op adrien simarmata.jpg` otomatis
merupakan Op Valen br Situmorang. Jangan memasangkan foto dan identitas
jika belum pasti. Jangan membuat kutipan langsung yang tidak tersedia.

Usia dari artikel adalah usia saat artikel diterbitkan, bukan usia
sekarang. Tampilkan tahun sumber. Jangan menghitung usia sekarang tanpa
tanggal lahir yang terverifikasi.

Profil Renny/Renny Katrina Manurung berlokasi di Tarutung, sesuai
koreksi pemilik proyek. Jangan mengubahnya menjadi lokasi lain tanpa
bukti.

### 4.3 Rumah Tenun & Galeri Ulos pilihan

Gunakan `08_TOKO_ULOS_TENUN.md` sebagai sumber utama untuk tiga profil
ini. Buat data terstruktur dan halaman detail.

#### A. Dame Ulos

Slug: `dame-ulos`

Data dari dokumen sumber: - Pemilik: Renny Katrina Manurung. - Lokasi:
Tarutung, Kabupaten Tapanuli Utara. - Alamat: Galeri Dame Ulos,
Saitnihuta, Hutatoruan V, Kecamatan Tarutung, Tapanuli Utara, Sumatera
Utara. - Menenun Ulos Batak Toba sejak 2014. - WhatsApp:
`0852-9776-9912`. - Instagram: `@dameulos`,
https://www.instagram.com/dameulos/ - Teknik: gedogan pada produk
premium dan pewarna alam. - Kisaran harga dalam dokumen: Rp500
ribu--Rp15 juta per helai. Jangan tampilkan sebagai harga terkini tanpa
konfirmasi. - Cerita, sejarah, contoh produk, dan sumber lengkap ada
dalam `08_TOKO_ULOS_TENUN.md`.

#### B. Galeri Ulos Sianipar

Slug: `galeri-ulos-sianipar`

Data dari dokumen sumber: - Pemilik: Robert Maruli Tua Sianipar. -
Lokasi: Medan. - Alamat: Jl. A.R. Hakim Gg. Pendidikan No. 130--134,
Medan, Sumatera Utara. - Berdiri 28 Juni 1992. - WhatsApp:
`0812-6584-6702`. - Telepon: `(061) 7330493`. - Email:
`sianiparulos@gmail.com`. - Instagram: `@galeriulos_sianipar`,
https://www.instagram.com/galeriulos_sianipar/ - Website:
https://galeryulossianipar.com - Jam pusat tenun pada sumber:
08.00--17.00. Konfirmasi sebelum menyebut sebagai jam terkini. - ATBM
untuk Ulos dan gedogan untuk songket. Jangan menyamakan tekniknya. -
Sumber juga menjelaskan Rumah Tenun berbentuk rumah adat Batak di depan
galeri, hibah Bank Indonesia untuk regenerasi penenun.

#### C. Tobatenun dan Jabu Bonang

Slug: `tobatenun-jabu-bonang`

Data dari dokumen sumber: - Entitas: Tobatenun (PT Toba Tenun
Sejahtra). - Pendiri: Kerri Na Basaria Pandjaitan. - Partner/COO: Melvi
Tampubolon. - Berdiri 2018. - Studio: Tobatenun Studio, Sopo Del Tower,
Ground Floor, Jakarta. - Rumah komunitas: Jabu Bonang di perbatasan
Simalungun--Pematangsiantar, Sumatera Utara. Alamat jalan belum
ditemukan. - Rumah pewarnaan alami: Jabu Borna. - Gerai lain yang
disebut: Alun Alun Indonesia--Grand Indonesia, Sarinah Department Store,
Lakon Store--Mall Kelapa Gading 5. - Instagram: `@tobatenun` dan
`@jabu.bonang`. - Website: https://www.tobatenun.com - Teknik yang
disebut: gedogan tradisional dan pewarna alami pada ekosistem produksi
yang dijelaskan sumber.

**Jangan menyatukan semua lokasi Tobatenun menjadi satu alamat.**
Bedakan studio Jakarta, gerai retail, Jabu Bonang, dan Jabu Borna.
Jangan menyebut studio Jakarta sebagai rumah produksi di Sumatera Utara.

### 4.4 Data rumah tenun lama

`03_RUMAH_TENUN_MASTER_DATA.md` berisi lima sentra/rumah tenun yang
ditelusuri sebelumnya. Gunakan sebagai sumber pendukung atau konten
kontekstual jika sesuai. Jangan otomatis mencampur semua entri lama
dengan tiga profil utama di atas. Periksa status verifikasi dan foto
setiap entri. Jangan menampilkan placeholder AI sebagai foto lokasi
nyata.

### 4.5 Belajar Ulos dan Proses Menenun

-   Gunakan `04_BELAJAR_ULOS.md` untuk delapan topik edukasi.
-   Gunakan `05_PROSES_MENENUN.md` untuk urutan proses dan perbedaan
    praktik antardaerah.
-   Jangan mengubah proses menjadi satu prosedur universal jika sumber
    menyebut variasi.
-   Gunakan `99_DAFTAR_SUMBER (1).md` dan sumber di setiap master data
    untuk atribusi.

### 4.6 Beranda dan Tentang Platform

Gunakan `07_KONTEN_BERANDA_DAN_TENTANG_v2.md`. Pertahankan pesan
utama: - Ulos memiliki nilai historis, sosial, dan filosofis. -
Keberlanjutan warisan budaya juga bergantung pada keberlanjutan profesi
penenun. - Akses pasar, transparansi nilai produk, dokumentasi penenun,
dan regenerasi merupakan isu penting. - Platform mendukung pengenalan
karya dan akses informasi, bukan transaksi di dalam website. - Hubungkan
secara wajar dengan SDG 8 dan SDG 10. Jangan mengklaim dampak yang belum
diukur.

------------------------------------------------------------------------

## 5. ASSET MAPPING DAN PENGGUNAAN FOTO

### 5.1 Folder Rumah Tenun

Pemilik proyek sudah menyiapkan folder:

``` text
public/
  images/
    RUMAH_TENUN/
      dameulos.png
      Galeri Ulos Sianipar.png
      Tobatenun.png
```

Gunakan tiga file tersebut untuk tiga profil Rumah Tenun/Galeri Ulos.
Periksa nama persis di repository, termasuk kapitalisasi dan spasi. Jika
ada perbedaan nama, gunakan file aktual yang ditemukan. Jangan menebak
path. Jangan menghapus file sumber. Jangan mengganti foto dengan gambar
AI.

### 5.2 Aset lain

Audit `public/images/` dan `06_IMAGE_ASSET_MANIFEST.md`. Gunakan: - Foto
10 Ulos dari folder `ulos`. - Foto penenun dari folder `penenun`. -
Background photography dari folder `backgrounds` atau folder lain yang
sudah disediakan. - Aset hero, proses menenun, detail tekstur, dan logo
sesuai manifest.

Jangan menganggap semua gambar sebagai foto dokumenter. Aset ilustrasi
AI harus diberi label "Ilustrasi" jika konteksnya dapat membuat
pengunjung mengira foto tersebut merupakan dokumentasi nyata.

### 5.3 Aturan foto

-   Foto kain: tampilkan tekstur dan detail motif dengan crop yang tidak
    merusak karakter kain.
-   Foto penenun: pertahankan identitas, jangan menukar nama.
-   Foto rumah tenun/galeri: jangan menyatakan foto tersebut sebagai
    bukti proses jika foto hanya menampilkan bangunan atau display.
-   Foto background: pilih gambar dengan ruang visual yang cukup untuk
    teks dan gunakan overlay kontras.
-   Gunakan focal point yang tepat untuk desktop dan mobile.
-   Tambahkan alt text deskriptif, bukan keyword stuffing.
-   Gunakan `next/image` dan ukuran gambar yang sesuai.

------------------------------------------------------------------------

## 6. LOGO, BRANDING, TYPOGRAPHY, DAN DESIGN SYSTEM

### 6.1 Logo

Gunakan logo master PARTONUN dari aset yang disediakan pemilik proyek.
Cari pada folder referensi branding, terutama folder
`docs/references/logo/` atau lokasi branding yang sudah ada di
repository.

-   Pertahankan file logo transparan tanpa background.
-   Jangan menambahkan kotak atau background pada file logo.
-   Jangan mengubah proporsi, garis, atau bentuk simbol.
-   Jangan menggambar ulang simbol dengan CSS atau SVG.
-   Jangan mengganti logo dengan teks generik jika file logo tersedia.
-   Tampilkan wordmark dan tagline sesuai komposisi referensi yang
    disetujui.
-   Pastikan logo terbaca pada background gelap dan terang; jika
    tersedia versi warna yang berbeda, gunakan versi yang sesuai.

### 6.2 Warna

Gunakan palet **Batak Heritage Gold**:

  Token                 Hex         Penggunaan
  --------------------- ----------- ---------------------------
  Obsidian              `#100E0C`   Latar utama gelap
  Dark Brown            `#241A13`   Latar sekunder dan footer
  Batak Heritage Gold   `#C6A15B`   Aksen identitas
  Woven Gold            `#E2C078`   Highlight dan interaksi
  Antique Bronze        `#8A642E`   Aksen emas gelap
  Warm Ivory            `#E8DFCF`   Section terang
  Ulos Red              `#963F37`   Aksen budaya terbatas
  Charcoal              `#282522`   Teks pada latar terang

Emas harus menjadi identitas, bukan warna semua teks. Jaga rasio
kontras.

### 6.3 Typography

-   **Bodoni Moda:** wordmark PARTONUN jika sesuai referensi logo.
-   **DM Serif Display:** headline besar dan judul editorial.
-   **Manrope:** body text, navigasi, label, metadata, dan UI.
-   Gunakan ukuran responsif dengan `clamp()`.
-   Jaga line-height, panjang baris, dan kontras.
-   Jangan mengganti tipografi yang sudah disepakati tanpa alasan kuat.

### 6.4 Art direction

Hasil akhir harus terasa seperti editorial budaya premium yang
kontemporer: - Fotografi sinematik. - Layout asimetris terukur. - Grid
tipis dan detail garis yang halus. - Kombinasi section gelap dan Warm
Ivory. - Headline serif kontras dan body sans-serif yang bersih. - Ruang
kosong yang terencana. - Foto besar dan detail tekstil. - Gold accent
yang selektif. - Tidak monoton, tidak seperti template marketplace, dan
tidak terlihat seperti dashboard.

Jangan menggunakan: - Gradient neon. - Glassmorphism berlebihan. - Card
generik untuk semua section. - Ornamen Batak yang tidak memiliki
konteks. - Pattern budaya acak hanya untuk dekorasi. - Layout yang sama
persis pada semua halaman.

------------------------------------------------------------------------

## 7. ART DIRECTION PER HALAMAN

### 7.1 Beranda `/`

Bangun hero sinematik dengan foto background terbaik dari aset lokal.
Komposisi: - Header minimal dengan logo kiri dan menu kanan. - Eyebrow
kecil "WARISAN TENUN BATAK". - Headline editorial yang singkat dan
kuat. - Deskripsi satu sampai dua kalimat dari dokumen konten. - CTA
"Jelajahi Ulos" dan "Kenali Penenun". - Background photography yang
memiliki ruang kosong untuk teks. - Overlay gelap yang menjaga
keterbacaan.

Lanjutkan dengan section: 1. Pernyataan platform. 2. Isu utama dan
urgensi keberlanjutan penenun. 3. Koleksi Ulos pilihan. 4. Kisah
penenun. 5. Rumah Tenun & Galeri Ulos pilihan. 6. Belajar Ulos / Proses
Menenun. 7. CTA menuju Tentang Platform.

Jangan memaksakan angka statistik jika tidak memiliki sumber dan konteks
waktu.

### 7.2 Ulos Hita `/ulos-hita`

Bukan grid e-commerce. Gunakan katalog editorial: - Foto kain menjadi
pusat visual. - Komposisi carousel/rail horizontal atau layout editorial
yang bervariasi. - Setiap jenis Ulos mempunyai nama dan teaser naratif
pendek. - Filter hanya jika berguna dan berdasarkan data nyata. -
Interaksi hover/focus untuk memperlihatkan detail motif. - Pada mobile,
swipe harus nyaman dan tidak mengunci scroll vertikal. - Tidak ada harga
dominan, tombol beli, atau cart.

### 7.3 Detail Ulos `/ulos-hita/[slug]`

Buat narasi yang mengalir, sederhana, dan modern: 1. Hero foto kain
besar. 2. Nama Ulos dan pengantar singkat. 3. Cerita jenis Ulos dalam
beberapa paragraf ringkas. 4. Detail bahan, pewarna, teknik, motif, dan
makna. 5. Lama pengerjaan jika sumber menyebutnya. 6. Identitas penenun
jika benar-benar terhubung. 7. Harga jika sumber jelas dan tanggalnya
dicantumkan. 8. Ulos terkait.

Jangan menyajikan sembilan bidang sebagai tabel kaku jika layout
editorial yang lebih baik dapat menjaga semua informasi tetap terbaca.

### 7.4 Penenun Hita `/penenun-hita`

Pertahankan konsep hero yang telah disetujui: - Background photography
full-bleed. - Panel narasi di sisi kiri. - Circular portrait navigation
vertikal melengkung di sisi kanan pada desktop. - Lingkaran aktif lebih
besar dengan outline Batak Heritage Gold. - Lingkaran lain lebih kecil
dan membentuk jalur melengkung. - Garis penghubung tipis. - Nama dan
lokasi di samping lingkaran. - Vertical pagination dots jika sesuai. -
Pemilihan portrait memperbarui panel cerita dan foto. - CTA "Jelajahi
Kisah" menuju detail penenun. - Jangan mengubah pola interaksi yang
sudah berfungsi jika hanya perlu menghubungkan data.

Mobile: - Ubah komposisi menjadi hero portrait dan carousel horizontal
yang nyaman. - Teks tidak boleh tertutup portrait. - Tombol dan carousel
mendukung touch dan keyboard. - Jangan membuat pengguna harus menggeser
secara horizontal untuk membaca seluruh isi halaman.

Setelah hero, tampilkan: 1. Kisah para penenun. 2. Dokumentasi foto
aktivitas jika tersedia. 3. Section **Rumah Tenun & Galeri Ulos
Pilihan** dengan tiga profil dari file 08. 4. CTA menuju detail
masing-masing.

### 7.5 Detail Penenun `/penenun-hita/[slug]`

-   Foto portrait atau aktivitas dominan.
-   Nama lengkap.
-   Lokasi.
-   Tahun mulai menenun atau pengalaman jika tersedia.
-   Cerita belajar dan pewarisan keterampilan.
-   Keahlian dan jenis Ulos.
-   Kutipan hanya jika ada kutipan asli dan izin.
-   Galeri foto.
-   Relasi ke Ulos atau Rumah Tenun hanya jika didukung data.
-   Sumber/kredit foto.

### 7.6 Detail Rumah Tenun `/rumah-tenun/[slug]`

Buat tiga detail: - `/rumah-tenun/dame-ulos` -
`/rumah-tenun/galeri-ulos-sianipar` -
`/rumah-tenun/tobatenun-jabu-bonang`

Layout tiap detail harus punya karakter visual berbeda, bukan salinan
template yang hanya mengganti nama: - Hero image dominan. - Nama dan
lokasi. - Intro editorial. - Cerita usaha dan perjalanan. - Peran usaha
(produsen, galeri, komunitas, studio, gerai) yang dijelaskan secara
akurat. - Teknik dan proses yang terdokumentasi. - Jenis Ulos/produk
yang disebut sumber. - Relasi komunitas/penenun jika bukti tersedia. -
Kontak resmi. - Galeri dokumentasi. - Sumber dan catatan verifikasi.

Untuk Tobatenun, pisahkan dengan jelas studio Jakarta, Jabu Bonang, Jabu
Borna, dan gerai retail. Untuk Galeri Ulos Sianipar, jelaskan perbedaan
ATBM untuk Ulos dan gedogan untuk songket. Untuk Dame Ulos, jelaskan
teknik gedogan dan pewarna alam hanya dalam cakupan produk yang didukung
sumber.

### 7.7 Belajar Ulos `/belajar-ulos`

Gunakan delapan topik pada `04_BELAJAR_ULOS.md`. Tampilkan seperti
editorial learning library: - Judul dan ringkasan. - Foto tekstil atau
detail motif. - Navigasi antar topik. - Narasi yang ringkas dan
bertahap. - Glosarium. - Sumber di bagian bawah materi.

### 7.8 Proses Menenun `/proses-menenun`

Gunakan `05_PROSES_MENENUN.md`. - Buat storytelling berbasis tahapan. -
Gunakan sticky image atau scroll narrative jika tepat. - Tampilkan alat,
bahan, dan langkah. - Perlihatkan variasi praktik jika sumber mencatat
perbedaan. - Jangan mengarang durasi atau menjadikan proses satu daerah
sebagai standar semua penenun.

### 7.9 Tentang Platform `/tentang-platform`

Gunakan copy dari `07_KONTEN_BERANDA_DAN_TENTANG_v2.md`: - Latar
belakang masalah. - Tujuan. - Manfaat bagi penenun, konsumen, generasi
muda, dan pelestarian budaya. - Peran katalog dan dokumentasi digital. -
Hubungan dengan SDG 8 dan SDG 10. - Batasan platform sebagai media
informasi, bukan marketplace.

------------------------------------------------------------------------

## 8. NAVIGATION DAN FOOTER

### Header

-   Logo/wordmark PARTONUN di kiri.
-   Tombol `MENU` dan ikon hamburger di kanan.
-   Tidak ada navbar panjang berisi semua halaman.
-   Header transparan di atas hero; berubah menjadi solid saat scroll
    jika dibutuhkan.
-   Mobile: logo kiri, menu kanan.

### Immersive menu

Kelompokkan: **EXPLORE** - Beranda - Ulos Hita - Penenun Hita

**DISCOVER THE CRAFT** - Belajar Ulos - Proses Menenun

**PLATFORM** - Tentang Platform

Detail Rumah Tenun ditemukan melalui section Rumah Tenun & Galeri Ulos
pada Penenun Hita, bukan menu utama.

Menu overlay harus: - Memiliki tombol close. - Dapat ditutup dengan
Escape. - Mengelola fokus keyboard. - Tidak membuat konten belakang
tetap dapat difokuskan jika overlay modal. - Memiliki preview visual
yang tidak menghalangi navigasi. - Responsif pada mobile.

### Footer

Gunakan: - PARTONUN. - Ringkasan singkat platform. - Link halaman
utama. - Email: `partonun1@gmail.com` - WhatsApp/telepon:
`+62 853-7193-7076` - Baris paling bawah:

`2026 PARTONUN. All rights reserved.`

Tautan: - `Privacy Policy` - `Terms & Services`

Jika halaman legal belum dibuat, gunakan placeholder route atau anchor
yang jelas dan jangan mengarahkan ke `#` tanpa fungsi. Jangan mengarang
kebijakan hukum rinci. Buat halaman legal sederhana hanya jika project
memerlukan route tersebut; tandai konten legal untuk review pemilik.

------------------------------------------------------------------------

## 9. SCROLL CHOREOGRAPHY DAN ANIMASI

Gunakan animasi untuk memperkuat storytelling: - Text reveal bertahap. -
Image mask reveal. - Background image transition. - Sticky
storytelling. - Parallax ringan. - Circular portrait navigation. -
Gallery transition. - Section reveal dengan opacity dan transform
ringan. - Hover state untuk link dan kartu. - Branded page transition.

### Page transition PARTONUN

Konsep yang disetujui: - Saat navigasi internal, tampilkan logo PARTONUN
di tengah layar. - Background Obsidian. - Aksen Batak Heritage Gold. -
Durasi target sekitar 300 ms. - Animasi opacity/scale/wipe yang halus. -
Jangan membuat delay buatan saat halaman tujuan belum siap. - Tidak
dipakai untuk anchor scroll. - Tidak boleh mengganggu back/forward,
keyboard, screen reader, atau reduced motion.

Gunakan library animasi yang sudah tersedia jika memadai. Jangan
menambah dependency berat tanpa alasan. Jika Framer Motion atau GSAP
sudah terpasang, audit dan gunakan secara konsisten. Jika tidak ada,
pertimbangkan CSS transitions/IntersectionObserver sebelum memasang
library baru.

Hormati `prefers-reduced-motion`. Pada mobile, kurangi parallax dan
animasi kompleks.

------------------------------------------------------------------------

## 10. RESPONSIVE SPECIFICATION

Uji sekurang-kurangnya: - 360 px. - 390 px. - 768 px. - 1024 px. - 1440
px. - 1920 px.

Setiap halaman harus memiliki art direction responsif, bukan sekadar
mengecilkan desktop: - Atur ulang urutan section. - Ubah grid menjadi
kolom yang sesuai. - Pastikan headline tidak overflow. - Sesuaikan
crop/focal point foto. - Pastikan menu dan tombol mudah disentuh. -
Carousel dapat di-swipe. - Hindari horizontal overflow. - Semua konten
penting tetap tersedia. - Target sentuh minimal 44 px. - Tidak ada teks
terlalu kecil. - Tidak ada komponen yang bergantung hanya pada hover.

------------------------------------------------------------------------

## 11. IMPLEMENTATION ARCHITECTURE

-   Pertahankan framework dan versi yang sudah digunakan repository.
-   Gunakan Next.js App Router jika sudah menjadi struktur proyek.
-   Gunakan TypeScript jika project sudah menggunakannya.
-   Pisahkan data statis dari komponen UI.
-   Buat tipe data untuk Ulos, penenun, rumah tenun, materi edukasi, dan
    proses.
-   Gunakan slug yang stabil.
-   Buat reusable components untuk header, menu, footer, section
    heading, editorial image, portrait navigation, gallery, dan related
    content.
-   Jangan membuat semua halaman menjadi satu file besar.
-   Hindari over-componentization.
-   Gunakan Server Components secara default jika sesuai.
-   Gunakan Client Components hanya untuk interaksi yang membutuhkan
    state/event.
-   Jangan membuat backend atau API.
-   Jangan mengubah konfigurasi build tanpa alasan.
-   Jangan menginstal library baru jika fitur dapat dibuat dengan stack
    yang ada.

Struktur yang dapat disesuaikan dengan project:

``` text
src/
  app/
  components/
    layout/
    navigation/
    editorial/
    ulos/
    artisans/
    weaving-houses/
    learning/
    motion/
  data/
  lib/
  styles/
public/
  images/
```

Jangan memaksakan struktur ini jika repository sudah memiliki struktur
yang baik.

------------------------------------------------------------------------

## 12. CONTENT SAFETY DAN DATA QUALITY

Setiap data harus mempertahankan: - Nama sumber. - URL atau referensi. -
Tahun/tanggal informasi. - Status verifikasi. - Izin foto jika relevan.

Jangan: - Mengubah data historis menjadi kondisi saat ini. - Menyebut
angka lama sebagai angka terkini. - Menyebut semua produk sebagai
handmade jika sumber hanya mendukung sebagian. - Menganggap semua produk
satu usaha memakai pewarna alami. - Menyamakan gedogan dan ATBM. -
Menghubungkan penenun dengan toko/rumah tenun tanpa bukti. - Mengarang
testimoni atau kutipan. - Mengklaim sertifikasi keaslian. - Menggunakan
foto berita tanpa izin. - Menampilkan nomor kontak atau jam buka sebagai
aktif tanpa catatan verifikasi.

Jika ada informasi yang belum pasti: - Tampilkan "Informasi belum
tersedia" bila relevan. - Sembunyikan field opsional jika membuat
tampilan lebih bersih. - Tandai dalam data sebagai
`needs_verification`. - Jangan membuat konten pengganti.

------------------------------------------------------------------------

## 13. SEO, ACCESSIBILITY, DAN PERFORMANCE

### SEO

-   Metadata title dan description unik per route.
-   URL slug konsisten.
-   Heading hierarkis.
-   Alt text deskriptif.
-   Open Graph image jika aset tersedia.
-   Internal linking kontekstual.
-   Hindari keyword stuffing.
-   Jangan membuat schema rating, product offer, atau transaksi yang
    tidak ada.

### Accessibility

-   Semantic HTML.
-   Kontras teks memadai.
-   Keyboard navigation.
-   Focus state terlihat.
-   Accessible name pada button.
-   Carousel mendukung keyboard.
-   Menu overlay mengelola fokus.
-   Alt text.
-   Reduced motion.
-   Jangan menyampaikan informasi hanya lewat warna.

### Performance

-   Gunakan Next/Image.
-   Optimalkan foto besar dan background.
-   Lazy-load konten di bawah fold.
-   Hindari CLS.
-   Hindari video autoplay besar.
-   Batasi client-side JavaScript.
-   Uji performa pada perangkat mobile kelas menengah.

------------------------------------------------------------------------

## 14. RENCANA EKSEKUSI WAJIB

Kerjakan dalam urutan ini. Jangan berhenti setelah membuat daftar tugas.

### Fase 1 --- Audit

-   Audit repository, routes, data, assets, logo, fonts, dan
    dependencies.
-   Identifikasi komponen yang bisa dipertahankan.
-   Buat daftar risiko data dan asset mismatch.

### Fase 2 --- Foundation

-   Rapikan design tokens.
-   Tetapkan typography.
-   Implementasikan global layout.
-   Implementasikan header, immersive menu, footer, dan branded page
    transition.
-   Pastikan fondasi responsive.

### Fase 3 --- Data integration

-   Masukkan data 10 Ulos.
-   Masukkan lima profil penenun yang dapat dipetakan dengan benar.
-   Masukkan tiga Rumah Tenun/Galeri Ulos pilihan dari file 08.
-   Masukkan delapan topik Belajar Ulos.
-   Masukkan proses menenun.
-   Hubungkan relasi hanya jika didukung sumber.

### Fase 4 --- Build pages

Bangun dan poles seluruh route: 1. Beranda. 2. Ulos Hita. 3. Detail
Ulos. 4. Penenun Hita. 5. Detail Penenun. 6. Detail Rumah Tenun. 7.
Belajar Ulos. 8. Proses Menenun. 9. Tentang Platform.

### Fase 5 --- Motion and responsive

-   Terapkan scroll choreography.
-   Uji semua animasi dengan reduced motion.
-   Uji seluruh breakpoint.
-   Pastikan tidak ada horizontal overflow.

### Fase 6 --- Quality assurance

Jalankan perintah yang sesuai dengan package manager project: - lint. -
typecheck jika tersedia. - production build. - test jika tersedia.

Periksa semua route, tautan, gambar, CTA, menu, carousel, footer,
console, dan responsive layout. Jangan melaporkan build berhasil jika
perintah gagal.

### Fase 7 --- Final report

Setelah selesai, laporkan: 1. Halaman yang berhasil dibangun. 2.
Komponen utama yang dibuat atau diperbarui. 3. Data yang terhubung. 4.
Aset yang berhasil dipetakan. 5. Data/foto yang masih perlu verifikasi.
6. Hasil lint, typecheck, build, dan test. 7. Route yang telah diuji. 8.
Masalah yang belum selesai. 9. Cara menjalankan website secara lokal.

Jangan commit atau push Git tanpa persetujuan.

------------------------------------------------------------------------

## 15. ACCEPTANCE CRITERIA

Website belum dianggap selesai jika: - Hanya beranda yang dibangun. -
Rumah Tenun belum memiliki section dan detail page. - Tiga profil Rumah
Tenun belum terhubung dengan aset gambar yang disediakan. - Foto penenun
tertukar. - Data Ulos hanya tampil sebagai judul tanpa narasi detail. -
Halaman terlihat sama semua. - Mobile hanya merupakan desktop yang
diperkecil. - Animasi menghambat scroll atau interaksi. - Ada tombol
yang tidak berfungsi. - Ada klaim budaya/keaslian yang tidak didukung
sumber. - Ada transaksi, login, dashboard, atau backend yang tidak
diminta. - Lint/build belum diuji.

**Target akhir:** website PARTONUN yang utuh, responsif, sinematik,
editorial, kaya dokumentasi, konsisten dengan identitas Batak Heritage
Gold, dan seluruh kontennya bersumber dari data yang telah disiapkan
pemilik proyek.

Mulai sekarang dengan audit repository, lalu langsung implementasikan
sesuai instruksi ini.
