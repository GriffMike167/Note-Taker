const fs = require('fs');
const path = require('path');

fs.readFile('db/db.json', 'utf8', function(err,data){
    if (err){
        return console.log(err);
    }


    var notes = JSON.parse(data)

    app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "../public/notes.html")));
    
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));

    app.get("/api/notes", (req, res) => res.JSON(notes));

    app.post("/api/notes", function(req, res){
        let newNotes = req.body;
        notes.push(newNotes);
        updateDb();
        return console.log("You added new note: "+newNotes.title+"to your library.") 
    });
    app.get("/api/notes/:id", (req, res) => res.JSON(notes[req.params.id]));

    app.delete("/api/notes/:id", (req, res) => notes.filter(req.params.id, 1));

})
