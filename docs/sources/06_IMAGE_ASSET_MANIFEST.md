# 06_IMAGE_ASSET_MANIFEST.md

**Tanggal dibuat:** 2026-11-11
**File Figma (semua gambar):** https://www.figma.com/design/PacKQY9JrZzRymQGD1QcYp

## Aturan pakai aset ini

1. **Semua gambar di manifest ini dibuat AI.** Kolom `source` = `AI-generated (Figma, gpt-image-2.5-flare)`. Gambar ini boleh dipakai sebagai suasana, tekstur, dan ilustrasi, tetapi **jangan disajikan sebagai foto penenun atau rumah tenun nyata** (`MASTER_PARTONUN.md` §11.3). Untuk gambar yang menampilkan tangan atau sosok penenun, pasang caption "Ilustrasi".
2. **Cara mengunduh resolusi penuh:** buka file Figma → pilih frame → Export → PNG (pilih 2x bila perlu lebih besar). Bisa juga membuka link langsung di kolom `url`. **Link langsung kedaluwarsa sekitar 2026-11-18.** File Figma tetap ada setelah itu.
3. **Resolusi:** gambar landscape keluar 1536 × 864 px, portrait 1024 × 1280 px, dan persegi 1024 × 1024 px. Target dokumen master adalah ≥1600 px sisi terpanjang, jadi untuk hero full-width sebaiknya di-upscale (misalnya export 2x di Figma atau pakai upscaler) lalu dikompres ke WebP/AVIF.
4. **Penamaan file:** simpan di `public/images/<folder>/` sesuai nama di kolom `file_name`.

---

## A. Aset suasana & halaman (baru)

| ID aset | file_name | Halaman · section | Ukuran | Orientasi | Focal point | Node Figma |
|---|---|---|---|---|---|---|
| HOME-HERO-01 | `home/home-hero-01.webp` | `/` · hero | 1536×864 | landscape | 78% 60% (ulos di kanan) | 2:2 |
| HOME-STORY-01 | `home/home-story-01.webp` | `/` · cerita penenun / sticky story | 1024×1280 | portrait 4:5 | 50% 50% | 2:3 |
| HOME-STORY-02 | `home/home-story-02.webp` | `/` · koleksi unggulan (background) | 1536×864 | landscape | 28% 55% | 2:4 |
| ULOS-MACRO-01 | `textures/ulos-macro-ragidup.webp` | `/ulos-hita/*` · detail tekstur; background section | 1024×1024 | square | dekoratif | 2:5 |
| ULOS-MACRO-02 | `textures/ulos-macro-rambu.webp` | `/belajar-ulos` · makna warna; detail Ulos | 1024×1024 | square | 50% 70% | 2:6 |
| ULOS-MACRO-03 | `textures/ulos-macro-sibolang.webp` | background section biru / detail Sibolang | 1024×1024 | square | dekoratif | 2:7 |
| PROCESS-STEP-01 | `process/process-01-bahan.webp` | `/proses-menenun` · PROCESS-001; `/belajar-ulos` LEARN-005 | 1536×864 | landscape | 35% 55% | 2:8 |
| PROCESS-STEP-02 | `process/process-02-mangunggas.webp` | `/proses-menenun` · PROCESS-002 | 1536×864 | landscape | 60% 55% | 2:9 |
| PROCESS-STEP-03 | `process/process-03-mangani.webp` | `/proses-menenun` · PROCESS-005 | 1536×864 | landscape | 40% 50% | 2:10 |
| PROCESS-STEP-04 | `process/process-04-martonun.webp` | `/proses-menenun` · hero & PROCESS-007 | 1536×864 | landscape | 35% 60% (ruang teks di kanan) | 2:11 |
| PROCESS-STEP-05 | `process/process-05-manirat.webp` | `/proses-menenun` · PROCESS-008 | 1024×1280 | portrait 4:5 | 55% 55% | 2:12 |
| LEARN-HERO-01 | `learn/learn-hero-01.webp` | `/belajar-ulos` · hero / pengantar jenis ulos | 1536×864 | landscape | 50% 50% | 2:13 |
| ARTISAN-BACKGROUND-01 | `artisan/artisan-bg-01.webp` | `/penenun-hita` · background circular portrait | 1536×864 | landscape | 75% 55% (kiri gelap untuk portrait) | 2:14 |
| HOUSE-PLACEHOLDER-01 | `house/house-placeholder-01.webp` | `/rumah-tenun/[slug]` · cover sementara | 1536×864 | landscape | 50% 60% | 2:15 |
| ABOUT-HERO-01 | `about/about-hero-01.webp` | `/tentang-platform` · hero | 1536×864 | landscape | 20% 75% (ulos kiri bawah) | 2:16 |

