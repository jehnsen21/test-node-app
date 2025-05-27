// api/index.ts
import { VercelRequest, VercelResponse } from '@vercel/node';
import app from '../src/app';
import { createServer } from 'http';
import { parse } from 'url';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const server = createServer(app);
  server.emit('request', req, res);
}
