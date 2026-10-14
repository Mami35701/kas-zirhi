# 📋 PROJE DÖKÜMANTASYONU — "Kas Zırhı" Premium Rehab & Kuvvet Platformu

> **Bu döküman, bir yapay zekaya (tercihen deepthink/reasoning modunda) verilerek eksiksiz, premium, interaktif bir tek sayfa HTML uygulaması üretilmesi için hazırlanmıştır.**
> Aşağıdaki tüm bölümleri dikkatle okuyun ve her bir gereksinimi eksiksiz uygulayın.

---

## BÖLÜM 1: PROJE VİZYONU & GENEL TANIM

### 1.1 Proje Adı
**"Kas Zırhı — Kişiye Özel Premium Rehabilitasyon & Kuvvet Platformu"**

### 1.2 Proje Tipi
Tek dosya HTML uygulaması (HTML + CSS + JavaScript, harici bağımlılık yok, offline çalışabilir). Premium, dark-mode, interaktif, görsel ağırlıklı, mobil uyumlu.

### 1.3 Proje Amacı
35 yaşında, 178 cm / 92 kg, radyolojik olarak doğrulanmış boyun fıtıkları (Sol C5-6 disk protrüzyonu, Sol C6-7 osteofitik disk hernisi, servikal lordoz kaybı), sol kol kuvvet asimetrisi, aşil tendinopatisi ve D vitamini şiddetli eksikliği (10.9 ng/mL) olan bir kullanıcının; 15 günlük salon kampı, 1 haftalık yolculuk, 3 haftalık ev dönemi ve sezon içi resepsiyon dönemini kapsayan **bütünsel rehabilitasyon ve kuvvet inşası** programını tek bir interaktif platformda sunmak.

### 1.4 Hedef Kullanıcı Profili
- **Yaş/Cinsiyet:** 35, Erkek
- **Boy/Kilo/BMI:** 178 cm / 92 kg / ~29
- **Meslek:** Sezonluk garson → 2 Aralık 2026'dan itibaren resepsiyon görevlisi
- **Spor geçmişi:** Yürüyüş + trekking (ağırlık antrenmanı deneyimi yok)
- **Hareketsizlik süresi:** 2 yıl
- **Aktif şikayetler:** Boyun sola yatırmada kasılma, sol kol/skapula sızlama, aşil 2-3 adımda yanma
- **Kısıtlar:** Et yemiyor (3 yıl), sigara kullanıyor, alkol yok, düzenli ilaç yok
- **Salon erişimi:** 14-29 Ekim 2026 (15 gün), sonra 5 Aralık 2026'dan itibaren tekrar
- **Haftalık antrenman:** 3 gün sabit + isteğe bağlı 4. gün
- **Seans süresi:** 60 dakika
- **Tercih edilen saat:** Öğleden önce / öğle
- **Bütçe:** Kısıtlı (minimal ev ekipmanı)
- **Kan tahlili:** D vitamini 10.9 🔴, HCT %51.5 🔴, AST 101 / ALT 69 🟡 (kas kökenli), lipid profili mükemmel 🟢, CRP 1.0 🟢, tiroid normal 🟢, ferritin 39.6 🟢

---

## BÖLÜM 2: UZMAN EKİP TANIMLARI (AI Agent Rolleri)

> Bu proje, aşağıdaki 8 uzmanın ortak çıktısı olarak tasarlanmalıdır. Her uzmanın sorumluluk alanı ve ürettiği içerik belirtilmiştir. HTML'de her bölüm ilgili uzmanın "imzasını" taşımalıdır (küçük bir badge veya ikon ile).

### 2.1 🩺 Spor Hekimi (Sports Medicine Physician)
- **Sorumluluk:** Patoloji analizi, yük yönetimi sınırları, yasaklı hareketler listesi, kırmızı bayrak senaryoları (ne zaman antrenmanı durdurmalı, ne zaman doktora gitmeli), kan tahlili yorumları, D vitamini yükleme protokolü, sigara risk analizi
- **Çıktı:** Tıbbi Profil bölümü, Yasaklı Hareketler bölümü, Kan Tahlili detayları, Acil Durum rehberi

### 2.2 🧠 Nöromüsküler Rehabilitasyon Uzmanı (Neuromuscular Rehab Specialist)
- **Sorumluluk:** Servikal stabilizasyon protokolü (chin tuck, izometrik baskı, skapular retraksiyon), sol kol asimetri düzeltme stratejisi (unilateral öncelik, nöral inhibisyon yönetimi), propriyosepsiyon egzersizleri, postüral düzeltme
- **Çıktı:** Boyun Rehab bölümü, Sol Omuz/Skapula bölümü, her antrenmana entegre servikal blok

### 2.3 💪 Kuvvet & Kondisyon Antrenörü (CSCS — Certified Strength & Conditioning Specialist)
- **Sorumluluk:** Periodizasyon (lineer → undulating), set/tekrar/tempo/dinlenme reçetesi, progresyon kuralları, haftalık split tasarımı, RPE tabanlı yük yönetimi, 15 günlük salon programı, ev programı, sezon içi program, opsiyonel 4. gün yapısı
- **Çıktı:** Tüm antrenman programları (Hafta 1-3 salon, yolculuk, ev, sezon içi), progresyon tabloları

### 2.4 🦶 Ortopedik Fizyoterapist (Orthopedic Physiotherapist)
- **Sorumluluk:** Aşil tendinopatisi rehabilitasyon protokolü (Alfredson modifiye), reaktif tendinopati faz yönetimi, eksantrik yükleme progresyonu, tendon loading prensipleri, ağrı monitoring (VAS 0-10), sabah sertliği yönetimi
- **Çıktı:** Aşil Rehab bölümü, her antrenmana entegre aşil bloğu, yolculuk/ev aşil protokolleri

### 2.5 🥗 Spor Diyetisyeni (Sports Dietitian)
- **Sorumluluk:** Vücut recompozisyonu stratejisi (92 kg → kas koruyarak yağ yakma), et yemeyen diyet için protein planı (hedef 130-150g/gün), öğün zamanlaması (2 öğün + ara öğün), anti-inflamatuar beslenme, tendon/fıtık iyileşmesini destekleyen mikro besinler, hidrasyon protokolü (HCT %51.5 → 3.5-4L su)
- **Çıktı:** Beslenme bölümü, örnek menüler, makro hedefler, hidrasyon rehberi

### 2.6 💊 Takviye Uzmanı (Supplementation Specialist)
- **Sorumluluk:** D3 + K2 yükleme protokolü, kreatin monohidrat kullanımı, kolajen + C vitamini tendon protokolü, omega-3, magnezyum glisinat, etkileşim ve zamanlama
- **Çıktı:** Takviye bölümü, günlük zamanlama tablosu, dozaj ve satın alma rehberi

### 2.7 😴 Uyku & Ergonomi Uzmanı (Sleep & Ergonomics Specialist)
- **Sorumluluk:** Yatış pozisyonu düzeltmesi (yüzüstü → sırtüstü/yan), yastık seçimi, uyku hijyeni, resepsiyon çalışma ergonomisi (8 saat ara vardiya, uzun süreli oturma), text neck önleme, 20-20-20 kuralı, iş yeri mikro-rehab
- **Çıktı:** Uyku bölümü, Ergonomi bölümü, İş Yeri Mikro-Rehab rehberi

