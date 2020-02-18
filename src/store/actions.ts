import {IData} from "./types"

export const buttonSettings = {
  color: '#FF0000',
}

export const setButtonColor = (color: string) => ({
  type: 'SET_BUTTON_COLOR',
  color
})

export const setTableData = (data: ReadonlyArray<IData>) => {
  return {
    type: 'SET_TABLE_DATA',
    data
  }
}
