import React from 'react'
import "./projects.css"
import Project from './Project'


const MyProjects = () => {
    const projects = [
        {
            projectName:"Clone-tube Website",
            projectScreenshot :"https://i.ibb.co/9VrK9J8/Screenshot-245.png",
            projectAltName :"cloneTube Website",
            projectDesc:"Clone-Tube, akin to YouTube, is your go-to video sharing platform. Immerse yourself in an array of content, engage with creators, and enjoy seamless playback. Explore, create, and connect with ease on Clone-Tube!",
            projectGithublink:"https://github.com/ksudharshan1706/clone-tube/tree/master",
            projectLiveLink:"https://youtubecloneguvi.netlify.app/"  
        },
        {
            projectName:"AI GPT Website",
            projectScreenshot :"https://i.ibb.co/JdpF6kQ/Screenshot-246.png",
            projectaltName :"AIGPT Website",
            projectDesc:"AI GPT is an advanced and intelligent chatbot powered by cutting-edge artificial intelligence. Our goal is to provide you with an interactive and seamless conversational experience.",
            projectGithublink:"https://github.com/ksudharshan1706/AIGpt/tree/master",
            projectLiveLink:"https://cheerful-beijinho-4abf87.netlify.app/"  
        },
        {
            projectName:"Netflix-Clone Website",
            projectScreenshot :"https://i.ibb.co/DfJbLBv/Screenshot-247.png",
            projectaltName :"Netflix-Clone Website",
            projectDesc:"Netflix-Clone: Your on-demand streaming companion, delivering endless entertainment reminiscent of your favorite platform.",
            projectGithublink:"https://github.com/ksudharshan1706/Netflixifyclone/tree/master",
            projectLiveLink:"https://shimmering-crostata-ee9569.netlify.app/register"  
        },
        {
            projectName:"SocialMedia Website",
            projectScreenshot :"https://i.ibb.co/gZ85Zyh/Screenshot-248.png",
            projectaltName :"SocialMedia Website",
            projectDesc:"SocialMedia: SocialMedia is a dynamic social media platform that connects people from around the world in a seamless and engaging way. With user-friendly features reminiscent of Facebook",
            projectGithublink:"https://github.com/ksudharshan1706/socialMedia/tree/master",
            projectLiveLink:"https://facebookclonemain.netlify.app/"  
        }
    ]

  return (
    <div className='main'>
    <div className="container"> 
        <div class="projectsContainer">
            {projects.map((project)=><Project project={project}/>)}
        </div>
    </div>
    </div>
  )
}

export default MyProjects