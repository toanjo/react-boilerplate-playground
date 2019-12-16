import { LightTheme } from '../utils/themes'
import { DarkTheme } from '../utils/themes'
import { SWITCH_THEME } from '../actions/theme'

const initialState = {
  name: 'light',
  theme: LightTheme
}

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      let newState = state.name === 'light' ? {
        name: 'dark',
        theme: { ...DarkTheme }
      } : {
        name: 'light',
        theme: { ...LightTheme }
      }
      return newState
    default:
      return state
  }
}
