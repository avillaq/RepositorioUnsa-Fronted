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
  const [selectedTab, setSelectedTab] = useState('basic-search');

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
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    handleSearch(); // Realiza la busqueda en la nueva pagina
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="home">
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">Plataforma Inteligente de Consulta Académica</h1>
      <br />

      <div>
        <div className="mb-4">
          <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${selectedTab === 'basic-search' ? 'text-blue-700 border-blue-700' : 'text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-300'}`}
                id="basic-search-tab"
                data-tabs-target="#basic-search"
                type="button"
                role="tab"
                aria-controls="basic-search"
                aria-selected={selectedTab === 'basic-search'}
                onClick={() => handleTabClick('basic-search')}
              >
                Busqueda Basica
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${selectedTab === 'advanced-search' ? 'text-blue-700 border-blue-700' : 'text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-300'}`}
                id="advanced-search-tab"
                data-tabs-target="#advanced-search"
                type="button"
                role="tab"
                aria-controls="advanced-search"
                aria-selected={selectedTab === 'advanced-search'}
                onClick={() => handleTabClick('advanced-search')}
              >
                Busqueda Avanzada
              </button>
            </li>
          </ul>
        </div>
        <div id="default-tab-content">
          <div id="basic-search" role="tabpanel" aria-labelledby="basic-search-tab" className={selectedTab === 'basic-search' ? '' : 'hidden'}>
            <SearchBar onSearch={handleSearch} />
          </div>
          <div id="advanced-search" role="tabpanel" aria-labelledby="advanced-search-tab" className={selectedTab === 'advanced-search' ? '' : 'hidden'}>
            <p className="text-sm text-gray-500">Busqueda Avanzada Aqui.</p>
          </div>
        </div>
      </div>

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