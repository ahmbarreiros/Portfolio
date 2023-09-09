import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./Header";
import About from "./About";

function App() {
    return (
        <>
            <Header />
            <main>
                <About />
            </main>
        </>
    );
}

export default App;
