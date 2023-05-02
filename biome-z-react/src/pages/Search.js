import "./Search.css";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useLocation } from 'react-router-dom';

function SearchPage() {
    const [query, setQuery] = useState('Search the database...');
    const [results, setResults] = useState([]);
    const [checkedItems, setCheckedItems] = useState(new Map());
    const [, setSelectAll] = useState(false);
    const [sortBy, setSortBy] = useState('Relevance');
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);


    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const q = queryParams.get('q');
        setQuery(q || '');
    }, [location.search]);

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

    const handleCheckboxChange = useCallback((event, result) => {
        const item = event.target.name;
        const isChecked = event.target.checked;
        setCheckedItems((prevState) => new Map(prevState).set(item, isChecked));
    }, []);

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

    const handleSelectAll = useCallback(() => {
        setSelectAll(true);
        const newCheckedItems = new Map();
        results.forEach((result) => newCheckedItems.set(result._id, true));
        setCheckedItems(newCheckedItems);
    }, [results]);

    const handleDeselectAll = useCallback(() => {
        setSelectAll(false);
        const newCheckedItems = new Map();
        results.forEach((result) => newCheckedItems.set(result._id, false));
        setCheckedItems(newCheckedItems);
    }, [results]);

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

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };

    const sortedResults = useMemo(() => {
        switch (sortBy) {
            case 'Title':
                return results.slice().sort((a, b) => a.title.localeCompare(b.title));
            case 'Author':
                return results.slice().sort((a, b) => a.author.localeCompare(b.author));
            case 'PublicationYear':
                return results.slice().sort((a, b) => a.pubYear - b.pubYear);
            default:
                return results;
        }
    }, [results, sortBy]);

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const pageResults = sortedResults.slice(startIndex, endIndex);

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
            <div>
                <button className="download-button-top" onClick={handleDownloadChecked}>Download Selected</button>
                <button className="download-button-top" onClick={handleDownloadSelectedSingle}>Download Selected (Single File)</button>
                <button className="select-deselect-button" onClick={handleSelectAll}>Select All</button>
                <button className="select-deselect-button" onClick={handleDeselectAll}>Deselect All</button>
                <select className="download-button-top" value={sortBy} onChange={handleSortByChange}>
                     <option value="Relevance">Relevance</option>
                    <option value="Title">Title</option>
                    <option value="Author">Author</option>
                    <option value="PublicationYear">Publication Year</option>
                 </select>
            </div>
            <div className="paginationContainer">
                <button className="pagination" disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
                <span className="paginationText" >Page {page}</span>
                <button className="pagination" disabled={page * perPage >= sortedResults.length} onClick={() => setPage(page + 1)}>Next</button>

                <select className="pagination" value={perPage} onChange={(e) => setPerPage(Number(e.target.value))}>
                    <option value={5}>5 per page</option>
                    <option value={10}>10 per page</option>
                    <option value={20}>20 per page</option>
                    <option value={50}>50 per page</option>
                </select>

            </div>



            <table className = "searchResultsTable">
                <thead>
                    <tr>
                        <th></th>
                        <th>Year</th>
                        <th>Title</th>
                        <th>Publication Title</th>
                        <th>Author</th>
                        <th>URL</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    {pageResults.map((result) => (
                        <tr key={result._id}>
                            <td>
                                <input type="checkbox" name={result._id} checked={checkedItems.get(result._id)} onChange={(e) => handleCheckboxChange(e, result)} />
                            </td>
                            <td>{result.pubYear}</td>
                            <td title={result.title}>{result.title}</td>
                            <td title={result.pubTitle}>{result.pubTitle}</td>
                            <td title={result.author}>{result.author}</td>
                            <td>
                                {result.url ?
                                    <a href={result.url} target="_blank" rel="noreferrer">Link</a> :
                                    <span>NO LINK FOUND</span>
                                }
                            </td>
                            <td><button className="download-button" onClick={() => downloadRdf(result)}>Download</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SearchPage;
