const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
const db = require('./db_config')
const PORT = process.env.PORT || 5000;

app.use(express.json());   //middleware..
app.use(express.urlencoded({ extended: true }))
db.dbConfig();

// const connectionParams = {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// }

app.get('/', (req, res) => {
    // res.send("this is a test data...")
    res.json({
        status: 200,
        message: "your server is up and running",
        uri: uri
    })  //http://localhost:8787/
})
app.get('/home', (req, res) => {
    res.json("this is home router")
})  //http://localhost:8787/home

app.listen(PORT, () => {
    console.log(`listening on port number -> ${PORT}`);
})