import { useState, useEffect, createContext , useContext} from "react"
import { AppContext } from "../App"
export default function UseContext () {

    const name = useContext(AppContext)
    return (
        <>

        
        <h2>Velkommen { name }</h2>
        </>
    )
}