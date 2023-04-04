import SideBar from "../../components/Sidebar";
import "./Style/desktop.scss";
import "./Style/responsive.scss";
import { useContext } from "react";
import { AuthLogin } from "../../context/AuthLogin";
import LoginHomePage from "../../components/Logins";
import Finish from "../../components/Forms";

export default function Projet() {
  const { useStore } = useContext(AuthLogin);
  return useStore? (
    <section className="dashboard-display">
      <SideBar />
      <Finish titleEdit={'Ajouter un projet'} 
      valueButton = {'Ajouter'} 
      singEdit = {true} />
    </section>
  ) : (
    <LoginHomePage />
  );
}
