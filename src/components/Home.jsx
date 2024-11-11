import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import DocumentCard from '../components/DocumentCard';

export const Home = () => {
  const [documents, setDocuments] = useState([]);

  // Pequeña simulación de búsqueda
  const handleSearch = (query) => {
    // Aqui se va a hacer la búsqueda y devolver los resultados
    // TODO: Implementar la búsqueda de documentos
    console.log("Buscando:", query);

    // Pequeños datos de ejemplo
    const mockDocuments = [
      { title: "Introducción a IA en agricultura", authors: "A. Pérez, B. Gómez", summary: "Estudio sobre aplicaciones de IA en la agricultura." },
      { title: "Desarrollo sostenible y tecnología", authors: "C. Ruiz", summary: "Análisis de la tecnología en el desarrollo sostenible." },
    ];
    setDocuments(mockDocuments);
  };
  return (
    <div className="home">
      <h1>Plataforma Inteligente de Consulta Académica</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="document-list">
        {documents.map((doc, index) => (
          <DocumentCard
            key={index}
            title={doc.title}
            authors={doc.authors}
            summary={doc.summary}
          />
        ))}
      </div>
    </div>
  )
}
