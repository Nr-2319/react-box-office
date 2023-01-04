import React from 'react';
import { Routes, Route } from 'react-router-dom';

// PAGES IMPORT
import Starred from './pages/Starred';
import Home from './pages/Home';
import Error from './pages/Error';
import Show from './pages/Show';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/starred" exact element={<Starred />} />
                <Route exact path="/show/:id" element={<Show />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
