# PARTONUN --- Paket Final Build v3.0

Paket ini menyelaraskan keputusan terbaru: **Rumah Tenun tetap dibuat**
dan menggunakan tiga profil pilihan dari `08_TOKO_ULOS_TENUN.md`.

## File utama

-   `PARTONUN_MASTER_EXECUTION_PROMPT_v3.md` --- prompt utama untuk
    ditempel ke Claude Code. Ini instruksi eksekusi, bukan sekadar
    prompt desain.
-   `PARTONUN_MASTER_IMPLEMENTATION_PACK_v3.md` --- indeks keputusan
    terbaru dan data inti Rumah Tenun.
-   `08_TOKO_ULOS_TENUN.md` --- data sumber Dame Ulos, Galeri Ulos
    Sianipar, dan Tobatenun/Jabu Bonang.

## Data pendukung yang perlu ada di repository

-   `MASTER_PRD_ULOS_HITA_INVOFEST_2026_V3.md`
-   `MASTER_PARTONUN.md`
-   `01_ULOS_MASTER_DATA.md`
-   `PARTONUN_Profil_5_Penenun_Ulos.md`
-   `02_PENENUN_REFERENSI_PUBLIK.md`
-   `03_RUMAH_TENUN_MASTER_DATA.md`
-   `04_BELAJAR_ULOS.md`
-   `05_PROSES_MENENUN.md`
-   `06_IMAGE_ASSET_MANIFEST.md`
-   `07_KONTEN_BERANDA_DAN_TENTANG_v2.md`
-   `99_DAFTAR_SUMBER (1).md`

## Aset Rumah Tenun

Pastikan tiga gambar tersedia di `public/images/RUMAH_TENUN/`: -
`dameulos.png` - `Galeri Ulos Sianipar.png` - `Tobatenun.png`

Claude Code harus memeriksa path dan nama file aktual di repository.
Jangan mengganti foto tersebut dengan gambar AI.

## Cara menggunakan

1.  Pastikan seluruh dokumen pendukung dan aset sudah berada di
    repository.
2.  Buka repository PARTONUN di Claude Code.
3.  Tempel isi `PARTONUN_MASTER_EXECUTION_PROMPT_v3.md` atau minta
    Claude membaca file tersebut.
4.  Minta Claude menjalankan audit dan langsung melanjutkan
    implementasi.
5.  Periksa laporan lint, build, route, dan responsive sebelum
    menganggap website selesai.

## Catatan

Versi 3.0 membatalkan keputusan versi 2.0 yang menghapus Rumah Tenun.
Pada tahap ini tidak dibuat route terpisah `/toko-ulos`; tiga entitas
toko/galeri disajikan melalui section Rumah Tenun & Galeri Ulos Pilihan
dan detail `/rumah-tenun/[slug]`.
