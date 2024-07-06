export default function Job({ jobs }) {
  return (
    <>
      <section id="education" className="bg-light">
        <div className="container">
          <div className="section-title">
            <h2>My Job Experiences</h2>
          </div>
          <div className="row">
            {jobs && jobs.map((job) => (
              <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <strong>{job.title}</strong>
                <p className="fst-italic text-primary">{job.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
