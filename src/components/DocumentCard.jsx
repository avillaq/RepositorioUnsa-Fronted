
export const DocumentCard = ({ title, authors, summary, onClick }) => {
  return (
    <div className="document-card" onClick={onClick}>
      <h3>{title}</h3>
      <p><strong>Autores:</strong> {authors}</p>
      <p>{summary}</p>
    </div>
  )
}
