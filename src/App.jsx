import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import YourSpace from './pages/YourSpace';
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/your-space" element={<YourSpace />} />
            </Routes>
        </Router>
    );
}

export default App;