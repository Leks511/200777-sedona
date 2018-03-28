var openSearchFormButton = document.querySelector(".search-open");
var searchForm = document.querySelector("form");
var dateEntry = searchForm.querySelector("[name=date-of-entry]");
var dateDeparture = searchForm.querySelector("[name=date-of-departure]");
var adultsQuan = searchForm.querySelector("[name=adults-quantity]");
var childrenQuan = searchForm.querySelector("[name=children-quantity]");

var isStorageSupport = true;
var adultsQuanStorage = "";
var childrenQuanStorage = "";

try {
  adultsQuanStorage = localStorage.getItem("adultsQuan");
  childrenQuanStorage = localStorage.getItem("childrenQuan");
} catch (err) {
  isStorageSupport = false;
}

openSearchFormButton.addEventListener("click", function() {
  searchForm.classList.toggle("search-form-close");
  dateEntry.focus();
  adultsQuan.value = adultsQuanStorage;
  childrenQuan.value = childrenQuanStorage;
});

searchForm.addEventListener("submit", function(evt) {
  if (!dateEntry.value || !dateDeparture.value || !adultsQuan.value) {
    evt.preventDefault();
    searchForm.classList.remove("modal-error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("modal-error");
  } else {
    localStorage.setItem("dateEntry", dateEntry.value);
    localStorage.setItem("dateDeparture", dateDeparture.value);
    localStorage.setItem("adultsQuan", adultsQuan.value);
    localStorage.setItem("childrenQuan", childrenQuan.value);
  }
});
