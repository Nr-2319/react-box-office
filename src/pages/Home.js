/* eslint-disable no-console */
import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
    const [input, setInput] = useState('');

    const onInputChange = ev => {
        setInput(ev.target.value);
    };

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':
                'e4cddd9948msh9834d1463b7340bp1d4fd0jsn53049e202097',
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
        },
    };

    const onSearch = () => {
        fetch(
            `https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${input}`,
            options
        )
            .then(r => r.json())
            .then(result => console.log(result))
            .catch(err => console.error(err));

        // fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
        //     .then(r => r.json())
        //     .then(result => {
        //         console.log(result);
        //     });
    };

    const onKeyDown = ev => {
        if (ev.keyCode === 13) {
            onSearch();
        }
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
        </MainPageLayout>
    );
};

export default Home;
