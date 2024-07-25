export const createTodo = (content: any) =>{
    return {
        type: "CREATE_TODO",
        content: content,
    }
}
export const completedTodo = (id: number) =>{
    return {
        type: "COMPLETED_TODO",
        id: id,
    }
}
export const deleteTodo = (id: number) =>{
    return {
        type: "DELETE_TODO",
        id: id,
    }
}
export const undoTodo = (id: number) =>{
    return {
        type: "UNDO_TODO",
        id: id,
    }
}