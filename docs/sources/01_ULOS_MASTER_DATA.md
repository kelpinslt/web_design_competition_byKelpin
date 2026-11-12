# 01_ULOS_MASTER_DATA.md

**Halaman:** `/ulos-hita` dan `/ulos-hita/[slug]`
**Jumlah koleksi:** 10 jenis Ulos
**Tanggal penelusuran:** 2026-11-11
**Kode sumber:** lihat `99_DAFTAR_SUMBER.md`

## Cara membaca dokumen ini

- Setiap Ulos memakai **sembilan bidang Detail Ulos** dari `MASTER_PARTONUN.md` §4.2: identitas, bahan, pewarna, teknik, kerumitan motif, makna motif, lama pengerjaan, pengrajin, dan harga.
- Data di sini adalah **data jenis Ulos** (karakter umum jenisnya), bukan data satu lembar kain tertentu. Bidang yang bergantung pada satu kain (pengrajin, lama pengerjaan, harga) diberi contoh terdokumentasi lengkap dengan sumbernya, atau ditandai `Informasi belum tersedia`.
- **Pengrajin/penenun:** semuanya `Informasi belum tersedia`. Isi `penenun_ids` setelah data penenun dari proposal dipetakan. Jangan menghubungkan penenun ke Ulos tanpa bukti.
- **Harga:** harga indikatif dari sumber publik, lengkap dengan tanggal sumbernya. Harga bisa berubah. Tidak ada transaksi di platform.
- Status `[PERLU VERIFIKASI]` artinya data sudah ada sumbernya, tetapi sebaiknya dikonfirmasi ke penenun atau narasumber adat sebelum final.

## Data umum yang berlaku untuk hampir semua jenis

Data ini boleh dipakai sebagai konteks di Belajar Ulos. Di Detail Ulos, pakai hanya bila tidak ada data khusus per jenis.

| Bidang | Data umum | Sumber |
|---|---|---|
| Bahan | Benang **kapas/katun**. Dulu dipintal sendiri, kini umumnya dibeli jadi. Di Tarutung dipakai "benang 100" yang lebih halus dan perlu dikanji | S02, S05, S24 |
| Pewarna tradisional | Biru dari **indigo (salaon)**, merah dari **kayu secang dan mengkudu**, kuning dari **kunyit**, hitam dari campuran mengkudu dan indigo, hijau dari campuran indigo dan kunyit | S02 |
| Pewarna masa kini | Banyak penenun beralih ke **pewarna kimia/sintetis** karena pewarna alami lama dan tidak praktis | S05, S06, S17 |
| Alat | **Gedogan** (alat tenun gendong/backstrap): lebar kain sebatas rentang lengan penenun. Kemudian dikenal **ATBM** (alat tenun bukan mesin) | S02, S25 |
| Teknik | Tenun **lungsi-dominan (warp-faced)**. Teknik yang dipakai antara lain ikat lungsi, **jugia** (pakan/lungsi tambahan), dan **jungkit/sungkit** (pakan tambahan). Satu ulos biasanya memadukan beberapa teknik | S15 |
| Makna warna | Putih = kesucian dan kejujuran. Merah = keberanian. Hitam = duka atau kepemimpinan. Kuning = kekayaan dan kesuburan | S01, S03 |

---

## ULOS-001 · Ulos Ragidup

```yaml
id: ULOS-001
slug: ulos-ragidup
nama: "Ulos Ragidup"
nama_alternatif: ["Ragi Hidup", "Ragiidup"]
jenis: "Ulos nabalga (kelas atas / upacara adat)"
daerah_asal: "Batak Toba, Sumatera Utara"
deskripsi_singkat: >
  Ulos yang dianggap paling tinggi dan sakral oleh Batak Toba. Namanya berarti
  "pola kehidupan"; coraknya dibuat seolah tampak hidup.
status_verifikasi: "perlu verifikasi"
foto_utama: "ULOS-001-COVER"
```

