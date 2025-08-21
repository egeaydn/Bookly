"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import Link from "next/link";

type Props = { userCount: number };

const slides = [
  {
    title: "Hızlı Randevu Yönetimi",
    subtitle: "Tek tıkla oluştur, yönet ve takip et.",
    bg: "linear-gradient(135deg, rgba(79,70,229,0.6), rgba(6,182,212,0.6)), url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80')",
  },
  {
    title: "Güvenli ve Performant",
    subtitle: "Azure SQL & .NET 8 temelli altyapı.",
    bg: "linear-gradient(135deg, rgba(6,182,212,0.6), rgba(34,197,94,0.6)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80')",
  },
  {
    title: "Kullanıcı Dostu Arayüz",
    subtitle: "Minimal, hızlı ve mobil uyumlu.",
    bg: "linear-gradient(135deg, rgba(99,102,241,0.6), rgba(236,72,153,0.55)), url('https://images.unsplash.com/photo-1522204508920-7f5a7d4a9b7f?auto=format&fit=crop&w=1400&q=80')",
  },
];

export default function HeroLandingClient({ userCount }: Props) {
  const [index, setIndex] = useState(0);
  const autoplayRef = useRef<number | null>(null);

  useEffect(() => {
    // autoplay every 4s
    autoplayRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);

    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      {/* HERO / SLIDER */}
      <section className="relative h-[72vh] md:h-[80vh] w-full overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
            style={{
              backgroundImage: s.bg,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* overlay */}
            <div className="h-full w-full flex items-center justify-center px-6">
              <div className="max-w-4xl text-center text-white drop-shadow-xl">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-3">{s.title}</h2>
                <p className="text-md md:text-lg opacity-90 mb-6">{s.subtitle}</p>

                {/* big user count */}
                <div className="flex items-center justify-center space-x-6">
                  <Card className="p-6 bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="text-center">
                      <div className="text-sm uppercase tracking-wider text-white/80">Kayıtlı Kullanıcı</div>
                      <div className="text-5xl md:text-6xl font-extrabold mt-1">{userCount}</div>
                    </div>
                  </Card>

                  <div className="flex flex-col space-y-3">
                    <Button asChild>
                      <Link href="/signup" className="px-6 py-3">
                        Başlayalım
                      </Link>
                    </Button>
                    <Button variant="bordered" asChild>
                      <Link href="/features" className="px-6 py-3">
                        Özellikler
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* controls (arrows) */}
        <button
          onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-20"
          aria-label="previous"
        >
          ‹
        </button>
        <button
          onClick={() => setIndex((i) => (i + 1) % slides.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-20"
          aria-label="next"
        >
          ›
        </button>

        {/* dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
              aria-label={`slide-${i}`}
            />
          ))}
        </div>
      </section>

      {/* mini footer / trust */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto text-center text-gray-700">
          <h3 className="text-lg font-semibold">Bookly — Minimal Rezervasyon Altyapısı</h3>
          <p className="text-sm opacity-80 mt-2">.NET 8 • Azure SQL • EF Core • Swagger</p>
        </div>
      </section>
    </main>
  );
}
