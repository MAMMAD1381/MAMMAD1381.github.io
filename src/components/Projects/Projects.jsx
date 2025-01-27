import React, { useState } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Project from './Project'
import Select from 'react-select'
import tagOptions from '../../configs/ProjectTags'

export default function Projects({ projects }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState([])

  // Filter projects by search query and selected tags
  const filteredProjects = Object.keys(projects).reduce((acc, section) => {
    const sectionProjects = projects[section].filter((project) => {
      const title = project.name ? project.name.toLowerCase() : ''
      const description = project.description ? project.description.toLowerCase() : ''
      const hasSearchText =
        title.includes(searchQuery.toLowerCase()) || description.includes(searchQuery.toLowerCase())

      if (selectedTags.length === 0) {
        return hasSearchText
      } else {
        return hasSearchText && project.tags.some((tag) => selectedTags.includes(tag))
      }
    })

    if (sectionProjects.length > 0) {
      acc.push({ section, projects: sectionProjects })
    }

    return acc
  }, [])

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleTagSelectChange = (selectedOptions) => {
    const selectedTags = selectedOptions.map((option) => option.value.toLowerCase())
    setSelectedTags(selectedTags)
  }

  const selectedTagOptions = selectedTags.map((tag) => ({ value: tag, label: tag }))

  return (
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
            options={tagOptions.map((option) => ({ value: option, label: option }))}
            isMulti
            value={selectedTagOptions}
            onChange={handleTagSelectChange}
          />
        </div>
        {filteredProjects.map(({ section, projects }) => (
          <div key={section} className="project-section">
            <h3>{section}</h3> {/* Section title */}
            <ul className="list-inline mx-auto justify-content-center">
              {projects.map((project) => (
                <Project key={project.url} project={project} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
