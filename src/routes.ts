import express, { Request, Response } from 'express'
import { sendOrderMessage } from './serviceBus'

const orderRouter = express.Router()

orderRouter.post('/create', async (req: Request, res: Response) => {
    const order = req.body
    console.log("request", req.body)
    await sendOrderMessage(order)
    res.status(201).json({ message: 'Order message sent to Service Bus' })
})

export default orderRouter