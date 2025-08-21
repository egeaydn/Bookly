// components/HeroLandingClient.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import Link from "next/link";

type Props = { userCount: number };

const slides = [
  {
    title: "Hızlı Randevu Yönetimi",
    subtitle: "Tek tıkla oluştur, yönet ve takip et.",
    bg: "linear-gradient(135deg, rgba(79,70,229,0.55), rgba(6,182,212,0.45)), url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80')",
  },
  {
    title: "Güvenli & Performant",
    subtitle: "Azure SQL & .NET 8 tabanlı altyapı.",
    bg: "linear-gradient(135deg, rgba(6,182,212,0.45), rgba(34,197,94,0.35)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80')",
  },
  {
    title: "Kullanıcı Dostu Arayüz",
    subtitle: "Minimal, mobil uyumlu ve hızlı.",
    bg: "linear-gradient(135deg, rgba(99,102,241,0.45), rgba(236,72,153,0.35)), url('https://images.unsplash.com/photo-1522204508920-7f5a7d4a9b7f?auto=format&fit=crop&w=1400&q=80')",
  },
];

export default function HeroLandingClient({ userCount }: Props) {
  const [index, setIndex] = useState(0);
  const autoplayRef = useRef<number | null>(null);

  useEffect(() => {
    autoplayRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      {/* SLIDER - KISALTILMIŞ BOY */}
      <section className="relative w-full overflow-hidden mb-12">
        <div className="relative h-[42vh] md:h-[52vh] lg:h-[56vh] w-full">
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
              <div className="h-full w-full flex items-center justify-center px-6">
                <div className="max-w-4xl text-center text-white drop-shadow-xl">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2">{s.title}</h2>
                  <p className="text-sm md:text-base opacity-90 mb-5">{s.subtitle}</p>

                  <div className="mx-auto inline-flex items-center gap-6">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 flex flex-col items-center">
                      <div className="text-xs uppercase tracking-wider text-white/80">Kayıtlı Kullanıcı</div>
                      <div className="text-4xl md:text-5xl font-extrabold mt-1">{userCount}</div>
                      <div className="mt-3 flex gap-3">
                        {/* Burada as={Link} ve href kullanıyoruz */}
                        <Button as={Link} href="/signup" className="px-4 py-2">
                          Başlayalım
                        </Button>

                        <Button variant="bordered" as={Link} href="/features" className="px-4 py-2">
                          Özellikler
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* arrows */}
          <button
            onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-20 shadow"
            aria-label="previous"
          >
            ‹
          </button>
          <button
            onClick={() => setIndex((i) => (i + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-20 shadow"
            aria-label="next"
          >
            ›
          </button>

          {/* dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === index ? "scale-110 bg-white" : "bg-white/40"}`}
                aria-label={`slide-${i}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* KARTLAR - slider altı, skeçteki kutucuklar */}
      <section className="max-w-6xl w-full mx-auto px-6 -mt-8 md:-mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Card className="transform hover:-translate-y-1 transition-transform duration-300">
            <CardBody className="flex items-start gap-4 p-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3 8 4.79 8 7s1.79 4 4 4zM6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                  </svg>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold">Online Asistan</h4>
                <p className="text-sm text-gray-600 mt-1">Randevunu hızlıca oluştur — rehberli deneyimle.</p>
                <div className="mt-4">
                  <Button as={Link} href="/assistant" className="px-4 py-2">
                    Deneyin
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Card 2 */}
          <Card className="transform hover:-translate-y-1 transition-transform duration-300">
            <CardBody className="flex items-start gap-4 p-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V8H3v11a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold">Rezervasyon Sorgula</h4>
                <p className="text-sm text-gray-600 mt-1">Mevcut randevularını ve detaylarını hızlıca gör.</p>
                <div className="mt-4">
                  <Button as={Link} href="/search" className="px-4 py-2">
                    Sorgula
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Card 3 */}
          <Card className="transform hover:-translate-y-1 transition-transform duration-300">
            <CardBody className="flex items-start gap-4 p-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 9H7a2 2 0 01-2-2V7a2 2 0 012-2h5l2 2h3a2 2 0 012 2v10a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold">Özel İndirimler</h4>
                <p className="text-sm text-gray-600 mt-1">Abone ol, kaçırılmayacak kampanyaları kap.</p>
                <div className="mt-4">
                  <Button variant="bordered" as={Link} href="/subscribe" className="px-4 py-2">
                    Abone Ol
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* küçük footer / trust */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto text-center text-gray-700">
          <h3 className="text-lg font-semibold">Bookly — Minimal Rezervasyon Altyapısı</h3>
          <p className="text-sm opacity-80 mt-2">.NET 8 • Azure SQL • EF Core • Swagger</p>
        </div>
      </section>
    </main>
  );
}
