# MASTER PRD & DESIGN IMPLEMENTATION PROMPT
## Platform Digital Katalog, Cerita, dan Pelestarian Ulos Batak
**Versi dokumen:** 3.0  
**Status:** Product direction and core requirements locked  
**Kompetisi:** National Web Design Competition — Invofest 2026  
**Topik:** Digital Economy & Sociopreneurship (SDG 8 & SDG 10)  
**Framework utama:** Next.js  
**Bahasa utama website:** Bahasa Indonesia  
**Jenis produk:** Frontend-only digital cultural catalogue and artisan storytelling platform  
**Referensi visual tambahan:** Dame Ulos dan Eastern Edition

**Perubahan utama versi 3.0:** seluruh keputusan versi 2.0 dipertahankan, dengan penambahan spesifikasi wajib dan terperinci untuk Hero Penenun Hita: full-screen cinematic workshop background, panel cerita kiri, floating circular portraits kanan, label nama/lokasi, active portrait state, vertical pagination dots, interaksi tanpa autoplay, serta responsive behavior. Tambahan ini memperjelas dan menggantikan interpretasi hero Penenun Hita yang lebih umum pada versi sebelumnya.

---

# BAGIAN A — INSTRUKSI UTAMA UNTUK AI DESIGN / CODING AGENT

## A1. Peran yang harus kamu jalankan

Bertindak sebagai gabungan dari:

- Senior Product Designer.
- Senior UI/UX Designer.
- Art Director untuk produk digital premium.
- Senior Frontend Engineer yang menguasai Next.js dan React.
- Information Architect.
- Accessibility dan Web Performance Specialist.

Tugasmu adalah merancang dan mengimplementasikan website budaya digital yang profesional, berkarakter, kaya pengalaman visual, mudah dieksplorasi, dan tetap memiliki logika informasi yang kuat.

Jangan memperlakukan proyek ini sebagai website marketplace, website toko online, dashboard administrasi, atau template katalog generik.

## A2. Instruksi yang tidak boleh dilanggar

Semua keputusan berikut merupakan batasan proyek:

1. Topik kompetisi tetap **Digital Economy & Sociopreneurship (SDG 8 & SDG 10)**.
2. Objek utama tetap **Ulos Batak**.
3. Platform merupakan katalog digital dan media storytelling budaya serta pengrajin.
4. Platform **bukan marketplace** dan tidak melakukan transaksi di dalam website.
5. Tidak membuat login, register, dashboard, backend, database, API server, checkout, keranjang belanja, payment gateway, atau manajemen pesanan.
6. Jangan membuat dummy data atau mengarang data produk, penenun, toko/rumah tenun, harga, sejarah, makna motif, lokasi, atau proses produksi.
7. Gunakan konten statis lokal yang berasal dari informasi nyata dan telah diverifikasi. Konten statis bukan dummy data.
8. Jika data belum tersedia, jangan mengisinya dengan fakta rekaan. Sediakan keadaan kosong yang dirancang dengan baik, sembunyikan bagian opsional yang belum memiliki data, atau tandai secara jujur bahwa informasi belum tersedia.
9. Dua nama halaman yang menggunakan identitas Batak adalah **Ulos Hita** untuk katalog dan **Penenun Hita** untuk penenun. Nama halaman lainnya tetap: Beranda, Belajar Ulos, Proses Menenun, dan Tentang Platform.
10. Jangan mengganti nama halaman yang sudah ditetapkan tanpa persetujuan pemilik proyek.
11. Jangan mengubah tujuan, topik, atau ruang lingkup platform.
12. Jangan menambahkan fitur baru hanya karena terlihat menarik. Setiap fitur harus memiliki alasan, kebutuhan pengguna, dan hubungan yang jelas dengan masalah proyek.
13. Jangan menggunakan visual AI generik, template marketplace, desain dashboard, gradient berlebihan, glassmorphism berlebihan, neon, atau dekorasi yang tidak memiliki fungsi.
14. Jangan mengulang pola layout yang sama pada setiap halaman. Gunakan komposisi editorial yang bervariasi tetapi tetap konsisten.
15. Jangan mengorbankan aksesibilitas, responsivitas, keterbacaan, atau performa demi animasi.
16. Jangan membuat klaim sejarah, budaya, sertifikasi, keaslian, atau asal-usul produk tanpa sumber yang mendukung.
17. Jangan menampilkan tombol “Beli”, “Tambah ke Keranjang”, “Checkout”, atau alur transaksi lainnya.
18. Jangan membuat tombol yang terlihat interaktif tetapi tidak memiliki fungsi.
19. Jangan mengubah struktur project yang telah ada sebelum melakukan audit terhadap struktur tersebut.
20. Sebelum mengimplementasikan fitur tambahan, analisis dampaknya terhadap arsitektur yang sudah ada dan pilih perubahan paling kecil yang tetap benar.

Jika ada instruksi tambahan dari pemilik proyek, integrasikan dengan spesifikasi ini tanpa merusak keputusan yang sudah terkunci. Jika instruksi baru bertentangan dengan keputusan inti, jelaskan konflik dan minta konfirmasi sebelum mengubah fondasi.

## A3. Cara bekerja

Sebelum coding:

1. Audit repository dan identifikasi versi Next.js, package manager, struktur folder, styling, serta komponen yang sudah tersedia.
2. Jangan menghapus atau mengganti file yang sudah ada tanpa alasan teknis yang jelas.
3. Buat peta halaman, komponen, data, dan interaksi.
4. Tetapkan design tokens dan aturan visual.
5. Implementasikan secara modular dan bertahap.
6. Uji setiap halaman pada desktop, tablet, dan mobile.
7. Periksa seluruh tautan, tombol, navigasi, filter, carousel, dan interaksi.
8. Pastikan tidak ada data rekaan yang tampil sebagai fakta.
9. Laporkan file yang dibuat atau diubah dan jelaskan hasil implementasinya.

Jangan langsung menghasilkan semua halaman dengan kualitas seadanya. Prioritaskan kualitas, konsistensi, dan validitas informasi.

---

# BAGIAN B — PRODUCT DEFINITION

## B1. Identitas kompetisi dan tema

Platform dikembangkan sebagai karya **National Web Design Competition Invofest 2026**.

Tema besar kompetisi yang telah disampaikan:
**Smart Ecosystems: Digital Solutions for a Sustainable Future.**

Topik yang dipilih dan telah ditetapkan:
**Digital Economy & Sociopreneurship (SDG 8 & SDG 10).**

- SDG 8: Decent Work and Economic Growth.
- SDG 10: Reduced Inequalities.

Jangan mengganti topik ini dengan topik lain.

## B2. Definisi produk

Platform ini adalah **digital cultural catalogue and artisan storytelling platform** yang berfokus pada Ulos Batak.

Website memperkenalkan koleksi Ulos melalui katalog digital, menjelaskan karakteristik dan nilai produk, menampilkan sejarah penenun, memperkenalkan toko atau rumah tenun pilihan yang menghasilkan tenun sendiri, serta menyediakan materi edukasi dan dokumentasi proses menenun.

Platform menghubungkan tiga kelompok utama:

1. **Pengrajin/penenun:** pihak yang menghasilkan Ulos dan memiliki pengetahuan serta keterampilan menenun.
2. **Konsumen/pengunjung:** pihak yang ingin mengenal, mengeksplorasi, dan memahami produk Ulos.
3. **Generasi muda:** pihak yang perlu memperoleh akses informasi untuk mengenal budaya, proses, dan keterampilan menenun.

Platform tidak memproses transaksi. Tujuannya adalah memperluas pengenalan produk, memperjelas nilai produk, memperkenalkan pembuatnya, dan memperkuat apresiasi terhadap keterampilan serta warisan budaya.

## B3. Pernyataan produk

> Sebuah platform digital berbasis Next.js yang memperkenalkan Ulos Batak melalui katalog produk yang informatif, transparansi karakteristik dan nilai budaya, dokumentasi sejarah para penenun, pengenalan rumah tenun pilihan, serta edukasi proses menenun. Platform menghubungkan pengenalan produk, identitas pengrajin, dan pengetahuan budaya dalam pengalaman digital yang interaktif, estetis, dan berorientasi pada pemberdayaan ekonomi serta keberlanjutan tradisi menenun.

## B4. Latar belakang dan masalah yang menjadi dasar produk

Pertahankan hubungan logis antara masalah, solusi, halaman, dan dampak berikut.

### Masalah 1 — Keterbatasan akses pemasaran dan jangkauan informasi produk

Pengrajin dapat memiliki kemampuan produksi, tetapi calon konsumen tidak selalu mengetahui keberadaan produk, karakteristiknya, dan pihak yang membuatnya. Jangkauan informasi yang terbatas dapat mengurangi peluang produk untuk dikenal oleh konsumen yang lebih luas.

**Solusi digital:** katalog Ulos yang terstruktur dan mudah dieksplorasi.

**Halaman:** Ulos Hita.

**Hasil yang diharapkan:** produk lebih mudah ditemukan dan dikenali melalui informasi digital yang jelas.

### Masalah 2 — Konsumen belum memperoleh gambaran utuh mengenai nilai produk

Foto dan harga saja tidak cukup untuk menjelaskan bahan, pewarna, teknik pembuatan, kompleksitas motif, makna motif, waktu pengerjaan, dan keterampilan yang dibutuhkan untuk menghasilkan Ulos.

**Solusi digital:** detail produk yang menjelaskan sembilan karakteristik wajib.

**Halaman:** Detail Ulos, sebagai halaman turunan Ulos Hita.

**Hasil yang diharapkan:** konsumen memperoleh informasi yang membantu mereka memahami karakteristik dan nilai produk secara lebih objektif.

**Prinsip harga:** harga tetap ditentukan pengrajin. Website hanya menyajikan harga sebagai informasi. Website tidak menghitung, menilai, atau menetapkan harga.

### Masalah 3 — Identitas, pengalaman, dan sejarah penenun kurang terekspos

Pengunjung perlu mengetahui siapa yang membuat Ulos, dari mana penenun berasal, bagaimana perjalanan mereka, serta keterampilan dan karakteristik tenun yang mereka hasilkan.

**Solusi digital:** pengalaman storytelling yang menampilkan tokoh penenun dan sejarah mereka.

**Halaman:** Penenun Hita.

**Hasil yang diharapkan:** penenun memperoleh ruang representasi digital sebagai manusia dan pelaku budaya di balik produk.

### Masalah 4 — Rumah tenun dengan karakteristik dan sejarah khas perlu diperkenalkan

Toko atau rumah tenun yang melakukan proses tenun sendiri dapat memiliki karakteristik produk, sejarah usaha, dan kekhasan yang layak diperkenalkan. Platform perlu membedakan tempat produksi tenun sendiri dari toko yang hanya menjual kembali produk.

**Solusi digital:** kurasi rumah tenun dan toko Ulos yang menghasilkan tenun sendiri, memiliki ciri khas hasil tenun, dan memiliki sejarah yang dapat didokumentasikan.

