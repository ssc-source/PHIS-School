const fs = require('fs');
const path = require('path');

const unusedComponents = [
  'components/homepage/CurriculumSection.jsx',
  'components/homepage/FutureReadySection.jsx',
  'components/homepage/PedagogySection.jsx',
  'components/homepage/ReflectSection.jsx',
  'components/homepage/SchoolsGrid.jsx',
  'components/homepage/ThriveSection.jsx'
];

unusedComponents.forEach(relPath => {
  const fullPath = path.join(__dirname, '..', relPath);
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
    console.log('🗑️ Deleted unused component:', relPath);
  }
});
