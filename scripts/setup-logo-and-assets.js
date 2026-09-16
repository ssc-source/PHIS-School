const fs = require('fs');
const path = require('path');

const srcLogo = path.join(__dirname, '../public/PHIS/images/logo.jpg');
const targets = [
  path.join(__dirname, '../public/PHIS/logo.png'),
  path.join(__dirname, '../public/PHIS/logo.jpg'),
  path.join(__dirname, '../public/PHIS/logo-white.png'),
  path.join(__dirname, '../public/images/logo/pragya-logo.png'),
  path.join(__dirname, '../public/images/logo/pragya-logo-white.png')
];

// Ensure parent directories exist
targets.forEach(target => {
  const dir = path.dirname(target);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (fs.existsSync(srcLogo)) {
    fs.copyFileSync(srcLogo, target);
    console.log('✅ Created:', target);
  }
});

// Also create public/PHIS/videos directory if not exists
const videosDir = path.join(__dirname, '../public/PHIS/videos');
if (!fs.existsSync(videosDir)) {
  fs.mkdirSync(videosDir, { recursive: true });
  console.log('✅ Created videos folder:', videosDir);
}
