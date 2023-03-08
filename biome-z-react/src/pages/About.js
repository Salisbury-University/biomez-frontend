import React from "react";
import "./About.css";
function AboutPage() {
    return <div className="about-page">

        <header className="header">
            <h1 className="header-title">LEARN MORE</h1>
        </header>

        <main className="videoPlayer">
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/501597571?h=629fee29e7" width="1300" height="600" frameborder="0" allowfullscreen="true"></iframe>
            <p className="video-text"> How Does The Framework Work? </p>
        </main>

        <main className="main">
            <p className="sub-text">
                Website created by Sam Blaxberg, Nicholas Lautieri, Ethan White, Samuel Ghanoul-David, and Christopher Arausa.
            </p>
        </main>

    </div>
}

export default AboutPage
