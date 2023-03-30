import { useParams } from "react-router";
import { infoProjet } from "../../components/bd_json";
import { useState } from "react";
import { useNavigate } from "react-router";
import SideBar from "../../components/Sidebar";
import "./Styles/desktop.scss";
import "./Styles/mobile.scss";
export default function AllProjets() {
  let { idProjet } = useParams();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [dates, setDates] = useState(infoProjet);


  const handleDeleteProjet = (element) => {
    const old_values = dates.findIndex((index) => index.id === idProjet);
    dates.splice(old_values, 1);
    setDates(dates);
    navigate("/dashboard");
  };

  const handleDesactiveEdit = () => {
    isEdit ? setIsEdit(false) : setIsEdit(true);
    return;
  };


  return (
    <main id="all-projets-container">
      <SideBar />
      <section className="allprojets-container">
        <section className="header-projets">
          {dates.map((element) =>
            element.id === idProjet ? (
              <div key={element.id}>
                <h2>
                  Projet <span>{element.nom}</span>
                </h2>
              </div>
            ) : null
          )}
        </section>

        {dates.map(
          (element) =>
            element.id === idProjet && (
              <section className="container-info-projets" key={element.id}>
                <div className="bloco-one">
                  <article>
                    <div className="bloco-one-left">
                      <ul>
                        <li>
                          <label htmlFor="Nom">Nom :</label>
                          <p>{element.nom}</p>
                        </li>
                        <li>
                          <label htmlFor="Nom">Technologie :</label>
                          {element.tecnologie.map((element, index) => (
                            <p key={index}>{element}</p>
                          ))}
                        </li>
                      </ul>
                    </div>
                    <div className="bloco-one-right">
                      <ul>
                        <li>
                          <label htmlFor="url">Url Img :</label>
                          <p>{element.urlImg}</p>
                        </li>
                        <li>
                          <label htmlFor="github">Github :</label>
                          <p>{element.github}</p>
                        </li>
                        <li>
                          <label htmlFor="url">Url :</label>
                          <p>{element.url}</p>
                        </li>
                        <li>
                          <label htmlFor="alt img">Alt img :</label>
                          <p>{element.altImg}</p>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
                <div className="bloco-two">
                  <nav>
                    <button onClick={() => handleDesactiveEdit(true)}>
                      EDIT
                    </button>
                    <button onClick={() => handleDeleteProjet(element)}>
                      DELETE
                    </button>
                  </nav>
                </div>
                <div className={isEdit ? "form-edit-dates" : "desactive-form"}>
                 
                </div>
              </section>
            )
        )}
      </section>
    </main>
  );
}
