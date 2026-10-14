# 🛡️ Kas Zırhı — Kişiye Özel Premium Rehabilitasyon & Kuvvet Platformu

> **Tek Dosya Offline Web Kokpiti** — Boyun fıtığı (C5-6, C6-7), sol kol güç asimetrisi, aşil tendinopatisi ve şiddetli D vitamini eksikliği için klinik ve antrenman yönetim sistemi.

---

## 📌 Proje Özeti
- **Kullanıcı:** 35 Yaş, Erkek, 178 cm, 92 kg (BMI ~29), sezonluk garson → 2 Aralık 2026 resepsiyonist.
- **Hedef:** 15 günlük salon kampı (14-29 Ekim 2026), 1 haftalık yolculuk (2-9 Kasım), 3 haftalık ev dönemi (9 Kasım - 1 Aralık) ve sezon içi resepsiyon dönemini kapsayan hiper-kişiselleştirilmiş kuvvet ve rehabilitasyon programı.
- **Format:** Tek dosya HTML (`dist/index.html`), inline CSS ve JS, SIFIR harici bağımlılık, < 500 KB, tamamen offline çalışır.

---

## 🚀 Özellikler & Fonksiyonel Sistemler

1. **17 Bölümlük Bütünsel Yapı:**
   - Hero & Kullanıcı İstatistikleri
   - Zaman Çizelgesi (4 Faz + Geçiş Günleri + Gün Sayacı)
   - Tıbbi Profil & Kan Tahlili Accordion (18 parametre)
   - Acil Durum & Kırmızı Bayraklar (Nörolojik uyarılar)
   - 15 Günlük Salon Programı (Hafta 1 Full Body, Hafta 2 Upper/Lower Split, Hafta 3 Konsolidasyon)
   - Servikal Stabilizasyon Protokolü (7 sıralı egzersiz + 10 yasaklı hareket)
   - Aşil Tendinopatisi Protokolü (4 faz + 5 ağrı izleme kuralı + 4 egzersiz + 5 yasaklı hareket)
   - Sol Omuz & Skapula Protokolü (Nöral aktivasyon, sol öncelik, 8 egzersiz)
   - Beslenme Planı (130-150g etsiz protein, günlük örnek menü, anti-inflamatuar besinler)
   - Takviye Protokolü (D3 50.000 IU yükleme, K2, Kreatin, Magnezyum, Kolajen+C)
   - Uyku & Ergonomi Protokolü (Yatış pozisyonu 🥇/🥈/❌, hijyen, 30-40 dk mikro-rehab)
   - Yasaklı Hareketler Kataloğu (Görsel kırmızı uyarılar)
   - Yolculuk Programı (2-9 Kasım: Sabah 6 / Akşam 7 hareket)
   - Ev Programı (9 Kasım - 1 Aralık: 4 gün split, Upper / Lower)
   - Sezon İçi Program (2 Aralık+: Resepsiyon mikro-rehab + 5 Aralık salon)
   - Alışveriş Listesi (Ekipman + Takviye maliyet tablosu)
   - Antrenman Log Sistemi & Saf SVG Grafikler
   - Mola Zamanlayıcı (Web Audio API + SVG dairesel timer)

2. **İnteraktif Sistemler:**
   - **Mola Zamanlayıcı:** 45, 60, 75, 90 sn ve özel süre. Web Audio bip sesi, titreşim (Vibration API), `Date.now()` tabanlı arka plan zaman koruması.
   - **Log & Takip:** Set bazlı kg/tekrar/RPE girişi (sol ve sağ ayrımı), 5 bölge ağrı sliderı, sabah ilk adım aşil ağrısı (en kritik gösterge), uyku, su, ruh hali ve serbest notlar. Veriler `localStorage`ta saklanır; tek tıkla JSON İndir/Yükle yedekleme imkanı.
   - **Saf SVG Grafikler:** Harici kütüphanesiz vektörel ağırlık/hacim ilerleme grafiği, haftalık ağrı trendi, sabah aşil skoru grafiği ve sol/sağ asimetri oranı.
   - **Akıllı Klinik Kurallar:** Aşil ≥ 5 uyarısı, boyun/kola yayılan ağrıda DUR kuralı, sabah ağrısında yükü %20 azaltma önerisi, 2 hafta düşüş olmazsa yük düşürme uyarısı.
   - **Tarihsel Hatırlatıcılar:** 14 Eki, 2 Kas, 9 Kas, 2 Ara, 5 Ara ve tahlil kontrol tarihlerini cihaz saatine göre otomatik algılama ve karşılama.
   - **Yazdırılabilir (`@media print`):** Tüm sekmeleri ve akordeonları açık formatta şık ve temiz biçimde kağıda/PDF'e döker.

