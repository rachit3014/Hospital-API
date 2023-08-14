// import express
const express=require('express')
// setting a port number
const port=8000
// importing mongose
const db=require('./config/mongose')
// import passport
const passport=require('passport')
// import Passport strategy for authenticating with a JSON Web Token.
const Strategy=require('./config/passport-jwt')
// calling the web-framework
const app= express()
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))   
app.use(bodyparser.json())

app.use('/',require('./Routes/index'))
// server start listening
app.listen(port,function(err){
    if (err)
    {
        console.log(err,'err in running port')

    }
    console.log(port,'yup server is running')
})