import React from 'react'
import "./skills.css"
const SkillItem = ({skill}) => {
  return (
    <div class="skill">
      <h5>{skill.skill}</h5>
      <div class="bar-container">
          <div class="bar" style={{width:`${skill.percentage}`}}></div>
      </div>
    </div>
  )
}

export default SkillItem