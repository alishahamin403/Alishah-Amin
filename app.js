(function () {
  var data = window.PORTFOLIO_DATA;
  if (!data) return;

  var id = data.identity || {};

  function $(sel, root) { return (root || document).querySelector(sel); }

  function esc(v) {
    return String(v == null ? "" : v)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function pad(n) { return String(n).padStart(2, "0"); }

  function chips(list) {
    return (list || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
  }

  var ARROW = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';

  var SERVICE_ICONS = [
    // phone
    '<svg viewBox="0 0 24 24"><rect x="6.5" y="2.5" width="11" height="19" rx="3"/><path d="M10.5 18.5h3"/></svg>',
    // browser
    '<svg viewBox="0 0 24 24"><rect x="2.5" y="4" width="19" height="16" rx="3"/><path d="M2.5 8.5h19M6 6.3h.01M8.5 6.3h.01"/></svg>',
    // database
    '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5.5" rx="7.5" ry="3"/><path d="M4.5 5.5v6.5c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V5.5"/><path d="M4.5 12v6.5c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V12"/></svg>',
    // sparkle
    '<svg viewBox="0 0 24 24"><path d="M12 3c.6 4.4 2.6 6.4 7 7-4.4.6-6.4 2.6-7 7-.6-4.4-2.6-6.4-7-7 4.4-.6 6.4-2.6 7-7Z"/><path d="M19 15.5c.3 1.9 1.1 2.7 3 3-1.9.3-2.7 1.1-3 3-.3-1.9-1.1-2.7-3-3 1.9-.3 2.7-1.1 3-3Z"/></svg>'
  ];

  /* ── Hero bits ── */
  function renderHero() {
    var avail = $("#availability-text");
    if (avail && id.availability) avail.textContent = id.availability;

    var stats = $("#stats");
    if (stats) {
      stats.innerHTML = (data.stats || []).map(function (s) {
        return '<div class="stat"><dt>' + esc(s.value) + "</dt><dd>" + esc(s.label) + "</dd></div>";
      }).join("");
    }

    var marquee = $("#marquee");
    if (marquee) {
      var items = (data.stack || []).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
      // Two copies so the loop is seamless; the second is hidden from screen readers.
      marquee.innerHTML = '<div style="display:flex">' + items + '</div><div style="display:flex" aria-hidden="true">' + items + "</div>";
    }
  }

  /* ── Work ── */
  function projectCard(p, index) {
    var num = pad(index + 1);
    var building = !/live/i.test(p.status || "");
    var icon = p.icon ? '<img class="project-icon" src="' + esc(p.icon) + '" alt="" width="34" height="34" loading="lazy" />' : "";

    var media;
    if (p.phones) {
      media =
        '<a class="project-media phones" href="' + esc(p.link) + '" target="_blank" rel="noopener noreferrer" aria-label="Visit the ' + esc(p.title) + ' website">' +
          p.phones.map(function (shot) {
            // A phone can play real app footage; the still doubles as its poster and reduced-motion fallback.
            var screen = shot.video
              ? '<video class="phone-video" muted loop playsinline preload="none" poster="' + esc(shot.src) + '" data-src="' + esc(shot.video) + '" aria-label="' + esc(shot.alt) + '"></video>'
              : '<img src="' + esc(shot.src) + '" alt="' + esc(shot.alt) + '" width="540" height="1174" loading="lazy" />';
            return '<div class="phone">' + screen + "</div>";
          }).join("") +
        "</a>";
    } else {
      var shots = p.shots || {};
      var imgs = shots.light === shots.dark
        ? '<img src="' + esc(shots.light) + '" alt="Screenshot of ' + esc(p.title) + '" width="1440" height="900" loading="lazy" />'
        : '<img class="theme-light-img" src="' + esc(shots.light) + '" alt="Screenshot of ' + esc(p.title) + '" width="1440" height="900" loading="lazy" />' +
          '<img class="theme-dark-img" src="' + esc(shots.dark) + '" alt="Screenshot of ' + esc(p.title) + '" width="1440" height="900" loading="lazy" />';
      media =
        '<a class="project-media browser" href="' + esc(p.link) + '" target="_blank" rel="noopener noreferrer" aria-label="Visit ' + esc(p.title) + '">' +
          '<div class="browser-bar"><div class="browser-dots"><i></i><i></i><i></i></div><span class="browser-url">' + esc(p.linkLabel) + "</span></div>" +
          '<div class="browser-view">' + imgs + "</div>" +
        "</a>";
    }

    var classes = "project scroll-reveal" + (p.featured ? " project--featured" : "") + (p.theme ? " project--" + p.theme : "");

    return (
      '<article class="' + classes + '">' +
        media +
        '<div class="project-body">' +
          '<div class="project-meta mono">' +
            '<span class="project-num">' + num + "</span>" +
            "<span>" + esc(p.kind) + "</span>" +
            '<span class="status' + (building ? " status--building" : "") + '">' + esc(p.status) + "</span>" +
          "</div>" +
          '<div class="project-title-row">' + icon + '<h3 class="project-title">' + esc(p.title) + "</h3></div>" +
          '<p class="project-tagline">' + esc(p.tagline) + (p.taglineTail ? ' <span class="tagline-tail">' + esc(p.taglineTail) + "</span>" : "") + "</p>" +
          '<p class="project-desc">' + esc(p.description) + "</p>" +
          '<ul class="chips" aria-label="Tech stack">' + chips(p.stack) + "</ul>" +
          '<div class="project-actions">' +
            '<a class="link-btn link-btn--primary" href="' + esc(p.link) + '" target="_blank" rel="noopener noreferrer">Visit ' + ARROW + "</a>" +
            '<button class="link-btn" type="button" data-case="' + esc(p.id) + '">Case study</button>' +
          "</div>" +
        "</div>" +
        (p.wall ? screenWall(p.wall) : "") +
      "</article>"
    );
  }

  // Two rows of app screens drifting in opposite directions, like the Seline website.
  function screenWall(shots) {
    var half = Math.ceil(shots.length / 2);
    function row(list, extra) {
      var imgs = list.map(function (s) {
        return '<img src="' + esc(s.src) + '" alt="' + esc(s.alt) + '" width="360" height="782" loading="lazy" />';
      }).join("");
      // Second copy makes the loop seamless and is hidden from screen readers.
      return '<div class="wall-row' + extra + '"><div class="wall-set">' + imgs + '</div><div class="wall-set" aria-hidden="true">' + imgs + "</div></div>";
    }
    return (
      '<div class="screen-wall" role="group" aria-label="More screens from the app">' +
        row(shots.slice(0, half), "") +
        row(shots.slice(half), " wall-row--reverse") +
      "</div>"
    );
  }

  /* ── Autoplay app footage only while it's on screen ── */
  function initPhoneVideos() {
    var videos = document.querySelectorAll(".phone-video");
    if (!videos.length) return;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return; // poster stays as a still

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var v = entry.target;
        if (entry.isIntersecting) {
          if (!v.src) v.src = v.dataset.src;
          var playing = v.play();
          if (playing && playing.catch) playing.catch(function () {});
        } else if (!v.paused) {
          v.pause();
        }
      });
    }, { threshold: 0.35 });
    videos.forEach(function (v) { observer.observe(v); });
  }

  function renderWork() {
    var el = $("#work-list");
    if (el) el.innerHTML = (data.projects || []).map(projectCard).join("");
  }

  /* ── Services / process ── */
  function renderServices() {
    var el = $("#services-list");
    if (!el) return;
    el.innerHTML = (data.services || []).map(function (s, i) {
      return (
        '<article class="service scroll-reveal">' +
          '<span class="service-icon" aria-hidden="true">' + (SERVICE_ICONS[i] || "") + "</span>" +
          '<p class="mono service-num">' + pad(i + 1) + "</p>" +
          '<h3 class="service-title">' + esc(s.title) + "</h3>" +
          '<p class="service-summary">' + esc(s.summary) + "</p>" +
          "<ul>" + (s.items || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" +
        "</article>"
      );
    }).join("");
  }

  function renderProcess() {
    var el = $("#process-list");
    if (!el) return;
    el.innerHTML = (data.process || []).map(function (s) {
      return '<li class="step scroll-reveal"><h3>' + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></li>";
    }).join("");
  }

  /* ── About ── */
  function renderAbout() {
    var career = $("#career-list");
    if (career) {
      career.innerHTML = (data.career || []).map(function (r) {
        return (
          '<li class="role scroll-reveal">' +
            '<span class="mono role-period">' + esc(r.period) + "</span>" +
            "<div><h3>" + esc(r.role) + '</h3><span class="role-company">' + esc(r.company) + "</span>" +
            (r.description ? "<p>" + esc(r.description) + "</p>" : "") + "</div>" +
          "</li>"
        );
      }).join("");
    }

    var creds = $("#credentials");
    if (creds) {
      creds.innerHTML = (data.credentials || []).map(function (c) {
        return '<div class="credential"><strong>' + esc(c.name) + "</strong><span>" + esc(c.issuer) + " · " + esc(c.year) + "</span></div>";
      }).join("");
    }

    var off = $("#off-duty");
    if (off) off.innerHTML = (data.offDuty || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
  }

  /* ── Contact ── */
  function renderContact() {
    var email = $("#contact-email");
    if (email && id.email) {
      email.href = "mailto:" + id.email;
      email.textContent = id.email;
    }
    var fallback = $("#booking-fallback");
    if (fallback && id.booking) fallback.href = id.booking;

    var links = [
      id.upwork && { label: "Upwork", href: id.upwork },
      id.linkedin && { label: "LinkedIn", href: id.linkedin },
      id.github && { label: "GitHub", href: id.github },
      id.booking && { label: "Booking page", href: id.booking }
    ].filter(Boolean);

    var socials = $("#socials");
    if (socials) {
      socials.innerHTML = links.map(function (l) {
        return '<li><a href="' + esc(l.href) + '" target="_blank" rel="noopener noreferrer">' + esc(l.label) + " " + ARROW + "</a></li>";
      }).join("");
    }

    var year = $("#year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  /* ── Local time ── */
  function initClock() {
    var el = $("#local-time");
    if (!el) return;
    var fmt;
    try {
      fmt = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: id.timezone || "America/Toronto" });
    } catch (e) { return; }
    function tick() { el.textContent = fmt.format(new Date()); }
    tick();
    setInterval(tick, 30000);
  }

  /* ── Theme ── */
  function currentTheme() {
    var set = document.documentElement.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function initTheme() {
    var btn = $("#theme-toggle");
    if (!btn) return;

    function apply(next) {
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    }

    btn.addEventListener("click", function (event) {
      var next = currentTheme() === "dark" ? "light" : "dark";
      var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!document.startViewTransition || reduce) {
        apply(next);
        return;
      }

      var rect = btn.getBoundingClientRect();
      var x = rect.left + rect.width / 2;
      var y = rect.top + rect.height / 2;
      var r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      var root = document.documentElement.style;
      root.setProperty("--vt-x", x + "px");
      root.setProperty("--vt-y", y + "px");
      root.setProperty("--vt-r", r + "px");
      document.startViewTransition(function () { apply(next); });
    });
  }

  /* ── Top bar: scrolled state + active section ── */
  function initNav() {
    var bar = $(".topbar");
    function onScroll() { if (bar) bar.classList.toggle("is-scrolled", window.scrollY > 8); }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (!("IntersectionObserver" in window)) return;
    var links = {};
    document.querySelectorAll(".nav a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = links[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          Object.keys(links).forEach(function (k) { links[k].classList.remove("is-active"); });
          link.classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(links).forEach(function (k) {
      var section = document.getElementById(k);
      if (section) observer.observe(section);
    });
  }

  /* ── Booking calendar ── */
  function initBooking() {
    var toggle = $("#booking-toggle");
    var panel = $("#booking-panel");
    var frame = $("#booking-frame");
    var shell = $(".booking-frame-shell");
    if (!toggle || !panel) return;

    if (frame && shell) {
      frame.addEventListener("load", function () {
        if (frame.src) shell.classList.add("is-loaded");
      });
    }

    function setOpen(open, scroll) {
      toggle.setAttribute("aria-expanded", String(open));
      panel.hidden = !open;
      if (open && frame && !frame.src && id.bookingEmbed) frame.src = id.bookingEmbed;
      if (open && scroll) {
        setTimeout(function () { panel.scrollIntoView({ behavior: "smooth", block: "center" }); }, 50);
      }
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true", true);
    });

    // Hero CTA and #book deep links open the calendar straight away.
    document.querySelectorAll("[data-open-booking]").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(true, false); });
    });
    if (location.hash === "#book") {
      setOpen(true, true);
    }
  }

  /* ── Case study dialog ── */
  function initCaseStudies() {
    var dialog = $("#case-dialog");
    if (!dialog || typeof dialog.showModal !== "function") return;
    var byId = {};
    (data.projects || []).forEach(function (p, i) { byId[p.id] = { p: p, i: i }; });

    function set(sel, text) { var el = $(sel, dialog); if (el) el.textContent = text || ""; }

    document.addEventListener("click", function (event) {
      var trigger = event.target.closest("[data-case]");
      if (!trigger) return;
      var entry = byId[trigger.getAttribute("data-case")];
      if (!entry) return;
      var p = entry.p;
      var cs = p.caseStudy || {};
      set("#case-kicker", "Case study " + pad(entry.i + 1) + " · " + p.kind);
      set("#case-title", p.title);
      set("#case-tagline", p.tagline + (p.taglineTail ? " " + p.taglineTail : ""));
      set("#case-problem", cs.problem);
      set("#case-build", cs.build);
      set("#case-role", cs.role);
      set("#case-outcome", cs.outcome);
      $("#case-stack", dialog).innerHTML = chips(p.stack);
      var link = $("#case-link", dialog);
      if (link) link.href = p.link;
      dialog.showModal();
      document.body.classList.add("dialog-open");
    });

    dialog.addEventListener("close", function () { document.body.classList.remove("dialog-open"); });
    // Close when clicking the backdrop.
    dialog.addEventListener("click", function (event) {
      if (event.target !== dialog) return;
      var r = dialog.getBoundingClientRect();
      var inside = event.clientX >= r.left && event.clientX <= r.right && event.clientY >= r.top && event.clientY <= r.bottom;
      if (!inside) dialog.close();
    });
  }

  renderHero();
  renderWork();
  renderServices();
  renderProcess();
  renderAbout();
  renderContact();
  initClock();
  initTheme();
  initNav();
  initBooking();
  initCaseStudies();
  initPhoneVideos();
})();
