import { createContext, useState } from "react";
import "./App.css";
import MainSection from "./components/MainSection.jsx";
import UseContext from "./components/UseContext";
export const AppContext = createContext();

function App() {

  return (
    <>
      <AppContext.Provider>
        <UseContext />
        <MainSection />
      </AppContext.Provider>
    </>
  );
}

export default App;
