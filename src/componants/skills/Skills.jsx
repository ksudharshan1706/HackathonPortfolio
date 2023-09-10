import React from 'react'
import SkillItem from './SkillItem'
import "./skills.css"
const Skills = () => {
    const FrontEnd= [
        {
            skill:"React",
            percentage:"90%"
        },
        {
            skill:"Bootstrap",
            percentage:"90%"
        },
        {
            skill:"Css",
            percentage:"90%"
        },
        {
            skill:"Html5",
            percentage:"90%"
        }
 
    ]
    const BackEnd= [
        {
            skill:"Node JS",
            percentage:"75%"
        },
        {
            skill:"Express",
            percentage:"80%"
        },
        {
            skill:"Mongoose",
            percentage:"80%"
        },
        {
            skill:"Axios",
            percentage:"90%"
        }
 
    ]
    const Languages= [
        {
            skill:"Python",
            percentage:"90%"
        },
        {
            skill:"JavaScript",
            percentage:"85%"
        },
        {
            skill:"C#",
            percentage:"75%"
        }
 
    ]
    const Database= [
        {
            skill:"MongoDB",
            percentage:"75%"
        },
        {
            skill:"MSSQL",
            percentage:"85%"
        }
 
    ]
  return (
    <div class="skills">
        <div style={{width:"90%",border:"2px solid"}} className='skillContainer'>
            <div style={{width:"10%",minWidth:"100px"}} className='Tech'><b>FrontEnd</b></div>
            <div style={{width:"80%"}} className='forSkill'>
                {FrontEnd.map((skill)=><SkillItem skill = {skill}/>)}
            </div>
        </div>
        <div style={{width:"90%",border:"2px solid"}} className='skillContainer'>
            <div style={{width:"10%",minWidth:"100px"}} className='Tech'><b>BackEnd</b></div>
            <div style={{width:"80%"}} className='forSkill'>
                {BackEnd.map((skill)=><SkillItem skill = {skill}/>)}
            </div>
        </div>
        <div style={{width:"90%",border:"2px solid"}} className='skillContainer'>
            <div style={{width:"10%",minWidth:"100px"}} className='Tech'><b>Languages:</b></div>
            <div style={{width:"80%"}} className='forSkill'>
                {Languages.map((skill)=><SkillItem skill = {skill}/>)}
            </div>
        </div>
        <div style={{width:"90%",border:"2px solid"}} className='skillContainer'>
            <div style={{width:"10%",minWidth:"100px"}} className='Tech'><b>DataBase:</b></div>
            <div style={{width:"80%"}} className='forSkill'>
                {Database.map((skill)=><SkillItem skill = {skill}/>)}
            </div>
        </div>
    </div>
  )
}

export default Skills