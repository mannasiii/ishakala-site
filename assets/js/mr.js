
  // IntersectionObserver for scroll animation
  document.addEventListener("DOMContentLoaded", function () {
    const sbElements = document.querySelectorAll(".sb");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, {
      threshold: 0.2
    });

    sbElements.forEach((el) => observer.observe(el));
  });


  document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".sb, .sh");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, {
      threshold: 0.2
    });

    animatedElements.forEach((el) => observer.observe(el));
  });

  document.addEventListener("DOMContentLoaded", function () {
    const mrElements = document.querySelectorAll(".mr");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, {
      threshold: 0.3
    });

    mrElements.forEach((el) => observer.observe(el));
  });


  // 
  const images = document.querySelectorAll('.mr2');

images.forEach((img, i) => {
  setTimeout(() => {
    img.style.opacity = 1;
  }, i * 2000); // 2 seconds between each
});