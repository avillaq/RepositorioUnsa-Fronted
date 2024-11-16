import { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { DocumentCard } from '../components/DocumentCard';
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
    handleSearch(); // Realiza la busqueda en la nueva pagina
  };

  const tabs = [
    {
      id: 'basic-search',
      label: 'Busqueda Basica',
      content: <SearchBar onSearch={handleSearch} />,
    },
    {
      id: 'advanced-search',
      label: 'Busqueda Avanzada',
      content: <p className="text-sm text-gray-500">Busqueda Avanzada Aqui.</p>,
    },
  ];

  return (
    <div className="home">
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">Plataforma Inteligente de Consulta Académica</h1>
      <br />

      <Tabs tabs={tabs} />

      <div className="flex">

         <aside id="sidebar-multi-level-sidebar" className="w-64 h-screen bg-gray-50 dark:bg-gray-800">
          <div className="h-full px-3 py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li>
                <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown1" data-collapse-toggle="dropdown1">
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Coleccion</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <ul id="dropdown1" className="hidden py-2 space-y-2">
                  <li>
                    <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                  </li>
                </ul>
              </li>
              <li>
                <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown2" data-collapse-toggle="dropdown2">
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Fecha</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <ul id="dropdown2" className="hidden py-2 space-y-2">
                  <li>
                    <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </aside> 

        <div className="flex-1 p-4">
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
      </div>
    </div>
  )
}