**Halaman:** Penenun Hita, pada bagian khusus Rumah Tenun.

**Hasil yang diharapkan:** pengunjung dapat mengenal tempat, pelaku, dan karakteristik hasil tenun secara lebih mendalam.

### Masalah 5 — Regenerasi penenun dan pengenalan keterampilan menenun

Generasi muda membutuhkan akses informasi untuk mengenal Ulos, motif, tradisi, alat, bahan, dan proses menenun. Dokumentasi digital dapat membantu memperkenalkan keterampilan tersebut.

**Solusi digital:** materi edukasi budaya dan dokumentasi proses produksi.

**Halaman:** Belajar Ulos dan Proses Menenun.

**Hasil yang diharapkan:** pengetahuan tentang Ulos dan proses menenun lebih mudah diakses dan dieksplorasi.

### Masalah 6 — Keberlanjutan ekonomi dan pelestarian budaya saling berkaitan

Pelestarian tradisi tidak hanya berkaitan dengan dokumentasi motif. Keberlanjutan juga bergantung pada pengrajin yang mempertahankan keterampilan dan memperoleh penghidupan dari hasil kerjanya.

**Solusi digital:** menghubungkan katalog produk, transparansi nilai, identitas penenun, rumah tenun, dan edukasi budaya dalam satu platform.

**Halaman:** keseluruhan platform, terutama Beranda dan Tentang Platform.

**Hasil yang diharapkan:** pengunjung memahami hubungan antara produk, pengrajin, pengetahuan budaya, dan keberlanjutan ekonomi.

## B5. Tujuan platform

1. Memperluas pengenalan dan akses informasi mengenai produk Ulos hasil tenunan pengrajin.
2. Meningkatkan pemahaman konsumen terhadap nilai produk melalui informasi yang transparan.
3. Memperkenalkan identitas, pengalaman, sejarah, dan karya para penenun.
4. Memperkenalkan rumah tenun pilihan yang menghasilkan produk tenun sendiri.
5. Menyediakan media edukasi mengenai Ulos dan proses menenun.
6. Mendukung apresiasi terhadap keterampilan penenun dan keberlanjutan tradisi.
7. Menghubungkan tujuan pemberdayaan ekonomi dengan pelestarian budaya sesuai SDG 8 dan SDG 10.

---

# BAGIAN C — SCOPE DAN BATASAN FITUR

## C1. Fitur yang termasuk dalam ruang lingkup

- Beranda.
- Ulos Hita (katalog digital).
- Detail Ulos.
- Pencarian dan filter katalog berdasarkan informasi nyata yang tersedia.
- Penenun Hita.
- Profil/detail penenun.
- Cerita sejarah penenun.
- Bagian Rumah Tenun dan Toko Ulos pilihan.
- Detail rumah tenun.
- Belajar Ulos.
- Proses Menenun.
- Galeri dokumentasi proses.
- Tentang Platform.
- Navigasi desktop dan mobile.
- Carousel, gallery, scroll interaction, dan animasi yang mendukung eksplorasi.
- Footer dan informasi sumber/kredit konten.

## C2. Fitur yang dilarang

Jangan membuat:

- Login atau register.
- Dashboard pengguna.
- Dashboard admin.
- Backend.
- Database.
- API server.
- Server actions untuk pengelolaan data.
- Keranjang belanja.
- Checkout.
- Payment gateway.
- Sistem pembayaran.
- Manajemen pesanan.
- Sistem stok transaksional.
- Dummy product records.
- Dummy artisan records.
- Dummy store records.
- Review/rating palsu.
- Statistik atau angka dampak yang tidak memiliki sumber.
- Chat atau kontak fiktif.

Kontak eksternal hanya boleh ditampilkan jika benar-benar tersedia, relevan, dan disetujui untuk dipublikasikan. Kontak bukan bagian dari alur transaksi di dalam platform.

## C3. Prinsip data

**Tidak ada dummy data. Tidak ada data fiktif yang disamarkan sebagai data nyata.**

Website boleh menggunakan file JavaScript lokal sebagai sumber konten statis. File tersebut harus berisi konten yang benar-benar dikumpulkan, disetujui, atau diverifikasi.

Jika data belum tersedia:
- Jangan membuat nama atau cerita contoh.
- Jangan membuat harga contoh.
- Jangan membuat foto pengrajin generik lalu memberi label sebagai tokoh nyata.
- Jangan membuat lokasi atau tahun berdiri rekaan.
- Gunakan empty state yang elegan, atau sembunyikan bagian yang belum memiliki konten.
- Sediakan struktur konten agar data nyata dapat dimasukkan kemudian.

---

# BAGIAN D — INFORMATION ARCHITECTURE DAN SITEMAP

## D1. Nama halaman yang ditetapkan

| Nama tampilan | Fungsi |
|---|---|
| **Beranda** | Pengenalan platform dan navigasi ke seluruh pengalaman |
| **Ulos Hita** | Katalog digital produk Ulos |
| **Detail Ulos** | Informasi lengkap setiap produk Ulos |
| **Penenun Hita** | Tokoh penenun, sejarah, dan rumah tenun pilihan |
| **Detail Penenun** | Sejarah dan perjalanan seorang penenun |
| **Detail Rumah Tenun** | Sejarah, lokasi, dan kekhasan rumah tenun |
| **Belajar Ulos** | Edukasi jenis, motif, makna, dan budaya Ulos |
| **Proses Menenun** | Dokumentasi tahapan dan keterampilan menenun |
| **Tentang Platform** | Latar belakang, tujuan, dan kontribusi platform |

Hanya dua nama navigasi utama yang menggunakan istilah Batak:
- Ulos Hita.
- Penenun Hita.

Jangan mengubah nama halaman lain menjadi istilah Batak tanpa persetujuan.

## D2. Rancangan route Next.js

Gunakan App Router dengan route berikut:

