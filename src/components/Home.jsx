import { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { DocumentCard } from '../components/DocumentCard';
import { Filters } from '../components/Filters';
import { Pagination } from '../components/Pagination';
import { searchDocuments } from '../services/api';

export const Home = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ documentType: '', year: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchDocuments(query, filters, currentPage);
      setDocuments(results);
      setTotalPages(results.totalPages);
    } catch (err) {
      setError("Ocurrio un error al realizar la busqueda.");
    } finally {
      setLoading(false);
    }

    // Ejemplo de como son los datos que se obtienen de la API
    /*const mockDocuments = [
      { title: "Introducción a IA en agricultura", authors: "A. Pérez, B. Gómez", summary: "Estudio sobre aplicaciones de IA en la agricultura." },
      { title: "Desarrollo sostenible y tecnología", authors: "C. Ruiz", summary: "Análisis de la tecnología en el desarrollo sostenible." },
    ];*/
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    handleSearch(); // Realiza la busqueda en la nueva pagina
  };

  return (
    <div className="home">
      <h1 className='text-2xl'></h1>
      <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">Plataforma Inteligente de Consulta Académica</h1>
      <br />
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
