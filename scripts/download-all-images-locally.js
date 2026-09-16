const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const directories = [
  'public/images/hero',
  'public/images/curriculum',
  'public/images/sections',
  'public/images/schools',
  'public/images/colleges',
  'public/images/logo',
  'public/images/news',
  'public/images/backgrounds'
];

directories.forEach(dir => {
  const full = path.join(process.cwd(), dir);
  if (!fs.existsSync(full)) {
    fs.mkdirSync(full, { recursive: true });
  }
});

// Complete list of ALL authentic images to download with exact local destinations
const imagesToDownload = [
  // 1. LOGOS
  {
    url: 'https://resources.edunexttechnologies.com/web-data/sunbeam-group/images/sunbeam-hd-ar-group.png',
    local: 'public/images/logo/sunbeam-logo.png'
  },
  {
    url: 'https://resources.edunexttechnologies.com/web-data/sunbeam-group/images/sunbeam-hd-group.png',
    local: 'public/images/logo/sunbeam-logo-white.png'
  },
  {
    url: 'https://resources.edunexttechnologies.com/web-data/sunbeam-group/images/sunbeam-ft-logo.png',
    local: 'public/images/logo/sunbeam-footer-logo.png'
  },

  // 2. HERO CAROUSEL (13 slides)
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758720002044_DSC05036.JPG',
    local: 'public/images/hero/protsahan-2025.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758773008092_DSC07026.JPG',
    local: 'public/images/hero/melody.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758529219209_Side_1.JPG',
    local: 'public/images/hero/learning-by-doing.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758794826645_1757483414577_BGN_1114.jpg',
    local: 'public/images/hero/leadership.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758529344806_slider_10.JPG',
    local: 'public/images/hero/graduates.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758609809411_1757409274659_WhatsApp_Image_20250909_at_2.35.40_PM.jpg',
    local: 'public/images/hero/marching-band.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1754294710950_Sunbeam_Slider_4.jpg',
    local: 'public/images/hero/sports.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758609937814_1757305924658_QCTQuality_Circle_Time.jpg',
    local: 'public/images/hero/qct.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1754294599776_Sunbeam_Slider_1.jpg',
    local: 'public/images/hero/innovation.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758794730979_1757407229281_sliderindi_1.png',
    local: 'public/images/hero/little-warriors.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758609885196_1757306060699_Tree_Plantation.jpg',
    local: 'public/images/hero/sapling.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758522277409_Main.JPG',
    local: 'public/images/hero/together.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1758794864782_1758529534254_swimming_pool.jpg',
    local: 'public/images/hero/swimming.jpg'
  },

  // 3. CURRICULUM (4 stages)
  {
    url: 'https://resources.edunexttechnologies.com/web-data/sunbeam-group/sunbeam-sarnath/images/F-Jodo-Gyan.png',
    local: 'public/images/curriculum/foundational.jpg'
  },
  {
    url: 'https://resources.edunexttechnologies.com/web-data/sunbeam-group/sunbeam-sarnath/images/Agriculture.png',
    local: 'public/images/curriculum/primary.jpg'
  },
  {
    url: 'https://resources.edunexttechnologies.com/web-data/sunbeam-group/images/Robotics2.jpg',
    local: 'public/images/curriculum/middle.jpg'
  },
  {
    url: 'https://resources.edunexttechnologies.com/web-data/sunbeam-group/images/ETM.jpg',
    local: 'public/images/curriculum/senior.jpg'
  },

  // 4. SCHOOLS (9 schools)
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1760441473412_7.jpg',
    local: 'public/images/schools/annapurna.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1760441558222_22.jpg',
    local: 'public/images/schools/bhagwanpur.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1760441627753_5.jpg',
    local: 'public/images/schools/indiranagar.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1760442173067_4.jpg',
    local: 'public/images/schools/lahartara.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1760442297049_24.jpg',
    local: 'public/images/schools/suncity.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1760444042569_1.jpg',
    local: 'public/images/schools/varuna.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1760444100770_14.jpg',
    local: 'public/images/schools/sarnath.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1760444136152_3.jpg',
    local: 'public/images/schools/international-varuna.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1760444189974_11.jpg',
    local: 'public/images/schools/gramin-karsana.jpg'
  },

  // 5. COLLEGES (2 colleges)
  {
    url: 'https://resources.edunexttechnologies.com/web-data/sunbeam-group/images/sv-college.JPG',
    local: 'public/images/colleges/college-bhagwanpur.jpg'
  },
  {
    url: 'https://resources.edunexttechnologies.com/web-data/sunbeam-group/images/women-college-varuna-new.jpg',
    local: 'public/images/colleges/college-varuna.jpg'
  },

  // 6. NEWS & SECTIONS
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/sunbeamgroup/school___static/1781602344330_cmd_sirtimemag.jpeg',
    local: 'public/images/news/trailblazers-time.jpg'
  },
  {
    url: 'https://edunext-main-storage-cf.edunexttechnologies.com/ssa/website_images/1786875851706_youth.jpg',
    local: 'public/images/news/youth-debate.jpg'
  }
];

// Download function with redirect support
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const fullPath = path.join(process.cwd(), filepath);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const protocol = url.startsWith('https') ? https : http;
    const req = protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = new URL(redirectUrl, url).toString();
        }
        return downloadImage(redirectUrl, filepath).then(resolve).catch(reject);
      }

      if (res.statusCode !== 200) {
        console.error(`❌ Failed to download ${filepath}: HTTP ${res.statusCode}`);
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
      if (fs.existsSync(fullPath)) {
        fs.unlink(fullPath, () => {});
      }
      console.error(`❌ Error downloading ${filepath}: ${err.message}`);
      reject(err);
    });

    req.setTimeout(20000, () => {
      req.destroy();
      reject(new Error(`Timeout downloading ${filepath}`));
    });
  });
}

// Download all images locally
async function downloadAllImages() {
  console.log('🚀 Starting image download to local /public/images/ directory...\n');

  let success = 0;
  let failed = 0;

  for (const image of imagesToDownload) {
    try {
      await downloadImage(image.url, image.local);
      success++;
    } catch (error) {
      failed++;
    }
  }

  console.log(`\n🎉 Image Download Process Complete!`);
  console.log(`✅ Success: ${success}/${imagesToDownload.length}`);
  console.log(`❌ Failed: ${failed}/${imagesToDownload.length}`);
}

downloadAllImages();
