// Datos de los documentos PDF
const pdfDocuments = [
  {
    name: "Reglamento Interno",
    path: "./documentos/BIOCEC Reglamento interno v1.0 29.oct.2024.pdf",
  },
  {
    name: "Carta de Compromiso Investigador Principal y Sub Investigador",
    path: "./documentos/Carta de Compromiso Investigador Principal y Sub Investigador.pdf",
  },
  {
    name: "Carta Sometimiento Estudio Inicial",
    path: "./documentos/Carta Sometimiento Estudio Inicial.pdf",
  },
  {
    name: "Declaración No Conflicto de Interés Investigador Principal y Sub-Investigador",
    path: "./documentos/Declaración No Conflicto de Interés Investigador Principal y Sub-Investigador.pdf",
  },
  {
    name: "Notificación Cierre de Centro",
    path: "./documentos/Notificación Cierre de Centro.pdf",
  },
  {
    name: "Notificación Cierre de Estudio",
    path: "./documentos/Notificación Cierre de Estudio.pdf",
  },
  {
    name: "Notificación de Renovación Anual",
    path: "./documentos/Notificación de Renovación Anual.pdf",
  },
  {
    name: "Notificación Eventos Adversos Serios",
    path: "./documentos/Notificación Eventos Adversos Serios.pdf",
  },
];

// Función para generar la lista
function generatePDFList(documents) {
  // Seleccionar el contenedor de la lista (asegúrate de que el ul tiene un id en tu HTML)
  const listContainer = document.getElementById("pdf-list");

  // Limpiar el contenido de la lista por si hay elementos previos
  listContainer.innerHTML = "";

  // Crear un elemento <li> para cada documento
  documents.forEach((doc) => {
    // Crear el elemento li
    const listItem = document.createElement("li");
    listItem.className =
      "list-group-item d-flex justify-content-between align-items-start";

    // Crear el contenedor del nombre del documento
    const docInfo = document.createElement("div");
    docInfo.className = "ms-2 me-auto";
    docInfo.innerHTML = `<div>${doc.name}</div>`;

    // Crear el botón de descarga
    const downloadLink = document.createElement("a");
    downloadLink.href = doc.path;
    downloadLink.className = "bg-primary rounded-pill text-light px-2";
    downloadLink.textContent = "Descargar";
    downloadLink.download = doc.name;

    // Agregar los elementos al elemento <li>
    listItem.appendChild(docInfo);
    listItem.appendChild(downloadLink);

    // Agregar el <li> al contenedor de la lista
    listContainer.appendChild(listItem);
  });
}

// Ejecutar la función para cargar los datos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  generatePDFList(pdfDocuments);
});
