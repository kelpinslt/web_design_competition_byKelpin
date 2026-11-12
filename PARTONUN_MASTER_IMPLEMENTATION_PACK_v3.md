# PARTONUN MASTER IMPLEMENTATION PACK v3.0

**Tanggal keputusan:** 11 November 2026\
**Status:** Dokumen keputusan terbaru untuk implementasi website\
**Nama platform:** PARTONUN\
**Arah visual:** Contemporary Batak Heritage Editorial\
**Tagline:** Menghidupkan Cerita, Merawat Warisan Tenun.

## 1. Keputusan terbaru yang berlaku

Addendum ini memperbarui keputusan versi 2.0. Jika ada bagian versi 2.0
yang bertentangan, versi 3.0 ini yang berlaku.

1.  **Rumah Tenun tetap dibuat.** Keputusan sebelumnya yang menghapus
    Rumah Tenun dibatalkan.
2.  Tiga profil utama Rumah Tenun/Galeri Ulos yang menjadi fokus awal
    adalah:
    -   Dame Ulos.
    -   Galeri Ulos Sianipar.
    -   Tobatenun dan rumah komunitas Jabu Bonang.
3.  Gunakan data, kontak, alamat, teknik, cerita, dan sumber yang
    tercantum dalam `08_TOKO_ULOS_TENUN.md`.
4.  Gunakan aset gambar yang telah disiapkan di project:
    -   `public/images/RUMAH_TENUN/dameulos.png`
    -   `public/images/RUMAH_TENUN/Galeri Ulos Sianipar.png`
    -   `public/images/RUMAH_TENUN/Tobatenun.png` Periksa nama dan
        kapitalisasi file di repository sebelum menghubungkan. Jangan
        membuat foto pengganti dengan AI.
5.  Rumah Tenun ditampilkan sebagai section pilihan pada halaman Penenun
    Hita dan memiliki halaman detail pada route `/rumah-tenun/[slug]`,
    sesuai PRD V3.
6.  Untuk tahap ini, **jangan membuat route publik terpisah
    `/toko-ulos`**. Informasi toko/galeri, lokasi, kontak, dan koleksi
    diintegrasikan ke profil Rumah Tenun/Galeri Ulos. Ini menghindari
    dua halaman yang menampilkan entitas yang sama secara berulang.
7.  Tiga entitas memiliki peran yang berbeda. Jangan memaksakan label
    "rumah produksi" kepada semua:
    -   Dame Ulos: usaha tenun/galeri di Tarutung.
    -   Galeri Ulos Sianipar: galeri dan pusat produksi/tenun dengan
        informasi ATBM dan gedogan yang berbeda menurut jenis produk.
    -   Tobatenun: social enterprise dengan studio/gerai dan ekosistem
        komunitas Jabu Bonang serta rumah pewarnaan Jabu Borna.
8.  PARTONUN tetap katalog, dokumentasi, edukasi, dan storytelling.
    Bukan marketplace. Tidak ada cart, checkout, pembayaran, login,
    dashboard, backend, database, API server, atau manajemen pesanan.
9.  Data harga boleh disimpan sebagai informasi sumber, tetapi hanya
    ditampilkan jika tanggal, sumber, cakupan produk, dan izin publikasi
    jelas. Tidak ada tombol transaksi.
10. Jangan mengklaim sertifikasi keaslian. Gunakan deskripsi teknik dan
    asal kain yang dapat ditelusuri. Bedakan gedogan, ATBM, dan teknik
    lain.

