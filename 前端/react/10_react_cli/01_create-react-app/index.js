import React from 'react';
import ReactDOM  from "react-dom/client";
import App from './components/App/App';

const vm = ReactDOM.createRoot(document.querySelector("#root"));
vm.render(<App />);
