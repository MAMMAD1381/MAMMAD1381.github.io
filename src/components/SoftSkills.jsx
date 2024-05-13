import ProfilePoints from "./ProfilePoints/ProfilePoints"

export default function SoftSkills({softSkills}){  
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

                {softSkills && <div className="col-lg-6"><strong className="fst-italic text-primary">Personal</strong><ProfilePoints points={softSkills.personal.map(personalSkill => {return{key: personalSkill, value: ''}})} /></div>}

                {softSkills && <div className="col-lg-6"><strong className="fst-italic text-primary">Social</strong><ProfilePoints points={softSkills.social.map(socialSkill => {return{key: socialSkill, value: ''}})} /></div>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}