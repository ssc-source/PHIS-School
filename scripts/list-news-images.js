const fs = require('fs');
const path = require('path');

const imagesPath = path.join(__dirname, '../public/PHIS/images');

console.log('📰 News & Events Images:\n');

if (fs.existsSync(imagesPath)) {
  const files = fs.readdirSync(imagesPath);
  const images = files.filter(file => 
    /\.(jpg|jpeg|png|webp|gif)$/i.test(file) && !file.includes('logo')
  );
  
  console.log(`Found ${images.length} news-related images:\n`);
  
  images.forEach((file, index) => {
    console.log(`${index + 1}. ${file}`);
  });
} else {
  console.log('❌ Images folder not found at:', imagesPath);
}
