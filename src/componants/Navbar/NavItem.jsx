import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const NavItem = ({Item}) => {
  return (
    
    <li >
      {
        Item.link?
        <a style={{color:"black",fontSize:"large"}} href={Item.link?Item.link:""} target={Item.link?"_blank":""}>{Item.name.toUpperCase()}</a>:
        <a style={{color:"black",fontSize:"large"}} href={`/${Item.name}`}>{Item.name.toUpperCase()}</a>
      }
    </li>
  )
}

export default NavItem

