const express =require('express')
const env = require('dotenv')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

app.use(bodyParser());

//routes
const userRoutes = require('./routes/user')

// Environment variable or you can say constants
env.config()

// Mongoo db connection 
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.pq1i2.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        }
    ).then(()=>{
        console.log('Data base connected')
    });


app.use('/api', userRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`Server is ruuning on port ${process.env.PORT}`)
})