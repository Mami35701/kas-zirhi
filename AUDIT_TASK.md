# 📋 KAS ZIRHI — KAPSAMLI MODÜLER AUDIT GÖREV PLANI (AUDIT_TASK.md)
> **Hedef:** `c:\Users\imama\OneDrive\Masaüstü\PROJELER\Kas_Zirhi`  
> **Odak:** 35 yaş sol C5-C7 servikal fıtık, bilateral aşil tendiniti, sol kol asimetrisi, yüksek HGB (17.4), D3 eksikliği; Schladming lojmanı / seyahat / salon şartları.  
> **Yaklaşım:** Multi-Disipliner Uzman Heyeti & Ajan Rolleri (Klinik Spor Hekimi, Biyomekanik Uzmanı, Senior Frontend/PWA Mimarı, Saha UX/Salon Ergonomisti, Veri Güvenliği & Kalıcılık Uzmanı).

---

## 🏛️ Denetim Heyeti & Uzman Rolleri

1. **🩺 Dr. Klinik Spor Hekimi & Fiziksel Tıp:** C5-6 / C6-7 omurga güvenliği, aksiyel yük yasağı, aşil tendinopati fazları ve dorsifleksiyon yasağı, acil semptom triyajı, HGB/su/D3 klinik uyumu.
2. **🧠 Nöromüsküler Biyomekanik Uzmanı:** Sol kol güç asimetrisi, skapular kanatlanma/retraksiyon, tempo (4 haneli ritim), makine alternatiflerinin biyomekanik eşdeğerliği, form kılavuzları.
3. **💻 Senior Frontend & PWA Mimarı:** Tek dosya vs modüler yapı analizi, yapay 500 KB sınırının kaldırılması, CSS mimarisi, viewport safe-area (Pixel 9 Pro XL), Service Worker (`sw.js`) önbellek doğrulaması, Web Audio API / Wake Lock stabilitesi.
4. **🏋️ Saha UX & Spor Salonu Ergonomisti:** Terli parmak / tek elle mobil kullanım ergonomisi, antrenman içi scroll yükü, "Antrenmanı Bitir & Kaydet" akışı, mola sayacı görsel/sesli/titreşimli geri bildirimleri, aktif seans veri kaybı önleme.
5. **🔐 Veri Güvenliği, Yedekleme & Analitik Uzmanı:** LocalStorage şeması, JSON Export / Import veri bütünlüğü (tüm logların, sabah aşil skorlarının ve triyaj olaylarının yedeklenmesi), SVG grafik motoru matematiksel doğruluğu, boş durum (empty-state) dürüstlüğü.

---

## 🔍 Denetim Kontrol Noktaları (Modül Bazlı)

