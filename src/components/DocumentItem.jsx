export const DocumentItem = ({ document }) => {
  const { id, titulo, id_editor, fecha, id_coleccion } = document
  return (
    <div className="py-4 px-6 rounded-lg border-b-2 last:border-b-0 cursor-pointer hover:bg-gray-100 transition-colors duration-300" id={id}>
      <p className="text-sm text-gray-500">{id_coleccion}</p>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{titulo}</h3>
      <p className="text-sm text-gray-600">({"Universidad Nacional de San Agustin"}, {fecha}) {"Juanito Perez"}</p>
    </div>
  )
}