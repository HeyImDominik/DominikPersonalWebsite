(() => {
  'use strict';
  const island = document.querySelector('.lavaiq-island');
  if (!island) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const stars = island.querySelector('.lavaiq-stars');
  // Stable stars, never randomly repositioned on hover.
  if (stars) {
    for (let i = 0; i < 66; i++) {
      const star = document.createElement('i');
      star.style.cssText = `--sx:${(i * 61.803 + 7) % 100}%;--sy:${(i * 37.137 + 13) % 100}%;--ss:${i % 9 === 0 ? 2 : 1}px;--so:${.18 + (i % 5) * .1}`;
      stars.append(star);
    }
  }
  let visible = false, frame = 0, last = 0;
  let targetX = 0, targetY = 0, x = 0, y = 0;
  let engaged = false, leaveTimer = 0, scrollUntil = 0, previousPoint = null;
  const paint = () => {
    const values = {'--lq-x':`${x * 8}px`,'--lq-y':`${y * 5}px`,'--lq-rx':`${-y * 3}deg`,'--lq-ry':`${x * 5}deg`,'--lq-bg-x':`${-x * 12}px`,'--lq-bg-y':`${-y * 8}px`,'--lq-star-x':`${-x * 5}px`,'--lq-star-y':`${-y * 3}px`};
    for (const [key,value] of Object.entries(values)) island.style.setProperty(key,value);
  };
  const active = () => visible && !document.hidden && !reduced.matches;
  const tick = time => {
    frame = 0;
    if (!active()) return;
    const elapsed = last ? Math.min(time - last, 64) : 16.67;
    last = time;
    const blend = 1 - Math.exp(-elapsed / 160);
    x += (targetX - x) * blend;
    y += (targetY - y) * blend;
    if (Math.abs(targetX - x) + Math.abs(targetY - y) < .001) {
      x = targetX; y = targetY; paint(); last = 0; return;
    }
    paint(); frame = requestAnimationFrame(tick);
  };
  const start = () => { if (!frame && active()) frame = requestAnimationFrame(tick); };
  const clearLeave = () => { clearTimeout(leaveTimer); leaveTimer = 0; };
  const reset = () => {
    clearLeave(); engaged = false; targetX = 0; targetY = 0; start();
  };
  // Browsers cannot report coordinates outside their viewport. Hold the last
  // pose briefly, then ease home; a quick return resumes the same interpolation.
  const holdEdge = () => {
    if (engaged && !leaveTimer) leaveTimer = setTimeout(reset, 900);
  };
  const update = () => {
    island.classList.toggle('lq-active',active());
    if (!active()) {
      clearLeave(); engaged = false; previousPoint = null;
      cancelAnimationFrame(frame); frame = 0; last = 0;
      x = y = targetX = targetY = 0; paint();
    }
  };
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); },{rootMargin:'60px'}).observe(island);
  } else { visible = true; update(); }
  document.addEventListener('visibilitychange',update);
  reduced.addEventListener('change',update);
  window.addEventListener('pointermove',event => {
    if (!active() || event.pointerType !== 'mouse') return;
    const point = {x:event.clientX,y:event.clientY};
    const moved = !previousPoint || Math.hypot(point.x - previousPoint.x,point.y - previousPoint.y) > 2;
    if (moved) previousPoint = point;
    if (performance.now() < scrollUntil || event.buttons || !moved) return;
    const rect = island.getBoundingClientRect();
    const inside = point.x >= rect.left && point.x <= rect.right && point.y >= rect.top && point.y <= rect.bottom;
    const rightApron = engaged && point.x >= rect.right && point.x <= Math.max(rect.right + 160,window.innerWidth) && point.y >= rect.top - 40 && point.y <= rect.bottom + 40;
    if (event.target?.closest?.('dialog,[role="dialog"]')) { reset(); return; }
    if (!inside && !rightApron) { if (engaged) reset(); return; }
    if (inside) engaged = true;
    clearLeave();
    targetX = Math.max(-1,Math.min(1,((event.clientX - rect.left) / rect.width - .5) * 2));
    targetY = Math.max(-1,Math.min(1,((event.clientY - rect.top) / rect.height - .5) * 2));
    start();
  },{passive:true});
  document.addEventListener('pointerout',event => {
    if (event.relatedTarget || event.pointerType !== 'mouse' || !engaged) return;
    if (event.clientX >= window.innerWidth - 24) holdEdge();
    else reset();
  });
  const scrolling = () => {
    scrollUntil = performance.now() + 220;
    reset();
  };
  window.addEventListener('scroll',scrolling,{passive:true});
  window.addEventListener('wheel',scrolling,{passive:true});
  window.addEventListener('pointerdown',reset,{passive:true});
  window.addEventListener('pointercancel',reset);
  window.addEventListener('resize',scrolling,{passive:true});
  window.addEventListener('blur',holdEdge);
})();