### 2.8 💻 Senior Frontend Developer (HTML/CSS/JS Expert)
- **Sorumluluk:** Tüm içeriğin premium, interaktif, responsive tek sayfa HTML uygulaması olarak hayata geçirilmesi. Dark mode, tab sistemi, accordion, interaktif zamanlayıcı, log sistemi (localStorage), progresyon takibi, görsel diyagramlar, yazdırılabilir format
- **Çıktı:** Nihai HTML dosyası

### 2.9 📊 Veri & Ölçüm Analisti (Data & Metrics Analyst)
- **Sorumluluk:** Log sistemi tasarımı, asimetri takibi (sol/sağ ağırlık farkı), progresyon metrikleri (haftalık ağırlık/hacim artışı), ağrı trendi grafiği, vücut kompozisyonu takibi
- **Çıktı:** Log sistemi veri yapısı, dashboard tasarımı, metrik tanımları

---

## BÖLÜM 3: KULLANICI VERİLERİ (TAM PROFİL)

### 3.1 Tıbbi Veriler
| Parametre | Değer | Not |
|---|---|---|
| Boyun fıtığı 1 | Sol C5-6 disk protrüzyonu | Radyolojik doğrulanmış |
| Boyun fıtığı 2 | Sol C6-7 osteofitik disk hernisi | Radyolojik doğrulanmış |
| Servikal lordoz | Kayıp (düzleşme) | Postüral + yapısal |
| Boyun semptomu | Sola yatırmada kasılma | Sağa normal |
| Sol kol | Sağa göre zayıf, 4 yıl tepsi taşıma | Nöral inhibisyon + overuse |
| Sol skapula | Kulunçlar (trigger points), sızlama | Masaj şefi teyitli |
| Aşil tendinopatisi | Reaktif faz, 2-3 adımda yanma, sonra toparlanma | Warm-up effect mevcut |
| D Vitamini | 10.9 ng/mL | Şiddetli eksik (hedef 40-60) |
| HCT | %51.5 | Hemokonsantrasyon (su artır) |
| AST/ALT | 101/69 | Kas kökenli (GGT normal = karaciğer sağlam) |
| Lipid profili | TG 76.4, HDL 69, LDL 99, TG/HDL 1.10 | Mükemmel |
| CRP | 1.0 mg/L | Sıfır sistemik inflamasyon |
| Tiroid | TSH 1.047, fT4 1.05 | Normal |
| Ferritin | 39.6 | İyi (et yemeyen için şaşırtıcı) |
| eGFR | 78 | Normal (kreatin + su ile takip) |
| İlaç | Yok | — |
| Sigara | Var | Tendon/disk risk faktörü |
| Alkol | Yok | — |

### 3.2 Yaşam Tarzı Verileri
| Parametre | Değer |
|---|---|
| Uyku süresi | ~7 saat (hedef 8-8.5) |
| Uyku pozisyonu | Yüzüstü (ACİL DEĞİŞTİRİLECEK → sırtüstü/sağ yan) |
| Yastık | Orta yükseklik |
| Gece uyanması | Var (ağrı kaynaklı, pozisyon değiştirme) |
| Stres | Orta-alt |
| Ekran süresi | Normalde ~2 saat, sezon arası artıyor |
| Oturma | Sezon arası uzun ve sık |
| Adım sayısı | Sezon içi 9-12K, sezon arası ~5K |

### 3.3 Lojistik Veriler
| Tarih | Durum |
|---|---|
| 14-29 Ekim 2026 | Salon kampı (15 gün, 3-4 gün/hafta × 60 dk) |
| 2-9 Kasım 2026 | Yolculuk (1 hafta, başka şehir) |
| 9 Kasım - 1 Aralık 2026 | Ev dönemi (~3 hafta) |
| 2 Aralık 2026 | Sezon başlangıcı (resepsiyon, 8 saat ara vardiya) |
| 5 Aralık 2026+ | Salon dönüşü (uzun vadeli) |

### 3.4 Salon Ekipmanı
Mevcut: Leg press, chest press, incline press, lat pulldown, seated row, cable crossover, leg extension, leg curl, calf raise (ayakta + oturarak), pec deck, shoulder press makine, dumbbell seti, barbell alanı, kardiyo (bisiklet, koşu bandı, eliptik), stretching alanı.
Yok: TRX

### 3.5 Beslenme Kısıtları
- Et yok (3 yıldır, en fazla et suyu)
- Yumurta yeni başladı
- 2 öğün: sabah kahvaltı + akşam yemeği (öğle yok)
- Kreatin var (evde)
- D vitamini 50.000 IU alabilir
- Bütçe kısıtlı

---

## BÖLÜM 4: ZAMAN ÇİZELGESİ & FAZ DETAYLARI

### FAZ 1: SALON KAMPI (14-29 Ekim, 15-18 gün)
- **Frekans:** 3 gün sabit (Pzt-Çar-Cum) + isteğe bağlı 4. gün (Cmt)
- **Süre:** 60 dk
- **Saat:** Öğleden önce / öğle
- **Yapı:** Hafta 1 = Full Body (3 gün), Hafta 2 = Upper/Lower Split (3-4 gün), Hafta 3 = Konsolidasyon
- **Odak:** Nöromüsküler uyanış, hareket kalıbı öğrenme, aşil loading başlatma, servikal rutin oturtma
- **Ağırlık:** RPE 5-6/10 (hafif-orta), tükenme YOK
- **Progresyon:** Haftalık %5-10 ağırlık artışı (form bozulmadan)

### FAZ 2: YOLCULUK (2-9 Kasım, 1 hafta)
- **Frekans:** Günlük 15-20 dk
- **Ekipman:** Direnç bandı + vücut ağırlığı
- **Odak:** Kazanımları koruma, servikal + aşil idame, mobilite
- **Yapı:** Sabah 10 dk boyun + skapula, akşam 10 dk aşil + stretching

### FAZ 3: EV DÖNEMİ (9 Kasım - 1 Aralık, ~3 hafta)
- **Frekans:** 4 gün/hafta × 45-60 dk
- **Ekipman:** Direnç bandı seti, ayarlanabilir dambıl, yoga matı, masaj topu
- **Odak:** Progresif yükleme, sol asimetri kapatma, aşil eccentric ilerletme
- **Yapı:** Upper/Lower split

### FAZ 4: SEZON İÇİ (2 Aralık+)
- **Çalışma:** Resepsiyon, 8 saat ara vardiya (hafta içi gündüz, hafta sonu gece)
- **Risk:** Uzun süreli oturma (boyun), adım azalması (metabolik)
- **Avantaj:** Tepsi taşıma YOK (sol omuz rahatlıyor!)
- **Program:** 5 Aralık'tan itibaren salon 4 gün/hafta + iş yeri mikro-rehab

---

## BÖLÜM 5: DETAYLI ANTRENMAN PROGRAMI

### 5.1 GENEL KURALLAR (Tüm seanslar için geçerli, HTML'de sabit bir bilgi kutusu olarak gösterilecek)

