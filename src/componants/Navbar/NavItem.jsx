import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const NavItem = ({Item}) => {
  return (
    
    <li >
      {
        Item.link?
        <a style={{color:"black",fontSize:"large"}} href={Item.link?Item.link:""} target={Item.link?"_blank":""}><h5>{Item.name.toUpperCase()}</h5></a>:
        <a style={{color:"black",fontSize:"large"}} href={`/${Item.name}`}><h5>{Item.name.toUpperCase()}</h5></a>
      }
    </li>
  )
}

export default NavItem

