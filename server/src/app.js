import express from 'express';
import cors from 'cors';
import cookies from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';


const app = express();

app.use(cors());
app.use(express.json());
app.use(cookies());

app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
    res.json({message: 'Hello from the server!'});
});

export default app;
