const express = require('express')
const port = 9001
const app = express()
const routes = require('./Route')
app.use(express.json())
app.use('/',routes)

app.listen(port,async(req,res)=>{
    console.log(`server running ${port}`)
})