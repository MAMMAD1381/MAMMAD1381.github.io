import SocialLinks from './SocialLinks/SocialLinks'
import ProfilePoints from './ProfilePoints/ProfilePoints'
export default function AboutMe({profile}) {
  const points1 = [
    { key: 'Name:', value: profile.Name},
    { key: 'Birthday:', value: profile.Birthday },
    { key: 'Website:', value: profile.Website },
    { key: 'Phone:', value: profile.Phone },
  ]
  const points2 = [
    { key: 'Age:', value: profile.Age },
    { key: 'Degree:', value: profile.Degree },
    { key: 'Gmail:', value: profile.Gmail },
    { key: 'City:', value: profile.City },
  ]

  return (
    <>
      <section id="about" className="about bg-light">
        <div className="container">
          <div className="section-title">
            <h2>About me</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 flex-row justify-content-between" data-aos="fade-right">
              <img src={profile.Avatar} className="img-fluid" alt="" />
              {profile && <SocialLinks profile={profile} />}
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Backend &amp; Web Developer.</h3>
              <br></br>
              <br></br>
              <br></br>
              <div className="row">
                <div className="col-lg-6">
                  <ProfilePoints points={points1} />
                </div>
                <div className="col-lg-6">
                  <ProfilePoints points={points2} />
                </div>
              </div>
              <p>
                {profile.Introduction}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
