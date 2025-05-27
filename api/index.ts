import express, { Request, Response } from 'express';

const app = express();
app.use(express.json()); // Express 5 built-in JSON parser

app.get('/api/test', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello from Vercel API!' });
});

app.get('/api/orders', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello from Vercel API!' });
});

export default app;