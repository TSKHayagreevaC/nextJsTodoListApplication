// our-domamain.com/
import Head from 'next/head'
import { useEffect, useState } from 'react';
import HomePageContent from '../components/HomePageContent';

function TodosListHomePage(props) {
    const [todosDisplayData, setTodosDisplayData] = useState([]);
    const [isTodoListEmpty, setIsTodoEmpty] = useState(false);
    
    function getTodosData() {
        const todosData = localStorage.getItem("todosData");
        const todosParsedData = JSON.parse(todosData)
        if ((todosParsedData === null) || (todosParsedData.length === 0)) {
            setIsTodoEmpty(true)
        } else {
            setTodosDisplayData(todosParsedData)
        }
    }

    useEffect(() => {
        getTodosData();
    }, []);

    function deleteTodo(id) {
        const currentTodosData = localStorage.getItem('todosData')
        const currentParsedData = JSON.parse(currentTodosData)
        const leftTodosData = currentParsedData.filter(eachItem => eachItem.id !== id)
        localStorage.setItem('todosData', JSON.stringify(leftTodosData))
        getTodosData()
    }
    return (
    <div>
        <Head>
            <title>NextJs Todos List</title>
            <meta name='description' content="Add a todo, mark as completed and keep a track of all the todos..."/>
        </Head>
        <HomePageContent isTodoListEmpty={isTodoListEmpty} todosDisplayData={todosDisplayData} deleteTodo={deleteTodo}/>
    </div>)
}

export default TodosListHomePage