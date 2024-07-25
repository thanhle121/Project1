import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import './Style.css';
 
function Todo(){

    return (
        <>
        <div className = "todo">
            <TodoInput />
            <TodoList />
        </div>
        </>
    )
}

export default Todo;