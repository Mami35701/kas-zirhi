# 📑 KAS ZIRHI — DETAYLI SİSTEM & MODÜL AUDIT RAPORU (AUDIT_RAPORU.md)
> **Tarih:** 15 Ekim 2026  
> **Konum:** `c:\Users\imama\OneDrive\Masaüstü\PROJELER\Kas_Zirhi`  
> **Denetleyen Heyet:** Klinik Spor Hekimi & Fiziksel Tıp, Nöromüsküler Biyomekanik Uzmanı, Senior Frontend & PWA Mimarı, Saha UX/Salon Ergonomisti, Veri Güvenliği ve Analitik Uzmanı.  
> **Hedef Profil:** 35 yaş, sol C5-C7 servikal fıtık / radikülopati, sol kol asimetrisi, bilateral aşil tendiniti, D3 eksikliği, HGB 17.4; Pixel 9 Pro XL & Schladming kış lojmanı / seyahat / salon şartları.

---

## Executive Summary (Yönetici Özeti)

"Kas Zırhı" projesi; klinik kısıtları, egzersiz seçimleri ve PWA altyapısıyla çok sağlam bir temel üzerine kurulmuştur. Ancak saha testi, kod incelemesi ve pratik kullanım senaryoları çerçevesinde yapılan denetim, **gerçek spor salonu ve çevrimdışı kullanımda sürtünme yaratan 7 kritik mimari ve fonksiyonel açık** tespit etmiştir:

1. **Yapay 500 KB Sınırı & Monolitik Dosya Sıkışması:** 500 KB sınırı günümüz PWA ve Vercel/GitHub Pages dağıtımında tamamen işlevsiz ve gereksiz bir yapay engeldir. 9,499 satırlık tek dosya içine sıkışmak, kodun modülerliğini ve bakımını zorlaştırmaktadır.
2. **Çevrimdışı (PWA) Varlık Açığı:** `dist/sw.js` dosyası 21 egzersiz GIF'inden yalnızca 12'sini önbelleğe almaktadır. 9 kritik klinik hareket GIF'i çevrimdışıyken (uçak, tren veya bodrum katı salonda) çalışmamaktadır.
3. **Aktif Seans Veri Kaybı Riski (RAM vs LocalStorage):** Salonda setler işaretlenirken `workoutSessionData` yalnızca tarayıcı belleğinde (in-memory) tutulmaktadır. Ekran kapandığında veya sayfa yenilendiğinde antrenman verisi kaybolmaktadır.
4. **"Seansı Tamamla ve Kaydet" Akış Eksikliği:** Antrenman modunda (`viewWorkout`) seansı kaydedip bitirecek tek dokunuşlu bir buton bulunmamaktadır. Kullanıcı `Kayıt` sekmesine gidip uzun formu doldurmak zorunda bırakılmaktadır.
5. **Gereksiz Dikey Scroll Yorgunluğu:** Gün 1, Gün 2, Gün 3 egzersizleri tek sayfada alt alta (~2,000 satır) dizilmiştir; salonda o günkü antrenmana odaklanmayı sağlayan dinamik gün seçimi yoktur.
6. **Eksik JSON Yedekleme (Data Loss on Migration):** `exportJSON()` yalnızca egzersiz loglarını almaktadır; sabah aşil skoru geçmişi, acil semptom triyaj kayıtları ve checklistler yedeklenmemektedir.
7. **Mobil Ergonomi & Safe-Area Kusurları:** Alt navigasyon çubuğu Android/iOS safe-area (`env(safe-area-inset-bottom)`) boşluğuna sahip değildir; mini sayaç barı alt navigasyon butonlarının tam üzerine binmektedir.

---

## 🔍 Modül Bazlı Detaylı Denetim Bulguları

