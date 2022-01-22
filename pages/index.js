// our-domamain.com/
import Head from 'next/head'
import { useEffect, useState } from 'react/cjs/react.development';
import TodoListItem from '../components/TodoListItem'

function TodosListHomePage(props) {
    const [todosDisplayData, setTodosDisplayData] = useState([]);
    const [isTodoListEmpty, setIsTodoEmpty] = useState(false);
    useEffect(() => {
        const todosData = localStorage.getItem("todosData");
        if (todosData !== null) {
            const todosParsedData = JSON.parse(todosData)
            setTodosDisplayData([...todosParsedData])
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
     <h1>Welcome To Todos List Home Page...!</h1>
     {isTodoListEmpty ? <h1>todos list is empty</h1> : <ul>
     {todosDisplayData.map(eachItem => {
         return <TodoListItem key={eachItem.id} eachItem={eachItem} />
     })}
     </ul>}
 </div>)
}

export default TodosListHomePage