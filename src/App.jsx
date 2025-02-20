import { createContext, useState } from "react";
import "./App.css";
import MainSection from "./components/MainSection.jsx";
import UseContext from "./components/UseContext";
export const AppContext = createContext();

function App() {

  const name = "Hector";
  const age =41;

  return (
    <>
      <AppContext.Provider value={[name, age]}>
        <UseContext />
        <MainSection />
      </AppContext.Provider>
    </>
  );
}

export default App;
