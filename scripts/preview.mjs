import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { basePath } from '../site-config.mjs';

const root = resolve('out');
const port = Number(process.env.PORT || 3000);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.txt': 'text/plain; charset=utf-8', '.md': 'text/markdown; charset=utf-8', '.xml': 'application/xml' };
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (basePath && pathname !== basePath && !pathname.startsWith(basePath + '/')) throw new Error('Not found');
    const relative = pathname.slice(basePath.length);
    let file = resolve(root, '.' + relative);
    if (file !== root && !file.startsWith(root + sep)) throw new Error('Not found');
    if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(await readFile(resolve(root, '404.html')).catch(() => 'Not found'));
  }
}).listen(port, '127.0.0.1', () => console.log(`Preview: http://localhost:${port}${basePath}/`));
