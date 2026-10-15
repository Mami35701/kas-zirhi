# 🛠️ KAS ZIRHI — REFAKTÖR & GELİŞTİRME GÖREV PLANI (REFACTOR_TASK.md)
> **Tarih:** 15 Ekim 2026  
> **Referans:** `AUDIT_RAPORU.md`  
> **Hedef:** Kullanıcıyı spor salonunda, seyahatte ve evde sıfır sürtünmeyle destekleyen, veri kaybı imkansız, çevrimdışı eksiksiz ve ergonomik PWA kokpiti.

---

## 🎯 Refaktör İlkeleri (Non-Negotiables)
1. **Yapay 500 KB Sınırının Kaldırılması:** Kod kalitesi, kullanıcı deneyimi ve çevrimdışı kararlılık önceliklidir.
2. **Crash-Proof Seans Takibi:** Salonda ekran kararsa veya sayfa kapansa bile aktif antrenman setleri asla kaybolmaz (`localStorage` anlık senkronizasyon).
3. **Tek Tıkla Seans Tamamlama:** Antrenman ekranından ayrılmadan doğrudan `[ ✅ Antrenmanı Bitir & Kaydet ]` aksiyonu.
4. **Sıfır Scroll Yorgunluğu:** Gün 1, Gün 2, Gün 3 için gün seçici alt sekmeler; kullanıcı sadece o an yaptığı antrenmanı görür.
5. **Kayıpsız Birleşik JSON Yedekleme (v2):** Tüm seanslar, sabah aşil skoru geçmişi, ağrı triyaj logları ve alışkanlık checklistleri tek dosyada yedeklenir ve geri yüklenir.
6. **100% Çevrimdışı PWA:** Tüm 21 egzersiz GIF'i Service Worker ile tam önbelleklenir.
7. **Mobil Safe-Area & Çakışmasız Arayüz:** Pixel 9 Pro XL ve modern cihazlar için safe-area-inset ve mini sayaç katman ayrımı.

---

## 📋 Adım Adım İcraat Görevleri

### Adım 1: PWA & Service Worker (`dist/sw.js`) Tamamlama
- [ ] 1.1 `dist/sw.js` dosyasında `CACHE_NAME` sürümünü `kas-zirhi-v1.3` yap.
- [ ] 1.2 `ASSETS_TO_CACHE` dizisine diskteki tüm 21 egzersiz GIF'ini eksiksiz ekle (`dynamic_warmup.gif`, `chin_tuck.gif`, `seated_calf.gif`, `scapular_retraction.gif`, `isometric_neck.gif`, `leg_extension.gif`, `face_pull.gif`, `external_rotation.gif`, `standing_calf.gif` vb.).
- [ ] 1.3 `sw.js` activate eventinde eski önbelleklerin temizlenmesini doğrula.

### Adım 2: CSS, Safe-Area & Mini Timer Katman Ayrımı
- [ ] 2.1 `.bottom-nav-bar` stiline `padding-bottom: calc(8px + env(safe-area-inset-bottom, 0px))` ekle.
- [ ] 2.2 `.view-section` ve ana kapsayıcılara `padding-bottom: calc(92px + env(safe-area-inset-bottom, 0px))` ekleyerek alttaki içeriklerin bottom-nav altında kalmasını önle.
- [ ] 2.3 `.mini-timer-bar` konumunu `bottom: 10px` yerine `bottom: calc(76px + env(safe-area-inset-bottom, 0px))` yaparak alt menüyle çakışmasını engelle.
- [ ] 2.4 Gün seçici sekmeler (`.day-tab-btn`) için modern, mobil uyumlu neon stil ekle.

### Adım 3: Çalışma Zamanı Hatalarını Giderme & Ses Motoru Uyandırma
- [ ] 3.1 `QuickSetEngine.stepReps()` içindeki `this.getDefaultWeight(name)` çağrısını `this.getLastOrInitialWeight(name)` ile düzelt; ayrıca güvenlik amacıyla `getDefaultWeight(name)` takma adını (alias) motora ekle.
- [ ] 3.2 `AudioEngine` için ilk dokunuşta otomatik uyandırma (`unlockAudioContext`) event listener'ı ekle; `beep()` içindeki `resume()` akışını güvenli hale getir.

