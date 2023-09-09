import React from 'react'

const Project = ({project}) => {
  // console.log(project.projectDesc)
  return (
    <div class="ProjectCard_container__KPNV9 card">
            <img class="card-img" src={`${project.projectScreenshot}`} alt={`${project.projectaltName}`}/>
            <div class="card-body">
                <div class="card-title h5">{`${project.projectName}`}</div>
                {console.log(project.projectDesc)}
                <div class="card-text">{`${project.projectDesc}`}</div>
                <a role="button" tabindex="0" href={`${project.projectLiveLink}`}target="_blank" class="ProjectCard_button__U4tNs btn btn-primary">View Live</a>
                <a role="button" tabindex="1" href={`${project.projectGithublink}`} target="_blank" class="ProjectCard_button__U4tNs btn btn-dark">View on Github</a>
            </div>
        </div>
  )
}

export default Project