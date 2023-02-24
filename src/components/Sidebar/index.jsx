import './Style/responsive.scss'
import './Style/desktop.scss'
import { Link } from 'react-router-dom'
export default function SideBar() {
    return (
        <section className="container-sidebar">
            <nav className="container-sidebar__nav">
                <Link to='/dashboard'>Home</Link>
                <Link to='/projet'>Projet</Link>
            </nav>
        </section>
    )
}