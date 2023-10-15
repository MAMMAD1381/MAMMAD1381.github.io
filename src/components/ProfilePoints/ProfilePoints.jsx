import Point from './Point'

export default function ProfilePoints({ points }) {
  return (
    <>
      <ul>
        {points.map((point) => {
          return <Point point={point} />
        })}
      </ul>
    </>
  )
}
