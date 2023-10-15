import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MenuItem from './MenuItem'

export default function MenuItemDrop({ name, icon, items }) {
  return (
    <>
      <li>
        <a href={`#${name}`} data-bs-toggle="collapse" className="nav-link px-0 align-middle">
          <span className="ms-1 d-none d-sm-inline text-light">{name}</span>
          &nbsp;&nbsp;
          <i className="text-primary">
            <FontAwesomeIcon icon={icon.icon} size={icon.size || 'sm'} />
          </i>
        </a>

        <ul className="collapse nav flex-column line-light" id={`${name}`} data-bs-parent="#menu">
          {items.map((item) => {
            return <MenuItem section={item.section} name={item.name} />
          })}
        </ul>
      </li>
    </>
  )
}
