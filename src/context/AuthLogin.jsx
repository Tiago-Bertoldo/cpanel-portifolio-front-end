import { createContext , useEffect, useState } from "react";

export const AuthLogin = createContext();

export const AuthLoginValid = ({children}) => {
    const [isValid , setIsValid] = useState(false)
    const [useActive , setUserActive] = useState(false)
    const [useStore , setUseStore] = useState(false)

    useEffect(() => {
        if(isValid) {
            localStorage.setItem('login' , JSON.stringify(true))
            localStorage.setItem('user' ,JSON.stringify(useActive) )
        }
    },[isValid])
 
    useEffect(() => {
        const getUser = JSON.parse(localStorage.getItem('login'))
        const getUserActive = JSON.parse(localStorage.getItem('user'))
        if(getUser) {
            setUseStore(getUser)
            setUserActive(getUserActive)
        }
    },[isValid])

    return(
        <AuthLogin.Provider value={{isValid , setIsValid , useActive , setUserActive , useStore}}>
            {children}
        </AuthLogin.Provider>
    )
}  

export default AuthLoginValid