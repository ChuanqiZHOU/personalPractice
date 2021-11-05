// import Typed from './js/typed.min.js';
import Typed from './js/typed.js';
//window.addEventListener('load', function() {
// var typed = new Typed('.app', {
//     strings: ["First sentence.", "Second sentence."],
//     typeSpeed: 30,
//     loop: true,
//     showCursor: false,
// });
typedText();
//})


function typedText() {
    var typed = new Typed('.app', {
        strings: ["Freelancer", "Web developer."],
        typeSpeed: 100,
        loop: true,
        showCursor: false,
    });
}