import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Project from './Project'

export default function Projects({ projects }) {
  // console.log(projects)
  return (
    <>
      <section id="projects" className="container bg-light d-inline-flex flex-column">
        <div className="input-group rounded " style={{ width: '200px' }}>
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />

          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search">
              <FontAwesomeIcon icon={faSearch} />
            </i>
          </span>
        </div>
        <div className="col-12">
          <ul className="list-inline mx-auto justify-content-center">
            {projects.map((project) => (
              <Project project={project} />
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
