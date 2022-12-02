//import React, {Component} from 'react'
import React from 'react'
//import { render } from 'react-dom'
import VennDiagram from '../Components/VennDiagram'
import "./Explore.css";
function ExplorePage() {
    return (
    <div className="container" >
        <h1>
            <VennDiagram />
        </h1>
    </div>
    )
}

export default ExplorePage
