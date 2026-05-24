/**
 * Country Bistro — shared nav & footer
 * Loaded by index.html, menu.html, gallery.html
 * Usage: <script src="shared.js"></script> anywhere in <body>
 * Injects nav at top and footer at bottom automatically.
 */
(function() {

  /* ── Detect active page for nav highlight ─────────────────── */
  const page = location.pathname.split('/').pop() || 'index.html';
  const isHome    = page === '' || page === 'index.html';
  const isMenu    = page === 'menu.html';
  const isGallery = page === 'gallery.html';

  function navLink(href, label, id) {
    const active = (
      (id === 'nav-home'    && isHome)    ||
      (id === 'nav-menu'    && isMenu)    ||
      (id === 'nav-gallery' && isGallery)
    ) ? ' style="color:var(--crimson);font-weight:500"' : '';
    return `<li><a href="${href}"${active}>${label}</a></li>`;
  }

  /* ── NAV HTML ──────────────────────────────────────────────── */
  const navHTML = `
<nav id="cb-nav">
  <a href="index.html" class="nav-logo">
    <div class="nav-logo-icon">
      <svg viewBox="0 0 40 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20Q4 14 20 13Q36 14 36 20L33 22Q28 20 20 20Q12 20 7 22Z"/>
        <path d="M7 22Q6 26 4 28L36 28Q34 26 33 22Q28 21 20 21Q12 21 7 22Z"/>
        <path d="M11 13Q14 6 20 5Q26 6 29 13" fill="white"/>
        <path d="M11 13Q14 9 20 8Q26 9 29 13"/>
      </svg>
    </div>
    <div>
      <div class="nav-logo-text">Country Bistro</div>
      <div class="nav-logo-sub">Food &amp; Drinks</div>
    </div>
  </a>
  <ul class="nav-links" id="nav-links">
    ${navLink('index.html#about', 'About', 'nav-home')}
    ${navLink('menu.html', 'Menu', 'nav-menu')}
    ${navLink('index.html#spaces', 'Spaces', 'nav-spaces')}
    ${navLink('gallery.html', 'Gallery', 'nav-gallery')}
    ${navLink('index.html#conference-form', 'Venue', 'nav-venue')}
    <li><a href="index.html#reservation" class="nav-cta">Reserve a table</a></li>
  </ul>
  <div class="nav-right">
    <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu" onclick="cbToggleMenu()">
      <span></span><span></span><span></span>
    </button>
    <button class="theme-toggle" onclick="cbToggleTheme()">
      <span id="cb-theme-icon">☀</span> <span id="cb-theme-label">Light</span>
    </button>
  </div>
</nav>

<!-- Mobile menu overlay -->
<div class="nav-mobile-overlay" id="nav-mobile-overlay" onclick="cbCloseMenu()"></div>
<div class="nav-mobile-drawer" id="nav-mobile-drawer">
  <button class="nav-mobile-close" onclick="cbCloseMenu()">✕</button>
  <ul class="nav-mobile-links">
    <li><a href="index.html#about" onclick="cbCloseMenu()">About</a></li>
    <li><a href="menu.html" onclick="cbCloseMenu()">Menu</a></li>
    <li><a href="index.html#spaces" onclick="cbCloseMenu()">Spaces</a></li>
    <li><a href="gallery.html" onclick="cbCloseMenu()">Gallery</a></li>
    <li><a href="index.html#conference-form" onclick="cbCloseMenu()">Venue</a></li>
    <li><a href="index.html#reservation" class="nav-mobile-cta" onclick="cbCloseMenu()">Reserve a table</a></li>
  </ul>
  <div class="nav-mobile-contact">
    <a href="tel:+254768262450">📞 +254 768 262450</a>
    <a href="https://wa.me/254768262450" target="_blank">💬 WhatsApp us</a>
    <a href="https://instagram.com/CountryBistroJuja" target="_blank">📸 @CountryBistroJuja</a>
  </div>
</div>`;

  /* ── FOOTER HTML ───────────────────────────────────────────── */
  const footerHTML = `
<footer id="cb-footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <div style="font-family:'Playfair Display',serif;font-size:1.3rem;color:white;font-weight:700">
        Country <em style="color:var(--gold)">Bistro</em>
      </div>
      <p>Modern dining with the warmth of the Kenyan countryside. Your home away from home at Juja City Mall since 2020.</p>
      <div style="display:flex;gap:1rem;margin-top:.5rem">
        <a href="https://instagram.com/CountryBistroJuja" id="sf-ig" target="_blank" style="color:rgba(255,255,255,.5);font-size:.82rem;text-decoration:none;transition:color .2s" onmouseenter="this.style.color='#C9963A'" onmouseleave="this.style.color='rgba(255,255,255,.5)'">Instagram</a>
        <a href="#" id="sf-fb" target="_blank" style="color:rgba(255,255,255,.5);font-size:.82rem;text-decoration:none;transition:color .2s" onmouseenter="this.style.color='#C9963A'" onmouseleave="this.style.color='rgba(255,255,255,.5)'">Facebook</a>
        <a href="https://wa.me/254768262450" id="sf-wa" target="_blank" style="color:rgba(255,255,255,.5);font-size:.82rem;text-decoration:none;transition:color .2s" onmouseenter="this.style.color='#C9963A'" onmouseleave="this.style.color='rgba(255,255,255,.5)'">WhatsApp</a>
      </div>
    </div>
    <div>
      <div class="footer-title">Navigate</div>
      <ul class="footer-links">
        <li><a href="index.html#offers">Today's specials</a></li>
        <li><a href="menu.html">Full menu</a></li>
        <li><a href="index.html#reservation">Reserve a table</a></li>
        <li><a href="index.html#conference-form">Private events</a></li>
        <li><a href="gallery.html">Gallery</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-title">Contact</div>
      <div class="footer-contact-item"><span>📍</span><span>Ground Floor, Juja City Mall</span></div>
      <div class="footer-contact-item"><span>📞</span><span id="sf-phone1">+254 768 262450</span></div>
      <div class="footer-contact-item"><span>📞</span><span id="sf-phone2">+254 707 356971</span></div>
      <div class="footer-contact-item"><span>✉️</span><span id="sf-email">info@countrybistro.co.ke</span></div>
      <div class="footer-contact-item"><span>🌐</span><span>countrybistro.co.ke</span></div>
    </div>
  </div>
  <div class="footer-bottom">
    © 2025 Country Bistro – Prescott Venture Limited. All rights reserved.
  </div>
</footer>`;

  /* ── SHARED CSS ────────────────────────────────────────────── */
  const sharedCSS = `
<style id="cb-shared-styles">
  /* ── Nav shared ── */
  :root{--crimson:#B31020;--crimson-dark:#8B0C18;--gold:#C9963A;--cream:#FAF6F0;--text-main:#1A1210;--text-muted:#6B5B52;--surface:#FFFFFF;--surface2:#FAF6F0;--border:rgba(139,12,24,0.12);--nav-bg:rgba(250,246,240,0.96);--shadow:0 4px 32px rgba(26,18,16,0.08)}
  [data-theme="dark"]{--cream:#1A1210;--text-main:#F5EDE4;--text-muted:#B8A99E;--surface:#231A17;--surface2:#2C201C;--border:rgba(201,150,58,0.18);--nav-bg:rgba(26,18,16,0.97);--shadow:0 4px 32px rgba(0,0,0,0.4)}

  #cb-nav{position:fixed;top:0;left:0;right:0;z-index:200;background:var(--nav-bg);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid var(--border);padding:0 2rem;display:flex;align-items:center;justify-content:space-between;height:70px;transition:background .3s}
  .nav-logo{display:flex;align-items:center;gap:10px;text-decoration:none}
  .nav-logo-icon{width:42px;height:42px;background:var(--crimson);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}
  .nav-logo-icon svg{width:26px;height:26px;fill:white}
  .nav-logo-text{font-family:'Playfair Display',serif;font-size:1.1rem;font-weight:700;color:var(--crimson);line-height:1.1}
  .nav-logo-sub{font-size:.58rem;color:var(--text-muted);letter-spacing:2px;text-transform:uppercase}
  .nav-links{display:flex;align-items:center;gap:1.8rem;list-style:none}
  .nav-links a{text-decoration:none;color:var(--text-main);font-size:.84rem;letter-spacing:.04em;transition:color .2s}
  .nav-links a:hover{color:var(--crimson)}
  .nav-cta{background:var(--crimson);color:white!important;padding:.44rem 1.2rem;border-radius:100px;font-size:.82rem!important;font-weight:500!important;transition:background .2s!important}
  .nav-cta:hover{background:var(--crimson-dark)!important}
  .nav-right{display:flex;align-items:center;gap:.8rem}
  .theme-toggle{background:none;border:1px solid var(--border);border-radius:100px;padding:.3rem .7rem;cursor:pointer;color:var(--text-main);font-size:.78rem;transition:background .2s;font-family:inherit}
  .theme-toggle:hover{background:var(--surface2)}

  /* Hamburger */
  .nav-hamburger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px;width:32px}
  .nav-hamburger span{display:block;height:2px;width:100%;background:var(--text-main);border-radius:2px;transition:transform .25s,opacity .25s}
  .nav-hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}
  .nav-hamburger.open span:nth-child(2){opacity:0}
  .nav-hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}

  /* Mobile overlay + drawer */
  .nav-mobile-overlay{position:fixed;inset:0;z-index:299;background:rgba(0,0,0,.5);opacity:0;pointer-events:none;transition:opacity .3s;backdrop-filter:blur(2px)}
  .nav-mobile-overlay.open{opacity:1;pointer-events:auto}
  .nav-mobile-drawer{position:fixed;top:0;right:-320px;width:300px;height:100vh;z-index:300;background:var(--surface);padding:2rem 1.5rem;transition:right .3s ease;box-shadow:-4px 0 24px rgba(0,0,0,.15);overflow-y:auto}
  .nav-mobile-drawer.open{right:0}
  .nav-mobile-close{background:none;border:1px solid var(--border);border-radius:50%;width:36px;height:36px;cursor:pointer;color:var(--text-main);font-size:1rem;display:flex;align-items:center;justify-content:center;margin-bottom:2rem;margin-left:auto}
  .nav-mobile-links{list-style:none;margin-bottom:2rem}
  .nav-mobile-links li{border-bottom:1px solid var(--border)}
  .nav-mobile-links a{display:block;padding:.9rem 0;color:var(--text-main);text-decoration:none;font-size:1rem;font-family:'DM Sans',sans-serif;transition:color .2s}
  .nav-mobile-links a:hover{color:var(--crimson)}
  .nav-mobile-cta{background:var(--crimson)!important;color:white!important;padding:.7rem 1.2rem!important;border-radius:100px;text-align:center;margin-top:.5rem;display:inline-block!important}
  .nav-mobile-contact{display:flex;flex-direction:column;gap:.7rem;margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid var(--border)}
  .nav-mobile-contact a{color:var(--text-muted);text-decoration:none;font-size:.88rem;transition:color .2s}
  .nav-mobile-contact a:hover{color:var(--crimson)}

  /* ── Footer shared ── */
  #cb-footer{background:#1A1210;color:white;padding:3rem 2rem 1.5rem}
  [data-theme="dark"] #cb-footer{background:#0F0A08}
  .footer-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:3rem;max-width:1100px;margin:0 auto 2rem}
  .footer-brand p{color:rgba(255,255,255,.5);font-size:.85rem;margin:.8rem 0 .5rem;max-width:280px;line-height:1.7}
  .footer-title{font-size:.72rem;letter-spacing:.15em;text-transform:uppercase;color:var(--gold);margin-bottom:.8rem}
  .footer-links{list-style:none}
  .footer-links li{margin-bottom:.5rem}
  .footer-links a{color:rgba(255,255,255,.6);text-decoration:none;font-size:.875rem;transition:color .2s}
  .footer-links a:hover{color:var(--gold)}
  .footer-contact-item{display:flex;gap:8px;margin-bottom:.6rem;font-size:.85rem;color:rgba(255,255,255,.6)}
  .footer-contact-item span:first-child{color:var(--gold)}
  .footer-bottom{border-top:1px solid rgba(255,255,255,.1);padding-top:1.5rem;text-align:center;font-size:.78rem;color:rgba(255,255,255,.35);max-width:1100px;margin:0 auto}

  @media(max-width:900px){
    .footer-grid{grid-template-columns:1fr 1fr;gap:2rem}
  }
  @media(max-width:600px){
    .footer-grid{grid-template-columns:1fr;gap:1.5rem}
    .nav-links{display:none}
    .nav-hamburger{display:flex}
    #cb-nav{padding:0 1rem}
  }
</style>`;

  /* ── INJECT nav and footer into DOM ───────────────────────── */
  function injectShared() {
    // Inject shared CSS into <head>
    document.head.insertAdjacentHTML('beforeend', sharedCSS);

    // Remove any existing inline nav/footer the page may have
    const existingNav = document.querySelector('nav');
    if (existingNav) existingNav.remove();
    const existingFooter = document.querySelector('footer');
    if (existingFooter) existingFooter.remove();

    // Insert nav at very top of body
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Insert footer at very end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  // Wait for full DOM before injecting so page content is in place
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectShared);
  } else {
    injectShared();
  }

  /* ── THEME + MENU + SETTINGS (run after DOM injected) ──────── */
  function initShared() {
  // Sync theme from localStorage across pages
  const savedTheme = localStorage.getItem('cb-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  function updateThemeBtn(theme) {
    const icon = document.getElementById('cb-theme-icon');
    const label = document.getElementById('cb-theme-label');
    if (icon) icon.textContent = theme === 'dark' ? '☾' : '☀';
    if (label) label.textContent = theme === 'dark' ? 'Dark' : 'Light';
  }
  updateThemeBtn(savedTheme);

  window.cbToggleTheme = function() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('cb-theme', next);
    updateThemeBtn(next);
    // Legacy support for pages with their own theme functions
    if (typeof toggleTheme === 'function') {
      // already handled above, do nothing
    }
  };

  /* ── MOBILE MENU ───────────────────────────────────────────── */
  window.cbToggleMenu = function() {
    const drawer = document.getElementById('nav-mobile-drawer');
    const overlay = document.getElementById('nav-mobile-overlay');
    const burger = document.getElementById('nav-hamburger');
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
    burger.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
  };
  window.cbCloseMenu = function() {
    document.getElementById('nav-mobile-drawer').classList.remove('open');
    document.getElementById('nav-mobile-overlay').classList.remove('open');
    document.getElementById('nav-hamburger').classList.remove('open');
    document.body.style.overflow = '';
  };

  /* ── LOAD CONTACT/SOCIAL FROM SANITY (if token available) ──── */
  // These are loaded on every page via shared.js
  // Token is read from the page's own SANITY_TOKEN variable if defined
  function tryLoadSharedSettings() {
    if (typeof SANITY_TOKEN === 'undefined' || SANITY_TOKEN === 'skOwffHA2wZ6iJ5uD1LZCbwJYbFBP1Ya9XX8BqJ5Gyca9REQr4k9K3nAexMR91OU8EpCBUYuzitxeabUe0A2holyXvGssXEcnoQWYy1Ymno48vjytVaWPY8aR5p6GikBMlyjCGgOGAMaMmKvdqABIjwxOBTydAEzWC9r2XcwUKv7dyRlI4AU') return;
    const pid = typeof SANITY_PROJECT_ID !== 'undefined' ? SANITY_PROJECT_ID : 'e7xkc9nk';
    const ds  = typeof SANITY_DATASET !== 'undefined' ? SANITY_DATASET : 'production';
    const url = `https://${pid}.api.sanity.io/v2024-01-01/data/query/${ds}?query=${encodeURIComponent('*[_type=="siteSettings"][0]{phone1,phone2,email,instagramHandle,facebookUrl,whatsappNumber}')}`;
    fetch(url, { headers: { Authorization: `Bearer ${SANITY_TOKEN}` } })
      .then(r => r.json())
      .then(({ result: s }) => {
        if (!s) return;
        if (s.phone1) document.getElementById('sf-phone1').textContent = s.phone1;
        if (s.phone2) document.getElementById('sf-phone2').textContent = s.phone2;
        if (s.email)  document.getElementById('sf-email').textContent = s.email;
        if (s.instagramHandle) {
          const el = document.getElementById('sf-ig');
          if (el) { el.href = `https://instagram.com/${s.instagramHandle}`; el.textContent = `@${s.instagramHandle}`; }
        }
        if (s.facebookUrl) {
          const el = document.getElementById('sf-fb');
          if (el) el.href = s.facebookUrl;
        }
        if (s.whatsappNumber) {
          const el = document.getElementById('sf-wa');
          if (el) el.href = `https://wa.me/${s.whatsappNumber}`;
        }
      })
      .catch(() => {});
  }
  // Run after a short delay so page scripts have defined SANITY_TOKEN
  setTimeout(tryLoadSharedSettings, 300);
  } // end initShared

  // Run initShared after injection completes
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShared);
  } else {
    initShared();
  }

})();