### Adım 4: Salon Antrenman Modunda Gün Seçici & Odak Görünümü (`viewWorkout`)
- [ ] 4.1 Hafta 1 (`tabWeek1`) içine Gün 1, Gün 2, Gün 3 alt sekmeleri ekle; varsayılan olarak Gün 1 açılsın, diğer günler gizlensin.
- [ ] 4.2 Hafta 2 (`tabWeek2`) içine Gün 4, Gün 5, Gün 6, Gün 7 alt sekmeleri ekle; aktif güne göre odak sağla.
- [ ] 4.3 Gün değişim fonksiyonu (`switchWorkoutDay(weekId, dayId, btn)`) tanımla.
- [ ] 4.4 `TodayEngine.renderLastSession()` ve `btn-start-gym` butonunu akıllı bağla: Son tamamlanan seansa bakarak sıradaki günü otomatik aktif et.

### Adım 5: Crash-Proof Aktif Seans Kalıcılığı & Hızlı Tamamlama Modalı
- [ ] 5.1 `QuickSetEngine.toggleSet()` ve stepperlarda yapılan her değişikliği `kas_zirhi_active_session` anahtarıyla anlık olarak `localStorage`'a kaydet.
- [ ] 5.2 Sayfa açılışında (`QuickSetEngine.initWeights()`) yarım kalan bugünkü aktif seans verisi varsa DOM'daki set butonlarını ve göstergeleri otomatik geri yükle (Completed / Checked).
- [ ] 5.3 `viewWorkout` ekranına yüzen/belirgin `[ ✅ Antrenmanı Bitir & Seansı Kaydet ]` butonu ve tamamlanma modalı (`#finishWorkoutModal`) ekle.
- [ ] 5.4 Modal içinde: Toplam set sayısı, tahmini antrenman süresi (sayaçtan veya varsayılan 55 dk), hızlı seans zorluğu (RPE 6-9) ve ağrı kontrolü; tek tıkla `LogEngine.saveFromWorkoutSession()` ile kaydetme.
- [ ] 5.5 Seans kaydedildiğinde aktif seans belleğini temizle, `viewToday` sekmesine pürüzsüz geç ve kutlama titreşimi ver.

### Adım 6: Kayıpsız Birleşik JSON Yedekleme (v2 Meta-Export / Import)
- [ ] 6.1 `LogEngine.exportJSON()` fonksiyonunu tüm `localStorage` verilerini kapsayacak şekilde güncelle:
  - Antrenman kütüğü (`kas_zirhi_workout_logs_v1`)
  - Sabah aşil skoru geçmişi (`achilles_*` ve `kas_zirhi_today_achilles`)
  - Semptom ve ağrı triyaj olayları (`kas_zirhi_pain_events`)
  - Günlük çekirdek görevler (`tasks_*`)
  - Kontrol listeleri (`kas_zirhi_checklist_states_v1`)
- [ ] 6.2 `LogEngine.importJSON()` fonksiyonunu hem eski v1 dizi formatını hem de v2 meta-yedek nesnesini tanıyacak şekilde çok katmanlı yap; tüm anahtarları başarıyla geri yükle.
- [ ] 6.3 Kullanıcıya geri yükleme sonucunda nelerin yüklendiğini bildiren şeffaf özet mesajı sun.

### Adım 7: Doğrulama & Bütünsel E2E Testleri (Görev 5)
- [ ] 7.1 Statik sözdizimi kontrolü (`node --check`).
- [ ] 7.2 Playwright ile 360px (Pixel 9 Pro XL) ve 1280px çözünürlüklerde:
  - Gün seçici geçişleri
  - Quick-Set tamamlama ve sayfa yenileme sonrası kurtarma (Crash-proof)
  - "Antrenmanı Bitir & Kaydet" akışı ve seansın log geçmişine düşmesi
  - Mola sayacı ve mini-bar çakışmasızlık doğrulaması
  - Birleşik JSON Export / Import testi
  - Sıfır konsol hatası doğrulaması
- [ ] 7.3 `CONTEXT.md` ve `Task.md` dosyalarının güncellenmesi.
- [ ] 7.4 Git commit ve GitHub Pages dağıtımı.

---
