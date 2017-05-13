var searcHeading = document.querySelector(".search-box-search");
var popup = document.querySelector(".search-box-form");
var closepopup = document.querySelector(".search-box-form-show");
var arrival = document.querySelector("#arrival");
var departure = document.querySelector("#departure");
var adults = document.querySelector("#adult-q");
var children = document.querySelector("#children-q"); 
var minus = document.querySelector(".minus");
var plus = document.querySelector(".plus");
var cdMinus = document.querySelector(".cd-minus");
var cdPlus = document.querySelector(".cd-plus");



popup.classList.add("search-box-form-show");

searcHeading.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("search-box-form-show");
}) 
        
popup.addEventListener("submit", function(event) { 
    if (!arrival.value || !departure.value || !adults.value || !children.value) {
        event.preventDefault();
        console.log("Type some text"); 
    } 
    
    else {
        localStorage.setItem("children", children.value);
        localStorage.setItem("adults", adults.value);
    }
});

plus.addEventListener("click", function(event) {
    event.preventDefault();
    adults.value ++;
});

minus.addEventListener("click", function(event) { 
    if(adults.value > 0 ) {
        event.preventDefault();
        adults.value --;
    }
});

cdPlus.addEventListener("click", function(event) {
    event.preventDefault();
    children.value ++;
});

cdMinus.addEventListener("click", function(event) { 
    if(children.value > 0 ) {
        event.preventDefault();
        children.value --;
    }
});