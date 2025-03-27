// Cargar la sección de botones en todas las páginas
document.addEventListener("DOMContentLoaded", function () {
    fetch("components/botones.html") // Ruta del archivo botones.html
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data); // Insertar al final del body
        })
        .catch(error => console.error("Error cargando los botones:", error));
});
