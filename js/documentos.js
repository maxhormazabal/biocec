// Datos de los documentos PDF
const pdfDocuments = [
  {
    name: "Reglamento Interno",
    path: "./documentos/BIOCEC_Reglamento_interno_v21_16dic2024.pdf",
    downloaded_filename: "BIOCEC_Reglamento_interno_v21_16dic2024",
  },
  {
    name: "Carta de Compromiso Investigador Principal y Sub Investigador",
    path: "./documentos/Carta_de_Compromiso_Investigador_Principal_y_Sub_Investigador.pdf",
    downloaded_filename:
      "Carta_de_Compromiso_Investigador_Principal_y_Sub_Investigador",
  },
  {
    name: "Carta Sometimiento Estudio Inicial",
    path: "./documentos/Carta_Sometimiento_Estudio_Inicial.pdf",
    downloaded_filename: "Carta_Sometimiento_Estudio_Inicial",
  },
  {
    name: "Declaración No Conflicto de Interés Investigador Principal y Sub-Investigador",
    path: "./documentos/Declaracion_No_Conflicto_de_Interes_Investigador_Principal_y_SubInvestigador.pdf",
    downloaded_filename:
      "Declaracion_No_Conflicto_de_Interes_Investigador_Principal_y_SubInvestigador",
  },
  {
    name: "Notificación Cierre de Centro",
    path: "./documentos/Notificacion_Cierre_de_Centro.pdf",
    downloaded_filename: "Notificacion_Cierre_de_Centro",
  },
  {
    name: "Notificación Cierre de Estudio",
    path: "./documentos/Notificacion_Cierre_de_Estudio.pdf",
    downloaded_filename: "Notificacion_Cierre_de_Estudio",
  },
  {
    name: "Notificación de Renovación Anual",
    path: "./documentos/Notificacion_de_Renovacion_Anual.pdf",
    downloaded_filename: "Notificacion_de_Renovacion_Anual",
  },
  {
    name: "Notificación Eventos Adversos Serios",
    path: "./documentos/Notificacion_Eventos_Adversos_Serios.pdf",
    downloaded_filename: "Notificacion_Eventos_Adversos_Serios",
  },
  {
    name: "Calendario Sesiones 2025",
    path: "./documentos/Calendario_Sesiones_BIOCEC_2025.pdf",
    downloaded_filename: "Calendario_Sesiones_BIOCEC_2025",
  },
  {
    name: "Cumplimiento GCP 2025",
    path: "./documentos/Cumplimiento_GCP_BIOCEC_2025.pdf",
    downloaded_filename: "Cumplimiento_GCP_BIOCEC_2025",
  },
  {
    name: "Nomina Integrantes 2025",
    path: "./documentos/Nomina_Integrantes_BIOCEC_2025.pdf",
    downloaded_filename: "Nomina_Integrantes_BIOCEC_2025",
  },
  {
    name: "Resolución 250835574",
    path: "./documentos/RESOLUCION_250835574.pdf",
    downloaded_filename: "RESOLUCION_250835574",
  },
  {
    name: "Valores 2025",
    path: "./documentos/Valores_BIOCEC_2025.pdf",
    downloaded_filename: "Valores_BIOCEC_2025",
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
    downloadLink.download = doc.downloaded_filename;

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