### 1. MİMARİ, DAĞITIM & 500 KB SINIR ANALİZİ
* **Mevcut Durum:** `dist/index.html` boyutu 508,864 bayt (~497 KB), satır sayısı 9,499.
* **Kullanıcı Notu:** *"500 kb nin altında tutma zorunluluğu gerekli mi değilse kendimizi o kadar sıkmaya gerek kalmıyor yapılmalı/olması gerektiği gibi yapın."*
* **Uzman Kararı:**
  * **500 KB Sınırı İptal Edilmelidir:** Vercel ve GitHub Pages statik dosyaları HTTP/2-3 ve Brotli/Gzip sıkıştırmasıyla iletmektedir. PWA Service Worker ilk ziyarette tüm dosyaları `CacheStorage`'a indirir. 500 KB gibi suni bir sınır için kodları sıkıştırmak, okunabilirliği ve özellikleri budamak teknik bir anti-pattern'dir.
  * **Modüler / Temiz Yapı:** Tek dosya prensibi (harici sunucu / API gerektirmeme) korunmalı, ancak kod içinde CSS, veri modelleri ve motorlar pürüzsüz ve hatasız organize edilmelidir.

---

### 2. PWA & ÇEVRİMDIŞI ÖNBELLEKLEME (`dist/sw.js`)
* **Kritik Hata:** `dist/exercises/` dizininde 21 adet GIF dosyası bulunmaktadır; ancak `dist/sw.js` içindeki `ASSETS_TO_CACHE` dizisinde sadece 12 dosya listelenmiştir.
* **Önbelleğe Alınmayan 9 Dosya:**
  1. `dynamic_warmup.gif` (Genel dinamik ısınma)
  2. `chin_tuck.gif` (Servikal fıtık temel koruması!)
  3. `isometric_neck.gif` (Boyun izometrik stabilizasyon)
  4. `scapular_retraction.gif` (Skapular kanatlanma & asimetri)
  5. `face_pull.gif` (Rotator manşet & omuz koruma)
  6. `external_rotation.gif` (Dış rotasyon)
  7. `standing_calf.gif` (Ayakta aşil protokolü)
  8. `seated_calf.gif` (Oturarak aşil/soleus protokolü)
  9. `leg_extension.gif` (Kuadriseps izolasyon)
* **Risk:** İnternet bağlantısı olmayan Schladming spor salonunda veya seyahatte bu 9 egzersizin animasyonları yüklenemeyecektir.
* **Çözüm:** Tüm 21 GIF `ASSETS_TO_CACHE` dizisine eklenmeli, `CACHE_NAME` `kas-zirhi-v1.3` olarak güncellenmelidir.

---

### 3. SALON ANTRENMAN MODU (`viewWorkout`) & UX ERGONOMİSİ
* **3.1 Gün Seçici Eksikliği (Aşırı Dikey Kaydırma):**
  * Hafta 1'de Gün 1 (Full Body A), Gün 2 (Full Body B), Gün 3 (Full Body A+) aynı ekranda peş peşe 2,000 satır boyunca akmaktadır.
  * Kullanıcı Gün 2 antrenmanına başladığında, Gün 1'in 8 egzersizini geçmek için yüzlerce piksel kaydırma yapmak zorundadır.
  * **Öneri:** Her hafta içinde `[ Gün 1 (FB-A) ] [ Gün 2 (FB-B) ] [ Gün 3 (FB-A+) ]` şeklinde hızlı alt gün filtre/seçici butonları eklenmeli, sadece seçili günün egzersizleri aktif odak alanına gelmelidir.

* **3.2 Hızlı Set & Çalışma Zamanı Hatası (Runtime Bug):**
  * `QuickSetEngine.stepReps(name, delta, btn)` fonksiyonunun 8910. satırında:
    ```javascript
    weight: this.getDefaultWeight(name)
    ```
    çağrılmaktadır. Ancak `QuickSetEngine` üzerinde `getDefaultWeight` metodu TANIMLI DEĞİLDİR (`getLastOrInitialWeight` tanımlıdır). Kullanıcı set veya kilo girmeden doğrudan tekrara basarsa konsolda `TypeError: this.getDefaultWeight is not a function` hatası patlamaktadır.

