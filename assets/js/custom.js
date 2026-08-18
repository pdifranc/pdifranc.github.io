// Dark mode toggle
(function() {
  var toggle = document.getElementById('theme-toggle');
  var icon = document.getElementById('theme-icon');
  if (!toggle) return;

  function updateIcon() {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  }

  updateIcon();

  toggle.addEventListener('click', function() {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    updateIcon();
  });
})();

// Typewriter effect
(function() {
  var el = document.getElementById('typewriter');
  if (!el) return;

  var roles = [
    'Senior Solutions Architect at AWS',
    'MLOps & Generative AI',
    'MLflow Contributor',
    'Speaker & Lecturer',
    'Agentic AI Enthusiast'
  ];

  // Respect reduced-motion preference: show static text, no animation
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion && reduceMotion.matches) {
    el.textContent = roles[0];
    return;
  }

  var roleIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    var current = roles[roleIdx];
    el.textContent = current.substring(0, charIdx);

    if (!deleting) {
      charIdx++;
      if (charIdx > current.length) {
        setTimeout(function() { deleting = true; tick(); }, 2000);
        return;
      }
    } else {
      charIdx--;
      if (charIdx < 0) {
        deleting = false;
        charIdx = 0;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 30 : 60);
  }
  tick();
})();

// Scroll-triggered fade-in
(function() {
  var targets = document.querySelectorAll('.page__content > p, .page__content > h2, .page__content > ul, .page__content > ol, .archive__item');
  targets.forEach(function(el) { el.classList.add('fade-in'); });

  if (!('IntersectionObserver' in window)) {
    targets.forEach(function(el) { el.classList.add('visible'); });
    return;
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(function(el) { observer.observe(el); });
})();

// Tag-based filtering
(function() {
  document.querySelectorAll('.filter-bar').forEach(function(bar) {
    var items = bar.parentElement.querySelectorAll('.filterable-item');

    // Expose initial toggle state to assistive technology
    bar.querySelectorAll('.filter-btn').forEach(function(b) {
      b.setAttribute('aria-pressed', b.classList.contains('active') ? 'true' : 'false');
    });

    bar.addEventListener('click', function(e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;

      bar.querySelectorAll('.filter-btn').forEach(function(b) {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      var filter = btn.getAttribute('data-filter');
      items.forEach(function(item) {
        if (filter === 'all') {
          item.classList.remove('hidden');
        } else {
          var tags = (item.getAttribute('data-tags') || '').split(',');
          item.classList.toggle('hidden', tags.indexOf(filter) === -1);
        }
      });
    });
  });
})();

// Particle network canvas
(function() {
  var canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion && reduceMotion.matches) return;

  var ctx = canvas.getContext('2d');
  var particles = [];
  var count = 40;
  var maxDist = 120;
  var rafId = null;

  function resize() {
    var rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  function init() {
    resize();
    particles = [];
    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    var dotColor = isDark ? 'rgba(56,189,248,' : 'rgba(14,165,233,';
    var lineColor = isDark ? 'rgba(56,189,248,' : 'rgba(14,165,233,';

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = dotColor + '0.5)';
      ctx.fill();

      for (var j = i + 1; j < particles.length; j++) {
        var q = particles[j];
        var dx = p.x - q.x, dy = p.y - q.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = lineColor + (0.15 * (1 - dist / maxDist)) + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    rafId = requestAnimationFrame(draw);
  }

  function start() { if (rafId === null) rafId = requestAnimationFrame(draw); }
  function stop() { if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; } }

  init();
  start();

  window.addEventListener('resize', function() { resize(); });

  // Pause when tab is hidden
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) stop(); else start();
  });

  // Pause when canvas scrolls out of view
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) { e.isIntersecting ? start() : stop(); });
    });
    io.observe(canvas);
  }

  // React to runtime motion-preference changes
  if (reduceMotion && reduceMotion.addEventListener) {
    reduceMotion.addEventListener('change', function(e) { e.matches ? stop() : start(); });
  }
})();

