import { useState } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Project from './Project'
import Select from 'react-select'
import tagOptions from '../../configs/ProjectTags'

export default function Projects({ projects }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState([])

  const filteredProjects = projects.filter((project) => {
    const title = project.title ? project.title.toLowerCase() : ''
    const description = project.desc ? project.desc.toLowerCase() : ''
    const hasSearchText =
      title.includes(searchQuery.toLowerCase()) || description.includes(searchQuery.toLowerCase())

    if (selectedTags.length === 0) {
      return hasSearchText
    } else {
      return hasSearchText && project.tags.some((tag) => selectedTags.includes(tag))
    }
  })

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleTagSelectChange = (selectedOptions) => {
    const selectedTags = selectedOptions.map((option) => option.value.toLowerCase())
    setSelectedTags(selectedTags)
  }

  const selectedTagOptions = selectedTags.map((tag) => ({ value: tag, label: tag }))


  return (
    <>
      <section id="projects" className="container bg-light d-inline-flex flex-column">
        <div className="input-group rounded" style={{ width: '200px' }}>
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />

          <span className="input-group-text border-0" id="search-addon">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
        <div className="col-12">
          <div className="tags-container">
            <h4>Tags:</h4>
            <Select
              options={tagOptions.map(option => {return{value: option, label: option}})}
              isMulti
              value={selectedTagOptions}
              onChange={handleTagSelectChange}
            />
          </div>
          <ul className="list-inline mx-auto justify-content-center">
            {filteredProjects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
