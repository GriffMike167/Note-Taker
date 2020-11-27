const fs = require('fs');
const path = require('path');


applicationCache.get("/api/notes", function(req, res){
    res.json(notes);
});