* **3.3 Aktif Antrenman Durumunun Kalıcılığı (RAM vs LocalStorage):**
  * Kullanıcı antrenman sırasında setleri bitirdikçe veriler `QuickSetEngine.workoutSessionData` içinde yalnızca JavaScript nesnesi olarak tutulmaktadır.
  * Telefon arka plana alındığında, ekran kapandığında veya sayfa yanlışlıkla yenilendiğinde tamamlanan tüm setler sıfırlanmaktadır.
  * **Öneri:** Her set tamamlandığında `kas_zirhi_active_session` anahtarıyla `localStorage`'a anlık yazılmalı, sayfa açıldığında yarım kalan seans varsa otomatik kurtarılmalıdır (Crash-Proof Session).

* **3.4 "Antrenmanı Bitir & Kaydet" Butonunun Olmaması:**
  * Antrenman ekranında tamamlanan setler için tepede yalnızca statik bir yazı görünmektedir (`⚡ X Hareket • Y Set Tamamlandı`).
  * Antrenmanı bitiren kullanıcının seansı kaydetmesi için `viewWorkout` ekranında yüzen veya en altta belirgin bir `[ ✅ Antrenmanı Bitir & Seansı Kaydet ]` aksiyonu bulunmamaktadır.
  * **Öneri:** Yüzen veya gün kartı altında dev bir "Antrenmanı Tamamla & Kaydet" butonu olmalı; tıklandığında süreyi sayaçtan alıp tamamlanan hareketleri doğrudan seans kütüğüne yazmalı ve başarı bildirimi sunmalıdır.

---

### 4. "BUGÜN" KOKPİTİ (`viewToday`) & TARİH ENTEGRASYONU
* **4.1 Tarih Motoru Uyuşmazlığı:**
  * `TodayEngine` gerçek sistem saatini (`new Date()`) kullanırken, `DateSimulatorEngine` hardcoded `2026-10-14` tarihine kilitlidir.
  * Sonuç olarak `viewToday` ekranında gerçek tarih görünürken, zaman çizgisi ve tarih uyarısı fazları simülasyon motorunun gerisinde kalabilmektedir.
* **4.2 "Antrenmanı Başlat" Butonunun Zayıf Bağlantısı:**
  * `btn-start-gym` butonuna tıklandığında yalnızca `NavigationEngine.switchTab('workout')` çağrılmakta; kullanıcının son yaptığı seansa göre sıradaki günü (örn. Gün 2) otomatik açma zekası çalışmamaktadır.
  * **Öneri:** "Antrenmanı Başlat" butonu son seansı kontrol ederek (örn. son seans Gün 1 ise) doğrudan Gün 2'yi odaklayarak salon moduna geçmelidir.

---

### 5. VERİ BÜTÜNLÜĞÜ, YEDEKLEME & LOCALSTORAGE (`viewLog`)
* **5.1 Eksik JSON Yedekleme (Kritik Veri Kaybı Riski):**
  * `LogEngine.exportJSON()` metodu sadece `kas_zirhi_workout_logs_v1` anahtarındaki antrenman kayıtlarını indirmektedir.
  * **Yedeklenmeyen Veriler:**
    * `kas_zirhi_today_achilles` ve `achilles_YYYY-MM-DD` (Sabah aşil skoru geçmişi)
    * `kas_zirhi_pain_events` (Semptom / Ağrı triyajı olay kayıtları)
    * `tasks_YYYY-MM-DD` (Günün 3 çekirdek alışkanlık checklisti)
    * `kas_zirhi_checklist_states_v1` (Takviye / alışveriş checklist durumları)
  * Kullanıcı telefon değiştirdiğinde veya tarayıcı önbelleğini temizleyip yedekten döndüğünde tüm aşil ve ağrı trendleri silinmiş olmaktadır!
  * **Öneri:** `exportJSON` tüm anahtarları içeren birleşik bir meta-yedek paketi (`{ version: 2, timestamp, workouts, achilles_history, pain_events, tasks, checklists }`) üretmeli; `importJSON` hem eski v1 dizi formatını hem de yeni v2 birleşik formatını geriye dönük uyumlu olarak içeri almalıdır.

