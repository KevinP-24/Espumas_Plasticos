document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 Iniciando carga de valorAgre.html...");

    fetch("components/valorAgre.html") // Ruta del archivo HTML
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar la sección de valor agregado.");
            }
            return response.text();
        })
        .then(data => {
            console.log("✅ Archivo valorAgre.html cargado correctamente.");

            function insertarValorAgre() {
                const footer = document.querySelector("footer"); // Intentamos encontrar el footer
                console.log("🔍 Buscando footer en el DOM:", footer);

                if (footer) {
                    footer.insertAdjacentHTML("beforebegin", data); // 📌 Inserta antes del footer
                    console.log("✅ Sección valorAgre insertada correctamente.");
                    document.dispatchEvent(new Event("valorAgreCargado"));
                } else {
                    console.warn("⚠️ No se encontró el footer, reintentando en 500ms...");
                    setTimeout(insertarValorAgre, 500); // Reintenta cada 500ms hasta encontrar el footer
                }
            }

            insertarValorAgre(); // Ejecutamos la función para verificar si el footer ya está disponible
        })
        .catch(error => console.error("❌ Error cargando valorAgre.html:", error));
});
