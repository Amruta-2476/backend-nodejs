const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
const db = require('./db_config')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000;
// controller import 
const userRouter = require('./controller/user.controller')
const blogRouter = require('./controller/blogs.controller')

app.use(bodyParser.json());
// app.use(express.json()); // middleware...
app.use(express.urlencoded({extended:true}))
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
        // uri: uri
    })  //http://localhost:8787/
})



app.use('/api/v1/users', userRouter) //endpoint
// app.use('/api/v1/orders')
// app.use('/api/v1/employees')
app.use('/api/v1/blogs', blogRouter)
// app.use('/api/v1/post')

// app.get('/home', (req, res) => {
//     res.json("this is home router")
// })  //http://localhost:8787/home

app.listen(PORT, () => {
    console.log(`listening on port number -> ${PORT}`);
})

// http://localhost:8787/api/v1/users/createuser
// http://localhost:8787/api/v1/users/
// http://localhost:8787/api/v1/users/update
// http://localhost:8787/api/v1/users/delete
// http://localhost:8787/api/v1/users/findone
// http://localhost:8787/api/v1/users/deleteall
// http://localhost:8787/api/v1/users/findactiveuser



// users

// create user
// findall
// update
// delete
// find one
// delete all
// find active users

