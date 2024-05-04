if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
};

const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit');
const apiLimiter = rateLimit({
    windowMs : 15 * 60 * 1000, // ! 15 minutes
    max : 100 
});
const cors = require('cors');

const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';


// ! Database Connection
const dbConnect = require('./config/dbConnect');
dbConnect();

const userRouter = require('./routes/userRoutes');
const converterRouter = require('./routes/converterRoutes');
const errorHandler = require('./middlewares/errorHandler');

// ! Middlewares
app.use(cors());
app.use(express.json());
app.use(apiLimiter);



// ! Router
app.use('/api/v1/user',userRouter);
app.use('/api/v1/converter',converterRouter);


// ! Error Handler
app.use(errorHandler);


// ! Server Creation
app.listen(PORT,HOSTNAME,()=>{
    console.log(`Server is running successfully on ${HOSTNAME}:${PORT}`);
})
