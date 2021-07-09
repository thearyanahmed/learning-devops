'use strict'

const { response } = require('express')
const express = require('express')

// Constants
const PORT = 8080
const HOST = '0.0.0.0'

// App
const app = express()

app.get('/', (request, response) => {
  response.send('Internal server')
})

app.get('/api/v1/internal', (request, response) => {
  response.send('Some data from internal server World')
})

app.listen(PORT, HOST)
console.log(`Internal service running on http://${HOST}:${PORT}`)