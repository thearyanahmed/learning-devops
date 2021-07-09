'use strict'

const express = require('express')
const axios   = require('axios')

// Constants
const PORT = 8081
const HOST = '0.0.0.0'

// App
const app = express()

app.use(express.json())

const internalURL = "http://172.17.0.3:8080/api/v1/internal"

// registering routes
app.get('/', (request,response) => {
    response.send('External service')
})

app.get('/api/v1/add',async (request,response)=>{

  console.log('requesting ', internalURL)

  try{
    // request to the internal service 
    const internalServiceResponse = await axios.get(internalURL)
    console.log(internalServiceResponse.data)
    
    const exrternalServiceResponse = {
      msg: 'request success',
      internal_service_response: internalServiceResponse.data
    }

    // send the response to the public internet
    response.send(exrternalServiceResponse)
  } catch(err){
    console.log('got error')
    // console.log(err)
  }
})

// finally, setup port & host and start listening using express
app.listen(PORT, HOST)

console.log(`Running on http://${HOST}:${PORT}`)