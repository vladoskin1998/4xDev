// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";
// import './style/style.scss'

// ReactDOM.render(<App />, document.getElementById("root"));



import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from "./components/App";
import './style/style.scss'

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(<App  />);