import {useRef} from 'react';
import Head from 'next/head';

import classes from './index.module.css';

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
            
            if (newTodo.title.length === 0) {
                alert('please enter a valid title');
            } else if (newTodo.description.length === 0) {
                alert('please add a valid description')
            } else {
                const todosData = []
                todosData.push(newTodo)
                localStorage.setItem('todosData', JSON.stringify(todosData));
            }
        } else {
            const todosDataArray = JSON.parse(todosData)
            const newTodo = {
                id: todosDataArray.length + 1,
                title: newTodoTitle,
                description: newTodoDescription,
                status: newTodoStatus,
            }
            if (newTodo.title.length === 0) {
                alert('please enter a valid title');
            } else if (newTodo.description.length === 0) {
                alert('please add a valid description')
            } else {
                todosDataArray.push(newTodo);
                localStorage.setItem('todosData', JSON.stringify(todosDataArray))
            }
        }

    }
    return (
    <div className={classes.container}>
        <Head>
            <title>Add Todo Here...</title>
            <meta name="description" content="add a todo, description and status here..." />
        </Head>
        <h1 className={classes.heading}>Add A Todo</h1>
        <form id="addTodoForm" className={classes.form} onSubmit={handleSubmittedData}>
            <label className={classes.label} htmlFor='todoTitle'>Title</label>
            <input className={classes.input} type="text" id="todoTitle" ref={titleInputRef}/>
            <label className={classes.label} htmlFor='todoDescription'>Description</label>
            <input className={classes.input} type="text" id="todoDescription" ref={descriptionInputRef}/>
            <label className={classes.label} htmlFor='todoStatus'>Status</label>
            <select className={classes.input}  id="todoStatus" ref={statusInputRef}>
                <option>completed</option>
                <option>yet to be completed</option>
            </select>
            <button className={classes.button}>Add Todo</button>
        </form>
    </div>)
}

export default AddTodo