import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Funcion para realizar una busqueda de documentos
export const searchDocuments = async (query, filters, currentPage = 1, pageSize = 10) => {
  let ejemplo = [
    { id: 1, title: "Introducción a IA en agricultura", authors: "A. Pérez, B. Gómez", editor: 1, fecha: 2021, resumen: "Estudio sobre aplicaciones de IA en la agricultura.", coleccion: "Ingeniería" }
  ];

  try {
    const response = await axios.get(`${API_BASE_URL}/documentos`, {
      params: {
        title: query,
        page: currentPage,
        limit: pageSize,
      }
    });

    return response.data;
  } catch (error) {
    console.error("Error en la búsqueda:", error);
    return [];
  }
};
