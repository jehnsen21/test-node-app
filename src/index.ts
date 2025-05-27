import express, { Request, Response } from 'express';

import ordersRouter from './orders';

const app = express();
app.use(express.json());

app.get('/test', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello from Vercel API!' });
});

app.use('/orders', ordersRouter);


export default app;