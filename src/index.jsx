//Imports
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './utils/context/index';
import GlobalStyle from './utils/style/GlobalStyle';
import App from './components/App/index';
import React from 'react';

//Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <LanguageProvider>
                <GlobalStyle />
                <App />
            </LanguageProvider>
        </BrowserRouter>
    </React.StrictMode>
);