---

## ⚖️ Dökümandaki Belirsizlikler ve Alınan Kararlar (Varsayımlar)

1. **Takvim & Başlangıç Günü:** 14 Ekim 2026 Çarşamba günüdür. Programdaki "Pzt-Çar-Cum" ifadeleri takvim gününe kilitlenmemiş; dinlenme günleriyle ilerleyen dinamik seanslar olarak ("Gün 1", "Gün 2", "Gün 3") tasarlanmıştır.
2. **Geçiş Günleri (30 Ekim - 1 Kasım):** Salon kampının sonu ile yolculuk başlangıcı arasındaki bu 3 gün "Geçiş ve Toparlanma Günleri" olarak etiketlenmiş; hafif yolculuk rutini ve toparlanma önerilmiştir.
3. **Gün Sayacı:** 14-29 Ekim arası 16 takvim günüdür; kullanıcının 15 günlük salon hakkı ve toplam takvim süresi arayüzde ayrı ayrı şeffafça gösterilmiştir.
4. **Hafta 2 Numaralama (Bölüm 5.3):** Gün 4-7 numaralaması, "Hafta 2 — Gün 1 (Upper A)", "Hafta 2 — Gün 2 (Lower)", vb. şeklinde hem hafta bazlı hem gün bazlı etiketlenmiştir.
5. **Acil Durum & Kırmızı Bayraklar:** PROJE.md sınırları korunmuş; yalnızca genel güvenlik uyarısı niteliğindeki "İlerleyici güç kaybı, kol/bacak uyuşması, idrar/dışkı kontrol kaybı, yüksek ateşle seyreden şiddetli ağrı" durumlarında antrenmanın derhal durdurularak acil doktora başvurulması gerektiği açıkça belirtilmiştir.
6. **Yasal Sorumluluk Reddi:** Sayfanın hem en üstünde hem en altında kalıcı bilgilendirme bandı yer alır: *"Bu platform bilgilendirme ve egzersiz takip amaçlıdır; tıbbi teşhis ve tedavi tavsiyesi yerine geçmez. Yüksek doz D3, magnezyum, kreatin ve melatonin gibi kararları hekiminizle teyit ediniz."*

---

## 📂 Dosya Yapısı
```
Salon Proje v2.md/
├── .agents/
│   └── AGENTS.md            # Ajan ve operatör kuralları
├── .env.example             # Çevre değişkenleri şablonu
├── .gitignore               # Versiyon kontrol kuralı
├── CONTEXT.md               # Tek gerçek kaynak ve proje kararları
├── Task.md                  # İşaretlenebilir görev listesi
├── SPEC.md                  # Teknik şartname ve kapsam dışı sınırları
├── README.md                # Bu dosya
├── Dökümantasyon.md         # Orijinal kullanıcı dökümanı
├── docs/
│   ├── PROJE.md             # 21 bölümlük ana proje dökümanı
│   ├── traceability.md      # 355 maddelik tam izlenebilirlik matrisi
│   ├── test-log.md          # Otomatik test döngüsü kayıtları
│   └── shots/               # Ekran görüntüleri
└── dist/
    └── index.html           # Nihai tek dosya offline web uygulaması (< 500 KB)
```

---

## 💻 Çalıştırma & Kullanım
Uygulama sıfır bağımlılığa sahip tek bir HTML dosyasıdır.
1. `dist/index.html` dosyasını herhangi bir modern tarayıcıda (Chrome, Edge, Safari, Firefox) çift tıklayarak açın.
2. İnternet bağlantısı gerektirmez; uçakta, spor salonunda veya dağ yürüyüşünde tamamen offline çalışır.
3. Verilerinizi yedeklemek için Log sekmesindeki **"JSON Olarak Dışa Aktar"** butonunu kullanabilirsiniz.
