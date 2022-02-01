 const express = require('express')
 const cors = require('cors') 

 const app=express()
 
//router

const router = require('./routes/productRouter')
app.use('/api/products ',router  )

 //test api
 app.get('/',(req,res)=>{
     res.json({message:'hello from api'})
 })

//PORT
 const PORT = process.env.PORT || 8080

 //server

 app.listen(PORT,()=>{
     console.log(`Server is running port ${PORT}`)
 })

