import { useState, useId } from 'react';

const options = ["Titulo", "Autor"];

export const BasicSearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(options[0]);
  
  const dropdownButtonId = useId();
  const dropdownId = useId();
  const searchInputId = useId();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="max-w-lg mx-auto" onSubmit={handleSearch}>
      <div className="flex">
        <button id={dropdownButtonId} data-dropdown-toggle={dropdownId} className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100" type="button">{selected}<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
        </button>
        <div id={dropdownId} className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <ul className="py-2 text-sm text-gray-700" aria-labelledby={dropdownButtonId}>
            {
              options.map((option, index) => (
                <li key={index}>
                  <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100" onClick={() => setSelected(option)}>{option}</button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="relative w-full">
          <input type="search" id={searchInputId} className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Busca artículos o tesis aquí..." required value={query} onChange={handleInputChange} />
          <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  )
}