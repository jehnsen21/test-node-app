import express, { Request, Response } from 'express';
import ordersRouter from '../src/orders';

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.get('/test', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello from Vercel API!' });
});

app.get('/users', (req: Request, res: Response) => {
  res.status(200).json({ users: 'Tony Stark, Steve Rogers, Peter Parker' });
});

app.use('/orders', ordersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});