| # | Bidang | Isi | Sumber |
|---|---|---|---|
| 1 | Identitas/Jenis | Ulos Ragidup (Ragi Hidup). Ulos nabalga dari Batak Toba | S01, S04 |
| 2 | Bahan | Benang katun. Contoh terdokumentasi: Ragidup Silinggom dari Dame Ulos memakai benang katun, ukuran 102 × 206 cm | S04, S09 |
| 3 | Pewarna | Contoh Dame Ulos memakai **pewarna alam**. Di pasaran ada juga versi pewarna sintetis | S09 · `[PERLU VERIFIKASI]` per kain |
| 4 | Teknik | Bagian ujung dihias dengan **pakan tambahan (supplementary weft)**. Contoh Dame Ulos ditenun dengan **gedogan** | S04, S09 |
| 5 | Kerumitan motif | **Sangat tinggi.** Disebut sebagai ulos yang paling sulit dibuat. The Met mencatat 5 komponen: 2 panel sisi yang disambung ke bagian tengah (1 panel besar dan 2 panel ujung bermotif geometris). Fitinline menyederhanakannya menjadi 3 bagian. Satu ujung dianggap "laki-laki" dan ujung lain "perempuan", dibedakan dari motifnya. Google Arts & Culture menyebut Ragidup ditenun oleh empat perempuan | S01, S04, S23, S25, S29 |
| 6 | Makna motif | Lambang kehidupan, doa untuk kebahagiaan dan panjang umur. Diberikan sebagai *ulos ni tondi* ("ulos jiwa") kepada perempuan yang mengandung anak pertama. Dalam pernikahan diberikan ayah mempelai perempuan kepada ibu mempelai laki-laki. Juga dipakai untuk membungkus jenazah. *Variasi penafsiran:* ada sumber yang menyebut Ragidup terutama dipakai laki-laki atau jandanya | S01, S02, S04 |
| 7 | Lama pengerjaan | Contoh: kain set dari Dame Ulos dikerjakan **4 bulan** (jenis tidak disebut spesifik). Penenun di Hutaraja menyebut satu ulos bisa sampai **90 hari** | S08, S10 · *jangan digeneralisasi* |
| 8 | Pengrajin | Informasi belum tersedia | — |
| 9 | Harga indikatif | Contoh: Ragidup Silinggom (Dame Ulos, gedogan, pewarna alam) **Rp13.000.000** | S09 · diakses 2026-11-11 |

**Fungsi & cara pakai:** *siabithononton* (dipakai di badan). Diberikan pada pernikahan, kehamilan anak pertama, dan kematian [S01, S04, S16].

---

## ULOS-002 · Ulos Ragi Hotang

```yaml
id: ULOS-002
slug: ulos-ragi-hotang
nama: "Ulos Ragi Hotang"
nama_alternatif: ["Ragihotang", "Ulos Hela (sebutan fungsinya di pernikahan)"]
jenis: "Ulos berderajat tinggi"
daerah_asal: "Batak Toba; sentra terkenal: Desa Meat, Kab. Toba"
deskripsi_singkat: >
  Ulos bercorak garis menyerupai jalinan rotan (hotang), dipakai untuk memberkati
  pasangan pengantin agar ikatan mereka kuat seperti rotan.
status_verifikasi: "perlu verifikasi"
foto_utama: "ULOS-002-COVER"
```

