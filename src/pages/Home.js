/* eslint-disable import/no-named-as-default */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useState } from 'react';
import GenreGrid from '../components/genre/GenreGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';

const Home = () => {
    const [input, setInput] = useState('');
    const [results, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState('search');

    const isSearch = searchOption === 'search';

    const onInputChange = ev => {
        setInput(ev.target.value);
    };

    const onSearch = () => {
        apiGet(`/anime?page=1&size=10&${searchOption}=${input}`)
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

    const onRadioChange = ev => {
        setSearchOption(ev.target.value);
    };

    const renderResults = () => {
        if (results && results.length === 0) {
            return <div>No Results</div>;
        }

        if (results && results.length > 0) {
            return isSearch ? (
                <ShowGrid data={results} />
            ) : (
                <GenreGrid data={results} />
            );
        }

        return null;
    };

    return (
        <MainPageLayout>
            <input
                type="text"
                placeholder="Search for something"
                onChange={onInputChange}
                onKeyDown={onKeyDown}
                value={input}
            />
            <div>
                <label htmlFor="shows-search">
                    Shows
                    <input
                        id="shows-search"
                        type="radio"
                        value="search"
                        checked={isSearch}
                        onChange={onRadioChange}
                    />
                </label>
                <label htmlFor="Genre-search">
                    Genres
                    <input
                        id="Genre-search"
                        type="radio"
                        value="genres"
                        checked={!isSearch}
                        onChange={onRadioChange}
                    />
                </label>
            </div>

            <button type="button" onClick={onSearch}>
                Search
            </button>
            {renderResults()}
        </MainPageLayout>
    );
};

export default Home;
