import react from 'react'
import ReactDom from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './style/main.css'
// import '@fortawesome/fontawesome-free/css/all.min.css'
import { BrowserRouter } from 'react-router-dom';
import App from "./app";
ReactDom.render(
     <App/>
    ,
     document.querySelector('#root')
    )