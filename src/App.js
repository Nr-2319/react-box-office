import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Second from './pages/Second';
import Error from './pages/Error';
import Home from './pages/Home';

function App() {
    return (
        <Routes>
            <Route path="/second" exact element={<Second />} />
            <Route path="/" exact element={<Home />} />

            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default App;
