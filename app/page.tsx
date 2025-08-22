"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import Link from "next/link";
import Subtitle from "@/components/Subtitle";
import FAQ from "@/components/FAQ";

// Props tip tanımı — dışarıdan gelen userCount bilgisini tip güvenliğiyle alıyoruz
type Props = { userCount: number };

// Büyük slider için veriler
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

// Küçük slider için veriler
const bottomSlides = [
  { img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80", caption: "Haftanın Fırsatları" },
  { img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80", caption: "Son Dakika İndirimleri" },
  { img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1400&q=80", caption: "Popüler Mekanlar" },
];

/* ----------------------------- SMALL SLIDER ----------------------------- */
function SmallSlider() {
  const [idx, setIdx] = useState(0); // aktif slide index
  const autoRef = useRef<number | null>(null);

  // otomatik geçiş efekti
  useEffect(() => {
    autoRef.current = window.setInterval(() => {
      setIdx((i) => (i + 1) % bottomSlides.length);
    }, 4000);
    return () => {
      if (autoRef.current) window.clearInterval(autoRef.current);
    };
  }, []);

  return (
    <section className="w-full max-w-full mx-auto mt-10 px-6">
      {/* container */}
      <div className="relative h-[24vh] md:h-[28vh] lg:h-[32vh] w-full overflow-hidden rounded-xl">
        {/* slide görselleri */}
        {bottomSlides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-600 ease-in-out ${i === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.18)), url('${s.img}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* alt bilgi kutucuğu */}
            <div className="h-full w-full flex items-end md:items-center md:justify-start p-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md p-4 text-white max-w-xs">
                <div className="text-sm md:text-base font-semibold">{s.caption}</div>
                <div className="text-xs text-white/80 mt-1">Randevunu kaçırma — fırsatları yakala.</div>
              </div>
            </div>
          </div>
        ))}

        {/* geri tuşu */}
        <button
          onClick={() => setIdx((i) => (i - 1 + bottomSlides.length) % bottomSlides.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full z-20 shadow"
          aria-label="prev-small"
        >
          ‹
        </button>
        {/* ileri tuşu */}
        <button
          onClick={() => setIdx((i) => (i + 1) % bottomSlides.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full z-20 shadow"
          aria-label="next-small"
        >
          ›
        </button>

        {/* alt nokta göstergeleri */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
          {bottomSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === idx ? "bg-white scale-125" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- ANA LANDING HERO ----------------------------- */
export default function HeroLandingClient({ userCount }: Props) {
  const [index, setIndex] = useState(0); // büyük slider aktif index
  const autoplayRef = useRef<number | null>(null);

  // otomatik geçiş
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
      {/* BÜYÜK SLIDER */}
      <section className="relative w-full overflow-hidden mb-22">
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
              {/* slide içerik alanı */}
              <div className="h-full w-full flex items-center justify-center px-6">
                <div className="max-w-4xl text-center text-white drop-shadow-xl">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2">{s.title}</h2>
                  <p className="text-sm md:text-base opacity-90 mb-5">{s.subtitle}</p>

                  {/* kullanıcı sayısı kartı */}
                  <div className="mx-auto inline-flex items-center gap-6">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 flex flex-col items-center">
                      <div className="text-xs uppercase tracking-wider text-white/80">Kayıtlı Kullanıcı</div>
                      <div className="text-4xl md:text-5xl font-extrabold mt-1">{userCount}</div>
                      <div className="mt-3 flex gap-3">
                        <Button>
                          <Link href="/signup" className="px-4 py-2">
                            Başlayalım
                          </Link>
                        </Button>
                        <Button variant="bordered">
                          <Link href="/features" className="px-4 py-2">
                            Özellikler
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* geri-ileri tuşları */}
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

      {/* ALT KARTLAR */}
      <section className="max-w-6xl w-full mx-auto px-6 -mt-8 md:-mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Card 1 - Online Asistan */}
          <Card className="transform hover:-translate-y-1 transition-transform duration-300">
            <CardBody className="flex items-start gap-4 p-6">
              {/* ikon */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-lg">
                  {/* svg ikon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3 8 4.79 8 7s1.79 4 4 4zM6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                  </svg>
                </div>
              </div>

              {/* içerik */}
              <div>
                <h4 className="text-lg font-semibold">Online Asistan</h4>
                <p className="text-sm text-gray-600 mt-1">Randevunu hızlıca oluştur — rehberli deneyimle.</p>
                <div className="mt-4">
                  <Button>
                    <Link href="/assistant" className="px-4 py-2">
                      Deneyin
                    </Link>
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Card 2 - Rezervasyon Sorgula */}
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
                  <Button>
                    <Link href="/search" className="px-4 py-2">
                      Sorgula
                    </Link>
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Card 3 - Özel İndirimler */}
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
                  <Button variant="bordered">
                    <Link href="/subscribe" className="px-4 py-2">
                      Abone Ol
                    </Link>
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Subtitle */}
      <div className="mt-8">
        <Subtitle />
      </div>

      {/* küçük slider */}
      <SmallSlider />

      {/* Footer-like bölüm */}
      <section className="py-8 ">
        <div className="max-w-4xl mx-auto text-center ">
          <h3 className="text-lg font-semibold">Bookly — Minimal Rezervasyon Altyapısı</h3>
          <p className="text-sm opacity-80 mt-2">.NET 8 • Azure SQL • EF Core • Swagger</p>
        </div>
      </section>

      {/* SSS */}
      <FAQ />
    </main>
  );
}
