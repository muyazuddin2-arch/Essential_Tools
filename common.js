/* Essential Tools: shared engine (loaded by every tool) */
(function(){
"use strict";
const $=id=>document.getElementById(id);
/* ===== OWNER SETTINGS: edit here once, it applies to every tool ===== */
const CONTACT={gmail:"",facebook:""}; // e.g. gmail:"yourname@gmail.com", facebook:"https://facebook.com/yourpage"
const TOOLS=[["emi.html","EMI Calculator"]]; // new tool: add one line like ["qr.html","QR Code"]
const TL={en:"Tools",bn:"টুলস",hi:"टूल्स",ur:"ٹولز",ar:"الأدوات",fa:"ابزارها",tr:"Araçlar",zh:"工具",ja:"ツール",ko:"도구",ru:"Инструменты",es:"Herramientas",fr:"Outils",de:"Werkzeuge",pt:"Ferramentas",it:"Strumenti",nl:"Hulpmiddelen",pl:"Narzędzia",uk:"Інструменти",id:"Alat",ms:"Alat",th:"เครื่องมือ",vi:"Công cụ",ta:"கருவிகள்",te:"సాధనాలు",mr:"साधने",ne:"उपकरणहरू",si:"මෙවලම්",sw:"Zana",he:"כלים",el:"Εργαλεία",sv:"Verktyg"};

const CS={
en:"Currency|History|Clear history|Erased when you leave this page.|User guide|Use my location|Location unavailable. Using International settings.",
bn:"মুদ্রা|ইতিহাস|ইতিহাস মুছুন|এই পেজ ছেড়ে গেলে মুছে যাবে।|ব্যবহারের নির্দেশিকা|আমার লোকেশন ব্যবহার করুন|লোকেশন পাওয়া যায়নি। আন্তর্জাতিক সেটিং ব্যবহার হচ্ছে।",
hi:"मुद्रा|इतिहास|इतिहास साफ़ करें|इस पेज से बाहर जाने पर मिट जाएगा।|उपयोग गाइड|मेरा स्थान उपयोग करें|स्थान उपलब्ध नहीं। अंतरराष्ट्रीय सेटिंग उपयोग हो रही है।",
ur:"کرنسی|ہسٹری|ہسٹری صاف کریں|اس صفحے سے نکلنے پر مٹ جائے گی۔|استعمال کی رہنمائی|میرا مقام استعمال کریں|مقام دستیاب نہیں۔ بین الاقوامی ترتیبات استعمال ہو رہی ہیں۔",
ar:"العملة|السجل|مسح السجل|يُحذف عند مغادرة هذه الصفحة.|دليل الاستخدام|استخدم موقعي|الموقع غير متاح. تُستخدم الإعدادات الدولية.",
fa:"ارز|تاریخچه|پاک کردن تاریخچه|با ترک این صفحه پاک می‌شود.|راهنمای استفاده|استفاده از موقعیت من|موقعیت در دسترس نیست. تنظیمات بین‌المللی استفاده می‌شود.",
tr:"Para birimi|Geçmiş|Geçmişi temizle|Bu sayfadan ayrılınca silinir.|Kullanım kılavuzu|Konumumu kullan|Konum alınamadı. Uluslararası ayarlar kullanılıyor.",
zh:"货币|历史记录|清除历史|离开此页面后将被清除。|使用指南|使用我的位置|无法获取位置，使用国际通用设置。",
ja:"通貨|履歴|履歴を消去|このページを離れると削除されます。|使い方ガイド|現在地を使う|位置情報を取得できません。国際標準の設定を使用します。",
ko:"통화|기록|기록 지우기|이 페이지를 떠나면 삭제됩니다.|사용 안내|내 위치 사용|위치를 사용할 수 없습니다. 국제 기본 설정을 사용합니다.",
ru:"Валюта|История|Очистить историю|Удаляется при выходе со страницы.|Руководство|Использовать моё местоположение|Местоположение недоступно. Используются международные настройки.",
es:"Moneda|Historial|Borrar historial|Se borra al salir de esta página.|Guía de uso|Usar mi ubicación|Ubicación no disponible. Se usa la configuración internacional.",
fr:"Devise|Historique|Effacer l’historique|Effacé quand vous quittez cette page.|Guide d’utilisation|Utiliser ma position|Position indisponible. Paramètres internationaux utilisés.",
de:"Währung|Verlauf|Verlauf löschen|Wird beim Verlassen der Seite gelöscht.|Anleitung|Meinen Standort verwenden|Standort nicht verfügbar. Internationale Einstellungen werden verwendet.",
pt:"Moeda|Histórico|Limpar histórico|Apagado ao sair desta página.|Guia de uso|Usar minha localização|Localização indisponível. Usando configurações internacionais.",
it:"Valuta|Cronologia|Cancella cronologia|Viene cancellata quando lasci la pagina.|Guida all’uso|Usa la mia posizione|Posizione non disponibile. Uso le impostazioni internazionali.",
nl:"Valuta|Geschiedenis|Geschiedenis wissen|Wordt gewist als u deze pagina verlaat.|Gebruiksaanwijzing|Mijn locatie gebruiken|Locatie niet beschikbaar. Internationale instellingen worden gebruikt.",
pl:"Waluta|Historia|Wyczyść historię|Usuwane po opuszczeniu strony.|Instrukcja|Użyj mojej lokalizacji|Lokalizacja niedostępna. Używane są ustawienia międzynarodowe.",
uk:"Валюта|Історія|Очистити історію|Видаляється після виходу зі сторінки.|Інструкція|Використати моє місцезнаходження|Місцезнаходження недоступне. Використовуються міжнародні налаштування.",
id:"Mata uang|Riwayat|Hapus riwayat|Dihapus saat Anda meninggalkan halaman ini.|Panduan penggunaan|Gunakan lokasi saya|Lokasi tidak tersedia. Menggunakan pengaturan internasional.",
ms:"Mata wang|Sejarah|Padam sejarah|Dipadam apabila anda meninggalkan halaman ini.|Panduan pengguna|Guna lokasi saya|Lokasi tidak tersedia. Menggunakan tetapan antarabangsa.",
th:"สกุลเงิน|ประวัติ|ล้างประวัติ|จะถูกลบเมื่อคุณออกจากหน้านี้|คู่มือการใช้งาน|ใช้ตำแหน่งของฉัน|ไม่สามารถใช้ตำแหน่งได้ ใช้การตั้งค่าสากลแทน",
vi:"Tiền tệ|Lịch sử|Xóa lịch sử|Sẽ bị xóa khi bạn rời trang này.|Hướng dẫn sử dụng|Dùng vị trí của tôi|Không có vị trí. Đang dùng cài đặt quốc tế.",
ta:"நாணயம்|வரலாறு|வரலாற்றை அழி|இந்தப் பக்கத்தை விட்டு வெளியேறினால் அழிக்கப்படும்.|பயன்பாட்டு வழிகாட்டி|என் இருப்பிடத்தைப் பயன்படுத்து|இருப்பிடம் கிடைக்கவில்லை. சர்வதேச அமைப்புகள் பயன்படுத்தப்படுகின்றன.",
te:"కరెన్సీ|చరిత్ర|చరిత్రను తొలగించు|ఈ పేజీని వదిలితే తొలగించబడుతుంది.|వినియోగ మార్గదర్శి|నా స్థానాన్ని ఉపయోగించు|స్థానం అందుబాటులో లేదు. అంతర్జాతీయ సెట్టింగ్‌లు వాడుతున్నాం.",
mr:"चलन|इतिहास|इतिहास पुसा|हे पान सोडल्यावर पुसला जाईल.|वापर मार्गदर्शक|माझे स्थान वापरा|स्थान उपलब्ध नाही. आंतरराष्ट्रीय सेटिंग वापरत आहे.",
ne:"मुद्रा|इतिहास|इतिहास मेट्नुहोस्|यो पेज छोडेपछि मेटिन्छ।|प्रयोग निर्देशिका|मेरो स्थान प्रयोग गर्नुहोस्|स्थान उपलब्ध छैन। अन्तर्राष्ट्रिय सेटिङ प्रयोग भइरहेको छ।",
si:"මුදල්|ඉතිහාසය|ඉතිහාසය මකන්න|මෙම පිටුවෙන් ඉවත් වූ විට මැකේ.|භාවිත මාර්ගෝපදේශය|මගේ ස්ථානය භාවිතා කරන්න|ස්ථානය ලබාගත නොහැක. ජාත්‍යන්තර සැකසුම් භාවිතා වේ.",
sw:"Sarafu|Historia|Futa historia|Hufutwa ukiondoka kwenye ukurasa huu.|Mwongozo wa matumizi|Tumia eneo langu|Eneo halipatikani. Mipangilio ya kimataifa inatumika.",
he:"מטבע|היסטוריה|נקה היסטוריה|יימחק עם עזיבת הדף.|מדריך שימוש|השתמש במיקום שלי|המיקום אינו זמין. נעשה שימוש בהגדרות בינלאומיות.",
el:"Νόμισμα|Ιστορικό|Εκκαθάριση ιστορικού|Διαγράφεται όταν φύγετε από τη σελίδα.|Οδηγός χρήσης|Χρήση της τοποθεσίας μου|Η τοποθεσία δεν είναι διαθέσιμη. Χρησιμοποιούνται διεθνείς ρυθμίσεις.",
sv:"Valuta|Historik|Rensa historik|Raderas när du lämnar sidan.|Användarguide|Använd min plats|Plats ej tillgänglig. Internationella inställningar används."};

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
function log(text){clearTimeout(ht);ht=setTimeout(()=>{if(hist[0]===text)return;hist.unshift(text);hist=hist.slice(0,50);try{sessionStorage.setItem(hk(),JSON.stringify(hist))}catch(e){}listH()},1500)}
function build(){
$("et-top").innerHTML='<header><span class="brand">'+MARK+'Essential Tools</span><div class="tools"><button id="et-tb" aria-expanded="false" aria-controls="et-menu"></button><div class="menu" id="et-menu" hidden></div></div><select id="et-lang"></select></header>'+
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
$("et-lc").textContent=tool.ctry();$("et-lu").textContent=cs(0);$("et-loc").textContent="📍 "+cs(5);
$("et-tb").textContent=(TL[st.lang]||TL.en)+" ▾";
$("et-menu").innerHTML=TOOLS.map(t=>'<a href="'+t[0]+'"'+(t[0]===tool.file?" aria-current=page":"")+">"+(t[0]===tool.file?tt(tool.S,0):t[1])+"</a>").join("");
$("et-gs").textContent=cs(4);$("et-gt").textContent=tool.guide();
$("et-warn").textContent="⚠ "+tool.warn();
$("et-hn").textContent=cs(3);$("et-hc").textContent=cs(2);listH();
const k=[];if(CONTACT.gmail){const a1=document.createElement("a");a1.href="mailto:"+CONTACT.gmail;a1.textContent="Gmail";k.push(a1)}
if(CONTACT.facebook){const a2=document.createElement("a");a2.href=CONTACT.facebook;a2.rel="noopener";a2.textContent="Facebook";k.push(a2)}
$("et-ct").replaceChildren(...k);
tool.labels();
if(a&&$(a))$(a).focus()}
window.ET={state:st,money,log,
t:k=>tt(tool.S,k),t2:k=>tt(tool.S2,k),
start(cfg){tool=cfg;build();loadH();render();autoLocate()}};
})();
