import { useState } from 'react';

export const Filters = () => {
  const [documentType, setDocumentType] = useState('');
  const [year, setYear] = useState('');

  const handleDocumentTypeChange = (e) => {
    setDocumentType(e.target.value);
    onFilterChange({ documentType: e.target.value, year });
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
    onFilterChange({ documentType, year: e.target.value });
  };

  return (
    <div className="filters">
      <label>
        Tipo de Documento:
        <select value={documentType} onChange={handleDocumentTypeChange}>
          <option value="">Todos</option>
          <option value="articulo">Artículo Científico</option>
          <option value="tesis">Tesis</option>
        </select>
      </label>
      <label>
        Año de Publicación:
        <input
          type="number"
          value={year}
          onChange={handleYearChange}
          placeholder="Ej. 2023"
        />
      </label>
    </div>
  )
}
