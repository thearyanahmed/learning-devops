'use strict'

const express = require('express')

// Constants
const PORT = 8080
const HOST = '0.0.0.0'

// App
const app = express()

app.get('/', (request, response) => {
  response.send('Internal server World')
})

app.get('/api/v1/internal', (request, response) => {
  response.send('Internal server World')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)