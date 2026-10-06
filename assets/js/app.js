/* Sarathi Hub renderer — reads window.SARATHI (content/content.js) and
   draws the page named in <body data-page="...">. No dependencies. */
(function () {
  "use strict";

  var C = window.SARATHI;
  var root = document.getElementById("app");
  if (!C || !root) {
    if (root) root.innerHTML = '<p class="error">Content failed to load. Check content/content.js for a syntax error.</p>';
    return;
  }
  var TZ = (C.site && C.site.timezone) || "Asia/Kolkata";
  var pageId = document.body.getAttribute("data-page") || "home";

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  // Tiny inline markdown: `code`, **bold**, *italic*, [text](url)
  function md(s) {
    var out = esc(s);
    out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
    out = out.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    out = out.replace(/(^|[^*])\*([^*\s][^*]*?)\*/g, "$1<em>$2</em>");
    out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (_, t, url) {
      var safe = /^(https?:|mailto:|tel:|[\w\-./#]+$)/i.test(url) ? url : "#";
      var ext = /^https?:/i.test(safe);
      return '<a href="' + safe + '"' + (ext ? ' target="_blank" rel="noopener noreferrer"' : "") + ">" + t + "</a>";
    });
    return out;
  }
  function paras(arr) {
    return (arr || []).map(function (p) { return "<p>" + md(p) + "</p>"; }).join("");
  }
  function h2(t) { return t ? '<h2 class="sec-title">' + md(t) + "</h2>" : ""; }

  function istParts(d) {
    var f = new Intl.DateTimeFormat("en-GB", {
      timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", hourCycle: "h23"
    });
    var o = {};
    f.formatToParts(d || new Date()).forEach(function (p) { o[p.type] = p.value; });
    return { y: o.year, m: o.month, d: o.day, h: parseInt(o.hour, 10) % 24, min: parseInt(o.minute, 10) };
  }
  function istDateKey() { var p = istParts(); return p.y + "-" + p.m + "-" + p.d; }
  function fmtDate(iso) {
    var parts = String(iso).split("-");
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (parts.length !== 3) return esc(iso);
    return months[parseInt(parts[1], 10) - 1] + " " + parseInt(parts[2], 10) + ", " + parts[0];
  }
  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); return true; } catch (e) { return false; } }
  };

  /* ---------- icons (inline SVG, currentColor) ---------- */
  var ICONS = {
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    lotus: '<path d="M12 20c-4 0-8-2-9-6 3 0 6 1 9 4 3-3 6-4 9-4-1 4-5 6-9 6z"/><path d="M12 18c-2-2-3-5-3-8 1 0 2 1 3 2 1-1 2-2 3-2 0 3-1 6-3 8z"/><path d="M12 12c0-3 0-6 0-8"/>',
    code: '<path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/>',
    wheel: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M12 3v7M12 14v7M3 12h7M14 12h7M5.6 5.6l5 5M13.4 13.4l5 5M18.4 5.6l-5 5M10.6 13.4l-5 5"/>',
    book: '<path d="M4 4h6a3 3 0 013 3v13a2 2 0 00-2-2H4z"/><path d="M20 4h-6a3 3 0 00-3 3v13a2 2 0 012-2h7z"/>',
    feather: '<path d="M20 4C12 4 6 10 5 19"/><path d="M20 4c0 7-5 12-12 13"/><ellipse cx="15" cy="9" rx="2" ry="2.6" transform="rotate(40 15 9)"/>',
    heart: '<path d="M12 20s-7-4.5-9-9a4.8 4.8 0 019-3 4.8 4.8 0 019 3c-2 4.5-9 9-9 9z"/>',
    plane: '<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>',
    phone: '<path d="M5 3h4l2 5-2.5 1.5a11 11 0 006 6L16 13l5 2v4a2 2 0 01-2 2A17 17 0 013 5a2 2 0 012-2z"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    loop: '<path d="M20 12a8 8 0 11-3-6.2"/><path d="M20 4v4h-4"/>'
  };
  function icon(name, cls) {
    return '<svg class="ico ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
  }

  /* ---------- shared chrome ---------- */
  function renderChrome() {
    var nav = C.pages.map(function (p) {
      var cur = p.id === pageId ? ' aria-current="page"' : "";
      return '<a class="nav-link accent-' + esc(p.accent) + '" href="' + esc(p.file) + '"' + cur + ">" + esc(p.title) + "</a>";
    }).join("");
    var header = document.getElementById("site-header");
    if (header) {
      header.innerHTML =
        '<div class="bar">' +
        '<a class="brand" href="index.html" aria-label="Sarathi Hub home">' +
        '<img src="assets/img/sarathi-logo.webp" width="40" height="40" alt="" class="brand-logo">' +
        '<span class="brand-name">' + esc(C.site.name) + "</span></a>" +
        '<a class="help-pill" href="help.html">' + icon("heart") + "<span>Help now</span></a>" +
        "</div>" +
        '<nav class="nav" aria-label="Sections"><a class="nav-link" href="index.html"' + (pageId === "home" ? ' aria-current="page"' : "") + ">Home</a>" + nav + "</nav>";
    }
    // Keep the current section visible in the horizontally scrolling nav (mobile)
    var navEl = header && header.querySelector(".nav");
    var curEl = navEl && navEl.querySelector('[aria-current="page"]');
    if (navEl && curEl && navEl.scrollWidth > navEl.clientWidth) {
      navEl.scrollLeft = Math.max(0, curEl.offsetLeft - (navEl.clientWidth - curEl.offsetWidth) / 2);
    }
    var footer = document.getElementById("site-footer");
    if (footer) {
      footer.innerHTML =
        '<p class="foot-help">Need to talk? <a href="tel:14416">Tele-MANAS 14416</a> · free, 24x7</p>' +
        '<p class="foot-meta">' + esc(C.site.name) + " · private · last updated " + esc(C.site.lastUpdatedLabel) + "</p>";
    }
  }

  /* ---------- section renderers ---------- */
  var R = {};

  R.text = function (s) { return '<section class="card sec">' + h2(s.title) + paras(s.body) + "</section>"; };

  R.list = function (s) {
    return '<section class="card sec">' + h2(s.title) + '<ul class="list">' +
      (s.items || []).map(function (i) { return "<li>" + md(i) + "</li>"; }).join("") + "</ul></section>";
  };

  R.steps = function (s) {
    return '<section class="card sec">' + h2(s.title) + '<ol class="steps">' +
      (s.items || []).map(function (i) { return "<li><span>" + md(i) + "</span></li>"; }).join("") + "</ol></section>";
  };

  R.chips = function (s) {
    return '<section class="card sec">' + h2(s.title) + '<ul class="chips">' +
      (s.items || []).map(function (i) { return "<li>" + md(i) + "</li>"; }).join("") + "</ul></section>";
  };

  R.callout = function (s) {
    return '<section class="callout tone-' + esc(s.tone || "gold") + '">' + (s.title ? "<h3>" + md(s.title) + "</h3>" : "") + paras(s.body) + "</section>";
  };

  function verseCard(ref, text, opts) {
    opts = opts || {};
    return '<figure class="verse">' +
      '<div class="verse-head"><span class="verse-ref">BG ' + esc(ref) + "</span>" +
      (opts.theme ? '<span class="verse-theme">' + esc(opts.theme) + "</span>" : "") +
      (opts.speaker ? '<span class="verse-speaker">' + esc(opts.speaker) + "</span>" : "") + "</div>" +
      "<blockquote>" + md(text) + "</blockquote>" +
      (opts.note ? '<figcaption>' + md(opts.note) + "</figcaption>" : "") +
      "</figure>";
  }

  R.verse = function (s) {
    var v = (C.gita.verses || {})[s.ref] || {};
    return '<section class="sec">' + verseCard(s.ref, s.text || v.text, { speaker: s.speaker, note: s.note, theme: s.theme }) + "</section>";
  };

  R.verses = function (s) {
    return '<section class="sec verses">' + h2(s.title) + (s.refs || []).map(function (r) {
      var v = C.gita.verses[r];
      return v ? verseCard(r, v.text, { theme: v.theme }) : "";
    }).join("") + "</section>";
  };

  R.loop = function (s) {
    var items = s.items || [];
    var nodes = items.map(function (t, i) {
      return '<li class="loop-node"><span class="loop-num">' + (i + 1) + "</span>" + md(t) + "</li>" +
        (i < items.length - 1 ? '<li class="loop-arrow" aria-hidden="true">' + icon("arrow") + "</li>" : "");
    }).join("");
    return '<section class="card sec">' + h2(s.title) +
      '<ol class="loop">' + nodes + '<li class="loop-back" aria-hidden="true">' + icon("loop") + "<span>and round again</span></li></ol>" +
      paras(s.body) + "</section>";
  };

  function currentSlot(items) {
    var h = istParts().h, cur = -1;
    items.forEach(function (it, i) { if (typeof it.hour === "number" && it.hour <= h) cur = i; });
    // After 10 PM review window (beyond midnight / before 6 AM) -> rest
    if (h >= 0 && h < (items[0] ? items[0].hour : 6)) cur = -1;
    return cur;
  }

  R.schedule = function (s) {
    var items = s.items || [];
    var cur = currentSlot(items);
    return '<section class="card sec">' + h2(s.title) +
      '<ol class="timeline">' + items.map(function (it, i) {
        var state = i === cur ? " is-now" : (i < cur ? " is-past" : "");
        return '<li class="slot' + state + '"><div class="slot-time">' + esc(it.time) + "</div>" +
          '<div class="slot-body"><div class="slot-label">' + esc(it.label) + (i === cur ? ' <span class="now-tag">now</span>' : "") + "</div>" +
          "<p>" + md(it.text) + "</p></div></li>";
      }).join("") + "</ol>" +
      (cur === -1 ? '<p class="muted small">Outside the reminder window. Rest well; the next nudge is at 6:00 AM IST.</p>' : "") +
      "</section>";
  };

  R.visualize = function (s) {
    return '<section class="card sec">' + h2(s.title) + (s.intro ? '<p class="muted">' + md(s.intro) + "</p>" : "") +
      '<div class="viz">' + (s.parts || []).map(function (p, i) {
        return '<div class="viz-part viz-' + (i + 1) + '"><h3>' + md(p.title) + '</h3><ul class="list">' +
          (p.prompts || []).map(function (q) { return "<li>" + md(q) + "</li>"; }).join("") + "</ul></div>";
      }).join("") + "</div></section>";
  };

  R.prompt = function (s) {
    var key = "sarathi:" + (s.id || "prompt") + ":" + istDateKey();
    var id = "prompt-" + esc(s.id || "p");
    return '<section class="card sec prompt" data-key="' + esc(key) + '">' + h2(s.title) +
      '<label class="sr-only" for="' + id + '">' + esc(s.title) + "</label>" +
      '<textarea id="' + id + '" rows="2" placeholder="' + esc(s.placeholder || "") + '"></textarea>' +
      '<div class="prompt-row"><label class="check"><input type="checkbox" class="prompt-done"> Done for today</label>' +
      '<span class="prompt-status muted small" aria-live="polite"></span></div>' +
      (s.help ? '<p class="muted small">' + md(s.help) + "</p>" : "") + "</section>";
  };

  R.todo = function (s) {
    return '<section class="card sec todo">' + h2(s.title) + (s.note ? '<p class="placeholder-note">' + md(s.note) + "</p>" : "") +
      '<div class="todo-grid">' + (s.groups || []).map(function (g) {
        return '<div class="todo-group"><h3>' + md(g.title) + '</h3><ul class="list placeholder">' +
          (g.items || []).map(function (i) { return "<li>" + md(i) + "</li>"; }).join("") + "</ul></div>";
      }).join("") + "</div></section>";
  };

  R.journal = function (s) {
    function col(arr) {
      return arr && arr.length ? '<ul class="list">' + arr.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul>"
        : '<p class="empty">Nothing logged yet.</p>';
    }
    return '<section class="sec journal">' + h2(s.title) + (s.help ? '<p class="muted small">' + md(s.help) + "</p>" : "") +
      (s.entries || []).map(function (e) {
        return '<article class="card entry"><header class="entry-head"><time datetime="' + esc(e.date) + '">' + fmtDate(e.date) + "</time></header>" +
          '<p class="entry-note">' + md(e.note) + "</p>" +
          '<div class="entry-cols"><div class="col worked"><h3>What worked</h3>' + col(e.worked) + "</div>" +
          '<div class="col didnt"><h3>What didn\'t</h3>' + col(e.didnt) + "</div></div></article>";
      }).join("") + "</section>";
  };

  R.contact = function (s) {
    return '<section class="sec">' + h2(s.title) + (s.items || []).map(function (c) {
      return '<div class="contact card">' +
        '<div class="contact-main"><h3>' + esc(c.name) + "</h3><p>" + md(c.detail) + "</p></div>" +
        '<div class="contact-actions">' +
        (c.phone ? '<a class="btn btn-call" href="tel:' + esc(c.phone) + '">' + icon("phone") + "Call " + esc(c.phone) + "</a>" : "") +
        (c.link ? '<a class="btn btn-ghost" href="' + esc(c.link) + '" target="_blank" rel="noopener noreferrer">Website</a>' : "") +
        "</div></div>";
    }).join("") + "</section>";
  };

  R.checklist = function (s) {
    var base = "sarathi:check:" + (s.id || "list") + ":";
    return '<section class="card sec checklist">' + h2(s.title) + (s.note ? '<p class="muted small">' + md(s.note) + "</p>" : "") +
      '<div class="todo-grid">' + (s.groups || []).map(function (g, gi) {
        return '<div class="check-group"><h3>' + md(g.title) + '</h3><ul class="checks">' +
          (g.items || []).map(function (it, ii) {
            var id = "chk-" + esc(s.id || "list") + "-" + gi + "-" + ii;
            return '<li><input type="checkbox" id="' + id + '" data-key="' + esc(base + gi + "-" + ii) + '"><label for="' + id + '">' + md(it) + "</label></li>";
          }).join("") + '</ul><p class="check-count muted small" aria-live="polite"></p></div>';
      }).join("") + "</div></section>";
  };

  R.goals = function (s) {
    var phases = (s.phases || []).map(function (ph, i) {
      return '<li class="phase phase-' + (i + 1) + '"><div class="phase-head"><span class="phase-title">' + esc(ph.title) + "</span>" +
        (ph.period ? '<span class="phase-period">' + esc(ph.period) + "</span>" : "") + "</div>" +
        '<ul class="goal-list">' + (ph.items || []).map(function (g) {
          return "<li><strong>" + md(g.goal) + "</strong>" + (g.detail ? '<span class="goal-detail">' + md(g.detail) + "</span>" : "") + "</li>";
        }).join("") + "</ul></li>";
    }).join("");
    return '<section class="card sec goals">' + h2(s.title) +
      (s.theme && s.theme.length ? '<p class="goal-theme">' + s.theme.map(esc).join(' <span aria-hidden="true">•</span> ') + "</p>" : "") +
      '<ol class="phases">' + phases + "</ol>" +
      (s.motto ? '<blockquote class="motto">' + md(s.motto) + "</blockquote>" : "") + "</section>";
  };

  R.vision = function (s) {
    var dims = (s.width ? ' width="' + esc(s.width) + '"' : "") + (s.height ? ' height="' + esc(s.height) + '"' : "");
    var img = '<img class="vision-img" src="' + esc(s.fallback || s.image) + '" alt="' + esc(s.alt || s.title) + '"' + dims + ' decoding="async">';
    var pic = s.fallback && s.fallback !== s.image ? '<picture><source type="image/webp" srcset="' + esc(s.image) + '">' + img + "</picture>" : img;
    var inner = s.image
      ? '<a class="vision-link" href="' + esc(s.full || s.fallback || s.image) + '" target="_blank" rel="noopener" aria-label="Open the vision card full size">' + pic + "</a>"
      : '<div class="vision-empty"><img src="assets/img/sarathi-logo.webp" width="72" height="72" alt="">' +
        '<p class="vision-text">' + md(s.placeholder || "Your vision card will appear here.") + "</p>" +
        (s.help ? '<p class="muted small">' + md(s.help) + "</p>" : "") + "</div>";
    return (s.image ? h2(s.title || "Vision card") : "") +
      '<section class="sec vision' + (s.image ? " has-image" : "") + '">' + (s.image ? "" : '<span class="vision-label">' + esc(s.title || "Vision card") + "</span>") + inner + "</section>" +
      (s.image && s.caption ? '<p class="vision-cap muted small">' + md(s.caption) + "</p>" : "");
  };

  function renderSections(sections) {
    return (sections || []).map(function (s) {
      var fn = R[s.type];
      return fn ? fn(s) : "<!-- unknown section type: " + esc(s.type) + " -->";
    }).join("");
  }

  /* ---------- pages ---------- */
  function greeting() {
    var h = istParts().h;
    if (h < 5) return "Rest well";
    if (h < 12) return "Good morning";
    if (h < 17) return "Good afternoon";
    if (h < 21) return "Good evening";
    return "Good night";
  }

  function nextNudge() {
    var today = C.pages.filter(function (p) { return p.id === "today"; })[0];
    var sched = today && today.sections.filter(function (s) { return s.type === "schedule"; })[0];
    if (!sched) return null;
    var items = sched.items, h = istParts().h;
    var cur = currentSlot(items);
    var nxt = items.filter(function (it) { return it.hour > h; })[0] || items[0];
    return { cur: cur >= 0 ? items[cur] : null, next: nxt };
  }

  function renderHome() {
    var refs = C.home.verseOfDayRefs || [];
    var p = istParts();
    var dayIndex = Math.floor(Date.UTC(+p.y, +p.m - 1, +p.d) / 86400000);
    var ref = refs.length ? refs[dayIndex % refs.length] : null;
    var v = ref && C.gita.verses[ref];
    var n = nextNudge();
    var goal = store.get("sarathi:goal:" + istDateKey());

    var cards = C.pages.map(function (pg) {
      return '<a class="tile accent-' + esc(pg.accent) + (pg.featured ? " is-featured" : "") + '" href="' + esc(pg.file) + '">' +
        '<span class="tile-ico">' + icon(pg.icon) + "</span>" +
        '<span class="tile-text"><span class="tile-title">' + esc(pg.title) + '</span><span class="tile-sub">' + esc(pg.subtitle) + "</span></span>" +
        '<span class="tile-go">' + icon("arrow") + "</span></a>";
    }).join("");

    root.innerHTML =
      '<section class="hero">' +
      '<img class="hero-logo" src="assets/img/sarathi-logo-512.webp" width="160" height="160" alt="Sarathi emblem: chariot wheel and peacock feather">' +
      '<p class="eyebrow">' + esc(greeting()) + ", " + esc(C.home.greetingName) + "</p>" +
      "<h1>" + esc(C.site.name) + "</h1>" +
      '<p class="lead">' + md(C.home.intro) + "</p>" +
      '<p class="updated">Last updated: <time datetime="' + esc(C.site.lastUpdated) + '">' + esc(C.site.lastUpdatedLabel) + "</time></p>" +
      "</section>" +
      '<section class="now-grid">' +
      (n ? '<a class="card now" href="today.html"><span class="now-k">' + (n.cur ? "Right now · " + esc(n.cur.time) + " IST" : "Next · " + esc(n.next.time) + " IST") + "</span>" +
        '<span class="now-v">' + esc(n.cur ? n.cur.label : n.next.label) + "</span>" +
        '<span class="now-t">' + md(n.cur ? n.cur.text : n.next.text) + "</span></a>" : "") +
      '<a class="card now goal" href="today.html"><span class="now-k">One goal for today</span>' +
      '<span class="now-v">' + (goal ? esc(goal) : "Not set yet") + "</span>" +
      '<span class="now-t">' + (goal ? "Keep it simple. One step at a time." : "Tap to set it. One goal, small enough to finish.") + "</span></a>" +
      "</section>" +
      (v ? '<section class="sec"><h2 class="sec-title">Verse for today</h2>' + verseCard(ref, v.text, { theme: v.theme }) + "</section>" : "") +
      '<section class="sec"><h2 class="sec-title">Sections</h2><div class="tiles">' + cards + "</div></section>";
  }

  function renderPage(pg) {
    root.innerHTML =
      '<header class="page-head accent-' + esc(pg.accent) + '">' +
      '<span class="page-ico">' + icon(pg.icon) + "</span>" +
      "<div><h1>" + esc(pg.title) + "</h1>" + (pg.subtitle ? '<p class="lead">' + md(pg.subtitle) + "</p>" : "") + "</div></header>" +
      renderSections(pg.sections);
  }

  /* ---------- interactivity ---------- */
  function wirePrompts() {
    Array.prototype.forEach.call(document.querySelectorAll(".prompt"), function (el) {
      var key = el.getAttribute("data-key");
      var ta = el.querySelector("textarea");
      var done = el.querySelector(".prompt-done");
      var status = el.querySelector(".prompt-status");
      ta.value = store.get(key) || "";
      done.checked = store.get(key + ":done") === "1";
      el.classList.toggle("is-done", done.checked);
      var t;
      ta.addEventListener("input", function () {
        clearTimeout(t);
        t = setTimeout(function () {
          status.textContent = store.set(key, ta.value.trim()) ? "Saved on this device" : "Could not save (private mode?)";
        }, 300);
      });
      done.addEventListener("change", function () {
        store.set(key + ":done", done.checked ? "1" : "0");
        el.classList.toggle("is-done", done.checked);
        status.textContent = done.checked ? "Well done. That's abhyasa." : "";
      });
    });
  }

  function wireChecklists() {
    Array.prototype.forEach.call(document.querySelectorAll(".check-group"), function (g) {
      var boxes = g.querySelectorAll("input[type=checkbox]");
      var count = g.querySelector(".check-count");
      function update() {
        var n = 0;
        Array.prototype.forEach.call(boxes, function (b) { if (b.checked) n++; });
        count.textContent = n + " of " + boxes.length + " done";
      }
      Array.prototype.forEach.call(boxes, function (b) {
        b.checked = store.get(b.getAttribute("data-key")) === "1";
        b.addEventListener("change", function () { store.set(b.getAttribute("data-key"), b.checked ? "1" : "0"); update(); });
      });
      update();
    });
    // If the vision image path is set but the file is missing, fall back gracefully.
    Array.prototype.forEach.call(document.querySelectorAll(".vision-img"), function (img) {
      img.addEventListener("error", function () {
        if (!img.dataset.retried) {
          img.dataset.retried = "1";
          var pic = img.closest("picture");
          if (pic) { var src = pic.querySelector("source"); if (src) src.remove(); }
          img.src = img.getAttribute("src").split("?")[0] + "?r=" + Date.now();
          return;
        }
        var sec = img.closest(".vision");
        var box = img.closest(".vision-link") || img;
        if (sec) sec.classList.remove("has-image");
        box.outerHTML = '<div class="vision-empty"><p class="vision-text">Your vision card will appear here.</p><p class="muted small">Image not found at ' + esc(img.getAttribute("src")) + ".</p></div>";
      });
    });
  }

  /* ---------- boot ---------- */
  renderChrome();
  if (pageId === "home") {
    renderHome();
  } else {
    var pg = C.pages.filter(function (p) { return p.id === pageId; })[0];
    if (pg) {
      renderPage(pg);
      document.title = pg.title + " · " + C.site.name;
    } else {
      root.innerHTML = '<p class="error">Page "' + esc(pageId) + '" not found in content.js.</p>';
    }
  }
  wirePrompts();
  wireChecklists();
})();
