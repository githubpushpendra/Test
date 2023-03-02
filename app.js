const express = require('express')
const mongoose = require('mongoose')

const app = express() // to start the express framework

// URL of cloud database /////////////////////////////////

//const urlDB = 'mongodb://localhost/local'
const urlDB = 'mongodb+srv://Pushpendra:Sanni123@cluster0.psvm31p.mongodb.net/?retryWrites=true&w=majority'
///////////////////////////////

mongoose.connect(urlDB, {useNewUrlParser:true}); // {useNewUrlParser:true} it is used to avoid one warning

const con = mongoose.connection // hold on the connection
//when con will get connetion then following function will be called and we come to know
con.addListener('open', () => { // it has three types open, close, error
  console.log('connected....') // on can be used instead of addListner
})

app.use(express.json())

const taskRouter = require('./routes/tasks')
app.use('/tasks', taskRouter) // for all the requests for 'aliens' you have to send request for 'alienRouter'


app.listen(3000, () => {
  console.log('server is running')
})