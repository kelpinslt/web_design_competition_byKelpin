import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Cara PARTONUN memperlakukan data pengunjung. Draf untuk ditinjau pemilik proyek.",
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <h2>Data yang dikumpulkan</h2>
      <p>
        PARTONUN tidak memiliki fitur login, registrasi, formulir, keranjang, atau pembayaran. Website ini tidak meminta
        pengunjung memasukkan data pribadi.
      </p>
      <h2>Tautan ke pihak lain</h2>
      <p>
        Halaman Rumah Tenun dan daftar sumber memuat tautan ke website, Instagram, dan WhatsApp pihak lain. Kebijakan
        privasi pihak tersebut berlaku saat Anda membuka tautannya.
      </p>
      <h2>Foto dan identitas</h2>
      <p>
        Nama dan foto penenun serta rumah tenun ditampilkan dari sumber publik yang dicantumkan. Pihak yang ingin data
        atau fotonya diperbaiki atau dihapus dapat menghubungi kami.
      </p>
      <h2>Kontak</h2>
      <p>
        {site.email} · {site.phone.label}
      </p>
    </LegalPage>
  );
}
