import express, { Request, Response } from 'express';
import 'dotenv/config';
import orderRouter from '../src/routes';

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/api/test', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Express + TypeScript!! Runnign on PORT ' + port });
});

// app.use('/order', orderRouter);

app.use('/order', orderRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
