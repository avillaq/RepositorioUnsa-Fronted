import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Funcion para realizar una busqueda de documentos
export const searchDocuments = async (query, filters, page = 1, pageSize = 10) => {
  return [
    { id: 1, title: "Introducción a IA en agricultura", authors: "A. Pérez, B. Gómez", editor: "Editorial Agrícola", year: 2021, summary: "Estudio sobre aplicaciones de IA en la agricultura.", faculty: "Ingeniería" },
    { id: 2, title: "Desarrollo sostenible y tecnología", authors: "C. Ruiz", editor: "Editorial Sostenible", year: 2020, summary: "Análisis de la tecnología en el desarrollo sostenible.", faculty: "Ciencias" },
    { id: 3, title: "Introduction to AI in Agriculture", authors: "A. Perez, B. Gomez", editor: "Agricultural Press", year: 2021, summary: "Study on AI applications in agriculture.", faculty: "Engineering" },
    { id: 4, title: "Development Sustainable and Technology", authors: "C. Ruiz", editor: "Sustainable Press", year: 2020, summary: "Analysis of technology in sustainable development.", faculty: "Science" },
    { id: 5, title: "Machine Learning Basics", authors: "D. Smith", editor: "Tech Books", year: 2019, summary: "Introduction to machine learning concepts and techniques.", faculty: "Computer Science" },
    { id: 6, title: "Advanced AI Techniques", authors: "E. Johnson", editor: "AI Press", year: 2022, summary: "Exploration of advanced artificial intelligence techniques.", faculty: "Engineering" },
    { id: 7, title: "Sustainable Agriculture", authors: "F. Martinez", editor: "Green Press", year: 2018, summary: "Study on sustainable practices in agriculture.", faculty: "Agriculture" },
    { id: 8, title: "AI in Healthcare", authors: "G. Lee", editor: "HealthTech", year: 2021, summary: "Applications of AI in the healthcare industry.", faculty: "Medicine" },
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
