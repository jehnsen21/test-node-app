import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.post('/orders/create', async (req: Request, res: Response) => {
  const order = req.body;
  try {

    res.status(201).json({ message: 'Order processed', orderId: order.id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process order' });
  }
});

export default app;