import './Style/responsive.scss'
import './Style/desktop.scss'
import { Link } from 'react-router-dom'
export default function SideBar() {
    return (
        <section className="container-sidebar">
            <nav className="container-sidebar__nav">
                <Link className='link-btn ' to='/dashboard'>Home</Link>
                <Link to='/projet'>Projet</Link>
            </nav>
            <div className="section-btn-responsive">
                
            </div>
        </section>
    )
}