| # | Bidang | Isi | Sumber |
|---|---|---|---|
| 1 | Identitas/Jenis | Ulos Ragi Hotang. *Hotang* = rotan. Dalam pernikahan dikenal sebagai **ulos hela** | S01, S12 |
| 2 | Bahan | Benang katun. Kualitas benang ikut menentukan harga (Desa Meat) | S07 |
| 3 | Pewarna | Informasi belum tersedia untuk sentra tertentu. Didominasi merah karena dipakai di prosesi pernikahan | S07 |
| 4 | Teknik | Siagian (2016) mencatat Ragi Hotang ditenun dengan ATBM, dan sebagian produksinya kini beralih ke alat tenun mesin. Masih ada pengrajin yang memakai gedogan, misalnya Donalindo Tenun (gedogan, benang 100 katun, estimasi 1 bulan per pesanan) | S32, S33 · `[PERLU VERIFIKASI]` |
| 5 | Kerumitan motif | **Tinggi**, tetapi tidak sesulit Ragidup. Corak garis-garis rotan, tepi lebar berumbai. Di Desa Meat harga bergantung pada motif, **jumlah lidi**, dan tingkat kesulitan | S01, S03, S07 |
| 6 | Makna motif | Ikatan kasih yang kuat dan langgeng seperti rotan. Restu orang tua pada pernikahan (diberikan hula-hula kepada boru/menantu). Juga diberikan sebagai syukur atas lahirnya anak laki-laki. Pada upacara kematian dipakai sebagai penutup jenazah, berarti pekerjaan seseorang di dunia telah selesai | S01, S03, S12, S28 |
| 7 | Lama pengerjaan | Desa Meat: seorang penenun membuat **2–3 lembar dalam dua minggu** | S07 |
| 8 | Pengrajin | Informasi belum tersedia | — |
| 9 | Harga indikatif | Desa Meat: **Rp400.000–600.000** ke pengepul, dijual kembali **> Rp1.000.000** (2022). Hutaraja: bisa mencapai **Rp18.000.000** (2025) | S07, S08 |

---

## ULOS-003 · Ulos Sibolang

```yaml
id: ULOS-003
slug: ulos-sibolang
nama: "Ulos Sibolang"
nama_alternatif: ["Si Bolang"]
jenis: "Ulos adat serbaguna"
daerah_asal: "Batak Toba, Sumatera Utara"
deskripsi_singkat: >
  Ulos biru tua/indigo bermotif mata panah, jenis yang paling banyak dipakai
  karena fungsinya fleksibel — dari penghargaan hingga tanda duka.
status_verifikasi: "perlu verifikasi"
foto_utama: "ULOS-003-COVER"
```

| # | Bidang | Isi | Sumber |
|---|---|---|---|
| 1 | Identitas/Jenis | Ulos Sibolang. Fitinline mengartikannya "ulos berwarna-warni atau belang" | S01, S03 |
| 2 | Bahan | Benang katun | S02, S05 |
| 3 | Pewarna | Tradisional: **indigo dari daun salaon** (*Indigofera tinctoria*) untuk warna biru Sibolang. Di Kec. Muara (Tapanuli Utara) pengrajin sudah beralih ke pewarna kimia | S05 |
| 4 | Teknik | Informasi belum tersedia secara spesifik. Teknik umum: lihat tabel data umum | S15 |
| 5 | Kerumitan motif | **Sedang.** Warna dasar biru tua/hitam dengan pola **mata panah** biru muda dalam lajur garis | S02, S03 |
| 6 | Makna motif | Mata panah = ketegasan dan perlindungan. Juga simbol penghargaan atas jasa seseorang dan tanda duka/belasungkawa. Diberikan sebagai ulos menantu di pernikahan | S03, S22, S30 |
| 7 | Lama pengerjaan | Informasi belum tersedia | — |
| 8 | Pengrajin | Informasi belum tersedia | — |
| 9 | Harga indikatif | Informasi belum tersedia | — |

**Cara pakai:** *siabithononton*, sebagai sarung atau selendang [S01, S02].

---

## ULOS-004 · Ulos Sitoluntuho

```yaml
id: ULOS-004
slug: ulos-sitoluntuho
nama: "Ulos Sitoluntuho"
nama_alternatif: ["Sitolutuho", "Sitolu Tuho"]
jenis: "Ulos kecil / pelengkap"
daerah_asal: "Batak Toba, Sumatera Utara"
deskripsi_singkat: "Ulos dengan tiga garis, dipakai sebagai ikat kepala atau selendang."
status_verifikasi: "perlu verifikasi"
foto_utama: "ULOS-004-COVER"
```