* **5.2 Asimetri ve Grafik Çizimi:**
  * SVG grafik motoru boş veri durumunda dürüst davranmakta (`Henüz veri yok`), ancak tek taraflı egzersizlerde (Single Arm Row, Face Pull) sol/sağ ayrımı form üzerinden manuel girilmedikçe quick-set'ten varsayılan olarak `cift` gitmektedir. Tek taraflı hareketler için quick-set sol/sağ ayrımını desteklemelidir.

---

### 6. SES, TİTREŞİM & MOLA SAYACI (`TimerEngine` & `AudioEngine`)
* **6.1 Mini Timer Barının Alt Menüyle Çakışması:**
  * `.mini-timer-bar` CSS kuralında `bottom: 10px; right: 10px;` olarak konumlandırılmıştır.
  * Ancak `.bottom-nav-bar` `position: fixed; bottom: 0;` olarak tüm ekran genişliğini kaplamaktadır.
  * Sonuç olarak mini sayaç salonda çalışırken alt menü butonlarının tam üzerine binmekte, hem sekme değiştirmeyi hem de sayacı durdurmayı imkansız kılmaktadır.
  * **Düzeltme:** `.mini-timer-bar` mobil görünümde `bottom: 76px;` (nav barın hemen üstü) seviyesine çekilmelidir.
* **6.2 AudioContext Autoplay Engeli:**
  * `AudioEngine.beep()` içinde osilatör oluşturulurken `this.ctx.resume()` çağrısı `await` edilmemektedir. Mobil tarayıcılarda sayfa ile kullanıcı etkileşime girmeden önce zamanlayıcı biterse ses engellenebilmektedir.
  * **Düzeltme:** İlk kullanıcı dokunuşunda (herhangi bir buton tıklandığında) `AudioContext` sessizce uyandırılmalı (unlock audio), `beep()` içinde `resume()` güvenle işlenmelidir.

---

### 7. MOBİL RESPONSIVE & GÜVENLİK
* **7.1 Safe-Area Inset:**
  * Modern telefonlarda (Pixel 9 Pro XL, iPhone vb.) ekranın altındaki navigasyon çubuğu (gesture bar) için `padding-bottom: calc(8px + env(safe-area-inset-bottom, 0px))` eklenmelidir.
* **7.2 İçerik Alt Boşluğu:**
  * Tüm `.view-section` bölümlerinin altına en az 88px boşluk (`padding-bottom: 96px`) eklenmelidir ki son kartlar sabit alt menünün altında kaybolmasın.

---

## 🎯 Denetim Sonuç Tablosu

| Modül / Alan | Mevcut Durum | Tespit Edilen Risk / Hata | Öncelik |
|---|---|---|:---:|
| **PWA & sw.js** | 12/21 GIF önbellekte | 9 egzersiz çevrimdışıyken yüklenmiyor | 🔴 P0 (Kritik) |
| **QuickSetEngine** | `getDefaultWeight()` hatası | Tekrar stepper'ına basınca TypeError | 🔴 P0 (Kritik) |
| **Seans Kalıcılığı** | Yalnızca RAM'de | Sayfa yenilenince setler kayboluyor | 🔴 P0 (Kritik) |
| **Antrenman Kaydet** | Buton yok | Seans bitince kaydetmek için sekme arama | 🔴 P0 (Kritik) |
| **JSON Export/Import** | Sadece workout logs | Aşil, ağrı ve görev geçmişi yedeklenmiyor | 🟠 P1 (Yüksek) |
| **Salon UX / Günler** | Tek ekranda 2000 satır | Salonda aşırı dikey scroll, odak kaybı | 🟠 P1 (Yüksek) |
| **Mini Timer CSS** | `bottom: 10px` | Alt menü butonlarının tam üzerine biniyor | 🟠 P1 (Yüksek) |
| **Safe-Area Inset** | `env()` yok | Pixel 9 Pro XL gesture barıyla çakışma | 🟡 P2 (Orta) |
| **AudioContext** | Unlock eksik | Mobilde mola bitiş sesi engellenebiliyor | 🟡 P2 (Orta) |
| **500 KB Kısıtı** | Suni sınır zorlaması | Gereksiz sıkışma, refaktör korkusu | 🟢 Karar: İptal |

---
