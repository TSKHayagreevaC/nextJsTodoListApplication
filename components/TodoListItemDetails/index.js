import classes from './index.module.css';

function TodoListItemDetails(props) {
    const eachItemDetails = props
    const {id, title, description} = eachItemDetails.eachTodo
    return (
        <div className={classes.details}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default TodoListItemDetails;