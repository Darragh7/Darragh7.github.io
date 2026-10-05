(function () {
  var nav = document.querySelector(".site-nav");
  var burger = document.querySelector(".nav-burger");
  var links = document.querySelector(".nav-links");
  var anchors = document.querySelectorAll('.nav-links a[href^="#"]');
  var sections = document.querySelectorAll("section[id]");

  function onScroll() {
    if (nav) {
      nav.classList.toggle("scrolled", window.scrollY > 12);
    }
    if (!sections.length || !anchors.length) return;
    var y = window.scrollY + 100;
    var current = "";
    sections.forEach(function (sec) {
      if (sec.offsetTop <= y) current = sec.id;
    });
    anchors.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