### MODÜL 1: Mimari, Dağıtım & 500 KB Kısıt Analizi
- [ ] 1.1 `dist/index.html` 9,499 satırlık monolitik yapının sürdürülebilirlik, hata ayıklama ve performans analizi.
- [ ] 1.2 "500 KB sınırı gerekli mi?" sorusunun teknik analizi (PWA/Vercel/GitHub Pages bağlamında modern web standartları).
- [ ] 1.3 `dist/sw.js` Service Worker incelemesi: Önbellek listesi (`ASSETS_TO_CACHE`) ile `dist/exercises/` klasöründeki gerçek dosyaların karşılaştırılması (eksik GIF'ler).
- [ ] 1.4 `dist/manifest.json` ve `vercel.json` güvenlik başlıkları, clean URLs ve PWA offline desteğinin incelenmesi.

### MODÜL 2: "Bugün" Kokpiti (viewToday)
- [ ] 2.1 Tarih hesaplama mekanizması: Gerçek sistem saati vs hardcoded simülasyon ayrımı.
- [ ] 2.2 Sabah aşil skoru (0-10) reaktif kural motoru ve görsel durum yansımaları.
- [ ] 2.3 "Antrenmanı Başlat (Salon Modu)" butonu aksiyonunun antrenman seansını başlatma yetkinliği.
- [ ] 2.4 Günün çekirdek görevleri (3 takviye, hidrasyon, mikro-rehab) localStorage kalıcılığı.

### MODÜL 3: "Antrenman" Salon Modu (viewWorkout)
- [ ] 3.1 Hafta 1, Hafta 2 ve Hafta 3 seans düzeni: Egzersiz kartlarının dikey scroll yükü ve gün seçici (Day 1 / Day 2 / Day 3) ergonomisi.
- [ ] 3.2 Hızlı Set (Quick-Set) mekanizması: Buton geri bildirimleri, set tamamlama, kilo/tekrar stepperları.
- [ ] 3.3 Aktif Antrenman Durumu: `workoutSessionData` bellekte mi tutuluyor yoksa sayfa yenilenmesine karşı `localStorage` üzerinde korunuyor mu?
- [ ] 3.4 "Seansı Tamamla ve Kaydet" akışı: Salonda çalışan kullanıcının seansı kolayca kaydetmesi için doğrudan antrenman ekranında bir aksiyon var mı?
- [ ] 3.5 Makine Doluysa Alternatif Modalı (`EXERCISE_ALTERNATIVES`): Önerilen hareketlerin biyomekanik güvenliği (fıtık ve aşil uyumu).
- [ ] 3.6 Ağrı / Semptom Bildir Modalı (`PAIN_FLAG_TRIAGE`): Triyaj kuralları, anlık direktifler ve olay günlüğü kaydı.
- [ ] 3.7 Form Rehberi ve Animasyonlar: GIF ve SVG animasyonların yüklenmesi, çökmelere karşı koruma, video arama bağlantıları.

### MODÜL 4: Mola Sayacı, Wake Lock ve Ses Motoru (Timer & Sensory)
- [ ] 4.1 `TimerEngine`: `Date.now()` tabanlı arka plan sekme koruması, duraklat/devam et, mini bar ve tam ekran gösterge.
- [ ] 4.2 `AudioEngine`: Web Audio API oscillator frekansları, mobil tarayıcı autoplay/unlock kısıtları.
- [ ] 4.3 `WakeLockEngine`: Antrenman esnasında ekranın kararmasını önleme mantığı ve hata yakalama.
- [ ] 4.4 Vibration API: Destekleyen mobil cihazlarda set sonu ve sayaç titreşimi.

### MODÜL 5: "Kayıt" & Veri Analizi (viewLog)
- [ ] 5.1 Anatomik Ağrı Haritası (Saf SVG): Ön/arka vücut pinleri, slider senkronizasyonu ve dinamik renkler.
- [ ] 5.2 Form giriş alanları: Tarih, süre, 5 bölge ağrı, sabah aşil, uyku, su, ruh hali.
- [ ] 5.3 Saf SVG Grafikler: Hacim progresyonu, haftalık ağrı trendi, sabah aşil trendi, sol/sağ asimetri çubuğu.
- [ ] 5.4 JSON Export / Import: `exportJSON()` ve `importJSON()` fonksiyonlarının tüm veri modellerini (seanslar, sabah aşil geçmişi, triyaj logları, checklistler) kapsayıp kapsamadığı.
- [ ] 5.5 Geçmiş seans kartları ve silme güvenliği.

### MODÜL 6: "Plan" & Yaşam Tarzı Kütüphanesi (viewPlan)
- [ ] 6.1 Beslenme, etsiz protein kaynakları, hidrasyon planı (3.5L su).
- [ ] 6.2 Takviye protokolü (D3 50.000 IU yükleme takvimi, demir takviyesi yasağı).
- [ ] 6.3 Yolculuk Programı (2-9 Kasım) & Ev Programı (9 Kasım - 1 Aralık) & Sezon İçi Programı (2 Aralık+).
- [ ] 6.4 Bütçe dostu alışveriş listesi ve checklist kalıcılığı.

### MODÜL 7: "Güvenlik" & Klinik Çerçeve (viewSafety)
- [ ] 7.1 Kan tahlili parametreleri (HGB, HCT, Ferritin, D3, AST, ALT) ve kritik etiketleri.
- [ ] 7.2 Servikal omurga disk güvenliği ve 10 yasaklı hareket kırmızı kartı.
- [ ] 7.3 Aşil tendinopatisi protokolü ve 5 yasaklı hareket.
- [ ] 7.4 Acil durum kırmızı bayrakları ve tıbbi sorumluluk reddi (disclaimer).
