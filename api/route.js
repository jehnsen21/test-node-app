"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/orders/create', async (req, res) => {
    const order = req.body;
    try {
        res.status(201).json({ message: 'Order processed', orderId: order.id });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to process order' });
    }
});
exports.default = app;
//# sourceMappingURL=route.js.map