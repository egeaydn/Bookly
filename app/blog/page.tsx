"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Search, Tag, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// örnek blog post verisi (sonradan API ile değiştirilebilir)
const POSTS = [
  {
    id: "1",
    title: "Bookly ile 5 dakikada rezervasyon altyapısı",
    excerpt: "Kısa bir rehber: Bookly'yi projene nasıl entegre edersin, Swagger ile test etme ve hızlı kurulum tüyoları.",
    img: "https://images.unsplash.com/photo-1505238680356-667803448bb6?auto=format&fit=crop&w=1200&q=80",
    tags: ["Kurulum", "Hız"],
    date: "2025-07-01",
    author: "Ege Aydın",
  },
  {
    id: "2",
    title: "Azure + .NET: Prod ortamına geçiş rehberi",
    excerpt: "App Service, pipeline, ve güvenlik ayarları — prod ortamına güvenle deploy etmenin yolları.",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    tags: ["Deployment", "Azure"],
    date: "2025-06-12",
    author: "Can D.",
  },
  {
    id: "3",
    title: "Kullanıcı deneyimini artıracak 7 UI taktiği",
    excerpt: "Mini UX tüyoları: form optimizasyonu, mikro-animasyonlar ve hızlı geri bildirimler.",
    img: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=1200&q=80",
    tags: ["UX", "React"],
    date: "2025-05-05",
    author: "Merve Y.",
  },
  {
    id: "4",
    title: "Veritabanı optimizasyonu: Azure SQL ipuçları",
    excerpt: "Index'ler, sorgu optimizasyonu ve EF Core ile performans artırma stratejileri.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    tags: ["DB", "Performans"],
    date: "2025-04-20",
    author: "Aslı K.",
  },
  {
    id: "5",
    title: "Swagger ile API dökümantasyonu nasıl hazırlanır?",
    excerpt: "Temiz ve kullanışlı Swagger dokümanı oluşturmanın prensipleri ve örnekler.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Docs", "Swagger"],
    date: "2025-03-10",
    author: "Ege Aydın",
  },
  {
    id: "6",
    title: "Cache stratejileri: Redis ve Next.js entegrasyonu",
    excerpt: "Cache seviyeleri, TTL stratejileri ve Next.js ile verimli önbellekleme.",
    img: "https://images.unsplash.com/photo-1508385082359-fb3dd8d8b6f8?auto=format&fit=crop&w=1200&q=80",
    tags: ["Cache", "Performans"],
    date: "2025-02-01",
    author: "Can D.",
  },
];

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const tags = useMemo(() => {
    const s = new Set<string>();
    POSTS.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return Array.from(s);
  }, []);

  const filtered = useMemo(() => {
    return POSTS.filter((p) => {
      const matchesQuery = query === "" || p.title.toLowerCase().includes(query.toLowerCase()) || p.excerpt.toLowerCase().includes(query.toLowerCase());
      const matchesTag = !activeTag || p.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  return (
    <div className="min-h-screen   text-gray-900">
      {/* HERO */}
      <header className="bg-gradient-to-r to-cyan-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Bookly Blog</h1>
              <p className="mt-2 text-gray-600 max-w-xl">Teknik rehberler, deployment notları ve ürün güncellemeleri — projeni hızlandıracak yazılar burada.</p>
              <div className="mt-4 flex gap-3">
                <Button as={Link} href="/blog/new">Yeni Yazı</Button>
                <Button variant="bordered" as={Link} href="/blog/tags">Tüm Etiketler</Button>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full md:w-2/5">
              <div className="flex items-center gap-3   border rounded-xl p-3 shadow-sm">
                <Search className="text-gray-400" />
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ara: kurulum, Azure, performans..." className="flex-1 outline-none text-sm" />
                {activeTag && <Button variant="bordered" onClick={() => setActiveTag(null)}><Tag className="mr-2" />{activeTag} • Temizle</Button>}
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <button onClick={() => setActiveTag(null)} className={`px-3 py-1 rounded-full text-sm ${!activeTag ? "bg-indigo-600   " : "   text-gray-700"}`}>Tümü</button>
                {tags.map((t) => (
                  <button key={t} onClick={() => setActiveTag(t)} className={`px-3 py-1 rounded-full text-sm ${activeTag === t ? "bg-indigo-600   " : "   text-gray-700"}`}>
                    <Tag className="inline mr-2" />{t}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* main posts */}
        <section className="md:col-span-2 space-y-6">
          {filtered.slice(0, visibleCount).map((p) => (
            <motion.article key={p.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <Card className="overflow-hidden">
                <div className="relative h-44 md:h-56 w-full">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4   ">
                    <div className="text-xs flex items-center gap-2"><Calendar size={16} />{p.date}</div>
                    <h3 className="text-xl md:text-2xl font-bold">{p.title}</h3>
                  </div>
                </div>

                <CardBody className="p-6">
                  <p className="text-gray-700">{p.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full    flex items-center justify-center font-medium text-sm">{p.author.split(" ")[0].slice(0,1)}</div>
                      <div>
                        <div className="text-sm font-semibold">{p.author}</div>
                        <div className="text-xs text-gray-500">{p.tags.join(" • ")}</div>
                      </div>
                    </div>
                    <Link href={`/blog/${p.id}`} className="inline-flex items-center gap-2 text-indigo-600 hover:underline">Okumaya devam et <ArrowRight size={16} /></Link>
                  </div>
                </CardBody>
              </Card>
            </motion.article>
          ))}

          {/* load more */}
          {visibleCount < filtered.length && (
            <div className="text-center">
              <Button onClick={() => setVisibleCount((v) => v + 3)}>Daha Fazla Yükle</Button>
            </div>
          )}

          {filtered.length === 0 && (
            <div className="p-8 text-center text-gray-600   rounded-lg">Aradığın içerik bulunamadı — başka bir kelime dene.</div>
          )}
        </section>

        {/* sidebar */}
        <aside className="space-y-6">
          <Card>
            <CardBody className="p-6">
              <h4 className="font-semibold">Öne çıkan yazı</h4>
              <p className="text-sm text-gray-600 mt-2">Hızlı kurulum rehberi — Bookly'yi projene bir çırpıda entegre et.</p>
              <div className="mt-4">
                <Link href="/blog/1" className="text-indigo-600 hover:underline">Oku →</Link>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h4 className="font-semibold">Abone Ol</h4>
              <p className="text-sm text-gray-600 mt-2">Yeni yazılar direkt inbox'ına gelsin.</p>
              <div className="mt-4 flex gap-2">
                <input placeholder="E-posta adresin" className="flex-1 border rounded-md px-3 py-2 text-sm" />
                <Button>Abone Ol</Button>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h4 className="font-semibold">Etiket Bulutu</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <button key={t} onClick={() => setActiveTag(t)} className="text-sm    px-3 py-1 rounded-full">{t}</button>
                ))}
              </div>
            </CardBody>
          </Card>
        </aside>
      </main>

      <footer className="py-12 text-center text-sm text-gray-500">© {new Date().getFullYear()} Bookly — Blog</footer>
    </div>
  );
}
