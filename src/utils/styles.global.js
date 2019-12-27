import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}

.App {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.backgroundColor};
  color: ${props => props.theme.colors.textColor};
}
`