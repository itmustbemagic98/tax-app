import {Link} from 'react-router-dom'
import React from 'react'

interface IProps {
  icon: string
  isSelected: (path: string) => string
  path: string
}

const imageCss = {
  maxWidth: '40px',
  maxHeight: '40px',
  marginTop: '5px',
  marginLeft: '5px',
  marginRight: '5px'
}

const NavBarItem = (props: IProps) => {
  const {icon, isSelected, path} = props
  return (
    <Link to={path}>
      <div style={{
        backgroundColor: isSelected(path), minWidth: '50px',
        minHeight: '50px', display: 'flex'
      }}>
        <img src={icon} alt="Failed to load"
          style={imageCss} />
      </div>
    </Link>
  )
}

export default NavBarItem
