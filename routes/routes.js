const fs = require('fs');
const path = require("path");
const store = require('../db/store');
const router = require("express").Router();



        
       router.get("/notes", (rew, res) => {
           store 
            .getNotes()
            .then((notes)=> res.join(notes))
            .catch((err)=> res.status(500).json(err));
       });
           
       router.post("/notes", (req, res) => {
           store
            .addBody(req.body)
            .then((note)=> res.json(notes))
            .catch((err)=> res.status(500).json(err));
       })
        
        router.delete("/notes/:id", (req, res) => {
            store
            .removeNote(req.params.id)
            .then(() => res.json({ ok: true}))
            .catch((err) => res.status(500).json(err));
        });

        
        app.get("/notes", function (req, res) {
                res.sendFile(path.join(__dirname, "../public/notes.html"));
            });

        app.get('*', function (req, res) {
                res.sendFile(path.join(__dirname, "../public/index.html"));
            });

        