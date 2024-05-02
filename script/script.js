function toggleQRCodeVisibility() {
    let qrCode = document.getElementById('qrcode');
    if (qrCode.style.display === 'none') {
        qrCode.style.display = 'block';
        
      } else {
        qrCode.style.display = 'none';
      }
    };
  
window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;
  let toggleButton = document.getElementById("toggleButton");

  if (scrollTop > 2000 && this.window.innerWidth > 1328) {
      toggleButton.style.display = "block";
  } else  {  
      toggleButton.style.display = "none";
  }
});

window.addEventListener("scroll", function () {
    let scrollTop = document.documentElement.scrollTop;
    let qrCode = document.getElementById("qrcode");

    if (scrollTop < 2000 || this.window.innerWidth < 1328) {
        qrCode.style.display = "none";
    } 
});
