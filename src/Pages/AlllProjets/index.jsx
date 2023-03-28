import { useParams } from "react-router"
import { infoProjet } from "../../components/bd_json"
import {useState ,useEffect } from "react"
import { useNavigate } from "react-router"
import SideBar from "../../components/Sidebar"
import { useForm } from "react-hook-form";
import './Styles/desktop.scss'
import './Styles/mobile.scss'
import {AiOutlinePlus , AiOutlineMinus} from 'react-icons/ai' 


export default function AllProjets() {
    let {idProjet} = useParams()
    const navigate = useNavigate();
    const [isEdit , setIsEdit] = useState(false)
    const [formValues , setFormValues] = useState([])
    const [dates , setDates] = useState(infoProjet)
    const { register, handleSubmit, formState: { errors } } = useForm();

    let valuesTech = []
    useEffect(()=>{},[formValues])

    const handleDeleteProjet = (element) => {
        const old_values = dates.findIndex(index => index.id === idProjet)
        dates.splice(old_values, 1)
        setDates(dates)
        navigate('/dashboard')
    }

    const handleDesactiveEdit = () => {
        isEdit ? setIsEdit(false) : setIsEdit(true)
        return;
    }
    const handleTecnologie = () => {
        let getTechonologies = document.querySelectorAll('.techonologies')
        getTechonologies.forEach(element => {
            console.log(element)
        });
        
    }

    const handleRemoveInput = (e) => {
        e.preventDefault()
        let lenghtTechonologies = document.querySelectorAll('.techonologies')
        let btnInputMoins= document.querySelector('.btn-effect-moins')
        if(lenghtTechonologies.length >= 1) {
            let moreInput = document.querySelector('.btn-more-input')
            moreInput.removeChild(moreInput.lastChild)
        }
        if(lenghtTechonologies.length === 2 ) {
            btnInputMoins.classList.remove('active-effect-moins')
        }
        
    }

    const handleAddInput = (e) => {
        e.preventDefault()
        let moreInput = document.querySelector('.btn-more-input')
        let lenghtTechonologie = document.querySelectorAll('.techonologie')
        let lenghtTechonologies = document.querySelectorAll('.techonologies')
        let btnInputMoins = document.querySelector('.btn-effect-moins')
        let inputElement = document.createElement('input')
        if(lenghtTechonologie.length >= 1) {
            if(lenghtTechonologies.length !== 7){
                btnInputMoins.classList.add('active-effect-moins')
                inputElement.setAttribute('class' , 'techonologies')
                moreInput.appendChild(inputElement)
            }
        }
    }
    
    const handleDateValidArray = (datesArray) => {
        let getMsgError = document.querySelector('.msg-error')
        if(datesArray === '') {
                getMsgError.innerHTML = 'Error date'
        }else {
                getMsgError.innerHTML = ''
                handleInjectValues(datesArray)
        }
       
    }



        const handleInjectValues = (lenghtTechonologie) =>{
        valuesTech.push(lenghtTechonologie)
            setFormValues((prevState) =>({
                ...prevState , valuesTech
                
            }))
      
 }


    return(
        <main id="all-projets-container">
        <SideBar/>
            <section className="allprojets-container">
                <section className="header-projets">
                    {dates.map((element) => (
                        element.id === idProjet ?  (
                            <div key={element.id}>
                                <h2>Projet <span>{element.nom}</span></h2>
                            </div>
                        ): null
                    ))}
                </section>

                {dates.map((element => (
                    element.id === idProjet &&(
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
                                        {element.tecnologie.map((element , index) => (
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
                            <button onClick={() => handleDesactiveEdit(true)}>EDIT</button>
                            <button onClick={() => handleDeleteProjet(element)}>DELETE</button>
                        </nav>
                    </div>
                    <div className={isEdit ? 'form-edit-dates' : 'desactive-form'}>
                            <form action="" onSubmit={handleSubmit(handleTecnologie)}>
                             <aside className="container-form__left">
                             <label htmlFor="nom">Nom : </label>
                             <input type="text" name="nom" id="nom" placeholder="Dashboard..."
                                {...register("nom", {
                                    required: "true", maxLength:20
                                })}
                                onChange={(e) => setFormValues((prevState) => ({
                                    ...prevState , nom : e.target.value
                                }))}
                             /> 
                             {errors.nom?.type === 'required' && <p role="alert">Name is required</p>}


                             <label htmlFor="url">Url : </label>
                             <input type="text" name="url" id="url" placeholder="https://www.thbertoldo.com/projet"
                            {...register("url", {
                                required: "true", maxLength:20
                            })}
                            onChange={(e) => setFormValues((prevState) => ({
                                ...prevState , url : e.target.value
                            }))}
                            />
                            {errors.url?.type === 'required' && <p role="alert">Url is required</p>}
                             <label htmlFor="nom">Techonologies : </label>
                                <div className="input-tech">
                                <input type="text" name="techonologie" id="techonologie"  className="techonologie" placeholder="Javascript et React..."
                                {...register("techonologie", {
                                    required: "true", maxLength:16
                                })}
                                />
                                <button className = 'btn-effect-more' onClick={(e) => handleAddInput(e)}><AiOutlinePlus/></button>
                                <button className = 'btn-effect-moins' onClick={(e) => handleRemoveInput(e)}><AiOutlineMinus/></button>
                                {errors.techonologie?.type === 'required' && <p role="alert">Techonologie is required</p>}
                                </div>

                                <span className="btn-more-input"></span>
                                <span className="msg-error"></span>
                        </aside>
                        {/* aside left */}
                        <aside className="container-form__right">
                             <label htmlFor="nom">Url img : </label>
                             <input type="text" name="urlimg" id="urlimg" 
                                 {...register("urlimg", {
                                    required: "true", maxLength:16
                                })}
                             onChange={(e) => setFormValues((prevState) => ({
                                ...prevState , urlImg : e.target.value
                            }))}
                            />
                            {errors.urlimg?.type === 'required' && <p role="alert">Techonologie is required</p>}
                             <label htmlFor="altimg">Alt img : </label>
                             <input type="text" name="altimg" id="altimg" 
                              {...register("altimg", {
                                required: "true", maxLength:16
                            })}
                             onChange={(e) => setFormValues((prevState) => ({
                                ...prevState , altImg : e.target.value
                            }))}
                            /> 
                            {errors.urlimg?.type === 'required' && <p role="alert">Techonologie is required</p>}
                             <label htmlFor="github">GitHub : </label>
                             <input type="text" name="github" id="github" placeholder="https://github.com..."
                              {...register("github", {
                                required: "true", maxLength:16
                            })}
                             onChange={(e) => setFormValues((prevState) => ({
                                ...prevState , gitHub : e.target.value
                            }))}
                             />      
                             {errors.github && <span>GitHub is required</span>}
                            <button className="btn-submit-projet" >Salve</button>
                        </aside>
                    </form>
                </div>
                </section>
                    )
                    
                )))}
                
                
            </section>
            
           
            
        </main>
    )
}