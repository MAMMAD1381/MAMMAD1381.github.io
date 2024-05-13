import ProfilePoints from "./ProfilePoints/ProfilePoints"

export default function TecknicalSkills({tecknicalSkills}) {
  return (
    <>
      <section id="tecknical-skills" className="bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Tecknical Skills</h2>
          </div>
          <div className="row">
            <div className="col-lg-12 pt-4 pt-lg-0 content" data-aos="fade-left">
              <div className="row">

                {tecknicalSkills && <div className="col-lg-6"><strong className="fst-italic text-primary">Proficient</strong><ProfilePoints points={tecknicalSkills.proficient.map(proficientSkill => {return{key: proficientSkill, value: ''}})} /></div>}                

                {tecknicalSkills && <div className="col-lg-6"><strong className="fst-italic text-primary">Familiar</strong><ProfilePoints points={tecknicalSkills.familiar.map(proficientSkill => {return{key: proficientSkill, value: ''}})} /></div>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
