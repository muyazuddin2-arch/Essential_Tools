/* Essential Tools: shared engine (loaded by every tool) */
(function(){
"use strict";
const $=id=>document.getElementById(id);
/* ===== OWNER SETTINGS: edit here once, it applies to every tool ===== */
const CONTACT={gmail:"",facebook:""}; // e.g. gmail:"yourname@gmail.com", facebook:"https://facebook.com/yourpage"
const TOOLS=[["emi.html",{"en": "EMI Calculator", "bn": "EMI ক্যালকুলেটর", "hi": "EMI कैलकुलेटर", "ur": "EMI کیلکولیٹر", "ar": "حاسبة القسط الشهري", "fa": "ماشین‌حساب اقساط", "tr": "Taksit Hesaplayıcı", "zh": "贷款月供计算器", "ja": "ローン返済シミュレーター", "ko": "대출 이자 계산기", "ru": "Кредитный калькулятор", "es": "Calculadora de cuotas", "fr": "Calculateur de mensualités", "de": "Ratenrechner", "pt": "Calculadora de parcelas", "it": "Calcolatore rate", "nl": "Aflossingsrekenmachine", "pl": "Kalkulator rat", "uk": "Кредитний калькулятор", "id": "Kalkulator Cicilan", "ms": "Kalkulator Ansuran", "th": "เครื่องคำนวณผ่อนชำระ", "vi": "Máy tính khoản vay", "ta": "EMI கணிப்பான்", "te": "EMI కాలిక్యులేటర్", "mr": "EMI कॅल्क्युलेटर", "ne": "EMI क्यालकुलेटर", "si": "EMI ගණකය", "sw": "Kikokotoo cha Malipo ya Mkopo", "he": "מחשבון החזר הלוואה", "el": "Αριθμομηχανή δόσεων", "sv": "Låneberäknare"}],["qr.html",{"en": "QR Code Generator", "bn": "QR কোড জেনারেটর", "hi": "QR कोड जनरेटर", "ur": "QR کوڈ جنریٹر", "ar": "منشئ رمز QR", "fa": "ساخت کد QR", "tr": "QR Kod Oluşturucu", "zh": "二维码生成器", "ja": "QRコード作成", "ko": "QR 코드 생성기", "ru": "Генератор QR-кодов", "es": "Generador de códigos QR", "fr": "Générateur de QR code", "de": "QR-Code-Generator", "pt": "Gerador de QR Code", "it": "Generatore di codici QR", "nl": "QR-codegenerator", "pl": "Generator kodów QR", "uk": "Генератор QR-кодів", "id": "Pembuat Kode QR", "ms": "Penjana Kod QR", "th": "ตัวสร้างคิวอาร์โค้ด", "vi": "Trình tạo mã QR", "ta": "QR குறியீடு உருவாக்கி", "te": "QR కోడ్ జనరేటర్", "mr": "QR कोड जनरेटर", "ne": "QR कोड जेनेरेटर", "si": "QR කේත උත්පාදකය", "sw": "Kitengeneza Msimbo wa QR", "he": "מחולל קוד QR", "el": "Δημιουργός κωδικών QR", "sv": "QR-kodsgenerator"}],["img.html",{"en": "Image Compressor", "bn": "ইমেজ কম্প্রেসার", "hi": "इमेज कंप्रेसर", "ur": "امیج کمپریسر", "ar": "ضاغط الصور", "fa": "فشرده‌ساز تصویر", "tr": "Görsel Sıkıştırıcı", "zh": "图片压缩器", "ja": "画像圧縮", "ko": "이미지 압축기", "ru": "Сжатие изображений", "es": "Compresor de imágenes", "fr": "Compresseur d’images", "de": "Bildkomprimierer", "pt": "Compressor de imagens", "it": "Compressore di immagini", "nl": "Afbeeldingscompressor", "pl": "Kompresor obrazów", "uk": "Стиснення зображень", "id": "Pengompres Gambar", "ms": "Pemampat Imej", "th": "ตัวบีบอัดรูปภาพ", "vi": "Trình nén ảnh", "ta": "பட அமுக்கி", "te": "ఇమేజ్ కంప్రెసర్", "mr": "इमेज कॉम्प्रेसर", "ne": "इमेज कम्प्रेसर", "si": "රූප සම්පීඩකය", "sw": "Kibana Picha", "he": "מדחס תמונות", "el": "Συμπιεστής εικόνων", "sv": "Bildkomprimerare"}],["pdf.html",{"en": "PDF Merge & Split", "bn": "PDF মার্জ ও স্প্লিট", "hi": "PDF मर्ज और स्प्लिट", "ur": "PDF مرج اور اسپلٹ", "ar": "دمج وتقسيم PDF", "fa": "ادغام و تقسیم PDF", "tr": "PDF Birleştir ve Böl", "zh": "PDF 合并与拆分", "ja": "PDF結合・分割", "ko": "PDF 병합 및 분할", "ru": "Объединение и разделение PDF", "es": "Unir y dividir PDF", "fr": "Fusionner et diviser des PDF", "de": "PDF zusammenfügen und teilen", "pt": "Juntar e dividir PDF", "it": "Unisci e dividi PDF", "nl": "PDF samenvoegen en splitsen", "pl": "Łączenie i dzielenie PDF", "uk": "Об’єднання та поділ PDF", "id": "Gabung & Pisah PDF", "ms": "Gabung & Pisah PDF", "th": "รวมและแยก PDF", "vi": "Gộp & tách PDF", "ta": "PDF இணைத்தல் & பிரித்தல்", "te": "PDF విలీనం & విభజన", "mr": "PDF मर्ज आणि स्प्लिट", "ne": "PDF मर्ज र स्प्लिट", "si": "PDF ඒකාබද්ධ කිරීම සහ බෙදීම", "sw": "Unganisha na Gawanya PDF", "he": "מיזוג ופיצול PDF", "el": "Συγχώνευση και διαχωρισμός PDF", "sv": "Slå ihop och dela PDF"}],["cv.html",{"en": "CV Builder", "bn": "সিভি বিল্ডার", "hi": "सीवी बिल्डर", "ur": "سی وی بلڈر", "ar": "منشئ السيرة الذاتية", "fa": "ساخت رزومه", "tr": "Özgeçmiş Oluşturucu", "zh": "简历生成器", "ja": "履歴書ビルダー", "ko": "이력서 작성기", "ru": "Конструктор резюме", "es": "Creador de CV", "fr": "Créateur de CV", "de": "Lebenslauf-Ersteller", "pt": "Criador de currículo", "it": "Creatore di CV", "nl": "CV-maker", "pl": "Kreator CV", "uk": "Конструктор резюме", "id": "Pembuat CV", "ms": "Pembina CV", "th": "ตัวสร้างเรซูเม่", "vi": "Trình tạo CV", "ta": "சுயவிவர உருவாக்கி", "te": "రెజ్యూమె బిల్డర్", "mr": "सीव्ही बिल्डर", "ne": "सीभी बिल्डर", "si": "චරිතාපදාන ගොනු තනන්නා", "sw": "Kitengeneza CV", "he": "בונה קורות חיים", "el": "Δημιουργός βιογραφικού", "sv": "CV-byggare"}],["inv.html",{"en": "Invoice Generator", "bn": "ইনভয়েস জেনারেটর", "hi": "इनवॉइस जनरेटर", "ur": "انوائس جنریٹر", "ar": "منشئ الفواتير", "fa": "ساخت فاکتور", "tr": "Fatura Oluşturucu", "zh": "发票生成器", "ja": "請求書作成", "ko": "청구서 생성기", "ru": "Генератор счетов", "es": "Generador de facturas", "fr": "Générateur de factures", "de": "Rechnungsgenerator", "pt": "Gerador de faturas", "it": "Generatore di fatture", "nl": "Factuurgenerator", "pl": "Generator faktur", "uk": "Генератор рахунків", "id": "Pembuat Faktur", "ms": "Penjana Invois", "th": "ตัวสร้างใบแจ้งหนี้", "vi": "Trình tạo hóa đơn", "ta": "விலைப்பட்டியல் உருவாக்கி", "te": "ఇన్వాయిస్ జనరేటర్", "mr": "इनव्हॉइस जनरेटर", "ne": "इनभ्वाइस जेनेरेटर", "si": "ඉන්වොයිස් උත්පාදකය", "sw": "Kitengeneza Ankara", "he": "מחולל חשבוניות", "el": "Δημιουργός τιμολογίων", "sv": "Fakturagenerator"}],["fx.html",{"en": "Currency Converter", "bn": "মুদ্রা কনভার্টার", "hi": "मुद्रा कन्वर्टर", "ur": "کرنسی کنورٹر", "ar": "محوّل العملات", "fa": "مبدل ارز", "tr": "Döviz Çevirici", "zh": "汇率换算器", "ja": "通貨換算", "ko": "환율 계산기", "ru": "Конвертер валют", "es": "Conversor de divisas", "fr": "Convertisseur de devises", "de": "Währungsrechner", "pt": "Conversor de moedas", "it": "Convertitore di valute", "nl": "Valuta-omrekenaar", "pl": "Przelicznik walut", "uk": "Конвертер валют", "id": "Konverter Mata Uang", "ms": "Penukar Mata Wang", "th": "ตัวแปลงสกุลเงิน", "vi": "Đổi tiền tệ", "ta": "நாணய மாற்றி", "te": "కరెన్సీ కన్వర్టర్", "mr": "चलन परिवर्तक", "ne": "मुद्रा रूपान्तरणकर्ता", "si": "මුදල් පරිවර්තකය", "sw": "Kigeuza Sarafu", "he": "ממיר מטבעות", "el": "Μετατροπέας νομισμάτων", "sv": "Valutaomvandlare"}],["land.html",{"en": "Land Record Helper", "bn": "জমির খতিয়ান সহায়ক", "hi": "भूमि अभिलेख सहायक", "ur": "زمینی ریکارڈ معاون", "ar": "مساعد سجلات الأراضي", "fa": "دستیار سوابق زمین", "tr": "Arazi Kaydı Yardımcısı", "zh": "土地登记助手", "ja": "土地登記アシスタント", "ko": "토지 등기 도우미", "ru": "Помощник по земельным записям", "es": "Asistente de registro de tierras", "fr": "Assistant foncier", "de": "Grundbuch-Helfer", "pt": "Assistente de registro de terras", "it": "Assistente catasto", "nl": "Kadaster-assistent", "pl": "Asystent ewidencji gruntów", "uk": "Помічник із земельних записів", "id": "Asisten Catatan Tanah", "ms": "Pembantu Rekod Tanah", "th": "ผู้ช่วยทะเบียนที่ดิน", "vi": "Trợ lý hồ sơ đất đai", "ta": "நில ஆவண உதவியாளர்", "te": "భూ రికార్డుల సహాయకుడు", "mr": "जमीन अभिलेख सहाय्यक", "ne": "जग्गा अभिलेख सहायक", "si": "ඉඩම් වාර්තා සහායක", "sw": "Msaidizi wa Rekodi za Ardhi", "he": "עוזר רישום מקרקעין", "el": "Βοηθός κτηματολογίου", "sv": "Fastighetsregisterhjälp"}],["photo.html",{"en": "Passport Photo Maker", "bn": "পাসপোর্ট সাইজ ফটো মেকার", "hi": "पासपोर्ट साइज़ फ़ोटो मेकर", "ur": "پاسپورٹ سائز فوٹو میکر", "ar": "صانع صور جواز السفر", "fa": "ساخت عکس پاسپورتی", "tr": "Vesikalık Fotoğraf Oluşturucu", "zh": "证件照制作器", "ja": "証明写真メーカー", "ko": "여권 사진 만들기", "ru": "Фото на паспорт", "es": "Fotos tamaño pasaporte", "fr": "Photo d’identité", "de": "Passfoto-Ersteller", "pt": "Gerador de foto para passaporte", "it": "Foto tessera", "nl": "Pasfoto-maker", "pl": "Kreator zdjęć paszportowych", "uk": "Фото на паспорт", "id": "Pembuat Pas Foto Paspor", "ms": "Pembuat Gambar Pasport", "th": "ตัวสร้างรูปถ่ายติดหนังสือเดินทาง", "vi": "Tạo ảnh hộ chiếu", "ta": "கடவுச்சீட்டு புகைப்பட உருவாக்கி", "te": "పాస్‌పోర్ట్ ఫోటో మేకర్", "mr": "पासपोर्ट साइज फोटो मेकर", "ne": "राहदानी साइज फोटो मेकर", "si": "ගමන් බලපත්‍ර ඡායාරූප සාදනය", "sw": "Kitengeneza Picha za Pasipoti", "he": "יוצר תמונות פספורט", "el": "Φωτογραφίες διαβατηρίου", "sv": "Passfotoskapare"}],["reg.html",{"en": "Land Registration Cost", "bn": "জমি রেজিস্ট্রেশন খরচ", "hi": "भूमि पंजीकरण खर्च", "ur": "زمین رجسٹریشن لاگت", "ar": "تكلفة تسجيل الأرض", "fa": "هزینه ثبت زمین", "tr": "Arazi Tescil Maliyeti", "zh": "土地登记费用", "ja": "土地登記費用", "ko": "토지 등기 비용", "ru": "Расходы на регистрацию земли", "es": "Costo de registro de terreno", "fr": "Frais d’enregistrement foncier", "de": "Kosten der Grundstücksregistrierung", "pt": "Custo de registro de terreno", "it": "Costi di registrazione terreno", "nl": "Kosten grondregistratie", "pl": "Koszty rejestracji gruntu", "uk": "Витрати на реєстрацію землі", "id": "Biaya Pendaftaran Tanah", "ms": "Kos Pendaftaran Tanah", "th": "ค่าใช้จ่ายจดทะเบียนที่ดิน", "vi": "Chi phí đăng ký đất đai", "ta": "நில பதிவு செலவு", "te": "భూ రిజిస్ట్రేషన్ ఖర్చు", "mr": "जमीन नोंदणी खर्च", "ne": "जग्गा रजिस्ट्रेसन खर्च", "si": "ඉඩම් ලියාපදිංචි වියදම", "sw": "Gharama ya Kusajili Ardhi", "he": "עלות רישום מקרקעין", "el": "Κόστος μεταγραφής γης", "sv": "Kostnad för lagfart av mark"}],["cgpa.html",{"en": "CGPA Converter", "bn": "CGPA কনভার্টার", "hi": "CGPA कन्वर्टर", "ur": "CGPA کنورٹر", "ar": "محوّل المعدل التراكمي", "fa": "مبدل معدل کل (CGPA)", "tr": "CGPA Dönüştürücü", "zh": "绩点转换器", "ja": "GPA換算ツール", "ko": "학점 변환기", "ru": "Конвертер среднего балла", "es": "Conversor de promedio (CGPA)", "fr": "Convertisseur de moyenne (CGPA)", "de": "Notendurchschnitt-Umrechner (CGPA)", "pt": "Conversor de CGPA", "it": "Convertitore di media (CGPA)", "nl": "CGPA-omzetter", "pl": "Przelicznik CGPA", "uk": "Конвертер середнього балу", "id": "Konverter IPK/CGPA", "ms": "Penukar CGPA", "th": "ตัวแปลงเกรดเฉลี่ย (CGPA)", "vi": "Công cụ quy đổi điểm trung bình (CGPA)", "ta": "CGPA மாற்றி", "te": "CGPA కన్వర్టర్", "mr": "CGPA कन्वर्टर", "ne": "CGPA कन्भर्टर", "si": "CGPA පරිවර්තකය", "sw": "Kigeuza CGPA", "he": "ממיר ממוצע (CGPA)", "el": "Μετατροπέας βαθμού (CGPA)", "sv": "CGPA-omvandlare"}]]; // new tool: add one line ["file.html",{en:"Name",bn:"নাম",...}] with its title in all 32 languages
const TL={en:"Tools",bn:"টুলস",hi:"टूल्स",ur:"ٹولز",ar:"الأدوات",fa:"ابزارها",tr:"Araçlar",zh:"工具",ja:"ツール",ko:"도구",ru:"Инструменты",es:"Herramientas",fr:"Outils",de:"Werkzeuge",pt:"Ferramentas",it:"Strumenti",nl:"Hulpmiddelen",pl:"Narzędzia",uk:"Інструменти",id:"Alat",ms:"Alat",th:"เครื่องมือ",vi:"Công cụ",ta:"கருவிகள்",te:"సాధనాలు",mr:"साधने",ne:"उपकरणहरू",si:"මෙවලම්",sw:"Zana",he:"כלים",el:"Εργαλεία",sv:"Verktyg"};

const CS={
en:"Currency|History|Clear history|Erased when you leave this page.|User guide|Use my location|Location unavailable. Using International settings.|Country",
bn:"মুদ্রা|ইতিহাস|ইতিহাস মুছুন|এই পেজ ছেড়ে গেলে মুছে যাবে।|ব্যবহারের নির্দেশিকা|আমার লোকেশন ব্যবহার করুন|লোকেশন পাওয়া যায়নি। আন্তর্জাতিক সেটিং ব্যবহার হচ্ছে।|দেশ",
hi:"मुद्रा|इतिहास|इतिहास साफ़ करें|इस पेज से बाहर जाने पर मिट जाएगा।|उपयोग गाइड|मेरा स्थान उपयोग करें|स्थान उपलब्ध नहीं। अंतरराष्ट्रीय सेटिंग उपयोग हो रही है।|देश",
ur:"کرنسی|ہسٹری|ہسٹری صاف کریں|اس صفحے سے نکلنے پر مٹ جائے گی۔|استعمال کی رہنمائی|میرا مقام استعمال کریں|مقام دستیاب نہیں۔ بین الاقوامی ترتیبات استعمال ہو رہی ہیں۔|ملک",
ar:"العملة|السجل|مسح السجل|يُحذف عند مغادرة هذه الصفحة.|دليل الاستخدام|استخدم موقعي|الموقع غير متاح. تُستخدم الإعدادات الدولية.|الدولة",
fa:"ارز|تاریخچه|پاک کردن تاریخچه|با ترک این صفحه پاک می‌شود.|راهنمای استفاده|استفاده از موقعیت من|موقعیت در دسترس نیست. تنظیمات بین‌المللی استفاده می‌شود.|کشور",
tr:"Para birimi|Geçmiş|Geçmişi temizle|Bu sayfadan ayrılınca silinir.|Kullanım kılavuzu|Konumumu kullan|Konum alınamadı. Uluslararası ayarlar kullanılıyor.|Ülke",
zh:"货币|历史记录|清除历史|离开此页面后将被清除。|使用指南|使用我的位置|无法获取位置，使用国际通用设置。|国家/地区",
ja:"通貨|履歴|履歴を消去|このページを離れると削除されます。|使い方ガイド|現在地を使う|位置情報を取得できません。国際標準の設定を使用します。|国",
ko:"통화|기록|기록 지우기|이 페이지를 떠나면 삭제됩니다.|사용 안내|내 위치 사용|위치를 사용할 수 없습니다. 국제 기본 설정을 사용합니다.|국가",
ru:"Валюта|История|Очистить историю|Удаляется при выходе со страницы.|Руководство|Использовать моё местоположение|Местоположение недоступно. Используются международные настройки.|Страна",
es:"Moneda|Historial|Borrar historial|Se borra al salir de esta página.|Guía de uso|Usar mi ubicación|Ubicación no disponible. Se usa la configuración internacional.|País",
fr:"Devise|Historique|Effacer l’historique|Effacé quand vous quittez cette page.|Guide d’utilisation|Utiliser ma position|Position indisponible. Paramètres internationaux utilisés.|Pays",
de:"Währung|Verlauf|Verlauf löschen|Wird beim Verlassen der Seite gelöscht.|Anleitung|Meinen Standort verwenden|Standort nicht verfügbar. Internationale Einstellungen werden verwendet.|Land",
pt:"Moeda|Histórico|Limpar histórico|Apagado ao sair desta página.|Guia de uso|Usar minha localização|Localização indisponível. Usando configurações internacionais.|País",
it:"Valuta|Cronologia|Cancella cronologia|Viene cancellata quando lasci la pagina.|Guida all’uso|Usa la mia posizione|Posizione non disponibile. Uso le impostazioni internazionali.|Paese",
nl:"Valuta|Geschiedenis|Geschiedenis wissen|Wordt gewist als u deze pagina verlaat.|Gebruiksaanwijzing|Mijn locatie gebruiken|Locatie niet beschikbaar. Internationale instellingen worden gebruikt.|Land",
pl:"Waluta|Historia|Wyczyść historię|Usuwane po opuszczeniu strony.|Instrukcja|Użyj mojej lokalizacji|Lokalizacja niedostępna. Używane są ustawienia międzynarodowe.|Kraj",
uk:"Валюта|Історія|Очистити історію|Видаляється після виходу зі сторінки.|Інструкція|Використати моє місцезнаходження|Місцезнаходження недоступне. Використовуються міжнародні налаштування.|Країна",
id:"Mata uang|Riwayat|Hapus riwayat|Dihapus saat Anda meninggalkan halaman ini.|Panduan penggunaan|Gunakan lokasi saya|Lokasi tidak tersedia. Menggunakan pengaturan internasional.|Negara",
ms:"Mata wang|Sejarah|Padam sejarah|Dipadam apabila anda meninggalkan halaman ini.|Panduan pengguna|Guna lokasi saya|Lokasi tidak tersedia. Menggunakan tetapan antarabangsa.|Negara",
th:"สกุลเงิน|ประวัติ|ล้างประวัติ|จะถูกลบเมื่อคุณออกจากหน้านี้|คู่มือการใช้งาน|ใช้ตำแหน่งของฉัน|ไม่สามารถใช้ตำแหน่งได้ ใช้การตั้งค่าสากลแทน|ประเทศ",
vi:"Tiền tệ|Lịch sử|Xóa lịch sử|Sẽ bị xóa khi bạn rời trang này.|Hướng dẫn sử dụng|Dùng vị trí của tôi|Không có vị trí. Đang dùng cài đặt quốc tế.|Quốc gia",
ta:"நாணயம்|வரலாறு|வரலாற்றை அழி|இந்தப் பக்கத்தை விட்டு வெளியேறினால் அழிக்கப்படும்.|பயன்பாட்டு வழிகாட்டி|என் இருப்பிடத்தைப் பயன்படுத்து|இருப்பிடம் கிடைக்கவில்லை. சர்வதேச அமைப்புகள் பயன்படுத்தப்படுகின்றன.|நாடு",
te:"కరెన్సీ|చరిత్ర|చరిత్రను తొలగించు|ఈ పేజీని వదిలితే తొలగించబడుతుంది.|వినియోగ మార్గదర్శి|నా స్థానాన్ని ఉపయోగించు|స్థానం అందుబాటులో లేదు. అంతర్జాతీయ సెట్టింగ్‌లు వాడుతున్నాం.|దేశం",
mr:"चलन|इतिहास|इतिहास पुसा|हे पान सोडल्यावर पुसला जाईल.|वापर मार्गदर्शक|माझे स्थान वापरा|स्थान उपलब्ध नाही. आंतरराष्ट्रीय सेटिंग वापरत आहे.|देश",
ne:"मुद्रा|इतिहास|इतिहास मेट्नुहोस्|यो पेज छोडेपछि मेटिन्छ।|प्रयोग निर्देशिका|मेरो स्थान प्रयोग गर्नुहोस्|स्थान उपलब्ध छैन। अन्तर्राष्ट्रिय सेटिङ प्रयोग भइरहेको छ।|देश",
si:"මුදල්|ඉතිහාසය|ඉතිහාසය මකන්න|මෙම පිටුවෙන් ඉවත් වූ විට මැකේ.|භාවිත මාර්ගෝපදේශය|මගේ ස්ථානය භාවිතා කරන්න|ස්ථානය ලබාගත නොහැක. ජාත්‍යන්තර සැකසුම් භාවිතා වේ.|රට",
sw:"Sarafu|Historia|Futa historia|Hufutwa ukiondoka kwenye ukurasa huu.|Mwongozo wa matumizi|Tumia eneo langu|Eneo halipatikani. Mipangilio ya kimataifa inatumika.|Nchi",
he:"מטבע|היסטוריה|נקה היסטוריה|יימחק עם עזיבת הדף.|מדריך שימוש|השתמש במיקום שלי|המיקום אינו זמין. נעשה שימוש בהגדרות בינלאומיות.|מדינה",
el:"Νόμισμα|Ιστορικό|Εκκαθάριση ιστορικού|Διαγράφεται όταν φύγετε από τη σελίδα.|Οδηγός χρήσης|Χρήση της τοποθεσίας μου|Η τοποθεσία δεν είναι διαθέσιμη. Χρησιμοποιούνται διεθνείς ρυθμίσεις.|Χώρα",
sv:"Valuta|Historik|Rensa historik|Raderas när du lämnar sidan.|Användarguide|Använd min plats|Plats ej tillgänglig. Internationella inställningar används.|Land"};

const CUR=["USD","EUR","GBP","JPY","CNY","INR","BDT","PKR","NPR","LKR","SAR","AED","TRY","RUB","KRW","IDR","MYR","THB","VND","BRL","MXN","PLN","UAH","SEK","ILS","IRR","EGP","KES","ZAR","AUD","CAD","SGD","CHF","NGN","KZT"];
/* country: code, language, currency, anchor points [lat, lon, radius km] used to match a location offline */
const CTRY=[["INT","en","USD",[]],
["BD","bn","BDT",[[23.8,90.4,300],[26,89,200],[22.3,91.8,200],[24.9,91.9,150],[24.4,88.6,150],[22.8,89.5,150]]],
["IN","hi","INR",[[22,79,1500],[28.6,77.2,400],[19.1,72.9,400],[22.6,88.4,300],[26.7,88.4,60]]],
["PK","ur","PKR",[[30,70,700]]],["NP","ne","NPR",[[28.2,84,300]]],["LK","si","LKR",[[7.8,80.7,250]]],
["US","en","USD",[[39.8,-98.6,1800],[40.7,-74,300],[34,-118.2,300],[47.6,-122.3,250],[29.8,-95.4,300],[25.8,-80.2,250]]],
["CA","en","CAD",[[56,-96,1300],[43.7,-79.4,350],[49.2,-123.1,300],[45.5,-73.6,300],[51,-114,300]]],
["GB","en","GBP",[[54,-2,450],[51.5,-0.1,150]]],["IE","en","EUR",[[53.3,-6.3,120]]],
["AU","en","AUD",[[-25,134,2000],[-33.9,151.2,400],[-37.8,145,400],[-31.9,115.9,400],[-27.5,153,300]]],
["DE","de","EUR",[[51,10,400]]],["AT","de","EUR",[[47.5,14,150]]],["CH","de","CHF",[[46.8,8.2,150]]],["FR","fr","EUR",[[46.5,2.5,550]]],
["ES","es","EUR",[[40.4,-3.7,450]]],["IT","it","EUR",[[42.5,12.5,500]]],["NL","nl","EUR",[[52.2,5.3,150]]],["GR","el","EUR",[[39,22,300]]],
["PL","pl","PLN",[[52,19,300]]],["UA","uk","UAH",[[49,32,500]]],["SE","sv","SEK",[[60,15,600]]],
["RU","ru","RUB",[[60,95,1500],[55.8,37.6,500],[59.9,30.3,300],[56,60,600],[55,83,500],[43,132,400]]],
["KZ","ru","KZT",[[48,67,1200]]],["TR","tr","TRY",[[39,35,800]]],["IL","he","ILS",[[31.5,34.9,100]]],["IR","fa","IRR",[[32.5,53,800]]],
["SA","ar","SAR",[[24,45,1100]]],["AE","ar","AED",[[25.2,55.3,150]]],["EG","ar","EGP",[[27,30.5,600]]],
["JP","ja","JPY",[[36,138,900]]],["KR","ko","KRW",[[36.5,127.8,250]]],
["CN","zh","CNY",[[35,103,1300],[39.9,116.4,500],[31.2,121.5,500],[23.1,113.3,500],[30.6,104,500],[43.8,87.6,600],[41.8,123.4,400]]],
["TH","th","THB",[[13.8,100.5,400]]],["VN","vi","VND",[[16,107,600],[21,105.8,250],[10.8,106.7,250]]],
["MY","ms","MYR",[[4,102,500],[3.2,113,500]]],["SG","en","SGD",[[1.35,103.8,40]]],["ID","id","IDR",[[-2,118,2200]]],
["BR","pt","BRL",[[-14,-52,2000]]],["MX","es","MXN",[[23.6,-102.5,1300],[19.4,-99.1,300]]],
["ZA","en","ZAR",[[-29,25,1000]]],["KE","sw","KES",[[0.5,37.5,400]]],["NG","en","NGN",[[9.1,8,500]]]];
const ENLOC={BD:"en-IN",IN:"en-IN",PK:"en-IN",NP:"en-IN",US:"en-US",CA:"en-CA",GB:"en-GB",IE:"en-IE",AU:"en-AU",SG:"en-SG",NG:"en-NG",ZA:"en-ZA"};
const RTL=["ar","fa","ur","he"];
const MARK='<svg width="28" height="28" viewBox="0 0 160 160" aria-hidden="true"><rect width="160" height="160" rx="36" fill="#0f6b4f"/><rect x="42" y="38" width="76" height="14" rx="7" fill="#f6f7f4"/><rect x="42" y="73" width="52" height="14" rx="7" fill="#f6f7f4"/><circle cx="112" cy="80" r="14" fill="#f4b740"/><rect x="42" y="108" width="76" height="14" rx="7" fill="#f6f7f4"/></svg>';
const st={lang:"en",cur:"USD",country:"INT"};
let tool=null,prefs={},hist=[],ht=null;
try{prefs=JSON.parse(localStorage.getItem("et_prefs")||"{}")||{}}catch(e){prefs={}}
if(CS[prefs.lang])st.lang=prefs.lang;
if(CUR.includes(prefs.cur))st.cur=prefs.cur;
if(CTRY.some(c=>c[0]===prefs.country))st.country=prefs.country;
function save(k,v){prefs[k]=v;try{localStorage.setItem("et_prefs",JSON.stringify(prefs))}catch(e){}}
const cs=k=>(CS[st.lang]||CS.en).split("|")[k];
const tt=(o,k)=>((o&&(o[st.lang]||o.en))||"").split("|")[k]||"";
const dn=(c,t,l)=>{try{return new Intl.DisplayNames([l||st.lang],{type:t}).of(c)||c}catch(e){return c}};
const loc=()=>st.lang==="en"?(ENLOC[st.country]||"en"):st.lang;
const money=x=>{try{return new Intl.NumberFormat(loc(),{style:"currency",currency:st.cur}).format(x)}catch(e){return x.toFixed(2)+" "+st.cur}};
/* fmt: format an amount in any currency (c) with optional Intl options (o), in the active language */
const fmt=(x,c,o)=>{try{return new Intl.NumberFormat(loc(),Object.assign({style:"currency",currency:c||st.cur},o||{})).format(x)}catch(e){return x.toFixed(2)+" "+(c||st.cur)}};
const km=(a,b,c,d)=>{const r=Math.PI/180,x=Math.sin((c-a)*r/2)**2+Math.cos(a*r)*Math.cos(c*r)*Math.sin((d-b)*r/2)**2;return 12742*Math.asin(Math.sqrt(x))};
function nearest(lat,lon){let best="INT",bi=1.3;CTRY.forEach(c=>c[3].forEach(a=>{const r=km(lat,lon,a[0],a[1])/a[2];if(r<bi){bi=r;best=c[0]}}));return best}
const status=m=>{$("et-st").textContent=m||""};
const fail=()=>status(cs(6));
function apply(code){
const c=CTRY.find(x=>x[0]===code)||CTRY[0];
if(!prefs.country)st.country=c[0];if(!prefs.lang)st.lang=c[1];if(!prefs.cur)st.cur=c[2];
if(c[0]==="INT")fail();else status("📍 "+dn(c[0],"region"));render()}
function locate(force){
if(!navigator.geolocation){fail();return}
navigator.geolocation.getCurrentPosition(p=>{if(force){prefs={};try{localStorage.removeItem("et_prefs")}catch(e){}}apply(nearest(p.coords.latitude,p.coords.longitude))},fail,{timeout:10000,maximumAge:3600000})}
function autoLocate(){
if(["lang","cur","country"].every(k=>k in prefs))return;
if(navigator.permissions&&navigator.permissions.query)navigator.permissions.query({name:"geolocation"}).then(r=>r.state==="denied"?fail():locate(false),()=>locate(false));
else locate(false)}
/* history: kept only for this visit (sessionStorage), erased when the tab or browser is closed */
const hk=()=>"et_h_"+tool.id;
function loadH(){try{hist=JSON.parse(sessionStorage.getItem(hk())||"[]")}catch(e){hist=[]}}
function listH(){$("et-hs").textContent=cs(1)+" ("+hist.length+")";const u=$("et-hl");u.innerHTML="";hist.forEach(h=>{const li=document.createElement("li");li.textContent=h;u.appendChild(li)})}
function logNow(text){if(hist[0]===text)return;hist.unshift(text);hist=hist.slice(0,50);try{sessionStorage.setItem(hk(),JSON.stringify(hist))}catch(e){}listH()}
function log(text){clearTimeout(ht);ht=setTimeout(()=>logNow(text),1500)}
function build(){
$("et-top").innerHTML='<header><a class="brand" href="index.html">'+MARK+'Essential Tools</a><div class="tools"><button id="et-tb" aria-expanded="false" aria-controls="et-menu"></button><div class="menu" id="et-menu" hidden></div></div><select id="et-lang"></select></header>'+
'<div class="set"><div><label for="et-cty" id="et-lc"></label><select id="et-cty"></select></div><div><label for="et-cur" id="et-lu"></label><select id="et-cur"></select></div></div>'+
'<button class="loc" id="et-loc"></button><p class="mu" id="et-st" role="status"></p>'+
'<details><summary id="et-gs"></summary><p id="et-gt"></p></details>';
$("et-bottom").innerHTML='<p class="warn" id="et-warn"></p><details id="et-h"><summary id="et-hs"></summary><ul id="et-hl"></ul><p class="mu" id="et-hn"></p><button id="et-hc"></button></details><footer><div id="et-ct"></div><div class="badges"><span>Free</span><span>Safe</span><span>Ad Free</span></div></footer>';
const close=()=>{$("et-menu").hidden=true;$("et-tb").setAttribute("aria-expanded","false")};
$("et-tb").onclick=e=>{e.stopPropagation();const o=$("et-menu").hidden;$("et-menu").hidden=!o;$("et-tb").setAttribute("aria-expanded",String(o))};
document.addEventListener("click",close);
document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
$("et-lang").onchange=e=>{st.lang=e.target.value;save("lang",st.lang);render()};
$("et-cty").onchange=e=>{st.country=e.target.value;save("country",st.country);render()};
$("et-cur").onchange=e=>{st.cur=e.target.value;save("cur",st.cur);render()};
$("et-loc").onclick=()=>locate(true);
$("et-hc").onclick=()=>{hist=[];try{sessionStorage.removeItem(hk())}catch(e){}listH()}}
function render(){
const a=document.activeElement&&document.activeElement.id;
document.documentElement.lang=st.lang;document.documentElement.dir=RTL.includes(st.lang)?"rtl":"ltr";
$("et-lang").innerHTML=Object.keys(CS).map(c=>'<option value="'+c+'">'+dn(c,"language",c)+'</option>').join("");$("et-lang").value=st.lang;
$("et-cty").innerHTML=CTRY.map(c=>'<option value="'+c[0]+'">'+(c[0]==="INT"?dn("001","region"):dn(c[0],"region"))+'</option>').join("");$("et-cty").value=st.country;
$("et-cur").innerHTML=CUR.map(c=>'<option value="'+c+'">'+c+" – "+dn(c,"currency")+'</option>').join("");$("et-cur").value=st.cur;
$("et-lc").textContent=cs(7);$("et-lu").textContent=cs(0);$("et-cur").parentElement.hidden=tool.currency===false;$("et-loc").textContent="📍 "+cs(5);
$("et-tb").textContent=(TL[st.lang]||TL.en)+" ▾";
$("et-menu").innerHTML=TOOLS.map(t=>'<a href="'+t[0]+'"'+(t[0]===tool.file?" aria-current=page":"")+">"+(t[1][st.lang]||t[1].en)+"</a>").join("");
$("et-gs").textContent=cs(4);$("et-gt").textContent=tool.guide();
$("et-warn").hidden=!tool.warn;if(tool.warn)$("et-warn").textContent="⚠ "+tool.warn();
$("et-h").hidden=tool.history===false;$("et-hn").textContent=cs(3);$("et-hc").textContent=cs(2);listH();
const k=[];if(CONTACT.gmail){const a1=document.createElement("a");a1.href="mailto:"+CONTACT.gmail;a1.textContent="Gmail";k.push(a1)}
if(CONTACT.facebook){const a2=document.createElement("a");a2.href=CONTACT.facebook;a2.rel="noopener";a2.textContent="Facebook";k.push(a2)}
$("et-ct").replaceChildren(...k);
tool.labels();
if(a&&$(a))$(a).focus()}
window.ET={state:st,money,fmt,log,logNow,tools:TOOLS,title:t=>t[1][st.lang]||t[1].en,
t:k=>tt(tool.S,k),t2:k=>tt(tool.S2,k),
start(cfg){tool=cfg;build();loadH();render();autoLocate()}};
})();
