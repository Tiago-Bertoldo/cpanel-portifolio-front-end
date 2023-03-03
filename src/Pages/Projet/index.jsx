import SideBar from "../../components/Sidebar"
import './Style/desktop.scss';
import './Style/responsive.scss';
import {AiOutlinePlus , AiOutlineMinus} from 'react-icons/ai' 
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";



export default function Projet () {
    const [formValues , setFormValues] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm();
    let valuesTech = []
    useEffect(()=>{},[formValues])

    

    const handleAddInput = (e) => {
        e.preventDefault()
        let moreInput = document.querySelector('.btn-more-input')
        let lenghtTechonologie = document.querySelectorAll('.techonologie')
        let btnInputMoins= document.querySelector('.btn-effect-moins')
        let inputElement = document.createElement('input')
        if(lenghtTechonologie.length >= 1) {
            if(lenghtTechonologie.length !== 7){
                btnInputMoins.classList.add('active-effect-moins')
                inputElement.setAttribute('class' , 'techonologies')
                moreInput.appendChild(inputElement)
                
            }
        
        }
    }
    const handleTecnologie = () => {
    let lenghtTechonologie = document.querySelectorAll('.techonologie')
    let getTechonologies = document.querySelectorAll('.techonologies')
    let createMsg = document.createElement('p')
    createMsg.setAttribute('class' , 'existe')
    let getAll = document.querySelectorAll('.existe')
    

    if(getTechonologies.value === undefined){
        let moreInput = document.querySelector('.btn-more-input')
        createMsg.innerHTML = ' Vlaor'
        moreInput.appendChild(createMsg)
        if(getAll.length >= 1){
            moreInput.removeChild(moreInput.lastChild)
        }
        
    }else {
            handleInjectValues(lenghtTechonologie)
    }

}

    const handleInjectValues = (lenghtTechonologie) =>{
    lenghtTechonologie.forEach(element => {
        valuesTech.push(element.value)
     });
 
     setFormValues((prevState) =>({
         ...prevState , valuesTech
     }))
    
 }

    const handleRemoveInput = (e) => {
        e.preventDefault()
        let lenghtTechonologie = document.querySelectorAll('.techonologie')
        let btnInputMoins= document.querySelector('.btn-effect-moins')
        if(lenghtTechonologie.length >= 1) {
            let moreInput = document.querySelector('.btn-more-input')
            moreInput.removeChild(moreInput.lastElementChild)
        }
        if(lenghtTechonologie.length === 2 ) {
            btnInputMoins.classList.remove('active-effect-moins')
        }
        
    }



    return (
        <section className="dashboard-display">
                <SideBar/>
               <section className="dashboard-display-container">
                <section className="container-form">
                        <h2>Ajouter un Projet</h2>
                
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
                            <button className="btn-submit-projet" >Ajouter</button>
                        </aside>
                        
                    </form>
{/* 
                    <form onSubmit={(e) => handleTecnologie(e)} ></form> */}
                </section>
               </section>
        </section>
    )
}