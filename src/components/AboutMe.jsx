import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import avatar from '.././images/avatar.jpg'
import { faBaby } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import SocialLinks from './SocialLinks/SocialLinks'
import ProfilePoints from './ProfilePoints/ProfilePoints'
export default function AboutMe() {
  const points1 = [
    { key: 'Name:', value: 'Mohammad Mohammadina' },
    { key: 'Birthday:', value: '29 May 2002' },
    { key: 'Website:', value: 'https://mammad1381.github.io' },
    { key: 'Phone:', value: '+98 990 890 6984' },
  ]
  const points2 = [
    { key: 'Age:', value: '21' },
    { key: 'Degree:', value: 'Bachelor Degree (ongoing)' },
    { key: 'Gmail:', value: 'mohammad.m6984@gmail.com' },
    { key: 'City:', value: 'Mashhad, Razavi Khorasan Province' },
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
              <img src={avatar} className="img-fluid" alt="" />
              <SocialLinks />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Backend &amp; Web Developer.</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ProfilePoints points={points1} />
                </div>
                <div className="col-lg-6">
                  <ProfilePoints points={points2} />
                </div>
              </div>
              <p>
                i’m Mohammad Mohammadian a forth year university, more than three years of
                programming experience with different programming languages such as java-script,
                java, c and Databases like Mongo-DB and MY-SQL. i’m intrested in learning backend
                with node-js and i have more than one year experience with node-js and javascript
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
