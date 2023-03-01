import SideBar from "../../components/Sidebar"
import './Style/desktop.scss';
import './Style/responsive.scss';
import {AiOutlinePlus , AiOutlineMinus} from 'react-icons/ai' 
import { useEffect, useState } from "react";


export default function Projet () {
    const [formValues , setFormValues] = useState([])
    const [isValid , setIsvalid] = useState(false);

    useEffect(()=> {
       
    },[setFormValues])

    const handleAddInput = (e) => {
        e.preventDefault()
        let moreInput = document.querySelector('.btn-more-input')
        let lenghtTechonologie = document.querySelectorAll('.techonologie')
        let btnInputMoins= document.querySelector('.btn-effect-moins')
        let inputElement = document.createElement('input')
        if(lenghtTechonologie.length >= 1) {
            if(lenghtTechonologie.length !== 7){
                btnInputMoins.classList.add('active-effect-moins')
                inputElement.setAttribute('class' , 'techonologie')
                moreInput.appendChild(inputElement)
            }
        
        }
    }



    const handleTecnologie = (e) => {
        e.preventDefault()
    let lenghtTechonologie = document.querySelectorAll('.techonologie')
    let valuesTech = []

    lenghtTechonologie.forEach(element => {
       valuesTech.push(element.value)
    });

    setFormValues((prevState) =>({
        ...prevState , valuesTech
    }))
    
    console.log(formValues)
}

    const testando = (valuesTech)=> {
       
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


    // techonlogie.map((element,index) => {
    //     console.log(element.nom)
    // })
    


  


    return (
        <section className="dashboard-display">
                <SideBar/>
               <section className="dashboard-display-container">
                <section className="container-form">
                        <h2>Ajouter un Projet</h2>
                    <form onSubmit={(e) => handleTecnologie(e)} >
                        <aside className="container-form__left">
                             <label htmlFor="nom">Nom : </label>
                             <input type="text" name="nom" id="nom" placeholder="Dashboard..." 
                                onChange={(e) => setFormValues((prevState) => ({
                                    ...prevState , nom : e.target.value
                                }))}
                             /> 
                             <label htmlFor="url">Url : </label>
                             <input type="text" name="url" id="url" placeholder="https://www.thbertoldo.com/projet"
                             onChange={(e) => setFormValues((prevState) => ({
                                ...prevState , url : e.target.value
                            }))}
                            />
                             <label htmlFor="nom">Techonologies : </label>
                                <div className="input-tech">
                                <input type="text" name="techonologie" id="techonologie"  className="techonologie" placeholder="Javascript et React..."/>
                                <button className = 'btn-effect-more' onClick={(e) => handleAddInput(e)}><AiOutlinePlus/></button>
                                <button className = 'btn-effect-moins' onClick={(e) => handleRemoveInput(e)}><AiOutlineMinus/></button>
                                </div>
                                <span className="btn-more-input"></span>
                        </aside>
                        {/* aside left */}
                        <aside className="container-form__right">
                             <label htmlFor="nom">Url img : </label>
                             <input type="text" name="urlimg" id="urlimg" 
                             onChange={(e) => setFormValues((prevState) => ({
                                ...prevState , urlImg : e.target.value
                            }))}
                            />
                             <label htmlFor="altimg">Alt img : </label>
                             <input type="text" name="altimg" id="altimg" 
                             onChange={(e) => setFormValues((prevState) => ({
                                ...prevState , altImg : e.target.value
                            }))}
                            /> 
                             <label htmlFor="github">GitHub : </label>
                             <input type="text" name="github" id="github" placeholder="https://github.com..."
                             onChange={(e) => setFormValues((prevState) => ({
                                ...prevState , gitHub : e.target.value
                            }))}
                             />      
                            <button className="btn-submit-projet" >Ajouter</button>
                        </aside>
                        
                    </form>
                </section>
               </section>
        </section>
    )
}