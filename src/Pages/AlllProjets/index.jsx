import { useParams } from "react-router"
import { infoProjet } from "../../components/bd_json"


export default function AllProjets() {
    let {idProjet} = useParams()
    // let isProjet = infoProjet.find((idProjet) => idProjet.id === idProjet);
    

    return(
        <>
           {infoProjet.map((element) => (
               element.id === idProjet ?  (
                <div key={element.id}>
                    {element.nom}
                </div>
               ): null
           ))}
        </>
    )
}