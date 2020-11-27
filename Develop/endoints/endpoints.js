const fs = require('fs');
const path = require('path');
var notes = JSON.parse(data)


applicationCache.get("/api/notes", function(req, res){
    res.JSON(notes);
});

app.post("/api/notes", function(req, res){
    let newNotes = req.body;
    notes.push(newNotes);
    return console.log("You added new note: "+newNotes.title+"to your library.") 
});
app.get("/api/notes/:id", function(req, res){
    res.JSON(notes[req.params.id]);
});
