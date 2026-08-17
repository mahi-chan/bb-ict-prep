/* ==========================================================================
   Bangladesh Bank AD (ICT) — Written Prep
   js/app.js

   Plain ES5-compatible-ish script (no modules) so the site runs from file://
   where module imports are blocked by the browser's CORS rules.

   Responsibilities
     - safe storage wrapper (file:// often denies localStorage)
     - site-wide search over window.SEARCH_INDEX
     - accordions (question/answer + generic) with real keyboard support
     - scroll reveal, staggered, gated on prefers-reduced-motion
     - sidebar active state + sliding indicator + revised ticks
     - "on this page" contents, generated from the document outline
     - progress tracking, mark-as-revised, resume-where-you-left-off
   ========================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------------- utils */

  var root = document.documentElement;
  var SITE_ROOT = root.getAttribute("data-root") || "./";
  var PAGE_ID = root.getAttribute("data-page") || "";
  var SUBJECT_SLUG = root.getAttribute("data-subject") || "";
  var SUBJECT_NAME = root.getAttribute("data-subject-name") || "";
  var TOTAL_SUBJECTS = 18;

  var reduceMotion = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : { matches: false };

  function $(sel, ctx) {
    return (ctx || document).querySelector(sel);
  }

  function $$(sel, ctx) {
    return Array.prototype.slice.call((ctx || document).querySelectorAll(sel));
  }

  function on(el, type, fn, opts) {
    if (el) el.addEventListener(type, fn, opts || false);
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* Storage that degrades to memory when the browser blocks file:// origins. */
  var store = (function () {
    var mem = {};
    var ok = false;
    try {
      var k = "__bbict_probe__";
      window.localStorage.setItem(k, "1");
      window.localStorage.removeItem(k);
      ok = true;
    } catch (e) {
      ok = false;
    }
    return {
      available: ok,
      get: function (key) {
        try {
          return ok ? window.localStorage.getItem(key) : mem[key] || null;
        } catch (e) {
          return mem[key] || null;
        }
      },
      set: function (key, val) {
        try {
          if (ok) window.localStorage.setItem(key, val);
          else mem[key] = val;
        } catch (e) {
          mem[key] = val;
        }
      },
      getJSON: function (key, fallback) {
        var raw = this.get(key);
        if (!raw) return fallback;
        try {
          return JSON.parse(raw);
        } catch (e) {
          return fallback;
        }
      },
      setJSON: function (key, val) {
        this.set(key, JSON.stringify(val));
      },
    };
  })();

  var KEY_REVISED = "bbict:revised";
  var KEY_LAST = "bbict:last";

  function getRevised() {
    var list = store.getJSON(KEY_REVISED, []);
    return Object.prototype.toString.call(list) === "[object Array]"
      ? list
      : [];
  }

  function isRevised(slug) {
    return getRevised().indexOf(slug) !== -1;
  }

  function setRevised(slug, val) {
    var list = getRevised();
    var i = list.indexOf(slug);
    if (val && i === -1) list.push(slug);
    if (!val && i !== -1) list.splice(i, 1);
    store.setJSON(KEY_REVISED, list);
  }

  /* ---------------------------------------------------------- page enter */

  function pageEnter() {
    if (reduceMotion.matches) return;
    var main = $(".site-main");
    if (main) main.classList.add("page-enter");
  }

  /* Signals to the stylesheet that JS is running, which is what unlocks the
     hidden-then-revealed state. Set at parse time, before first paint. */
  if (!reduceMotion.matches) root.setAttribute("data-motion", "on");

  /* --------------------------------------------------------- scroll reveal */

  function revealNow(el) {
    el.setAttribute("data-revealed", "true");
  }

  function initReveal() {
    // Subject pages do not hard-code .reveal — tag their supporting blocks here
    // so a page without JS is never left invisible.
    //
    // Deliberately NOT tagged: .qa question cards. They are the primary content
    // and are frequently deep-linked to from search, so they must never depend
    // on an observer firing in order to be readable.
    var main = $(".site-main");
    if (main && !$(".reveal", main)) {
      $$(".subsection, .figure", main).forEach(function (el) {
        if (!el.closest(".qa__a") && !el.closest(".acc__panel"))
          el.classList.add("reveal");
      });
    }

    var targets = $$(".reveal");
    if (!targets.length) return;

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      targets.forEach(revealNow);
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        var shown = 0;
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          el.style.setProperty("--reveal-delay", shown * 60 + "ms");
          revealNow(el);
          shown += 1;
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
    );

    targets.forEach(function (el) {
      // Anything already at or above the fold is shown immediately rather than
      // waiting for a callback — this covers deep links and restored scroll
      // positions, where the observer may never report an entry.
      var box = el.getBoundingClientRect();
      if (box.top < window.innerHeight * 1.2) revealNow(el);
      else io.observe(el);
    });

    // Last-resort safety net. If anything is still hidden after a moment —
    // observer never fired, layout shifted, print dialog opened — show it.
    // Invisible content is a far worse failure than a missed animation.
    window.setTimeout(function () {
      $$(".reveal:not([data-revealed])").forEach(revealNow);
    }, 1500);
  }

  /* ------------------------------------------------------------- meters */

  function initMeters() {
    var meters = $$(".meter__fill");
    if (!meters.length) return;

    function fill(el) {
      var pct = el.getAttribute("data-value") || "0";
      el.style.width = pct + "%";
    }

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      meters.forEach(fill);
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          fill(entry.target);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    meters.forEach(function (el) {
      // Header meters are above the fold and may never trigger an intersection
      // callback in some browsers when already visible; fill those immediately.
      if (el.closest(".site-header")) fill(el);
      else io.observe(el);
    });
  }

  /* --------------------------------------------------------- accordions */

  /*
    Both .qa (question/answer) and .acc (generic) use the same contract:
      wrapper[data-open]  >  button[aria-expanded][aria-controls]  +  region[id]
    The animation is CSS (grid-template-rows 0fr -> 1fr); JS only flips state.
  */

  function setOpen(wrapper, btn, panel, open) {
    wrapper.setAttribute("data-open", open ? "true" : "false");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (panel) panel.setAttribute("aria-hidden", open ? "false" : "true");
  }

  function initAccordions() {
    var groups = [
      { wrap: ".qa", btn: ".qa__q", panel: ".qa__a" },
      { wrap: ".acc", btn: ".acc__btn", panel: ".acc__panel" },
    ];

    groups.forEach(function (g, gi) {
      $$(g.wrap).forEach(function (wrapper, i) {
        var btn = $(g.btn, wrapper);
        var panel = $(g.panel, wrapper);
        if (!btn || !panel) return;

        if (!panel.id) panel.id = "acc-" + gi + "-" + i + "-panel";
        if (!btn.id) btn.id = panel.id + "-btn";

        btn.setAttribute("aria-controls", panel.id);
        panel.setAttribute("role", "region");
        panel.setAttribute("aria-labelledby", btn.id);

        var startOpen = wrapper.getAttribute("data-open") === "true";
        setOpen(wrapper, btn, panel, startOpen);

        on(btn, "click", function () {
          var nowOpen = wrapper.getAttribute("data-open") !== "true";
          setOpen(wrapper, btn, panel, nowOpen);
        });

        // Buttons already answer to Enter/Space. Add the arrow-key roving that
        // long question lists benefit from.
        on(btn, "keydown", function (ev) {
          var key = ev.key;
          if (key !== "ArrowDown" && key !== "ArrowUp" && key !== "Home" && key !== "End")
            return;
          var all = $$(g.btn);
          var idx = all.indexOf(btn);
          if (idx === -1) return;
          var next;
          if (key === "ArrowDown") next = all[idx + 1];
          else if (key === "ArrowUp") next = all[idx - 1];
          else if (key === "Home") next = all[0];
          else next = all[all.length - 1];
          if (next) {
            ev.preventDefault();
            next.focus();
          }
        });
      });
    });
  }

  function setAll(scopeSel, open) {
    var scope = scopeSel ? $(scopeSel) : document;
    if (!scope) return;
    $$(".qa, .acc", scope).forEach(function (wrapper) {
      var btn = $(".qa__q, .acc__btn", wrapper);
      var panel = $(".qa__a, .acc__panel", wrapper);
      if (btn && panel) setOpen(wrapper, btn, panel, open);
    });
  }

  function initExpandControls() {
    $$("[data-expand-all]").forEach(function (btn) {
      on(btn, "click", function () {
        setAll(btn.getAttribute("data-expand-all") || null, true);
      });
    });
    $$("[data-collapse-all]").forEach(function (btn) {
      on(btn, "click", function () {
        setAll(btn.getAttribute("data-collapse-all") || null, false);
      });
    });
  }

  /* Open whatever the URL hash points at, including a collapsed ancestor. */
  function openFromHash() {
    var hash = window.location.hash;
    if (!hash || hash.length < 2) return;
    var target;
    try {
      target = document.getElementById(decodeURIComponent(hash.slice(1)));
    } catch (e) {
      target = null;
    }
    if (!target) return;

    var wrapper = target.closest(".qa, .acc");
    if (wrapper) {
      var btn = $(".qa__q, .acc__btn", wrapper);
      var panel = $(".qa__a, .acc__panel", wrapper);
      if (btn && panel) setOpen(wrapper, btn, panel, true);
    }

    // Make sure the destination is actually visible before scrolling to it.
    var node = target;
    while (node && node !== document.body) {
      if (node.classList && node.classList.contains("reveal"))
        node.setAttribute("data-revealed", "true");
      node = node.parentNode;
    }
    window.setTimeout(function () {
      target.scrollIntoView({
        behavior: reduceMotion.matches ? "auto" : "smooth",
        block: "start",
      });
    }, 60);
  }

  /* ------------------------------------------------------------- sidebar */

  function initSidebar() {
    var nav = $(".site-nav");
    var toggle = $(".nav-toggle");

    if (toggle && nav) {
      on(toggle, "click", function () {
        var open = nav.getAttribute("data-open") === "true";
        nav.setAttribute("data-open", open ? "false" : "true");
        toggle.setAttribute("aria-expanded", open ? "false" : "true");
      });
    }

    var list = $(".subject-list");
    if (!list) return;

    // Revised ticks.
    var revised = getRevised();
    $$(".subject-link", list).forEach(function (a) {
      var slug = a.getAttribute("data-slug");
      if (slug && revised.indexOf(slug) !== -1)
        a.setAttribute("data-revised", "true");
    });

    var active = $('.subject-link[aria-current="page"]', list);
    if (!active) return;

    function place() {
      var top = active.offsetTop;
      var h = active.offsetHeight;
      list.style.setProperty("--ind-y", top + "px");
      list.style.setProperty("--ind-h", h + "px");
      list.setAttribute("data-indicator", "on");
    }

    place();
    on(window, "resize", place);

    // Keep the current subject in view inside a long scrolling sidebar.
    if (nav && nav.scrollHeight > nav.clientHeight) {
      nav.scrollTop = Math.max(
        0,
        active.offsetTop - nav.clientHeight / 2 + active.offsetHeight / 2
      );
    }
  }

  /* ------------------------------------------------ on-this-page contents */

  function initToc() {
    var mount = $("[data-toc]");
    if (!mount) return;

    var main = $(".site-main");
    if (!main) return;

    var heads = $$("section[id] > .section__head > h2, .subsection[id] > h3", main);
    if (heads.length < 2) return;

    var ul = document.createElement("ul");
    ul.className = "toc__list";

    heads.forEach(function (h) {
      var owner = h.closest("section[id], .subsection[id]");
      if (!owner || !owner.id) return;
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + owner.id;
      a.textContent = h.textContent.replace(/\s+/g, " ").trim();
      if (h.tagName === "H3") li.className = "toc__sub";
      li.appendChild(a);
      ul.appendChild(li);
    });

    if (!ul.childNodes.length) return;

    var heading = document.createElement("p");
    heading.className = "toc__heading";
    heading.textContent = "On this page";
    mount.appendChild(heading);
    mount.appendChild(ul);
    mount.classList.add("toc");

    // Scroll spy.
    if (!("IntersectionObserver" in window)) return;
    var links = $$("a", ul);
    var byId = {};
    links.forEach(function (a) {
      byId[a.getAttribute("href").slice(1)] = a;
    });

    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var a = byId[entry.target.id];
          if (!a) return;
          if (entry.isIntersecting) {
            links.forEach(function (x) {
              x.removeAttribute("data-active");
            });
            a.setAttribute("data-active", "true");
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    $$("section[id], .subsection[id]", main).forEach(function (s) {
      if (byId[s.id]) spy.observe(s);
    });
  }

  /* -------------------------------------------------------------- search */

  function normalise(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9+#/.\- ]+/g, " ");
  }

  function scoreEntry(entry, terms) {
    var title = normalise(entry.t);
    var subject = normalise(entry.s || "");
    var keys = normalise(entry.k || "");
    var haystack = title + " " + subject + " " + keys;
    var score = 0;

    for (var i = 0; i < terms.length; i++) {
      var term = terms[i];
      if (haystack.indexOf(term) === -1) return 0; // every term must appear
      if (title.indexOf(term) === 0) score += 12;
      else if (title.indexOf(term) !== -1) score += 8;
      if (subject.indexOf(term) !== -1) score += 3;
      if (keys.indexOf(term) !== -1) score += 2;
    }

    // Prefer whole-phrase title matches and shorter titles.
    var phrase = terms.join(" ");
    if (title.indexOf(phrase) !== -1) score += 10;
    score += Math.max(0, 6 - Math.floor(title.length / 18));
    if (entry.ty === "subject") score += 4;
    return score;
  }

  function initSearch() {
    var input = $(".search__input");
    var results = $(".search__results");
    if (!input || !results) return;

    var index = window.SEARCH_INDEX || [];
    var selected = -1;
    var hits = [];

    function close() {
      results.setAttribute("data-open", "false");
      results.innerHTML = "";
      input.setAttribute("aria-expanded", "false");
      selected = -1;
      hits = [];
    }

    function href(entry) {
      return SITE_ROOT + entry.p + (entry.h ? "#" + entry.h : "");
    }

    function render(list, query) {
      results.innerHTML = "";
      if (!list.length) {
        var empty = document.createElement("li");
        empty.className = "search__empty";
        empty.textContent = 'No match for "' + query + '"';
        results.appendChild(empty);
        results.setAttribute("data-open", "true");
        input.setAttribute("aria-expanded", "true");
        return;
      }

      list.forEach(function (entry, i) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.className = "search__hit";
        a.href = href(entry);
        a.setAttribute("role", "option");
        a.id = "search-hit-" + i;
        a.innerHTML =
          '<span class="search__hit-title">' +
          escapeHtml(entry.t) +
          "</span>" +
          '<span class="search__hit-meta">' +
          escapeHtml(entry.s || "") +
          (entry.ty && entry.ty !== "subject"
            ? " &middot; " + escapeHtml(entry.ty)
            : "") +
          "</span>";
        li.appendChild(a);
        results.appendChild(li);
      });

      results.setAttribute("data-open", "true");
      input.setAttribute("aria-expanded", "true");
    }

    function highlight(i) {
      var nodes = $$(".search__hit", results);
      nodes.forEach(function (n) {
        n.removeAttribute("aria-selected");
      });
      if (i >= 0 && nodes[i]) {
        nodes[i].setAttribute("aria-selected", "true");
        input.setAttribute("aria-activedescendant", nodes[i].id);
        nodes[i].scrollIntoView({ block: "nearest" });
      } else {
        input.removeAttribute("aria-activedescendant");
      }
    }

    function run() {
      var q = input.value.trim();
      if (q.length < 2) {
        close();
        return;
      }
      var terms = normalise(q).split(/\s+/).filter(Boolean);
      if (!terms.length) {
        close();
        return;
      }

      hits = index
        .map(function (e) {
          return { e: e, s: scoreEntry(e, terms) };
        })
        .filter(function (r) {
          return r.s > 0;
        })
        .sort(function (a, b) {
          return b.s - a.s;
        })
        .slice(0, 24)
        .map(function (r) {
          return r.e;
        });

      selected = -1;
      render(hits, q);
    }

    on(input, "input", run);
    on(input, "focus", function () {
      if (input.value.trim().length >= 2) run();
    });

    on(input, "keydown", function (ev) {
      var nodes = $$(".search__hit", results);
      if (ev.key === "Escape") {
        close();
        input.blur();
        return;
      }
      if (!nodes.length) return;
      if (ev.key === "ArrowDown") {
        ev.preventDefault();
        selected = (selected + 1) % nodes.length;
        highlight(selected);
      } else if (ev.key === "ArrowUp") {
        ev.preventDefault();
        selected = (selected - 1 + nodes.length) % nodes.length;
        highlight(selected);
      } else if (ev.key === "Enter") {
        if (selected >= 0 && nodes[selected]) {
          ev.preventDefault();
          nodes[selected].click();
        } else if (nodes[0]) {
          ev.preventDefault();
          nodes[0].click();
        }
      }
    });

    on(document, "click", function (ev) {
      if (!ev.target.closest || !ev.target.closest(".search")) close();
    });

    // "/" focuses search, matching the hint in the field.
    on(document, "keydown", function (ev) {
      if (ev.key !== "/" || ev.metaKey || ev.ctrlKey || ev.altKey) return;
      var t = ev.target;
      var tag = t && t.tagName ? t.tagName.toLowerCase() : "";
      if (tag === "input" || tag === "textarea" || (t && t.isContentEditable))
        return;
      ev.preventDefault();
      input.focus();
      input.select();
    });

    if (!index.length) {
      input.placeholder = "Search index not loaded";
      input.disabled = true;
    }
  }

  /* ------------------------------------------------------------ progress */

  function renderProgress() {
    var revised = getRevised();
    var count = revised.length;
    var pct = Math.round((count / TOTAL_SUBJECTS) * 100);

    $$("[data-progress-count]").forEach(function (el) {
      el.textContent = count + " / " + TOTAL_SUBJECTS;
    });
    $$("[data-progress-pct]").forEach(function (el) {
      el.textContent = pct + "%";
    });
    $$("[data-progress-fill]").forEach(function (el) {
      el.setAttribute("data-value", String(pct));
      // Header meters render immediately; in-page ones animate on reveal.
      if (el.closest(".site-header")) el.style.width = pct + "%";
    });
    $$(".subject-card").forEach(function (card) {
      var slug = card.getAttribute("data-slug");
      var badge = $("[data-revised-badge]", card);
      if (!slug || !badge) return;
      badge.hidden = revised.indexOf(slug) === -1;
    });
  }

  function initRevisedToggle() {
    var btn = $("[data-mark-revised]");
    if (!btn || !SUBJECT_SLUG) return;

    function paint() {
      var done = isRevised(SUBJECT_SLUG);
      btn.setAttribute("aria-pressed", done ? "true" : "false");
      var label = $("[data-mark-label]", btn) || btn;
      label.textContent = done ? "Revised ✓" : "Mark as revised";
    }

    paint();
    on(btn, "click", function () {
      setRevised(SUBJECT_SLUG, !isRevised(SUBJECT_SLUG));
      paint();
      renderProgress();
      var link = $('.subject-link[aria-current="page"]');
      if (link) {
        if (isRevised(SUBJECT_SLUG)) link.setAttribute("data-revised", "true");
        else link.removeAttribute("data-revised");
      }
    });
  }

  function recordVisit() {
    if (!SUBJECT_SLUG || !SUBJECT_NAME) return;
    store.setJSON(KEY_LAST, {
      slug: SUBJECT_SLUG,
      name: SUBJECT_NAME,
      page: "subjects/" + SUBJECT_SLUG + ".html",
    });
  }

  function initResume() {
    var box = $("[data-resume]");
    if (!box) return;
    var last = store.getJSON(KEY_LAST, null);
    if (!last || !last.page || !last.name) {
      box.hidden = true;
      return;
    }
    var link = $("[data-resume-link]", box);
    if (link) {
      link.href = SITE_ROOT + last.page;
      link.textContent = last.name;
    }
    box.hidden = false;
  }

  function initStorageNotice() {
    if (store.available) return;
    $$("[data-storage-notice]").forEach(function (el) {
      el.hidden = false;
    });
  }

  /* --------------------------------------------------------- back to top */

  function initBackToTop() {
    var btn = $(".back-to-top");
    if (!btn) return;
    function check() {
      btn.setAttribute("data-show", window.scrollY > 600 ? "true" : "false");
    }
    on(window, "scroll", check, { passive: true });
    check();
    on(btn, "click", function () {
      window.scrollTo({
        top: 0,
        behavior: reduceMotion.matches ? "auto" : "smooth",
      });
    });
  }

  /* ------------------------------------------------------------ per-section
     Adds a live count of questions to each section head that asks for one. */

  function initCounts() {
    $$("[data-count-questions]").forEach(function (el) {
      var scope = document.getElementById(
        el.getAttribute("data-count-questions")
      );
      if (!scope) return;
      var n = $$(".qa", scope).length;
      el.textContent = n + (n === 1 ? " question" : " questions");
    });
  }

  /* ---------------------------------------------------------------- boot */

  function boot() {
    pageEnter();
    initAccordions();
    initExpandControls();
    initSidebar();
    initToc();
    initSearch();
    initCounts();
    initReveal();
    initMeters();
    renderProgress();
    initRevisedToggle();
    recordVisit();
    initResume();
    initStorageNotice();
    initBackToTop();
    openFromHash();
    on(window, "hashchange", openFromHash);
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
