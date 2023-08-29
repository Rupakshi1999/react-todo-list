import TodoItem from "./TodoItem";
import todos from "./todoitems"

function MainContent() {
   const todoComponent = todos.map(todo => <TodoItem key={todo.id} item={todo}/>);
    return (
     <main className="main-content">
        This is main
        <div className = "todo-list">
        {todoComponent}
        </div>
     </main>
    );
  }
  
  export default MainContent;