<div align="center">

# 🚀 Bookly API

[![.NET](https://img.shields.io/badge/.NET-8.0-purple.svg)](https://dotnet.microsoft.com/download/dotnet/8.0)
[![Entity Framework](https://img.shields.io/badge/Entity%20Framework-8.0.19-blue.svg)](https://docs.microsoft.com/en-us/ef/)
[![Azure](https://img.shields.io/badge/Azure-SQL%20Database-0078D4.svg)](https://azure.microsoft.com/en-us/services/sql-database/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Modern Randevu Yönetim Sistemi API'si** 📅

Bookly, randevu yönetim sistemi için geliştirilmiş **.NET 8 Web API** projesidir. Azure SQL Database ile entegre çalışır ve tam **CRUD** işlemleri sunar.

[🌐 Canlı Demo](https://prodora-api-ege-d5gadjgtb3ahh2hy.westeurope-01.azurewebsites.net) • [📖 API Dokümantasyonu](https://prodora-api-ege-d5gadjgtb3ahh2hy.westeurope-01.azurewebsites.net/swagger)

</div>

---

## 🌟 Özellikler

- ✅ **Tam CRUD İşlemleri** - Tüm veri işlemleri desteklenir
- ✅ **Azure SQL Entegrasyonu** - Güvenli ve ölçeklenebilir veritabanı
- ✅ **Swagger Dokümantasyonu** - Otomatik API dokümantasyonu
- ✅ **Entity Framework Core** - Modern ORM ile veri erişimi
- ✅ **RESTful API** - Standart HTTP metodları
- ✅ **Async/Await** - Yüksek performanslı asenkron işlemler
- ✅ **HTTPS Güvenliği** - Şifreli veri transferi

## 🚀 Canlı API

<div align="center">

| 🔗 **Endpoint** | 📋 **Açıklama** |
|----------------|-----------------|
| **🌐 Base URL** | `https://prodora-api-ege-d5gadjgtb3ahh2hy.westeurope-01.azurewebsites.net` |
| **📖 Swagger** | `https://prodora-api-ege-d5gadjgtb3ahh2hy.westeurope-01.azurewebsites.net/swagger` |
| **🏠 Ana Sayfa** | `https://prodora-api-ege-d5gadjgtb3ahh2hy.westeurope-01.azurewebsites.net/` |

</div>

## 🛠️ Teknoloji Stack'i

<div align="center">

| 🎯 **Kategori** | 🔧 **Teknoloji** | 📊 **Versiyon** |
|----------------|------------------|-----------------|
| **🖥️ Framework** | .NET | 8.0 |
| **🗄️ ORM** | Entity Framework Core | 8.0.19 |
| **💾 Database** | SQL Server / Azure SQL | Latest |
| **🌐 Web API** | ASP.NET Core | 8.0 |
| **📖 Documentation** | Swagger/OpenAPI | 6.6.2 |

</div>

## 📊 Veritabanı Şeması

<div align="center">

### 🗂️ **Veritabanı Tabloları ve İlişkiler**

</div>

### 👥 **1. Users - Kullanıcılar**
```sql
- Id (int, PK)
- FirstName (nvarchar) - Ad
- LastName (nvarchar) - Soyad
- Email (nvarchar) - E-posta
- Phone (nvarchar) - Telefon
- PasswordHash (nvarchar) - Şifre hash'i
- IsAdmin (bit) - Admin yetkisi
- CreatedAt (datetime2) - Oluşturulma tarihi
- UpdatedAt (datetime2) - Güncellenme tarihi
```

### 🛠️ **2. Services - Hizmetler**
```sql
- Id (int, PK)
- Name (nvarchar) - Hizmet adı
- Description (nvarchar) - Açıklama
- DurationMinutes (int) - Süre (dakika)
- Price (decimal(18,2)) - Fiyat
- IsActive (bit) - Aktif durumu
- CreatedAt (datetime2) - Oluşturulma tarihi
- UpdatedAt (datetime2) - Güncellenme tarihi
```

### 👨‍⚕️ **3. Providers - Hizmet Sağlayıcıları**
```sql
- Id (int, PK)
- Name (nvarchar) - Sağlayıcı adı
- IsActive (bit) - Aktif durumu
- CreatedAt (datetime2) - Oluşturulma tarihi
- UpdatedAt (datetime2) - Güncellenme tarihi
```

### 📋 **4. AppointmentStatuses - Randevu Durumları**
```sql
- Id (int, PK)
- Name (nvarchar) - Durum adı (Pending, Confirmed, Completed, Cancelled)
- CreatedAt (datetime2) - Oluşturulma tarihi
- UpdatedAt (datetime2) - Güncellenme tarihi
```

### 📅 **5. Appointments - Randevular**
```sql
- Id (int, PK)
- UserId (int, FK) - Kullanıcı ID
- ServiceId (int, FK) - Hizmet ID
- ProviderId (int, FK, nullable) - Sağlayıcı ID
- StartAt (datetime2) - Başlangıç zamanı
- EndAt (datetime2) - Bitiş zamanı
- StatusId (int, FK) - Durum ID
- Notes (nvarchar) - Notlar
- CreatedAt (datetime2) - Oluşturulma tarihi
- UpdatedAt (datetime2) - Güncellenme tarihi
```

## 🔗 API Endpoint'leri

<div align="center">

### 🌐 **RESTful API Endpoint'leri**

</div>

### 👥 **Users API**
🔗 **Canlı URL:** [https://prodora-api-ege-d5gadjgtb3ahh2hy.westeurope-01.azurewebsites.net/api/Users](https://prodora-api-ege-d5gadjgtb3ahh2hy.westeurope-01.azurewebsites.net/api/Users)

```
GET    /api/Users          - Tüm kullanıcıları listele
GET    /api/Users/{id}     - Kullanıcı detayını getir
POST   /api/Users          - Yeni kullanıcı oluştur
PUT    /api/Users/{id}     - Kullanıcı güncelle
DELETE /api/Users/{id}     - Kullanıcı sil
```

### 🛠️ **Services API**
🔗 **Canlı URL:** [https://prodora-api-ege-d5gadjgtb3ahh2hy.westeurope-01.azurewebsites.net/api/Services](https://prodora-api-ege-d5gadjgtb3ahh2hy.westeurope-01.azurewebsites.net/api/Services)

```
GET    /api/Services          - Tüm hizmetleri listele
GET    /api/Services/{id}     - Hizmet detayını getir
POST   /api/Services          - Yeni hizmet oluştur
PUT    /api/Services/{id}     - Hizmet güncelle
DELETE /api/Services/{id}     - Hizmet sil
```

### 👨‍⚕️ **Providers API**
🔗 **Canlı URL:** [https://prodora-api-ege-d5gadjgtb3ahh2hy.westeurope-01.azurewebsites.net/api/Providers](https://prodora-api-ege-d5gadjgtb3ahh2hy.westeurope-01.azurewebsites.net/api/Providers)

```
GET    /api/Providers          - Tüm sağlayıcıları listele
GET    /api/Providers/{id}     - Sağlayıcı detayını getir
POST   /api/Providers          - Yeni sağlayıcı oluştur
PUT    /api/Providers/{id}     - Sağlayıcı güncelle
DELETE /api/Providers/{id}     - Sağlayıcı sil
```

### 📅 **Appointments API**
🔗 **Canlı URL:** [https://prodora-api-ege-d5gadjgtb3ahh2hy.westeurope-01.azurewebsites.net/api/Appointments](https://prodora-api-ege-d5gadjgtb3ahh2hy.westeurope-01.azurewebsites.net/api/Appointments)

```
GET    /api/Appointments          - Tüm randevuları listele (ilişkili verilerle)
GET    /api/Appointments/{id}     - Randevu detayını getir
POST   /api/Appointments          - Yeni randevu oluştur
PUT    /api/Appointments/{id}     - Randevu güncelle
DELETE /api/Appointments/{id}     - Randevu sil
```

### 📋 **AppointmentStatuses API**
🔗 **Canlı URL:** [https://prodora-api-ege-d5gadjgtb3ahh2hy.westeurope-01.azurewebsites.net/api/AppointmentStatuses](https://prodora-api-ege-d5gadjgtb3ahh2hy.westeurope-01.azurewebsites.net/api/AppointmentStatuses)

```
GET    /api/AppointmentStatuses          - Tüm durumları listele
GET    /api/AppointmentStatuses/{id}     - Durum detayını getir
POST   /api/AppointmentStatuses          - Yeni durum oluştur
PUT    /api/AppointmentStatuses/{id}     - Durum güncelle
DELETE /api/AppointmentStatuses/{id}     - Durum sil
```

## 🚀 Kurulum Rehberi

<div align="center">

### ⚡ **Hızlı Başlangıç**

</div>

### 📋 **Gereksinimler**

| 🛠️ **Araç** | 📊 **Versiyon** | 🔗 **Link** |
|-------------|----------------|-------------|
| **.NET SDK** | 8.0+ | [Download](https://dotnet.microsoft.com/download) |
| **SQL Server** | 2019+ | [Download](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) |
| **IDE** | VS 2022 / VS Code | [Download](https://visualstudio.microsoft.com/) |

### 🛠️ **Yerel Geliştirme Adımları**

<div align="center">

| 🔢 **Adım** | 📝 **Açıklama** | 💻 **Komut** |
|-------------|----------------|--------------|

</div>

#### **1️⃣ Projeyi Klonlayın**
```bash
git clone <repository-url>
cd BooklyApi
```

#### **2️⃣ Bağımlılıkları Yükleyin**
```bash
dotnet restore
```

#### **3️⃣ Veritabanı Bağlantısını Ayarlayın**
`appsettings.json` dosyasını düzenleyin:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=YOUR_SERVER;Database=BooklyApi;Trusted_Connection=true;TrustServerCertificate=true;"
  }
}
```

#### **4️⃣ Migrasyonları Çalıştırın**
```bash
dotnet ef database update
```

#### **5️⃣ API'yi Başlatın**
```bash
dotnet run
```

#### **🎉 Başarılı!**
API'niz şu adreste çalışıyor: `https://localhost:7007`

## ⚙️ Konfigürasyon

<div align="center">

### 🔧 **Sistem Ayarları**

</div>

### 🌍 **Environment Variables**

| 🔧 **Değişken** | 📝 **Açıklama** | 💡 **Örnek** |
|----------------|----------------|--------------|
| `ASPNETCORE_ENVIRONMENT` | Çalışma ortamı | `Development` / `Production` |
| `ConnectionStrings__DefaultConnection` | Veritabanı bağlantısı | `Server=...;Database=...;` |

### ☁️ **Azure Deployment**

<div align="center">

| 🎯 **Servis** | 📋 **Açıklama** | 🔗 **Link** |
|---------------|----------------|-------------|
| **🌐 App Service** | Web hosting platformu | [Azure App Service](https://azure.microsoft.com/en-us/services/app-service/) |
| **💾 SQL Database** | Bulut veritabanı | [Azure SQL](https://azure.microsoft.com/en-us/services/sql-database/) |
| **📖 Swagger** | API dokümantasyonu | Production'da aktif |

</div>

## 💻 Örnek Kullanım

<div align="center">

### 🚀 **Kod Örnekleri**

</div>

### ⚛️ **JavaScript/React Örneği**
```javascript
const API_BASE_URL = 'https://prodora-api-ege-d5gadjgtb3ahh2hy.westeurope-01.azurewebsites.net';

// Kullanıcıları getir
const getUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/api/Users`);
  return response.json();
};

// Yeni randevu oluştur
const createAppointment = async (appointmentData) => {
  const response = await fetch(`${API_BASE_URL}/api/Appointments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(appointmentData)
  });
  return response.json();
};
```

### 🔷 **C# Örneği**
```csharp
using var client = new HttpClient();
client.BaseAddress = new Uri("https://prodora-api-ege-d5gadjgtb3ahh2hy.westeurope-01.azurewebsites.net/");

// Kullanıcıları getir
var users = await client.GetFromJsonAsync<List<User>>("api/Users");

// Yeni kullanıcı oluştur
var newUser = new User { FirstName = "John", LastName = "Doe", Email = "john@example.com" };
var response = await client.PostAsJsonAsync("api/Users", newUser);
```

## 🔐 Güvenlik & Performans

<div align="center">

### 🛡️ **Güvenlik Özellikleri**

</div>

| 🔒 **Güvenlik** | ⚡ **Performans** |
|----------------|------------------|
| ✅ **HTTPS Zorunlu** | 🚀 **Entity Framework Optimizasyonu** |
| ✅ **SQL Injection Koruması** | ⚡ **AsNoTracking() Read-Only** |
| ✅ **Input Validation** | 🔄 **Async/Await Pattern** |
| ✅ **CORS Politikası** | 🔗 **Connection Pooling** |

## 🤝 Katkıda Bulunma

<div align="center">

### 🚀 **Projeye Katkıda Bulunun**

</div>

| 🔢 **Adım** | 📝 **Açıklama** | 💻 **Komut** |
|-------------|----------------|--------------|
| **1️⃣** | Fork yapın | GitHub'da "Fork" butonuna tıklayın |
| **2️⃣** | Branch oluşturun | `git checkout -b feature/amazing-feature` |
| **3️⃣** | Commit yapın | `git commit -m 'Add amazing feature'` |
| **4️⃣** | Push yapın | `git push origin feature/amazing-feature` |
| **5️⃣** | Pull Request | GitHub'da "New Pull Request" oluşturun |

---

## 📄 Lisans

<div align="center">

### 📜 **MIT License**

Bu proje **MIT lisansı** altında lisanslanmıştır.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

---

## 👨‍💻 Geliştirici

<div align="center">

### 🎯 **Proje Sahibi**

| 👤 **Ad Soyad** | 📧 **Email** | 🔗 **GitHub** |
|----------------|--------------|---------------|
| **Ege Aydın** | egeaydinn@gmail.com | [@egeaydin](https://github.com/egeaydin) |

</div>

---

<div align="center">

## ⭐ **Projeyi Beğendiyseniz Yıldız Vermeyi Unutmayın!**

[![GitHub stars](https://img.shields.io/github/stars/egeaydin/bookly?style=social)](https://github.com/egeaydin/bookly)
[![GitHub forks](https://img.shields.io/github/forks/egeaydin/bookly?style=social)](https://github.com/egeaydin/bookly)

**Made with ❤️ by Ege Aydın**

</div>