1. **Isınma:** Her seans öncesi 5-8 dk hafif bisiklet (düşük direnç, aşil için pedal ayak ortasıyla) + 2 dk dinamik stretching (kol daireleri, gövde rotasyonu hafif, kalça daireleri, ayak bileği daireleri — boyun çevirme YOK)
2. **Boyun pozisyonu:** TÜM hareketlerde boyun NÖTR (kulak-omuz aynı hizada). Asla başı öne eğme, arkaya atma, yana yatırma
3. **Sol taraf kuralı:** Unilateral hareketlerde SOL taraf İLK çalışılır ve 1-2 tekrar FAZLA yapılır
4. **Ağırlık seçimi:** RPE 5-6/10 (Hafta 1), RPE 6-7/10 (Hafta 2). Son 2 tekrarda hafif yanma olmalı, tükenme YOK
5. **Dinlenme:** Büyük kas grupları 90 sn, küçük kas grupları 60 sn, izometrik/rehab 45 sn
6. **Tempo:** 2-1-2 (2 sn konsantrik, 1 sn izometrik, 2 sn eksantrik) — kontrollü, acele yok. Aşil egzersizlerinde 3-1-4 (yavaş eksantrik vurgu)
7. **Nefes:** Kaldırırken ver, indirirken al. Asla nefes tutma (Valsalva = disk basıncı artışı!)
8. **Ağrı kuralı:** Keskin/batıcı ağrı = DUR. Kas yanması = devam. Boyun/kola yayılan ağrı = DUR + log'a not al. Aşil ağrısı 3-4/10 kabul, 5+/10 = dur
9. **Opsiyonel 4. gün:** Haftada 3 gün sabit. 4. gün yapmak isterseniz "Full Body Recovery" şablonu kullanılacak (hafif ağırlık, yüksek tekrar, ekstra mobilite — detay aşağıda)

### 5.2 HAFTA 1: FULL BODY ADAPTASYON (3 gün)

#### GÜN 1 — Full Body A
**Toplam süre: ~58 dk**

| # | Hareket | Set × Tekrar | Tempo | Dinlenme | RPE | Notlar |
|---|---|---|---|---|---|---|
| IS | Hafif Bisiklet | 5 dk | — | — | 3/10 | Düşük direnç, 60-70 RPM |
| IS | Dinamik Stretching | 3 dk | — | — | — | Boyun çevirme YOK |
| SV | Chin Tuck | 3 × 10 | 5 sn tutuş | 30 sn | — | Duvara sırt dayalı, çift çene |
| SV | İzometrik Yan Baskı | 2 × 8 her yön | 5 sn tutuş | 30 sn | — | Sol %50 güç, sağ %70 güç |
| SV | Skapular Retraksiyon | 3 × 12 | 3 sn tutuş | 30 sn | — | Kürek kemiklerini sık |
| 1 | Leg Press 45° | 3 × 12-15 | 2-1-2 | 90 sn | 5-6 | Bel platforma yapışık, dizler dışa |
| 2 | Chest Press Makine | 3 × 12-15 | 2-1-2 | 60 sn | 5-6 | Dirsekler 45°, baş arkada |
| 3 | Seated Cable Row | 3 × 12-15 | 2-1-2 | 60 sn | 5-6 | V-tutuş, kürek sıkma vurgusu |
| 4 | Lat Pulldown (Geniş) | 3 × 12-15 | 2-1-2 | 60 sn | 5-6 | Bar köprücük kemiğine, önden |
| 5 | DB Shoulder Press (Oturarak) | 2 × 12 | 2-1-2 | 60 sn | 5 | 2-4 kg, sol ilk, sol 13-14 tekrar |
| 6 | Cable Face Pull | 3 × 15 | 2-1-2 | 45 sn | 5 | Göz hizası, dirsekler dışarı |
| AH | Çift Ayak Calf Raise | 3 × 15 | 3-1-3 | 45 sn | 4-5 | Düz zemin, ağrı 3/10 altı |
| SO | Hafif yürüyüş + stretching | 3 dk | — | — | — | Göğüs, hamstring — boyun YOK |

**SV = Servikal Blok (her seansta aynı) | AH = Aşil Blok | IS = Isınma | SO = Soğuma**

#### GÜN 2 — Full Body B (48 saat sonra)
| # | Hareket | Set × Tekrar | Tempo | Dinlenme | RPE | Notlar |
|---|---|---|---|---|---|---|
| IS+SV | Isınma + Servikal | 16 dk | — | — | — | Gün 1 ile aynı |
| 1 | Goblet Squat | 3 × 12 | 2-1-2 | 90 sn | 5-6 | 4-6 kg DB, gövde dik |
| 2 | Incline Chest Press | 3 × 12-15 | 2-1-2 | 60 sn | 5-6 | 30-45° eğim |
| 3 | Single Arm Cable Row | 3 × 12 her taraf | 2-1-2 | 60 sn | 5-6 | Sol ilk, sol 13-14 tekrar |
| 4 | Leg Curl Makine | 3 × 12-15 | 2-1-2 | 60 sn | 5-6 | 2 sn tutuş |
| 5 | DB Lateral Raise | 2 × 15 | 2-1-2 | 45 sn | 4-5 | 1-3 kg, omuz hizasına kadar |
| 6 | Cable Face Pull | 3 × 15 | 2-1-2 | 45 sn | 5 | Her seansta |
| AH+SO | Aşil + Soğuma | 8 dk | — | — | — | Gün 1 ile aynı |

#### GÜN 3 — Full Body A+ (Gün 1 tekrarı + %5-10 ağırlık artışı)
Gün 1 ile aynı hareketler, aynı sıralama. Ağırlıklar %5-10 artırılmış.

#### OPSİYONEL GÜN 4 — Full Body Recovery (İsteğe bağlı)
| # | Hareket | Set × Tekrar | Tempo | Dinlenme | RPE | Notlar |
|---|---|---|---|---|---|---|
| IS+SV | Isınma + Servikal | 16 dk | — | — | — | Standart |
| 1 | Leg Press (Hafif) | 2 × 15-20 | 2-1-3 | 60 sn | 4 | Gün 1 ağırlığının %70'i |
| 2 | Chest Press (Hafif) | 2 × 15-20 | 2-1-3 | 60 sn | 4 | %70 |
| 3 | Seated Cable Row | 2 × 15-20 | 2-1-3 | 60 sn | 4 | %70, kürek sıkma vurgusu |
| 4 | Lat Pulldown | 2 × 15-20 | 2-1-3 | 60 sn | 4 | %70 |
| 5 | Foam Roller / Stretching | 10 dk | — | — | — | Torakal mobilite, hamstring, kalça |
| 6 | Face Pull | 2 × 20 | 2-1-2 | 45 sn | 3 | Hafif |
| AH | Aşil | 5 dk | — | — | — | Standart |

> **4. Gün Kuralı:** Ağırlıklar her zaman ana günlerin %60-70'i. Amaç aktif toparlanma, ekstra hacim değil. Eğer yorgunluk hissediyorsanız atlayın.

### 5.3 HAFTA 2: UPPER/LOWER SPLIT (3-4 gün)

#### GÜN 4 — Upper Body A
| # | Hareket | Set × Tekrar | Tempo | Dinlenme | RPE |
|---|---|---|---|---|---|
| SV | Servikal Blok | 8 dk | — | — | — |
| 1 | Chest Press Makine | 3 × 10-12 | 2-1-2 | 75 sn | 6-7 |
| 2 | Seated Cable Row | 3 × 10-12 | 2-1-2 | 75 sn | 6-7 |
| 3 | Lat Pulldown (Dar V) | 3 × 10-12 | 2-1-2 | 75 sn | 6-7 |
| 4 | Single Arm DB Row | 3 × 10-12 her taraf | 2-1-2 | 60 sn | 6 | Sol ilk, sol 12-13, sağ 10-11 |
| 5 | Cable Face Pull | 3 × 15 | 2-1-2 | 45 sn | 5 |
| 6 | DB External Rotation | 2 × 15 her taraf | 2-1-2 | 45 sn | 4 | 1-2 kg, rotator cuff |
| AH | Aşil Blok | 5 dk | — | — | — |

