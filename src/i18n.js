import i18n from "i18next";
import {initReactI18next} from "react-i18next";

i18n.use(initReactI18next).init({
    // we init with resources
    resources: {
      en: {
        translations: {
          Introduction: "Introduction",
          "is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop":
            "is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop",
          "Plugins to detect the user language":
            "Plugins to detect the user language",
          "Plugins to load translations": "Plugins to load translations",
          "Optionally cache the translations":
            "Optionally cache the translations",
          Advantages: "Advantages",
          "Flexibility to use other packages": "Flexibility to use other packages"
        }
      },
      jap: {
        translations: {
          Introduction: "前書き",
          "is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop":
            "Webからモバイルとデスクトップに製品をローカライズするための完全なソリューションを提供する国際化フレームワークです",
          "Plugins to detect the user language":
            "ユーザー言語を検出するためのプラグイン",
          "Plugins to load translations": "翻訳をロードするためのプラグイン",
          "Optionally cache the translations": "必要に応じて翻訳をキャッシュする",
          Advantages: "利点",
          "Flexibility to use other packages": "他のパッケージを使用する柔軟性"
        }
      },
  
      hin: {
        translations: {
          Introduction: "प्रस्तावना एक अंतर्राष्ट्रीयकरण - ढांचा है जो आपके उत्पाद को वेब से मोबाइल और डे  स्थानांतरित करने ", "is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop":
            "एक अंतर्राष्ट्रीयकरण - ढांचा है जो आपके उत्पाद को वेब से मोबाइल और डेस्कटॉप पर स्थानांतरित करने का एक संपूर्ण समाधान प्रदान करता है",
          "Plugins to detect the user language":
            "उपयोगकर्ता भाषा का पता लगाने के लिए प्लगइन्स",
          "Plugins to load translations": "अनुवाद लोड करने के लिए प्लगइन्स",
          "Optionally cache the translations": "वैकल्पिक रूप से अनुवाद कैश करें",
          Advantages: "लाभ",
          "Flexibility to use other packages":
            "अन्य पैकेजों का उपयोग करने के लिए लचीलापन",
            schoolnameline1:"आंतरभारती शिक्षण मंडळ इचलकरंजी संचलित",
            schoolnameline2:"माध्यमिक विद्यालय सावर्डे - सडोली दुमाला ता. करवीर",
            schoolnameline3:"वार्षिक परीक्षा निकाल पत्रक सन २०१९ -२०२०",
            studentnamelabel:"विद्यार्थी नाव -",
            9140:"पारखे करण नेताजी",
            class:"इयता : नववी ",
            division:" तुकडी : -      ह. क्र.",
            sub:"विषय",
            lan:"भाषा",
            scimat:"गणित- विज्ञान",
            socialsci:"सामाजिक शास्त्रे",
            sub1:"शारिरीक शिक्षण",
            sub2:"स्व-विकास व कलारसास्वाद",
            sub3:"एम. सी. सी. / स्काऊट गाईड/ एन. सी.सी./ आर. एस. पी.व सी. डी. /सीकैडेटकोअर /संरक्षण शात्र/व्यवसाय मार्गदर्शन",
            total:"एकूण",
            grade:"श्रेणी",
            gradef:"शेरा",
            marathi:"मराठी",
            hindi:"हिंदी संस्कृत",
            english:"इंग्रजी",
            math:"गणित",
            sci:"विज्ञान",
            finaltotal:"एकूण गुण",
            grademark:"100/श्रेणी",
            obtainedmark:"मिळालेले गुण",
            a:"अ",
            pass:"उत्तीर्ण",
            9141:"पोवार करण सर्जेराव",
            note:"टीप  : -  अनुउतीर्ण विद्यार्थ्याने / विद्यार्थीनीने पुढील वर्षी आपले नाव हजेरीपत्रकावर ठेवणे विषयी १५ ते २० मे पूर्वी शाळेला कळविणे आवश्यक आहे.  अन्यथा त्याचे / तिचे नाव हजेरी पत्रकात जून २०२० मध्ये येणार नाही. शाळा सुरु तारीख ..../...../२०२०",
            classteacher:"वर्गशिक्षक",
            headmaster:"मुख्याध्यापक"  


           

            



        }
      },
  
      ger: {
        translations: {
          Introduction: "Einführung",
          "is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop":
            "ist ein Internationalisierungs-Framework, das eine Komplettlösung für die Lokalisierung Ihres Produkts vom Web auf das Handy und den Desktop bietet",
          "Plugins to detect the user language":
            "Plugins zur Erkennung der Benutzersprache",
          "Plugins to load translations": "Plugins zum Laden von Übersetzungen",
          "Optionally cache the translations":
            "Optional die Übersetzungen zwischenspeichern",
          Advantages: "Vorteile",
          "Flexibility to use other packages":
            "Flexibilität zur Verwendung anderer Pakete"
        }
      },
      fre: {
        translations: {
          Introduction: "Introduction",
          "is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop":
            "est un cadre d'internationalisation qui offre une solution complète pour localiser votre produit du Web au mobile et au bureau",
          "Plugins to detect the user language":
            "Plugins pour détecter la langue de l'utilisateur",
          "Plugins to load translations": "Plugins pour charger les traductions",
          "Optionally cache the translations":
            "Cachez éventuellement les traductions",
          Advantages: "Les avantages",
          "Flexibility to use other packages":
            "Flexibilité d'utiliser d'autres packages"
        }
      }
    },
    lng: "hin",
    debug: true,
  
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
  
  export default i18n;