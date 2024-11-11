import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    console.log(`Buscar documentos para: ${query}`);
  }, [query]);

  return (
    <div>
      <h2>Resultados de búsqueda para: "{query}"</h2>
      <div>
        {results.length === 0 ? (
          <p>No se encontraron documentos</p>
        ) : (
          results.map((doc, index) => (
            <div key={index}>
              <h3>{doc.title}</h3>
              <p>{doc.summary}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
