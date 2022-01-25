import TodoListItem from "../TodoListItem"

import classes from './index.module.css'

function HomePageContent(props) {
    const {isTodoListEmpty, todosDisplayData, deleteTodo} = props
    function renderEmptyTodosPage() {
        return (
            <div>
                <h1 className={classes.empty}>You have nothing todo, add something todo...</h1>
            </div>
        )
    }
    function renderTodosList() {
        return (
            <ul className={classes.list}>
                {todosDisplayData.map(eachItem => {
                return <TodoListItem key={eachItem.id} eachItem={eachItem} deleteTodo={deleteTodo}/>
                })}
            </ul>
        )
    }
    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>Todos...</h1>
            <div className={classes.todos}>{isTodoListEmpty ? renderEmptyTodosPage() : renderTodosList()}
            </div>
        </div>
    )
}

export default HomePageContent