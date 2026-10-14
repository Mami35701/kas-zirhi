# SPEC.md — Kas Zırhı Platformu
> **Operatör Kuralı:** 90 dakikayı aşan tek parça görevler YASAKTIR. Önce çalışan iskelet ayağa kalkmalı, ardından içerik ve interaktivite modüler olarak entegre edilmelidir.
> Oluşturulma: 14.10.2026

---

## 1. Problem Tanımı
Kullanıcı 35 yaşında, 178 cm / 92 kg, boyun fıtıkları (sol C5-6 protrüzyon, C6-7 osteofitik herni, lordoz kaybı), sol kol güç asimetrisi, aşil tendinopatisi ve şiddetli D3 eksikliği olan, 2 yıldır hareketsiz, et yemeyen ve sigara kullanan bir bireydir. 14 Ekim 2026'da başlayan 15 günlük salon kampı, yolculuk, ev dönemi ve 2 Aralık resepsiyon sezonu boyunca güvenli, hedefe yönelik ve eksiksiz bir rehberliğe ihtiyaç duymaktadır.

---

## 2. Kapsam Dışı Demir Perdesi (Out-of-Scope - ZORUNLU)
- [x] ❌ Kapsam Dışı 1: Harici sunucu, kullanıcı oturumu (login/auth) veya backend API YOK — Tamamen istemci taraflı (localStorage) çalışır.
- [x] ❌ Kapsam Dışı 2: Harici CDN (Tailwind, Bootstrap, FontAwesome, Google Fonts, Chart.js) YOK — %100 saf CSS3 ve vanilla SVG.
- [x] ❌ Kapsam Dışı 3: Dökümanda olmayan rastgele egzersiz, kontrolsüz ağırlık artışı veya tıbbi teşhis iddiası YOK.

---

## 3. Kabul Kriterleri (Definition of Done)
- [x] Tek dosya: `dist/index.html` < 500 KB, sıfır harici istek (`http://`, `//cdn`).
- [x] 17 Bölüm ve Sticky Navigation eksiksiz mevcut.
- [x] Tüm egzersizler JS veri modellerinde tutulur; set, tekrar, tempo, dinlenme, RPE, "Neden bu hareket?" ve "Güvenlik Uyarısı" eksiksiz render edilir.
- [x] Mola zamanlayıcı: SVG dairesel gösterge, 45/60/75/90 sn + özel süre, Web Audio bip, `Date.now()` tabanlı arka plan koruması.
- [x] Log sistemi: Set bazlı kg/tekrar/RPE + sol/sağ ayrımı, ağrı sliderları (0-10), sabah aşil ağrısı, uyku, su, not, localStorage, JSON Export/Import.
- [x] Saf SVG Grafikler: Egzersiz ilerleme, haftalık ağrı trendi, sabah aşil trendi, asimetri oranı.
- [x] Akıllı kurallar: Aşil ≥ 5 uyarısı, boyun/kol uyarısı, sabah ağrısında %20 yük azaltma uyarısı, tarih bazlı faz bildirimleri.
- [x] Traceability Matrix (%100 ✅).

---

## 4. Mimari & Dosya Yapısı
```
Salon Proje v2.md/
├── .agents/
│   └── AGENTS.md
├── .env.example
├── .gitignore
├── CONTEXT.md
├── Task.md
├── SPEC.md
├── README.md
├── Dökümantasyon.md
├── docs/
│   ├── PROJE.md             (Tek kaynak)
│   ├── traceability.md      (İzlenebilirlik matrisi)
│   ├── test-log.md          (Otomatik test günlüğü)
│   └── shots/               (Browser test ekran görüntüleri)
└── dist/
    └── index.html           (Nihai tek dosya offline uygulama)
```

---

## 5. Test Senaryoları
1. **Navigasyon:** Tüm linkler ilgili bölüme pürüzsüz kayar.
2. **Tablar:** Hafta 1, 2, 3 ve Gün 1-7 içerikleri eksiksiz değişir.
3. **Timer:** 45 saniye başlatılır, duraklatılır, devam edilir, bitişte bip çalar.
4. **Log & Storage:** Kayıt eklenir, sayfa yenilenir, veriler korunur. JSON indirilir ve geri yüklenir.
5. **Ağrı Kuralları:** Aşil 5 girildiğinde uyarı kutusu tetiklenir, 3 girildiğinde normal kalır.
6. **Grafikler:** Veri yokken bilgilendirme mesajı, veri girildikçe dinamik SVG çizimi.
