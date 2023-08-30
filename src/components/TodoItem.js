import React from "react"

class TodoItem extends React.Component {
  constructor() {
    super()
    this.state = {
      color: "#000000"
    }
  }

  componentDidUpdate(prevProp) {
    if (prevProp.item.completed !== this.props.item.completed) {
      // this if condition is necessary to break the infite loop, 
      // it will only update the state once if the prop is update and 
      // then it will be called again but the prop is not update so the 
      // state won't be updated thus breaking the loop
      if (this.props.item.completed) {
        this.setState({ color: "#00FF00" })
      }
      else {
        this.setState({ color: "#000000" })
      }
    }
  }

  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.item.completed}
          onChange={() => this.props.handleChange(this.props.item.id)}
        />
        <p style={{ color: this.state.color }}>{this.props.item.text}</p>
      </div>
    );
  }
}
export default TodoItem;