## 2. Sitemap aktif

  ------------------------------------------------------------------------
  Halaman                 Route                    Fungsi
  ----------------------- ------------------------ -----------------------
  Beranda                 `/`                      Pengenalan PARTONUN dan
                                                   pintu eksplorasi

  Ulos Hita               `/ulos-hita`             Katalog 10 jenis Ulos

  Detail Ulos             `/ulos-hita/[slug]`      Narasi, bahan, teknik,
                                                   motif, makna, dan
                                                   informasi terkait

  Penenun Hita            `/penenun-hita`          Profil penenun dan
                                                   section Rumah
                                                   Tenun/Galeri Ulos
                                                   pilihan

  Detail Penenun          `/penenun-hita/[slug]`   Cerita dan karya
                                                   penenun

  Detail Rumah Tenun      `/rumah-tenun/[slug]`    Profil usaha/galeri,
                                                   sejarah, lokasi,
                                                   teknik, dokumentasi,
                                                   dan kontak

  Belajar Ulos            `/belajar-ulos`          Edukasi budaya dan
                                                   tekstil

  Proses Menenun          `/proses-menenun`        Dokumentasi tahapan dan
                                                   keterampilan

  Tentang Platform        `/tentang-platform`      Latar belakang, tujuan,
                                                   pendekatan, dan
                                                   kontribusi
  ------------------------------------------------------------------------

Detail Ulos, Detail Penenun, dan Detail Rumah Tenun adalah route
turunan, bukan tautan utama yang harus berjajar pada navbar.

## 3. Sumber data aktif

  --------------------------------------------------------------------------------
  File                                         Peran
  -------------------------------------------- -----------------------------------
  `MASTER_PRD_ULOS_HITA_INVOFEST_2026_V3.md`   PRD dan spesifikasi desain/produk
                                               utama

  `MASTER_PARTONUN.md`                         Dokumen induk, checklist, desain
                                               system, hubungan data, dan
                                               keputusan

  `01_ULOS_MASTER_DATA.md`                     Master data 10 jenis Ulos

  `PARTONUN_Profil_5_Penenun_Ulos.md`          Profil dan catatan verifikasi lima
                                               kandidat penenun

  `02_PENENUN_REFERENSI_PUBLIK.md`             Referensi tambahan; bukan otomatis
                                               pemetaan foto

  `03_RUMAH_TENUN_MASTER_DATA.md`              Konteks lima sentra/rumah tenun
                                               dari riset sebelumnya

  `04_BELAJAR_ULOS.md`                         Delapan topik edukasi

  `05_PROSES_MENENUN.md`                       Dokumentasi proses dan variasi
                                               praktik

  `06_IMAGE_ASSET_MANIFEST.md`                 Manifest aset visual dan status
                                               dokumentasi

  `07_KONTEN_BERANDA_DAN_TENTANG_v2.md`        Copy Beranda dan Tentang Platform

  `08_TOKO_ULOS_TENUN.md`                      Sumber utama tiga profil Rumah
                                               Tenun/Galeri Ulos pilihan

  `99_DAFTAR_SUMBER (1).md`                    Daftar referensi riset
  --------------------------------------------------------------------------------

### Prioritas saat ada perbedaan

1.  Instruksi terbaru pemilik proyek di percakapan.
2.  Addendum v3 ini.
3.  `MASTER_PRD_ULOS_HITA_INVOFEST_2026_V3.md`.
4.  `MASTER_PARTONUN.md`.
5.  Dokumen data pendamping sesuai bidangnya.

Jangan menggabungkan data yang berbeda jika hubungan atau identitasnya
belum terkonfirmasi. Tandai konflik untuk ditanyakan.

## 4. Tiga profil Rumah Tenun/Galeri Ulos pilihan

### 4.1 Dame Ulos

-   Slug: `dame-ulos`
-   Pemilik: Renny Katrina Manurung.
-   Wilayah: Tarutung, Kabupaten Tapanuli Utara.
-   Alamat yang tercatat: Galeri Dame Ulos, Saitnihuta, Hutatoruan V,
    Kecamatan Tarutung, Tapanuli Utara, Sumatera Utara.
-   Mulai menenun Ulos Batak Toba sejak 2014.
-   WhatsApp pada dokumen sumber: `0852-9776-9912`.
-   Instagram: `@dameulos`, https://www.instagram.com/dameulos/
-   Teknik yang disebut: gedogan pada produk premium dan pewarna alam.
-   Kisaran harga yang tercatat: Rp500 ribu--Rp15 juta per helai. Jangan
    tampilkan sebagai harga terkini tanpa konfirmasi.
