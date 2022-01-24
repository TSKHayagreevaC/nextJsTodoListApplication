import Header from "../Header"
import classes from './layout.module.css'

function Layout(props) {
    return (
        <div>
            <Header />
            <main>{props.children}</main>
        </div>
    )
}

export default Layout