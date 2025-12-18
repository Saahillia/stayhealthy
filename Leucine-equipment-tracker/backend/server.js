const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 5000;
const DB_FILE = "./db.json";

app.use(cors());
app.use(express.json());

const readDB = () => JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
const writeDB = (data) =>
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));

    /* GET all equipment */
    app.get("/api/equipment", (req, res) => {
    const db = readDB();
    res.json(db.equipment);
    });

    /* ADD equipment */
    app.post("/api/equipment", (req, res) => {
    const db = readDB();
    const newEquipment = { id: uuidv4(), ...req.body };
    db.equipment.push(newEquipment);
    writeDB(db);
    res.status(201).json(newEquipment);
    });

    /* UPDATE equipment */
    app.put("/api/equipment/:id", (req, res) => {
    const db = readDB();
    const index = db.equipment.findIndex(e => e.id === req.params.id);

    if (index === -1) return res.status(404).json({ error: "Not found" });

    db.equipment[index] = { ...db.equipment[index], ...req.body };
    writeDB(db);
    res.json(db.equipment[index]);
    });

    /* DELETE equipment */
    app.delete("/api/equipment/:id", (req, res) => {
    const db = readDB();
    db.equipment = db.equipment.filter(e => e.id !== req.params.id);
    writeDB(db);
    res.status(204).end();
    });

    app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
    });
