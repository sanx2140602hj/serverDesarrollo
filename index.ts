//import express from "express"
const express = require("express")
const app = express();

const example = function(){ console.log("estoy a la escucha campeon 🦖")}

app.listen(
    9000,
    example
)