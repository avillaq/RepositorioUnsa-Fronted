import { useState } from 'react';

export const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query); // Llama a la función onSearch que se pasará como prop desde la página
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Busca artículos o tesis aquí..."
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
