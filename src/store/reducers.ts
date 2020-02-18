import {combineReducers} from '@reduxjs/toolkit'
import {buttonSettings} from './actions'
import {ISetButtonColor, ISetTableData} from './types'

const initialButtonState = {
  color: buttonSettings.color,
}

const initialNavBarState = {
  selected: '/',
  selectedColor: 'lightgray',
  unselectedColor: 'gray'
}

const initTable = [] as any

const buttonSetting = (state = initialButtonState, action: ISetButtonColor) => {
  switch (action.type) {
    case 'SET_BUTTON_COLOR':
      return {...state, color: action.color}
    default:
      return state
  }
}

const navbar = (state = initialNavBarState) => {
  return state
}

const table = (state = initTable, action: ISetTableData) => {
  switch (action.type) {
    case 'SET_TABLE_DATA':
      return action.data
    default:
      return state
  }
}

const rootReducer = combineReducers({buttonSetting, navbar, table})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
