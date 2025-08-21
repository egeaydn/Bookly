// components/FAQ.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";

type FAQItem = {
  q: string;
  a: string;
};

const DEFAULT_FAQS: FAQItem[] = [
  {
    q: "Bookly ile nasıl rezervasyon yaparım?",
    a: "Tek yapmanız gereken 'Başlayalım' butonuna tıklamak, tarih ve saat seçip onaylamak. Size e-posta ile onay göndeririz.",
  },
  {
    q: "Rezervasyonumu iptal edebilir miyim?",
    a: "Evet — rezervasyon detaylarınızdan iptal seçeneğini kullanabilirsiniz. İptal politikası rezervasyon tipine göre değişir.",
  },
  {
    q: "Ödeme yöntemleri nelerdir?",
    a: "Kredi/banka kartı, mobil ödeme ve bazı partner ödemeleri desteklenir. Ödeme sayfasında güvenli (PCI uyumlu) altyapı kullanıyoruz.",
  },
  {
    q: "Gizlilik ve veri güvenliği nasıl sağlanıyor?",
    a: "Kullanıcı verileri Azure SQL üzerinde saklanır, erişimler yetkilendirilir ve HTTPS ile taşınır. Hassas veriler şifrelenir.",
  },
  // yeni eklenen sorular
  {
    q: "Rezervasyon hatırlatmaları alıyor muyum?",
    a: "Evet, onay ve hatırlatma e-postaları/isteğe bağlı SMS bildirimleri ile rezervasyonunuzu takip edebilirsiniz. Ayarlardan bildirim tercihlerinizi değiştirebilirsiniz.",
  },
  {
    q: "Canlı destek/yardım alabilir miyim?",
    a: "Evet — destek ekibimiz çalışma saatleri içinde canlı chat veya e-posta ile yardımcı olur. Acil durumlar için telefon desteği opsiyonumuz da mevcuttur.",
  },
];

export default function FAQ({ faqs = DEFAULT_FAQS }: { faqs?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // ilk madde açık
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Reflow: açılan panelin doğru yüksekliği alması için küçük efekt
  useEffect(() => {
    // force reflow when openIndex changes so scrollHeight is measured
    contentRefs.current.forEach((el) => {
      if (el) {
        // trigger reflow
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        el.scrollHeight;
      }
    });
  }, [openIndex]);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="text-left mb-6">
        <h3 className="text-3xl md:text-4xl font-extrabold">Sıkça Sorulan Sorular</h3>
        <p className="mt-2 text-sm text-gray-600">Bilmek istediğin bir şey varsa buradan hızlıca bul — tıklayıp aç.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((f, i) => {
          const isOpen = i === openIndex;
          return (
            <div
              key={i}
              className=" rounded-xl border shadow-sm overflow-hidden"
            >
              <button
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                onClick={() => toggle(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    const next = Math.min(faqs.length - 1, i + 1);
                    document.getElementById(`faq-button-${next}`)?.focus();
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    const prev = Math.max(0, i - 1);
                    document.getElementById(`faq-button-${prev}`)?.focus();
                  } else if (e.key === "Home") {
                    e.preventDefault();
                    document.getElementById(`faq-button-0`)?.focus();
                  } else if (e.key === "End") {
                    e.preventDefault();
                    document.getElementById(`faq-button-${faqs.length - 1}`)?.focus();
                  }
                }}
                className="w-full flex items-center justify-between p-6 text-left md:px-8"
              >
                <span className="flex-1">
                  <div className="text-md md:text-lg font-semibold">{f.q}</div>
                </span>

                {/* arrow */}
                <svg
                  className={`w-6 h-6 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-indigo-600" : "rotate-0 text-gray-400"}`}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path d="M5 8.5L10 13.5L15 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* content */}
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-button-${i}`}
                className="px-6 md:px-8"
                ref={(el) => (contentRefs.current[i] = el)}
                style={{
                  maxHeight: isOpen ? `${contentRefs.current[i]?.scrollHeight ?? 240}px` : "0px",
                  transition: "max-height 320ms cubic-bezier(.2,.9,.2,1)",
                  overflow: "hidden",
                }}
              >
                <div className="py-4 text-sm md:text-base text-gray-700 border-t">
                  {f.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
