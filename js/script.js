// function hideMenu() {
//             var x = document.getElementById("myTopnav");
//             if (x.className === "topnav") {
//                 x.className += " responsive";
//             } else {
//                 x.className = "topnav";
//             }
//         }



// Change interior image
function changeFloor(x){
    var imageContainer = document.getElementById("floor__img");
    switch (x) {
        case 1:
        imageContainer.src = "./assets/img2.jpg";
        document.getElementById("floor__button1").className = "button button_size_small button_active";
        document.getElementById("floor__button2").className = "button button_size_small button_border_black";
        document.getElementById("floor__button3").className = "button button_size_small button_border_black";
        document.getElementById("floor__button4").className = "button button_size_small button_border_black";
        break;
    case 2:
        imageContainer.src = "./assets/f2.jpg";
        document.getElementById("floor__button1").className = "button button_size_small button_border_black";
        document.getElementById("floor__button2").className = "button button_size_small button_active";
        document.getElementById("floor__button3").className = "button button_size_small button_border_black";
        document.getElementById("floor__button4").className = "button button_size_small button_border_black";
        break;
    case 3:
        imageContainer.src = "./assets/f3.jpg";
        document.getElementById("floor__button1").className = "button button_size_small button_border_black";
        document.getElementById("floor__button2").className = "button button_size_small button_border_black";
        document.getElementById("floor__button3").className = "button button_size_small button_active";
        document.getElementById("floor__button4").className = "button button_size_small button_border_black";
        break;
    case 4:
        imageContainer.src = "./assets/f4.jpg";
        document.getElementById("floor__button1").className = "button button_size_small button_border_black";
        document.getElementById("floor__button2").className = "button button_size_small button_border_black";
        document.getElementById("floor__button3").className = "button button_size_small button_border_black";
        document.getElementById("floor__button4").className = "button button_size_small button_active";
        break;
    default:
        break;
    }
}

function sliderMove(x) {
    
}



// Change page language
const langArr = {
    "about-us" : {
        "en": "About us",
        "ua": "Про нас"
    } ,
    "interior" : {
        "en": "Interior",
        "ua": "Інтер'єр"
    } ,
    "types" : {
        "en": "Types",
        "ua": "Варіанти"
    } ,
    "comments": {
        "en": "Comments",
        "ua": "Відгуки"
    } ,
    "call" : {
        "en": "Make A Call",
        "ua": "Зателефонувати"
    },
    "fantastic-journey" : {
        "en": "It’s gonna be a <br>fantastic journey...",
        "ua": "Це буде <br>фантастична подорож..."
    },
    "header-description" : {
        "en": "Lighthouse Hotel it’s a place where you can relax between ocean waves",
        "ua": "Lighthouse Hotel – це місце, де можна відпочити серед океанських хвиль"
    },
    "make-order" : {
        "en": "Make Order",
        "ua": "Замовити"
    },
    "about-us-description" : {
        "en": "The vast majority of mankind, when thinking about vacation, imagines the beaches of Egypt, the hotels of Greece, the resorts of various southern and sunny countries. However, the stormy resort life does not attract everyone. For lovers of peace and quiet, a hotel located in an old lighthouse in the middle of the North Stormy Sea is perfect.",
        "ua": "Переважна більшість людства, думаючи про відпустку, уявляє собі пляжі Єгипту, готелі Греції, курорти різних південних і сонячних країн. Однак бурхливе курортне життя приваблює не всіх. Для любителів тиші і спокою чудово підійде готель, розташований на старому маяку посеред Північного Бурхливого моря."
    },
    "interior-description" : {
        "en": "The interiors inside the hotel are the same as they were a hundred years ago, when it was a lighthouse. Hotel \"Roter Zand\" can accommodate six people at the same time. Life is characterized by severe sophistication: canned food, bread and vegetables, a little fruit and the complete absence of any alcohol are added to the Spartan interiors. Such moderation is vital here, since seventy slippery, worn-out steps lead to the toilet.",
        "ua": "Інтер'єри всередині готелю такі ж, як сто років тому, коли це був маяк. Готель «Roter Zand» може одночасно прийняти шість осіб. Життя відрізняється суворою вишуканістю: до спартанських інтер'єрів додаються консерви, хліб і овочі, трохи фруктів і повна відсутність будь-якого алкоголю. Така поміркованість тут життєво необхідна, адже до туалету ведуть сімдесят слизьких, затертих сходинок."
    },
    "floor" : {
        "en" : "Floor",
        "ua" : "Поверх"
    },
    "coastal-lighthouse" : {
        "en" : "coastal lighthouse",
        "ua" : "береговий маяк"
    },
    "more-info" : {
        "en" : "More Info",
        "ua" : "Детальніше"
    },
    "square-meters" : {
        "en" : "square meters",
        "ua" : "квадратних метрів"
    },
    "commission-approved" : {
        "en" : "Commission approved",
        "ua" : "Затверджено комісією"
    },
    "places-for" : {
        "en" : "Places for",
        "ua" : "Місця для"
    },
    "persons" : {
        "en" : "persons",
        "ua" : "осіб"
    },
    "lighthouse-on-the-island" : {
        "en" : "lighthouse on the island",
        "ua" : "маяк на острові"
    },
    "rock-lighthouse" : {
        "en" : "rock lighthouse",
        "ua" : "Маяк на скелях"
    },
    "start-vocation" : {
        "en" : "Start Vocation",
        "ua" : "Почати подорож"
    },
    "leave-comment" : {
        "en" : "Leave Comment",
        "ua" : "Залишити Відгук"
    },
    "stay-in-touch" : {
        "en" : "Stay In Touch",
        "ua" : "Залишайся на зв'язку"
    },
    "send" : {
        "en" : "Send",
        "ua" : "Надіслати"
    },
    "send-email" : {
        "en" : "Send your email",
        "ua" : "Надішліть Ваш email"
    }

}

function translatePage(x) {
    translationList = document.querySelectorAll('.lang');
    translationPlaceholderList = document.querySelectorAll('.lang-placeholder');
    // console.log(translationList);
    var lang = "en";
    switch (x) {
        case "ua":
            document.getElementById("en").className = "menu__link menu__link_second-language";
            document.getElementById("ua").className = "menu__link";
            lang = "ua";
            break;
        case "en":
            document.getElementById("ua").className = "menu__link menu__link_second-language";
            document.getElementById("en").className = "menu__link";
            break;
        default:
            break;
    }
    // console.log(lang);
 
    for( var i = 0; i < translationList.length; i++) {
        var key = translationList[i].getAttribute('key');
        // console.log(key);
        translationList[i].innerHTML = langArr[key][lang];
    }

    for( var i = 0; i < translationPlaceholderList.length; i++) {
        var key = translationPlaceholderList[i].getAttribute('key');
        // console.log(key);
        translationPlaceholderList[i].placeholder = langArr[key][lang];
    }
}