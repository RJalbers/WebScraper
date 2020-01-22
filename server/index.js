const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type")
    next()
});


app.get('/creators', async (req, res) => {

})

app.post('/creators', async (req, res) => {
console.log(req.body)
//todo: Scrape channel
//todo: Add to DB
res.send('success')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))