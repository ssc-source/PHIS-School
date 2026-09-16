const fs = require('fs');
const path = require('path');

const srcGallery = path.join(__dirname, '../public/PHIS/gallary');
const destGallery = path.join(__dirname, '../public/PHIS/gallery');

if (!fs.existsSync(destGallery)) {
  fs.mkdirSync(destGallery, { recursive: true });
}

if (fs.existsSync(srcGallery)) {
  const files = fs.readdirSync(srcGallery);
  files.forEach(file => {
    fs.copyFileSync(path.join(srcGallery, file), path.join(destGallery, file));
  });
}

// Also include event photos from public/PHIS/images if any
const imagesPath = path.join(__dirname, '../public/PHIS/images');
if (fs.existsSync(imagesPath)) {
  const imgFiles = fs.readdirSync(imagesPath);
  imgFiles.forEach(file => {
    if (/\.(jpg|jpeg|png|webp)$/i.test(file) && !file.includes('logo')) {
      fs.copyFileSync(path.join(imagesPath, file), path.join(destGallery, file));
    }
  });
}

console.log('📸 Gallery Images:\n');

if (fs.existsSync(destGallery)) {
  const files = fs.readdirSync(destGallery);
  const images = files.filter(file => 
    /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
  );
  
  console.log(`Found ${images.length} images:\n`);
  
  images.forEach((file, index) => {
    console.log(`${index + 1}. ${file}`);
  });
  
  console.log('\n\n📋 Copy this for gallery/page.jsx:\n');
  console.log('const imageFiles = [');
  images.forEach(file => {
    console.log(`  '${file}',`);
  });
  console.log(']');
} else {
  console.log('❌ Gallery folder not found at:', destGallery);
}
