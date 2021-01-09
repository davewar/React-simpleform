const express  = require('express')

const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config();


app.use(bodyParser.json())
app.use(cors());


// require routes

app.use("/", require('./routes/noteRoute'))

// connect to db
 mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true} ,()=>{
        console.log("connected");
})

const PORT = 5000
app.listen(PORT,function(){
  console.log("express on");
})

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  console.log('Closing http server.');
  server.close(() => {
    console.log('Http server closed.');
    // boolean means [force], see in mongoose doc
    mongoose.connection.close(false, () => {
      console.log('MongoDb connection closed.');
    });
  });
});