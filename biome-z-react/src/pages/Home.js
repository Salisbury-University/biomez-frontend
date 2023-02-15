import "./Home.css";
import React from "react";
function HomePage() {
    return (
        <div className="home-page">
            <header className="header">
                <h1 className="header-title">WELCOME TO THE BIOME-Z DATABASE.</h1>
            </header>

            <main className="main">
                <p className="large-text"> OVERVIEW </p>
                <p className="small-text"> Biome-Z (Biopsychosocial Index of Microbiome Ecologies - Zotero) is an interactive research tool that categorizes information using the BPSE Framework.
                Explore the database <a className="link-text" href="/Explore"> here </a> or use the search bar to find a specific category or article. The BPSE Framework sorts specific research data into meaningful subtopics (Biological, Psychological and Social Evironments), making it simple to find obscure articles.
                 </p>
            </main>

            <main className="videoPlayer">
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/501597571?h=629fee29e7" width="1300" height="600" frameborder="0" allowfullscreen="true"></iframe>
                <p className="video-text"> How Does The Framework Work? </p>
            </main>

            <main className="main">
                <p className="large-text"> FEATURES </p>
                <p className="small-text">
                <ul>
                    <li> The database characterizes and classifies different scientific articles from a massive number of sources and authors, including Google Scholar and PubMed. </li>
                    <li> Precise search tags allow for simple, quick queries - saving time and resources for the important research. </li>
                    <li> Machine learning algorithms automatically and seamlessly categorize new data into the database. </li>
                    </ul>
                </p>
            </main>

        </div>
    );
}

export default HomePage