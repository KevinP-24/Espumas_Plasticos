document.addEventListener("DOMContentLoaded", function () {
    fetch("components/mapaAlargado.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            console.log("Contenido cargado:", data); // Verifica en consola si se carga correctamente
            const beneficiosSection = document.querySelector(".seccion-beneficios");
            if (beneficiosSection) {
                beneficiosSection.insertAdjacentHTML("beforebegin", data);
                console.log("Mapa insertado antes de .seccion-beneficios");
            } else {
                console.warn("No se encontró .seccion-beneficios. Insertando en <body>.");
                document.body.insertAdjacentHTML("beforeend", data);
            }
        })
        .catch(error => console.error("Error cargando mapaAlargado.html:", error));
});
