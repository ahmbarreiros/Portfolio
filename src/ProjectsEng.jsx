const Projects = () => {
    return (
        <section className="projects">
            <h4>/* My projects */</h4>
            <div className="projects-container">
                <div className="projects-container-project card">
                    <div className="card-body">
                        <h5 className="card-title">Binge Watcher</h5>
                        <h6 className="csharp">C#/ASP.NET</h6>
                        <p className="card-text">
                            A ASP.NET website that allows you to manage your
                            watched anime!
                        </p>
                        <div className="btn-group">
                            <a
                                href="https://github.com/ahmbarreiros/BingeWatcher_demo"
                                className="btn btn-secondary"
                                target="_blank"
                            >
                                Repo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="projects-container-project card">
                    <div className="card-body">
                        <h5 className="card-title">Jacaré Músicas</h5>
                        <h6 className="python">Python</h6>
                        <p className="card-text">
                            A Discord music bot that streams audio from Youtube!
                        </p>
                        <div className="btn-group">
                            <a
                                href="https://github.com/ahmbarreiros/jacare-musicas-discord-bot"
                                className="btn btn-secondary"
                                target="_blank"
                            >
                                Repo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="projects-container-project card">
                    <div className="card-body">
                        <h5 className="card-title">Albos Library</h5>
                        <h6 className="cpp">C/C++</h6>
                        <p className="card-text">
                            A Personal library for C that includes math methods
                            and cross-platform code.
                        </p>
                        <div className="btn-group">
                            <a
                                href="https://github.com/ahmbarreiros/albos_library_c"
                                className="btn btn-secondary"
                                target="_blank"
                            >
                                Repo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="projects-container-project card">
                    <div className="card-body">
                        <h5 className="card-title">Rio Tours</h5>
                        <h6 className="react-js">React.js</h6>
                        <p className="card-text">
                            A tour company website that uses React.js and SASS
                        </p>
                        <div className="btn-group">
                            <a
                                href="https://github.com/ahmbarreiros/rio-tours-demo"
                                target="_blank"
                                className="btn btn-secondary"
                            >
                                Repo
                            </a>
                            <a
                                href="https://rio-tours-demo.netlify.app/"
                                target="_blank"
                                className="btn btn-primary"
                            >
                                Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Projects;
