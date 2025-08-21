// components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-background mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Sol - Logo & Açıklama */}
        <div className="space-y-4 text-center md:text-left">
          <Image
            src="/Bookly-horizontal.png"
            alt="Bookly Logo"
            width={350}
            height={60}
            className="mx-auto md:mx-0"
          />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Bookly, modern rezervasyon sistemleri için geliştirilmiş 
            .NET 8 &amp; Azure SQL tabanlı güçlü bir platformdur.
          </p>
        </div>

        {/* Orta - Navigasyon */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className="text-base font-semibold">Hızlı Erişim</h3>
          <Link href="/" className="text-muted-foreground hover:text-primary">
            Ana Sayfa
          </Link>
          <Link
            href="https://prodora-api-ege-d5gadjgtb3ahh2hy.westeurope-01.azurewebsites.net/swagger"
            className="text-muted-foreground hover:text-primary"
          >
            API Docs
          </Link>
          <Link
            href="https://github.com/egeaydn"
            className="text-muted-foreground hover:text-primary"
          >
            GitHub
          </Link>
        </div>

        {/* Sağ - Sosyal Medya */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <h3 className="text-base font-semibold">Bizi Takip Et</h3>
          <div className="flex gap-4">
            <Link
              href="https://github.com/egeaydn"
              target="_blank"
              className="text-muted-foreground hover:text-primary"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-muted-foreground hover:text-primary"
            >
              <Twitter size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Alt - Copyright */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} <span className="font-semibold">Ege Aydın</span> — Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
