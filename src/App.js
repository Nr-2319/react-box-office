import React from 'react';
import { Routes, Route } from 'react-router-dom';

// PAGES IMPORT
import Starred from './pages/Starred';
import Home from './pages/Home';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/starred" exact element={<Starred />} />
                <Route exact path="/show/:id" />
            </Routes>
        </div>
    );
}

export default App;
