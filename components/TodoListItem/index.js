import {useState} from 'react'
import {useRouter} from 'next/router'

function TodoListItem(props) {
    const {eachItem} = props
    const todoStatus = eachItem.status === "completed" ? true : false 
    const [todoState, setTodoState] = useState(todoStatus)
    function changeTodoStatus() {
        const todosData = localStorage.getItem("todosData");
        if (todosData !== null) {
            const todosDataArray = JSON.parse(todosData)
            const currentTodo = todosDataArray.find(eachTodo => eachTodo.id === eachItem.id);
            const currentTodoStatus = currentTodo.status === 'completed' ? 'yet to be completed' : 'completed';
            const modifiedTodo = {
                id: eachItem.id,
                title: eachItem.title,
                description: eachItem.description,
                status: currentTodoStatus,
            }
            const indexOfCurrentTodo = todosDataArray.findIndex(eachTodo => eachTodo.id === eachItem.id)
            todosDataArray.splice(indexOfCurrentTodo, 1, modifiedTodo);
            localStorage.setItem("todosData", JSON.stringify(todosDataArray));
        }
        setTodoState(!todoState)
    }

    const router = useRouter();
    function showTodoDetails() {
        router.push('/'+eachItem.id)
    }
    
    return (
        <li>
            <input type="checkbox" defaultChecked ={todoState} onChange={changeTodoStatus}/>
            <h1>{eachItem.title}</h1>
            <button type="button" onClick={showTodoDetails}>Show Details</button>    
        </li>
    )
}

export default TodoListItem