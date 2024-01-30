const Projects = () => {
    return (
        <section className="projects">
            <h4>/* My projects */</h4>
            <h6>Other projects and studies can be seen on my github!</h6>
            <div className="projects-container">
                <div className="projects-container-project card">
                    <div className="card-body">
                        <h5 className="card-title">Binge Watcher</h5>
                        <h6 className="csharp">C#/ASP.NET</h6>
                        <p className="card-text">
                            A ASP.NET website that allows you to manage your
                            watched TV content!
                        </p>
                        <div className="btn-group">
                            <a
                                href="https://github.com/ahmbarreiros/BingeWatcher_demo"
                                className="btn-link"
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
                            A Discord bot that streams audio
                        </p>
                        <div className="btn-group">
                            <a
                                href="https://github.com/ahmbarreiros/jacare-musicas-discord-bot"
                                className="btn-link"
                                target="_blank"
                            >
                                Repo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="projects-container-project card">
                    <div className="card-body">
                        <h5 className="card-title">
                            DRIVV.
                            <span style={{ color: "orange" }}>gg</span>
                        </h5>
                        <h6 className="python">TypeScript</h6>
                        <p className="card-text">
                            Site para assistir conteúdo relacionados a jogos
                        </p>
                        <div className="btn-group">
                            <a
                                href="https://drivv.vercel.app/"
                                className="btn-link"
                                target="_blank"
                            >
                                Visite
                            </a>
                            <a
                                href="https://github.com/ahmbarreiros/DRIVV"
                                className="btn-link"
                                target="_blank"
                            >
                                Repo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Projects;
