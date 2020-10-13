import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Main from './pages/Main'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import * as serviceWorker from './util/serviceWorker'

ReactDOM.render(<AboutMe />, document.getElementById('aboutme'))
ReactDOM.render(<Projects />, document.getElementById('projects'))

serviceWorker.unregister()
