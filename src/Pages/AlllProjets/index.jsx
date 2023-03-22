import { useParams } from "react-router"
import { infoProjet } from "../../components/bd_json"
import SideBar from "../../components/Sidebar"
import './Styles/desktop.scss'
import './Styles/mobile.scss'

export default function AllProjets() {
    let {idProjet} = useParams()
    // let isProjet = infoProjet.find((idProjet) => idProjet.id === idProjet);

    return(
        <main id="all-projets-container">
        <SideBar/>
            <section className="allprojets-container">
                <section className="header-projets">
                    {infoProjet.map((element) => (
                        element.id === idProjet ?  (
                            <div key={element.id}>
                                <h2>Projet <span>{element.nom}</span></h2>
                            </div>
                        ): null
                    ))}
                </section>

                <section className="container-info-projets">
                    <div className="bloco-one">
                         <h2>DERIVADO 1</h2>
                    </div>
                    <div className="bloco-two">
                        <h2>DERIVADO 2</h2>
                        </div>
                </section>
            </section>
           
            
        </main>
    )
}