import SideBar from "../../components/Sidebar";
import "./Style/desktop.scss";
import "./Style/responsive.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthLogin } from "../../context/AuthLogin";
import LoginHomePage from "../../components/Logins";

export default function Projet() {
  const { useStore } = useContext(AuthLogin);
  const navigate = useNavigate();
  const ARRAY_VALUE_MAX_TAGS = 6;
  const [formValues, setFormValues] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [tagsCreated, setTagsCreated] = useState([]);
  let isValidMsg = true;

  useEffect(() => {}, [formValues]);

  //VALIDATION THE USER
  useEffect(() => {
    if (!useStore) {
      navigate("/");
    }
  }, [useStore, navigate]);

  //ACTIVE MSG VALUE
  useEffect(() => {
    if (isValidMsg) {
      let getClassMsgError = document.querySelector(".error-tags-msg");
      let getInputTags = document.querySelector(".input-text");
      if (tagsCreated.length > ARRAY_VALUE_MAX_TAGS) {
        getClassMsgError.innerHTML = "Maximum 7 tags for technologie *";
        getInputTags.classList.add("error-tags-full");
      } else {
        getClassMsgError.innerHTML = "";
        getInputTags.classList.remove("error-tags-full");
      }
    }
  }, [tagsCreated, isValidMsg]);

  //   //SET FORM
  const handleValidateDate = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
  };

  const handleTagsAddr = (event) => {
    let getInputTags = document.querySelector(".input-text");
    if (event.key === "Enter") {
      if (tagsCreated.length <= ARRAY_VALUE_MAX_TAGS) {
        setTagsCreated([...tagsCreated, event.target.value]);
        getInputTags.value = "";
        return;
      }
    }
  };

  const handleDeleteTags = (event) => {
    const getIndexDelete = tagsCreated.findIndex((index) => index === event);
    tagsCreated.splice(getIndexDelete, 1);
    setTagsCreated([...tagsCreated]);
  };

  //   console.log(formValues);

  return useStore ? (
    <section className="dashboard-display">
      <SideBar />
      <section className="dashboard-display-container">
        <div className="form-container-projet">
          <h1>Ajouter des projets</h1>
          <div className="form-container-projet-form">
            <div className="form-container-projet-form__left">
              <ul>
                <li>
                  <label htmlFor="projetname">Nom du projet : </label>
                  <input
                    type="text"
                    name="nom"
                    id="nom"
                    {...register("nom", {
                      required: "true",
                      maxLength: 20,
                    })}
                    onChange={(e) =>
                      setFormValues((prevState) => ({
                        ...prevState,
                        url: e.target.value,
                      }))
                    }
                  />
                  {errors.nom?.type === "required" && (
                    <p className="alert-input-null" role="alert">
                      Nom is required *
                    </p>
                  )}
                </li>
                <li>
                  <label htmlFor="urlname">Url : </label>
                  <input
                    type="text"
                    name="urlname"
                    id="urlname"
                    {...register("urlname", {
                      required: "true",
                      maxLength: 20,
                    })}
                    onChange={(e) =>
                      setFormValues((prevState) => ({
                        ...prevState,
                        url: e.target.value,
                      }))
                    }
                  />
                  {errors.nom?.type === "required" && (
                    <p className="alert-input-null" role="alert">
                      Url Name is required *
                    </p>
                  )}
                </li>
                <li>
                  <label htmlFor="technologies">Techonologies : </label>
                  <input
                    type="text"
                    className="input-text"
                    name="technologies"
                    onKeyUp={(e) => handleTagsAddr(e)}
                  />
                </li>
              </ul>
            </div>
            <div className="form-container-projet-form__right">
              <ul>
                <li>
                  <label htmlFor="urlimg">Url img : </label>
                  <input
                    type="text"
                    name="urlimg"
                    id="urlimg"
                    {...register("urlimg", {
                      required: "true",
                      maxLength: 20,
                    })}
                    onChange={(e) =>
                      setFormValues((prevState) => ({
                        ...prevState,
                        url: e.target.value,
                      }))
                    }
                  />
                  {errors.nom?.type === "required" && (
                    <p className="alert-input-null" role="alert">
                      Url img is required *
                    </p>
                  )}
                </li>
                <li>
                  <label htmlFor="projetname">Alt img : </label>
                  <input
                    type="text"
                    name="altimg"
                    id="altimg"
                    {...register("altimg", {
                      required: "true",
                      maxLength: 20,
                    })}
                    onChange={(e) =>
                      setFormValues((prevState) => ({
                        ...prevState,
                        url: e.target.value,
                      }))
                    }
                  />
                  {errors.nom?.type === "required" && (
                    <p className="alert-input-null" role="alert">
                      Alt img is required *
                    </p>
                  )}
                </li>
                <li>
                  <button onClick={handleSubmit(handleValidateDate)}>
                    Ajouter
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="container-box-techo">
            <div className="input-tech">
              <div className="boxer-tags">
                {tagsCreated.map((element, index) => (
                  <span className="tags-btn" key={index}>
                    <span>{element}</span>
                    <span
                      className="btn-delete-tags"
                      onClick={() => handleDeleteTags(element)}
                    >
                      <AiFillCloseCircle />
                    </span>
                  </span>
                ))}
              </div>
            </div>
            <span className="error-tags-msg"></span>
          </div>
        </div>
      </section>
    </section>
  ) : (
    <LoginHomePage />
  );
}
