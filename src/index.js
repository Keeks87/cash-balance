/*
Filename: index.js

Code: Renders the Balance.js file on the server
*/

// Import the require files
import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { Provider } from "react-redux";
import store from "./store/store.js";

// Render the balance
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  	<Provider store={store}>
    	<App />
  	</Provider>
);
