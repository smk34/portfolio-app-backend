//require('dotenv').config()

//const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
const cors = require('cors');
const tableDataRoute = require('./routes/tableData');

// //DB Connection
// mongoose.connect(process.env.DATABASE, { 
//     useNewUrlParser: true,  
//     useUnifiedTopology: true,
//     useCreateIndex: true  
// }).then(() => {
//     console.log("DB CONNECTED")
// }).catch(err => {
//     console.log("DB ERROR: ",err);
// })


//PORT
const port = process.env.PORT || 8000;

//Middlewares
app.use(bodyParser.json());
app.use(cors());


//Route
app.use('/api', tableDataRoute)


//Starting a Server
app.listen(port, () =>{
    console.log(`app is running at ${port}`)
})