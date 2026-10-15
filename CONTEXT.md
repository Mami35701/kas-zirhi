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
| Dosya Boyutu Kısıtı | 500 KB Yapay Sınırı Kaldırıldı | 15.10.2026 | Kullanıcı onayıyla kaldırıldı; Gzip/Brotli ve PWA önbelleklemesi ile performans ve sıfır sürtünmeli UX önceliklendirildi |
| Çevrimdışı Varlıklar | Service Worker v1.3 (21/21 Offline GIF) | 15.10.2026 | Tüm 21 egzersiz animasyonu tam önbelleğe alındı, uçuşta/salonda sıfır kırılma |
| Aktif Seans Kurtarma | LocalStorage (`kas_zirhi_active_session`) | 15.10.2026 | Antrenman ortasında tarayıcı çökse veya kapansa bile tamamlanan setler anında korunur |
| Veri Formatı | v2 Bütüncül (Omnibus) Kayıpsız JSON | 15.10.2026 | Antrenman, sabah aşil, anlık triyaj, alışkanlıklar ve checklistler tek dosyada export/import |

---

## Geçersiz / Eski Bölümler
- `_Arsiv/Salon Proje v2.md` klasör yolu geçersizdir; proje `c:\Users\imama\OneDrive\Masaüstü\PROJELER\Kas_Zirhi` kök dizinine taşınmıştır.
- "500 KB altında tutma" zorunluluğu GEÇERSİZDİR; mimari kalite ve offline tamlık esastır.
- GÜN 1-7 planında Pzt-Çar-Cum sabit takvim günü algısı: 14 Ekim Çarşamba başladığı için seanslar Gün 1, Gün 2, Gün 3 şeklinde dinamik gösterilecektir.
- 30 Ekim - 1 Kasım arası: Geçiş dönemi olarak işaretlenmiş, yolculuk hazırlığı önerilmiştir.

---

## Mevcut Durum
Proje arşivden çıkarıldı, `Kas_Zirhi` adıyla ana projeler dizinine taşındı ve GitHub Pages üzerinde canlıya alındı. Kapsamlı audit, salon refaktörü (Faz J) ve "Makine Doluysa Alternatif" klinik refaktörü (Faz K) tamamlandı.
- **Konum:** `c:\Users\imama\OneDrive\Masaüstü\PROJELER\Kas_Zirhi`
- **GitHub Reposu:** https://github.com/Mami35701/kas-zirhi
- **Canlı PWA URL:** https://mami35701.github.io/kas-zirhi/
- `dist/index.html`: 5 sekmeli alt menü (`Bugün`, `Antrenman`, `Kayıt`, `Plan`, `Güvenlik`). Safe-area inset uyumlu, mini timer ile çakışmasız, modal z-index 10005 ile tam katmanlama.
- **Bugün Kokpiti:** Gerçek Türkçe tarih, son seans izleme, 5 saniyelik sabah aşil skoru (0-10, ≥5 reaktif kural uyarısı), dev "Antrenmanı Başlat (Salon Modu)" butonu ve çekirdek 3 görev.
- **Salon Antrenman Modu:** Alt gün sekmeleri (Gün 1-3, Gün 4-7), anlık set kurtarma, "Antrenmanı Bitir" modalı (süre, RPE, seans ağrı puanı kaydı), dinamik "Makine Doluysa Alternatif" sistemi (30 makine muadili, ağırlık rehberi, karta anlık uygulama ve veri kirliliği koruması), "Ağrı / Semptom Bildir" triyaj motoru.
- **PWA & Offline:** `dist/manifest.json`, `dist/sw.js` (v1.4) ve `dist/exercises/` (21/21 offline GIF tam paket).
- **Veri Güvenliği:** v2 kayıpsız JSON yedekleme/geri yükleme; muadil egzersizler log kütüğüne `isAlternative: true` ile yazılır, makine temel ağırlığı kirlenmez.
- **Test Doğrulaması:** Playwright E2E Döngü 8 ve Döngü 9 (Pixel 9 Pro XL viewport) testleri sıfır konsol hatasıyla geçti.

---

## Sıradaki Adım
1. Git repo güncellemelerinin (`main` ve `gh-pages` subtree) GitHub'a push edilmesi.
2. Kullanıcının telefonunda (Pixel 9 Pro XL) https://mami35701.github.io/kas-zirhi/ adresinde PWA v1.4 güncellemesini kontrol edip salonda ilk seansı başlatması.


---

## Yeni AI İçin Talimat
1. Bu dosyayı ve docs/PROJE.mdyi baştan sona oku.
2. Task.mddeki ilk [ ] checkpoint'ten devam et.
3. Çelişki durumunda CONTEXT.md kazanır.
4. Kod yazarken PROJE.md'deki hiçbir tıbbi dozu, egzersiz parametresini veya güvenlik uyarısını değiştirme/atlama.