#### GÜN 5 — Lower Body + Aşil Rehab
| # | Hareket | Set × Tekrar | Tempo | Dinlenme | RPE |
|---|---|---|---|---|---|
| SV | Servikal Blok | 8 dk | — | — | — |
| 1 | Leg Press 45° | 4 × 10-12 | 2-1-2 | 90 sn | 6-7 |
| 2 | Leg Extension | 3 × 12-15 | 2-1-2 | 60 sn | 6 |
| 3 | Leg Curl | 3 × 12 | 2-1-2 | 60 sn | 6 |
| 4 | Calf Raise Ayakta | 3 × 15 | 3-1-4 | 60 sn | 5-6 | Eksantrik vurgu! |
| 5 | Seated Calf Raise | 3 × 15 | 3-1-4 | 60 sn | 5-6 | Soleus hedefli |
| 6 | Eksantrik Heel Drop | 2 × 10 | 5 sn iniş | 60 sn | 4-5 | Basamakta, ağrı 3-4/10 |

#### GÜN 6 — Upper Body B
| # | Hareket | Set × Tekrar | Tempo | Dinlenme | RPE |
|---|---|---|---|---|---|
| SV | Servikal Blok | 8 dk | — | — | — |
| 1 | Incline Chest Press | 3 × 10-12 | 2-1-2 | 75 sn | 6-7 |
| 2 | Lat Pulldown (Geniş) | 3 × 10-12 | 2-1-2 | 75 sn | 6-7 |
| 3 | Single Arm Cable Row | 3 × 10-12 her taraf | 2-1-2 | 60 sn | 6 | Sol ilk |
| 4 | Pec Deck / Cable Crossover | 3 × 12-15 | 2-1-2 | 60 sn | 6 |
| 5 | DB Lateral Raise | 3 × 12-15 | 2-1-2 | 45 sn | 5 |
| 6 | Face Pull + Ext. Rotation | 3 × 15 + 2 × 15 | 2-1-2 | 45 sn | 5 |
| AH | Aşil Blok | 5 dk | — | — | — |

#### GÜN 7 — Lower Body B (Opsiyonel 4. gün olarak da kullanılabilir)
| # | Hareket | Set × Tekrar | Tempo | Dinlenme | RPE |
|---|---|---|---|---|---|
| SV | Servikal Blok | 8 dk | — | — | — |
| 1 | Goblet Squat | 3 × 12 | 2-1-2 | 90 sn | 6-7 |
| 2 | Leg Press (Dar ayak) | 3 × 12-15 | 2-1-2 | 90 sn | 6 |
| 3 | Leg Extension | 3 × 12 | 2-1-2 | 60 sn | 6 |
| 4 | Leg Curl | 3 × 12 | 2-1-2 | 60 sn | 6 |
| 5 | Calf Raise | 4 × 15 | 3-1-4 | 60 sn | 5-6 |
| 6 | Eksantrik Heel Drop | 3 × 10 | 5 sn iniş | 60 sn | 4-5 |

### 5.4 HAFTA 3: KONSOLİDASYON (15 günlük salonun son haftası)
Hafta 2 yapısı tekrarlanır. Ağırlıklar %5-10 artırılır. Hedef: Sezon içi ve ev dönemine geçiş için güven inşa etmek. Her hareketin formunu mükemmelleştirmek.

---

## BÖLÜM 6: SERVİKAL STABİLİZASYON PROTOKOLÜ (Detaylı)

> Her antrenman seansının başında 8-10 dakika uygulanır. Ayrıca evde/yolculukta sabah-akşam 2×5 dk yapılır.

### 6.1 Egzersizler (Sıralı)

| # | Egzersiz | Set × Tekrar | Tutuş | Detay | Güvenlik |
|---|---|---|---|---|---|
| 1 | Chin Tuck (Çene İçe) | 3 × 10 | 5 sn | Duvara sırt dayalı. Çene içeri (çift çene). Baş duvardan ayrılmaz. | Ağrı olursa dur. Lordoz kaybı için en kritik egzersiz. |
| 2 | İzometrik Fleksiyon | 2 × 8 | 5 sn | El alna, başı öne itmeye çalış ama elle engelle. Hareket YOK, sadece kasılma. %50 güç. | Asla başı öne eğme. |
| 3 | İzometrik Ekstansiyon | 2 × 8 | 5 sn | El ense, başı arkaya itmeye çalış ama engelle. %50 güç. | Hafif baskı, zorlama yok. |
| 4 | İzometrik Lateral (Sağ) | 2 × 8 | 5 sn | Sağ el sağ şakak, %70 güç. | Sağ taraf daha güçlü baskı alabilir. |
| 5 | İzometrik Lateral (Sol) | 2 × 8 | 5 sn | Sol el sol şakak, %50 güç (fıtık koruması). | Sol tarafta ağrı olursa %30'a düşür. |
| 6 | Skapular Retraksiyon | 3 × 12 | 3 sn | Ayakta, kollar yanda. Kürek kemiklerini sık (kalem sıkıştırma). Omuzlar aşağı. | Omuzları yukarı kaldırma! |
| 7 | Prone Y-Raise (Yüzüstü Y) | 2 × 10 | 2 sn | Yüzüstü yere yat, kollar Y pozisyonunda, başparmaklar tavana. Kolları 5-10 cm kaldır. | Boyun nötr, yere bak. |

### 6.2 Yasaklı Boyun Hareketleri
- ❌ Boyun çevirme (dairesel)
- ❌ Boyun lateral fleksiyon stretching (kulağı omuza değdirme)
- ❌ Boyun ekstansiyon stretching (arkaya bakma)
- ❌ Baş üstü ağırlık kaldırma (overhead press ayakta, ağır)
- ❌ Barbell back squat (bar boyun omurlarına baskı yapar)
- ❌ Behind-the-neck lat pulldown
- ❌ Behind-the-neck shoulder press
- ❌ Crunch / mekik (boyun fleksiyonu)
- ❌ Headstand / amuda kalkma
- ❌ Ağır shrug (trapezius üstü aşırı kasılma → servikal baskı)

---

## BÖLÜM 7: AŞİL TENDİNOPATİSİ REHAB PROTOKOLÜ

### 7.1 Faz Yönetimi

| Faz | Süre | Ağrı Seviyesi | Egzersiz Tipi | Tempo |
|---|---|---|---|---|
| **Faz 1: İzometrik** | Hafta 1-2 | 0-3/10 | Çift ayak calf raise, düz zemin | 3-1-3 |
| **Faz 2: Yavaş Eksantrik** | Hafta 3-6 | 2-4/10 | Eksantrik heel drop (basamak), çift → tek ayak | 3-1-5 |
| **Faz 3: Hızlı Eksantrik** | Hafta 7-12 | 1-3/10 | Tek ayak heel drop, tempo artışı | 2-1-3 |
| **Faz 4: Spora Dönüş** | Hafta 12+ | 0-2/10 | Plyometrik, koşu, trekking | Değişken |

