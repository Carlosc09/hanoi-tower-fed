import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import 'bulma/css/bulma.min.css';
import App from './App';
import { Provider } from './context/Puzzle.context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider>
            <App />
        </Provider>
    </React.StrictMode>
);
