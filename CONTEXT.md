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

---

## Geçersiz / Eski Bölümler
- GÜN 1-7 planında Pzt-Çar-Cum sabit takvim günü algısı: 14 Ekim Çarşamba başladığı için seanslar Gün 1, Gün 2, Gün 3 şeklinde dinamik gösterilecektir.
- 30 Ekim - 1 Kasım arası: Geçiş dönemi olarak işaretlenmiş, yolculuk hazırlığı önerilmiştir.

---

## Mevcut Durum
Proje, 30 bölümlük statik rehber kitabından "Günlük Yol Arkadaşı" mobil kokpitine dönüştürüldü ve Playwright ile doğrulandı.
- `dist/index.html`: 532 KB, 5 sekmeli alt menü (`Bugün`, `Antrenman`, `Kayıt`, `Plan`, `Güvenlik`).
- **Bugün Kokpiti:** Gerçek Türkçe tarih, son seans izleme, 5 saniyelik sabah aşil skoru (0-10, ≥5 reaktif kural uyarısı), dev "Antrenmanı Başlat (Salon Modu)" butonu ve çekirdek 3 görev.
- **Salon Antrenman Modu:** Büyük set butonları, gerçek son logdan veya boş/vücut ağırlığından başlama, "Makine Doluysa Alternatif" modalı, "Ağrı / Semptom Bildir" anlık triyaj motoru.
- **Veri Dürüstlüğü & Klinik Şeffaflık:** Sahte 50kg/55kg ve 45/55 asimetri kaldırıldı (dürüst boş durum); jenerik "9 uzman onaylı" yerine "AI Destekli Biyomekanik Taslak & Takip Kokpiti" yerleştirildi.
- `dist/manifest.json`, `dist/sw.js` ve `dist/exercises/` (12 offline GIF): %100 offline hazır.
- `docs/test-log.md`: Döngü 1'den 7'ye kadar tüm testler 0 konsol hatası ile tamamlandı.

---

## Sıradaki Adım
1. Kullanıcının yerel tarayıcısında ve telefonunda 5 sekmeli kokpiti test etmesi.
2. Kullanıcı onayladığında Vercel / Netlify canlı dağıtımının yapılması.


---

## Yeni AI İçin Talimat
1. Bu dosyayı ve docs/PROJE.mdyi baştan sona oku.
2. Task.mddeki ilk [ ] checkpoint'ten devam et.
3. Çelişki durumunda CONTEXT.md kazanır.
4. Kod yazarken PROJE.md'deki hiçbir tıbbi dozu, egzersiz parametresini veya güvenlik uyarısını değiştirme/atlama.
