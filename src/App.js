import React from 'react';
import { Routes, Route } from 'react-router-dom';

// COMPONENT IMPORT
import Nav from './components/Nav';

// PAGES IMPORT
import Starred from './pages/Starred';
import Error from './pages/Error';
import Home from './pages/Home';

function App() {
    return (
        <div>
            <Nav />

            <Routes>
                <Route path="/starred" exact element={<Starred />} />
                <Route path="/" exact element={<Home />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
