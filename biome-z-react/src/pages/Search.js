import React, { useState, useEffect } from 'react';
import "./Search.css";
//import searchInput from "../Components/Navbar";

// Example of a data array that
// you might receive from an API
/*
const data = [
    { title: "Holistic Health", author: "Hugh ablndy", abstract: "How acupuncture and meditation cure cancer" },
    { title: "Social Drama related to stess", author: "QWERTY", abstract: "The attention grabbing abstract" },
    { title: "Something intresting about Psychology", author: "TGIF", abstract: "The FitnessGram PACER Test is a multistage aerobic capacity test that progressively gets more difficult as it continues "},
  ]
*/
function Search() {
    
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
      async function fetchData() {
          const response = await fetch('http://localhost:5000/records');
          const json = await response.json();
          setData(json);
      }
      fetchData();
  }, []);

  const handleSearchChange = event => {
      setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(row =>
      (row.articleName.toLowerCase().includes(searchTerm.toLowerCase()) || row.authorName.toLowerCase().includes(searchTerm.toLowerCase()))
  );
    
  return (
      <>
        <div className="abc" >
          <form>
              <label htmlFor="search">Search:</label>
              <input
                  type="text"
                  id="Search2"
                  value={searchTerm }
                  onChange={handleSearchChange}
              />
          </form>
        </div>
        <div className="container2" >
          <table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Author</th>
                      <th>DOI</th>
                  </tr>
              </thead>
              <tbody>
                  {filteredData.map(row => (
                      <tr key={row.id}>
                          <td>{row.articleName}</td>
                          <td>{row.authorName}</td>
                          <td>{row.doi}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
          </div>
      </>
  );
}


export default Search
