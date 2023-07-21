import { galleryItems } from './gallery-items.js';
// Change code below this line
// 1. Створення і рендер розмітки
const galleryContainer = document.querySelector('.gallery');
// Використання методу .map()
// const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="large-image.jpg"
//       alt="${description}"
//       loading="lazy" 
//     />
//   </a>
// </li>`).join('');

// Використання методу reduce()
const markup = galleryItems.reduce((acc, { preview, original, description }) => acc + `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
      loading="lazy" 
    />
  </a>
</li>`, "");

galleryContainer.insertAdjacentHTML("beforeend", markup);

// Реалізація делегування на ul.gallery і отримання url великого зображення.
galleryContainer.addEventListener('click', bigImg)

function bigImg(event) {
    event.preventDefault();
    const target = event.target;

    if (target.classList.contains("gallery__image")) {
        const bigImgUrl = target.dataset.source;
        console.log(bigImgUrl)
    }
}

console.log(galleryItems);
