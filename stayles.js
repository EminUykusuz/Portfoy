window.onscroll = function() {
    var header = document.getElementById("header");
  
    if (window.scrollY > 50) { // Sayfa 50px kayarsa
      header.classList.add("shrink"); // Navbar'ı küçült ve aşağıya kaydır
    } else {
      header.classList.remove("shrink"); // Navbar'ı eski haline getir
    }
  };


  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function changeTextLetter(element, onComplete) { 
        let iteration = 0; 
        const textValue = element.dataset.textValue;

        clearInterval(element.interval); 

        element.interval = setInterval(() => { 
            element.innerText = textValue 
                .split("")
                .map((letter, index) => { 
                    if (index < iteration) {
                        return textValue[index];
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");

                if (iteration >= textValue.length) {
                  clearInterval(element.interval);
                  if (typeof onComplete === "function") {
                      onComplete();
                  }
              }

            iteration += 1 / 3;
        }, 50); // 100ms aralıklarla harf değişimi yapıyoruz
    }

    window.onload = function() {
      const animatedElements = document.querySelectorAll(".animated-text");
  
      animatedElements.forEach((element) => {
          changeTextLetter(element, () => {
              setTimeout(() => {
                  const loading = document.getElementById("loading");
                  const site = document.getElementById("site");
  
                  loading.style.opacity = "0";
                  site.style.opacity = "1";
  
                  setTimeout(() => {
                      loading.style.display = "none";
                  }, 1000);
              }, 500);
          });
      });
  };
  

  
  