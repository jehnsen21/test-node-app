"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/orders', (req, res) => {
    res.status(200).json({ message: 'Orders from Vercel received!' });
});
exports.default = router;
//# sourceMappingURL=orders.js.map