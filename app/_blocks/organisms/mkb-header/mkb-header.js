function changeColorHeader() {
  const target = document.querySelector('.js-title');
  const header = document.querySelector('.header');

  if (!target) return;

  function callback(entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    });
  }

  const observer = new IntersectionObserver(callback, {
    rootMargin: '-100px 0px 0px 0px',
  });
  observer.observe(target);
}

export default changeColorHeader;
