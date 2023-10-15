import ProfilePoints from "./ProfilePoints/ProfilePoints"

export default function TecknicalSkills(props) {
  const proficient = [
    { key: 'Javascript', value: '' },
    { key: 'Node-Js/Express', value: '' },
    { key: 'HTML/CSS', value: '' },
    { key: 'C', value: '' },
    { key: 'Java', value: '' },
    { key: 'OOP', value: '' },
    { key: 'Linux/bash', value: '' },
    { key: 'Git', value: '' },
    { key: 'Python', value: '' },
  ]
  const familiar = [
    { key: 'Type-Script', value: '' },
    { key: 'React', value: '' },
    { key: 'Next-Js', value: '' },
    { key: 'Bootstrap', value: '' },
    { key: 'CCNA', value: '' },
    { key: 'MongoDB', value: '' },
    { key: 'MySQL', value: '' },
  ]
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

                <div className="col-lg-6"><strong className="fst-italic text-primary">Proficient</strong><ProfilePoints points={proficient} /></div>
                

                <div className="col-lg-6"><strong className="fst-italic text-primary">Familiar</strong><ProfilePoints points={familiar} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
