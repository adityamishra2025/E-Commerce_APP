import React from 'react';
import ReactDOM from 'react-dom/client'; // Provides methods to interact with the DOM, specifically for rendering React components.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; // A utility to measure and report the performance of the app.
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/auth';
import { SearchProvider } from './context/search';
import { CartProvider } from './context/cart';
import "antd/dist/reset.css";

// This line selects the HTML element with the id root(typically in the index.html file) and prepares it to 
// render React components.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Context providers used to manage global state across the application, related to authentication, 
  // search functionality, and cart management, respectively.

  <AuthProvider>
    <SearchProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </SearchProvider>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// The code initializes a React application with global state management for authentication, search, and 
// cart functionalities.It also sets up routing with BrowserRouter and includes performance monitoring 
// capabilities.The App component is the root of the component tree and will be rendered into the root 
// element of the DOM.