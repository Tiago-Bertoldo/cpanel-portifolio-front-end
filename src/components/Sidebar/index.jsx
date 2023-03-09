import './Style/responsive.scss'
import './Style/desktop.scss'
import { Link } from 'react-router-dom'
import {AiFillHome , AiFillPlusCircle , AiOutlineLogin} from 'react-icons/ai'
import {loginUser} from '../../fetchAPI'
import Welcome from "../../components/Welcome";
export default function SideBar() {
    return (
        <section className="container-sidebar">
            <Welcome username = {loginUser.login}/>
            <nav className="container-sidebar__nav">
                <Link className='link-btn' to='/dashboard'><AiFillHome/></Link>
                <Link className='link-btn' to='/projet'><AiFillPlusCircle/></Link>
                <Link className='link-btn' to='/'><AiOutlineLogin/></Link>
            </nav>
            <div className="section-btn-responsive">
                
            </div>
        </section>
    )
}