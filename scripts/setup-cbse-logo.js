const fs = require('fs');
const path = require('path');

const srcCbse = path.join(__dirname, '../public/PHIS/images/CBSE_new_logo.svg.webp');
const dest1 = path.join(__dirname, '../public/PHIS/images/cbse-logo.png');
const dest2 = path.join(__dirname, '../public/PHIS/images/cbse-logo.webp');
const dest3 = path.join(__dirname, '../public/PHIS/cbse-logo.png');

if (fs.existsSync(srcCbse)) {
  fs.copyFileSync(srcCbse, dest1);
  fs.copyFileSync(srcCbse, dest2);
  fs.copyFileSync(srcCbse, dest3);
  console.log('✅ CBSE logo copies created successfully!');
} else {
  console.log('❌ Source CBSE logo not found:', srcCbse);
}
