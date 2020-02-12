import React from 'react'
import {connect} from 'react-redux'
import logo from './logo.svg'
import './Home.css'
import {setButtonColor} from '../store/actions'

interface IProps {
  color: string
  onClick: (color: string) => void
}

const NewsPaper = (props: IProps) => {
  const {color, onClick} = props

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <button style={{backgroundColor: color}} onClick={() => onClick('blue')}>test</button>
      <div style={{backgroundColor: color}} onClick={() => onClick('yellow')}>blub</div>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
        </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        NewsPaper
        </a>
    </header>
  )
}

const mapStateToProps = (state: any) => {
  return {
    color: state.buttonSetting.color
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  onClick: (color: string) => dispatch(setButtonColor(color))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsPaper)
