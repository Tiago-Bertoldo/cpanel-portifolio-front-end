import SideBar from "../../components/Sidebar"
import './Style/desktop.scss'
import './Style/responsive.scss'
export default function Dashboard () {
    return (
        <section className="dashboard-display">
                <SideBar/>
               <container className="dashboard-display-container">
                        <h2>PROJETS</h2>
               </container>
           </section>
    )
}