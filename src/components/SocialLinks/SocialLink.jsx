import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialLink({ link, icon }) {
  return (
    <>
      <a href={link} className="mx-2">
        <i className="fab">
          <FontAwesomeIcon icon={icon.icon} size={icon.size} color={icon.color} />
        </i>
      </a>
    </>
  )
}
