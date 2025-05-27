"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const orders_1 = __importDefault(require("./orders"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/test', (req, res) => {
    res.status(200).json({ message: 'Hello from Vercel API!' });
});
app.use('/orders', orders_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map