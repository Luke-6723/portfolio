/**
 * Parse .env
 */
require('dotenv').config()

/**
 * Initialize express app
 */
const express = require('express')
const app = express()

/**
 * Get routers
 */
const Routers = require('./routers')

/**
 * Set view engine
 */
app.set('view engine', 'ejs')

/**
 * Use public folder
 */
app.use(express.static(`${process.cwd().replace(/[\\]/, '/')}/views/public/`))

/**
 * Define routers
 */
app.use('/', Routers.main)

/**
 * listen on HOST:PORT
 */
app.listen(process.env.PORT, process.env.HOST, () => {
  console.log('Up')
})
