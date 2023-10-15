import Point from "../ProfilePoints/Point";

export default function Project({ project }) {
  return (
    <>
      <li className="col-10 list-item">
        <a href={project.url} style={{textDecoration: 'none'}} className="title">{project.title} </a> <span>({project.tags.map((tag)=>`${tag}, `)})</span>
        <p>{project.desc}</p>
        <Point point={{key: 'issued At:', value: project.createdAt}}/>
      </li>
      <hr className="hr hr-blurry"></hr>
    </>
  )
}
