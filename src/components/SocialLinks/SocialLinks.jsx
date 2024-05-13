import { faGithub, faInstagram, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
import SocialLink from './SocialLink'

export default function SocialLinks({configs}) {
  console.log('social', configs)
  return (
    <>
      <div className="profile text-center justify-content-between">
        <div className="social-links mt-3 text-center justify-content-between pb-3 mx-2">
          {configs?.github && <SocialLink link={configs.github} icon={{ icon: faGithub, color: '#333333', size: '2x' }} />}
          {configs?.linkedin && <SocialLink link={configs.linkedin} icon={{ icon: faLinkedin, color: '#0082ca', size: '2x' }} />}
          {configs?.telegram && <SocialLink link={configs.telegram} icon={{ icon: faTelegram, color: '#0088cc', size: '2x' }} />}
          {configs?.instagram && <SocialLink link={configs.instagram} icon={{ icon: faInstagram, size: '2x' }} />}
        </div>
      </div>
    </>
  )
}
