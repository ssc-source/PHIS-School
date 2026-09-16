const https = require('https');

function getUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function findImages() {
  const pages = [
    'https://www.sunbeamschools.com/',
    'https://www.sunbeamschools.com/how-to-reach-us.php',
    'https://www.sunbeamschools.com/Admission/admissionassistance'
  ];

  const allImages = new Set();
  for (const p of pages) {
    try {
      const html = await getUrl(p);
      const matches = html.match(/(https?:\/\/[^"'\s)]+\.(?:jpg|jpeg|png|webp|svg))/gi) || [];
      matches.forEach(m => allImages.add(m));
    } catch (e) {
      console.error(e.message);
    }
  }

  console.log('Total extracted URLs:', allImages.size);
  console.log(JSON.stringify(Array.from(allImages), null, 2));
}

findImages();
