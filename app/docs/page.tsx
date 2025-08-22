"use client";

import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-6 py-16 space-y-20">
      {/* Hero Section */}
      <section className="text-center max-w-3xl space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight">
          🚀 Bookly API
        </h1>
        <p className="text-lg text-gray-600">
          Kolayca randevu oluştur, yönet ve takip et.  
          <span className="font-semibold"> Modern rezervasyon altyapısı</span>  
          .NET 8 & Azure SQL ile geliştirildi.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Button
            as={Link}
            href="https://prodora-api-ege-d5gadjgtb3ahh2hy.westeurope-01.azurewebsites.net"
            color="primary"
            size="lg"
          >
            🌐 Canlı Demo
          </Button>
          <Button
            as={Link}
            href="https://prodora-api-ege-d5gadjgtb3ahh2hy.westeurope-01.azurewebsites.net/swagger"
            variant="bordered"
            size="lg"
          >
            📖 API Dokümantasyonu
          </Button>
        </div>
      </section>

      {/* Özellikler */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <Card>
          <CardHeader>
            <h3 className="font-bold text-lg">⚡ Hızlı CRUD İşlemleri</h3>
          </CardHeader>
          <CardBody>
            <p className="text-gray-600">
              Rezervasyonlarını hızlıca ekle, güncelle, sil veya görüntüle.
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="font-bold text-lg">🔒 Güvenli & Modern</h3>
          </CardHeader>
          <CardBody>
            <p className="text-gray-600">
              HTTPS + Azure SQL ile verilerin güvende, API ise performanslı.
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="font-bold text-lg">📑 Swagger Desteği</h3>
          </CardHeader>
          <CardBody>
            <p className="text-gray-600">
              API endpointlerini anında test et ve dokümantasyonu keşfet.
            </p>
          </CardBody>
        </Card>
      </section>

      {/* Tech Stack */}
      <section className="max-w-4xl w-full text-center space-y-6">
        <h2 className="text-3xl font-semibold">🛠️ Kullandığımız Teknolojiler</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center ">
          <Card>
            <CardBody className="flex flex-col items-center justify-center font-semibold">
              <Image
                src="https://cdn.worldvectorlogo.com/logos/dot-net-core-7.svg"
                alt=".NET 8"
                width={50}
                height={50}
              />
              <p>.NET 8</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="flex flex-col items-center justify-center font-semibold">
              <Image
                src="https://cdn.worldvectorlogo.com/logos/microsoft-azure-2.svg"
                alt="Azure"
                width={50}
                height={50}
              />
              <p>Azure SQL</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="flex flex-col items-center justify-center font-semibold">
              <Image
                src="https://user-images.githubusercontent.com/58300181/118834163-ec6da000-b8b9-11eb-98dc-5e604c11e79f.png"
                alt="Entity Framework"
                width={50}
                height={50}
              />
              <p>EF Core</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="flex flex-col items-center justify-center font-semibold">
              <Image
                src="https://www.elizeire.com/assets/img/swagger.png"
                alt="Swagger"
                width={50}
                height={50}
              />
              <p>Swagger</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="flex flex-col items-center justify-center font-semibold">
              <Image
                src="https://img.icons8.com/fluent-systems-filled/512/nextjs.png"
                alt="Next JS"
                width={50}
                height={50}
              />
              <p>Next JS</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="flex flex-col items-center justify-center font-semibold">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                alt="React"
                width={50}
                height={50}
              />
              <p>React</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="flex flex-col items-center justify-center font-semibold">
              <Image
                src="https://raw.githubusercontent.com/heroui-inc/heroui/main/apps/docs/public/isotipo.png"
                alt="Hero UI"
                width={50}
                height={50}
              />
              <p>Hero UI</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="flex flex-col items-center justify-center font-semibold">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png"
                alt="Postman"
                width={50}
                height={50}
              />
              <p>Postman</p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Developer Section */}
      <section className="max-w-md w-full text-center">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">👨‍💻 Geliştirici</h2>
          </CardHeader>
          <CardBody className="space-y-2">
            <p className="font-semibold">Ege Aydın</p>
            <p className="text-gray-600">egeaydinn@gmail.com</p>
            <Link
              href="https://github.com/egeaydn"
              className="text-blue-600 hover:underline"
            >
              @egeaydn
            </Link>
          </CardBody>
        </Card>
      </section>
    </main>
    
  );
}

