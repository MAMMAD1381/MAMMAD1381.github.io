import aboutMe from "../configs/AboutMe";
import courses from "../configs/Courses";
import educations from "../configs/Educations";
import softSkills from "../configs/SoftSkills";
import tecknicalSkills from "../configs/TecknicalSkills";
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
