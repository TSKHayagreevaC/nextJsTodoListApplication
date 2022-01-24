// our-domamain.com/
import Head from 'next/head'
import { useEffect, useState } from 'react';
import HomePageContent from '../components/HomePageContent';
import TodoListItem from '../components/TodoListItem'

function TodosListHomePage(props) {
    const [todosDisplayData, setTodosDisplayData] = useState([]);
    const [isTodoListEmpty, setIsTodoEmpty] = useState(false);
    useEffect(() => {
        const todosData = localStorage.getItem("todosData");
        if (todosData !== null) {
            const todosParsedData = JSON.parse(todosData)
            setTodosDisplayData(todosParsedData)
        } else {
            setIsTodoEmpty(true)
        }
    }, []);
    return (
    <div>
        <Head>
            <title>NextJs Todos List</title>
            <meta name='description' content="Add a todo, mark as completed and keep a track of all the todos..."/>
        </Head>
        <HomePageContent isTodoListEmpty={isTodoListEmpty} todosDisplayData={todosDisplayData}/>
    </div>)
}

export default TodosListHomePage