import Link from "next/link"

function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li><Link href="/add_todo">Add Todo</Link></li>
            </ul>
        </nav>
    )
}

export default Header