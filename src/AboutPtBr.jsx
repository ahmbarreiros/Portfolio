const About = () => {
    return (
        <section className="about">
            <h1 className="about-name">
                #define <b className="about-name-macro">MEU_NOME</b>{" "}
                <span className="about-name-myName">"Antonio Barreiros"</span>;
            </h1>
            <h4 className="about-print">
                printf("%s\n", "
                <span className="about-print-message">
                    Bem vindo ao meu portfólio!
                </span>
                " );
            </h4>
            <p className="about-me">
                <span className="about-me-type">char</span>*{" "}
                <span className="about-me-variable">SobreMim</span> = "Eu sou um
                desenvolvedor, atualmente estudando Ciência da Computação na{" "}
                <a href="" alt="UERJ site">
                    Universidade do Estado do Rio de Janeiro (UERJ)
                </a>
                , Brasil.
                <br></br>Também possuo um ensino técnico em Administração pela
                CEPAMTF.
                <br></br>
                Meu conhecimento varia entre tecnologias web, banco de dados,
                análise de dados, desenvolvimento de jogos e programação de
                baixo nível. Estou sempre buscando aprender coisas novas!
                <br></br>
                Sou mais proficiente usando Python e C, porém tenho conhecimento
                em outras linguagens também!
                <br></br>
                Atualmente, procuro emprego ou estágio em vagas junior/trainee!"
            </p>
        </section>
    );
};
export default About;
