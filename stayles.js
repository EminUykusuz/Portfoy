window.onscroll = function() {
    var header = document.getElementById("header");
  
    if (window.scrollY > 50) { // Sayfa 50px kayarsa
      header.classList.add("shrink"); // Navbar'ı küçült ve aşağıya kaydır
    } else {
      header.classList.remove("shrink"); // Navbar'ı eski haline getir
    }
  };



  
  