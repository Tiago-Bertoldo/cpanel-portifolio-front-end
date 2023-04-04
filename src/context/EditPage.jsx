import { createContext, useState } from "react";


export const EditPage = createContext();


export const EditPageValid = ({children}) => {
    const [isEditPage, setEditPage] = useState(false);
    return (
        <EditPage.Provider value={{ isEditPage , setEditPage }}>
            {children}
        </EditPage.Provider>
    )
}




export default EditPageValid