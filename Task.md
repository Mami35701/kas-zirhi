# Task.md — Kas Zırhı Platformu
> Oluşturulma: 14.10.2026
> Durum İşaretleri: `[ ]` bekliyor | `[/]` devam ediyor | `[x]` tamamlandı

---

## Faz -1: Proje Kurulumu & Planlama Modu
- [x] `docs/PROJE.md` oluşturuldu ve tam metin arşivlendi
- [x] Proje şablon dosyaları oluşturuldu (`.agents/AGENTS.md`, `CONTEXT.md`, `SPEC.md`, `.gitignore`, `.env.example`)
- [x] Implementation Plan Artifact'i oluşturuldu ve sunuldu
- [x] Task List Artifact'i oluşturuldu ve sunuldu
- [x] Traceability Matrix oluşturuldu (`docs/traceability.md`)

## Faz A: Tasarım ve İskelet (CSS & Yapı)
- [x] CSS Değişkenleri ve Reset: `#0a0e1a` arka plan, `#111827` kartlar, `#3b82f6` neon mavi, `#8b5cf6` mor aksanlar, 16px border-radius, glow efektleri
- [x] Mobil Öncelikli Responsive Düzen (320px - 1440px)
- [x] Sticky Navigation: 17 bölüm linki, mobil hamburger menü / yatay scroll bar
- [x] Kalıcı Yasal Uyarı Bannerları (Sayfa tepesi ve en alt)
- [x] 17 Bölüm İskeletinin Semantik HTML5 Olarak Kurulması

## Faz B: İçerik & JS Veri Modelleri
- [x] 9 Uzman Rolü İmzaları ve Rozetleri (🩺 Spor Hekimi, 🧠 Nöromüsküler, 💪 CSCS, 🦶 Orto PT, 🥗 Diyetisyen, 💊 Takviye, 😴 Uyku/Ergonomi, 💻 Senior Frontend, 📊 Veri Analisti + 🔍 Bağımsız QA)
- [x] Tıbbi Profil & Kan Tahlili Accordion (18 Parametre, Normal/Kritik etiketleri)
- [x] Yaşam Tarzı, Lojistik, Salon Ekipmanı ve Acil Durum / Kırmızı Bayraklar Bölümü
- [x] 4 Faz Zaman Çizelgesi + Geçiş Günleri (30 Eki - 1 Kas) + Takvim Sayacı (15 gün kamp vs 16 takvim günü)
- [x] Genel Kurallar Kutusu (9 altın kural, sol taraf prensibi)
- [x] Hafta 1 Full Body Programı (Gün 1 Full Body A, Gün 2 Full Body B, Gün 3 Full Body A+, Opsiyonel Gün 4 Recovery)
- [x] Hafta 2 Upper/Lower Split Programı (Gün 4 Upper A, Gün 5 Lower + Aşil, Gün 6 Upper B, Gün 7 Lower B)
- [x] Hafta 3 Konsolidasyon Programı ve Progresyon Kuralları
- [x] Servikal Stabilizasyon Protokolü (7 egzersiz tablosu + 10 yasaklı hareket kırmızı kartı)
- [x] Aşil Tendinopatisi Protokolü (4 faz tablosu + 5 ağrı izleme kuralı + 4 egzersiz tablosu + 5 yasaklı hareket)
- [x] Sol Omuz & Skapula Protokolü (Sorun analizi + 5 strateji + 8 egzersiz tablosu + sezon koruma)
- [x] Beslenme & Hidrasyon Planı (Makrolar, etsiz protein tablosu, örnek menü, anti-inflamatuar besinler, 3.5-4L su planı)
- [x] Takviye Protokolü (8 takviye tablosu, D3 50.000 IU yükleme ve idame takvimi)
- [x] Uyku & Ergonomi Protokolü (Yatış pozisyonu 🥇/🥈/❌, hijyen, resepsiyon ergonomisi)
- [x] Yolculuk Programı (2-9 Kasım: Sabah 6 hareket, Akşam 7 hareket)
- [x] Ev Programı (9 Kasım - 1 Aralık: Ekipman, 4 gün split, Upper 9 hareket, Lower 8 hareket)
- [x] Sezon İçi Program (2 Aralık+: Resepsiyon mikro-rehab 5 hareket, 5 Aralık+ 4 gün salon)
- [x] Bütçe Dostu Alışveriş Listesi (Ekipman + Takviye fiyat tablosu, minimum/ideal toplam)
- [x] Tüm egzersizlerde "Neden bu hareket?" (mavi) ve "Güvenlik Uyarısı" (kırmızı) kutuları

