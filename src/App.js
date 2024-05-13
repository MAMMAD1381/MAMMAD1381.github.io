
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
import logo from './images/Courses/taktourandaz/logo.jpg'
import certificate from './images/Courses/taktourandaz/Certificate.jpg'
import { loadConfigs } from './utils/loadConfigs'

function App() {
  const [configs, setConfigs] = useState({})
  useEffect(() => {
    // loadConfigs((configs) => setConfigs(configs))
    loadConfigs(async (configs) => {
      setConfigs(configs);
    }).catch((error) => {
      console.error('Error loading configs:', error);
    });
  }, [])

  return (
    <>
      <Background />
      {configs && <Menu
        content={
          <>
            <Entry />
            {configs.aboutMe && <AboutMe configs={configs.aboutMe}/>}
            <br></br>
            {configs && <Education educations={configs.educations}/>}
            <br></br>
            {configs && <TecknicalSkills tecknicalSkills={configs.tecknicalSkills}/>}
            <br></br>
            {configs && <SoftSkills softSkills={configs.softSkills}/>}
            <br></br>
            <Courses courses={[{
              name: 'PartSoftware Group, TakTour Andaz',
              description: 'CCNA courses which was heled in part software group',
              date: '2022-2023',
              logo: logo,
              image: certificate,
              url: 'https://partsoftware.com/college/'
            }]} />
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
