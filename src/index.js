import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/App'
import * as serviceWorker from './util/serviceWorker'

ReactDOM.render(<App />, document.getElementById('main'))

serviceWorker.unregister()
