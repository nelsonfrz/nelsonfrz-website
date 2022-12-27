import ProjectLink from "./ProjectLink";

export default function ProjectsList({ projects, className }: { projects: Project[], className?: string }) {
  return (<>
    <ul className={`${className} grid-auto-fill`}>
      {projects.map(project => <ProjectLink key={project.id} project={project} />)}
    </ul>
  </>);
}