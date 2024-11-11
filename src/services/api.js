import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Funcion para realizar una busqueda de documentos
export const searchDocuments = async (query, filters, page = 1, pageSize = 10) => {
  return [
    { title: "Introducción a IA en agricultura", authors: "A. Pérez, B. Gómez", summary: "Estudio sobre aplicaciones de IA en la agricultura." },
    { title: "Desarrollo sostenible y tecnología", authors: "C. Ruiz", summary: "Análisis de la tecnología en el desarrollo sostenible." },
    { title: "Desarrollo sostenible y tecnología", authors: "C. Ruiz", summary: "Análisis de la tecnología en el desarrollo sostenible." },
    { title: "Introducción a IA en agricultura", authors: "A. Pérez, B. Gómez", summary: "Estudio sobre aplicaciones de IA en la agricultura." },
    { title: "Desarrollo sostenible y tecnología", authors: "C. Ruiz", summary: "Análisis de la tecnología en el desarrollo sostenible." },
    { title: "Introduction to AI in Agriculture", authors: "A. Perez, B. Gomez", summary: "Study on AI applications in agriculture." },
    { title: "Development Sustainable and Technology", authors: "C. Ruiz", summary: "Analysis of technology in sustainable development." },
    { title: "Desarrollo sostenible y tecnología", authors: "C. Ruiz", summary: "Análisis de la tecnología en el desarrollo sostenible." },
    
  ];

  try {
    const response = await axios.get(`${API_BASE_URL}/search`, {
      params: {
        query,
        documentType: filters.documentType,
        year: filters.year,
        page,
        pageSize
      }
    });
    
    return response.data;
  } catch (error) {
    console.error("Error en la búsqueda:", error);
    return [];
  }
};
