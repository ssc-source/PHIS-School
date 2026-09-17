const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/PHIS/videos');
if (fs.existsSync(dir)) {
  const files = fs.readdirSync(dir);
  console.log('Videos count:', files.length);
  files.forEach((f, i) => {
    console.log(`${i + 1}: ${JSON.stringify(f)}`);
  });
} else {
  console.log('Not found:', dir);
}
