import { useState } from 'react';
import { BasicSearchBar } from '../components/BasicSearchBar';
import { AdvancedSearchBar } from './AdvancedSearchBar';
import { DocumentItem } from './DocumentItem';
import { Filters } from '../components/Filters';
import { Pagination } from '../components/Pagination';
import { searchDocuments } from '../services/api';
import { Tabs } from './Tabs';

export const Home = () => {
  const [documents, setDocuments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ documentType: '', year: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = async (query, page = 1) => {
    setSearchQuery(query);
    setLoading(true);
    setError(null);
    try {
      const results = await searchDocuments(query, filters, page);
      setDocuments(results.items);
      setTotalPages(results.total_pages);
      setCurrentPage(page);
    } catch (err) {
      setError("Ocurrio un error al realizar la busqueda.");
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    handleSearch(searchQuery, 1); // Si los filtros cambian, volvemos a la primera pagina
  };

  const handlePageChange = (newPage) => {
    handleSearch(searchQuery, newPage);
  };

  const tabs = [
    {
      id: 'basic-search',
      label: 'Busqueda Basica',
      content: <BasicSearchBar onSearch={(query) => handleSearch(query, 1)} />,
    },
    {
      id: 'advanced-search',
      label: 'Busqueda Avanzada',
      content: <AdvancedSearchBar onSearch={(query) => handleSearch(query, 1)} />,
    },
  ];

  return (
    <div className="flex justify-center flex-col items-center p-5">
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">Plataforma Inteligente de Consulta Académica</h1>

      <div className="flex lg:w-9/12 xl:w-8/12">
        <aside className="w-64 bg-gray-50 h-fit mt-32 rounded-lg">
          <div className="px-3 py-4 overflow-y-auto">
            <h1>Filtros</h1>
            <Filters onFilterChange={handleFilterChange} />
          </div>
        </aside>

        <div className="flex-1 p-3">
          <Tabs tabs={tabs} />

          {loading && <p>Cargando resultados...</p>}
          {error && <p className="error">{error}</p>}
          <div className="flex flex-col mt-5">
            {documents.map((doc, index) => (
              <DocumentItem
                key={index}
                document={doc}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}