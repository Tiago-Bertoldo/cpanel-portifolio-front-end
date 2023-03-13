import SideBar from "../../components/Sidebar"
import './Style/desktop.scss'
import './Style/responsive.scss'
import { useContext } from "react"
import {AuthLogin} from '../../context/AuthLogin'
import LoginHomePage from "../../components/Logins"
import { infoProjet } from "../../components/bd_json"
import { Link } from "react-router-dom"


export default function Dashboard () {
    const {useStore} = useContext(AuthLogin)

    return useStore ? (
        <section className="dashboard-display">
                <SideBar/>
               <main className="dashboard-display-container">
                        <h2>Projets</h2>
                <div className="container-projets">
                    {infoProjet.map((dateProjets , index) => (
                        <Link className="btn-all-projets" to={`/allprojets/${dateProjets.id}`} key={index}>
                            <div className="btn-all-projets__buttom">
                                <span>PJ-</span> {dateProjets.nom}
                            </div>
                        </Link>

                    ))}
                </div>
               </main>
           </section>
    ) : (
        <LoginHomePage/>
    )

}