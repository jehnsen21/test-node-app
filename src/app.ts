import express, { Request, Response } from 'express';
// import { sendOrderMessage } from './serviceBus';
// import { saveOrder } from './cosmosDB';

const app = express();

app.use(express.json());

app.post('/orders', async (req: Request, res: Response) => {
  const order = req.body;
  try {
    // await saveOrder(order); // Save to Cosmos DB
    // await sendOrderMessage(order); // Send to Service Bus
    res.status(201).json({ message: 'Order processed', orderId: order.id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process order' });
  }
});

app.get('/orders', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'Order received!'});
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');        
});

export default app;