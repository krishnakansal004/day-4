const express = require('express');

const app = express();

app.use(express.json())

const notes = []

app.post('/notes',(req,res)=>{
    console.log(req.body)
    res.send("Note created");
    notes.push(req.body)
})

app.get('/notes',(req,res)=>{
    res.send(notes)

})

app.delete('/notes/:index',(req,res)=>{
    delete notes[req.params.index]
    res.send("Note deleted")
})


app.get('/',(req,res)=>{
    res.send("This is a home page");
})

app.patch('/notes/:index',(req,res)=>{
    notes[req.params.index] = req.body
    res.send("Note updated")
})

app.put('/notes/:index',(req,res)=>{
    notes[req.params.index] = req.body
    res.send("Note updated")
})


module.exports = app; 