import { faGithub, faInstagram, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
import SocialLink from './SocialLink'

export default function SocialLinks() {
  return (
    <>
      <div className="profile text-center justify-content-between">
        <div className="social-links mt-3 text-center justify-content-between pb-3 mx-2">
          <SocialLink link={'https://github.com/MAMMAD1381'} icon={{ icon: faGithub, color: '#333333', size: '2x' }} />
          <SocialLink link={'https://www.linkedin.com/in/mohammad-mohammdian-512655257/'} icon={{ icon: faLinkedin, color: '#0082ca', size: '2x' }} />
          <SocialLink link={'https://t.me/sid_the_lord_of_fire'} icon={{ icon: faTelegram, color: '#0088cc', size: '2x' }} />
          <SocialLink link={'https://www.instagram.com/mohammad_mohammadian1381/'} icon={{ icon: faInstagram, size: '2x' }} />
        </div>
      </div>
    </>
  )
}
