const express = require('express')
const app = express()
const port = 3000

const pdfParser = require('../lib/pdf-parser')

app.get('/', (req: any, res: any) => {
  res.send('Hello World! ABC')

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

