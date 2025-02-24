import { bench, run } from 'mitata';
import { hash, createHash } from 'node:crypto';

const data = 'Hello, World!';
const algorithm = 'sha256';

// Функция с использованием crypto.hash (Node.js 20+)
async function hashFunction() {
  await hash(algorithm, Buffer.from(data));
}

// Функция с использованием createHash
function createHashFunction() {
  createHash(algorithm).update(data).digest('hex');
}

bench('crypto.hash', async () => {
  await hashFunction();
});

bench('crypto.createHash', () => {
  createHashFunction();
});

await run();
