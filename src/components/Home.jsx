import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import DocumentCard from '../components/DocumentCard';
import Filters from '../components/Filters';
import { searchDocuments } from '../services/api';

export const Home = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ documentType: '', year: '' });

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchDocuments(query);
      setDocuments(results);
    } catch (err) {
      setError("Ocurrió un error al realizar la búsqueda.");
    } finally {
      setLoading(false);
    }

    // Ejemplo de como son los datos que se obtienen de la API
    /*const mockDocuments = [
      { title: "Introducción a IA en agricultura", authors: "A. Pérez, B. Gómez", summary: "Estudio sobre aplicaciones de IA en la agricultura." },
      { title: "Desarrollo sostenible y tecnología", authors: "C. Ruiz", summary: "Análisis de la tecnología en el desarrollo sostenible." },
    ];*/

  };
  return (
    <div className="home">
      <h1>Plataforma Inteligente de Consulta Académica</h1>
      <SearchBar onSearch={handleSearch} />
      <Filters onFilterChange={handleFilterChange} />
      {loading && <p>Cargando resultados...</p>}
      {error && <p className="error">{error}</p>}
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