-   Narasi, contoh produk, dan bukti sumber mengikuti
    `08_TOKO_ULOS_TENUN.md`.

### 4.2 Galeri Ulos Sianipar

-   Slug: `galeri-ulos-sianipar`
-   Pemilik: Robert Maruli Tua Sianipar.
-   Wilayah: Medan.
-   Alamat yang tercatat: Jl. A.R. Hakim Gg. Pendidikan No. 130--134,
    Medan, Sumatera Utara.
-   Berdiri: 28 Juni 1992.
-   WhatsApp: `0812-6584-6702`.
-   Telepon: `(061) 7330493`.
-   Email: `sianiparulos@gmail.com`.
-   Instagram: `@galeriulos_sianipar`,
    https://www.instagram.com/galeriulos_sianipar/
-   Website: https://galeryulossianipar.com
-   Jam pusat tenun pada sumber: 08.00--17.00. Konfirmasi sebelum
    menampilkan sebagai jam operasional terkini.
-   Teknik: ATBM untuk Ulos dan gedogan untuk songket. Jangan menyamakan
    teknik keduanya.
-   Profil juga menyebut Rumah Tenun berbentuk rumah adat Batak di depan
    galeri, hibah Bank Indonesia untuk regenerasi penenun.

### 4.3 Tobatenun dan Jabu Bonang

-   Slug: `tobatenun-jabu-bonang`
-   Entitas: Tobatenun (PT Toba Tenun Sejahtra).
-   Pendiri: Kerri Na Basaria Pandjaitan; partner/COO: Melvi Tampubolon.
-   Berdiri: 2018.
-   Studio: Tobatenun Studio, Sopo Del Tower, Ground Floor, Jakarta.
-   Rumah komunitas: Jabu Bonang di perbatasan
    Simalungun--Pematangsiantar, Sumatera Utara. Alamat jalan belum
    ditemukan pada dokumen sumber.
-   Rumah pewarnaan alami: Jabu Borna.
-   Gerai lain yang tercatat: Alun Alun Indonesia--Grand Indonesia,
    Sarinah Department Store, dan Lakon Store--Mall Kelapa Gading 5.
-   Instagram: `@tobatenun` dan `@jabu.bonang`.
-   Website: https://www.tobatenun.com
-   Teknik yang disebut: tenun tradisional gedogan dan pewarna alami
    pada ekosistem produksi yang dijelaskan sumber.
-   Jangan menggambarkan studio Jakarta sebagai rumah produksi di
    Sumatera Utara. Bedakan studio, gerai, Jabu Bonang, dan Jabu Borna.

### Catatan verifikasi penting

Data di atas berasal dari dokumen riset yang disediakan pemilik proyek
dan tautan sumber yang dicantumkan di sana. Angka jumlah mitra, jumlah
pekerja, motif, omzet/kontribusi, dan program pelatihan memiliki tahun
rujukan masing-masing. Jika ditampilkan, cantumkan konteks tahun sumber.
Jangan mengubah angka historis menjadi klaim kondisi terkini.

Sebelum publikasi final, verifikasi nomor WhatsApp, alamat, jam
operasional, harga, foto, dan izin penggunaan. Jika belum diverifikasi,
beri label "Informasi pada sumber, perlu konfirmasi" atau sembunyikan
dari tampilan publik.

## 5. Aset Rumah Tenun

Gunakan aset yang telah disediakan pemilik proyek pada folder:
`public/images/RUMAH_TENUN/`

Pemetaan yang dimaksud: - `dameulos.png` → Dame Ulos. -
`Galeri Ulos Sianipar.png` → Galeri Ulos Sianipar. - `Tobatenun.png` →
Tobatenun/Jabu Bonang.

Claude Code wajib memeriksa apakah nama file, ekstensi, kapitalisasi,
dan path persis sama dengan yang ada di repository. Jika berbeda,
gunakan file yang benar-benar ada. Jangan mengarang path dan jangan
membuat gambar pengganti. Pertahankan file asli. Jika perlu, buat
salinan bernama lowercase-hyphenated tanpa menghapus sumber asli.