### 7.2 Ağrı Monitoring Kuralları
- Antrenman sırasında ağrı ≤ 4/10 → Devam et
- Antrenman sırasında ağrı ≥ 5/10 → Dur, seti bitir
- Ertesi sabah ağrı artışı → Önceki günün yükünü %20 azalt
- Ertesi sabah ağrı aynı/azalmış → Yük uygun, devam et
- **Sabah ilk adımda ağrı** en güvenilir göstergedir → Her sabah log'a kaydet

### 7.3 Aşil Egzersizleri (Detaylı)

| Egzersiz | Set × Tekrar | Tempo | Detay |
|---|---|---|---|
| Çift Ayak Calf Raise (Düz) | 3 × 15 | 3-1-3 | Düz zemin. 3 sn yukarı, 1 sn tut, 3 sn aşağı. |
| Seated Calf Raise | 3 × 15 | 3-1-3 | Soleus hedefli. Makine veya dambıl diz üstünde. |
| Eksantrik Heel Drop (Basamak) | 2-3 × 10 | 2-1-5 | Çift ayak yukarı, tek ayak 5 sn aşağı. Ağrı 3-4/10 kabul. |
| Bant ile Dorsifleksiyon | 2 × 15 | 2-1-2 | Direnç bandı ayak ucuna, kendine doğru çek. |

### 7.4 Aşil İçin Yasaklılar
- ❌ Sabah ilk saatte yoğun aşil egzersizi (tendon soğuk, sert)
- ❌ Patlayıcı sıçrama (box jump, jump squat) — ilk 8 hafta
- ❌ Koşu bandında koşu — ilk 6 hafta (yürüyüş OK)
- ❌ Çıplak ayakla sert zeminde uzun süre yürüme
- ❌ Yüksek topuklu ayakkabı (tendonu kısaltır)

---

## BÖLÜM 8: SOL OMUZ & SKAPULA REHAB PROTOKOLÜ

### 8.1 Sorun Analizi
- 4 yıl sol elle tepsi taşıma → sol skapular kaslar (levator scapulae, rhomboid, upper trap) kronik overuse
- Sol C5-6/C6-7 fıtık → sol kol nöral inhibisyon (%15-25 güç kaybı)
- Masaj şefi teyitli trigger points (kulunçlar) → levator scapulae, infraspinatus
- Dumbbell çalışırken sol kol erken tükenme + kürek/omuz sızlama

### 8.2 Rehab Stratejisi
1. **Sol taraf İLK çalışılır** (taze sinir sistemi = daha iyi motor ünite aktivasyonu)
2. **Sol taraf 1-2 tekrar FAZLA** (örn: sağ 10, sol 12)
3. **Sol ağırlık %10-15 düşük başlar** (form ve stabilite öncelikli)
4. **Skapular stabilizasyon her seansta** (retraksiyon, depresyon, upward rotation)
5. **Self-masaj (masaj topu)** antrenman sonrası sol kürek kemiği bölgesine 2-3 dk

### 8.3 Spesifik Egzersizler

| Egzersiz | Set × Tekrar | Detay |
|---|---|---|
| Skapular Retraksiyon | 3 × 12 | Her seansta. Kürek sıkma. |
| Prone Y-Raise | 2 × 10 | Lower trap aktivasyonu. |
| Prone T-Raise | 2 × 10 | Mid-trap + rhomboid. |
| Face Pull | 3 × 15 | Her seansta. Rotator cuff + rear delt. |
| DB External Rotation | 2 × 15 her taraf | 1-2 kg. Rotator cuff spesifik. |
| Band Pull-Apart | 3 × 15 | Direnç bandı ile. Skapular stabilite. |
| Single Arm Cable Row | 3 × 10-12 | Sol ilk, sol fazla tekrar. |
| Wall Slide | 2 × 10 | Serratus anterior aktivasyonu. |

### 8.4 Sezon İçi Koruma (Resepsiyon Dönemi)
- Tepsi taşıma BİTTİ → sol omuz overuse ortadan kalkıyor
- AMA uzun süreli oturma → upper cross syndrome riski (öne yuvarlanmış omuzlar)
- **Çözüm:** Her 30-40 dakikada 2 dk ayağa kalk + 10 skapular retraksiyon + 10 omuz dairesi + 5 chin tuck

---

## BÖLÜM 9: BESLENME PLANI

### 9.1 Makro Hedefler
| Makro | Günlük Hedef | Not |
|---|---|---|
| **Kalori** | ~2000-2200 kcal | Hafif deficit (yağ yakımı), kas koruma |
| **Protein** | **130-150g** | 1.5-1.6g/kg (et yok, bu yüzden dikkatli planlama şart) |
| **Karbonhidrat** | 200-250g | Antrenman günleri üst sınır, dinlenme günleri alt sınır |
| **Yağ** | 60-75g | Sağlıklı kaynaklar (zeytinyağı, kuruyemiş, avokado) |
| **Su** | **3.5-4L** | HCT %51.5 + kreatin kullanımı → zorunlu |
| **Lif** | 25-30g | Baklagiller, sebze, tam tahıl |

### 9.2 Protein Kaynakları (Et Yok)
| Kaynak | Miktar | Protein |
|---|---|---|
| Yumurta (tam) | 4-5 adet/gün | 24-30g |
| Süzme peynir / Lor | 200g/gün | 22-28g |
| Yoğurt (sade) | 300g/gün | 10-12g |
| Mercimek (pişmiş) | 200g/gün | 18g |
| Nohut (pişmiş) | 150g/gün | 12g |
| Whey protein tozu | 1-2 scoop/gün | 25-50g |
| Kuruyemiş (karışık) | 50g/gün | 10g |
| **TOPLAM** | | **~130-150g** |

### 9.3 Örnek Günlük Menü

#### Kahvaltı (09:00-10:00)
- 4 yumurta (2 tam + 2 beyaz) — omlet veya haşlanmış
- 100g lor peyniri
- 2 dilim tam buğday ekmeği
- 1 avuç ceviz/badem
- 1 bardak yeşil çay
- **~40g protein**

#### Ara Öğün (13:00-14:00) — ÖĞLE YEMEĞİ YOKSA ZORUNLU
- 1 scoop whey protein (su veya sütle)
- 1 muz
- 1 avuç kuruyemiş
- **~30g protein**

#### Akşam Yemeği (19:00-20:00)
- 200g mercimek çorbası veya nohut yemeği
- 150g süzme peynir (salata ile)
- Bol yeşillik, zeytinyağı
- 1 kase yoğurt
- **~45g protein**

#### Gece (22:00) — Opsiyonel
- 200g süzme peynir veya 1 bardak süt
- **~15-20g protein (kazein → gece amino asit salınımı)**

### 9.4 Anti-İnflamatuar Besinler (Tendon & Disk İyileşmesi)
- Zerdeçal + karabiber (günlük)
- Zencefil (çay veya yemek)
- Omega-3 kaynakları (ceviz, keten tohumu, chia)
- Koyu yeşil yapraklı sebzeler (ıspanak, roka)
- Berry meyveleri (yaban mersini, çilek)
- Kemik suyu (et suyu zaten tüketiliyor — kolajen kaynağı)

### 9.5 Hidrasyon Protokolü
- Sabah kalkınca 500ml su
- Her öğünde 500ml
- Antrenman öncesi 300ml
- Antrenman sırasında 500-750ml
- Antrenman sonrası 500ml
- Gece yatmadan 300ml
- **Toplam: 3.5-4L**
- İdrar rengi açık sarı olmalı (koyu = dehidrasyon)

