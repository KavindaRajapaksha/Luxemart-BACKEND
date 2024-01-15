import express from 'express';
import cors from 'cors';
import morgan from 'morgan';// for logging
import dotenv from 'dotenv';
import router from './routes/route.js';    


const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.disable('x-powered-by');

const PORT= process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.status(201).json("Home Get request");
});


//midleware
app.use('/api', router);




app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})