import * as React from "react";
import Tarefa from "./Tarefa";

class ListaTarefas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items
    }
  }

  render() {

    return (
      <div>
        <ul className="list-group">
          {
            this.state.items.map((item, index) => {
              return (
                <Tarefa key={index} index={index} item={item} OnEditItem={this.props.OnEditItem} onDeleteItem={this.props.onDeleteItem}/>
              )
            })
          }
        </ul>
      </div>
    )
  }

}

export default ListaTarefas;