---

## BÖLÜM 10: TAKVİYE PROTOKOLÜ

| Takviye | Doz | Zamanlama | Süre | Neden |
|---|---|---|---|---|
| **D3 Vitamini** | 50.000 IU/hafta (tek doz) | Sabah yağlı yemekle | İlk 8 hafta, sonra 5.000 IU/gün | 10.9 → 40+ hedefi. Kas, tendon, disk. |
| **K2 Vitamini (MK-7)** | 200 mcg/gün | D3 ile birlikte | Sürekli | Kalsiyum kemiklere yönlendirme. |
| **Kreatin Monohidrat** | 5g/gün (yükleme yok) | Antrenman sonrası su ile | Sürekli | Kas gücü, nöral adaptasyon. Elinizde var. |
| **Magnezyum Glisinat** | 400 mg/gün | Gece yatmadan 30 dk önce | Sürekli | Kas gevşemesi, uyku, tendon. |
| **Omega-3 (EPA/DHA)** | 2-3g/gün | Yemekle | Sürekli | Anti-inflamatuar, tendon kollajen. |
| **Kolajen Tip I+III** | 10-15g/gün | Antrenmandan 30-60 dk önce | Sürekli | Aşil tendonu + disk anulusu. |
| **C Vitamini** | 500 mg/gün | Kolajenle birlikte | Sürekli | Kollajen çapraz bağ kofaktörü. |
| **Whey Protein** | 1-2 scoop/gün | Ara öğün | Sürekli | Protein açığını kapatma. |

> **Not:** D3 50.000 IU'yu haftada bir gün (örn: Pazar sabahı) tek doz alın. Diğer günler 5.000 IU/gün'e geçiş 8 hafta sonra. K2 her gün alınmalı (D3 ile birlikte).

---

## BÖLÜM 11: UYKU & ERGONOMİ PROTOKOLÜ

### 11.1 Yatış Pozisyonu Düzeltmesi
| Sıralama | Pozisyon | Nasıl | Neden |
|---|---|---|---|
| 🥇 1. | Sırtüstü | Orta yastık + boyun rulosu (havlu rulo, boyun çukuruna) + diz altı yastık | Lordoz desteği, disk basıncı minimum |
| 🥈 2. | Sağ yan | Kalın yastık (omuz genişliği) + bacak arası yastık | Sol fıtıklara baskı azalır |
| ❌ YASAK | Yüzüstü | — | Boyun 6-8 saat maks rotasyonda, disk basıncı %40-60 artar |

### 11.2 Uyku Hijyeni
- Yatmadan 45 dk önce ekran kes (mavi ışık filtresi)
- Oda sıcaklığı 18-20°C
- Magnezyum glisinat 400mg yatmadan 30 dk önce
- Akşam yemeğinde kazein kaynağı (süzme peynir)
- Yatmadan önce 5 dk boyun izometrik + sıcak duş
- Yanınıza yastık duvarı örerek yüzüstü dönmenizi engelleyin

### 11.3 Resepsiyon Ergonomisi (Sezon İçi)
- Monitör göz hizası
- Sırt destekli sandalye
- Ayaklar yere düz
- Her 30-40 dakikada 2 dk ayağa kalk
- Her saat: 5 chin tuck + 10 skapular retraksiyon + 10 omuz dairesi
- Telefonu göz hizasında tut (text neck önleme)
- Gece vardiyasında: Melatonin 1-3mg (doktor onayı ile) + karanlık oda

---

## BÖLÜM 12: LOG SİSTEMİ TASARIMI (localStorage)

