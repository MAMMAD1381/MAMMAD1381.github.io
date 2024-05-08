
import Menu from './components/Menu/Menu'
import AboutMe from './components/AboutMe'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Background from './components/‌Background'
import Entry from './components/Entry'
import Education from './components/Education'
import TecknicalSkills from './components/TecknicalSkills'
import SoftSkills from './components/SoftSkills'
import Courses from './components/Courses'
import Projects from './components/Projects/Projects'

function App() {
  const [repos, setRepos] = useState([])
  const getRequest = async () => {
    const { data } = await axios.get('https://api.github.com/users/MAMMAD1381/repos')
    data.map((item) =>
      setRepos(
        (repos) => [...repos, {
          title: item.name,
          url: item.html_url,
          tags: item.topics,
          desc: item.description,
          createdAt: item.created_at,
        }]
      )
    )
  }
  useEffect(() => {
    getRequest()
  }, [])

  return (
    <>
      <Background />
      <Menu
        content={
          <>
            <Entry />
            <AboutMe />
            <br></br>
            <Education />
            <br></br>
            <TecknicalSkills />
            <br></br>
            <SoftSkills />
            <br></br>
            <Courses />
            <br></br>
            <Projects projects={repos} />
          </>
        }
      />
    </>
  )
}

export default App
