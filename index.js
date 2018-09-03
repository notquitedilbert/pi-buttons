const express = require('express')
const app = express()
const shell = require('shelljs')

app.use(express.static('public'))
//app.get('/', (req, res) => res.send('Hello World!'))

app.get('/test',  (req, res) =>{
    console.log('test ---- ')
    let list = shell.cat('~/pi/index.js');
    res.send(list)
  })



app.listen(3000, () => console.log('Example app listening on port 3000!'))