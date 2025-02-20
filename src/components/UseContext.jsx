import { useState, useEffect, createContext , useContext} from "react"
import { AppContext } from "../App"
export default function UseContext () {

    const [name, age] = useContext(AppContext)
    return (
        <>

        
        <h2>Velkommen { name } du er { age } gammel</h2>
        </>
    )
}