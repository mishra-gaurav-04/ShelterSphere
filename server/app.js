const express =  require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/init_db');
const createError = require('http-errors');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const listingRoutes = require('./routes/listing.routes');

const app = express();

dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(cors(
    {
        origin : [process.env.CLIENT_URL],
        credentials : true
    }
));

app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/listing',listingRoutes);
app.use('/api/v1/user',userRoutes);

app.use(async(req,res,next) => {
    next(createError.NotFound());
})

app.use(async(err,req,res,next) => {
    res.status(err.status || 500).json({
        status : err.status || 500,
        message : err.message
    })
})

const startServer = () => {
    connectDB(MONGODB_URI)
    .then((conn) => {
        console.log('Database Connected')
        app.listen(PORT,() => {
            console.log(`Server Started :: ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })
}

startServer();
