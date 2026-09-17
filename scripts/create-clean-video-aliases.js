const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/PHIS/videos');

const mappings = {
  'science-expo-1.mp4': 'instagram_1789583796404(720p).mp4',
  'science-expo-2.mp4': 'Instagram.mp4',
  'science-expo-3.mp4': 'Instagram(1).mp4',
  'activity-1.mp4': 'Pragya_heritage_international_school___#school_Extra_Activities__#_Saturday_half_class_Activity___Instagram(360p).mp4',
  'sports.mp4': 'Pragya_heritage_international_school___#schoolfootball_Saturday__Half_day_activities___Instagram(480p).mp4',
  'library.mp4': 'Pragya_heritage_international_school___#schoollibrary__Nothing_is_pleasanter_than_exploring_a_library📚📚___Instagram(480p).mp4',
  'garba.mp4': 'Pragya_heritage_international_school___Garba_dance_of_class__7th___10th_girls_Happy_Navratri._#garbaqueen___Instagram(360p).mp4',
  'mothers-day.mp4': 'Pragya_heritage_international_school___Happy_mother_s_day_to_all_mother_s__#pragyaheritageinternationalschool___Instagram(360p).mp4',
  'independence-day.mp4': 'ASHISH___Li_l_Champs_Performance_on_the_occasion_of_Independence_Day_🇮🇳✨_📍Pragya_Heritage_International_School_Gulabbagh,_Purnia__@_pragya_heritage(360p).mp4'
};

Object.entries(mappings).forEach(([cleanName, origName]) => {
  const src = path.join(dir, origName);
  const dest = path.join(dir, cleanName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✅ Created clean alias: ${cleanName}`);
  } else {
    console.log(`⚠️ Original not found: ${origName}`);
  }
});
