const express = require("express")
const path  = require("path")
const fs = require("fs")

// Assigning the port number
const PORT = process.env.PORT || 3001

// Activating the PORT in the server
const app =  express()

// Parsing the data and converting into an object
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        const newData = JSON.parse(data)
        res.json(newData)
    })
})

app.post("/api/notes", (req, res) => {

})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get("/notes", (req, res) => {
    fs.readFile("./Assets/db/db.json", "utf8", (err, data) => {
        const dbData = JSON.parse(data)
        res.json(dbData)
    })
})

app.listen(PORT, () => {
    console.log("Application is listening at the PORT: http://localhost:"+PORT+"/")
})