import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}

.App {
  background-color: ${props => props.theme.colors.backgroundColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${props => props.theme.colors.textColor};
}
`