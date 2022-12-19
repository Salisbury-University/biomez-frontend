import React from "react";
import "./About.css";
function AboutPage() {
    return <div className="About-Page">
        <div classname = "containers ">
            <h1> SU COSC BIOME-Z-WEBSITE </h1>
        </div>
    <p className= "about-us"> Collaborators: </p>
        <p> SU Students: Nick Lautieri, Sam Blaxberg, Samuel Gnahoui-David, Ethan White 
            <p>Client: Dr. Maier 
            <p> Overseers: Christopher Arausa</p>
        
            </p>
        </p>
        <div className="move-pic">
            <a className = "link" href = "http://faculty.salisbury.edu/~kjmaier/"> <img  className = "bio-pic" src = "/images/Biome-z-pic3" alt ="" /> </a>
            <div className = "Biome-z-vid">
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/501597571?h=629fee29e7" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                <p classname = "vid-title"> <u > Biopsychosocial Ecological Model Framework </u> </p>
            </div>
            <p className="bio-name"> Dr. Maier, a Ph.D professer in the department of Psychology in Fulton School of Liberal Arts at Salisbury University. Dr. Maier has interdisciplinary training in behavioral medicine and clinical health psychology. He has both a clinical and basic research background in cardiovascular behavioral medicine, focusing on the psychophysiology of stress. More recently, he has broadened his scope to examine how physical and mental health interface with issues of global concern, such as environmental health and climate change, using a transdisciplinary ecological systems approach. Here he has developed cross-cutting conceptual frameworks to help researchers, educators, and the general public understand complex phenomena (for example, the role of human and environmental microbiomes in health). Also in this area, he has developed some of the first interdisciplinary courses on climate change, including Psychology and Global Climate Change, which he has co-taught at Salisbury University since 2013. Click the picture above to be forward to Dr. Maier's website. </p>  
            
        </div>
       
    </div>
}

export default AboutPage
