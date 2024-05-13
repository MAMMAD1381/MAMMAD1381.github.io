import background from '../images/HomePage/background.webp'
export default function Background(props) {
  return (
    <>
      <div
        className="bg-image d-flex justify-content-center align-items-center w-100"
        style={{
          backgroundImage: `url(${background})`,
          // backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/new/fluid/nature/015.webp")',
          height: '100vh',
          position: 'fixed',
          zIndex: '-100',
        }}
      ></div>
    </>
  )
}
