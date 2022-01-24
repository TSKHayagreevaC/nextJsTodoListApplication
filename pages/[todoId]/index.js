import Head from "next/head";
import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import TodoListItemDetails from "../../components/TodoListItemDetails"

function TodoItemDetails() {
    const [todoItemDetails, setTodoItemDetails] = useState({});
    const router = useRouter();
    const currentTodoId = parseInt(router.query.todoId);
    useEffect(() => {
        const todosData = localStorage.getItem('todosData');
        const todosDataArray = JSON.parse(todosData);
        const todosListItem = todosDataArray.find(eachTodo => eachTodo.id === currentTodoId);
        setTodoItemDetails(todosListItem);
    }, []);
    return (
        <div>
            <Head>
                <title>Todos / {todoItemDetails.title}</title>
                <meta name="description" content={todoItemDetails.description} />
            </Head>
            <TodoListItemDetails eachTodo={todoItemDetails} />
        </div>
    )
}

export default TodoItemDetails