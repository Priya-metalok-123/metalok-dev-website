import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import './scss/index.scss';
import App from './App';
import store from './components/Pages/Store';

// 1st part Google analytics code --------------->>>>>>>>>>>>>>>>>>>>> 
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga';
const root = createRoot(document.getElementById('root'));
// Initialize Google Analytics
ReactGA.initialize('G-6C0LF6V3V4');


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// 2nd part of GA code
const SendAnalytics = ()=> {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
}
reportWebVitals(SendAnalytics);