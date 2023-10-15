export default function Point({point}) {
  return (
    <>
      <li>
        <i className="bi bi-chevron-right" /> <strong>{point.key}</strong>{' '}
        <span>{point.value}</span>
      </li>
    </>
  )
}
