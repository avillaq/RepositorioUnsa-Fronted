import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Funcion para realizar una busqueda de documentos
export const searchDocuments = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search`, {
      params: { query }
    });
    
    return response.data;
  } catch (error) {
    console.error("Error en la búsqueda:", error);
    return [];
  }
};
