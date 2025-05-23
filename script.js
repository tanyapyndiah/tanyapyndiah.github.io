window.addEventListener('scroll', () => {
    console.log("SCROLL");
  const scrollY = window.scrollY;

  document.querySelectorAll('.parallax-layer').forEach(layer => {
    const speed = parseFloat(layer.getAttribute('data-speed'));
    layer.style.transform = `translateY(${scrollY * -speed}px)`;
  });
});

