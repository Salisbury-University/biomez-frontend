import React from 'react'
import "./Search.css";

// Example of a data array that
// you might receive from an API
const data = [
    { title: "Holistic Health", author: "Hugh ablndy", abstract: "How acupuncture and meditation cure cancer" },
    { title: "Social Drama related to stess", author: "QWERTY", abstract: "The attention grabbing abstract" },
    { title: "Something intresting about Psychology", author: "TGIF", abstract: "The FitnessGram PACER Test is a multistage aerobic capacity test that progressively gets more difficult as it continues "},
  ]

function ExplorePage() {
    return (
    <div className="container" >
        <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Abstarct</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.title}</td>
              <td>{val.author}</td>
              <td>{val.abstract}</td>
            </tr>
          )
        })}
      </table>
    </div>
    )
}

export default ExplorePage