```text
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

Detail Ulos, Detail Penenun, dan Detail Rumah Tenun adalah halaman turunan, bukan item navigasi utama yang berdiri sendiri.

## D3. Navigasi — Minimal Header, Immersive Menu

**Keputusan navigasi final: nama halaman TIDAK ditampilkan sebagai deretan tautan langsung pada navbar.** Jangan menampilkan Beranda, Ulos Hita, Penenun Hita, Belajar Ulos, Proses Menenun, dan Tentang Platform secara berjajar di header.

Navbar harus sangat sederhana. Semua tujuan navigasi utama ditempatkan di dalam menu yang dibuka melalui satu kontrol ringkas.

### D3.1 Header desktop

Susunan yang disarankan:

- Sisi kiri: logo/wordmark resmi platform jika sudah disediakan. Jika nama merek dan logo utama belum ditetapkan, gunakan area logo yang netral dan jangan menciptakan nama merek baru.
- Area tengah: kosong atau hanya elemen identitas visual yang sangat halus. Jangan menaruh daftar halaman.
- Sisi kanan: satu kontrol menu ringkas berupa ikon hamburger/dua garis dan, bila sesuai, label kecil `MENU`.
- Tidak ada deretan link halaman pada navbar.
- Jangan menambahkan ikon cart, login, akun, wishlist, atau elemen e-commerce.

Header dapat transparan di atas hero. Setelah pengguna scroll, header dapat berubah menjadi latar Obsidian/Dark Brown yang solid atau semi-solid agar tetap terbaca. Transisi harus halus dan tidak mengganggu konten.

### D3.2 Header mobile

- Gunakan logo/wordmark di kiri.
- Gunakan satu tombol menu di kanan.
- Jangan menampilkan seluruh nama halaman dalam baris horizontal.
- Menu harus mudah dijangkau ibu jari.
- Sediakan area klik yang cukup besar.
- Pastikan tombol memiliki accessible name, focus state, dan fungsi keyboard.

### D3.3 Perilaku menu

Ketika tombol menu ditekan, tampilkan **immersive navigation overlay** atau panel navigasi yang mengambil alih fokus secara jelas.

Menu bukan dropdown kecil generik. Menu harus menjadi bagian dari pengalaman editorial, tetapi tetap mudah digunakan.

Struktur tujuan navigasi di dalam menu:

**EXPLORE**
- Beranda — pengantar platform dan warisan Ulos.
- Ulos Hita — katalog digital koleksi Ulos.
- Penenun Hita — kisah penenun dan rumah tenun.

**DISCOVER THE CRAFT**
- Belajar Ulos — jenis, motif, makna, dan pengetahuan budaya.
- Proses Menenun — dokumentasi keterampilan dan tahapan menenun.

**PLATFORM**
- Tentang Platform — tujuan, pendekatan, dan kontribusi platform.

Kelompok tersebut hanya struktur pengorganisasian menu. Nama halaman tetap persis seperti yang telah ditetapkan.

### D3.4 Arah visual menu

- Gunakan latar Obsidian atau Dark Brown.
- Gunakan tipografi editorial berukuran besar untuk nama halaman.
- Gunakan label kelompok kecil dengan Muted Gold.
- Gunakan deskripsi satu baris yang ringkas.
- Beri jarak antartautan yang lega.
- Hindari border dan card berlebihan.
- Pada desktop, menu dapat menggunakan komposisi dua kolom: daftar navigasi dan satu area visual preview yang berganti sesuai item yang difokuskan.
- Preview visual bersifat pendukung. Jangan membuat menu sulit dipindai.
- Pada mobile, susun menu secara vertikal dan prioritaskan keterbacaan.
- Gunakan hover/focus state yang halus, bukan animasi yang menghalangi klik.
- Tautan aktif dapat diberi indikator tipis atau perubahan warna.

### D3.5 Kontrol dan aksesibilitas menu

- Sediakan tombol close yang terlihat.
- Tombol Escape menutup menu.
- Fokus keyboard masuk ke menu ketika dibuka dan kembali ke tombol pemicu ketika ditutup.
- Cegah fokus berpindah ke konten di belakang overlay saat menu modal terbuka.
- Semua tautan dapat diakses melalui keyboard.
- Jangan mengandalkan hover untuk menampilkan nama halaman.
- Pastikan menu tetap berfungsi pada touch device.
- Jika menggunakan panel non-modal, pastikan perilaku fokus dan pembacaan screen reader tetap benar.

### D3.6 Navigasi kontekstual di dalam halaman

Karena nama halaman tidak tampil di navbar, bantu orientasi pengunjung melalui:

- Breadcrumb kecil pada halaman detail, misalnya `Ulos Hita / Detail Ulos`.
- Judul halaman yang jelas pada bagian awal konten.
- CTA kontekstual di akhir section.
- Tautan “Jelajahi koleksi”, “Kenali penenun”, atau “Lanjutkan kisah” sesuai konteks.
- Related content yang relevan.
- Footer dengan navigasi terkelompok dan tidak terlalu padat.

Jangan menambahkan breadcrumb pada hero jika membuat komposisi visual terlalu ramai. Tempatkan secara halus di area yang mudah ditemukan.

### D3.7 Prinsip navigasi

Navigasi harus terasa minimal di permukaan, tetapi tetap lengkap di dalamnya. Pengunjung tidak boleh kehilangan orientasi hanya karena nama halaman tidak terlihat pada navbar.

Jangan mengorbankan discoverability demi estetika. Pastikan tombol menu mudah dikenali dan CTA kontekstual mengarahkan pengguna ke bagian berikutnya secara logis.

---

# BAGIAN E — SPESIFIKASI SETIAP HALAMAN

# E1. BERANDA

## Tujuan

Beranda harus memperkenalkan platform dan membangun pemahaman awal bahwa Ulos bukan sekadar kain, melainkan hasil keterampilan, waktu, proses, identitas penenun, dan nilai budaya.

## Susunan konten

1. **Hero utama**
   - Fotografi Ulos atau aktivitas penenun sebagai fokus.
   - Headline editorial yang kuat.
   - Deskripsi singkat tentang platform.
   - CTA menuju Ulos Hita atau Penenun Hita.
   - Jangan menggunakan hero template standar yang hanya berupa judul kiri dan gambar kanan.

2. **Pengenalan Ulos**
   - Penjelasan singkat tentang Ulos.
   - Foto tekstur dan detail kain.
   - Arahkan pengunjung ke Belajar Ulos.

3. **Pilihan koleksi Ulos**
   - Beberapa koleksi nyata yang telah diverifikasi.
   - Gunakan komposisi editorial.
   - Arahkan ke Ulos Hita.

4. **Pengenalan penenun**
   - Potret penenun.
   - Nama dan lokasi jika tersedia.
   - Arahkan ke Penenun Hita.

5. **Warisan keterampilan**
   - Dokumentasi proses menenun.
   - Foto alat, bahan, tangan, dan tahapan produksi.
   - Arahkan ke Proses Menenun.

6. **Nilai budaya**
   - Materi budaya yang bersumber.
   - Arahkan ke Belajar Ulos.

7. **Tujuan platform**
   - Jelaskan hubungan pemberdayaan ekonomi dan pelestarian budaya.
   - Arahkan ke Tentang Platform.

8. **Footer**
   - Navigasi.
   - Identitas platform setelah nama merek resmi ditetapkan.
   - Sumber/kredit foto jika diperlukan.
   - Kontak resmi hanya jika tersedia dan disetujui.

## Visual

Beranda harus terasa seperti pembukaan editorial sebuah platform budaya premium. Gunakan fotografi besar, tipografi berkarakter, komposisi asimetris, dan transisi antarbagian.

---

# E2. ULOS HITA — KATALOG DIGITAL

## Tujuan

Ulos Hita adalah katalog digital untuk memperkenalkan dan memungkinkan pengunjung mengeksplorasi produk Ulos. Bukan toko online dan bukan marketplace.

## Komposisi visual wajib

Gunakan referensi katalog berupa:
- Latar gelap charcoal/obsidian.
- Kartu fotografi vertikal.
- Komposisi kartu tidak sejajar.
- Kartu tengah lebih besar/menonjol.
- Kartu samping berada sedikit lebih rendah atau terlihat sebagian.
- Nama Ulos dan informasi singkat ditempatkan di area bawah foto.
- Ruang kosong yang cukup.
- Tampilan editorial, premium, dan sinematik.
- Carousel horizontal yang dapat di-drag, swipe, dan dinavigasi dengan kontrol yang jelas.

Jangan membuat grid produk marketplace biasa sebagai desain utama.

## Isi katalog

Setiap item yang benar-benar tersedia dapat menampilkan:
- Foto Ulos.
- Nama Ulos.
- Jenis Ulos jika diketahui.
- Keterangan singkat.
- Asal/daerah jika terverifikasi.
- Harga jika diberikan dan disetujui pengrajin.
- Indikator untuk membuka detail.

Jangan menampilkan atribut yang tidak memiliki data.

## Interaksi katalog

- Kartu aktif menjadi fokus.
- Kartu samping memberi petunjuk adanya koleksi lain.
- Hover: perubahan skala atau posisi yang halus.
- Klik: membuka Detail Ulos.
- Drag/swipe: berpindah koleksi.
- Keyboard: carousel dapat digunakan dengan tombol panah jika sesuai.
- Tombol prev/next harus benar-benar bekerja.
- Berikan indikator posisi koleksi yang jelas.
- Pada mobile, gunakan swipe yang nyaman dan jangan memaksa layout desktop.

## Pencarian dan filter

Sediakan pencarian/filter hanya jika koleksi dan atribut datanya mendukung.

Filter dapat menggunakan jenis Ulos, motif, atau karakteristik produk jika data faktual tersedia. Jangan membuat kategori yang tidak ada dalam sumber konten.

Jika hasil pencarian kosong, tampilkan empty state yang dirancang secara visual dan informatif.

---

# E3. DETAIL ULOS — PRODUCT VALUE TRANSPARENCY

## Tujuan

Halaman ini merupakan inti transparansi nilai produk. Pengunjung harus dapat memahami karakteristik Ulos, bahan, proses, motif, makna, waktu pengerjaan, identitas penenun, dan harga.

## Sembilan informasi wajib

| No. | Informasi | Tujuan |
|---:|---|---|
| 1 | Jenis Ulos | Mengetahui karakteristik produk |
| 2 | Bahan | Mengetahui material yang digunakan |
| 3 | Pewarna | Mengetahui jenis pewarna |
| 4 | Teknik pembuatan | Memahami metode produksi |
| 5 | Kerumitan motif | Memahami keterampilan yang dibutuhkan |
| 6 | Makna motif | Memahami nilai budaya |
| 7 | Lama pengerjaan | Memahami waktu produksi |
| 8 | Identitas pengrajin | Mengetahui pembuat produk |
| 9 | Harga | Mengetahui nilai yang ditetapkan pengrajin |

Kesembilan informasi tersebut adalah spesifikasi konten produk. Jangan menghilangkan atau menggantinya.

## Struktur tampilan yang disarankan

### Section 1 — Product identity
- Foto utama berukuran besar.
- Nama Ulos.
- Jenis Ulos.
- Deskripsi singkat.
- Asal jika tersedia dan terverifikasi.
- Harga jika tersedia.

### Section 2 — Material and making
- Bahan.
- Pewarna.
- Teknik pembuatan.
- Kerumitan motif.

Gunakan layout editorial, label informasi, foto detail, atau komposisi grid asimetris. Jangan menampilkan sembilan atribut sebagai tabel polos yang panjang tanpa hierarki visual.

### Section 3 — Motif and cultural meaning
- Foto detail motif.
- Nama motif jika tersedia.
- Penjelasan bentuk motif.
- Makna budaya yang bersumber.
- Penjelasan harus spesifik pada produk dan tidak digeneralisasi.

### Section 4 — Production story
- Lama pengerjaan.
- Dokumentasi proses.
- Narasi proses jika tersedia.
- Foto alat atau tahapan produksi.

### Section 5 — The artisan behind the Ulos
- Foto penenun.
- Nama.
- Lokasi jika tersedia.
- Tautan ke Detail Penenun.
- Hubungan produk dengan pembuatnya.

### Section 6 — Price information
- Harga yang ditentukan pengrajin.
- Jelaskan bahwa harga adalah informasi produk.
- Jangan menghitung atau memberi skor nilai produk.
- Jangan tampilkan tombol beli, keranjang, checkout, atau pembayaran.

## Prinsip harga

Harga tetap ditetapkan pengrajin. Website hanya menyampaikan harga dan informasi karakteristik produk agar konsumen dapat melakukan penilaian secara lebih objektif.

---

# E4. PENENUN HITA — ARTISAN STORYTELLING

## Tujuan

Penenun Hita memperkenalkan manusia di balik Ulos melalui sejarah, pengalaman, keterampilan, perjalanan, dan hasil karya mereka.

Halaman ini memiliki dua kelompok konten besar:
1. Kisah para penenun.
2. Rumah tenun dan toko Ulos pilihan.

**Spesifikasi Hero pada bagian A sampai H di bawah ini bersifat WAJIB.** Ini merupakan tambahan resmi dari pemilik proyek dan menjadi acuan yang lebih spesifik daripada deskripsi circular portrait umum pada versi sebelumnya.

## A. Hero wajib — Cinematic Interactive Circular Portrait Gallery

Hero Penenun Hita harus mengikuti komposisi visual **Cinematic Full-Screen Background + Floating Circular Portrait Navigation**. Jangan mengubahnya menjadi grid card, profile card, katalog standar, atau dua kolom dengan panel terpisah.

### A1. Layout utama

- Gunakan satu hero full-screen dengan tinggi minimal `100svh` dan lebar 100%.
- Komposisi desktop dibagi secara visual menjadi:
  - Area kiri sekitar 55% viewport: informasi dan cerita penenun aktif.
  - Area kanan sekitar 45% viewport: kumpulan potret penenun berbentuk lingkaran.
- Kedua area menyatu di atas satu background foto penuh. Jangan memberi garis pemisah atau background card terpisah.
- Jaga komposisi asimetris dan ruang kosong agar teks, potret, dan label tidak saling bertabrakan.
- Gunakan safe area dan responsive constraints agar layout tetap stabil pada ukuran layar berbeda.

### A2. Background fotografi full-bleed

Background harus berupa satu foto dokumentasi besar yang memenuhi seluruh viewport, bukan gambar yang ditempatkan di dalam card.

Tema foto yang diperbolehkan:
- Aktivitas menenun Ulos.
- Workshop atau rumah tenun Batak.
- Alat tenun tradisional.
- Detail proses pembuatan kain Ulos.

Ketentuan visual:
1. Foto memenuhi layar dari ujung ke ujung.
2. Gunakan `background-size: cover` atau pendekatan `object-fit: cover` yang tepat.
3. Atur `background-position` agar objek utama tidak tertutup teks atau portrait.
4. Gunakan overlay hitam transparan sekitar 45–65%, disesuaikan dengan foto dan hasil uji kontras.
5. Tambahkan gradient gelap lebih kuat di sisi kiri dan bagian bawah untuk menjaga keterbacaan panel cerita.
6. Tambahkan vignette halus pada tepi gambar.
7. Pertahankan tekstur asli foto agar dokumentasi tetap autentik.
8. Gunakan cinematic color grading yang dominan gelap, warm brown, dan muted gold.
9. Foto harus tetap terlihat sebagai elemen visual utama. Jangan membuatnya terlalu blur atau terlalu gelap.
10. Jangan menggunakan background polos atau gradient sebagai pengganti foto.
11. Background tidak berganti otomatis setiap beberapa detik. Gunakan satu foto panggung yang konsisten selama pengunjung berada pada hero.

Jika foto workshop autentik belum tersedia, jangan menggantinya dengan foto AI atau foto stok yang diklaim sebagai workshop/penenun lokal. Siapkan slot aset dan fallback yang jujur, atau gunakan foto autentik lain yang sudah mendapat izin.

### A3. Floating circular portraits

Potret penenun adalah elemen khas dan pusat interaksi hero. Setiap potret berupa foto asli yang dipotong menjadi lingkaran sempurna.

Ketentuan:
- Gunakan `border-radius: 50%`.
- Gunakan `object-fit: cover`.
- Jangan membuat bentuk oval.
- Gunakan foto asli setiap penenun.
- Ukuran lingkaran bervariasi.
- Posisi tidak sejajar seperti grid.
- Susun secara vertikal dengan pola staggered, zig-zag, atau organik.
- Sebagian lingkaran berada lebih tinggi dan sebagian lebih rendah.
- Jarak antarl ingkaran tidak harus seragam, tetapi komposisi harus seimbang dan setiap target klik tetap mudah dijangkau.
- Portrait utama harus lebih menonjol.
- Jangan menggunakan kotak putih atau background card di belakang foto. Lingkaran harus tampak mengambang langsung di atas background.

Ukuran awal desktop:
| Peran portrait | Ukuran |
|---|---:|
| Portrait utama/featured | 140–160 px |
| Portrait kedua | 100–115 px |
| Portrait ketiga | 90–105 px |
| Portrait keempat | 105–120 px |
| Portrait pendukung | 85–100 px |

Gunakan ukuran tersebut sebagai panduan awal, bukan angka kaku. Sesuaikan dengan viewport dan jumlah penenun yang benar-benar tersedia.

Target komposisi desktop adalah sekitar 5–7 lingkaran terlihat sekaligus **jika jumlah foto penenun nyata yang tersedia mencukupi**. Jangan menambah portrait fiktif hanya untuk memenuhi jumlah visual. Jika data nyata kurang dari jumlah tersebut, tampilkan jumlah yang tersedia dengan komposisi tetap seimbang.

### A4. Efek visual dan status portrait

- Gunakan border tipis ivory transparan pada portrait.
- Gunakan shadow lembut agar portrait terasa terangkat.
- Foto harus tetap tajam dan tidak diberi filter berlebihan.
- Portrait aktif membesar secara halus dan dapat diberi border ivory atau muted gold.
- Portrait tidak aktif sedikit diredupkan, tetapi tetap jelas terlihat dan dapat dipilih.
- Hover pada desktop memberi scale ringan dan memperjelas label nama penenun.
- Jangan menggeser posisi portrait secara drastis ketika hover atau aktif.
- Jangan menghilangkan portrait lain ketika satu portrait dipilih.
- Gunakan transisi sekitar 300–500 ms sebagai titik awal, lalu uji agar tetap terasa responsif.
- Hormati `prefers-reduced-motion`.

### A5. Label nama dan lokasi

Setiap portrait mempunyai label kecil di dekatnya. Posisi label menyesuaikan komposisi portrait, bukan selalu diletakkan pada satu posisi yang kaku.

Isi label:
- Nama penenun.
- Lokasi asal.

Gaya:
- Nama menggunakan DM Serif Display italic.
- Lokasi menggunakan Manrope dengan ukuran lebih kecil.
- Warna warm ivory atau putih dengan kontras yang cukup.
- Ukuran label sederhana dan elegan.
- Label tidak boleh menutupi portrait lain atau menghalangi interaksi.
- Pada hover/focus/active, label dapat menjadi lebih jelas.
- Jangan menampilkan tahun, pengalaman, atau gelar jika datanya tidak tersedia.

### A6. Panel cerita di sisi kiri

Panel kiri menampilkan informasi penenun yang sedang dipilih. Urutan konten:

1. Eyebrow label: `PENENUN HITA`.
2. Nama penenun sebagai heading utama.
3. Lokasi asal.
4. Tahun mulai menenun, hanya jika tersedia dan terverifikasi.
5. Deskripsi singkat sejarah dan perjalanan penenun.
6. Tombol `Jelajahi Kisah`.

Gaya:
- Heading menggunakan DM Serif Display.
- Deskripsi menggunakan Manrope.
- Jaga panjang deskripsi agar panel tetap terbaca dan tidak menutupi background secara berlebihan.
- Gunakan hierarchy yang jelas antara label, nama, lokasi, metadata, narasi, dan CTA.

Saat pengguna memilih portrait lain:
- Nama panel kiri berubah.
- Lokasi berubah.
- Tahun mulai menenun berubah jika tersedia.
- Deskripsi berubah.
- Status portrait aktif berubah.
- Indikator pagination berubah.

Gunakan crossfade/opacity transition dan sedikit vertical movement. Jangan membuat panel berkedip atau berpindah secara kasar.

### A7. Interaksi portrait — pilih dahulu, buka detail melalui CTA

Interaksi harus mengikuti logika berikut:

1. Setiap portrait dapat dipilih.
2. Ketika portrait dipilih, update `selectedArtisan` atau state setara.
3. Portrait aktif mendapatkan visual active state.
4. Panel kiri memperbarui data sesuai penenun terpilih.
5. Label nama/lokasi dan pagination dots memperbarui status.
6. **Klik portrait tidak langsung berpindah halaman.** Klik hanya memilih penenun dan memperbarui panel cerita.
7. Tombol `Jelajahi Kisah` membuka halaman Detail Penenun sesuai penenun yang sedang aktif.
8. Tidak ada autoplay yang terus mengganti penenun tanpa interaksi pengguna.
9. Jangan membuat interaksi yang menyebabkan portrait kehilangan target klik ketika animasi berlangsung.

Dukung mouse, touch, dan keyboard. Pada keyboard, portrait dan pagination harus dapat difokuskan serta dipilih dengan Enter/Space.

### A8. Vertical pagination dots

Tambahkan indikator navigasi berupa titik-titik kecil yang tersusun vertikal di sisi paling kanan viewport.

Fungsi:
- Satu dot untuk setiap penenun yang benar-benar tersedia pada kumpulan data hero.
- Menunjukkan jumlah penenun yang tersedia.
- Menunjukkan penenun yang sedang aktif.
- Dapat diklik untuk memilih penenun.
- Memperbarui portrait aktif dan panel cerita.
- Dot aktif menggunakan muted gold.
- Dot tidak aktif menggunakan warm ivory transparan.
- Berikan transisi yang halus.
- Berikan accessible label, misalnya `Pilih penenun: [nama]`, bukan hanya titik tanpa keterangan.
- Pada layar kecil, posisinya boleh disesuaikan atau digabungkan dengan kontrol carousel yang lebih nyaman, tetapi fungsinya harus tetap tersedia.

### A9. Responsive behavior

**Desktop**
- Pertahankan full-screen background.
- Panel cerita di kiri sekitar 55%.
- Floating circular portraits di kanan sekitar 45%.
- Vertical pagination berada di sisi paling kanan.
- Pertahankan komposisi organik dan staggered.

**Tablet**
- Sesuaikan proporsi panel dan ukuran lingkaran.
- Kurangi overlap jika ruang terbatas.
- Pastikan label, panel, dan portrait tidak saling menutupi.
- Pagination tetap mudah digunakan.

**Mobile**
- Background fotografi tetap menjadi panggung visual dan dapat memenuhi hero.
- Tampilkan informasi penenun dengan jelas.
- Susun portrait sebagai horizontal carousel atau susunan portrait yang nyaman.
- Panel cerita dapat ditempatkan di atas atau di bawah carousel sesuai hasil desain terbaik.
- Hindari lingkaran saling menutupi.
- Pastikan target sentuh cukup besar.
- Jangan bergantung pada hover.
- Sederhanakan parallax dan animasi berat.
- Seluruh fungsi pemilihan penenun dan CTA harus tetap tersedia.

## B. Kisah para penenun

Setiap profil dapat memuat:
- Nama penenun.
- Foto potret.
- Lokasi asal.
- Tahun/periode mulai menenun jika diketahui.
- Lama pengalaman jika dapat dibuktikan.
- Sejarah singkat perjalanan menenun.
- Keahlian atau karakteristik hasil tenun.
- Dokumentasi aktivitas.
- Karya Ulos yang terkait.

Jangan mengarang tahun, usia, generasi, pengalaman, penghargaan, atau sejarah.

## C. Halaman Detail Penenun

Gunakan immersive editorial storytelling, bukan layout standar foto di kiri dan teks di kanan.

Komponen yang dapat digunakan:
- Hero portrait/full-bleed photography.
- Nama dan asal.
- Narasi pembuka.
- Timeline perjalanan jika data waktunya tersedia.
- Foto aktivitas menenun.
- Detail tangan, alat, dan proses.
- Cerita keterampilan.
- Koleksi Ulos yang dibuat.
- Hubungan dengan rumah tenun jika relevan.

Timeline hanya boleh dibuat jika terdapat informasi kronologis yang nyata. Jika tidak, gunakan narasi editorial tanpa tanggal rekaan.

## D. Rumah Tenun dan Toko Ulos pilihan

Bagian ini menampilkan toko atau rumah tenun yang:
- Memiliki proses produksi/tenun sendiri.
- Memiliki karakteristik hasil tenun yang dapat dijelaskan.
- Memiliki Ulos khas atau jenis hasil tenun yang dapat dikenali.
- Memiliki sejarah/perjalanan usaha yang dapat didokumentasikan.
- Memiliki identitas dan lokasi yang dapat dikonfirmasi.

Jangan memasukkan toko yang hanya menjual ulang produk sebagai rumah produksi tenun sendiri.

### Informasi setiap rumah tenun
- Nama toko/rumah tenun.
- Lokasi.
- Foto tempat.
- Sejarah singkat.
- Ciri khas hasil tenun.
- Jenis Ulos yang menjadi kekhasan jika diketahui.
- Dokumentasi proses produksi.
- Identitas pemilik atau penenun jika tersedia.

### Desain rumah tenun

Jangan menggunakan daftar kartu seragam dengan gambar di atas dan tulisan di bawah.

Gunakan komposisi editorial yang bervariasi:
- Full-width photography.
- Mosaic gallery.
- Large image with overlay typography.
- Horizontal gallery.
- Asymmetric grid.
- Short historical narrative.
- Detail visual tekstur dan hasil tenun.

Setiap rumah tenun harus memiliki cerita yang terasa spesifik, tetapi tetap berada dalam satu design system.

---

# E5. BELAJAR ULOS — CULTURAL EDUCATION

## Tujuan

Memberikan akses edukasi mengenai Ulos dan nilai budaya yang berkaitan dengannya, terutama bagi generasi muda dan pengunjung yang belum mengenal Ulos secara mendalam.

## Materi yang dapat ditampilkan

- Pengenalan Ulos.
- Jenis-jenis Ulos.
- Motif dan karakteristik.
- Makna dan filosofi.
- Penggunaan Ulos dalam kehidupan masyarakat Batak.
- Nilai budaya dan tradisi.
- Pengetahuan yang berkaitan dengan penenunan.

Materi harus mengikuti referensi yang dapat dipertanggungjawabkan. Jangan menganggap seluruh jenis Ulos mempunyai makna, fungsi, atau penggunaan yang sama.

## Desain

Gunakan pendekatan visual ensiklopedis-editorial:
- Judul besar.
- Foto detail kain.
- Komposisi motif.
- Narasi pendek dan terstruktur.
- Section yang dapat dieksplorasi.
- Navigasi internal jika materi panjang.
- Ilustrasi hanya jika benar-benar membantu penjelasan.

Jangan membuat kuis, skor, atau gamifikasi kecuali diminta secara khusus oleh pemilik proyek.

---

# E6. PROSES MENENUN — CRAFT DOCUMENTATION

## Tujuan

Memperlihatkan keterampilan dan proses produksi Ulos melalui dokumentasi visual dan narasi.

## Materi yang dapat disajikan

- Pengenalan alat tenun.
- Bahan yang digunakan.
- Persiapan benang.
- Pewarnaan.
- Penyusunan benang.
- Tahapan penenunan.
- Pembentukan motif.
- Penyelesaian hasil tenun.

Urutan harus berdasarkan dokumentasi atau keterangan penenun yang relevan. Jangan membuat satu prosedur universal apabila teknik berbeda menurut jenis Ulos atau praktik pengrajin.

## Arah desain

Gunakan referensi visual galeri workshop yang gelap dan sinematik:
- Background fotografi besar dengan overlay gelap.
- Galeri foto berukuran bervariasi.
- Satu foto utama sebagai fokus.
- Foto pendukung dalam susunan asimetris.
- Caption singkat dan mudah dibaca.
- Navigasi galeri minimalis.
- Transisi visual yang halus.
- Section dokumentasi yang terasa seperti cerita proses, bukan album foto biasa.

Jangan meniru elemen reservasi, pemesanan, atau komersial dari referensi galeri. Ambil hanya pendekatan visual dan komposisi galeri.

---

# E7. TENTANG PLATFORM

## Tujuan

Menjelaskan alasan platform dibuat, masalah yang ingin dijawab, dan kontribusinya terhadap pemberdayaan ekonomi serta pelestarian budaya.

## Konten

- Latar belakang.
- Permasalahan utama.
- Tujuan platform.
- Hubungan penenun, konsumen, dan generasi muda.
- Penjelasan bagaimana katalog meningkatkan akses informasi.
- Penjelasan bagaimana detail produk membantu transparansi.
- Penjelasan bagaimana cerita penenun memperkenalkan pelaku budaya.
- Penjelasan bagaimana edukasi mendukung pengenalan keterampilan.
- Hubungan dengan SDG 8 dan SDG 10.

Gunakan narasi yang faktual, tidak berlebihan, dan tidak mengklaim dampak yang belum diukur.

---

# BAGIAN F — DESIGN SYSTEM DAN ART DIRECTION

## F1. Nama pendekatan visual

**Contemporary Batak Textile Editorial Experience**

Karakter visual harus menggabungkan:
- Heritage.
- Contemporary editorial.
- Cinematic photography.
- Premium cultural catalogue.
- Immersive storytelling.
- Restrained motion design.

Hasil harus terlihat dirancang oleh tim desain profesional, bukan template yang diberi ornamen budaya secara acak.

## F1.1 Sintesis referensi visual: Dame Ulos × Eastern Edition

Gunakan dua referensi ini sebagai arah desain yang saling melengkapi, bukan sebagai template yang disalin.

### Referensi 1 — Dame Ulos
https://dameulos.id/

Ambil prinsip visual dan konten yang relevan:
- Identitas budaya Ulos menjadi pusat pengalaman.
- Fotografi kain, tekstur, motif, penenun, alat, dan workshop harus terasa autentik.
- Galeri dapat menggunakan susunan foto dengan ukuran berbeda.
- Gunakan foto utama yang kuat, foto pendukung, caption kecil, dan overlay gelap jika diperlukan.
- Bangun suasana editorial yang hangat, intim, dan berhubungan dengan proses kerajinan.
- Gunakan dokumentasi proses sebagai cerita visual, bukan sekadar dekorasi.

Dari screenshot referensi Dame Ulos yang diberikan pemilik proyek, pelajari komposisi galeri workshop: foto besar sebagai fokus, beberapa foto pendukung dalam grid asimetris, caption sederhana, latar foto yang dilapisi gelap, dan aksen warna emas/earth tone. Ambil prinsip komposisinya, bukan menyalin struktur atau asetnya.

### Referensi 2 — Eastern Edition
https://en.eastern-edition.com/#none

Ambil prinsip:
- Navigasi yang ringkas dan tidak mendominasi halaman.
- Hierarki informasi yang bersih.
- Pengelompokan konten yang jelas.
- Pengalaman eksplorasi koleksi yang terkurasi.
- Penggunaan ruang kosong yang terukur.
- Penyajian cerita, filosofi, arsip, dan koleksi sebagai bagian dari identitas brand.
- Perpindahan dari navigasi utama menuju subkategori yang terorganisasi.

Untuk proyek ini, sederhanakan navbar lebih jauh: jangan tampilkan nama halaman secara langsung di header. Tampilkan satu kontrol menu ringkas dan pindahkan semua nama halaman ke immersive navigation overlay sesuai spesifikasi D3.

### Sintesis yang harus diwujudkan

Gabungkan kedua referensi dengan prinsip:

**Minimal shell, rich content.**

Artinya:
- Bagian chrome website seperti navbar, kontrol, dan footer dibuat sederhana.
- Area konten memiliki fotografi kuat, editorial typography, dan storytelling yang mendalam.
- Navigasi tidak ramai.
- Halaman tidak terasa kosong atau terlalu minimal sampai kehilangan informasi.
- Setiap halaman memiliki komposisi visual khusus berdasarkan tujuan kontennya.
- Pengalaman visual kaya, tetapi struktur informasi tetap mudah dipahami.

Dame Ulos menjadi inspirasi kedekatan dengan produk, proses, dan konteks budaya. Eastern Edition menjadi inspirasi kesederhanaan navigasi, kurasi, dan hierarki editorial. Identitas, aset, teks, dan kode kedua website tidak boleh disalin.

## F1.2 Prinsip layout halaman yang lebih mendalam

Halaman boleh memiliki beberapa section editorial dan subhalaman detail apabila kedalaman informasi membutuhkannya. Jangan membatasi setiap halaman menjadi satu hero dan beberapa card pendek.

Namun, jangan menambah route atau fitur hanya untuk memperpanjang website. Tambahan section harus menjawab kebutuhan informasi atau alur pengguna.

Gunakan:
- Long-form storytelling untuk sejarah dan filosofi.
- Gallery chapter untuk dokumentasi visual.
- Product detail sections untuk sembilan karakteristik Ulos.
- Artisan profile pages untuk perjalanan penenun.
- Weaving-house detail pages untuk sejarah dan kekhasan rumah tenun.
- Contextual links untuk membawa pengunjung ke konten yang berkaitan.

Atur panjang halaman dengan ritme: pembukaan, konteks, eksplorasi visual, informasi inti, hubungan ke konten lain, dan penutup. Gunakan penanda section atau navigasi internal hanya pada halaman panjang yang benar-benar membutuhkannya.

Jangan membuat halaman panjang yang hanya menumpuk foto dan animasi. Setiap section harus memiliki fungsi informasi atau fungsi navigasi.

## F2. Palet warna utama

Gunakan palet awal berikut sebagai design tokens:

| Token | Hex | Fungsi |
|---|---|---|
| Obsidian | `#100E0C` | Latar gelap utama |
| Dark Brown | `#241A13` | Latar section gelap sekunder |
| Muted Gold | `#B99A62` | Aksen, garis, label, detail |
| Warm Ivory | `#E8DFCF` | Teks terang dan section editorial |
| Ulos Red | `#963F37` | Aksen terbatas yang terinspirasi warna tekstil |
| Charcoal | `#282522` | Teks gelap pada latar terang |

