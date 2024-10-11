const express=require('express');
const app=express()
const port=4000

app.get('/',(req,res)=>{
        res.send('hi this is my first home page')
})

app.get('/fb',(req,res)=>{
    res.send('hi this is my first fb page')
})

app.get('/login',(req,res)=>{
    res.send('<h1>hi this is my first login page</h1>')
})
app.listen(process.env.port,(req,res)=>{
    console.log(`it is running${port}`)
})