import { execSync } from 'node:child_process';

const FILE_NAME = 'primeNumbers.js';
const TESTED_VALUE = 100;
const EXPECTED_RESULT = 25;
const REGEX = / \d+\.$/;

const scriptResult = String(execSync(`node ${FILE_NAME} ${TESTED_VALUE}`)).trim();
const matches = scriptResult.match(REGEX);
if (matches) {
    const scriptResultNum = Number(matches[0].trim().slice(0, -1));
    console.assert(scriptResultNum === EXPECTED_RESULT, 'НЕУДАЧА!');
}


