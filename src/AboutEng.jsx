const About = () => {
    return (
        <section className="about">
            <h1 className="about-name">
                #define <b className="about-name-macro">MY_NAME</b>{" "}
                <span className="about-name-myName">"Antonio Barreiros"</span>;
            </h1>
            <h4 className="about-print">
                printf("%s\n", "
                <span className="about-print-message">
                    Welcome to my portfolio!
                </span>
                " );
            </h4>
            <p className="about-me">
                <span className="about-me-type">char</span>*{" "}
                <span className="about-me-variable">MyDescription</span> = "I am
                a developer, currently studying Computer Science at{" "}
                <a href="" alt="UERJ site">
                    Universidade do Estado do Rio de Janeiro (UERJ)
                </a>
                , Brazil.
                <br></br>I also have a technical degree in Administration at
                CEPAMTF.
                <br></br>
                My knowledge crosses from web technologies to databases, data
                analysis, game development and low-level programming. I'm always
                trying to learn something new!
                <br></br>
                I'm more proficient with Python and C, but I know other
                languages too!
                <br></br>I am currently looking for an internship or
                junior/trainee software developer roles!"
            </p>
        </section>
    );
};
export default About;
