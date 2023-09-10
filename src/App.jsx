import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";

function App() {
    return (
        <>
            <Header />
            <main>
                <About />
                <Projects />
            </main>
        </>
    );
}

export default App;
