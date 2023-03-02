const express = require('express')
const { deleteOne, findById, findByIdAndRemove } = require('../models/task')
const router = express.Router()

const Task = require('../models/task')

router.get('/', async(req, res) => {
  //res.send('Get request')
  try{
    const tasks = await Task.find()
    res.json(tasks)
  }catch(err){
    res.send('Error ' + err)
  }
})
// for one perticular alien
router.get('/:id', async(req, res) => {
  //res.send('Get request')
  try{
    const task = await Task.findById(req.params.id)
    res.json(task)
  }catch(err){
    res.send('Error ' + err)
  }
})

// how to write post request so that we can recieve data from user and save it in our database
router.post('/', async(req, res) => {
  const task = new Task({
    task: req.body.task,
    time: req.body.time,
  })
  console.log("Data Recieved.....")
  try{
    // to save data in database 
    const a1 = await task.save()
    // to tell user that data is saved i have saved data in a1 and will show 
    res.json(a1)
  }catch(err){
    res.send("Error 555")
  }
  console.log("Data Saved.....")
})

router.patch('/:id', async(req, res) => {
  try{
    await Task.findByIdAndUpdate(req.params.id, {"task": req.body.task, "time": req.body.time, "catagoty": req.body.time})
    const st = await Task.findById(req.params.id)
    res.send(st)
  }catch(err){
    res.send('Error', err)
  }
})

router.put('/:id', async(req, res) => {
  try{
    await Task.findByIdAndUpdate(req.params.id, {"task": req.body.task, "time": req.body.time, "catagoty": req.body.time})
    const st = await Task.findById(req.params.id)
    res.send(st)
  }catch(err){
    res.send('Error', err)
  }
})

router.delete('/:id', async(req, res) => {
  try{
    const st = await Task.findByIdAndDelete(req.params.id)
    res.send(st)
  }catch(err){
    res.status(200)
  }
})

module.exports = router