| # | Bidang | Isi | Sumber |
|---|---|---|---|
| 1 | Identitas/Jenis | Ulos Sitoluntuho, "ulos dengan tiga garis". Termasuk jenis ulos penting menurut Encyclocrafts | S01, S15 |
| 2 | Bahan | Benang katun (data umum) | S02 |
| 3 | Pewarna | Informasi belum tersedia | — |
| 4 | Teknik | Informasi belum tersedia | — |
| 5 | Kerumitan motif | **Rendah–sedang.** Motif tiga garis berjajar | S01 |
| 6 | Makna motif | Informasi belum tersedia dari sumber terpercaya. *(Kaitan angka tiga dengan Dalihan Na Tolu hanyalah tafsiran, jangan ditampilkan sebagai fakta)* | — |
| 7 | Lama pengerjaan | Informasi belum tersedia | — |
| 8 | Pengrajin | Informasi belum tersedia | — |
| 9 | Harga indikatif | Informasi belum tersedia | — |

**Fungsi:** ikat kepala atau selendang [S01].

---

## ULOS-005 · Ulos Mangiring

```yaml
id: ULOS-005
slug: ulos-mangiring
nama: "Ulos Mangiring"
nama_alternatif: []
jenis: "Ulos sehari-hari dan ulos pemberian keluarga"
daerah_asal: "Batak Toba, Sumatera Utara"
deskripsi_singkat: >
  Ulos bercorak motif kecil yang beriringan, simbol harapan agar keturunan
  terus lahir beriringan.
status_verifikasi: "perlu verifikasi"
foto_utama: "ULOS-005-COVER"
```

| # | Bidang | Isi | Sumber |
|---|---|---|---|
| 1 | Identitas/Jenis | Ulos Mangiring. Koleksi UP Museum Seni (abad ke-20) | S01, S23 |
| 2 | Bahan | Benang katun (data umum) | S02 |
| 3 | Pewarna | Informasi belum tersedia | — |
| 4 | Teknik | Untuk pemberian adat bermakna tinggi, ditenun dengan gedogan | S30 |
| 5 | Kerumitan motif | **Sedang.** Corak motif yang **beriringan** dan berulang | S22 |
| 6 | Makna motif | Diberikan kepada keluarga yang mendapat anak pertama agar mendapat keturunan berikutnya. Diberikan orang tua kepada anak perempuan yang hamil tujuh bulan. Diberikan orang yang dituakan kepada cucu | S01, S22, S30 |
| 7 | Lama pengerjaan | Informasi belum tersedia | — |
| 8 | Pengrajin | Informasi belum tersedia | — |
| 9 | Harga indikatif | Informasi belum tersedia | — |

**Cara pakai:** gendongan anak (parompa), tali-tali (penutup kepala pria), saong (penutup kepala wanita). Termasuk *sihadanghononton* dan *sitalitalihononton* [S01, S16].

---

## ULOS-006 · Ulos Bintang Maratur

```yaml
id: ULOS-006
slug: ulos-bintang-maratur
nama: "Ulos Bintang Maratur"
nama_alternatif: []
jenis: "Ulos besar"
daerah_asal: "Batak Toba, Sumatera Utara"
deskripsi_singkat: >
  Ulos dengan jejeran motif bintang/burung yang tersusun rapi — lambang
  keteraturan, kerukunan, dan kekeluargaan.
status_verifikasi: "perlu verifikasi"
foto_utama: "ULOS-006-COVER"
```

| # | Bidang | Isi | Sumber |
|---|---|---|---|
| 1 | Identitas/Jenis | Ulos Bintang Maratur ("bintang teratur"), ulos besar | S01, S15 |
| 2 | Bahan | Benang katun (data umum) | S02 |
| 3 | Pewarna | Informasi belum tersedia | — |
| 4 | Teknik | Informasi belum tersedia | — |
| 5 | Kerumitan motif | **Sedang–tinggi.** Garis-garis berisi jejeran burung atau bintang yang tersusun rapi | S01 |
| 6 | Makna motif | Patuh, rukun, dan kekeluargaan, termasuk dalam kekayaan dan kekuasaan. Menggambarkan keteraturan dalam keluarga | S01, S08 |
| 7 | Lama pengerjaan | Informasi belum tersedia | — |
| 8 | Pengrajin | Informasi belum tersedia | — |
| 9 | Harga indikatif | Informasi belum tersedia | — |

---

## ULOS-007 · Ulos Sadum

