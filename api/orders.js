"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ordersRouter = (0, express_1.Router)();
ordersRouter.get('/', (req, res) => {
    res.status(200).json({ message: 'Orders from Vercel received!' });
});
exports.default = ordersRouter;
//# sourceMappingURL=orders.js.map