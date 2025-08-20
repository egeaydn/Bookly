"use client";

import { Link } from "@heroui/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-background py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
        {/* Üst Kısım: Logo & Açıklama */}
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-foreground">🚀 Bookly API</h3>
          <p className="text-sm text-muted-foreground">
            Modern rezervasyon sistemi — .NET 8 & Azure SQL ile geliştirildi
          </p>
        </div>

        {/* Orta Kısım: Navigasyon */}
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
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

        {/* Alt Kısım: Copyright */}
        <div className="text-center text-xs text-muted-foreground border-t border-gray-200 dark:border-gray-800 w-full pt-6">
          © {new Date().getFullYear()} <span className="font-semibold">Ege Aydın</span> — Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
