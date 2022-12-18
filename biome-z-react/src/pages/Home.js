import "./Home.css";
import React from "react";
function HomePage() {
    return <div className = "Home-page">

        <div classname = "container ">
            <h1 className = "Title">Welcome to the Biome- Z Database.</h1>
                <p> Biome-Z (Biopsychosocial Index of Microbiome Ecologies - Zotero) is an interactive research tool that categorizes information using the BPSE Framework.
                    Explore the database <a className = "link" href = "/Explore"> here </a> or use the search bar to find a specific category or article. The BPSE Framework sorts specific research data into meaningful subtopics (Biological, Psychological and Social Evironments), making it simple to find obscure articles.
                    <br></br> <h1 className="Web-attributes"> About the database: </h1> <p className = "attributes"> The database characterizes and classifies different scientific articles from a massive number of sources and authors. </p>
                </p>
                <text>Upcoming Features:
                    <p>Improved performance of classifying literature into BPSE framework. <br></br> Machine learning will be used to automate the process of classifying literature from public literature databases to the BIOME-Z database.</p>
                </text>
                <div className="polaroid">
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/501597571?h=629fee29e7" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                       <p> <u> Biopsychosocial Ecological Model Framework </u> </p>
                </div>
        </div>
    </div>
    
}

export default HomePage
