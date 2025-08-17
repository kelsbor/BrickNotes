import React from 'react';
import Router from './router.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
    console.log('Rendering Router Component')
    return (
        <BrowserRouter>   
            <Router/>
        </BrowserRouter>
    );
}

export default App;
