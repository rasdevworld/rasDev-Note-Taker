const express = require("express")
const path  = require("path")

const PORT = process.env.PORT || 3001

const app =  express()

app.use(express.json())




app.listen(PORT, () => {
    console.log("Application is listening at the PORT: http://localhost:"+PORT+"/")
})