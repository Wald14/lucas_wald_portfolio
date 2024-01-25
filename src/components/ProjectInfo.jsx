


export default function ProjectInfo(props) {

  return (
    <div className="project-info">
      <h2 className="project-info-title">{props.projectData.title}</h2>
      <div className="project-info-links">
        <a href={props.projectData.githubLink} target="_blank">
          <img src="/assets/icons/github-mark-white.png" />
        </a>
        {props.projectData.deployedLink && 
        <a href={props.projectData.deployedLink} target="_blank">
          <img src="/assets/icons/external-link-2-32.png" />
          {/* <img src="/assets/icons/web-icon.png" /> */}
        </a>
        }
        <p>
          {props.projectData.techStack}
        </p>
      </div>
      <p className="project-info-description">{props.projectData.description}</p>
    </div>
  );
};