### Link unduh langsung (berlaku ±7 hari)

| ID aset | url |
|---|---|
| HOME-HERO-01 | https://www.figma.com/api/mcp/asset/71d4da7a-da8f-4a5b-8eb9-315ab16e9ae8.png |
| HOME-STORY-01 | https://www.figma.com/api/mcp/asset/61915d9f-66dc-476a-a3f6-4ae6bfd5dded.png |
| HOME-STORY-02 | https://www.figma.com/api/mcp/asset/aaebfe36-a8e6-43dd-a6b3-63bd67aff5b4.png |
| ULOS-MACRO-01 | https://www.figma.com/api/mcp/asset/7b412479-3301-485d-bcd1-41fa0524888a.png |
| ULOS-MACRO-02 | https://www.figma.com/api/mcp/asset/3fce6124-b839-468d-876d-6fa60f103c2d.png |
| ULOS-MACRO-03 | https://www.figma.com/api/mcp/asset/f202e2d1-dcfc-4b45-a6d2-eb2950a0c9e8.png |
| PROCESS-STEP-01 | https://www.figma.com/api/mcp/asset/94dd6021-4d00-49c9-8941-69c6b08706c4.png |
| PROCESS-STEP-02 | https://www.figma.com/api/mcp/asset/cb903f64-64bd-4001-9b8d-12dd51d45ff7.png |
| PROCESS-STEP-03 | https://www.figma.com/api/mcp/asset/31eb7757-f150-46e2-8557-e0210c38cd43.png |
| PROCESS-STEP-04 | https://www.figma.com/api/mcp/asset/bd2375d8-5475-4b0c-b223-7cf252896c7c.png |
| PROCESS-STEP-05 | https://www.figma.com/api/mcp/asset/c2f771a1-8a65-463c-948c-0673759f0ba1.png |
| LEARN-HERO-01 | https://www.figma.com/api/mcp/asset/3acade94-05ae-4eb2-bda4-a948d5a490c1.png |
| ARTISAN-BACKGROUND-01 | https://www.figma.com/api/mcp/asset/ac9c8df9-8ead-4d75-b3dd-5b8ebeef96c1.png |
| HOUSE-PLACEHOLDER-01 | https://www.figma.com/api/mcp/asset/15a3604b-e58c-41c9-a82f-213fa3647c71.png |
| ABOUT-HERO-01 | https://www.figma.com/api/mcp/asset/de110fd2-f658-4016-8e8b-6b2083429cce.png |

### Alt text & caption

| ID aset | alt_text | caption | Overlay saran |
|---|---|---|---|
| HOME-HERO-01 | Ulos merah marun bermotif tersampir di pagar kayu, berlatar senja Danau Toba | — | Gradien Obsidian dari kiri, opacity 70% → 0% |
| HOME-STORY-01 | Tangan penenun merapatkan benang ulos pada alat tenun gedogan | Ilustrasi | Tidak perlu; teks di panel terpisah |
| HOME-STORY-02 | Tumpukan ulos terlipat dengan beragam warna dan motif di rak kayu | — | Gradien dari kanan |
| ULOS-MACRO-01 | (dekoratif: `alt=""`) | — | Obsidian 60–80% bila ada teks di atasnya |
| ULOS-MACRO-02 | Detail rumbai ulos merah marun bergaris hitam putih | — | — |
| ULOS-MACRO-03 | (dekoratif: `alt=""`) | — | Obsidian 70% |
| PROCESS-STEP-01 | Benang katun warna merah, hitam, putih, dan biru bersama daun indigo, kayu secang, dan kunyit | Ilustrasi bahan dan pewarna alami | Gradien kanan |
| PROCESS-STEP-02 | Benang lungsi yang dikanji dibentangkan dan disisir di bawah sinar matahari | Ilustrasi mangunggas | — |
| PROCESS-STEP-03 | Tangan menyusun benang lungsi berwarna pada bingkai kayu | Ilustrasi mangani | — |
| PROCESS-STEP-04 | Penenun duduk menenun ulos dengan alat tenun gedogan di dalam rumah kayu | Ilustrasi martonun | Gradien dari kanan untuk teks |
| PROCESS-STEP-05 | Tangan memilin ujung benang ulos menjadi rumbai | Ilustrasi manirat | — |
| LEARN-HERO-01 | Lima jenis ulos dengan warna dan motif berbeda dibentangkan berdampingan | Ilustrasi ragam ulos | Gradien bawah |
| ARTISAN-BACKGROUND-01 | (dekoratif: `alt=""`) | — | Obsidian 50% + blur ringan |
| HOUSE-PLACEHOLDER-01 | Suasana beranda rumah tenun dengan alat tenun dan ulos, berlatar Danau Toba | **Ilustrasi — bukan foto lokasi** | Gradien bawah |
| ABOUT-HERO-01 | Ulos terlipat di bangku kayu menghadap Danau Toba saat fajar | — | Gradien kiri bawah |

