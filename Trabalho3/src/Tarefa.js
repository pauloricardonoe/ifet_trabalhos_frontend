import * as React from "react";

class Tarefa extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modoedicao: false,
      textoedicao: this.props.item.descricao
    }
  }

  fundoazul() {

    if(this.props.item.descricao.toLowerCase().includes("ler") || this.props.item.descricao.toLowerCase().includes("estudar")) {
      return {
        background: "#29b6f6"
      }
    }else return {}
}

  onclick = () => {
    this.setState({modoedicao: true})
  }

  onSave = () => {
    let itemtmp = this.props.item;
    itemtmp.descricao = this.state.textoedicao;
    this.props.OnEditItem(itemtmp, this.props.index)
    this.setState({modoedicao: false})
  }

  onChangeText = (event) => {
    this.setState({textoedicao: event.target.value})
  }

  OnDeleteItem = () => {
    this.props.onDeleteItem(this.props.index);
  }

  render() {
    return <li className="list-group-item d-flex justify-content-between align-items-center">
      <input type="checkbox" defaultChecked={this.props.item.marcado}/>
      {(this.state.modoedicao) ?
        <div className="input-group ma-3">
          <input type="text" defaultValue={this.props.item.descricao} onChange={this.onChangeText}/>
          <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button" onClick={this.onSave}>Salvar</button>
          </div>
        </div>:
        <p style={this.fundoazul()} onClick={this.onclick}>{this.props.item.descricao}</p>}
      <button type="button" className="btn btn-primary" onClick={this.OnDeleteItem}>Excluir</button>
    </li>;
  }
}

export default Tarefa;
