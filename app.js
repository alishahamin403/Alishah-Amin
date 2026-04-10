(function () {
  var data = window.PORTFOLIO_DATA;
  if (!data) return;

  function qs(id) { return document.querySelector(id); }

  function esc(v) {
    return String(v)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function isExt(href) { return /^https?:\/\//i.test(href || ""); }

  /* ── Header / Nav ── */
  function renderNav() {
    var id = data.identity || {};
    var initials = qs("#top-initials");
    var email = qs("#nav-email");
    var linkedin = qs("#nav-linkedin");
    var connectEmail = qs("#connect-email");
    var connectLinkedin = qs("#connect-linkedin");

    if (initials) initials.textContent = id.initials || "ASA";
    if (email && id.email) email.href = "mailto:" + id.email;
    if (linkedin && id.linkedin) linkedin.href = id.linkedin;
    if (connectEmail && id.email) connectEmail.href = "mailto:" + id.email;
    if (connectLinkedin && id.linkedin) connectLinkedin.href = id.linkedin;
  }

  /* ── Hero ── */
  function renderHero() {
    var id = data.identity || {};
    var name = qs("#hero-name");
    var title = qs("#hero-title");
    var bio = qs("#hero-bio");
    var tags = qs("#hero-tags");
    var status = qs("#connect-status");

    if (name) name.textContent = id.fullName || "Ali Shah Amin";
    if (title) title.textContent = id.title || "";
    if (bio) bio.textContent = id.bio || "";
    if (status) status.textContent = id.status || "Open to opportunities";

    if (tags) {
      var skillItems = (data.skills || []).flatMap(function (g) { return g.items.slice(0, 1); });
      tags.innerHTML = skillItems.map(function (t) {
        return '<span class="hero-tag">' + esc(t) + "</span>";
      }).join("");
    }
  }

  /* ── Career ── */
  function renderCareer() {
    var container = qs("#career-list");
    if (!container) return;

    container.innerHTML = (data.career || []).map(function (e) {
      var logoHtml = e.logo
        ? '<img class="org-logo" src="' + esc(e.logo) + '" alt="' + esc(e.company) + '" onerror="this.style.display=\'none\'" />'
        : '<div class="org-logo org-logo-placeholder"></div>';
      return (
        '<div class="career-row">' +
          logoHtml +
          '<div class="career-info">' +
            '<span class="career-role">' + esc(e.role) + "</span>" +
            '<span class="career-company">' + esc(e.company) + "</span>" +
            '<span class="career-period">' + esc(e.period) + "</span>" +
          "</div>" +
        "</div>"
      );
    }).join("");
  }

  /* ── Education ── */
  function renderEducation() {
    var container = qs("#edu-list");
    if (!container) return;

    container.innerHTML = (data.education || []).map(function (e) {
      var logoHtml = e.logo
        ? '<img class="org-logo" src="' + esc(e.logo) + '" alt="' + esc(e.school) + '" onerror="this.style.display=\'none\'" />'
        : '<div class="org-logo org-logo-placeholder"></div>';
      return (
        '<div class="career-row">' +
          logoHtml +
          '<div class="career-info">' +
            '<span class="career-role">' + esc(e.degree) + "</span>" +
            '<span class="career-company">' + esc(e.school) + "</span>" +
            '<span class="career-period">' + esc(e.period) + "</span>" +
          "</div>" +
        "</div>"
      );
    }).join("");
  }

  /* ── Certifications ── */
  function renderCertifications() {
    var container = qs("#cert-list");
    if (!container) return;

    container.innerHTML = (data.certifications || []).map(function (c) {
      var logoHtml = c.logo
        ? '<img class="org-logo" src="' + esc(c.logo) + '" alt="' + esc(c.issuer) + '" onerror="this.style.display=\'none\'" />'
        : '<div class="org-logo org-logo-placeholder"></div>';
      return (
        '<div class="career-row">' +
          logoHtml +
          '<div class="career-info">' +
            '<span class="career-role">' + esc(c.name) + "</span>" +
            '<span class="career-company">' + esc(c.issuer) + "</span>" +
            '<span class="career-period">' + esc(c.issued) + "</span>" +
          "</div>" +
        "</div>"
      );
    }).join("");
  }

  /* ── Projects ── */
  function renderProjects() {
    var projects = data.sideProjects || [];

    var seline  = projects.find(function (p) { return p.title === "Seline"; });
    var awaz    = projects.find(function (p) { return p.title === "Awaz"; });
    var craft   = projects.find(function (p) { return p.title === "Craft"; });
    var royalty = projects.find(function (p) { return p.title === "Royalty Home Inc."; });

    var selineEl  = qs("#seline-desc");
    var awazEl    = qs("#awaz-desc");
    var craftEl   = qs("#craft-desc");
    var royaltyEl = qs("#royalty-desc");

    if (selineEl  && seline)  selineEl.textContent  = seline.description;
    if (awazEl    && awaz)    awazEl.textContent     = awaz.description;
    if (craftEl   && craft)   craftEl.textContent    = craft.description;
    if (royaltyEl && royalty) royaltyEl.textContent  = royalty.description;
  }

  /* ── Year ── */
  function setYear() {
    var el = qs("#current-year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ── Theme Toggle ── */
  function initTheme() {
    var btn = qs("#theme-toggle");
    if (!btn) return;
    var saved = localStorage.getItem("theme");
    if (saved === "light") document.documentElement.setAttribute("data-theme", "light");
    btn.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      if (current === "light") {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    });
  }

  renderNav();
  renderHero();
  renderCareer();
  renderEducation();
  renderCertifications();
  renderProjects();
  setYear();
  initTheme();
})();
