const express = require("express");
const { Pet, Application } = require("./model.js");
const cors = require("cors");
const PORT = 3000;
const mongoose = require("mongoose");

function main(){
    const app = express();

    app.use(express.json());
    app.use(cors());

    app.get("/pets", async (req, res) => {
        try {
            const result = await Pet.find({});
            res.json(result);
        } catch (error){
            console.error("Database error:", error);
            res.status(500).send({error: "Database error"});
        }
    });

    app.post("/pets", async (req, res) => {
        try {
            const data = req.body;

            if (!data || Object.keys(data).length === 0) {
                return res.status(400).send({error: "No data provided"});
            }
            
            console.log("The client sent over a JSON");
            
            const newPet = new Pet(data);
            const result = await newPet.save();
            
            res.status(201).json(result);
        } catch (error) {
            console.error("Error creating pet:", error);
            res.status(500).send({error: "Failed to post pet"});
        }
    });

    app.get("/applications", async (req, res) => {
        try {
            const result = await Application.find({});
            res.json(result);
        } catch (error) {
            console.error("Database error:", error);
            res.status(500).send({error: "Database error"});
        }
    });

    app.post("/applications", async (req, res) => {
        try {
            const data = req.body;

            if (!data || Object.keys(data).length === 0) {
                return res.status(400).send({error: "No data provided"});
            }
            
            console.log("The client sent over a JSON");
            
            const newApplication = new Application(data);
            const result = await newApplication.save();
            
            res.status(201).json(result);
        } catch (error) {
            console.error("Error creating application:", error);
            res.status(500).send({error: "Failed to post application"});
        }
    });
    
    app.listen(PORT, () => {
        console.log(`Server listening at http://localhost:${PORT}/`);
    })
}

main();
