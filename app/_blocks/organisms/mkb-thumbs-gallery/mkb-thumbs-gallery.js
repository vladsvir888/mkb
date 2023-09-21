function thumbsGallery() {
  const galleryBig = document.querySelector('.thumbs-gallery__slider--big');
  const gallerySmall = document.querySelector('.thumbs-gallery__slider--small');

  if (!galleryBig || !gallerySmall) return;

  Object.assign(gallerySmall, {
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
    loop: true,
    breakpoints: {
      601: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
    },
  });
  Object.assign(galleryBig, {
    loop: true,
    thumbs: {
      swiper: gallerySmall,
    },
  });

  gallerySmall.initialize();
  galleryBig.initialize();
}

export default thumbsGallery;
