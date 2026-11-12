import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Services",
  description: "Ketentuan penggunaan PARTONUN. Draf untuk ditinjau pemilik proyek.",
  robots: { index: false },
};

export default function TermsServicesPage() {
  return (
    <LegalPage title="Terms & Services">
      <h2>Sifat platform</h2>
      <p>
        PARTONUN adalah katalog, dokumentasi, dan edukasi tentang Ulos Batak. PARTONUN bukan marketplace dan tidak
        melayani transaksi, pemesanan, atau pembayaran.
      </p>
      <h2>Informasi dan harga</h2>
      <p>
        Informasi disusun dari sumber yang dicantumkan pada setiap halaman dan dapat berubah. Harga yang tercantum adalah
        referensi dari sumber bertanggal, bukan penawaran. PARTONUN tidak memberikan sertifikasi keaslian.
      </p>
      <h2>Gambar</h2>
      <p>
        Gambar berlabel “Ilustrasi” dibuat dengan AI untuk suasana dan tidak menggambarkan orang atau tempat tertentu. Foto
        lain mencantumkan sumbernya.
      </p>
      <h2>Koreksi</h2>
      <p>
        Jika menemukan informasi yang keliru, hubungi {site.email}.
      </p>
    </LegalPage>
  );
}
