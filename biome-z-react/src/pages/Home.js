import "./Home.css";
import React from "react";
function HomePage() {
    return <div className = "Home-page">

        <div classname = "containers ">
           < div className="text">
                <h1 className = "Title">Welcome to the Biome- Z Database.</h1>
                <p > Biome-Z (Biopsychosocial Index of Microbiome Ecologies - Zotero) is an interactive research tool that categorizes information using the BPSE Framework.
                    Explore the database <a className = "link" href = "/Explore"> here </a> or use the search bar to find a specific category or article. The BPSE Framework sorts specific research data into meaningful subtopics (Biological, Psychological and Social Evironments), making it simple to find obscure articles.
                    <br></br> <h1 className="Web-attributes"> About the database: </h1> <p className = "attributes"> The database characterizes and classifies different scientific articles from a massive number of sources and authors. </p>
                </p>
                <h1 className="Up-F">Upcoming Features: </h1>
                <text>
                    <p>Improved performance of classifying literature into BPSE framework. <br></br> Machine learning will be used to automate the process of classifying literature from public literature databases to the BIOME-Z database.</p>
                </text>
            </div> 
        </div>
    </div>
    
}

export default HomePage