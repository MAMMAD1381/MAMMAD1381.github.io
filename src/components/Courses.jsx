import ProfilePoints from './ProfilePoints/ProfilePoints'
import taktourandaz from '.././images/taktourandaz.jpg'
import Point from './ProfilePoints/Point'

export default function Courses(props) {
  return (
    <>
      <section id="courses" className="about bg-light">
        <div className="container">
          <div className="section-title">
            <h2>My Attended Courses</h2>
          </div>
          <div className="row">
            <div className="pt-4 pt-lg-0 content row" data-aos="fade-left">
              <img
                src={taktourandaz}
                className="rounded-squre mb-3 pt-3 col-lg-3 align-middle"
                style={{ width: 150 }}
                alt="taktourandaz course"
              />

              <p className="fst-italic col-lg-9 align-middle">
                <Point point={{ key: 'PartSoftware Group, TakTour Andaz ', value: '2022-2023' }} />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
