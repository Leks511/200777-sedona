var openSearchFormButton = document.querySelector(".search-open");
var searchForm = document.querySelector("form");
var submitSearchFormButton = document.querySelector(".search-form-button");
var dateEntry = searchForm.querySelector("[name=date-of-entry]");
var dateDeparture = searchForm.querySelector("[name=date-of-departure]");

openSearchFormButton.addEventListener('click', function() {
  searchForm.classList.toggle("search-form-close");
  dateEntry.focus();
});

searchForm.addEventListener("submit", function(e) {
  e.preventDefault();
  console.log(dateEntry.value);
  console.log(dateDeparture.value);
});

submitSearchFormButton.addEventListener('click', function(e) {
  console.log(searchForm);
});
