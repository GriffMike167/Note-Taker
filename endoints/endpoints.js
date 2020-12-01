const fs = require('fs');
const path = require('path');


module.exports = app => {

    fs.readFile('db/db.json', 'utf8', (err,data) => {
        if (err) throw err;
            
        


        var notes = JSON.parse(data);

        
        
        app.get("/api/notes", function (req, res) {
                res.json(notes);
            });

        app.post("/api/notes", function(req, res){
            let newNotes = req.body;
            notes.push(newNotes);
            updateDb();
            console.log("You added new note: "+newNotes.title+" to your library.") 
            return res.json(newNotes)
        });
        app.get("/api/notes/:id", function (req, res) {
            res.json(notes[req.params.id]);
            console.log(req.params.id)
            return res.json(req.params.id)

            // console.log(chosen);
          
            // for (var i = 0; i < notes.length; i++) {
            //   if (chosen === notes[i].routeName) {
            //     return res.json(notes[i]);
            //   }
            // }
          
            // return res.json(false);
            //     // res.json(notes[req.params.id]);
            });

        app.delete("/api/notes/:id", function (req, res) {
                notes.splice(req.params.id, 1);
                updateDb();
                console.log("You deleted note: "+req.params.id+"from your library.")
                return res.json(notes)
            });
        app.get("/notes", function (req, res) {
                return res.sendFile(path.join(__dirname, "../public/notes.html"));
            });

        app.get('*', function (req, res) {
                return res.sendFile(path.join(__dirname, "../public/index.html"));
            });

        function updateDb() {
            fs.writeFile("db/db.json", JSON.stringify(notes), err => {
                if (err) throw err;
                return true;

            });
        };


    });
};