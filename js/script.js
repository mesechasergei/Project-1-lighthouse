function hideMenu() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }

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