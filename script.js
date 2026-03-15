const elements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{ threshold:0.2 });

elements.forEach(el => observer.observe(el));


const userMenu = document.querySelector(".user-menu");

userMenu.addEventListener("click", () => {
  userMenu.classList.toggle("active");
});

/* close on outside click */
document.addEventListener("click", (e) => {
  if(!userMenu.contains(e.target)){
    userMenu.classList.remove("active");
  }
});



/* ===== THEME TOGGLE (ADD AT END ONLY) ===== */
window.addEventListener("load", () => {
  const toggle = document.getElementById("themeToggle");

  if (!toggle) return;

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggle.textContent =
      document.body.classList.contains("light") ? "☀️" : "🌙";
  });
});

const section = document.querySelector(".scroll-wrap");
const fossil = document.querySelector(".fossil");
const green = document.querySelector(".green");

if (section && fossil && green) {
  window.addEventListener("scroll", () => {
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;

    let progress = 1 - rect.bottom / (vh + rect.height);
    progress = Math.min(Math.max(progress, 0), 1);

    green.style.width = `${50 + progress * 50}%`;
    green.style.right = "0";
    fossil.style.width = `${50 - progress * 50}%`;
  });
}

// add to cart in product


  const cartBtn = document.querySelector(".floating-cart");
  const badge = document.querySelector(".cart-badge");
  let count = 3;

  cartBtn.addEventListener("click", () => {
    count++;
    badge.innerText = count;
  });


  function changeImage(thumbnail) {
    document.getElementById("mainProductImage").src = thumbnail.src;

    // remove active border
    document.querySelectorAll(".thumbnail-row img").forEach(img => {
      img.style.borderColor = "transparent";
    });

    // add active border
    thumbnail.style.borderColor = "#22c55e";
  }

document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.getElementById("mainProductImage");
  const thumbs = document.querySelectorAll(".thumb");

  thumbs.forEach(thumb => {
    thumb.addEventListener("click", function () {
      mainImage.src = this.src;
      thumbs.forEach(t => t.classList.remove("active"));
      this.classList.add("active");
    });
  });
});


   
document.addEventListener("DOMContentLoaded", function () {

  // PRODUCT 1
  const wifiBtn = document.getElementById("wifiBtn");
  const fourGBtn = document.getElementById("fourGBtn");

  if (wifiBtn && fourGBtn) {
    wifiBtn.addEventListener("click", () => {
      wifiBtn.classList.add("active");
      fourGBtn.classList.remove("active");
      window.location.href = "prod1.html";
    });

    fourGBtn.addEventListener("click", () => {
      fourGBtn.classList.add("active");
      wifiBtn.classList.remove("active");
      window.location.href = "4g_product1.html";
    });
  }


  // PRODUCT 2
  const wifiBtn2 = document.getElementById("wifiBtn2");
  const fourGBtn2 = document.getElementById("fourGBtn2");

  if (wifiBtn2 && fourGBtn2) {
    wifiBtn2.addEventListener("click", () => {
      wifiBtn2.classList.add("active");
      fourGBtn2.classList.remove("active");
      window.location.href = "prod2.html";
    });

    fourGBtn2.addEventListener("click", () => {
      fourGBtn2.classList.add("active");
      wifiBtn2.classList.remove("active");
      window.location.href = "4g_product2.html";
    });
  }


  // PRODUCT 3 (WiFi + GSM)
  const fourGBtn3 = document.getElementById("fourGBtn3");
  const gsmBtn3 = document.getElementById("gsmBtn3");

  if (fourGBtn3 && gsmBtn3) {
    fourGBtn3.addEventListener("click", () => {
      fourGBtn3.classList.add("active");
      gsmBtn3.classList.remove("active");
      window.location.href = "prod3.html";
    });

    gsmBtn3.addEventListener("click", () => {
      gsmBtn3.classList.add("active");
      fourGBtn3.classList.remove("active");
      window.location.href = "gsm_product3.html";
    });
  }

});


// smooth scroll


const navbarOffset = 100; // your navbar height

// Ultra Smooth Anchor Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    const targetPosition = target.offsetTop - navbarOffset;
    smoothScrollTo(targetPosition, 1400); // duration 1400ms
  });
});

function smoothScrollTo(targetY, duration) {
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    const ease = easeInOutQuart(progress);
    window.scrollTo(0, startY + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  function easeInOutQuart(t) {
    return t < 0.5
      ? 8 * t * t * t * t
      : 1 - Math.pow(-2 * t + 2, 4) / 2;
  }

  requestAnimationFrame(animation);
}

 