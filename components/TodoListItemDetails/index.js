import classes from './index.module.css';

function TodoListItemDetails(props) {
    const eachItemDetails = props
    const {id, title, description, status} = eachItemDetails.eachTodo
    return (
        <div className={classes.details}>
            <div className={classes.firstrow}>
                <h3 className={classes.id}>Id: <span className={classes.span}>{id}</span></h3>
                <h3 className={classes.status}>Status: <br /><span className={classes.span}>{status}</span></h3>
            </div>
            <h1 className={classes.title}>Title: <span className={classes.span}>{title}</span></h1>
            <p className={classes.description}>Description: <br /><span className={classes.span}>{description}</span></p>
        </div>
    )
}

export default TodoListItemDetails;