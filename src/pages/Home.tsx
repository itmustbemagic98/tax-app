import React from 'react'
import {connect} from 'react-redux'
import logo from './logo.svg'
import './Home.css'
import {setButtonColor, setTableData} from '../store/actions'
import Table from '../components/Table'
import {IData} from '../store/types'

interface IProps {
  color: string
  onClick: (color: string) => void
  table: ReadonlyArray<IData>
  setTableData: (data: ReadonlyArray<IData>) => void
}

const Home = (props: IProps) => {
  const {color, onClick, table, setTableData} = props

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
        Home
        </a>
      <Table data={table} actualizeStore={setTableData}></Table>
    </header>
  )
}

const mapStateToProps = (state: any) => {
  return {
    color: state.buttonSetting.color,
    table: state.table
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  onClick: (color: string) => dispatch(setButtonColor(color)),
  setTableData: (data: ReadonlyArray<IData>) => dispatch(setTableData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
