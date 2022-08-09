// receives # of slides

const photosList = (quantity) => {
  const imageSlide = document.getElementById("swiper-wrapper");

  const randomNum = Math.floor(Math.random() * 10);
  const URL = `https://picsum.photos/v2/list?page=${randomNum}&limit=${quantity}`;

  fetch(URL)
    .then((res) => res.json())
    .then((res) => {
      const photos = [...res];
      return photos.forEach(
        (img) =>
          (imageSlide.innerHTML += `<div id="slide-1" class="swiper-slide">
            <img src='https://picsum.photos/id/${img.id}/600/325.webp'/></div>`)
      );
    })
    .catch(function (err) {
      console.warn("Something went wrong.", err);
    });
};

export default photosList;
