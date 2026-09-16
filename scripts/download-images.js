const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const directories = [
  'public/images/logo',
  'public/images/hero',
  'public/images/curriculum',
  'public/images/sections',
  'public/images/schools'
];

directories.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

async function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = new URL(redirectUrl, url).toString();
        }
        return downloadImage(redirectUrl, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    });
    req.on('error', reject);
    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error(`Timeout downloading ${url}`));
    });
  });
}

async function main() {
  console.log('Scraping sunbeamschools.com for images...');
  try {
    const html = await fetchHtml('https://www.sunbeamschools.com/');
    console.log('HTML length:', html.length);

    // Find all images matching regex
    const imgRegex = /src=["']([^"']+\.(?:jpg|jpeg|png|webp|svg))["']/gi;
    let match;
    const images = new Set();
    while ((match = imgRegex.exec(html)) !== null) {
      images.add(match[1]);
    }
    console.log('Found image links in HTML:', Array.from(images).slice(0, 30));
  } catch (err) {
    console.error('Error fetching HTML:', err.message);
  }
}

main();
