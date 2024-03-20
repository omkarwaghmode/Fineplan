const connectToMongo = require('./db');
connectToMongo();


const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
//Available  routes 

app.use('/api/auth',require('./Routes/auth'))
// app.get('/', (req, res) => {
//   res.send('Hello Omkar Waghmode!')
// }),

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})