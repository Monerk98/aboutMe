const galleryItems = [
  {
    preview: "./images/DiplomaBol.jpg",
    original: "./images/DiplomaBol.jpg",
    description: "Diploma Bachelor",
  },
  {
    preview: "./images/DiplomaMas.jpg",
    original: "./images/DiplomaMas.jpg",
    description: "Diploma Master",
  },
];

const galleryContainer = document.querySelector(".js-gallery");
const lightBoxContainer = document.querySelector(".js-lightbox");
const lightBoxImage = document.querySelector(".lightbox__image");
const lightBoxButtonClose = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const lightBoxContent = document.querySelector(".lightbox");

galleryContainer.insertAdjacentHTML(
  "beforeend",
  createGalleryMarkup(galleryItems)
);

galleryContainer.addEventListener("click", galleryClick);
lightBoxButtonClose.addEventListener("click", onButtonClick);

// console.log(createGalleryMarkup(galleryItems));

function galleryClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const mainGallery = event.target.closest(".gallery__item");
  lightBoxContainer.classList.add("is-open");
  lightBoxImage.src = event.target.parentElement.href;
}

function onButtonClick() {
  lightBoxContainer.classList.remove("is-open");
  lightBoxImage.src = " ";
}

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `;
    })
    .join("");
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    lightBoxContent.classList.remove("is-open");
  }
});
const lightboxOverlay = document.querySelector(".lightbox__overlay");
lightboxOverlay.addEventListener("click", () => {
  lightBoxContent.classList.remove("is-open");
});
