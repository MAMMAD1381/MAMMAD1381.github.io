
import Menu from './components/Menu/Menu'
import AboutMe from './components/AboutMe'
import { useEffect, useState } from 'react'
import Background from './components/‌Background'
import Entry from './components/Entry'
import Education from './components/Education'
import TecknicalSkills from './components/TecknicalSkills'
import SoftSkills from './components/SoftSkills'
import Courses from './components/Courses'
import Projects from './components/Projects/Projects'
import Job from './components/Job'
import { loadConfigs } from './utils/loadConfigs'

function App() {
  const [configs, setConfigs] = useState({})
  useEffect(() => {
    loadConfigs(async (configs) => {
      setConfigs(configs);
    }).catch((error) => {
      console.error('Error loading configs:', error);
    });
  }, [])

  return (
    <>
      <Background />
      {configs.aboutMe && <Menu
        content={
          <>
            {configs.aboutMe && <Entry profile={configs.aboutMe}/>}
            {/* <Entry /> */}
            {configs.aboutMe && <AboutMe profile={configs.aboutMe}/>}
            <br></br>
            {configs && <Education educations={configs.educations}/>}
            <br></br>
            {configs && <Job jobs={configs.jobs}/>}
            <br></br>
            {configs && <TecknicalSkills tecknicalSkills={configs.tecknicalSkills}/>}
            <br></br>
            {configs && <SoftSkills softSkills={configs.softSkills}/>}
            <br></br>
            {configs && <Courses courses={configs.courses} />}
            <br></br>
            {configs.repos && <Projects projects={configs.repos}/>}
          </>
        }

        configs={configs.aboutMe}
      />}
    </>
  )
}

export default App
