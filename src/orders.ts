import { Request, Response, Router } from "express";

const router = Router();

router.get('/orders', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Orders from Vercel received!' });
});

export default router;