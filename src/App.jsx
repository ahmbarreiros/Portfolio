import { useState } from "react";
// import "./App.css";
import AppEng from "./AppEng";
import AppPtBr from "./AppPtBr";

function App() {
    const [language, setLanguage] = useState("PtBr");

    const toggleLanguage = (language) => {
        setLanguage(language);
    };

    const toggleActive = (event) => {
        const button = event.target;
        console.log(button);
        const buttons = document.querySelectorAll(".language");

        buttons.forEach((btn) => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    };

    return (
        <>
            <div className="languages">
                <button
                    className="language ptbr active"
                    onClick={(event) => {
                        toggleLanguage("PtBr");
                        toggleActive(event);
                    }}
                >
                    Português - Brasil
                </button>
                <button
                    className="language eng"
                    onClick={(event) => {
                        toggleLanguage("Eng");
                        toggleActive(event);
                    }}
                >
                    English
                </button>
            </div>

            {language == "Eng" ? <AppEng /> : null}
            {language == "PtBr" ? <AppPtBr /> : null}
        </>
    );
}

export default App;
