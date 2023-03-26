import { useState ,useEffect } from "react"
export default function  ApiDate () {
    const [date , setDate] = useState('')
    
    useEffect(() => {
        fetch('')
        .then(e => e.json())
        .then(e => setDate(e))
    }, [])
   

console.log(date)

    return (
        <>
        
        </>
    )
}