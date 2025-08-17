import ReactDom from 'react-dom/client'
import App from './App.js'
import { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)