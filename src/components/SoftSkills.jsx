import ProfilePoints from "./ProfilePoints/ProfilePoints"

export default function SoftSkills(props){
  const personal = [
    { key: 'Hardwork', value: '' },
    { key: 'Responsibility', value: '' },
    { key: 'Problem Solving', value: '' },
    { key: 'Creativity', value: '' },
    { key: 'Fast Learning', value: '' },
    { key: 'Time Management', value: '' },
  ]
  const social = [
    { key: 'Leadership', value: '' },
    { key: 'Team Working', value: '' },
  ]
  
  return (
    <>
      <section id="soft-skills" className="bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Soft Skills</h2>
          </div>
          <div className="row">
            <div className="col-lg-12 pt-4 pt-lg-0 content" data-aos="fade-left">
              <div className="row">

                <div className="col-lg-6"><strong className="fst-italic text-primary">Personal</strong><ProfilePoints points={personal} /></div>
                

                <div className="col-lg-6"><strong className="fst-italic text-primary">Social</strong><ProfilePoints points={social} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}