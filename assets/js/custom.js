// Dark mode toggle
(function() {
  var toggle = document.getElementById('theme-toggle');
  var icon = document.getElementById('theme-icon');
  if (!toggle) return;

  function updateIcon() {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
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
    'Open Source Contributor',
    'Public Speaker & Lecturer',
    'Agentic AI Enthusiast'
  ];
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
    bar.addEventListener('click', function(e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;

      bar.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');

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

  var ctx = canvas.getContext('2d');
  var particles = [];
  var count = 40;
  var maxDist = 120;

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
    requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', function() { resize(); });
})();

// Agentic loop: draw arrows between actual node positions
(function() {
  var canvas = document.getElementById('agent-loop-canvas');
  if (!canvas) return;

  function init() {
    var ctx = canvas.getContext('2d');
    var grid = canvas.parentElement;
    var ids = ['anode-reason','anode-plan','anode-act','anode-observe'];
    var t = 0;

    function center(id) {
      var el = document.getElementById(id);
      var gr = grid.getBoundingClientRect();
      var r = el.getBoundingClientRect();
      return { x: r.left - gr.left + r.width/2, y: r.top - gr.top + r.height/2 };
    }

    function resize() {
      var dpr = window.devicePixelRatio || 1;
      var r = grid.getBoundingClientRect();
      canvas.width = r.width * dpr;
      canvas.height = r.height * dpr;
      canvas.style.width = r.width + 'px';
      canvas.style.height = r.height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawArrow(from, to, cp, accent) {
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.quadraticCurveTo(cp.x, cp.y, to.x, to.y);
      ctx.strokeStyle = accent;
      ctx.lineWidth = 2.5;
      ctx.stroke();
      var angle = Math.atan2(to.y - cp.y, to.x - cp.x);
      ctx.beginPath();
      ctx.moveTo(to.x, to.y);
      ctx.lineTo(to.x - 12*Math.cos(angle - 0.4), to.y - 12*Math.sin(angle - 0.4));
      ctx.lineTo(to.x - 12*Math.cos(angle + 0.4), to.y - 12*Math.sin(angle + 0.4));
      ctx.closePath();
      ctx.fillStyle = accent;
      ctx.fill();
    }

    function edgePoint(c, target, el) {
      var r = el.getBoundingClientRect();
      var hw = r.width/2 + 8, hh = r.height/2 + 8;
      var dx = target.x - c.x, dy = target.y - c.y;
      var len = Math.sqrt(dx*dx + dy*dy);
      if (len === 0) return c;
      var nx = dx/len, ny = dy/len;
      var sx = Math.abs(nx) > 0.01 ? hw / Math.abs(nx) : 1e9;
      var sy = Math.abs(ny) > 0.01 ? hh / Math.abs(ny) : 1e9;
      return { x: c.x + nx*Math.min(sx, sy), y: c.y + ny*Math.min(sx, sy) };
    }

    function pointOnLoop(frac, centers) {
      var seg = Math.floor(frac * 4) % 4;
      var lt = (frac * 4) - seg;
      var a = centers[seg], b = centers[(seg+1)%4];
      var mid = { x: (a.x+b.x)/2, y: (a.y+b.y)/2 };
      var dx = b.x-a.x, dy = b.y-a.y;
      var len = Math.sqrt(dx*dx+dy*dy) || 1;
      var cp = { x: mid.x + (-dy/len)*30, y: mid.y + (dx/len)*30 };
      var u = 1-lt;
      return { x: u*u*a.x + 2*u*lt*cp.x + lt*lt*b.x, y: u*u*a.y + 2*u*lt*cp.y + lt*lt*b.y };
    }

    function draw() {
      resize();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var centers = ids.map(center);
      var accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#0ea5e9';

      for (var i = 0; i < 4; i++) {
        var a = centers[i], b = centers[(i+1)%4];
        var elA = document.getElementById(ids[i]);
        var elB = document.getElementById(ids[(i+1)%4]);
        var mid = { x: (a.x+b.x)/2, y: (a.y+b.y)/2 };
        var dx = b.x-a.x, dy = b.y-a.y;
        var len = Math.sqrt(dx*dx+dy*dy) || 1;
        var cp = { x: mid.x + (-dy/len)*30, y: mid.y + (dx/len)*30 };
        drawArrow(edgePoint(a, cp, elA), edgePoint(b, cp, elB), cp, accent);
      }

      t = (t + 0.003) % 1;
      var pt = pointOnLoop(t, centers);
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 6, 0, Math.PI*2);
      ctx.fillStyle = accent;
      ctx.shadowColor = accent;
      ctx.shadowBlur = 14;
      ctx.fill();
      ctx.shadowBlur = 0;

      requestAnimationFrame(draw);
    }

    draw();
  }

  window.addEventListener('load', init);
})();

// Agentic loop hover tooltips
(function() {
  var tooltip = document.getElementById('agent-tooltip');
  if (!tooltip) return;

  var descriptions = {
    reason: 'Analyze context, break down the problem, and decide what to do next.',
    plan: 'Formulate a step-by-step strategy to achieve the goal.',
    act: 'Execute actions using tools, APIs, or code generation.',
    observe: 'Evaluate results, gather feedback, and refine understanding.'
  };

  document.querySelectorAll('.agent-loop__node').forEach(function(node) {
    node.addEventListener('mouseenter', function() {
      tooltip.textContent = descriptions[node.getAttribute('data-step')] || '';
      tooltip.classList.add('visible');
    });
    node.addEventListener('mouseleave', function() {
      tooltip.classList.remove('visible');
    });
  });
})();