### Aturan warna

1. Gunakan Obsidian dan Dark Brown untuk pengalaman katalog dan storytelling sinematik.
2. Gunakan Warm Ivory untuk section editorial yang membutuhkan kenyamanan membaca.
3. Gunakan Muted Gold sebagai aksen, bukan warna dominan.
4. Gunakan Ulos Red secara terbatas.
5. Jangan membuat semua halaman hitam. Variasikan section gelap dan terang dengan ritme yang konsisten.
6. Pastikan kontras teks memenuhi standar aksesibilitas.
7. Jangan menggunakan gradient dekoratif yang tidak diperlukan.

## F3. Tipografi

Rekomendasi:
- **DM Serif Display** untuk heading editorial, judul halaman, dan headline.
- **Manrope** untuk body text, navigasi, metadata, label, dan kontrol.

Aturan:
- Gunakan skala tipografi yang konsisten.
- Heading boleh besar dan ekspresif, tetapi tidak mengorbankan keterbacaan.
- Body text harus nyaman dibaca pada desktop dan mobile.
- Hindari terlalu banyak variasi font weight.
- Gunakan italic secara terbatas untuk aksen editorial.

## F4. Layout dan grid

Gunakan:
- Editorial asymmetrical grid.
- Full-bleed imagery.
- Large typography.
- Generous whitespace.
- Layered photography.
- Vertical storytelling.
- Horizontal galleries.
- Overlapping compositions secara terkendali.
- Alternasi section gelap dan terang.

