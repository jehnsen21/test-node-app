import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.post('/orders', async (req: Request, res: Response) => {
  const order = req.body;
  try {

    res.status(201).json({ message: 'Order processed', orderId: order.id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process order' });
  }
});

app.get('/api/orders', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'Order received!'});
});

app.post('/api/orders/create', (_req: Request, res: Response) => {
    const order = _req.body;
  res.status(200).json({ order });
});

export default app;