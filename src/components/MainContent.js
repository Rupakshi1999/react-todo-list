import TodoItem from "./TodoItem";
import TodosData from "./todoitems"
import React from "react"

  class MainContent extends React.Component {
   constructor(){
      super()
      this.state = {
         todos:TodosData
      }
      this.handleChange = this.handleChange.bind(this)
   }
   
   handleChange(id) {
      this.setState(prevState => {
         const updatedTodos = prevState.todos.map(todo => {
             if (todo.id === id) {
                 return {
                  id:todo.id,
                  text:todo.text,
                  completed:!todo.completed
                 }
             }
             return todo
         })
         return {
             todos: updatedTodos
         }
      })
      }

      render() {
         const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
         
         return (
             <div className="todo-list">
                 {todoItems}
             </div>
         )    
     }
  }
  
  export default MainContent;