```yaml
id: ULOS-007
slug: ulos-sadum
nama: "Ulos Sadum"
nama_alternatif: ["Sadum Toba", "Sadum Angkola", "Sadum Mandailing", "Sadum Tarutung"]
jenis: "Ulos sukacita"
daerah_asal: "Batak Toba; juga dikenal di Angkola dan Mandailing"
deskripsi_singkat: >
  Ulos warna-warni ceria dengan bingkai garis gelap di kedua sisi, dipakai
  dalam suasana bahagia.
status_verifikasi: "perlu verifikasi"
foto_utama: "ULOS-007-COVER"
```

| # | Bidang | Isi | Sumber |
|---|---|---|---|
| 1 | Identitas/Jenis | Ulos Sadum. Ada beberapa varian daerah: Toba, Angkola, Mandailing, Tarutung | S01, S20 |
| 2 | Bahan | Benang katun (data umum) | S02 |
| 3 | Pewarna | Informasi belum tersedia | — |
| 4 | Teknik | Dapat memadukan tenun lungsi-dominan dan pakan-dominan dalam satu kain. Di Desa Meat ada Sadum buatan mesin yang lebih murah | S07, S15 |
| 5 | Kerumitan motif | **Sedang.** Warna-warni cerah, selalu berbingkai garis gelap di kedua sisi | S01 |
| 6 | Makna motif | Sukacita dan kebahagiaan. Penenun di Kilang Galingging (Balige) menyebut ada simbol-simbol tertentu pada Sadum (detailnya perlu dibaca di S20) | S01, S20 |
| 7 | Lama pengerjaan | Informasi belum tersedia | — |
| 8 | Pengrajin | Informasi belum tersedia | — |
| 9 | Harga indikatif | Hutaraja: bisa mencapai **Rp2.000.000** (2025) | S08 |

**Cara pakai:** *sihadanghononton*. Dipakai sebagai selendang, kenang-kenangan, atau hiasan dinding [S01, S16].

---

## ULOS-008 · Ulos Antak-Antak

```yaml
id: ULOS-008
slug: ulos-antak-antak
nama: "Ulos Antak-Antak"
nama_alternatif: []
jenis: "Ulos duka dan tari"
daerah_asal: "Batak Toba, Sumatera Utara"
deskripsi_singkat: "Ulos selendang orang tua saat melayat, juga dililitkan saat manortor."
status_verifikasi: "perlu verifikasi"
foto_utama: "ULOS-008-COVER"
```

| # | Bidang | Isi | Sumber |
|---|---|---|---|
| 1 | Identitas/Jenis | Ulos Antak-Antak | S01 |
| 2 | Bahan | Benang katun (data umum) | S02 |
| 3 | Pewarna | Informasi belum tersedia | — |
| 4 | Teknik | Informasi belum tersedia | — |
| 5 | Kerumitan motif | Informasi belum tersedia | — |
| 6 | Makna motif | Dipakai saat melayat orang yang meninggal, sebagai tanda penghormatan dan belasungkawa. Jurnal Sarasvati (2024) membahas makna semantiknya (restu, kasih) dan bisa dirujuk untuk pendalaman | S01, S35 · `[PERLU VERIFIKASI]` |
| 7 | Lama pengerjaan | Informasi belum tersedia | — |
| 8 | Pengrajin | Informasi belum tersedia | — |
| 9 | Harga indikatif | Informasi belum tersedia | — |

---

## ULOS-009 · Ulos Pinuncaan

```yaml
id: ULOS-009
slug: ulos-pinuncaan
nama: "Ulos Pinuncaan"
nama_alternatif: ["Pinunsaan", "Puccaan/Pucca (sebutan di pasaran)"]
jenis: "Ulos nabalga — 'induknya ulos'"
daerah_asal: "Batak Toba, Sumatera Utara"
deskripsi_singkat: >
  Ulos besar yang disebut induk segala ulos, tersusun dari lima bagian yang
  ditenun terpisah lalu disatukan.
status_verifikasi: "perlu verifikasi"
foto_utama: "ULOS-009-COVER"
```

