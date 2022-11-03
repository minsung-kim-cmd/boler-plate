//express 모듈을 가져와서 그 함수로 app 설정
const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://minsung:1q2w3e4r5t@cluster0.acmkcyu.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("MongoDB Connect"))
.catch(err => console.log)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {console.log(`Example app listening on port ${port}`)})