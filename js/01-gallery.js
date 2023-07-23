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
//       data-source="${original}"
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
      data-source="${original}"
      alt="${description}"
      loading="lazy" 
    />
  </a>
</li>`, "");

galleryContainer.insertAdjacentHTML("beforeend", markup);

// Реалізація делегування на ul.gallery і отримання url великого зображення.
galleryContainer.addEventListener('click', bigImg)

function bigImg(e) {
    e.preventDefault();
    const target = e.target;

    if (target.classList.contains("gallery__image")) {
      const bigImgUrl = target.dataset.source;
      const imgId = target.dataset.id;
openModal(bigImgUrl,imgId)
        // console.log(bigImgUrl)
    }
}

function openModal(bigImgUrl, imgId) {
    const instance = basicLightbox.create(`
        <div class="modal">
            <img src="${bigImgUrl}"/>
        </div>
    `);
  instance.show()

   const modalElement = document.querySelector(".basicLightbox");
    modalElement.addEventListener("click", closeModal);

    // Закриття модального вікна
    const closeModalOnEscape = (e) => {
        if (e.key === "Escape") {
            closeModal();
        }
    };
    document.addEventListener("keydown", closeModalOnEscape);

    function closeModal() {
        instance.close();
        document.removeEventListener("keydown", closeModalOnEscape);
    }
}

console.dir(galleryContainer)