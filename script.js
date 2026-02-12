let fotos = document.querySelectorAll(".foto");

fotos.forEach(foto => {
    foto.addEventListener("click", function(){
        this.classList.toggle("active");
    });
});