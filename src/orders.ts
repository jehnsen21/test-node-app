import { Request, Response, Router } from "express";

const ordersRouter = Router();

ordersRouter.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Orders from Vercel received!' });
});

export default ordersRouter;