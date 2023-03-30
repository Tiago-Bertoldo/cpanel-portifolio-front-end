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
  //VALIDATION THE USER
  useEffect(() => {
    if (!useStore) {
      navigate("/");
    }
  }, [useStore, navigate]);



  useEffect(()=> { 
  },[formValues])

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
    let getMsgErrorTechonologie = document.querySelector('.alert-input-null')
    let refresInputs = document.querySelectorAll('.refres-submit')
    if(tagsCreated.length !== 0) {
      getMsgErrorTechonologie.innerHTML = ''
      setFormValues((prev) => ({
        ...prev , technologies : tagsCreated
      }))
      refresInputs.forEach((element) => {
        element.value = ''
      })
      setTagsCreated([])
      setApiDate();
      return;
      
    }
    return handleTagsUndefined(getMsgErrorTechonologie)

  };

  const setApiDate = () => {
    console.log('Valor Enviado para API : ' ,  formValues)
  }


  const handleTagsUndefined = (getMsgErrorTechonologie) => {
    getMsgErrorTechonologie.innerHTML = 'Insert de values for Technologies *'
  }

  const handleAddrTags = (event , getInputTags , getMsgErrorTechonologie) => {
    if (tagsCreated.length <= ARRAY_VALUE_MAX_TAGS) {
      setTagsCreated([...tagsCreated, event.target.value]);
      getMsgErrorTechonologie.innerHTML = ''
      getInputTags.value = "";
      return;
    }
  }

  const handleTagsAddr = (event) => {
    let getInputTags = document.querySelector(".input-text");
    let getMsgErrorTechonologie = document.querySelector('.alert-input-null')
    if (event.key === "Enter") {
      if(getInputTags.value === '') {
        return handleTagsUndefined(getMsgErrorTechonologie)
      }
      return handleAddrTags(event , getInputTags , getMsgErrorTechonologie);
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
                    className="refres-submit"
                    {...register("nom", {
                      required: "true",
                      maxLength: 20,
                    })}
                    onChange={(e) =>
                      setFormValues((prevState) => ({
                        ...prevState,
                        nom: e.target.value,
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
                    className="refres-submit"
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
                    id="technologies"
                    placeholder="Insert the tags for Technologies"
                    onKeyUp={(e) => handleTagsAddr(e)}
                  />
                  <p className="alert-input-null"></p>
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
                    className="refres-submit"
                    {...register("urlimg", {
                      required: "true",
                      maxLength: 20,
                    })}
                    onChange={(e) =>
                      setFormValues((prevState) => ({
                        ...prevState,
                        urlimg: e.target.value,
                      }))
                    }
                  />
                  {errors.urlimg?.type === "required" && (
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
                    className="refres-submit"
                    {...register("altimg", {
                      required: "true",
                      maxLength: 20,
                    })}
                    onChange={(e) =>
                      setFormValues((prevState) => ({
                        ...prevState,
                        altimg: e.target.value,
                      }))
                    }
                  />
                  {errors.altimg?.type === "required" && (
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
