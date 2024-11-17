export const DocumentItem = ({ title, authors, editor, year, onClick }) => {
  return (
    <div onClick={onClick} className="py-3 px-6 mb-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">{title}</h3>
      <p className="text-sm text-gray-600 text-left">({editor}, {year}) {authors}</p>
    </div>
  )
}