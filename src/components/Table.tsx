import React from 'react'
import {IData} from '../store/types'
import getDBEntry from '../utils/db/getDBEntry'

interface IProps {
  data: ReadonlyArray<IData>
  actualizeStore: (data: ReadonlyArray<IData>) => void
}

const addColumn = (value: any) => <td key={Math.random()}>{value}</td>

const addRow = (rowData: any) => <tr key={Math.random()}>{rowData.map((value: any) => addColumn(value))}</tr>

const addHeader = (keys: string[]) => <tr key={Math.random()}>{keys.map(key => <th>{key}</th>)}</tr>

const Table = (props: IProps) => {
  const {data, actualizeStore} = props
  if (data.length === 0) {getDBEntry(actualizeStore)}
  const rows = Array(data.length).fill(data.length)
  const values = data.map((row: any) => Object.values(row))
  const keys = data.length > 0 ? Object.keys(data[0]) : []

  return (
    <table>
      <thead key={Math.random()}>
        {addHeader(keys)}
      </thead>
      <tbody key={Math.random()}>
        {rows.map((index: number) => addRow(values[index - 1]))}
      </tbody>
    </table>
  )
}

export default Table
