import "./Home.css";
import React from "react";
import exploreIcon from "../Images/VENN.png";
import databaseIcon from "../Images/DATABASE.png";

function HomePage() {
    return (
        <div className="home-page">
            <header className="header">
                <h1 className="header-title">WELCOME TO THE BIOME-Z DATABASE.</h1>
            </header>

            <main className="main">
                <p className="large-text"> OVERVIEW </p>
                <p className="small-text"> BIOME-z (pronounced "biomes") is a pilot project to index microbiome-related scientific literature from across the disciplines (representing humans, animals, natural and built environments), organized in a biopsychosocial ecological framework (Maier & al'Absi, 2017). The aim is to facilitate interdisciplinary research on the microbiome and health that reflects the broad ecological/interconnected nature of microbiomes. </p>
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


            <main className="main showcase">
                <p className="large-text"> EXPLORE </p>
                <p className="small-text"> Use our Venn Diagram Explorer to search for articles, categories and tags, or quickly check our current article counts for each category combination. </p>
                <a href="/Explore">
                    <img
                        className="explore-icon"
                        src={exploreIcon}
                        alt="Venn Diagram Icon"
                    />
                </a>
            </main>
        </div>
    );
}

export default HomePage