Jangan:
- Membuat seluruh section sebagai kumpulan card.
- Menempatkan semua foto di kiri dan teks di kanan secara berulang.
- Menggunakan grid seragam untuk semua halaman.
- Memenuhi seluruh layar dengan elemen.
- Menggunakan radius besar pada semua komponen tanpa alasan.

## F5. Bentuk komponen

Komponen UI harus memiliki karakter editorial dan minimalis.

- Button: sederhana, tegas, memiliki hover dan focus state.
- Link: jelas dan memiliki affordance.
- Navigation: ringan dan tidak mendominasi.
- Card: digunakan hanya jika sesuai dengan konten.
- Badge/label: kecil dan fungsional.
- Divider: tipis dan digunakan untuk membangun struktur.
- Modal/lightbox: hanya untuk kebutuhan foto atau informasi yang benar-benar perlu.
- Carousel controls: minimal, terlihat, dan dapat diakses.
- Form: tidak diperlukan kecuali ada kebutuhan eksplorasi yang telah disetujui.

Jangan membuat widget dengan gaya generik. Setiap komponen harus mengikuti art direction keseluruhan.

---

# BAGIAN G — MOTION DESIGN DAN INTERAKSI

## G1. Prinsip motion

Animasi harus:
- Membantu orientasi.
- Memberikan feedback.
- Memperjelas hubungan antarelemen.
- Membuat eksplorasi terasa menyenangkan.
- Mendukung storytelling.
- Tidak menghalangi pembacaan.
- Tidak membuat pengguna kehilangan kendali.

Gunakan animasi secara selektif. Jangan membuat semua elemen bergerak.

## G2. Interaksi yang disarankan

