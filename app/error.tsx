"use client";

import React, { useEffect } from "react";
import Link from "next/link";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    // Log locally and to external service if needed
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#08101a] text-slate-100 p-6">
      {/* floating decorative blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-20 w-96 h-96 rounded-full bg-purple-600 opacity-20 blur-3xl animate-blob" />
        <div className="absolute -right-40 -bottom-20 w-80 h-80 rounded-full bg-cyan-400 opacity-18 blur-3xl animate-blob animation-delay-2000" />
      </div>

      <section className="w-full max-w-3xl mx-auto">
        <div className="backdrop-blur-sm bg-white/5 border border-white/6 rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
          {/* Illustration */}
          <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-xl bg-gradient-to-tr from-[#ff6b6b] to-[#ff9f43] p-4 flex items-center justify-center shadow-lg transform transition-transform hover:scale-105">
            <div className="w-full h-full rounded-lg bg-white/6 flex items-center justify-center">
              <svg width="110" height="110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
                <path d="M11 14h2v2h-2z" fill="#fff" opacity="0.9" />
                <path d="M12 2C6.48 2 2 6.48 2 12c0 2.21.72 4.25 1.93 5.9L12 22l8.07-4.1C21.28 16.25 22 14.21 22 12c0-5.52-4.48-10-10-10zm1 14h-2v-2h2v2z" fill="#fff" opacity="0.95" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Ooops! Bir şey ters gitti.</h1>
            <p className="text-slate-300 mb-4">Endişe etme — biz zaten hata çıktısını kaydettik. Aşağıdaki adımlardan birini deneyebilirsin.</p>

            <div className="mb-4">
              <details className="bg-white/3 p-3 rounded-lg border border-white/6">
                <summary className="cursor-pointer text-sm text-slate-200 font-medium">Hata Detayı (geliştiriciler için)</summary>
                <pre className="mt-2 text-xs text-rose-200 max-h-40 overflow-auto whitespace-pre-wrap">{error?.message}</pre>
              </details>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => reset()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 text-black font-semibold shadow-md hover:scale-[1.02] active:scale-95 transition-transform"
              >
                Tekrar Dene
              </button>

              <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-sm text-slate-200 hover:bg-white/3 transition">
                Anasayfaya Git
              </Link>

              <a
                href={`mailto:you@example.com?subject=Uygulama Hatası&body=${encodeURIComponent(error?.message || "")}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-slate-200 border border-white/10 hover:bg-white/3 transition"
              >
                Hata Bildir
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-400">Eğer devam ederse, bana söyle — beraber bakarız. 💪</p>
          </div>
        </div>

        <footer className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} — Uygulama ismi</footer>
      </section>

      <style jsx>{`
        /* küçük animasyonlar için Tailwind dışında ek keyframe */
        @keyframes blob {
          0% { transform: translateY(0) scale(1); }
          33% { transform: translateY(-20px) scale(1.05); }
          66% { transform: translateY(6px) scale(0.95); }
          100% { transform: translateY(0) scale(1); }
        }
        .animate-blob { animation: blob 6s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </main>
  );
}
