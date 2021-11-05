// typing as printer on webpage
import Typed from './typed.js';


window.onload = function() {
    fabarPointer(); // mouse pointer for fabars
    navBarDisplayAlter(); //  navbar display or not
    typedText(); // To type the text in About of freelancer and web developer
    skillProgressBarDynamic(); // dynamic skill progress bar
    swiperButtonDisplay(); // swiper button js for display
    swiperSlideShow(); // swiper slideshow in portofilio
    experienceDynamic(); // experience discription presents with animation
    educationDynamic() //education words present with animation

}

//-------------------typing function
function typedText() {
    var typed = new Typed('#about .typedtext', {
        strings: ["Freelancer", "Web developer."],
        typeSpeed: 100,
        loop: true,
        showCursor: false,
    });
}

//------------------mouse pointer for fabars
function fabarPointer() {

    let faBars = document.querySelector(".fa-bars-cursor");
    faBars.addEventListener('mouseenter', function() {
        faBars.style.cursor = "pointer";
    })
}

// -----------------navbar display or not

function navBarDisplayAlter() {
    let navBar = document.querySelector(".nav-bar");
    let faBars = document.querySelector(".fa-bars-cursor");
    let navLastSpanI = document.querySelector('.nav span:last-child i');
    var flag = true;
    faBars.addEventListener('click', function() {
        if (flag == true) {
            navBar.style.display = "flex";
            navBar.style.alignItems = "center";
            // navLastSpan.innerHTML= '<i class = "fa fa-times fa-bars-cursor"></i>';
            flag = false;
            navLastSpanI.setAttribute('class', "fa fa-times fa-bars-cursor");

        } else {
            navBar.style.display = "none";
            // navLastSpan.innerHTML= '<i class = "fa fa-bars fa-bars-cursor"></i>';
            navLastSpanI.setAttribute('class', "fa  fa-bars fa-bars-cursor");
            flag = true;
        }
    });
}

//-----------------swiper button display or not in portofilio

function swiperButtonDisplay() {

    let swiperButtonL = document.querySelector(".swiper-button-l");
    let swiperButtonR = document.querySelector(".swiper-button-r");
    let slideShow = document.querySelector(".slideshow");

    slideShow.addEventListener('mouseenter', function() {
        swiperButtonL.style.display = "block";
        swiperButtonR.style.display = "block";

    });
    slideShow.addEventListener('mouseleave', function() {
        swiperButtonL.style.display = "none";
        swiperButtonR.style.display = "none";

    });
}
//-----------------------swiper slide shown in portofilio

function swiperSlideShow() {

    var myswiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        grabCursor: true, // cursor changes to hand
        mousewheel: true, //-----------------wheel control
        //----------------autoplay part start
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        //--------------autoplay part end
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

//-----------------Skill progress bar dynamic

function skillProgressBarDynamic() {
    var solidSkillHtml = document.querySelector('.solid-skill-html');
    var solidSkillJs = document.querySelector('#skill .solid-skill-js');
    var solidSkillJquery = document.querySelector("#skill .solid-skill-jquery");
    var solidSkillNode = document.querySelector("#skill .solid-skill-node");
    var solidSkillWp = document.querySelector("#skill .solid-skill-wp");
    var solidSkillJava = document.querySelector("#skill .solid-skill-java-shell");

    var skills = document.querySelector('#skill');
    var skillTop = skills.offsetTop;

    document.addEventListener("scroll", function() {
        if (window.pageYOffset >= 0.5 * skill.offsetTop) {
            solidSkillHtml.style.width = "90%";
            solidSkillJs.style.width = "85%";
            solidSkillJquery.style.width = "85%";
            solidSkillNode.style.width = "80%";
            solidSkillWp.style.width = "80%";
            solidSkillJava.style.width = "80%";
        }
    });
}

//------------------experience dyamic

function experienceDynamic() {
    var expert = document.querySelector("#experiences .expert");
    var expertBox1 = document.querySelector(".expert-box1");
    var expertBox2 = document.querySelector(".expert-box2");
    var expertBox3 = document.querySelector(".expert-box3");
    var experiTop = experiences.offsetTop;
    document.addEventListener("scroll", function() {
        if (window.pageYOffset >= experiTop) {
            expertBox1.style.opacity = "1.0";
            expertBox2.style.opacity = "1.0";
            expertBox3.style.opacity = "1.0";
        }
    })
}

//-----------------education Dynamic
function educationDynamic() {
    var education = document.querySelector("#education");
    var eduTop = education.offsetTop;
    var qualicerliBoxs = document.querySelectorAll('.quanlicerli-box');

    // document scroll event
    document.addEventListener("scroll", function() {
        if (window.pageYOffset >= eduTop) {
            for (let i = 0; i < qualicerliBoxs.length; i++) {
                for (let j = 0; j < qualicerliBoxs[i].children.length; j++) {
                    qualicerliBoxs[i].children[j].style.opacity = "1.0";
                    qualicerliBoxs[i].children[j].style.marginLeft = "0rem";
                    qualicerliBoxs[i].children[j].style.marginRight = "0rem";
                }
            }
        }
    });

}