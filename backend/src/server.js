import express from 'express';
import cors from 'cors';
import filterRouter from './routers/filter.router.js'
import userRouter from './routers/user.router.js'

const app = express();
app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000'],

    })
);

app.use('/api/filters', filterRouter);
app.use('/api/users', userRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})