## Faz C: İnteraktif Sistemler
- [x] Tab Sistemi: Hafta 1 / Hafta 2 / Hafta 3 / Yolculuk / Ev / Sezon geçişleri
- [x] Accordion Sistemi: Kan tahlili, detay açıklamaları, tıbbi analizler
- [x] Mola Zamanlayıcı (Date.now tabanlı): SVG dairesel gösterge, 45/60/75/90 sn + özel süre, Web Audio API sesli bip, Vibration API titreşim, arka plan koruması, kart içi ⏱ butonu ve alt mini bar
- [x] Antrenman Log Sistemi (localStorage): Set bazlı kg/tekrar/RPE girişi (sol/sağ ayrımı), 5 bölge ağrı sliderı (0-10), sabah aşil ağrısı (0-10), uyku süresi/kalitesi, su tüketimi, ruh hali, genel notlar
- [x] Log Geçmişi & Yönetimi: Son 30 gün geçmiş kartları, silme, JSON Dışa Aktar (Download) ve İçe Aktar (Upload)
- [x] Saf SVG Grafikler: Egzersiz bazlı ağırlık/hacim progresyonu, haftalık ortalama ağrı trendi, sabah aşil ağrısı trendi, sol/sağ asimetri oranı
- [x] Akıllı Uyarı & Tetikleyici Motoru: Aşil ağrısı ≥ 5 uyarısı, boyun/kola yayılan ağrıda DUR uyarısı, sabah ağrısında yükü %20 azalt önerisi, 2 hafta düşüş yoksa yük azaltma kuralı
- [x] Tarih Bazlı Hatırlatıcı Motoru: 14 Eki başlangıç, 2 Kas yolculuk, 9 Kas ev, 2 Ara resepsiyon, 5 Ara salon, D3 +8 hafta kontrolü, AST/ALT +4 hafta kontrolü
- [x] İş Yeri Mikro-Rehab Zamanlayıcısı (30-40 dk aralık bildirimi)
- [x] Günlük Checklist'ler: Takviye, Uyku, Alışveriş (localStorage kalıcılığı)

## Faz D: Cilalama & Erişilebilirlik
- [x] `@media print` CSS: Yazdırmada tüm tab ve accordion içeriklerinin açık basılması, siyah-beyaz optimizasyonu
- [x] Erişilebilirlik: ARIA roller, `prefers-reduced-motion` desteği, klavye ile sekme/accordion kontrolü (focus-visible)
- [x] Kontrast Oranları: WCAG AA uyumu, canlı neon aksanlar
- [x] Ekran Boyutları: 320px'ten 1920px'e kadar kusursuz esneklik, yatay taşma (overflow-x) sıfır

## Faz E: Otomatik Test Döngüsü & Teslimat
- [x] Test 1 (Statik): `node --check` syntax doğrulaması, console error taraması, harici URL (http, cdn) sıfır kontrolü
- [x] Test 2 (Browser Subagent): 360px, 768px, 1280px genişliklerinde test ve ekran görüntüleri (`docs/shots/`)
- [x] Test 3 (Fonksiyonel): Navigasyon, tablar, mola zamanlayıcı arka plan testi, log kaydet/yenile/export/import, ağrı uyarıları, grafik renderları, tarih simülasyonu, localStorage devre dışı senaryosu, print CSS
- [x] Test 4 (QA Denetimi): `docs/traceability.md` satır satır karşılaştırma ve tüm maddelerin ✅ yapılması
- [x] Test Günlüğü: `docs/test-log.md` dosyasına test döngülerinin kaydedilmesi
- [x] `README.md` ve Final Walkthrough Artifact'inin hazırlanması

