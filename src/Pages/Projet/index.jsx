import SideBar from "../../components/Sidebar"
import './Style/desktop.scss';
import './Style/responsive.scss';
import { AiFillCloseCircle } from 'react-icons/ai'
import { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthLogin } from '../../context/AuthLogin'
import LoginHomePage from "../../components/Logins";


export default function Projet() {
    const ARRAY_VALUE_MAX_TAGS = 6;
    const [formValues, setFormValues] = useState([])
    const { useStore } = useContext(AuthLogin)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [tagsCreated, setTagsCreated] = useState([])
    let isValidMsg = true;

    useEffect(() => { }, [formValues])
    useEffect(() => { }, [useStore])
    useEffect(() => {
        if (isValidMsg) {
            let getClassMsgError = document.querySelector('.error-tags-msg')
            let getInputTags = document.querySelector('.input-text')
            if (tagsCreated.length > ARRAY_VALUE_MAX_TAGS) {
                getClassMsgError.innerHTML = 'Maximum 7 tags for technologie *'
                getInputTags.classList.add('error-tags-full')
            } else {
                getClassMsgError.innerHTML = ''
                getInputTags.classList.remove('error-tags-full')
            }
        }
    }, [tagsCreated, isValidMsg])


    const handleTecnologie = (e) => {
        e.preventDefault();
    }



    const handleTagsAddr = (event) => {
        let getInputTags = document.querySelector('.input-text')
        if (event.key === 'Enter') {
            if (tagsCreated.length <= ARRAY_VALUE_MAX_TAGS) {
                setTagsCreated([...tagsCreated, event.target.value])
                getInputTags.value = ''
                return
            }
        }

    }

    const handleDeleteTags = (event) => {
        const getIndexDelete = tagsCreated.findIndex(index => index === event)
        tagsCreated.splice(getIndexDelete, 1);
        setTagsCreated([...tagsCreated])
    }


    return useStore ? (
        <section className="dashboard-display">
            <SideBar />

            <section className="dashboard-display-container">
                <section className="container-form">
                    <h2>Ajouter un Projet</h2>
                    <form action="" onSubmit={e => handleSubmit(handleTecnologie(e))}>
                        <aside className="container-form__left">
                            <label htmlFor="nom">Nom : </label>
                            <input type="text" name="nom" id="nom" placeholder="Dashboard..."
                                {...register("nom", {
                                    required: "true", maxLength: 20
                                })}
                                onChange={(e) => setFormValues((prevState) => ({
                                    ...prevState, nom: e.target.value
                                }))}
                            />
                            {errors.nom?.type === 'required' && <p role="alert">Name is required</p>}


                            <label htmlFor="url">Url : </label>
                            <input type="text" name="url" id="url" placeholder="https://www.thbertoldo.com/projet"
                                {...register("url", {
                                    required: "true", maxLength: 20
                                })}
                                onChange={(e) => setFormValues((prevState) => ({
                                    ...prevState, url: e.target.value
                                }))}
                            />
                            {errors.url?.type === 'required' && <p role="alert">Url is required</p>}
                            <label htmlFor="nom">Techonologies : </label>
                            <input type="text" className="input-text" name="value" onKeyUp={(e) => handleTagsAddr(e)} />
                            <div className="input-tech">
                                <div className="boxer-tags">
                                    {tagsCreated.map((element, index) => (
                                        <span className="tags-btn" key={index}>
                                            {element}
                                            <span onClick={() => handleDeleteTags(element)}><AiFillCloseCircle /></span>
                                        </span>
                                    ))}
                                </div>
                                <span className="error-tags-msg"></span>
                            </div>
                        </aside>
                        {/* aside left */}
                        <aside className="container-form__right">
                            <label htmlFor="nom">Url img : </label>
                            <input type="text" name="urlimg" id="urlimg"
                                {...register("urlimg", {
                                    required: "true", maxLength: 16
                                })}
                                onChange={(e) => setFormValues((prevState) => ({
                                    ...prevState, urlImg: e.target.value
                                }))}
                            />
                            {errors.urlimg?.type === 'required' && <p role="alert">Techonologie is required</p>}
                            <label htmlFor="altimg">Alt img : </label>
                            <input type="text" name="altimg" id="altimg"
                                {...register("altimg", {
                                    required: "true", maxLength: 16
                                })}
                                onChange={(e) => setFormValues((prevState) => ({
                                    ...prevState, altImg: e.target.value
                                }))}
                            />
                            {errors.urlimg?.type === 'required' && <p role="alert">Techonologie is required</p>}
                            <label htmlFor="github">GitHub : </label>
                            <input type="text" name="github" id="github" placeholder="https://github.com..."
                                {...register("github", {
                                    required: "true", maxLength: 16
                                })}
                                onChange={(e) => setFormValues((prevState) => ({
                                    ...prevState, gitHub: e.target.value
                                }))}
                            />
                            {errors.github && <span>GitHub is required</span>}
                            <button className="btn-submit-projet" >Ajouter</button>
                        </aside>

                    </form>
                </section>
            </section>
        </section>
    ) : (<LoginHomePage />)
}