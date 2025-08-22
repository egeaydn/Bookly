"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Users, ShieldCheck, CloudLightning, Globe, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b">
      {/* HERO */}
      <section className="relative overflow-hidden pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Neden <span className="text-indigo-600">Bookly</span>?</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-xl">Bookly, işletmeler için sıfırdan düşünülmüş, performans ve güvenliği merkezine koyan modern bir rezervasyon altyapısıdır. Hızlıca entegre edilir, ölçeklenir ve kullanıcı deneyimini yükseltir.</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button as={Link} href="/signup" size="lg">Ücretsiz Başla</Button>
                <Button variant="bordered" as={Link} href="/features" size="lg">Özelliklere Bak</Button>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 max-w-sm">
                <div className=" rounded-xl shadow p-4 flex items-center gap-3">
                  <div className="p-3 rounded-lg  text-indigo-600">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Kullanıcı</div>
                    <div className="text-xl font-bold">+15k</div>
                  </div>
                </div>

                <div className=" rounded-xl shadow p-4 flex items-center gap-3">
                  <div className="p-3 rounded-lg  text-emerald-600">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Güvenlik</div>
                    <div className="text-xl font-bold">PCI & HTTPS</div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80" alt="Booking" className="w-full h-80 object-cover" />
                <div className="absolute -bottom-8 left-6 transform -translate-y-1/2">
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6">Öne çıkan özellikler</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-0 overflow-hidden">
              <CardBody className="p-6 flex gap-4 items-start">
                <div className="p-3 rounded-lg  text-indigo-600">
                  <CloudLightning size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Yüksek Performans</h3>
                  <p className="mt-1 text-sm text-gray-600">Optimum sorgu performansı ve hızlı API yanıtları.</p>
                </div>
              </CardBody>
            </Card>

            <Card className="p-0 overflow-hidden">
              <CardBody className="p-6 flex gap-4 items-start">
                <div className="p-3 rounded-lg  text-sky-600">
                  <Globe size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Kolay Entegrasyon</h3>
                  <p className="mt-1 text-sm text-gray-600">RESTful API + Swagger dokümantasyonu ile entegrasyon 5 dakikada.</p>
                </div>
              </CardBody>
            </Card>

            <Card className="p-0 overflow-hidden">
              <CardBody className="p-6 flex gap-4 items-start">
                <div className="p-3 rounded-lg  text-emerald-600">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Güvenlik & Uyumluluk</h3>
                  <p className="mt-1 text-sm text-gray-600">TLS, veri şifreleme ve rol-tabanlı erişim kontrolleri.</p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* TIMELINE / HOW IT WORKS */}
      <section className="py-12 ">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6">Nasıl çalışır?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="p-6  rounded-xl shadow">
                <div className="text-sm text-indigo-600 font-semibold">1. Entegrasyon</div>
                <h4 className="mt-2 font-bold">Swagger ile başlayın</h4>
                <p className="mt-1 text-sm text-gray-600">API dokümantasyonuyla endpoint'leri anında test edin.</p>
              </div>

              <div className="p-6  rounded-xl shadow">
                <div className="text-sm text-indigo-600 font-semibold">2. Özelleştir</div>
                <h4 className="mt-2 font-bold">Alanlarına göre yapılandır</h4>
                <p className="mt-1 text-sm text-gray-600">Poliklinik, kuaför, danışmanlık gibi farklı senaryolara kolay uyum.</p>
              </div>
            </div>

            <div className="md:col-span-1 flex items-center justify-center">
              <div className="w-[1px] h-full bg-gradient-to-b from-indigo-200 to-transparent" />
            </div>

            <div className="space-y-4">
              <div className="p-6  rounded-xl shadow">
                <div className="text-sm text-indigo-600 font-semibold">3. Yayınla</div>
                <h4 className="mt-2 font-bold">Azure veya tercih ettiğiniz platform</h4>
                <p className="mt-1 text-sm text-gray-600">CI/CD ile otomatik deploy ve scale.</p>
              </div>

              <div className="p-6  rounded-xl shadow">
                <div className="text-sm text-indigo-600 font-semibold">4. Ölçekle</div>
                <h4 className="mt-2 font-bold">Trafik arttıkça genişlet</h4>
                <p className="mt-1 text-sm text-gray-600">Basit DB optimizasyonları ve caching ile yüksek trafikte de dayanır.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6">Takım</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Ege Aydın", role: "Fullstack Developer", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" },
              { name: "Merve Y.", role: "Product Designer", img: "https://images.unsplash.com/photo-1545996124-1b5f6ad0f8c3?auto=format&fit=crop&w=400&q=80" },
              { name: "Can D.", role: "Backend Engineer", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=400&q=80" },
              { name: "Aslı K.", role: "QA & Ops", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" },
            ].map((m) => (
              <Card key={m.name} className="p-0">
                <CardBody className="p-4 flex flex-col items-center text-center">
                  <img src={m.img} alt={m.name} className="w-24 h-24 rounded-full object-cover mb-3" />
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-sm text-gray-500">{m.role}</div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section className="py-16  ">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold">Hazırsan başlayalım</h3>
          <p className="mt-3 text-md  max-w-2xl mx-auto">Bookly'yi şimdi deneyin — hızlı kurulum, güçlü altyapı, mutlu kullanıcılar.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Button as={Link} href="/signup">Ücretsiz Başla</Button>
            <Button variant="bordered" as={Link} href="/contact">Bize Ulaş</Button>
          </div>
        </div>
      </section>

      {/* small footer spacer */}
      <div className="h-12" />
    </main>
  );
}
