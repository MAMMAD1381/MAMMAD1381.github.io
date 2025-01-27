import aboutMe from "../configs/AboutMe";
import courses from "../configs/Courses";
import educations from "../configs/Educations";
import softSkills from "../configs/SoftSkills";
import tecknicalSkills from "../configs/TecknicalSkills";
import jobs from "../configs/Jobs";
import repos from '../configs/Repos'


export async function loadConfigs(callback) {
    await callback({aboutMe, courses, educations, softSkills, tecknicalSkills, repos, jobs})
    return {aboutMe, courses, educations, softSkills, tecknicalSkills, repos, jobs}
}
