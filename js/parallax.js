window.addEventListener("scroll", e => {
  document.body.style.cssText = `--scrollTop: ${this.scrollY}px`;
  // Влияет на CSS-правило — transform: translate3d(0, calc(var(--scrollTop) / 1.6), 0);
})

