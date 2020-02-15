import React, {ReactNode} from 'react'
import homeIcon from '../images/icons/homeIcon.png'
import newsPaperIcon from '../images/icons/newsPaperIcon.png'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom"
import NavBarItem from './NavBarItem'

interface IProps {
  children?: ReactNode
  location: {pathname: string}
  navbar: {
    selected: string
    selectedColor: string
    unselectedColor: string
  }
}

const NavBar = (props: IProps) => {
  const location = props.location.pathname
  const isSelected = (path: string) => location === path ?
    props.navbar.selectedColor : props.navbar.unselectedColor
  return (
    <div>
      <div style={{
        float: 'left',
        maxWidth: '50px',
        position: 'absolute',
        minHeight: '100%',
        backgroundColor: 'gray'
      }}>
        <NavBarItem icon={homeIcon} isSelected={isSelected} path='/' />
        <NavBarItem icon={newsPaperIcon} isSelected={isSelected} path='/newspaper' />
      </div>
      {props.children}
    </div>

  )
}

const mapStateToProps = (state: any) => {
  return {
    navbar: state.navbar
  }
}

export default withRouter(connect(mapStateToProps, () => ({}))(NavBar))
