function changeColorHeader() {
  const targetSection = document.querySelector('.hero');
  const header = document.querySelector('.header');

  if (!targetSection) return;

  function callback(entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    });
  }
  const observer = new IntersectionObserver(callback, {});
  observer.observe(targetSection);
}

export default changeColorHeader;
