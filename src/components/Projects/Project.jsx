import Point from "../ProfilePoints/Point";

export default function Project({ project }) {
  return (
    <li className="list-item">
      <a href={project.url} style={{ textDecoration: 'none' }} className="title">
        {project.name} 
      </a>
      <span>({project.tags.join(', ')})</span>
      <p>{project.description}</p>
      <Point point={{ key: 'Issued At:', value: project.created_at }} />
      <hr className="hr hr-blurry" />
    </li>
  )
}