Foto ini adalah aset visual profil usaha/galeri. Jangan menyebut foto
tersebut sebagai dokumentasi proses menenun kecuali isinya memang
memperlihatkan proses.

## 6. Arah desain

**Contemporary Batak Heritage Editorial**\
Cinematic photography · Cultural storytelling · Premium editorial ·
Minimalist navigation.

Palet: - Obsidian `#100E0C` - Dark Brown `#241A13` - Batak Heritage Gold
`#C6A15B` - Woven Gold `#E2C078` - Antique Bronze `#8A642E` - Warm Ivory
`#E8DFCF` - Ulos Red `#963F37` sebagai aksen terbatas - Charcoal
`#282522`

Tipografi: - Bodoni Moda untuk wordmark sesuai aset identitas. - DM
Serif Display untuk headline editorial. - Manrope untuk body, navigasi,
label, dan UI. - Gunakan font yang sudah disepakati dalam PRD dan aset
referensi. Jangan mengganti tanpa alasan dan persetujuan.

Gunakan logo master PARTONUN yang disediakan pemilik proyek. Pertahankan
proporsi dan transparansi. Jangan menggambar ulang logo dengan CSS/SVG
atau menambahkan background pada file logo transparan.

## 7. Motion dan responsivitas

-   Scroll reveal yang terukur.
-   Image mask reveal.
-   Sticky storytelling pada bagian yang sesuai.
-   Parallax ringan hanya pada desktop dan perangkat yang mampu.
-   Circular portrait interaction pada Penenun Hita.
-   Gallery transition yang tidak menghambat navigasi.
-   Page transition dengan logo PARTONUN di tengah, target sekitar 300
    ms, tanpa jeda buatan.
-   Hormati `prefers-reduced-motion`.
-   Uji minimal 360, 390, 768, 1024, 1440, dan 1920 px.
-   Tidak boleh ada horizontal overflow yang tidak disengaja.
-   Target sentuh minimal 44 px.
-   Animasi tidak boleh menghalangi klik, keyboard, atau aksesibilitas.

## 8. Batasan data dan klaim

-   Tidak ada dummy data atau konten rekaan.
-   Jangan menempelkan nama penenun ke foto tanpa pemetaan yang benar.
-   Jangan membuat kutipan personal jika tidak tersedia.
-   Jangan mengarang sejarah, lokasi, teknik, harga, bahan, atau makna.
-   Bedakan data terverifikasi, data dari sumber publik, data dari
    pemilik, dan informasi yang belum tersedia.
-   Jangan mengklaim PARTONUN memberi sertifikasi keaslian.
-   Jangan menyamakan gedogan, ATBM, dan tenun mesin.
-   Jangan menganggap seluruh produk satu usaha menggunakan pewarna
    alami.
-   Foto dari media publik tidak otomatis bebas digunakan. Hormati izin
    dan kredit.
-   Jika data belum lengkap, gunakan empty state editorial atau
    sembunyikan bagian opsional.

## 9. Catatan identitas penenun yang perlu diperiksa

Dokumen `PARTONUN_Profil_5_Penenun_Ulos.md` dan nama file foto dalam
repository harus dicocokkan satu per satu. Ada kemungkinan perbedaan
penulisan atau identitas pada profil kelima (misalnya nama yang
tercantum di dokumen profil dan nama file foto). Jangan memasangkan foto
dan nama hanya berdasarkan urutan file. Jika tidak dapat dipastikan,
tampilkan hanya profil yang sudah cocok atau tandai untuk konfirmasi.

## 10. Status dokumen

Versi 3.0 mengembalikan Rumah Tenun sebagai bagian resmi website dan
menetapkan tiga profil utama dari `08_TOKO_ULOS_TENUN.md`. Versi ini
menggantikan keputusan penghapusan Rumah Tenun pada paket v2.0.
