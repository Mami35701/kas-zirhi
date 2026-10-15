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
| Çevrimdışı Varlıklar | Service Worker v1.6 (26/26 Offline GIF) | 15.10.2026 | Tüm 26 egzersiz animasyonu tam önbelleğe alındı, %100 anatomik uyum |
| Aktif Seans Kurtarma | LocalStorage (`kas_zirhi_active_session`) | 15.10.2026 | Antrenman ortasında tarayıcı çökse veya kapansa bile tamamlanan setler anında korunur |
| Veri Formatı | v2 Bütüncül (Omnibus) Kayıpsız JSON | 15.10.2026 | Antrenman, sabah aşil, anlık triyaj, alışkanlıklar ve checklistler tek dosyada export/import |
| Unilateral Telemetri | Sol/Sağ Bağımsız Set Kaydı | 15.10.2026 | 6 tek taraflı egzersizde sol öncelikli bağımsız set takibi ve asimetri grafiği entegrasyonu |
| Klinik Ağrı Triyajı | 3 Bölge Bağımsız Seans Sonu Skoru | 15.10.2026 | Boyun C5-7, Sol Omuz ve Aşil için çapraz bulaşmasız bağımsız triyaj |

---

## Geçersiz / Eski Bölümler
- `_Arsiv/Salon Proje v2.md` klasör yolu geçersizdir; proje `c:\Users\imama\OneDrive\Masaüstü\PROJELER\Kas_Zirhi` kök dizinine taşınmıştır.
- "500 KB altında tutma" zorunluluğu GEÇERSİZDİR; mimari kalite ve offline tamlık esastır.
- GÜN 1-7 planında Pzt-Çar-Cum sabit takvim günü algısı: 14 Ekim Çarşamba başladığı için seanslar Gün 1, Gün 2, Gün 3 şeklinde dinamik gösterilecektir.
- 30 Ekim - 1 Kasım arası: Geçiş dönemi olarak işaretlenmiş, yolculuk hazırlığı önerilmiştir.
- Pec Deck için göğüs presi, DB Row için kablo çekiş, Heel Drop için düz kalf, Foam Roller için dinamik esneme görselleri GEÇERSİZDİR; ExerciseDB gerçeğe uygun anatomik GIF'lerle değiştirilmiştir.
- Unilateral egzersizlerde sabit `side: 'cift'` ve seans sonu toptancı `painVal >= 4` kuralı GEÇERSİZDİR; Faz M ile bağımsız giriş sistemine geçilmiştir.

---

## Mevcut Durum
Proje arşivden çıkarıldı, `Kas_Zirhi` adıyla ana projeler dizinine taşındı ve GitHub Pages üzerinde canlıya alındı. Kapsamlı audit, salon refaktörü (Faz J), "Makine Doluysa Alternatif" klinik refaktörü (Faz K), "Egzersiz Görsel & Animasyon Doğruluk Refaktörü" (Faz L) ve "7 Kritik Audit Açığının Refaktörü" (Faz M) tamamlandı.
- **Konum:** `c:\Users\imama\OneDrive\Masaüstü\PROJELER\Kas_Zirhi`
- **GitHub Reposu:** https://github.com/Mami35701/kas-zirhi
- **Canlı PWA URL:** https://mami35701.github.io/kas-zirhi/
- `dist/index.html`: 5 sekmeli alt menü (`Bugün`, `Antrenman`, `Kayıt`, `Plan`, `Güvenlik`). Safe-area inset uyumlu, mini timer ile çakışmasız, modal z-index 10005 ile tam katmanlama.
- **Bugün Kokpiti:** Gerçek cihaz tarihi senkronizasyonu, son seans izleme, 5 saniyelik sabah aşil skoru (0-10), akıllı antrenman başlatma döngüsü (Gün 1'den Gün 7'ye ve Hafta 3'e tam progresyon).
- **Salon Antrenman Modu:** Alt gün sekmeleri (Gün 1-3, Gün 4-7), tek taraflı egzersizlerde Sol/Sağ bağımsız set takibi (sol öncelikli kuralı), dinamik RPE rozet okuma, stepper NaN kalkanı, "Makine Doluysa Alternatif" sistemi (30 makine muadili), "Ağrı / Semptom Bildir" anlık triyajı ve 3 bağımsız klinik bölge (Boyun C5-7, Sol Omuz, Aşil) seans sonu triyajı.
- **Egzersiz Animasyonları & PWA:** `dist/manifest.json`, `dist/sw.js` (v1.6) ve `dist/exercises/` (26/26 gerçeğe uygun 180×180 animasyonlu GIF tam paket, ExerciseDB kaynaklı).
- **Veri Güvenliği:** v2 kayıpsız JSON yedekleme/geri yükleme; gerçek Sol/Sağ telemetrisi ile asimetri barı; dürüst yaşam tarzı kütüğü.
- **Test Doğrulaması:** 7 audit açığının Playwright E2E otomasyon testi (`scratch/verify_all_7_fixes.py`) 6/6 başarı ve 0 konsol hatasıyla onaylandı.

---

## Sıradaki Adım
1. Git repo güncellemelerinin (`main` ve `gh-pages` subtree) GitHub'a push edilmesi.
2. Kullanıcının telefonunda (Pixel 9 Pro XL) https://mami35701.github.io/kas-zirhi/ adresinde PWA v1.6 güncellemesini alması.


---

## Yeni AI İçin Talimat
1. Bu dosyayı ve docs/PROJE.mdyi baştan sona oku.
2. Task.mddeki ilk [ ] checkpoint'ten devam et.
3. Çelişki durumunda CONTEXT.md kazanır.
4. Kod yazarken PROJE.md'deki hiçbir tıbbi dozu, egzersiz parametresini veya güvenlik uyarısını değiştirme/atlama.
