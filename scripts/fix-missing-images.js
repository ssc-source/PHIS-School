const https = require('https');
const fs = require('fs');

const missing = [
  {
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1920&q=80',
    local: 'public/images/hero/teachers.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1920&q=80',
    local: 'public/images/hero/admission.jpg'
  }
];

function download(url, dest) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${dest}`);
        resolve();
      });
    }).on('error', () => resolve());
  });
}

async function fix() {
  for (const m of missing) {
    await download(m.url, m.local);
  }
}
fix();
