import {useRef} from 'react';
import Head from 'next/head';

function AddTodo() {
    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
    const statusInputRef = useRef();

    function handleSubmittedData(event) {
        event.preventDefault()

        const newTodoTitle = titleInputRef.current.value;
        const newTodoDescription = descriptionInputRef.current.value;
        const newTodoStatus = statusInputRef.current.value;

        const todosData = localStorage.getItem("todosData");
        
        if (todosData === null) {
            const newTodo = {
                id: 1,
                title: newTodoTitle,
                description: newTodoDescription,
                status: newTodoStatus,
            }
            const todosData = []
            todosData.push(newTodo)
            localStorage.setItem('todosData', JSON.stringify(todosData));
        } else {
            const todosDataArray = JSON.parse(todosData)
            const newTodo = {
                id: todosDataArray.length + 1,
                title: newTodoTitle,
                description: newTodoDescription,
                status: newTodoStatus,
            }
            todosDataArray.push(newTodo);
            localStorage.setItem('todosData', JSON.stringify(todosDataArray))
        }

    }
    return (
    <div>
        <Head>
            <title>Add Todo Here...</title>
            <meta name="description" content="add a todo, description and status here..." />
        </Head>
        <h1>Add A Todo Item</h1>
        <form onSubmit={handleSubmittedData}>
            <label htmlFor='todoTitle'>Todo Title</label>
            <input type="text" id="todoTitle" ref={titleInputRef}/>
            <label htmlFor='todoDescription'>Todo Description</label>
            <input type="text" id="todoDescription" ref={descriptionInputRef}/>
            <label htmlFor='todoStatus'>Todo Status</label>
            <select id="todoStatus" ref={statusInputRef}>
                <option>completed</option>
                <option>yet to be completed</option>
            </select>
            <button>Add Todo Item</button>
        </form>
    </div>)
}

export default AddTodo