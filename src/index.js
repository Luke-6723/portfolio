import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Main from './pages/blocks/Main'
import * as serviceWorker from './util/serviceWorker'

ReactDOM.render(<Main />, document.getElementById('main'))

serviceWorker.unregister()
