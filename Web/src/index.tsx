import * as React from "react"
import * as ReactDOM from "react-dom"

import {Login} from './components/Login'
import './assets/css/style.css'
import './assets/css/font-awesome.min.css'
import './assets/css/awesome-bootstrap-checkbox.min.css'
import './assets/css/bootstrap.min.css'

ReactDOM.render(
    <Login/>,
    document.getElementsByClassName("container-fluid")[0]
)