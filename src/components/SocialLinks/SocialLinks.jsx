import { faGithub, faInstagram, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
import SocialLink from './SocialLink'

export default function SocialLinks({profile}) {
  return (
    <>
      <div className="profile text-center justify-content-between">
        <div className="social-links mt-3 text-center justify-content-between pb-3 mx-2">
          {profile?.github && <SocialLink link={profile.github} icon={{ icon: faGithub, color: '#333333', size: '2x' }} />}
          {profile?.linkedin && <SocialLink link={profile.linkedin} icon={{ icon: faLinkedin, color: '#0082ca', size: '2x' }} />}
          {profile?.telegram && <SocialLink link={profile.telegram} icon={{ icon: faTelegram, color: '#0088cc', size: '2x' }} />}
          {profile?.instagram && <SocialLink link={profile.instagram} icon={{ icon: faInstagram, size: '2x' }} />}
        </div>
      </div>
    </>
  )
}
