export const DocumentItem = ({ id, title, authors, editor, year, faculty, onClick }) => {
  return (
    <div onClick={onClick} className="py-4 px-6 rounded-lg border-b-2 last:border-b-0 cursor-pointer hover:bg-gray-100 transition-colors duration-300" id={id}>
      <p className="text-sm text-gray-500">{faculty}</p>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">({editor}, {year}) {authors}</p>
    </div>
  )
}