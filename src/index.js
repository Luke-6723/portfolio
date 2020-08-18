import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './pages/Home'
import * as serviceWorker from './util/serviceWorker'

ReactDOM.render(<Home />, document.getElementById('main'))

serviceWorker.unregister()
