const fs = require('fs');
const path = require('path');


module.exports = app => {

    fs.readFile('db/db.json', 'utf8', (err,data) => {
        if (err){
            return console.log(err);
        }


        var notes = JSON.parse(data)

        
        
        app.get("/api/notes", (req, res) => res.JSON(notes));

        app.post("/api/notes", function(req, res){
            let newNotes = req.body;
            notes.push(newNotes);
            updateDb();
            return console.log("You added new note: "+newNotes.title+"to your library.") 
        });
        app.get("/api/notes/:id", (req, res) => res.JSON(notes[req.params.id]));

        app.delete("/api/notes/:id", function (req, res) {
                notes.filter(req.params.id, 1);
                updateDb();
                console.log("You deleted note: "+newNotes.title+"from your library.")
            });
        app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "../public/notes.html")));

        app.get('*', (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));

        function updateDb() {
            fs.writeFile("db/db.json", JSON.stringify(notes), err => {
                if (err) throw err;
                return true;

            });
        }


    });
};