import * as React from "react";
import {ThemeProvider} from "styled-components";
import {createGlobalStyle} from "styled-components"
import {dark, light} from "./themes";

export const Estilo = createGlobalStyle`
body{
  background: ${props => props.theme.bodyBackgroundColor};
  transition: all 0.30s linear;
}

h1 {
    color: ${props => props.theme.h1Color};
    transition: all 0.30s linear;  
  }

input[type=button]{
  background-color: ${props => props.theme.buttonBackgroudColor};
  color: ${props => props.theme.buttonCollor};
  font-size: 30px;
}

input[type=text]{
  background-color: ${props => props.theme.inputBackgroundColor};
  color: ${props => props.theme.inputColor};
  font-size: 30px;
}
`;

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      theme: "light"
    }
  }

  ChangeTheme = (event) => {
    if (this.state.theme === 'light')
      this.setState({theme: 'dark'})
    else this.setState({theme: 'light'})
  }

  render() {

    return (
      <div className="App">
        <ThemeProvider theme={this.state.theme === 'light' ? light : dark}>
          <Estilo/>
          <div className="Cxprincpal">
            <input type="button" defaultValue={this.state.theme} onClick={this.ChangeTheme}/>
            <h1>Preencha seu Email</h1>
            <input type="text"/>
            <input type="Button" defaultValue="Assinar"/>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
