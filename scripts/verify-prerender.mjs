import fs from 'node:fs';

const read = (p) => { try { return fs.readFileSync(p, 'utf8'); } catch { return null; } };

const checks = {
  'dist/index.html': [['RFID Solutions Kenya', true], ['Professional', true], ['RFID</span>', true], ['Solutions', true], ['reveal-visible', true], ['Loading System One', false]],
  'dist/about/index.html': [['About System One Ltd | RFID &amp; Education Technology', true], ['About System One Ltd</h1>', true]],
  'dist/services/index.html': [['RFID &amp; Technology Solutions | Services | System One Ltd', true], ['RFID Solutions &amp; Technology Services</h1>', true]],
  'dist/library-radar/index.html': [['Library Radar | RFID Library Management System in Kenya', true], ['Library Radar</h1>', true], ['Koha', true]],
  'dist/rfid-solutions/library-management/index.html': [['RFID Library Management System in Kenya', true], ['Library Management</h1>', true], ['circulation', true]],
  'dist/rfid-solutions/asset-tracking/index.html': [['RFID Asset Tracking Solutions in Kenya', true], ['Asset Tracking</h1>', true]],
  'dist/hardware-products/index.html': [['RFID Tags, Readers &amp; Security Gates in Kenya', true], ['RFID Hardware Products</h1>', true]],
  'dist/contact/index.html': [['Contact System One | RFID Consultation &amp; Demo in Kenya', true], ['Get In Touch</h1>', true]],
};

let allOk = true;
for (const [f, terms] of Object.entries(checks)) {
  const c = read(f);
  if (c === null) { console.log(`${f} -> MISSING FILE`); allOk = false; continue; }
  const bodyLen = (c.match(/<body>([\s\S]*?)<\/body>/) || [])[1]?.length ?? 0;
  const jsonld = (c.match(/data-seo-jsonld/g) || []).length;
  const res = terms.map(([t, expect]) => `${t}: ${c.includes(t) === expect ? 'OK' : 'FAIL'}`).join(' | ');
  console.log(`${f} | bodyChars:${bodyLen} | jsonld:${jsonld} | ${res}`);
  if (!terms.every(([t, expect]) => c.includes(t) === expect) || bodyLen < 5000) allOk = false;
}
console.log(allOk ? 'ALL CHECKS PASSED' : 'SOME CHECKS FAILED');