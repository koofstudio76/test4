
document.querySelectorAll('.image-wrap').forEach((el, index) => {
  window.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) * 0.002 * (index + 1);
    const y = (window.innerHeight / 2 - e.clientY) * 0.002 * (index + 1);

    el.style.transform = `translate(${x}px, ${y}px)`;
  });
});
