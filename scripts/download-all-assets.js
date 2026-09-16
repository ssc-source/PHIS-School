const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const downloads = [
  // Logos
  {
    url: 'https://resources.edunexttechnologies.com/web-data/sunbeam-group/images/sunbeam-hd-ar-group.png',
    dest: 'public/images/logo/sunbeam-logo.png'
  },
  {
    url: 'https://resources.edunexttechnologies.com/web-data/sunbeam-group/images/sunbeam-hd-group.png',
    dest: 'public/images/logo/sunbeam-crest.png'
  },
  
  // 13 Hero Carousel Slides
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758720002044_DSC05036.JPG',
    dest: 'public/images/hero/protsahan-2025.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758773008092_DSC07026.JPG',
    dest: 'public/images/hero/melody.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758529219209_Side_1.JPG',
    dest: 'public/images/hero/learning-by-doing.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758794826645_1757483414577_BGN_1114.jpg',
    dest: 'public/images/hero/leadership.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758529344806_slider_10.JPG',
    dest: 'public/images/hero/graduates.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758609809411_1757409274659_WhatsApp_Image_20250909_at_2.35.40_PM.jpg',
    dest: 'public/images/hero/marching-band.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1754294710950_Sunbeam_Slider_4.jpg',
    dest: 'public/images/hero/sports.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758609937814_1757305924658_QCTQuality_Circle_Time.jpg',
    dest: 'public/images/hero/qct.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1754294599776_Sunbeam_Slider_1.jpg',
    dest: 'public/images/hero/innovation.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758794730979_1757407229281_sliderindi_1.png',
    dest: 'public/images/hero/little-warriors.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758609885196_1757306060699_Tree_Plantation.jpg',
    dest: 'public/images/hero/sapling.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758522277409_Main.JPG',
    dest: 'public/images/hero/together.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758794864782_1758529534254_swimming_pool.jpg',
    dest: 'public/images/hero/swimming.jpg'
  },

  // Curriculum & Section Backgrounds
  {
    url: 'https://resources.edunexttechnologies.com/web-data/sunbeam-group/sunbeam-sarnath/images/F-Jodo-Gyan.png',
    dest: 'public/images/curriculum/foundational.jpg'
  },
  {
    url: 'https://resources.edunexttechnologies.com/web-data/sunbeam-group/sunbeam-sarnath/images/Agriculture.png',
    dest: 'public/images/curriculum/primary.jpg'
  },
  {
    url: 'https://resources.edunexttechnologies.com/web-data/sunbeam-group/images/Robotics2.jpg',
    dest: 'public/images/curriculum/middle.jpg'
  },
  {
    url: 'https://resources.edunexttechnologies.com/web-data/sunbeam-group/images/ETM.jpg',
    dest: 'public/images/curriculum/senior.jpg'
  },

  // News Highlights
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1781602344330_cmd_sirtimemag.jpeg',
    dest: 'public/images/sections/time-magazine.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/ssa/website_images/1786875851706_youth.jpg',
    dest: 'public/images/sections/youth-debate.jpg'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const fullPath = path.join(process.cwd(), dest);
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
        return downloadFile(redirectUrl, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(fullPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${dest}`);
        resolve();
      });
    });
    req.on('error', (err) => {
      console.error(`✗ Error downloading ${url}:`, err.message);
      reject(err);
    });
  });
}

async function run() {
  console.log(`Starting download of ${downloads.length} authentic assets...`);
  for (const item of downloads) {
    try {
      await downloadFile(item.url, item.dest);
    } catch (e) {
      console.warn(`Could not download ${item.url}, continuing...`);
    }
  }
  console.log('All downloads completed!');
}

run();
