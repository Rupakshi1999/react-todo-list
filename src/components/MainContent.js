import TodoItem
 from "./TodoItem";
function MainContent() {
    return (
     <main className="main-content">
        This is main
        <div className = "todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        </div>
     </main>
    );
  }
  
  export default MainContent;