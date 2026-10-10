// To add a recording, paste the link (or a path like "audio/tuesday-01.m4a")
// into audio: "" for that section. Empty ones show as "Not yet".
// Use .m4a or .mp3, iPhones can't play Telegram .ogg voice notes.

window.DEBRE_BISRAT = {

  // telegram channel link (optional)
  telegram: "",

  // class times, day: 0 = Sunday ... 6 = Saturday
  classes: [
    { day: 2, start: "10:00", end: "12:00" },  // Tuesday
    { day: 4, start: "10:00", end: "12:00" },  // Thursday
    { day: 6, start: "11:00", end: "13:00" },  // Saturday
  ],

  days: {

    monday: { gz: "ዘሰኑይ", am: "ሰኞ", en: "Monday", tr: "Ze-Senuy", sections: [
      { gz: "ፈቀደ እግዚእ",        tr: "Feqede Igzee",       audio: "https://www.image2url.com/r2/default/audio/1781033315953-fc006a65-038c-417c-98c0-c156bcf26001.m4a" },
      { gz: "ሠረቀ በሥጋ",          tr: "Sereqe Besiga",      audio: "https://www.image2url.com/r2/default/audio/1781033396388-a809cf9f-2a52-46b4-97c0-3191e049ee36.m4a" },
      { gz: "ኢየሱስ ክርስቶስ",      tr: "Eyesus Kristos",     audio: "https://www.image2url.com/r2/default/audio/1781034863963-88968044-4299-447a-860f-6d8283c3e057.m4a" },
      { gz: "ርእየ ኢሳይያስ",       tr: "Ri'ye Isaias",       audio: "https://www.image2url.com/r2/default/audio/1781047921143-cd0c3451-8314-4d11-84b2-bd21f4dd72f2.m4a" },
      { gz: "ተፈሣሕ ወተሐሠይ",      tr: "Tefesah We'tithasey", audio: "https://www.image2url.com/r2/default/audio/1781048061606-f9450aa3-cfab-42d0-8e3f-6ab58c11c687.m4a" },
      { gz: "ዘሀሎ ወይሄሉ",         tr: "Ze'Halo Weyi'haelu", audio: "https://www.image2url.com/r2/default/audio/1781404657994-5b39effe-6480-4212-b04c-38366a8afefb.m4a" },
      { gz: "ተፈሥሒ ኦ ቤተ ልሔም",   tr: "Tefeshi O Bete Lihem", audio: "" },
      { gz: "ትትፌሣሕ ወትትሐሠይ",   tr: "Titfesah Wetithasey", audio: "" },
      { gz: "ብርሃን ዘበአማን",       tr: "Birhan Zebe'aman",   audio: "" },
    ]},

    tuesday: { gz: "ዘሠሉስ", am: "ማክሰኞ", en: "Tuesday", tr: "Ze-Selus", sections: [
      { gz: "አክሊለ ምክሕነ",        tr: "Aklile Mikhine",     audio: "" },
      { gz: "እስመ በፈቃዱ",         tr: "Isme Befeqadu",      audio: "" },
      { gz: "አንቲ ውእቱ ዕፅ",       tr: "Anti We'itu Ets",    audio: "" },
      { gz: "አንቲ ውእቱ ገራህት",     tr: "Anti We'itu Gerahit", audio: "" },
      { gz: "ተፈሥሒ ኦ ወላዲተ እግዚእ", tr: "Tefeshi O Weladite Igzee", audio: "" },
      { gz: "ተፈሥሒ እስመ ድልወ",     tr: "Tefeshi Isme Dilwe", audio: "" },
      { gz: "ኦ ድንግል",            tr: "O Dingil",           audio: "" },
      { gz: "ቃለ አብ ሕያው",         tr: "Qale Ab Hiyaw",      audio: "" },
      { gz: "ውእቱኬ",              tr: "We'ituke",           audio: "" },
      { gz: "ዕበያ ለድንግል",         tr: "Ibeya Ledingil",     audio: "" },
      { gz: "ዘውእቱ ዕብን",          tr: "Zewe'itu Ibn",       audio: "" },
      { gz: "ኮንኪ ዐፅቀ",           tr: "Konki Atsqe",        audio: "" },
      { gz: "አንቲ እሙ",            tr: "Anti Imu",           audio: "" },
      { gz: "አይ ልሳን",            tr: "Ay Lisan",           audio: "" },
      { gz: "ተፈሥሒ ኦ ማርያም እም ወአመት", tr: "Tefeshi O Mariam Im We'amet", audio: "" },
    ]},

    wednesday: { gz: "ዘረቡዕ", am: "ረቡዕ", en: "Wednesday", tr: "Ze-Rebu", sections: [
      { gz: "ኵሉ ሠራዊተ ሰማያት",    tr: "Kulu Serawite Semayat", audio: "" },
      { gz: "ኵሉ ትውልድ",          tr: "Kulu Tiwlid",        audio: "" },
      { gz: "አንቲ ዘበአማን",        tr: "Anti Zebe'aman",     audio: "" },
      { gz: "ረከብኪ ጸጋ",          tr: "Rekebki Tsega",      audio: "" },
      { gz: "ግብረ ድንግል",         tr: "Gibre Dingil",       audio: "" },
      { gz: "የዐቢ ክብራ",          tr: "Ye'abi Kibra",       audio: "" },
      { gz: "ሕዝቅኤል ነቢይ",        tr: "Hizqi'el Nebiy",     audio: "" },
      { gz: "ኆኅትሰ",             tr: "Hohitse",            audio: "" },
    ]},

    thursday: { gz: "ዘሐሙስ", am: "ሐሙስ", en: "Thursday", tr: "Ze-Hamus", sections: [
      { gz: "ዕፀ እንተ ርእየ",        tr: "Itse Inte Ri'ye",    audio: "" },
      { gz: "ናዓብየኪ ኵልነ",        tr: "Na'abiyeki Kulline", audio: "" },
      { gz: "ኦ ዝ መንክር ወዕፁብ",     tr: "O Zi Menkir We'itsub", audio: "" },
      { gz: "ኦ ዝ መንክር ነሥአ",      tr: "O Zi Menkir Ne'se'a", audio: "" },
      { gz: "መሐለ እግዚአብሔር",      tr: "Mehale Igzi'abher",  audio: "" },
      { gz: "ዳዊት ዘነግሠ",         tr: "Dawit Zenegse",      audio: "" },
      { gz: "አሐዱ አካል",          tr: "Ahadu Akal",         audio: "" },
    ]},

    friday: { gz: "ዘዓርብ", am: "ዓርብ", en: "Friday", tr: "Ze-Arb", sections: [
      { gz: "ቡርክት አንቲ እምአንስት",  tr: "Burkit Anti Im'anist", audio: "" },
      { gz: "ተዐብዪ እምሰማይ",       tr: "Te'abiyi Imsemay",   audio: "" },
      { gz: "ምክሖን ለደናግል",       tr: "Mikhon Ledenagil",   audio: "" },
      { gz: "ሙዳየ ዕፍረት",         tr: "Mudaye Ifret",       audio: "" },
      { gz: "ማርያም ንጽሕት",        tr: "Mariam Nitsiht",     audio: "" },
      { gz: "ትጸርሕ",             tr: "Titserih",           audio: "" },
    ]},

    saturday: { gz: "ዘቀዳሚት", am: "ቅዳሜ", en: "Saturday", tr: "Ze-Qedamit", sections: [
      { gz: "ንጽሕት ወብርህት",       tr: "Nitsiht Webirhit",   audio: "" },
      { gz: "ናስተበፅዕ",           tr: "Nastebetsi'",        audio: "" },
      { gz: "ከመ ከብካብ",          tr: "Keme Kebkab",        audio: "" },
      { gz: "ዘመድ",              tr: "Zemed",              audio: "" },
      { gz: "ኮንኪ",              tr: "Konki",              audio: "" },
      { gz: "ደብተራ",             tr: "Debtera",            audio: "" },
      { gz: "ተሰመይኪ እመ",          tr: "Tesemeyki Ime",      audio: "" },
      { gz: "ሰዋስው",             tr: "Sewasiw",            audio: "" },
      { gz: "ናሁ እግዚእ",          tr: "Nahu Igzee",         audio: "" },
      { gz: "ተፈሥሒ ኦ ምልዕተ ጸጋ",   tr: "Tefeshi O Mil'ite Tsega", audio: "" },
    ]},

    sunday: { gz: "ዘሰንበት", am: "እሑድ", en: "Sunday", tr: "Ze-Senbet", sections: [
      { gz: "ተሰመይኪ ፍቅርተ",       tr: "Tesemeyki Fiqirte",  audio: "" },
      { gz: "ታቦት",              tr: "Tabot",              audio: "" },
      { gz: "መቅደስ",             tr: "Meqdes",             audio: "" },
      { gz: "መሶበ ወርቅ",          tr: "Mesobe Werq",        audio: "" },
      { gz: "ተቅዋም",             tr: "Teqwam",             audio: "" },
      { gz: "ማዕጠንት",            tr: "Ma'itent",           audio: "" },
      { gz: "ርግብ ሠናይት",         tr: "Rigb Senayt",        audio: "" },
      { gz: "በትረ አሮን",          tr: "Betre Aron",         audio: "" },
      { gz: "ለኪ ይደሉ",           tr: "Leki Yidelu",        audio: "" },
    ]},
  },
};
