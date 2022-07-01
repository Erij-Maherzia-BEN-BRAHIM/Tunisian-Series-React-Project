import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './fonts/PressStart2P-Regular.ttf'
import './fonts/BlackOpsOne-Regular.ttf'
import{BrowserRouter} from 'react-router-dom'
import FavoritesContextProvider from './store/favoriteContext';
import LoginContextProvider from './store/loginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritesContextProvider>
    <LoginContextProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </LoginContextProvider>
    </FavoritesContextProvider>
);

