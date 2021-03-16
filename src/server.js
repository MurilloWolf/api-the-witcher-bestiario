import express from 'express'
import cors from 'cors'

const App = express()

const port = 3333

App.use(express.json())
App.use(cors())
App.listen(port)

App.get('/', (request,response)=>{
    response.json({ok:true})
})

App.post('/',  (request,response)=>{
   const {body: {name}} =  request

   response.json({name})
})