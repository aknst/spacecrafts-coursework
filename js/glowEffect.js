document.querySelectorAll("#cards").forEach(section => {
  section.onmousemove = e => {
    for(const card of document.getElementsByClassName("section__card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
      // Влияет на CSS-правило — background: radial-gradient(800px circle at var(--x) var(--y),rgba(255,255,255,0.3));
    }
  }
});