| Teknik | Penggunaan |
|---|---|
| Image reveal | Membuka foto hero dan foto utama |
| Mask transition | Perpindahan visual |
| Scroll reveal | Memunculkan konten ketika masuk viewport |
| Subtle parallax | Memberi kedalaman pada foto |
| Horizontal carousel | Eksplorasi koleksi Ulos |
| Circular portrait hover | Interaksi potret penenun |
| Typography entrance | Judul dan narasi |
| Gallery transition | Perpindahan dokumentasi |
| Page transition | Perpindahan route jika tidak mengganggu |
| Hover image scale | Memberi feedback pada item yang dapat dipilih |

## G3. Durasi dan easing

Gunakan nilai awal yang konsisten:
- Micro-interaction: sekitar 160–240 ms.
- Hover/press: sekitar 180–300 ms.
- Reveal: sekitar 400–700 ms.
- Section transition: sekitar 500–900 ms jika dibutuhkan.

Gunakan easing yang natural. Hindari bounce berlebihan, gerakan elastis yang tidak relevan, dan animasi yang terlalu lambat.

Nilai tersebut merupakan titik awal dan harus diuji pada implementasi nyata.

## G4. Aksesibilitas motion

- Dukung `prefers-reduced-motion`.
- Jangan mengandalkan hover saja untuk fungsi penting.
- Pastikan interaksi dapat digunakan dengan keyboard.
- Jangan membuat gerakan otomatis yang mengganggu.
- Hindari animasi yang menyebabkan pusing atau mengganggu pengguna.
- Pada perangkat mobile, sederhanakan efek yang berat.

---

# BAGIAN H — TEKNOLOGI DAN ARSITEKTUR NEXT.JS

## H1. Stack

Gunakan:
- Next.js dengan App Router.
- React.
- JavaScript.
- Tailwind CSS.
- Motion (Framer Motion) untuk animasi bila diperlukan.
- Lucide React untuk ikon.
- Next/Image untuk optimasi gambar.
- Figma untuk rancangan UI/UX.
- Vercel atau hosting kompatibel untuk deployment.

Jangan mengganti stack tanpa alasan dan persetujuan pemilik proyek.

## H2. Server dan Client Components

- Gunakan Server Components sebagai default jika sesuai.
- Gunakan Client Components hanya untuk bagian yang memerlukan interaksi browser seperti carousel, hover state, filter interaktif, menu mobile, dan animasi.
- Hindari menjadikan seluruh aplikasi Client Component.
- Jangan menambahkan backend atau API route.
- Jangan membuat server actions untuk transaksi atau manajemen data.

## H3. Struktur project yang direkomendasikan

Struktur ini adalah target arsitektur. Jika repository yang sudah ada memiliki struktur berbeda dan sehat, audit terlebih dahulu sebelum melakukan refactor.

```text
ulos-platform/
├── public/
│   ├── images/
│   │   ├── ulos/
│   │   ├── artisans/
│   │   ├── weaving-houses/
│   │   ├── process/
│   │   └── heritage/
│   ├── textures/
│   └── fonts/
│
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── globals.css
│   │   │
│   │   ├── ulos-hita/
│   │   │   ├── page.js
│   │   │   └── [slug]/
│   │   │       └── page.js
│   │   │
│   │   ├── penenun-hita/
│   │   │   ├── page.js
│   │   │   └── [slug]/
│   │   │       └── page.js
│   │   │
│   │   ├── rumah-tenun/
│   │   │   └── [slug]/
│   │   │       └── page.js
│   │   │
│   │   ├── belajar-ulos/
│   │   │   └── page.js
│   │   │
│   │   ├── proses-menenun/
│   │   │   └── page.js
│   │   │
│   │   └── tentang-platform/
│   │       └── page.js
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── home/
│   │   ├── ulos/
│   │   ├── artisan/
│   │   ├── weaving-house/
│   │   ├── education/
│   │   ├── process/
│   │   ├── storytelling/
│   │   ├── gallery/
│   │   ├── motion/
│   │   └── ui/
│   │
│   ├── data/
│   │   ├── ulos.js
│   │   ├── artisans.js
│   │   ├── weaving-houses.js
│   │   ├── education.js
│   │   └── process.js
│   │
│   ├── lib/
│   │   ├── utils.js
│   │   ├── content-validation.js
│   │   └── metadata.js
│   │
│   └── hooks/
│       ├── useReducedMotion.js
│       └── useCarousel.js
│
├── package.json
└── README.md
```

## H4. Aturan komponen

- Buat komponen reusable untuk navbar, footer, typography, buttons, image wrappers, carousel controls, dan section containers.
- Pisahkan komponen khusus halaman dari komponen umum.
- Jangan membuat satu file halaman raksasa.
- Jangan menduplikasi komponen yang sama tanpa alasan.
- Gunakan nama komponen yang menjelaskan fungsi.
- Jaga agar data tidak tercampur dengan markup.
- Hindari overengineering.

## H5. Routing

Gunakan dynamic route berbasis slug untuk:
- Detail Ulos.
- Detail Penenun.
- Detail Rumah Tenun.

Slug harus berasal dari data konten yang nyata dan stabil.

Jika slug tidak ditemukan, tampilkan halaman not-found yang dirancang sesuai design system.

---

# BAGIAN I — STRUKTUR DATA KONTEN DAN VALIDITAS INFORMASI

## I1. Prinsip umum

File data lokal adalah sumber konten statis, bukan database dan bukan dummy data.

Setiap konten harus memiliki sumber atau dasar yang jelas. Simpan metadata sumber jika diperlukan agar tim dapat memeriksa asal informasi.

Jangan mempublikasikan data yang belum diverifikasi.

## I2. Struktur data Ulos

Contoh skema struktur, bukan data produk nyata:

```javascript
{
  slug: "slug-produk",
  name: "Nama Ulos yang telah diverifikasi",
  type: "Jenis Ulos",
  shortDescription: "Deskripsi faktual singkat",
  origin: "Asal jika terverifikasi",
  images: [
    {
      src: "/images/ulos/nama-file.jpg",
      alt: "Deskripsi visual yang akurat",
      caption: "Keterangan foto jika diperlukan"
    }
  ],
  material: "Bahan",
  dye: "Pewarna",
  technique: "Teknik pembuatan",
  motifComplexity: "Kerumitan motif",
  motifMeaning: "Makna motif",
  productionDuration: "Lama pengerjaan",
  artisanId: "ID penenun yang nyata",
  price: "Harga yang diberikan pengrajin",
  sourceNotes: "Sumber atau catatan verifikasi"
}
```

Jangan memasukkan nilai contoh ke production content. Skema ini hanya menjelaskan bentuk data.

## I3. Struktur data penenun

```javascript
{
  slug: "slug-penenun",
  name: "Nama penenun",
  portrait: "/images/artisans/portrait.jpg",
  origin: "Lokasi asal yang terverifikasi",
  introduction: "Pengantar singkat berdasarkan sumber",
  history: "Riwayat perjalanan yang telah dikonfirmasi",
  weavingExperience: "Pengalaman jika diketahui",
  skills: ["Keahlian yang telah dikonfirmasi"],
  timeline: [],
  gallery: [],
  ulosSlugs: [],
  weavingHouseSlug: null,
  sourceNotes: "Sumber atau catatan verifikasi"
}
```

Timeline hanya diisi apabila terdapat data kronologis yang valid. Jangan membuat tanggal untuk mempercantik tampilan.

## I4. Struktur data rumah tenun

```javascript
{
  slug: "slug-rumah-tenun",
  name: "Nama rumah tenun",
  location: "Lokasi terverifikasi",
  coverImage: "/images/weaving-houses/cover.jpg",
  gallery: [],
  shortHistory: "Sejarah singkat yang terverifikasi",
  weavingIdentity: "Ciri khas produksi yang dapat dibuktikan",
  signatureUlos: [],
  artisans: [],
  producesOwnWeaving: true,
  sourceNotes: "Sumber atau catatan verifikasi"
}
```

`producesOwnWeaving` hanya boleh bernilai `true` jika terdapat bukti bahwa tempat tersebut benar-benar menghasilkan tenun sendiri. Jangan menyimpulkan dari fakta bahwa toko menjual Ulos.

## I5. Struktur data edukasi dan proses

Pisahkan materi edukasi dari dokumentasi proses.

Materi edukasi dapat memiliki:
- Judul.
- Ringkasan.
- Isi.
- Gambar.
- Referensi.
- Hubungan dengan jenis Ulos atau motif jika valid.

Dokumentasi proses dapat memiliki:
- Judul tahap.
- Urutan tahap berdasarkan sumber.
- Deskripsi.
- Foto/video yang memiliki izin.
- Nama penenun atau sumber dokumentasi jika relevan.

## I6. Sumber dan atribusi

- Catat sumber informasi sejarah, makna, dan istilah budaya.
- Catat pemilik atau pemberi izin foto.
- Gunakan caption dan credit jika diperlukan.
- Jangan menggunakan foto orang tanpa izin atau dasar penggunaan yang sesuai.
- Jangan mengklaim autentik, bersertifikat, atau terverifikasi tanpa proses pembuktian.

---

# BAGIAN J — UX, ACCESSIBILITY, RESPONSIVENESS, DAN SEO

## J1. User journey konsumen

Beranda → Ulos Hita → memilih Ulos → Detail Ulos → memahami sembilan karakteristik → mengenal penenun.

## J2. User journey pengunjung yang tertarik pada penenun

Beranda → Penenun Hita → memilih potret penenun → Detail Penenun → membaca sejarah → melihat karya dan rumah tenun terkait.

## J3. User journey generasi muda

Beranda → Belajar Ulos → mengenal jenis/makna → Proses Menenun → mengeksplorasi tahapan dan dokumentasi → mengenal penenun.

## J4. Responsiveness

### Desktop
- Gunakan komposisi editorial luas.
- Manfaatkan foto besar.
- Pertahankan whitespace.
- Carousel dan lingkaran potret harus berfungsi dengan pointer dan keyboard.

### Tablet
- Sesuaikan jumlah kolom.
- Pertahankan hierarki tipografi.
- Hindari elemen yang saling bertumpuk tanpa alasan.

### Mobile
- Prioritaskan keterbacaan dan navigasi.
- Ubah komposisi lingkaran penenun menjadi carousel atau susunan portrait yang nyaman.
- Carousel katalog harus mendukung swipe.
- Hindari horizontal overflow yang tidak disengaja.
- Sederhanakan parallax dan animasi berat.
- Pastikan seluruh fungsi tetap tersedia tanpa hover.

## J5. Accessibility

- Gunakan semantic HTML.
- Pastikan kontras warna memadai.
- Semua gambar penting memiliki alt text.
- Navigasi dapat digunakan dengan keyboard.
- Focus state terlihat.
- Kontrol carousel memiliki label yang jelas.
- Hindari interaksi yang hanya bergantung pada hover.
- Dukung reduced motion.
- Gunakan heading secara hierarkis.
- Jangan menyampaikan informasi penting hanya melalui warna.

## J6. SEO dan metadata

