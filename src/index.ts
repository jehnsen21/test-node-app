import express, { Request, Response } from 'express';

const app = express();
app.use(express.json()); // Express 5 built-in JSON parser

app.get('/test', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello from Vercel API!' });
});


export default app;