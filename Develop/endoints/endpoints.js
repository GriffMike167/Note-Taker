const fs = require('fs');
const path = require('path');
var notes = JSON.parse(data)

app.get("notes/", function(req. res){
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, "../piblic/index.html"));
});

app.get("/api/notes", function(req, res){
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
app.delete("/api/notes/:id", function(req, res){
    notes.filter(req.params.id, [newNotes])
});
