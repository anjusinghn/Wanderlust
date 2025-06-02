const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/" ,(req,res) => {
    res.send("Hi I am root");
});

app.get("/testlisting", async (req,res) => {
    let samplelisting = new Listing({
        title : "My new villa",
        description: "By the beach",
        price: 1000000,
        location: "Goa",
        country: "India",
    });

    await samplelisting.save();
    console.log("sample was saved");
    res.send("Successful Testing");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
