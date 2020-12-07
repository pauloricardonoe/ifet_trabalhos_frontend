import ListaTarefas from "./ListaTarefas";
import "./css/bootstrap.css";
import * as React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [
        {marcado: false, descricao: "Estudar"},
        {marcado: false, descricao: "Ler"},
        {marcado: true, descricao: "Caminhar"},
        {marcado: false, descricao: "Correr"}
      ],
      tarefa: ""
    }
  }

  onChangeInputTarefa = (event) => {
    this.setState(
      {
        tarefa: event.target.value
      }
    )
  }

  onKeyPress = (event) => {
    //<editor-fold desc="Adiciona item ao apertar enter">
    if (event.key === "Enter") {
      let novoarray = this.state.items;
      novoarray.push({marcado: false, descricao: this.state.tarefa});

      this.setState({
        items: novoarray,
        tarefa: ""
      })
    }
    //</editor-fold>
  }

  onEditItem = (item, index) => {
    let items = this.state.items;
    items[index] = item;
    this.setState({items: items})
  }

  onDeleteItem = (index) => {
    let itemstmp = this.state.items;
    itemstmp.splice(index, 1);
    this.setState({items: itemstmp})
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">Lista de Tarefas</li>
            </ol>
          </nav>
          <input onChange={this.onChangeInputTarefa} onKeyPress={this.onKeyPress} type="text" className="form-control"
                 placeholder="Digite algo a ser feito" value={this.state.tarefa}/>
          <ListaTarefas items={this.state.items} OnEditItem={this.onEditItem} onDeleteItem={this.onDeleteItem}/>
        </header>
      </div>
    );
  }
}

export default App;
