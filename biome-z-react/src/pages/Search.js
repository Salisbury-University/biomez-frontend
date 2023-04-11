import "./Search.css";
import React, { useState, useEffect } from 'react';

function SearchPage() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [checkedItems, setCheckedItems] = useState(new Map());
    const [selectAll, setSelectAll] = useState(false);

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

    const handleCheckboxChange = (event, result) => {
        const item = event.target.name;
        const isChecked = event.target.checked;
        setCheckedItems(prevState => prevState.set(item, isChecked));
    };

    const handleDownloadChecked = () => {
        const itemsToDownload = [];
        for (const [key, value] of checkedItems.entries()) {
            if (value) {
                itemsToDownload.push(key);
            }
        }
        if (itemsToDownload.length > 0) {
            for (const id of itemsToDownload) {
                downloadRdf(results.find(result => result._id === id));
            }
        }
    };

    const downloadRdf = async (result) => {
        const response = await fetch(`http://localhost:5000/rdf/${result._id}`);
        const data = await response.text();

        const element = document.createElement("a");
        const file = new Blob([data], { type: "application/rdf+xml" });
        element.href = URL.createObjectURL(file);
        element.download = `${result.title}.rdf`;
        document.body.appendChild(element);
        element.click();
    };

    const handleSelectAll = () => {
        setSelectAll(true);
        const newCheckedItems = new Map();
        results.forEach(result => newCheckedItems.set(result._id, true));
        setCheckedItems(newCheckedItems);
    };

    const handleDeselectAll = () => {
        setSelectAll(false);
        const newCheckedItems = new Map();
        results.forEach(result => newCheckedItems.set(result._id, false));
        setCheckedItems(newCheckedItems);
    };

    const handleDownloadSelectedSingle = async () => {
        const itemsToDownload = [];
        for (const [key, value] of checkedItems.entries()) {
            if (value) {
                itemsToDownload.push(key);
            }
        }
        if (itemsToDownload.length > 0) {
            const response = await fetch('http://localhost:5000/rdf/selected', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ids: itemsToDownload })
            });
            const data = await response.text();

            const element = document.createElement("a");
            const file = new Blob([data], { type: "application/json" });
            element.href = URL.createObjectURL(file);
            element.download = `SelectedFiles.json`;
            document.body.appendChild(element);
            element.click();
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
                <button className="download-button-top" onClick={handleDownloadChecked}>Download Selected</button>
                <button className="download-button-top" onClick={handleDownloadSelectedSingle}>Download Selected (Single File)</button>
                <button className="select-deselect-button" onClick={handleSelectAll}>Select All</button>
                <button className="select-deselect-button" onClick={handleDeselectAll}>Deselect All</button>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Publication Year</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Publication Title</th>
                        <th>ISSN</th>
                        <th>DOI</th>
                        <th>URL</th>
                        <th>Date</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result) => (
                        <tr key={result._id}>
                            <td>
                                <input type="checkbox" name={result._id} checked={checkedItems.get(result._id)} onChange={(e) => handleCheckboxChange(e, result)} />
                            </td>
                            <td>{result.pubYear}</td>
                            <td>{result.author}</td>
                            <td>{result.title}</td>
                            <td>{result.pubTitle}</td>
                            <td>{result.issn}</td>
                            <td>{result.doi}</td>
                            <td>
                                {result.url ?
                                    <a href={result.url} target="_blank">Link</a> :
                                    <span>NO LINK FOUND</span>
                                }
                            </td>
                            <td>{result.date}</td>
                            <td><button className="download-button" onClick={() => downloadRdf(result)}>Download</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SearchPage;
