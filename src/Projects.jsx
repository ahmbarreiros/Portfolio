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
                        <h5 className="card-title">In'n'Out</h5>
                        <h6 className="php">PHP</h6>
                        <p className="card-text">
                            A PHP project that manages employees electronic time
                            clock system
                        </p>
                        <div className="btn-group">
                            <a
                                href="https://github.com/ahmbarreiros/innout"
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
                <div className="projects-container-project card">
                    <div className="card-body">
                        <h5 className="card-title">Playlist Transferer</h5>
                        <h6 className="python">Python</h6>
                        <p className="card-text">
                            A script that transfers a playlist from Spotify to
                            Youtube, and can do other searches in Spotify.
                        </p>
                        <div className="btn-group">
                            <a
                                href="https://github.com/ahmbarreiros/transferidor_de_playlist"
                                className="btn btn-secondary"
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
