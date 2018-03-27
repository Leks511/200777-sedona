var openSearchFormButton = document.querySelector(".search-open");
var searchForm = document.querySelector(".search-form");

openSearchFormButton.addEventListener('click', function(){
  searchForm.classList.toggle("search-form-close");
});
