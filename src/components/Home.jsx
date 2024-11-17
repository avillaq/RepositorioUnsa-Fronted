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
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    handleSearch();
  };

  const tabs = [
    {
      id: 'basic-search',
      label: 'Busqueda Basica',
      content: <BasicSearchBar onSearch={handleSearch} />,
    },
    {
      id: 'advanced-search',
      label: 'Busqueda Avanzada',
      content: <AdvancedSearchBar onSearch={handleSearch}/>,
    },
  ];

  return (
    <div className="flex justify-center flex-col items-center p-5">
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">Plataforma Inteligente de Consulta Académica</h1>

      <div className="flex lg:w-9/12	xl:w-8/12">
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
                id={doc.id}
                title={doc.title}
                authors={doc.authors}
                editor={doc.editor}
                year={doc.year}
                faculty={doc.faculty}
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