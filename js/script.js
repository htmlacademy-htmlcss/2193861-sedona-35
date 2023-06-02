const wantButton = document.querySelector('.navigation-link-want');
const findButton = document.querySelector('.find-button');
const searchButton = document.querySelector('.hotel-search-link');
const closeModalButton = document.querySelector('.modal-close-button');
const modalContainer = document.querySelector('.modal-container');
const subscribeButton = document.querySelector('.form-subscribe-submit-button');
const subcscriptionContainer = document.querySelector('.subscription-container');
const subscriptionCloseModalButton = document.querySelector('.subscription-modal-close-button');
const subscriptionOkButton = document.querySelector('.subscription-ok-button');

wantButton.addEventListener('click', () => {
  modalContainer.classList.remove('modal-container-close');
});

findButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  location.href="./catalog.html";
});

searchButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalContainer.classList.remove('modal-container-close');
});

closeModalButton.addEventListener('click', () => {
  modalContainer.classList.add('modal-container-close');
});

window.addEventListener('click', (evt) => {
  if (evt.target == modalContainer) {
    modalContainer.classList.add('modal-container-close');
  }
});

subscribeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  subcscriptionContainer.classList.remove('subscription-container-close');
});

subscriptionCloseModalButton.addEventListener('click', () => {
  subcscriptionContainer.classList.add('subscription-container-close');
});

subscriptionOkButton.addEventListener('click', () => {
  subcscriptionContainer.classList.add('subscription-container-close');
});

window.addEventListener('click', (evt) => {
  if (evt.target == subcscriptionContainer) {
    subcscriptionContainer.classList.add('subscription-container-close');
  }
});
