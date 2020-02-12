import {combineReducers} from '@reduxjs/toolkit'
import {buttonSettings} from './actions'
import {ISetButtonColor} from './types'

const initialButtonState = {
  color: buttonSettings.color,
}

const initialNavBarState = {
  selected: '/',
  selectedColor: 'lightgray',
  unselectedColor: 'gray'
}

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

const rootReducer = combineReducers({buttonSetting, navbar})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
