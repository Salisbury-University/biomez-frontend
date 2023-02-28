import React, { useState, useEffect } from 'react';
import "./Search.css";
//import searchInput from "../Components/Navbar";


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
                      <th>Type</th>
                      <th>Publish Year</th>
                      <th>Author</th>
                      <th>Title</th>
                      <th>issn</th>
                      <th>DOI</th>
                      <th>URL</th>
                      <th>Abstract</th>
                      <th>Date</th>
                      <th>Issue</th>
                      <th>Volume</th>
                  </tr>
              </thead>
              <tbody>
                  {filteredData.map(row => (
                      <tr key={row.id}>
                          <td>{row.pubYear}</td>
                          <td>{row.author}</td>
                          <td>{row.title}</td>
                          <td>{row.issn}</td>
                          <td>{row.doi}</td>
                          <td>{row.url}</td>
                          <td>{row.abstract}</td>
                          <td>{row.date}</td>
                          <td>{row.issue}</td>
                          <td>{row.volume}</td>
                          <td>{row.authorName}</td>
                          <td>{row.doi}</td>
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
