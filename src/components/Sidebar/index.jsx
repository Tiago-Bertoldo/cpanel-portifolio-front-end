import './Style/responsive.scss'
import './Style/desktop.scss'
import { Link } from 'react-router-dom'
import {AiFillHome , AiFillPlusCircle , AiOutlineLogin} from 'react-icons/ai'
import Welcome from "../../components/Welcome";
import { AuthLogin } from '../../context/AuthLogin';
import { useContext } from 'react';

export default function SideBar() {
    const {useActive } = useContext(AuthLogin)

    const handleLogoff = () => {
        localStorage.clear('login')
    }
    return (
        <section className="container-sidebar">
            <Welcome login = {useActive}/>
            <nav className="container-sidebar__nav">
                <Link className='link-btn' to='/dashboard'><AiFillHome/></Link>
                <Link className='link-btn' to='/projet'><AiFillPlusCircle/></Link>
                <a onClick={() => handleLogoff()} className='link-btn' href="/"><AiOutlineLogin/></a>
            </nav>
            <div className="section-btn-responsive">
                
            </div>
        </section>
    )
}