- Setiap halaman memiliki title dan meta description relevan.
- Gunakan URL slug yang jelas.
- Gunakan heading yang terstruktur.
- Optimalkan ukuran dan format gambar.
- Gunakan metadata Open Graph jika diperlukan.
- Gunakan teks alternatif yang deskriptif.
- Hindari keyword stuffing.
- Jangan membuat structured data yang mengklaim transaksi atau rating jika tidak tersedia.

---

# BAGIAN K — PERFORMANCE DAN QUALITY CONTROL

## K1. Performance

- Gunakan Next/Image.
- Optimalkan gambar dan ukuran file.
- Gunakan format modern seperti WebP/AVIF bila sesuai.
- Lazy-load gambar yang tidak berada di viewport awal.
- Hindari mengunduh video besar secara otomatis.
- Batasi penggunaan library animasi.
- Gunakan Client Component hanya jika diperlukan.
- Hindari layout shift.
- Uji performa pada jaringan dan perangkat menengah.

## K2. Quality assurance

Sebelum menyatakan pekerjaan selesai, periksa:

- Semua route dapat dibuka.
- Semua link bekerja.
- Semua tombol mempunyai fungsi.
- Carousel dapat digunakan dengan mouse, touch, dan keyboard.
- Filter hanya menggunakan data nyata.
- Tidak ada data rekaan.
- Tidak ada elemen transaksi.
- Tidak ada login atau dashboard.
- Tidak ada horizontal overflow.
- Layout responsif.
- Gambar tidak pecah.
- Alt text tersedia.
- Reduced motion berfungsi.
- Konsistensi warna dan tipografi terjaga.
- Tidak ada error console yang mengganggu.
- Halaman not-found berfungsi.
- Metadata halaman tersedia.

---

# BAGIAN L — TAHAP IMPLEMENTASI

Lakukan secara bertahap. Jangan membuat semua halaman sekaligus tanpa validasi.

## Tahap 1 — Audit dan fondasi
- Audit project Next.js.
- Pastikan App Router.
- Periksa package dan dependensi.
- Periksa struktur file.
- Buat design tokens.
- Tetapkan global typography dan layout.

## Tahap 2 — Design system
- Warna.
- Tipografi.
- Spacing.
- Grid.
- Button.
- Link.
- Navigation.
- Footer.
- Image treatment.
- Motion rules.
- Responsive rules.

## Tahap 3 — Beranda
- Implementasikan hero.
- Pengenalan Ulos.
- Koleksi pilihan yang datanya tersedia.
- Pengenalan penenun.
- Warisan keterampilan.
- Tujuan platform.

## Tahap 4 — Ulos Hita
- Katalog sinematik.
- Carousel vertikal bertingkat.
- Search/filter sesuai data.
- Detail Ulos.
- Sembilan informasi wajib.
- Hubungan ke profil penenun.

## Tahap 5 — Penenun Hita
- Hero dengan portrait lingkaran.
- Nama dan lokasi.
- Detail penenun.
- Sejarah.
- Timeline jika valid.
- Rumah tenun pilihan.
- Detail rumah tenun.
- Galeri dokumentasi.

## Tahap 6 — Belajar Ulos dan Proses Menenun
- Materi edukasi.
- Dokumentasi proses.
- Galeri editorial.
- Navigasi antarmateri.

## Tahap 7 — Tentang Platform
- Latar belakang.
- Tujuan.
- Hubungan pengguna.
- Kontribusi SDG.

## Tahap 8 — Integrasi dan pengujian
- Navigasi lintas halaman.
- Link antarproduk dan penenun.
- Responsive.
- Accessibility.
- Performance.
- Content verification.
- SEO.

## Tahap 9 — Deployment dan demonstrasi
- Build production.
- Deploy website.
- Uji URL publik.
- Siapkan source code.
- Siapkan video demonstrasi.
- Pastikan seluruh aset yang digunakan memiliki izin yang sesuai.

---

# BAGIAN M — DESIGN ACCEPTANCE CRITERIA

Desain hanya dianggap memenuhi arahan proyek jika:

1. Pengunjung langsung memahami bahwa website berfokus pada Ulos Batak.
2. Ulos Hita mempunyai katalog sinematik dengan kartu vertikal bertingkat dan carousel yang dapat dieksplorasi.
3. Detail Ulos memuat sembilan informasi wajib.
4. Harga dinyatakan sebagai informasi dari pengrajin, bukan harga yang dihitung platform.
5. Penenun Hita menggunakan Hero Cinematic Interactive Circular Portrait Gallery dengan background workshop full-bleed minimal 100svh.
6. Hero Penenun Hita memiliki komposisi kiri sekitar 55% untuk panel cerita dan kanan sekitar 45% untuk floating circular portraits.
7. Portrait menggunakan foto penenun nyata, ukuran bervariasi, posisi staggered/zig-zag, label nama/lokasi, active state, dan tidak menggunakan card background.
8. Klik portrait hanya mengubah penenun aktif dan panel cerita; tombol `Jelajahi Kisah` yang membuka Detail Penenun.
9. Hero memiliki vertical pagination dots yang dapat digunakan dan tidak menggunakan autoplay.
10. Setiap potret merepresentasikan penenun nyata dan dapat ditelusuri ke cerita mereka.
11. Penenun Hita juga memiliki bagian rumah tenun pilihan yang menghasilkan tenun sendiri dan memiliki karakteristik serta sejarah.
8. Cerita penenun dan rumah tenun menggunakan layout editorial, bukan pola foto kiri dan teks kanan yang berulang.
9. Belajar Ulos memiliki materi edukasi yang dapat dipertanggungjawabkan.
10. Proses Menenun menggunakan dokumentasi visual dan galeri editorial.
11. Desain tidak terasa seperti marketplace atau dashboard.
12. Desain tidak menggunakan pola generik AI.
13. Animasi mendukung eksplorasi dan tidak mengganggu.
14. Semua halaman responsif.
15. Konten yang tidak tersedia tidak diganti dengan data fiktif.
16. Seluruh interaksi utama bekerja.
17. Identitas visual konsisten tetapi layout tiap halaman tidak monoton.
18. Tidak ada transaksi, login, dashboard, backend, database, atau dummy data.

---

# BAGIAN N — PROMPT EKSEKUSI FINAL UNTUK AI DESIGN / CODING AGENT

Salin bagian ini sebagai instruksi utama ketika memberikan proyek kepada AI lain.

---

## MASTER EXECUTION PROMPT

Kamu bertugas mengembangkan sebuah platform digital katalog dan storytelling budaya Ulos Batak untuk National Web Design Competition Invofest 2026.

Topik yang telah ditetapkan adalah **Digital Economy & Sociopreneurship (SDG 8 & SDG 10)**. Jangan mengubah topik atau objek utama proyek.

Platform ini bukan marketplace. Platform hanya memperkenalkan produk Ulos, menyajikan sembilan informasi karakteristik produk, memperkenalkan penenun dan rumah tenun pilihan, serta menyediakan edukasi dan dokumentasi proses menenun.

### 1. Teknologi

Gunakan:
- Next.js App Router.
- React.
- JavaScript.
- Tailwind CSS.
- Motion/Framer Motion untuk animasi jika diperlukan.
- Lucide React.
- Next/Image.

Jangan menambahkan backend, database, API server, login, register, dashboard, checkout, keranjang, payment gateway, atau sistem transaksi.

### 2. Halaman

Bangun halaman:
- Beranda.
- Ulos Hita.
- Detail Ulos.
- Penenun Hita.
- Detail Penenun.
- Detail Rumah Tenun.
- Belajar Ulos.
- Proses Menenun.
- Tentang Platform.

Hanya dua nama navigasi yang telah ditetapkan menggunakan istilah Batak: Ulos Hita dan Penenun Hita.

Navbar tidak boleh menampilkan deretan nama halaman. Gunakan header minimal: logo/wordmark di kiri dan satu kontrol menu ringkas di kanan. Seluruh nama halaman muncul setelah kontrol menu dibuka dalam immersive navigation overlay/panel. Kelompokkan menu menjadi Explore, Discover the Craft, dan Platform. Sertakan deskripsi singkat, close control, keyboard support, focus management, dan responsive behavior. Gunakan breadcrumb serta CTA kontekstual di dalam halaman agar pengunjung tetap memahami posisinya.

### 3. Desain

Gunakan art direction **Contemporary Batak Textile Editorial Experience**.

Palet:
- Obsidian `#100E0C`.
- Dark Brown `#241A13`.
- Muted Gold `#B99A62`.
- Warm Ivory `#E8DFCF`.
- Ulos Red `#963F37`.
- Charcoal `#282522`.

Tipografi:
- DM Serif Display untuk heading.
- Manrope untuk body dan UI.

Gunakan fotografi besar, komposisi asimetris, editorial typography, ruang kosong yang terukur, full-bleed imagery, dan layout yang bervariasi.

Jangan membuat semua halaman sebagai grid card generik.

### 4. Desain khusus Ulos Hita

Gunakan katalog dengan:
- Background gelap.
- Kartu foto vertikal.
- Kartu tengah lebih menonjol.
- Kartu samping lebih rendah.
- Foto sebagai fokus.
- Nama dan informasi singkat di bawah.
- Carousel yang dapat di-drag, swipe, dan diakses dengan keyboard.
- Transisi halus.

Ketika kartu dipilih, buka Detail Ulos.

Detail Ulos harus menampilkan sembilan informasi:
1. Jenis Ulos.
2. Bahan.
3. Pewarna.
4. Teknik pembuatan.
5. Kerumitan motif.
6. Makna motif.
7. Lama pengerjaan.
8. Identitas pengrajin.
9. Harga yang ditentukan pengrajin.

Jangan menghilangkan informasi tersebut.

### 5. Desain khusus Penenun Hita — spesifikasi wajib

Implementasikan Hero **Cinematic Interactive Circular Portrait Gallery** sesuai seluruh detail pada Bagian E4.A.

Ringkasan elemen wajib:
- Full-screen hero minimal `100svh`.
- Satu background fotografi workshop/aktivitas menenun Ulos yang full-bleed.
- Overlay hitam sekitar 45–65%, gradient gelap lebih kuat di kiri/bawah, dan vignette halus.
- Area kiri sekitar 55% untuk panel cerita penenun aktif.
- Area kanan sekitar 45% untuk floating circular portraits.
- Lingkaran sempurna, ukuran bervariasi, pola staggered/zig-zag/organik, tanpa card background.
- Target 5–7 portrait terlihat di desktop hanya jika data nyata mencukupi.
- Border ivory transparan, shadow lembut, active state muted gold/ivory, dan inactive state sedikit redup.
- Label nama italic DM Serif Display dan lokasi Manrope di dekat setiap portrait.
- Panel kiri menampilkan label PENENUN HITA, nama, lokasi, tahun mulai menenun jika terverifikasi, deskripsi, dan tombol `Jelajahi Kisah`.
- Klik portrait hanya memilih penenun dan memperbarui panel kiri. Jangan langsung berpindah route.
- Tombol `Jelajahi Kisah` membuka Detail Penenun yang sedang dipilih.
- Vertical pagination dots di sisi kanan, satu per penenun, dapat dipilih, dan memiliki accessible label.
- Tidak ada autoplay.
- Mobile menggunakan horizontal portrait carousel atau susunan portrait yang nyaman dan tetap mempertahankan fungsi pemilihan.
- Gunakan data penenun dan foto workshop yang nyata serta memiliki izin penggunaan.