> **Catatan ARTISAN-BACKGROUND-01:** dipakai di belakang portrait penenun asli milikmu. Karena gambar ini kosong tanpa sosok, tidak ada risiko tertukar dengan identitas penenun.

---

## B. Foto koleksi 10 Ulos (dibuat sebelumnya)

Ukuran semuanya 1024 × 1280 (portrait 4:5). Caption: "Ilustrasi jenis Ulos".

| ID aset | Entitas | file_name | Node | url (±7 hari sejak 2026-11-11) |
|---|---|---|---|---|
| ULOS-001-COVER | Ragidup | `ulos/ulos-ragidup.webp` | 1:2 | https://www.figma.com/api/mcp/asset/205f3dc8-1e74-409b-abb5-cc96f9cebae4.png |
| ULOS-002-COVER | Ragi Hotang | `ulos/ulos-ragi-hotang.webp` | 1:3 | https://www.figma.com/api/mcp/asset/1a5e99cc-618f-45af-a373-309801d5045c.png |
| ULOS-003-COVER | Sibolang | `ulos/ulos-sibolang.webp` | 1:4 | https://www.figma.com/api/mcp/asset/880bf84f-ab0f-42f5-9013-88d64aa61010.png |
| ULOS-004-COVER | Sitoluntuho | `ulos/ulos-sitoluntuho.webp` | 1:5 | https://www.figma.com/api/mcp/asset/215c12b1-d9fb-4a8f-b3ce-72939479ddd1.png |
| ULOS-005-COVER | Mangiring | `ulos/ulos-mangiring.webp` | 1:6 | https://www.figma.com/api/mcp/asset/5dae2b39-c383-4449-94b4-ced3718df87e.png |
| ULOS-006-COVER | Bintang Maratur | `ulos/ulos-bintang-maratur.webp` | 1:7 | https://www.figma.com/api/mcp/asset/73be4f18-8788-4d6d-a244-50bf4c69e9de.png |
| ULOS-007-COVER | Sadum | `ulos/ulos-sadum.webp` | 1:8 | https://www.figma.com/api/mcp/asset/22944b4a-26ce-4997-b098-0cfb9cc7a321.png |
| ULOS-008-COVER | Antak-Antak | `ulos/ulos-antak-antak.webp` | 1:9 | https://www.figma.com/api/mcp/asset/56f00f16-e370-409e-8ba9-61e1d05b88dd.png |
| ULOS-009-COVER | Pinuncaan | `ulos/ulos-pinuncaan.webp` | 1:10 | https://www.figma.com/api/mcp/asset/55e16351-1f0f-408f-a5b3-bd81ef6c3e37.png |
| ULOS-010-COVER | Suri-Suri | `ulos/ulos-suri-suri.webp` | 1:11 | https://www.figma.com/api/mcp/asset/912a8878-f867-41cf-9f65-254bb8fed39e.png |

---

## C. Aset yang masih kosong

| ID aset | Kebutuhan | Status |
|---|---|---|
| ARTISAN-00x-PORTRAIT | Portrait penenun | Sudah kamu miliki → daftarkan di sini (nama file, pemilik foto) |
| HOUSE-00x-COVER | Foto asli tiap rumah tenun (HOUSE-001…005) | Belum tersedia. Sementara pakai HOUSE-PLACEHOLDER-01 |
| ULOS-00x-MACRO | Foto detail motif per jenis | Belum tersedia. Sementara pakai ULOS-MACRO-01/03 sebagai tekstur umum |
| Logo PARTONUN | Logo master | Dari pemilik project |

## Template satu aset (contoh terisi)

```yaml
id: HOME-HERO-01
file_name: "home-hero-01.webp"
file_path: "public/images/home/home-hero-01.webp"
entity_id: "HOME"
page: "/"
section: "hero"
role: "background"
photographer_or_owner: "AI-generated untuk PARTONUN"
source: "Figma generate_image (gpt-image-2.5-flare), node 2:2, file PacKQY9JrZzRymQGD1QcYp"
permission_status: "milik project"
width: 1536
height: 864
orientation: "landscape"
focal_point: "78% 60%"
alt_text: "Ulos merah marun bermotif tersampir di pagar kayu, berlatar senja Danau Toba"
caption: ""
credit: "Ilustrasi AI"
desktop_crop: "16:9 penuh"
mobile_crop: "4:5, geser ke 75% agar ulos tetap terlihat"
status: "siap"
notes: "Upscale ke ≥1920px sebelum produksi"
```
