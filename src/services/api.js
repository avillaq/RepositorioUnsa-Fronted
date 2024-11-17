import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Funcion para realizar una busqueda de documentos
export const searchDocuments = async (searchQuery, filters, currentPage = 1, pageSize = 10) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/documentos`, {
      params: {
        title: searchQuery,
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
