require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const Admin = require('./models/AdminModel')
app.use(express.json())


app.get('/',(req,res)=>{
    res.json('Hiiii')
})
app.get("/about", (req,res)=>{
    res.json('Bhanu')
})

app.post('/add',async (req,res)=>{
    const {email, password} = req.body
    try{
        const admin = await Admin.create({email, password})
        res.status(200).json(admin)
    }catch(error){
        res.status(400).json({error: error.message})
    }
    
})
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
    // listen for requests
        app.listen(process.env.PORT, ()=>{
        console.log('connected to DB & listening on port ', process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })
