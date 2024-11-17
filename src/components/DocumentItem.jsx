export const DocumentItem = ({ title, authors, editor, year, onClick }) => {
  return (
    <div onClick={onClick} className="p-4 mb-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-1">({editor}, {year}) {authors}</p>
    </div>
  )
}