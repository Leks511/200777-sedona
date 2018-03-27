var openSearchFormButton = document.querySelector(".search-open");
var searchForm = document.querySelector(".search-form");
var searchFormSubmitButton = document.querySelector(".search-form-button");

openSearchFormButton.addEventListener('click', function() {
  searchForm.classList.toggle("search-form-close");
});

searchFormSubmitButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  console.log('Клик отправить')
});
