import { execSync } from 'node:child_process';

const result = String(execSync('node cramer_v2.js 2 3 18 4 -5 -8')).trim().replace('/\n/g', ' ');

console.assert(result === '3 4', 'НЕУДАЧА!');