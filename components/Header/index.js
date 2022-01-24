import Link from "next/link"
import classes from "./index.module.css"

function Header() {
    return (
        <nav className={classes.header}>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <Link href="/">Home</Link>
                </li>
                <li className={classes.item}><Link href="/add_todo">Add Todo</Link></li>
            </ul>
        </nav>
    )
}

export default Header