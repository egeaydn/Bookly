"use client";

import React from "react";
import { Card, CardBody } from "@heroui/card";

type Feature = {
  title: string;
  img: string;
  bullet: string;
  desc?: string;
};

const FEATURES: Feature[] = [
  {
    title: "Anında Rezervasyon",
    img: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1200&q=60",
    bullet: "Tek adımda hızlı rezervasyon",
    desc: "Dakikalar içinde rezervasyon oluştur, bekleme yok.",
  },
  {
    title: "Güvenli Ödemeler",
    img: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?auto=format&fit=crop&w=1200&q=60",
    bullet: "Ödeme ve veri güvenliği",
    desc: "PCI uyumlu altyapı ile iç rahatlığı.",
  },
  {
    title: "Mobil Uyumlu",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=60",
    bullet: "Hızlı mobil rezervasyon",
    desc: "Her cihazda pürüzsüz deneyim.",
  },
  {
    title: "Özel Kampanyalar",
    img: "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1200&q=60",
    bullet: "Sadece üyeler için teklifler",
    desc: "Abonelere özel indirim ve fırsatlar.",
  },
];

export default function Subtitle() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-extrabold">
          Neden <span className="text-indigo-600">Bookly</span>’yi kullanmalıyım?
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Hızlı, güvenli ve kullanıcı dostu rezervasyon yönetimi — öne çıkan sebeplerimiz.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((f) => (
          <Card key={f.title} className="overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 shadow-md">
            <div className="h-36 w-full relative">
              <img
                src={f.img}
                alt={f.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <CardBody className="p-4">
              <h4 className="font-semibold text-lg">{f.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{f.desc}</p>

              <ul className="mt-3 list-none">
                <li className="inline-flex items-center gap-2 text-sm text-gray-700">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 font-bold">✓</span>
                  <span>{f.bullet}</span>
                </li>
              </ul>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
