import {
  faChalkboardTeacher,
  faCogs,
  faComments,
  faGraduationCap,
  faLaptopCode,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import MenuItem from './MenuItem'
import avatar from '../.././images/AboutMe/avatar.jpg'
import SocialLinks from '../SocialLinks/SocialLinks'

export default function Menu({ content, configs }) {
  return (
    <>
      <div id="sidebar" className="container-fluid w-100">
        <div className="row">
          <div className="col-sm-auto bg-dark sticky-top position-sticky">
            <div className="d-flex flex-sm-column flex-row flex-nowrap bg-dark align-items-strech sticky-top position-sticky">
              <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center justify-content-between w-100 px-3 align-items-center">
                <>
                  <img
                    src={avatar}
                    className="rounded-circle mb-3 pt-3"
                    style={{ width: 150 }}
                    alt="Avatar"
                  />
                  <h5 className="mb-2">
                    <strong className='text-light'>Mohammad mohammadian</strong>
                  </h5>
                  <p className="text-muted">
                    <span className="badge bg-primary">Backend Developer</span>
                  </p>
                  <SocialLinks configs={configs}/>
                </>

                <MenuItem name={'About me'} section={'about'} icon={{ icon: faUser, size: 'xl' }} />

                <MenuItem
                  name={'My education'}
                  section={'education'}
                  icon={{ icon: faGraduationCap, size: 'xl' }}
                />

                <MenuItem
                  name={'Tecknical skills'}
                  section={'tecknical-skills'}
                  icon={{ icon: faCogs, size: 'xl' }}
                />

                <MenuItem
                  name={'Soft skills'}
                  section={'soft-skills'}
                  icon={{ icon: faComments, size: 'xl' }}
                />

                <MenuItem
                  name={'Attended courses'}
                  section={'courses'}
                  icon={{ icon: faChalkboardTeacher, size: 'xl' }}
                />
                <MenuItem
                  name={'Projects'}
                  section={'projects'}
                  icon={{ icon: faLaptopCode, size: 'xl' }}
                />
                
              </ul>
            </div>
          </div>
          <div className="col-sm p-3 min-vh-100">{content }</div>
        </div>
      </div>
    </>
  )
}
