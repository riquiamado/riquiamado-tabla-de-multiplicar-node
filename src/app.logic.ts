import fs from 'node:fs';
import { yarg } from './config/plugins/yarg';

console.log(yarg);
const baseNumber: number = yarg.b;
const numMax: number = yarg.h;
const exists = yarg.l;
let outputMessage: string = '';
const base = baseNumber;

const headerMessage = `
=============================================
             tabla del${base}
=============================================\n
`;

for (let i = 1; i <= numMax; i++) {
  outputMessage += `${base} * ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;
if (exists) console.log(outputMessage);

const outPath = 'outputs/';

 ;
fs.mkdirSync(outPath, { recursive: true });
fs.writeFileSync(`${outPath}/tabla-${base}.txt`, outputMessage);
