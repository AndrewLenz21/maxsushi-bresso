import React from 'react';
import {createRoot} from 'react-dom/client';
//Importamos documentos para el router
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// COMENZAMOS A USAR EL ROUTER
root.render(
    <React.StrictMode>
        <BrowserRouter basename='/'>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)

/* LINEA QUE SE USABA ANTES */
// createRoot(document.getElementById('root')).render(<App />);


