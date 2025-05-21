import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3200;

app.get('/api/test', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Express + TypeScript!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
