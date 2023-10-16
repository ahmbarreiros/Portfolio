import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./HeaderEng";
import About from "./AboutEng";
import Projects from "./ProjectsEng";

const AppEng = () => {
    return (
        <>
            <Header />
            <main>
                <About />
                <Projects />
            </main>
        </>
    );
};
export default AppEng;
