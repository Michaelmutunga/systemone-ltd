import fs from 'node:fs';

const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

let pass = 0;
let fail = 0;
for (const url of urls) {
  try {
    const res = await fetch(url, { redirect: 'follow' });
    const html = await res.text();
    const title = (html.match(/<title>(.*?)<\/title>/) || [])[1] || '(none)';
    const h1 = (html.match(/<h1[^>]*>(.*?)<\/h1>/) || [])[1]?.replace(/<[^>]+>/g, '') || '(none)';
    const bodyChars = (html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ')).trim().length;
    const hasLoading = html.includes('Loading System One');
    const ok = bodyChars > 2000 && !hasLoading;
    if (ok) { pass++; } else { fail++; }
    console.log(`${ok ? 'PASS' : 'FAIL'} | ${url} | ${res.status} | title="${title}" | h1="${h1}" | bodyChars=${bodyChars}`);
  } catch (e) {
    fail++;
    console.log(`ERROR | ${url} | ${e.message}`);
  }
}
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail > 0 ? 1 : 0);