## Faz F: PWA, Screen Wake Lock & Sürtünmesiz UX Entegrasyonu
- [x] PWA Manifest (`manifest.json`): Standalone display, Dark theme (`#0a0e1a`), portrait orientation
- [x] PWA Uygulama İkonları: 192×192, 512×512 ve Apple Touch 180×180 piksel PNG üretimi
- [x] Service Worker (`sw.js`): Offline-first önbellekleme ve arka plan güncelleme stratejisi
- [x] Vercel Dağıtım Yapılandırması (`vercel.json`): Clean URL, güvenlik başlıkları, cache optimizasyonu
- [x] Screen Wake Lock API: Antrenman esnasında ekranın kararmasını önleme ve görsel durum rozeti
- [x] Sürtünmesiz Hızlı Set (Quick-Set): Tek tıkla set tamamlama ve otomatik mola sayacı tetikleme
- [x] İnteraktif Tempo Kılavuzu: 4 haneli şifreler yerine `⬇️ 3s • ⏸️ 0s • ⬆️ 1s • ⏹️ 0s` görsel gösterim ve tıklanabilir detay
- [x] İnteraktif RPE & RIR Kılavuzu: Tıklanabilir `🎯 RPE 8 (Cepte 2 Pay)` rozetleri ve tam açıklama modalı
- [x] Biyomekanik Form Rehberi Modalı (`#exerciseGuideModal`): Omurga güvenliği, Do's/Don'ts ve video arama bağlantısı
## Faz G: İnteraktif Anatomik Ağrı Haritası & Dinamik Renk Senkronizasyonu
- [x] Saf SVG Anatomik Vücut Silueti (Ön/Anterior & Arka/Posterior Klinik Odak)
- [x] Kritik Klinik Odak Bölgeleri (C5-6 / C6-7 servikal omurga disk pinleri, sol skapula/kulunç tetik noktası, çift taraflı aşil tendonları, bel)
- [x] Çift Yönlü Etkileşim: Vücut bölgesine tıklandığında ilgili kaydırıcıya pürüzsüz odaklanma (`scrollIntoView` + vurgulama)
- [x] Canlı Görselleştirme: Ağrı kaydırıcıları oynatıldığında anlık renk değişimi (Yeşil: <3, Sarı: 3-4, Kırmızı: ≥5 ve nabız animasyonu)
- [x] Playwright E2E Döngü 6 Testi: 15 adımlı tam kapsamlı test sıfır hata ile tamamlandı

## Faz H: Final Sürüm "Günlük Yol Arkadaşı" 5 Sekmeli Kokpit
- [x] 5 Sekmeli Alt Gezinim Çubuğu: `Bugün` (Kokpit), `Antrenman` (Salon Modu), `Kayıt` (Log & Grafikler), `Plan` (Kütüphane), `Güvenlik` (Klinik Çerçeve)
- [x] "Bugün" Kokpiti: Dinamik Türkçe tarih, son seans bilgisi, 5 saniyelik sabah aşil skoru (0-10, ≥5 reaktif uyarı kutusu), dev `[Antrenmanı Başlat]` butonu, çekirdek 3 görev toggle
- [x] Salon Modu Aksiyonları: "Makine Doluysa Alternatif" butonu/modalı ve "Ağrı / Semptom Bildir" anlık triyaj karar motoru
- [x] Veri Dürüstlüğü: Sahte 50kg/55kg ve 45/55 asimetri kaldırıldı, dürüst boş durum ve temiz bilgilendirme paneli sağlandı
- [x] Tıbbi Şeffaflık: Jenerik "9 uzman onaylı" yerine yasal ve klinik "AI Destekli Biyomekanik Taslak & Takip Kokpiti" konumlandırması
- [x] Playwright E2E Döngü 7 Testi: 0 konsol hatası ile tüm sekmeler, modallar ve reaktif kurallar doğrulandı

