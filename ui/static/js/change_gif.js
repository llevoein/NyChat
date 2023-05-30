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