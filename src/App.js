import React from 'react';
import { Routes, Route } from 'react-router-dom';

// PAGES IMPORT
import Starred from './pages/Starred';
import Error from './pages/Error';
import Home from './pages/Home';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/starred" exact element={<Starred />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
