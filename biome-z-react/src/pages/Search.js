import "./Search.css";
import React, { useState, useEffect } from 'react';

function SearchPage() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/post-json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ q: query })
            });
            const data = await response.json();
            setResults(data);
        };

        if (query !== '') {
            fetchData();
        }
    }, [query]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setQuery(event.target.value);
        }
    };

    return (
        <div className="container2">
            <div className="searchBar">
                <input className="searchText"
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Publication Year</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Publication Title</th>
                        <th>ISSN</th>
                        <th>DOI</th>
                        <th>URL</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result) => (
                        <tr key={result._id}>
                            <td>{result.pubYear}</td>
                            <td>{result.author}</td>
                            <td>{result.title}</td>
                            <td>{result.pubTitle}</td>
                            <td>{result.issn}</td>
                            <td>{result.doi}</td>
                            <td><a href={result.url} target="_blank">Link</a></td>
                            <td>{result.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default SearchPage;
