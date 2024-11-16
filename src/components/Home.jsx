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

      <aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li>
              <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown1" data-collapse-toggle="dropdown1">
                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Coleccion</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <ul id="dropdown1" class="hidden py-2 space-y-2">
                <li>
                  <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                </li>
                <li>
                  <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                </li>
                <li>
                  <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                </li>
              </ul>
            </li>
            <li>
              <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown2" data-collapse-toggle="dropdown2">
                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Fecha</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <ul id="dropdown2" class="hidden py-2 space-y-2">
                <li>
                  <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                </li>
                <li>
                  <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                </li>
                <li>
                  <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                </li>
              </ul>
            </li>
          
          </ul>
        </div>
      </aside>
      
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