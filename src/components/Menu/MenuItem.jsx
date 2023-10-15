import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MenuItem({ name, section, icon }) {
  return (
    <>
      <li className="nav-item">
        <a href={`#${section}`} className="nav-link py-3 px-2">
          {/* //? name exists? */}

          {name ? (
            <>
              <span className="text-light"><small>{name}</small></span>
            </>
          ) : (
            <></>
          )}

          {/*//? puts space between text and icon */}
          {name && icon ? <>&nbsp;&nbsp;&nbsp;</> : <></>}

          {/*//? icon exists? */}
          {icon ? (
            <>
              <i className="d-inline-block">
                <FontAwesomeIcon icon={icon.icon} size={icon.size || 'sm'} />
              </i>
            </>
          ) : (
            <></>
          )}
        </a>
      </li>
    </>
  )
}
