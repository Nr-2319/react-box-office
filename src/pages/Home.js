/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
    const [input, setInput] = useState('');
    const [results, setResults] = useState(null);

    const onInputChange = ev => {
        setInput(ev.target.value);
    };

    const onSearch = () => {
        apiGet(`/anime?page=1&size=10&search=${input}`)
            .then(result => {
                setResults(result.data);
            })
            .catch(err => console.error(err));
    };

    const onKeyDown = ev => {
        if (ev.keyCode === 13) {
            onSearch();
        }
    };

    const renderResults = () => {
        if (results && results.length === 0) {
            return <div>No Results</div>;
        }

        if (results && results.length > 0) {
            return (
                <div>
                    {results.map(item => (
                        <div key={item._id}>{item.title}</div>
                    ))}
                </div>
            );
        }

        return null;
    };

    return (
        <MainPageLayout>
            <input
                type="text"
                onChange={onInputChange}
                onKeyDown={onKeyDown}
                value={input}
            />
            <button type="button" onClick={onSearch}>
                Search
            </button>
            {renderResults()}
        </MainPageLayout>
    );
};

export default Home;
