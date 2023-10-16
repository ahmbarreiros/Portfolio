import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./HeaderPtBr";
import About from "./AboutPtBr";
import Projects from "./ProjectsPtBr";

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