### 12.1 Log Veri Yapısı
HTML uygulamasında bir "Antrenman Logu" sekmesi olmalı. Kullanıcı her antrenmandan sonra aşağıdaki verileri girebilmelidir (localStorage'da saklanacak):

```
{
  "date": "2026-10-15",
  "phase": "Faz 1 - Salon",
  "day": "Gün 2 - Full Body B",
  "duration_min": 58,
  "exercises": [
    {
      "name": "Leg Press 45°",
      "sets": [
        { "weight_kg": 60, "reps": 12, "rpe": 5 },
        { "weight_kg": 65, "reps": 12, "rpe": 6 },
        { "weight_kg": 65, "reps": 11, "rpe": 6 }
      ],
      "notes": "Sol bacak hafif titreme son sette"
    }
  ],
  "pain": {
    "neck": 2,        // 0-10
    "left_shoulder": 3,
    "left_arm": 1,
    "achilles": 3,
    "lower_back": 0
  },
  "morning_achilles_pain": 2,  // 0-10 (sabah ilk adım)
  "sleep_hours": 7,
  "sleep_quality": 3,          // 1-5
  "water_liters": 3.0,
  "mood": 4,                   // 1-5
  "notes": "Genel iyi, sol omuzda hafif sızlama"
}
```

### 12.2 Log Arayüzü Gereksinimleri
- **Antrenman Logu Formu:** Her egzersiz için set bazlı ağırlık/tekrar/RPE girişi
- **Ağrı Haritası:** Vücut bölgeleri için 0-10 slider (boyun, sol omuz, sol kol, aşil, bel)
- **Sabah Aşil Ağrısı:** Günlük tek sayı girişi (en kritik metrik)
- **Uyku & Su:** Hızlı giriş
- **Geçmiş Görünümü:** Tablo veya kart formatında son 30 gün
- **Progresyon Grafiği:** Her egzersiz için ağırlık/hacim trendi (basit çizgi grafik, Canvas veya SVG ile)
- **Ağrı Trendi:** Haftalık ortalama ağrı skoru grafiği
- **Dışa Aktarma:** JSON olarak indir butonu (yedekleme)
- **İçe Aktarma:** JSON yükle butonu (geri yükleme)

---

## BÖLÜM 13: MOLA ZAMANLAYICI SİSTEMİ

### 13.1 Gereksinimler
Antrenman sırasında kullanıcının set arası mola sürelerini takip edebilmesi için **interaktif bir zamanlayıcı** olmalı:

- **Ön Tanımlı Süreler:** 45 sn, 60 sn, 75 sn, 90 sn (tek dokunuşla başlat)
- **Özel Süre:** Kullanıcı saniye cinsinden girebilsin
- **Görsel Geri Sayım:** Dairesel progress bar (SVG circle) + büyük rakam
- **Sesli Uyarı:** Süre dolduğunda kısa bir bip sesi (Web Audio API, harici dosya yok)
- **Titreşim:** Mobilde titreşim (Vibration API, destekleniyorsa)
- **Otomatik Başlatma:** "Sonraki Set" butonuna basınca otomatik mola başlasın
- **Arka Plan:** Sayfa arka planda olsa bile zamanlayıcı çalışsın (setTimeout + visibility API)

### 13.2 Mola Süre Rehberi (Egzersiz bazlı)
| Egzersiz Tipi | Mola Süresi |
|---|---|
| Büyük kas grubu (Leg Press, Squat, Row, Press) | 90 sn |
| Orta kas grubu (Lat Pulldown, Chest Press, Lunge) | 75 sn |
| Küçük kas grubu (Lateral Raise, Face Pull, Curl) | 60 sn |
| Rehab / İzometrik (Chin Tuck, Calf Raise, External Rotation) | 45 sn |
| Stretching / Mobilite | 30 sn |

---

## BÖLÜM 14: YOLCULUK DÖNEMİ PROGRAMI (2-9 Kasım)

### 14.1 Günlük Rutin (15-20 dk, ekipman: direnç bandı + vücut ağırlığı)

#### Sabah (10 dk) — Otel odası
| # | Egzersiz | Set × Tekrar | Süre |
|---|---|---|---|
| 1 | Chin Tuck | 3 × 10 | 2 dk |
| 2 | İzometrik Boyun (4 yön) | 2 × 8 | 2 dk |
| 3 | Band Pull-Apart | 3 × 15 | 2 dk |
| 4 | Skapular Retraksiyon | 3 × 12 | 1 dk |
| 5 | Wall Slide | 2 × 10 | 1 dk |
| 6 | Prone Y-Raise (yatakta) | 2 × 10 | 2 dk |

#### Akşam (10 dk) — Otel odası
| # | Egzersiz | Set × Tekrar | Süre |
|---|---|---|---|
| 1 | Çift Ayak Calf Raise | 3 × 15 | 2 dk |
| 2 | Eksantrik Heel Drop (basamak/merdiven) | 2 × 10 | 2 dk |
| 3 | Band Dorsifleksiyon | 2 × 15 | 1 dk |
| 4 | Gövde Rotasyonu (hafif) | 2 × 10 | 1 dk |
| 5 | Hamstring Stretch | 2 × 30 sn | 1 dk |
| 6 | Göğüs Kapı Stretching | 2 × 30 sn | 1 dk |
| 7 | Aşil Stretching (duvara) | 2 × 30 sn | 2 dk |

---

## BÖLÜM 15: EV DÖNEMİ PROGRAMI (9 Kasım - 1 Aralık)

### 15.1 Ekipman
- Direnç bandı seti (5'li)
- Ayarlanabilir dambıl (2-10 kg)
- Yoga matı
- Masaj topu (lacrosse)
- Foam roller (varsa)
- Kapı barfiks çubuğu (varsa)

### 15.2 Haftalık Yapı (4 gün)
| Gün | Odak | Süre |
|---|---|---|
| Pzt | Upper Body (Bant + Dambıl) | 45-60 dk |
| Sal | Lower Body + Aşil | 45-60 dk |
| Per | Upper Body (Farklı açılar) | 45-60 dk |
| Cum | Lower Body + Full Body | 45-60 dk |

### 15.3 Örnek Upper Body (Ev)
| # | Egzersiz | Set × Tekrar | Ekipman |
|---|---|---|---|
| 1 | Servikal Blok | 8 dk | — |
| 2 | Band Pull-Apart | 3 × 15 | Bant |
| 3 | DB Floor Press | 3 × 12 | Dambıl |
| 4 | Single Arm DB Row | 3 × 10-12 her taraf | Dambıl |
| 5 | Band Lat Pulldown (kapı üstü) | 3 × 12 | Bant |
| 6 | DB Lateral Raise | 3 × 12-15 | Dambıl |
| 7 | Face Pull (bant) | 3 × 15 | Bant |
| 8 | DB External Rotation | 2 × 15 | Dambıl 1-2 kg |
| 9 | Aşil Blok | 5 dk | — |

### 15.4 Örnek Lower Body (Ev)
| # | Egzersiz | Set × Tekrar | Ekipman |
|---|---|---|---|
| 1 | Servikal Blok | 8 dk | — |
| 2 | Goblet Squat | 3 × 12-15 | Dambıl |
| 3 | DB Romanian Deadlift | 3 × 12 | Dambıl |
| 4 | DB Lunge | 3 × 10 her bacak | Dambıl |
| 5 | Glute Bridge | 3 × 15 | Vücut ağırlığı |
| 6 | Single Leg Calf Raise | 3 × 15 her bacak | Vücut ağırlığı |
| 7 | Eksantrik Heel Drop | 3 × 10 | Basamak |
| 8 | Bant Dorsifleksiyon | 2 × 15 | Bant |

---

## BÖLÜM 16: SEZON İÇİ PROGRAM (2 Aralık+)

### 16.1 Resepsiyon Çalışma Koşulları
- 8 saat ara vardiya
- Hafta içi gündüz, hafta sonu gece
- Uzun süreli oturma (boyun riski)
- Tepsi taşıma YOK (sol omuz avantajı)
- Adım sayısı düşecek (~5-7K)

### 16.2 İş Yeri Mikro-Rehab (Her 30-40 dakikada)
| Egzersiz | Tekrar | Süre |
|---|---|---|
| Chin Tuck | 5 | 30 sn |
| Skapular Retraksiyon | 10 | 30 sn |
| Omuz Daireleri | 10 ileri + 10 geri | 30 sn |
| Ayağa kalk + yürü | — | 1-2 dk |
| Göğüs stretching (kapı/duvar) | 2 × 20 sn | 40 sn |

### 16.3 Salon Programı (5 Aralık+, 4 gün/hafta)
Hafta 2-3 salon programının devamı. Ağırlıklar progresif artırılır. Hedef: Uzun vadeli kas zırhı inşası. Periodizasyon: 4 hafta yükleme → 1 hafta deload.

---

## BÖLÜM 17: ALIŞVERİŞ LİSTESİ (Bütçe Dostu)

| Ekipman | Tahmini Fiyat | Öncelik | Neden |
|---|---|---|---|
| Direnç Bandı Seti (5'li) | ~200-350₺ | 🔴 ZORUNLU | Skapula, rotator cuff, aşil, boyun |
| Yoga Matı (6-8mm) | ~150-250₺ | 🔴 ZORUNLU | Yer egzersizleri |
| Masaj Topu (Lacrosse) | ~100-150₺ | 🟡 ÖNEMLİ | Sol kürek kemiği kulunçları |
| Ayarlanabilir Dambıl (2-10kg) | ~800-1500₺ | 🟡 ÖNEMLİ | Unilateral sol kol |
| Kapı Barfiks Çubuğu | ~200-400₺ | 🟢 OLSA İYİ | Asılma, inverted row |
| Foam Roller | ~150-300₺ | 🟢 OLSA İYİ | Torakal mobilite |
| **Minimum Toplam** | **~450-750₺** | | Bant + Mat + Top |
| **İdeal Toplam** | **~1500-2500₺** | | + Dambıl + Barfiks |

**Takviye Alışverişi:**
| Ürün | Tahmini Fiyat |
|---|---|
| D3 50.000 IU (kutu) | ~50-80₺ |
| K2 MK-7 | ~100-150₺ |
| Magnezyum Glisinat | ~100-200₺ |
| Omega-3 (EPA/DHA yüksek) | ~150-250₺ |
| Kolajen Toz (Tip I+III) | ~200-350₺ |
| C Vitamini 500mg | ~30-50₺ |
| Whey Protein (1kg) | ~400-600₺ |

---

## BÖLÜM 18: UI/UX & TEKNİK GEREKSİNİMLER

### 18.1 Tasarım Dili
- **Tema:** Dark mode (koyu lacivert/siyah arka plan, neon mavi/mor/yeşil aksanlar)
- **Tipografi:** Modern sans-serif (system-ui, Segoe UI, Inter)
- **Kartlar:** Yuvarlatılmış köşeler (16px), ince border, hover'da glow efekti
- **Renk Paleti:**
  - Arka plan: #0a0e1a
  - Kart: #111827
  - Aksan mavi: #3b82f6
  - Aksan mor: #8b5cf6
  - Yeşil (başarı): #10b981
  - Kırmızı (uyarı): #ef4444
  - Turuncu (dikkat): #f59e0b
  - Cyan (bilgi): #06b6d4
- **Animasyonlar:** Hafif fade-in, hover scale, progress bar animasyonu
- **Responsive:** Mobil öncelikli (320px+), tablet, masaüstü

### 18.2 Sayfa Yapısı (Tek Sayfa, Scroll + Tab)
1. **Hero Section:** İsim, istatistikler (yaş, boy, kilo, BMI)
2. **Zaman Çizelgesi:** Timeline bileşeni (4 faz)
3. **Tıbbi Profil:** Vücut diyagramı + kan tahlili accordion
4. **15 Gün Salon Programı:** Tab sistemi (Hafta 1 / Hafta 2 / Hafta 3), her gün detaylı egzersiz kartları
5. **Boyun Rehab:** Egzersiz listesi + görsel açıklamalar + yasaklılar
6. **Aşil Rehab:** Faz tablosu + egzersizler + ağrı monitoring
7. **Sol Omuz Rehab:** Strateji + egzersizler
8. **Beslenme:** Makro hedefler + örnek menü kartları + hidrasyon
9. **Takviye:** Tablo + zamanlama
10. **Uyku & Ergonomi:** Yatış pozisyonu + iş yeri mikro-rehab
11. **Yasaklı Hareketler:** Görsel liste (kırmızı X ile)
12. **Yolculuk Programı:** Sabah/Akşam rutin
13. **Ev Programı:** Haftalık yapı + egzersizler
14. **Sezon İçi:** Resepsiyon ergonomisi + salon dönüşü
15. **Alışveriş Listesi:** Ekipman + takviye
16. **Antrenman Logu:** Form + geçmiş + grafikler (localStorage)
17. **Mola Zamanlayıcı:** İnteraktif zamanlayıcı bileşeni

### 18.3 İnteraktif Bileşenler
- **Tab Sistemi:** Hafta/gün/faz geçişleri
- **Accordion:** Kan tahlili, detaylı açıklamalar
- **Mola Zamanlayıcı:** Dairesel SVG progress + sesli uyarı
- **Log Formu:** Set bazlı giriş, ağrı slider, localStorage
- **Progresyon Grafiği:** Canvas veya SVG çizgi grafik
- **Ağrı Trendi:** Haftalık ortalama bar/çizgi grafik
- **Yazdır Butonu:** Print-friendly CSS (@media print)

### 18.4 Teknik Kısıtlar
- **Tek dosya HTML** (CSS + JS inline)
- **Harici bağımlılık YOK** (no CDN, no framework, no library)
- **Offline çalışabilir** (localStorage, Web Audio API)
- **Mobil uyumlu** (viewport meta, flexbox/grid, touch-friendly)
- **Performans:** < 500KB toplam dosya boyutu hedefi
- **Erişilebilirlik:** Semantic HTML, ARIA labels, kontrast oranları

---

## BÖLÜM 19: İÇERİK YAZIM KURALLARI

1. **Dil:** Türkçe (tıbbi/teknik terimler İngilizce parantez ile)
2. **Ton:** Samimi ama profesyonel, motive edici, bilimsel temelli
3. **Açıklamalar:** Her egzersiz için "Neden bu hareket?" kutusu (mavi border-left) ve "Güvenlik Uyarısı" kutusu (kırmızı border-left)
4. **Görseller:** Emoji ikonları (🏋️🦴🦶💪🥗💊😴🚫) + CSS ile oluşturulan basit diyagramlar (harici resim yok)
5. **Badge Sistemi:** Durum etiketleri (🔴 Kritik, 🟡 Dikkat, 🟢 İyi, 🔵 Bilgi)
6. **Uzman İmzası:** Her bölümün altında ilgili uzmanın küçük badge'i (örn: "🩺 Spor Hekimi onaylı")

---

## BÖLÜM 20: ÖZEL GEREKSİNİMLER & İNCE DETAYLAR

### 20.1 Sol Taraf Asimetri Yönetimi
- Tüm unilateral egzersizlerde sol taraf İLK
- Sol taraf 1-2 tekrar FAZLA
- Sol ağırlık başlangıçta %10-15 düşük
- Log'da sol/sağ ağırlık ayrı takip edilecek
- Hedef: 4-6 hafta içinde asimetri kapanması

### 20.2 Aşil Sabah Ağrısı Takibi
- Her sabah ilk adımda ağrı skoru (0-10) log'a girilecek
- Bu, tendinopati progresyonunun en güvenilir göstergesi
- Haftalık ortalama düşüş trendi hedefleniyor
- Eğer 2 hafta boyunca düşüş yoksa → yük azaltılacak

### 20.3 D Vitamini Yükleme Takvimi
- Hafta 1-8: 50.000 IU/hafta (tek doz, Pazar sabahı)
- Hafta 9+: 5.000 IU/gün (idame)
- 8 hafta sonra kan tahlili tekrarı önerilecek (HTML'de hatırlatma)

### 20.4 Sigara Azaltma Önerisi
- Antrenman öncesi 2 saat ve sonrası 2 saat içmeyin (tendon kanlanması)
- Kademeli azaltma hedefi (tam kesme ideal ama gerçekçi olun)
- HTML'de nazik bir hatırlatma (yargılayıcı olmayan ton)

### 20.5 AST/ALT Takibi
- Kas kökenli yükselme (GGT normal) → korkulacak bir şey yok
- Ama antrenman sonrası 48-72 saat kan vermeyin
- 4 hafta sonra kontrol önerisi

### 20.6 Sezon Geçişi Hatırlatması
- 2 Aralık: Resepsiyon başlangıcı → ergonomi bölümünü tekrar oku
- 5 Aralık: Salon yazılma → Faz 4 programı aktif
- HTML'de tarih bazlı hatırlatma (JavaScript Date kontrolü)

---

## BÖLÜM 21: ÇIKTI BEKLENTİSİ

Yukarıdaki tüm bilgileri kullanarak **tek bir HTML dosyası** üretin. Bu dosya:

1. Tarayıcıda açıldığında **premium, modern, dark-mode** bir arayüz sunmalı
2. Tüm 17 bölüm (Hero'dan Log'a) **scrollable** tek sayfada olmalı
3. **Sticky navigation** ile bölümler arası hızlı geçiş
4. **Tab sistemi** ile antrenman günleri arası geçiş
5. **Accordion** ile detaylı tıbbi veriler
6. **İnteraktif mola zamanlayıcı** (dairesel SVG, sesli uyarı)
7. **Antrenman logu** (localStorage, form, geçmiş görünümü, basit grafik)
8. **Mobil uyumlu** (telefon ekranında rahat kullanım)
9. **Yazdırılabilir** (print CSS)
10. **Offline çalışabilir** (harici kaynak yok)

> **Bu dökümanı okuyan AI, tüm tıbbi, antrenman, beslenme, takviye, uyku, ergonomi ve teknik gereksinimleri eksiksiz ve doğru bir şekilde HTML'e dönüştürmelidir. Her egzersiz detayı, her set/tekrar, her güvenlik uyarısı, her beslenme önerisi bu dökümandan alınmalıdır. Ek bilgi uydurulmamalı, eksik bırakılmamalıdır.**

---

*Döküman sonu. Bu brief'i deepthink/reasoning modunda bir AI'a vererek projenizi ürettirebilirsiniz.* 🚀