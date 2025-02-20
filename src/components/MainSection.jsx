import { useContext } from "react";
import MinorSection from "../components/MinorSection";
import { AppContext } from "../App";

export default function MainSection() {

    const name = useContext(AppContext)
    return (
        <>
            <h1>Navnet er { name }</h1>
            <MinorSection/>
        </>
    );
}