| # | Bidang | Isi | Sumber |
|---|---|---|---|
| 1 | Identitas/Jenis | Ulos Pinuncaan (Pinunsaan). Salah satu ulos paling sakral dan bergengsi, lebih langka daripada Ragidup | S01, S29 |
| 2 | Bahan | Benang katun (data umum) | S02 |
| 3 | Pewarna | Informasi belum tersedia | — |
| 4 | Teknik | **Lima bagian ditenun terpisah lalu disatukan.** Pola ujung dibuat dengan pakan tambahan (supplementary weft) | S01, S29 |
| 5 | Kerumitan motif | **Sangat tinggi.** Umumnya marun gelap dengan pola ujung pakan tambahan | S29 |
| 6 | Makna motif | Informasi belum tersedia secara rinci. Tandai sebagai ulos berkedudukan tertinggi | S01, S29 |
| 7 | Lama pengerjaan | Informasi belum tersedia | — |
| 8 | Pengrajin | Informasi belum tersedia | — |
| 9 | Harga indikatif | Informasi belum tersedia. *(Listing "ulos pucca" di marketplace tidak jelas tenun tangan atau mesin, jadi tidak dipakai)* | — |

---

## ULOS-010 · Ulos Suri-Suri

```yaml
id: ULOS-010
slug: ulos-suri-suri
nama: "Ulos Suri-Suri"
nama_alternatif: ["Suri-Suri Ganjang"]
jenis: "Ulos selendang tari"
daerah_asal: "Batak Toba; di Simalungun 'suri-suri' juga nama penutup kepala wanita"
deskripsi_singkat: "Ulos selendang yang dipakai saat margondang (menari diiringi gondang)."
status_verifikasi: "perlu verifikasi"
foto_utama: "ULOS-010-COVER"
```

| # | Bidang | Isi | Sumber |
|---|---|---|---|
| 1 | Identitas/Jenis | Ulos Suri-Suri. Varian Suri-Suri Ganjang tercatat di Kec. Muara, Tapanuli Utara | S01, S34 |
| 2 | Bahan | Benang katun (data umum) | S02 |
| 3 | Pewarna | Informasi belum tersedia | — |
| 4 | Teknik | Informasi belum tersedia | — |
| 5 | Kerumitan motif | Informasi belum tersedia | — |
| 6 | Makna motif | Informasi belum tersedia. *(Arti "suri = sisir" perlu dikonfirmasi ke narasumber)* | — |
| 7 | Lama pengerjaan | Informasi belum tersedia | — |
| 8 | Pengrajin | Informasi belum tersedia | — |
| 9 | Harga indikatif | Informasi belum tersedia | — |

**Cara pakai:** selendang saat margondang. Termasuk *sihadanghononton* [S01, S16].

---

## Ringkasan kelengkapan

| ID | Nama | Bahan | Pewarna | Teknik | Kerumitan | Makna | Lama | Penenun | Harga |
|---|---|---|---|---|---|---|---|---|---|
| ULOS-001 | Ragidup | ✓ | ✓ | ✓ | ✓ | ✓ | contoh | — | ✓ |
| ULOS-002 | Ragi Hotang | ✓ | sebagian | ✓ | ✓ | ✓ | ✓ | — | ✓ |
| ULOS-003 | Sibolang | ✓ | ✓ | umum | ✓ | ✓ | — | — | — |
| ULOS-004 | Sitoluntuho | umum | — | — | ✓ | — | — | — | — |
| ULOS-005 | Mangiring | umum | — | ✓ | ✓ | ✓ | — | — | — |
| ULOS-006 | Bintang Maratur | umum | — | — | ✓ | ✓ | — | — | — |
| ULOS-007 | Sadum | umum | — | ✓ | ✓ | ✓ | — | — | ✓ |
| ULOS-008 | Antak-Antak | umum | — | — | — | ✓ | — | — | — |
| ULOS-009 | Pinuncaan | umum | — | ✓ | ✓ | sebagian | — | — | — |
| ULOS-010 | Suri-Suri | umum | — | — | — | — | — | — | — |

**Paling perlu dicari lagi (lewat wawancara penenun atau proposal):** pewarna, lama pengerjaan, dan harga per kain dari penenun yang profilnya kamu tampilkan. Data ini paling kuat bila berasal dari kain nyata milik penenun tersebut.
