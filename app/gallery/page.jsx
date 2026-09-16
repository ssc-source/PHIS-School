'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { X, ZoomIn, Camera, Sparkles, Filter } from 'lucide-react';

const imageFiles = [
  { file: 'Gate-main.png', title: 'Main School Campus & Gate', category: 'campus' },
  { file: 'morning-assembly.png', title: 'Morning Prayer & Assembly', category: 'activities' },
  { file: 'yoga-day.png', title: 'International Yoga Day Celebration', category: 'sports' },
  { file: 'indipendence-day.png', title: 'Independence Day Celebrations', category: 'events' },
  { file: 'holi-celebration.png', title: 'Cultural Fest & Holi Celebration', category: 'events' },
  { file: 'result-cbse-10.png', title: 'CBSE Class 10 Board Toppers', category: 'academics' },
  { file: 'captains.png', title: 'Student Council & School Captains', category: 'activities' },
  { file: 'girls-captain.png', title: 'Head Girl & Student Leaders', category: 'activities' },
  { file: 'cocuriculer-activity.png', title: 'Co-Curricular Workshops', category: 'activities' },
  { file: 'fun with color.png', title: 'Art & Fun with Color', category: 'activities' },
  { file: 'kids-art-gallary.png', title: 'Junior Creative Art Gallery', category: 'academics' },
  { file: 'kids-art.png', title: 'Creative Drawing & Painting', category: 'academics' },
  { file: 'mg-jayanti.png', title: 'Mahatma Gandhi Jayanti Tribute', category: 'events' },
  { file: 'phis-using-ballons.png', title: 'Kindergarten Activity Day', category: 'activities' },
  { file: 'plantation.png', title: 'Eco Club Tree Plantation Drive', category: 'activities' },
  { file: 'plantation-boy.png', title: 'Environmental Stewardship', category: 'activities' },
  { file: 'plantation-boys.png', title: 'Green Campus Initiative', category: 'activities' },
  { file: 'plantation-girls.png', title: 'Nature Conservation Project', category: 'activities' },
  { file: 'students-farewell.png', title: 'Senior Student Farewell & Blessing', category: 'events' },
  { file: '34789627_2063065620623207_5911851530360717312_n.jpg', title: 'Science Exhibition Demonstration', category: 'academics' },
  { file: '34811866_2063064630623306_6640622246865928192_n.jpg', title: 'Robotics & STEM Project', category: 'academics' },
  { file: '35070783_2063066203956482_181647962382794752_n.jpg', title: 'Model Presentation', category: 'academics' },
  { file: '35114701_2074889542774148_6065394326270115840_n.jpg', title: 'Annual Cultural Festival', category: 'events' },
  { file: '36087016_2074890819440687_1709579386774093824_n.jpg', title: 'Dance & Music Recital', category: 'events' },
  { file: '41384284_2145119649084470_159434185369452544_n.jpg', title: 'Sports Meet Sprint', category: 'sports' },
  { file: '41395055_2145129919083443_528795712058556416_n.jpg', title: 'Relay Race & Athletics', category: 'sports' },
  { file: '41454892_2145129502416818_7191460452642062336_n.jpg', title: 'Trophy Award Ceremony', category: 'sports' },
  { file: '41529174_2145130165750085_7284965356714590208_n.jpg', title: 'Tug of War Championship', category: 'sports' },
  { file: '41540767_2145128299083605_3770903671533993984_n.jpg', title: 'Athletics March Past', category: 'sports' },
  { file: '41556867_2145128492416919_2710472238947106816_n.jpg', title: 'School Band Procession', category: 'events' },
  { file: '48408949_2202093810053720_1263052905687023616_n.jpg', title: 'Classroom Group Discussion', category: 'academics' },
  { file: '48412506_2202095776720190_8285816015128887296_n.jpg', title: 'Library Study Circle', category: 'academics' },
  { file: '48413218_2202094556720312_7224016493724303360_n.jpg', title: 'Interactive Smart Board Class', category: 'academics' },
  { file: '48425010_2202095403386894_3893730656638730240_n.jpg', title: 'Science Lab Experimentation', category: 'academics' },
  { file: '48976723_2202095663386868_5170009995718164480_n.jpg', title: 'Computer Coding Workshop', category: 'academics' },
  { file: '49002980_2202094496720318_2909088809662545920_n.jpg', title: 'Debate Club Finals', category: 'academics' },
  { file: '49305799_2201321293464305_7927317646142341120_n.jpg', title: 'Quiz Contest Winners', category: 'academics' },
  { file: '498838202_3948521908744226_7716007510259114924_n.jpg', title: 'Republic Day Celebration', category: 'events' },
  { file: '499146612_3948514872078263_4541932778567897788_n.jpg', title: 'Patriotic Song Performance', category: 'events' },
  { file: '50491047_2222045871391847_243696723547914240_n.jpg', title: 'Annual Day Stage Play', category: 'events' },
  { file: '50592065_2222045048058596_1139053716633026560_n.jpg', title: 'Traditional Dance Showcase', category: 'events' },
  { file: '50620401_2222046191391815_791287341342785536_n.jpg', title: 'Folk Dance Troupe', category: 'events' },
  { file: '50620475_2222046118058489_4974294499317514240_n.jpg', title: 'Choir Musical Performance', category: 'events' },
  { file: '50745292_2222045408058560_6786571450401685504_n.jpg', title: 'Prize Distribution Ceremony', category: 'events' },
  { file: '50948207_2222045978058503_7040529331856080896_n.jpg', title: 'Student Art Exhibition', category: 'activities' },
  { file: '50951975_2222046044725163_8709495688267825152_n.jpg', title: 'Clay Modeling & Craft', category: 'activities' },
  { file: '51174840_2222046251391809_1242486519214637056_n.jpg', title: 'Origami & Paper Art', category: 'activities' },
  { file: '52730292_2241652926097808_6201477341386899456_n.jpg', title: 'Karate & Self Defense Drill', category: 'sports' },
  { file: '52797685_2241652862764481_4899949818014597120_n.jpg', title: 'Football Tournament Match', category: 'sports' },
  { file: '52961292_2241653402764427_4110688709098078208_n.jpg', title: 'Cricket Match Action', category: 'sports' },
  { file: '52985739_2241653956097705_2401323984789438464_n.jpg', title: 'Badminton Championship', category: 'sports' },
  { file: '53057864_2241654032764364_8363163965198434304_n.jpg', title: 'Chess Tournament', category: 'sports' },
  { file: '53259841_2241653296097771_6874882789825576960_n.jpg', title: 'Table Tennis Finals', category: 'sports' },
  { file: '53270775_2241654079431026_7293358418595676160_n.jpg', title: 'Volleyball Match', category: 'sports' },
  { file: '53340243_2241653092764458_515570210674049024_n.jpg', title: 'Annual Sports Parade', category: 'sports' },
  { file: '53347700_2241653902764377_6182869812188807168_n.jpg', title: 'Sports Champions Celebration', category: 'sports' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const galleryList = imageFiles.map((item, index) => ({
    src: `/PHIS/gallery/${item.file}`,
    alt: item.title || `PHIS Gallery Image ${index + 1}`,
    category: item.category || 'events',
    title: item.title || `PHIS Campus Life ${index + 1}`
  }));

  const filteredImages = filter === 'all'
    ? galleryList
    : galleryList.filter((img) => img.category === filter);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Header */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="badge-phis bg-blue-800 text-amber-300 border border-blue-700 mb-4 mx-auto">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>CAMPUS MEMORIES & MOMENTS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Photo Gallery
          </h1>
          <p className="text-sm sm:text-base text-blue-200">
            Explore moments from our vibrant campus life — events, activities, celebrations, sports, and academic achievements at Pragya Heritage International School, Purnia.
          </p>
        </div>
      </section>

      <div className="section-padding bg-slate-50 flex-1">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'events', label: 'Events & Celebrations' },
              { id: 'activities', label: 'Co-Curricular & Arts' },
              { id: 'sports', label: 'Sports & Fitness' },
              { id: 'academics', label: 'Academics & Science' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  filter === btn.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Photo Count */}
          <div className="flex justify-between items-center mb-6 text-xs text-slate-500">
            <span>Showing <strong>{filteredImages.length}</strong> photos</span>
            <span className="capitalize">Filter: <strong>{filter}</strong></span>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-xl bg-white border border-slate-200/80 transition-all duration-300 flex flex-col"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase shadow">
                    {image.category}
                  </span>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-slate-900 text-xs line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors z-10"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <div
                className="max-w-4xl w-full bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl p-2"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-w-full max-h-[75vh] object-contain"
                  />
                </div>
                <div className="p-4 flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-base font-bold">{selectedImage.title}</h3>
                    <p className="text-xs text-slate-400 capitalize">Category: {selectedImage.category}</p>
                  </div>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="btn-phis-primary py-2 px-4 text-xs font-bold"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
