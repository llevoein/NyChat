/*var body_page = $("body")
var backgrounds = new Array(
    "url(../img/gifs/1.gif)",
    "url(../img/gifs/2.gif)",
    "url(../img/gifs/3.gif)",
    "url(../img/gifs/4.gif)",
    "url(../img/gifs/5.gif)",
    "url(../img/gifs/6.gif)",
    "url(../img/gifs/7.gif)",
    "url(../img/gifs/8.gif)",
    "url(../img/gifs/9.gif)",
    "url(../img/gifs/10.gif)",
    "url(../img/gifs/11.gif)",
    "url(../img/gifs/12.gif)",
);
var current = 0;

function nextBackground() {
    

body_page.css(
"background",
backgrounds[current = ++current % backgrounds.length]
);

setTimeout(nextBackground, 10000);
}

console.log(backgrounds[0])
setTimeout(nextBackground, 10000);
body_page.css("background", backgrounds[0]);

*/

/*var url = ["../img/gifs/1.gif",
"../img/gifs/2.gif",
"../img/gifs/3.gif",
"../img/gifs/4.gif",
"../img/gifs/5.gif",
"../img/gifs/6.gif",
"../img/gifs/7.gif",
"../img/gifs/8.gif",
"../img/gifs/9.gif",
"../img/gifs/10.gif",
"../img/gifs/11.gif",
"../img/gifs/12.gif",];


curentImageIndex = 0;
setInterval(function(){ 
console.log(url[curentImageIndex])
var p = $('body');
p.css("background-image","url("+url[curentImageIndex++] + ")");
if(curentImageIndex>= url.length){curentImageIndex = 0}
}, 1000);*/

const images = [
    "static/img/gifs/1.gif",
    "static/img/gifs/2.gif",
    "static/img/gifs/3.gif",
    "static/img/gifs/4.gif",
    "static/img/gifs/5.gif",
    "static/img/gifs/6.gif",
    "static/img/gifs/7.gif",
    "static/img/gifs/8.gif",
    "static/img/gifs/9.gif",
    "static/img/gifs/10.gif",
    "static/img/gifs/11.gif",
    "static/img/gifs/12.gif"
  ];
  
  let currentImageIndex = 1;
  
  function changeBackgroundImage() {
    document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  
  setInterval(changeBackgroundImage, 10000);