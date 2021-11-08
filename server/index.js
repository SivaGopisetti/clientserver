/**
 * at first installing the required packages using npm
 * after installing use the js file for giving commands
 * 
 */


 const express=require('express')    //importing the express modules
 const mongoose = require('mongoose')  //importing the mongoose modules
 const url= 'mongodb+srv://siva:Siva0127@cluster0.4agkn.mongodb.net/siva?retryWrites=true&w=majority'   //here we are connecting to database using url
 
 const app=express()
 
 mongoose.connect(url,{useNewUrlParser:true})   //connecting to mongoose 
 const con =mongoose.connection                 // connecting to database
 
 con.on("open",()=>{                             //giving an open event to make sure it is running.
     console.log(" getting connected...")
     
 })
 
 
 app.use(express.json())                        //using express in json
 
 
 const sivaRouter=require('./routersss/help')    //importing and store the data
 app.use('/help',sivaRouter)
 
 
 
 app.listen(4000,()=>{         // connecting the local host using port number
     console.log('server started')
 })