// รวมไฟล์ใน src/ เป็นหน้าเดียว dist/index.html (ใช้เผยแพร่เป็น Artifact หรือเปิดในเครื่อง)
// ใช้: node build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const read = (f) => fs.readFileSync(path.join(root, f), 'utf8');

// ลำดับสำคัญ: logic → data → vocab-model → ui
const scripts = [
  'src/app/logic.js',
  'src/data/grammar-1-pos.js',
  'src/data/grammar-2-tense.js',
  'src/data/grammar-3-sentence.js',
  'src/data/grammar-4-det.js',
  'src/data/grammar-5-prep.js',
  'src/data/grammar-6-academic.js',
  'src/data/vocab-a1.js',
  'src/data/vocab-a2.js',
  'src/data/vocab-b1.js',
  'src/data/vocab-b2.js',
  'src/data/examvocab-trip-01.js',
  'src/data/examvocab-trip-02.js',
  'src/data/examvocab-trip-03.js',
  'src/data/examvocab-trip-04.js',
  'src/data/examvocab-trip-05.js',
  'src/data/examvocab-trip-06.js',
  'src/data/examvocab-trip-07.js',
  'src/data/examvocab-trip-08.js',
  'src/data/examvocab-trip-09.js',
  'src/data/examvocab-trip-10.js',
  'src/data/examvocab-trip-11.js',
  'src/data/examvocab-trip-12.js',
  'src/data/examvocab-trip-13.js',
  'src/data/examvocab-trip-14.js',
  'src/data/examvocab-trip-15.js',
  'src/data/examvocab-trip-16.js',
  'src/data/examvocab-trip-17.js',
  'src/data/reading.js',
  'src/app/vocab-model.js',
  'src/app/ui.js'
];

const template = read('src/index.template.html');
let html = template.replace('<!--CONFIG-->', '');
html = html.replace('/*STYLES*/', () => read('src/styles.css'));
html = html.replace('<!--SCRIPTS-->', () => scripts.map((f) => `<script>/* ${f} */\n${read(f).replace(/<\/script/gi, '<\\/script')}\n</script>`).join('\n'));

fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
fs.writeFileSync(path.join(root, 'dist/index.html'), html);

// ไฟล์สำหรับเปิดในเครื่องโดยไม่ต้องรวม: ใช้ src/dev.html
const dev = template.replace('<!--CONFIG-->', '')
  .replace('/*STYLES*/', '')
  .replace('<style>\n\n</style>', '<link rel="stylesheet" href="styles.css">')
  .replace('<!--SCRIPTS-->', scripts.map((f) => `<script src="${f.replace('src/', '')}"></script>`).join('\n'));
fs.writeFileSync(path.join(root, 'src/dev.html'), '<!doctype html><html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n' + dev.replace('<div class="wrap">', '</head><body>\n<div class="wrap">') + '\n</body></html>');

console.log('built dist/index.html (' + Math.round(html.length / 1024) + ' KB) และ src/dev.html');

// เวอร์ชันสำหรับ GitHub Pages: เหมือน dist แต่โหลด config.js (ที่อยู่ Web app ของ Google Sheet)
const site = path.join(root, 'docs'); // GitHub Pages: Settings → Pages → main / docs
fs.mkdirSync(path.join(site, 'apps-script'), { recursive: true });
const siteHtml = template.replace('<!--CONFIG-->', '<script src="config.js"></script>')
  .replace('/*STYLES*/', () => read('src/styles.css'))
  .replace('<!--SCRIPTS-->', () => scripts.map((f) => `<script>/* ${f} */\n${read(f).replace(/<\/script/gi, '<\\/script')}\n</script>`).join('\n'));
fs.writeFileSync(path.join(site, 'index.html'), '<!doctype html><html lang="th"><head><meta charset="utf-8">\n' + siteHtml.replace('<div class="wrap">', '</head><body>\n<div class="wrap">') + '\n</body></html>');
const cfgPath = path.join(site, 'config.js');
if (!fs.existsSync(cfgPath) || process.argv.includes('--reset-config')) {
  fs.writeFileSync(cfgPath, "// วางที่อยู่ Web app จาก Google Apps Script ระหว่างเครื่องหมาย ' ' แล้วบันทึก\n// ตัวอย่าง: scoreEndpoint: 'https://script.google.com/macros/s/xxxxxxxx/exec'\n// ถ้าเว้นว่าง เว็บจะเก็บคะแนนเฉพาะในเครื่องของแต่ละคน\nwindow.EP_CONFIG = {\n  scoreEndpoint: ''\n};\n");
}
fs.copyFileSync(path.join(root, 'apps-script/Code.gs'), path.join(site, 'apps-script/Code.gs'));
fs.writeFileSync(path.join(site, '.nojekyll'), '');
console.log('built docs/ (GitHub Pages)');