Di bawah/di luar hero, halaman tetap memuat kisah para penenun dan bagian Rumah Tenun pilihan sesuai spesifikasi E4. Jangan mengubahnya menjadi grid card generik. Detail Penenun dan Detail Rumah Tenun tetap menggunakan editorial storytelling.

### 6. Proses Menenun

Gunakan galeri dokumenter yang gelap dan sinematik:
- Foto utama besar.
- Foto pendukung dengan ukuran bervariasi.
- Grid asimetris.
- Caption singkat.
- Transisi galeri.
- Dokumentasi proses berdasarkan sumber nyata.

Jangan menambahkan fitur reservasi atau transaksi dari referensi visual.

### 7. Data

Jangan membuat dummy data. Jangan mengarang produk, pengrajin, rumah tenun, sejarah, harga, lokasi, motif, makna, atau proses.

Gunakan data statis lokal dari sumber yang nyata dan diverifikasi. Buat struktur data yang konsisten dan modular. Jika konten belum tersedia, tampilkan empty state yang elegan atau sembunyikan bagian opsional tersebut.

Jangan menampilkan data contoh sebagai data nyata.

### 8. UX dan motion

Website harus menarik untuk dieksplorasi tetapi tetap mudah digunakan.

Gunakan:
- Image reveal.
- Scroll reveal.
- Subtle parallax.
- Horizontal carousel.
- Circular portrait interaction.
- Typography animation.
- Gallery transition.
- Page transition secara selektif.

Dukung keyboard, touch, focus state, reduced motion, dan responsive layout.

### 9. Aturan kualitas

- Jangan mengubah konsep.
- Jangan menambah marketplace.
- Jangan menambah dashboard.
- Jangan menambah login.
- Jangan menambah backend.
- Jangan menambah dummy data.
- Jangan mengarang sejarah atau informasi budaya.
- Jangan menggunakan template AI generik.
- Jangan membuat layout foto-kiri-teks-kanan berulang.
- Jangan membuat komponen yang tidak berfungsi.
- Jangan mengorbankan performance demi efek visual.
- Jangan mengubah design system tanpa alasan.
- Jangan menghapus struktur project yang ada sebelum audit.

### 10. Cara implementasi

Mulai dengan audit repository dan laporan singkat. Setelah itu, buat design system, lalu implementasikan halaman secara bertahap.

Setiap halaman harus mempunyai:
- Tujuan yang jelas.
- Informasi yang relevan.
- Layout yang dirancang khusus.
- Interaksi yang berfungsi.
- Responsive behavior.
- Data yang memiliki dasar.
- Hubungan yang logis dengan halaman lain.

Sebelum menyelesaikan pekerjaan, uji seluruh route, interaksi, responsive layout, accessibility, performa, dan validitas konten.

**Hasil akhir yang diharapkan:** sebuah website budaya digital Ulos Batak dengan kualitas visual premium, pengalaman eksplorasi yang kuat, informasi yang dapat dipercaya, dan implementasi Next.js yang modular serta terawat.

Jangan berhenti pada tampilan yang sekadar menarik. Bangun pengalaman digital yang mempunyai alasan, struktur, dan nilai yang jelas.

---

# BAGIAN O — CATATAN KEPUTUSAN YANG MASIH TERBUKA

Bagian ini bukan izin untuk AI mengarang atau memutuskan sendiri. Hal-hal berikut harus dikonfirmasi atau diisi oleh pemilik proyek ketika informasinya tersedia.

1. Nama merek utama platform dan logo final.
2. Daftar produk Ulos nyata yang akan ditampilkan.
3. Foto produk dan izin penggunaannya.
4. Sembilan informasi faktual untuk setiap produk.
5. Harga yang telah diberikan atau disetujui pengrajin.
6. Daftar penenun yang akan ditampilkan.
7. Foto, sejarah, lokasi, dan informasi penenun.
8. Daftar rumah tenun/toko yang benar-benar melakukan proses tenun sendiri.
9. Sejarah dan ciri khas setiap rumah tenun.
10. Referensi budaya untuk makna motif dan penggunaan Ulos.
11. Materi serta dokumentasi proses menenun.
12. Informasi kontak atau tautan eksternal jika memang ingin ditampilkan.
13. Aset visual, video, dan kredit foto.
14. Ketentuan teknis final dari guidebook resmi Invofest jika dokumennya telah tersedia dan dapat dibaca.

Jangan mengisi bagian yang belum tersedia dengan informasi rekaan.

---

# BAGIAN P — PENERAPAN REFERENSI DAN ATURAN ANTI-DRIFT

## P1. Referensi yang harus dibaca sebagai inspirasi

1. Dame Ulos — https://dameulos.id/
2. Eastern Edition — https://en.eastern-edition.com/#none

Gunakan referensi tersebut untuk memahami prinsip visual, bukan untuk menyalin identitas brand, aset foto, teks, kode, atau struktur halaman secara mentah.

## P2. Prioritas ketika mengambil keputusan desain

Jika ada beberapa pilihan desain, gunakan urutan prioritas berikut:

1. Kebenaran dan kelengkapan informasi Ulos.
2. Keterpahaman pengguna dan kemudahan eksplorasi.
3. Identitas budaya dan autentisitas dokumentasi.
4. Konsistensi art direction.
5. Keunikan dan kualitas visual.
6. Animasi dan efek dekoratif.

Efek visual tidak boleh mengalahkan informasi dan UX.

## P3. Pemeriksaan navbar

Sebelum menyerahkan desain, pastikan:
- Tidak ada nama halaman yang berjajar di navbar.
- Header hanya menampilkan identitas platform dan satu kontrol menu ringkas.
- Menu dapat dibuka dan ditutup.
- Semua halaman utama dapat ditemukan dari menu.
- Pengunjung tetap dapat berpindah halaman melalui CTA kontekstual.
- Menu berfungsi dengan keyboard dan touch.
- Navbar tidak memuat login, akun, cart, atau elemen transaksi.
- Navbar tidak mengambil ruang vertikal berlebihan.

## P4. Pemeriksaan kesesuaian referensi

- Dari Dame Ulos: pertahankan kedekatan dengan Ulos, proses menenun, foto workshop, galeri asimetris, dan narasi budaya.
- Dari Eastern Edition: pertahankan kesederhanaan navigasi, pengelompokan konten, whitespace, dan hierarki editorial.
- Dari konsep awal proyek: pertahankan katalog Ulos dengan kartu vertikal bertingkat dan Penenun Hita dengan portrait lingkaran.
- Jangan mengubah palet warna utama tanpa persetujuan.
- Jangan mengubah sembilan informasi wajib Detail Ulos.
- Jangan menghilangkan bagian Rumah Tenun.
- Jangan mengubah frontend-only menjadi platform transaksi.
- Jangan menambahkan data fiktif.

## P5. Aturan anti-drift untuk AI

Sebelum membuat perubahan besar, bandingkan usulan dengan dokumen ini. Jika usulan:
- mengubah tujuan platform,
- menambah backend atau transaksi,
- menghapus bagian yang sudah disepakati,
- mengubah nama halaman,
- mengubah sembilan informasi Ulos,
- mengubah konsep katalog,
- menghilangkan portrait-circle Penenun Hita,
- atau mengubah karakter visual menjadi template generik,

maka jangan langsung menerapkannya. Jelaskan konflik dan tunggu persetujuan pemilik proyek.

# BAGIAN Q — ADDENDUM WAJIB: HERO PENENUN HITA

Sumber spesifikasi: dokumen tambahan pemilik proyek berjudul `Pasted text(20261110-162600).txt`, khususnya bagian Layout utama, Model background, Model bulatan-bulatan foto penenun, Posisi nama dan label, Panel deskripsi, Indikator navigasi, Prompt final, dan catatan jumlah portrait.

Addendum ini berasal dari instruksi tambahan pemilik proyek dan menjadi bagian wajib dari Master PRD. Jika deskripsi circular portrait pada bagian lain terlihat lebih umum atau berbeda, **spesifikasi rinci Hero Penenun Hita pada Bagian E4.A dan addendum ini yang berlaku**.

## Q1. Komposisi yang tidak boleh diubah

- Satu foto dokumentasi workshop/aktivitas menenun menjadi background full-bleed.
- Full-screen hero minimal `100svh`.
- Panel cerita penenun di kiri sekitar 55%.
- Floating circular portrait gallery di kanan sekitar 45%.
- Lingkaran foto tersusun organik/staggered, bukan grid lurus.
- Nama dan lokasi berada dekat portrait.
- Vertical pagination dots berada di sisi paling kanan.

## Q2. Logika interaksi yang tidak boleh diubah

- Klik portrait = memilih penenun dan memperbarui panel cerita.
- Klik pagination dot = memilih penenun yang sesuai.
- Tombol `Jelajahi Kisah` = membuka halaman Detail Penenun.
- Tidak ada autoplay.
- Semua kontrol harus dapat digunakan dengan mouse, touch, dan keyboard.

## Q3. Batasan konten dan aset

- Gunakan foto workshop dan foto penenun yang autentik serta diizinkan.
- Jangan menggunakan foto AI generik untuk merepresentasikan penenun nyata.
- Jangan mengarang nama, lokasi, sejarah, tahun mulai menenun, atau pengalaman.
- Target 5–7 portrait desktop hanya berlaku jika jumlah data nyata mencukupi.
- Jika data belum tersedia, bangun struktur komponen tanpa menampilkan data fiktif.

## Q4. Pemeriksaan sebelum diterima

Hero Penenun Hita hanya dianggap selesai jika background full-bleed, overlay, pembagian area, portrait circles, label, panel cerita dinamis, pagination dots, CTA, responsive behavior, dan seluruh aturan aksesibilitas telah diuji.

Jangan menganggap hero selesai hanya karena lingkaran foto sudah muncul. Seluruh komposisi dan logika interaksi wajib berfungsi.

# PENUTUP — PRINSIP PRODUK

Platform ini harus menjaga keseimbangan empat unsur:

1. **Product clarity:** pengunjung memahami Ulos yang ditampilkan.
2. **Artisan visibility:** pengunjung mengenal penenun dan rumah tenun di balik produk.
3. **Cultural understanding:** pengunjung memahami nilai dan proses budaya.
4. **Digital experience:** seluruh informasi disajikan melalui desain yang profesional, estetis, interaktif, dan mudah dieksplorasi.

**Setiap halaman harus mempunyai fungsi. Setiap fitur harus mempunyai alasan. Setiap informasi harus memiliki dasar. Setiap animasi harus mendukung pengalaman. Setiap keputusan desain harus menjaga identitas Ulos Batak.**

Jangan melenceng dari prinsip tersebut selama proses desain dan implementasi.
