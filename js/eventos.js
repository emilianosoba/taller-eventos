document.addEventListener("DOMContentLoaded", function() {

let boton = document.getElementById("boton");


boton.addEventListener('click', function(event) {
    event.stopPropagation();
});
});

document.addEventListener("DOMContentLoaded", function() {
    
let div = document.getElementById("div");

div.addEventListener("click", function() {
    alert("Hola! Soy el div");

});
});