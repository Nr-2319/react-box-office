import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// PAGES IMPORT
import Starred from './pages/Starred';
import Home from './pages/Home';
import Error from './pages/Error';
import Show from './pages/Show';

const theme = {
    mainColors: {
        blue: '#2400ff',
        gray: '#c6c6c6',
        dark: '#353535',
    },
};

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/starred" exact element={<Starred />} />
                    <Route path="/show/:id" exact element={<Show />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
