const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create directories
const dirs = [
  'public/images/hero',
  'public/images/about',
  'public/images/facilities',
  'public/images/programs',
  'public/images/logo',
  'public/images/news'
];

dirs.forEach(dir => {
  const full = path.join(process.cwd(), dir);
  if (!fs.existsSync(full)) {
    fs.mkdirSync(full, { recursive: true });
  }
});

// Download high-resolution educational assets from Unsplash for PHIS
const placeholderImages = [
  {
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80',
    local: 'public/images/hero/school-building.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80',
    local: 'public/images/hero/students-learning.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=1920&q=80',
    local: 'public/images/hero/classroom.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80',
    local: 'public/images/hero/infrastructure.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1577896238860-068405a846f7?w=1920&q=80',
    local: 'public/images/hero/teachers.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=1920&q=80',
    local: 'public/images/hero/activities.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1580582932707-52dc08c79a3c?w=1920&q=80',
    local: 'public/images/hero/admission.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
    local: 'public/images/about/school-campus.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80',
    local: 'public/images/facilities/smart-classroom.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
    local: 'public/images/facilities/science-lab.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&q=80',
    local: 'public/images/facilities/computer-lab.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80',
    local: 'public/images/facilities/library.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=800&q=80',
    local: 'public/images/facilities/sports.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80',
    local: 'public/images/facilities/transport.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    local: 'public/images/programs/pre-primary.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
    local: 'public/images/programs/primary.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
    local: 'public/images/programs/middle.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    local: 'public/images/programs/secondary.jpg'
  }
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const fullPath = path.join(process.cwd(), filepath);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = new URL(redirectUrl, url).toString();
        }
        return downloadImage(redirectUrl, filepath).then(resolve).catch(reject);
      }

      if (res.statusCode !== 200) {
        console.error(`❌ Failed: HTTP ${res.statusCode} for ${filepath}`);
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }

      const file = fs.createWriteStream(fullPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${filepath}`);
        resolve();
      });
    });

    req.on('error', (err) => {
      if (fs.existsSync(fullPath)) fs.unlink(fullPath, () => {});
      console.error(`❌ Error downloading ${filepath}: ${err.message}`);
      reject(err);
    });

    req.setTimeout(25000, () => {
      req.destroy();
      reject(new Error(`Timeout on ${filepath}`));
    });
  });
}

async function downloadAll() {
  console.log('🚀 Downloading PHIS assets to local /public/images/...\n');
  let success = 0;
  for (const img of placeholderImages) {
    try {
      await downloadImage(img.url, img.local);
      success++;
    } catch (e) {
      console.warn(`Failed downloading ${img.local}, continuing...`);
    }
  }
  console.log(`\n🎉 PHIS Asset Download Complete: ${success}/${placeholderImages.length}`);
}

downloadAll();
