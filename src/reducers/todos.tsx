import { Action } from "redux";

interface Todo {
    id: number;
    content: string;
    completed: boolean
}

interface CreateActionTodo extends Action{
    type: 'CREATE_TODO';
    content: string;
}

interface CompletedActionTodo extends Action{
    type: 'COMPLETED_TODO';
    id: number;
}

interface DeleteActionTodo extends Action{
    type: 'DELETE_TODO';
    id: number;
}
interface UndoActionTodo extends Action{
    type: 'UNDO_TODO';
    id: number;
}

type TodoActionTypes = CompletedActionTodo | CreateActionTodo | DeleteActionTodo | UndoActionTodo;

const init : Todo[] = [];

const todosReducer = (state: Todo[] = init, action: TodoActionTypes): Todo[] => {
    let newState = [...state];
    console.log(state, action);
    switch(action.type){
        case 'CREATE_TODO':
            newState = [
                ...newState,
                {
                    id: Date.now(),
                    content: action.content,
                    completed: false,
                },
            ];
            return newState;
        case 'COMPLETED_TODO':
            const indexCompleted = newState.findIndex((item)=>item.id===action.id);
            newState[indexCompleted].completed = true;
            return newState;
        case 'UNDO_TODO':
            const indexUndo = newState.findIndex((item)=>item.id===action.id);
            newState[indexUndo].completed = false;
            return newState;
        case 'DELETE_TODO':
            newState = newState.filter((item) => item.id !== action.id);
            return newState;
        default: 
            return newState;
    }
}

export default todosReducer;