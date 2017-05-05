var searcHeading = document.querySelector(".search-box-search");
var popup = document.querySelector(".search-box-form");
var closepopup = document.querySelector(".search-box-form-show");
var arrival = document.querySelector("#arrival");
var departure = document.querySelector("#departure");
var adults = document.querySelector("#adult-q");
var children = document.querySelector("#children-q"); 

searcHeading.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("search-box-form-show");
}) 
        
popup.addEventListener("submit", function(event) { 
    if(!arrival.value || !departure.value || !adults.value || !children.value) {
    event.preventDefault;
    console.log("Type some text"); } 
    else {
    localStorage.setItem("children", children.value);
    localStorage.setItem("adults", adults.value);
    }
});