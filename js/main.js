(function () {
  if (typeof KingsI18n !== "undefined") {
    KingsI18n.initLangUi();
    KingsI18n.apply(KingsI18n.getStoredLang());
  }

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* Логотип: images/logo.png → logo.png в корне → текст */
  document.querySelectorAll("[data-logo-img]").forEach(function (img) {
    var triedAlt = false;
    function showFallback() {
      img.classList.add("is-hidden");
      var wrap = img.closest(".logo");
      var fb = wrap && wrap.querySelector("[data-logo-fallback]");
      if (fb) fb.removeAttribute("hidden");
    }
    img.addEventListener("error", function () {
      if (!triedAlt) {
        triedAlt = true;
        img.src = "logo.png";
        return;
      }
      showFallback();
    });
    img.addEventListener("load", function () {
      if (img.naturalWidth === 0) showFallback();
    });
    if (img.complete && img.naturalWidth === 0 && img.src) {
      showFallback();
    }
  });

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });

    nav.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  /* Фоновое видео в герое (на случай если autoplay заблокирован) */
  var heroVid = document.querySelector(".hero__video");
  if (heroVid && heroVid.tagName === "VIDEO") {
    heroVid.setAttribute("playsinline", "");
    var p = heroVid.play();
    if (p && typeof p.catch === "function") {
      p.catch(function () {});
    }
  }

  /* Выпускники: авто-слайдер каждые 15 с */
  var root = document.querySelector("[data-grad-slider]");
  var slides = root ? root.querySelectorAll("[data-grad-slide]") : [];
  var dotsWrap = root ? root.querySelector("[data-grad-dots]") : null;

  if (root && slides.length && dotsWrap) {
    var current = 0;
    var intervalMs = 15000;
    var timer = null;

    function show(i) {
      current = (i + slides.length) % slides.length;
      slides.forEach(function (el, j) {
        el.classList.toggle("is-active", j === current);
      });
      var dots = dotsWrap.querySelectorAll("button");
      dots.forEach(function (d, j) {
        d.classList.toggle("is-active", j === current);
        d.setAttribute("aria-selected", j === current ? "true" : "false");
      });
    }

    function gradDotAria(i) {
      var lang = document.documentElement.getAttribute("lang") || "ru";
      if (lang !== "en" && lang !== "ky") lang = "ru";
      var t =
        typeof KingsI18n !== "undefined" && KingsI18n.STRINGS[lang]
          ? KingsI18n.STRINGS[lang]
          : {};
      var prefix = t.a11y_grad_story || "История";
      return prefix + " " + (i + 1);
    }

    function refreshGradDotsAria() {
      dotsWrap.querySelectorAll("button").forEach(function (b, i) {
        b.setAttribute("aria-label", gradDotAria(i));
      });
    }

    slides.forEach(function (_, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-label", gradDotAria(i));
      if (i === 0) b.classList.add("is-active");
      b.addEventListener("click", function () {
        show(i);
        restart();
      });
      dotsWrap.appendChild(b);
    });

    document.addEventListener("kings:lang", refreshGradDotsAria);

    function tick() {
      show(current + 1);
    }

    function start() {
      stop();
      timer = window.setInterval(tick, intervalMs);
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    function restart() {
      stop();
      start();
    }

    start();

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else start();
    });
  }
})();
