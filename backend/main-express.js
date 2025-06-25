const express = require("express");
const Listing = require("./model.js");
const cors = require("cors");
const PORT = 3000;
const mongoose = require("mongoose");

function main(){
    const app = express();

    //PETS HANDLING

    app.get("/pets", async (req, res) => {
        try {
            const result = await Listing.find({});
            res.json(result);
        } catch (error){
            res.status(500).send({error: "Database error"});
        }
    });

    app.post("/pets", async (req, res) => {
        const data = req.body;

        if (typeof data == 'undefined'){
            res.status(400).send({error: "No data provided"});
        } console.log("The client sent over a JSON");
        if (result) {
            res.json(result);
        } else{
            res.status(500).send({error: "Failed to post pet"});
            return;
        }
        res.status(201).send(data);
    });

        //APPLICATIONS HANDLING

    app.get("/applications", async (req, res) => {
        try {
            const result = await Listing.find({});
            res.json(result);
        } catch (error){
            res.status(500).send({error: "Database error"});
        }
    });

    app.post("/applications", async (req, res) => {
        const data = req.body;

        if (typeof data == 'undefined'){
            res.status(400).send({error: "No data provided"});
        } console.log("The client sent over a JSON");
        if (result) {
            res.json(result);
        } else{
            res.status(500).send({error: "Failed to post pet"});
            return;
        }
        res.status(201).send(data);
    });

    app.listen(PORT, () => {
        console.log(`Server listening at http://localhost:${PORT}/`);
    })
}

main();