# CONTEXT.md — Kas Zırhı (Salon Proje v2)
> **Tek Gerçek Kaynak:** Bu dosya ve docs/PROJE.md. Çelişki durumunda bu dosya kazanır.
> **Operatör & Çekirdek Kısıtlar:** c:\Users\imama\OneDrive\Masaüstü\PROJELER\OPERATOR_CORE.md
> Oluşturulma: 14.10.2026

---

## Projenin 1 Cümlesi
35 yaşında, boyun fıtıkları (sol C5-6, C6-7), sol kol asimetrisi, aşil tendinopatisi ve D3 eksikliği olan kullanıcının 15 günlük salon kampı, 1 haftalık yolculuk, 3 haftalık ev dönemi ve sezon içi resepsiyon dönemini kapsayan sıfır bağımlılıklı, interaktif tek dosya rehabilitasyon ve kuvvet kokpiti.

---

## Teknik Kararlar (Kesinleşmiş)

| Karar | Değer | Tarih | Neden |
|---|---|---|---|
| Mimari | Tek Dosya HTML (dist/index.html) | 14.10.2026 | Harici sunucu gerektirmeyen, taşınabilir, offline ve sıfır bağımlılıklı çözüm |
| Bağımlılıklar | SIFIR (No CDN, No 외부 Font/Icon, No Lib) | 14.10.2026 | Uçuşta/yolculukta ve spor salonunda kesintisiz offline çalışabilirlik |
| Stil & Tema | Vanilla CSS3 (#0a0e1a Dark Mode, Neon aksanlar) | 14.10.2026 | PROJE.md Bölüm 18 tasarım standartlarına ve modern estetiğe tam uyum |
| Veri Depolama | LocalStorage + JSON Export/Import | 14.10.2026 | Veritabanı kurmadan tarayıcı içinde kalıcı log takibi ve cihazlar arası yedekleme |
| Ses & Titreşim | Web Audio API (Oscillator) + Vibration API | 14.10.2026 | Harici ses dosyası indirmeden dinamik set sonu mola uyarısı |
| Grafikler | Pure Inline SVG | 14.10.2026 | Chart.js/D3 vb. olmadan hafif, vektörel, yazdırılabilir ilerleme grafikleri |
| Mola Sayacı | Date.now() tabanlı SVG dairesel timer | 14.10.2026 | Sekme arka plana geçtiğinde setTimeout sapmasını engelleyen mutlak zaman kontrolü |
| Tarih Hatırlatıcı | Date() bazlı dinamik faz ve uyarı motoru | 14.10.2026 | 14 Eki, 2 Kas, 9 Kas, 2 Ara, 5 Ara ve tahlil tarihlerini otomatik algılama |
| Canlı Dağıtım | GitHub Pages (https://mami35701.github.io/kas-zirhi/) | 14.10.2026 | HTTPS, sıfır maliyet, anında PWA kurulabilir mobil ve offline erişim |

---

## Geçersiz / Eski Bölümler
- `_Arsiv/Salon Proje v2.md` klasör yolu geçersizdir; proje `c:\Users\imama\OneDrive\Masaüstü\PROJELER\Kas_Zirhi` kök dizinine taşınmıştır.
- GÜN 1-7 planında Pzt-Çar-Cum sabit takvim günü algısı: 14 Ekim Çarşamba başladığı için seanslar Gün 1, Gün 2, Gün 3 şeklinde dinamik gösterilecektir.
- 30 Ekim - 1 Kasım arası: Geçiş dönemi olarak işaretlenmiş, yolculuk hazırlığı önerilmiştir.

---

## Mevcut Durum
Proje arşivden çıkarıldı, `Kas_Zirhi` adıyla ana projeler dizinine taşındı ve GitHub Pages üzerinde canlıya alındı.
- **Konum:** `c:\Users\imama\OneDrive\Masaüstü\PROJELER\Kas_Zirhi`
- **GitHub Reposu:** https://github.com/Mami35701/kas-zirhi
- **Canlı PWA URL:** https://mami35701.github.io/kas-zirhi/
- `dist/index.html`: 5 sekmeli alt menü (`Bugün`, `Antrenman`, `Kayıt`, `Plan`, `Güvenlik`).
- **Bugün Kokpiti:** Gerçek Türkçe tarih, son seans izleme, 5 saniyelik sabah aşil skoru (0-10, ≥5 reaktif kural uyarısı), dev "Antrenmanı Başlat (Salon Modu)" butonu ve çekirdek 3 görev.
- **Salon Antrenman Modu:** Büyük set butonları, gerçek son logdan veya boş/vücut ağırlığından başlama, "Makine Doluysa Alternatif" modalı, "Ağrı / Semptom Bildir" anlık triyaj motoru.
- **PWA & Offline:** `dist/manifest.json`, `dist/sw.js` ve `dist/exercises/` (12 offline GIF) tam uyumlu, service worker önbelleklemesi devrede.
- **Canlılık Testi:** Canlı URL HTTP 200, manifest 200, sw.js 200, offline GIF'ler 200 ile doğrulandı.

---

## Sıradaki Adım
1. Kullanıcının telefonunda (Pixel 9 Pro XL) https://mami35701.github.io/kas-zirhi/ adresini açıp "Ana Ekrana Ekle" (PWA) yaparak spor salonu/seyahat için test etmesi.
2. İlk gün antrenmanı (Full Body A) ve sabah aşil skorunun kaydedilmesi.


---

## Yeni AI İçin Talimat
1. Bu dosyayı ve docs/PROJE.mdyi baştan sona oku.
2. Task.mddeki ilk [ ] checkpoint'ten devam et.
3. Çelişki durumunda CONTEXT.md kazanır.
4. Kod yazarken PROJE.md'deki hiçbir tıbbi dozu, egzersiz parametresini veya güvenlik uyarısını değiştirme/atlama.
