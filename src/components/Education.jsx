export default function Education({ educations }) {
  return (
    <>
      <section id="education" className="bg-light">
        <div className="container">
          <div className="section-title">
            <h2>My Educations</h2>
          </div>
          <div className="row">
            {educations && educations.map((education) => (
              <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <strong>{education.title}</strong>
                <p className="fst-italic text-primary">{education.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
