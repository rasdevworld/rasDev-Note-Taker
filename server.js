const express = require("express")
const path  = require("path")
const fs = require("fs")

// Assigning the port number
const PORT = process.env.PORT || 3001

// Activating the PORT in the server
const app =  express()
const route = require("./routes")

// Parsing the data and converting into an object
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static("public"))

// http://localhost:3001/api
app.use("/api",route)

// HTML routes
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})




app.listen(PORT, () => {
    console.log("Application is listening at the PORT: http://localhost:"+PORT)
})