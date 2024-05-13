import aboutMe from "../configs/AboutMe.json";
import courses from "../configs/Courses.json";
import educations from "../configs/Educations.json";
import softSkills from "../configs/SoftSkills.json";
import tecknicalSkills from "../configs/TecknicalSkills.json";
import axios from 'axios'


export async function loadConfigs(callback) {
  try {
    let repos = []
    try{
      // const { data } = await axios.get('https://api.github.com/users/MAMMAD1381/repos')
      // repos = data.map((item) =>{
      //   return {
      //     title: item.name,
      //     url: item.html_url,
      //     tags: item.topics,
      //     desc: item.description,
      //     createdAt: item.created_at,
      //   }
      // })
      
    }
    catch(err){console.error(err)}
    await callback({aboutMe, courses, educations, softSkills, tecknicalSkills, repos})
    return {aboutMe, courses, educations, softSkills, tecknicalSkills, repos}
  } catch (error) {
    console.error('Error loading configs:', error);
    throw error;
  }
}
