const fs = require('fs');
const { get } = require('http');
const path = require('path');


module.exports = app => {

    fs.readFile('db/db.json', 'utf8', (err,data) => {
        if (err) throw err;
            
        


        var notes = JSON.parse(data);

        get.app("/api/notes", function (req, res){
            res.json(notes);
        })

        
        app.post("/api/notes", function(req, res){
            let newNotes = req.body
            notes.push(newNotes);
            updateDb();
            console.log("You added new note: "+newNotes.title+" to your library.") 
            return res.json(newNotes)
            
        });
            app.get("/api/notes/:id", function(req, res) {
            res.json(notes[req.params.id])
          });

       
        
        app.delete("/api/notes/:id", function (req, res) {
            notes.splice(req.params.id, 1);
            updateDB();
            console.log("Deleted note with id "+req.params.id)
        
            });

        
        app.get("/notes", function (req, res) {
                res.sendFile(path.join(__dirname, "../public/notes.html"));
            });

        app.get('*', function (req, res) {
                res.sendFile(path.join(__dirname, "../public/index.html"));
            });

        function updateDb() {
            fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
                if (err) throw err;
                return true;

            });
        };


    });
};