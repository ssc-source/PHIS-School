export const siteConfig = {
  name: "Pragya Heritage International School",
  shortName: "PHIS",
  tagline: "Nurturing Excellence, Building Futures in Purnia, Bihar",
  description: "Premier CBSE-affiliated English medium co-educational institution in Purnia, Bihar (Affiliation No: 330963, UDISE: 10090417704). Established in 2017.",
  established: "2017",
  affiliationNo: "330963",
  udiseCode: "10090417704",
  type: "Co-educational, Private Unaided",
  medium: "English",
  classes: "Nursery to Class X (Expanding to Class XII)",
  logo: "/images/logo/pragya-logo.png",
  logoWhite: "/images/logo/pragya-logo-white.png",
  contact: {
    phone: "+91 7903132965",
    altPhone: "094712 75812",
    email: "pragyaschool2017@gmail.com",
    admissionsEmail: "pragyaschool2017@gmail.com",
    address: "Bypass Road, Basgama, Gulabbagh, Purnia, Bihar - 854326",
    landmark: "Near Ridhi Sidhi Petrol Pump, Purnia Dharamkata, NH 80, Belouri",
    workingHours: "Mon - Sat: 6:00 AM - 6:00 PM"
  },
  social: {
    facebook: "https://www.facebook.com/p/Pragya-Heritage-International-School-100064125961546/",
    instagram: "https://www.instagram.com/_pragya_heritage_/",
    googleMaps: "https://www.google.com/maps/place/Pragya+Heritage+International+School/@25.7705299,87.5312807,17z",
    justdial: "https://www.justdial.com/Purnia/Pragya-Heritage-International-School-Near-Ridhi-Sidhi-Petrol-Pump-Purnia-Dharamkata-Belouri/9999P6454-6454-170922142227-M3H1_BZDET"
  },
  rating: {
    justdial: "3.7 / 5.0 (50+ Verified Ratings)",
    google: "4.5 / 5.0 Star Parent Rating"
  }
};

export const mainNavigation = {
  primaryNav: [
    {
      label: "About",
      href: "/about",
      children: [
        { label: "About PHIS", href: "/about", desc: "Our history, vision & leadership in Purnia since 2017" },
        { label: "Vision & Mission", href: "/about#vision-mission", desc: "Core values, student welfare & future-ready focus" },
        { label: "Principal's Message", href: "/about#principal", desc: "Inspiring words from our instructional leadership" },
        { label: "Campus Infrastructure", href: "/facilities", desc: "Modern labs, smart classes, library & sports facilities" }
      ]
    },
    {
      label: "Academics",
      href: "/academics",
      children: [
        { label: "Pre-Primary Wing", href: "/academics#pre-primary", desc: "Nursery, KG-I & KG-II (Ages 3-5)" },
        { label: "Primary Wing", href: "/academics#primary", desc: "Classes I to V foundational skill building" },
        { label: "Middle School", href: "/academics#middle", desc: "Classes VI to VIII analytical inquiry" },
        { label: "Secondary Wing", href: "/academics#secondary", desc: "Classes IX & X CBSE board preparation" },
        { label: "CBSE Curriculum", href: "/academics#curriculum", desc: "Holistic syllabus, life skills & co-curriculars" }
      ]
    },
    {
      label: "Admission",
      href: "/admission",
      children: [
        { label: "Admission Process", href: "/admission#process", desc: "Step-by-step guidance for session 2026-27" },
        { label: "Fee Structure", href: "/fee-structure", desc: "Affordable, transparent fee breakdown" },
        { label: "Admission Enquiry", href: "/admission#enquiry", desc: "Online enquiry form & counselor call" },
        { label: "Admission FAQs", href: "/admission#faqs", desc: "Frequently asked questions by parents" }
      ]
    },
    {
      label: "Facilities",
      href: "/facilities",
      children: [
        { label: "Smart Classrooms", href: "/facilities#classrooms", desc: "Interactive digital audio-visual learning" },
        { label: "Science & Computer Labs", href: "/facilities#labs", desc: "Hands-on experiential experiment stations" },
        { label: "Library & Reading Hall", href: "/facilities#library", desc: "Vast collection of reference books & periodicals" },
        { label: "Sports & Athletics", href: "/facilities#sports", desc: "Cricket, football, basketball & yoga arena" },
        { label: "School Transport", href: "/facilities#transport", desc: "GPS-enabled bus routes across Purnia city" }
      ]
    },
    {
      label: "Gallery",
      href: "/gallery",
      children: [
        { label: "Photo Gallery", href: "/gallery#photos", desc: "Campus life, celebrations & classrooms" },
        { label: "Events & Functions", href: "/gallery#events", desc: "Annual sports day, cultural fest & debates" },
        { label: "Student Achievements", href: "/gallery#achievements", desc: "Academic toppers & competition winners" }
      ]
    },
    {
      label: "Contact",
      href: "/contact"
    }
  ],
  utilityNav: [
    { label: "Parent Portal", href: "/login" },
    { label: "Careers", href: "/careers" }
  ],
  ctaButton: {
    label: "Apply Now",
    href: "/admission"
  }
};

export const heroSlides = [
  {
    id: 1,
    badge: "PREMIER CBSE INSTITUTION",
    title: "Welcome to Pragya Heritage International School",
    subtitle: "Nurturing Academic Excellence, Strong Character, and Inspiring Leadership in Purnia, Bihar.",
    image: "/PHIS/gallery/Gate-main.png",
    cta: { text: "Explore Campus", href: "/about" }
  },
  {
    id: 2,
    badge: "CBSE AFFILIATED (NO: 330963)",
    title: "Excellence in Education Since 2017",
    subtitle: "Empowering students from Nursery to Class 10 with progressive, value-based holistic pedagogy.",
    image: "/PHIS/gallery/morning-assembly.png",
    cta: { text: "Our Academics", href: "/academics" }
  },
  {
    id: 3,
    badge: "ENGLISH MEDIUM CURRICULUM",
    title: "Modern Pedagogy Rooted in Indian Heritage",
    subtitle: "Developing fluent English communication, digital literacy, and deep ethical foundations.",
    image: "/PHIS/gallery/cocuriculer-activity.png",
    cta: { text: "Learn More", href: "/about" }
  },
  {
    id: 4,
    badge: "MODERN CAMPUS INFRASTRUCTURE",
    title: "State-of-the-Art Infrastructure",
    subtitle: "Smart digital classrooms, science & computer laboratories, and vast sports arenas.",
    image: "/PHIS/gallery/yoga-day.png",
    cta: { text: "View Facilities", href: "/facilities" }
  },
  {
    id: 5,
    badge: "DEDICATED INSTRUCTIONAL TEAM",
    title: "Professional & Experienced Faculty",
    subtitle: "Passionate educators dedicated to individualized mentoring, conceptual clarity, and care.",
    image: "/PHIS/gallery/captains.png",
    cta: { text: "Meet Faculty", href: "/about" }
  },
  {
    id: 6,
    badge: "CO-CURRICULAR BRILLIANCE",
    title: "Beyond Academics: Sports, Arts & Culture",
    subtitle: "Annual sports tournaments, debate championships, fine arts, music, and leadership development.",
    image: "/PHIS/gallery/indipendence-day.png",
    cta: { text: "Student Life", href: "/facilities" }
  },
  {
    id: 7,
    badge: "SESSION 2026-27 ADMISSIONS OPEN",
    title: "Admissions Open for Nursery to Class X",
    subtitle: "Join the vibrant PHIS family. Limited seats available with transparent and affordable fees.",
    image: "/PHIS/gallery/result-cbse-10.png",
    cta: { text: "Apply for Admission", href: "/admission" }
  }
];

export const whyChooseFeatures = [
  {
    icon: "BookOpen",
    title: "CBSE Curriculum",
    description: "Nationally recognized CBSE syllabus ensuring rigorous academic standards, continuous assessment, and smooth transitions for all national competitive exams."
  },
  {
    icon: "GraduationCap",
    title: "Expert & Caring Faculty",
    description: "Highly qualified, well-trained educators providing personalized student mentorship, remedial support, and conceptual clarity."
  },
  {
    icon: "Building",
    title: "Modern Campus Infrastructure",
    description: "Digital smart classrooms, modern Science & Computer labs, spacious library, activity rooms, and lush open playfields."
  },
  {
    icon: "Trophy",
    title: "Holistic Development",
    description: "Equal emphasis on sports, martial arts, debate competitions, cultural festivals, and community leadership."
  },
  {
    icon: "HeartHandshake",
    title: "Value-Based Cultural Heritage",
    description: "Instilling timeless Indian moral values, discipline, mutual respect, and environmental consciousness in daily school life."
  },
  {
    icon: "Globe",
    title: "Global Perspective",
    description: "Fluency in English medium instruction, digital coding fundamentals, and preparing learners for 21st-century global opportunities."
  }
];

export const facilitiesList = [
  {
    name: "Smart Classrooms",
    description: "Interactive digital boards, multimedia audio-visual teaching aids, and student-centered smart learning modules.",
    image: "/images/facilities/smart-classroom.jpg",
    badge: "Digital Learning"
  },
  {
    name: "Science Laboratories",
    description: "Fully equipped Physics, Chemistry, and Biology laboratories designed for safe, hands-on scientific experimentation.",
    image: "/images/facilities/science-lab.jpg",
    badge: "Experiential STEM"
  },
  {
    name: "Computer Lab",
    description: "High-speed modern computer terminals with supervised internet access, coding software, and digital literacy tools.",
    image: "/images/facilities/computer-lab.jpg",
    badge: "IT & Tech"
  },
  {
    name: "Library & Resource Center",
    description: "Extensive collection of reference encyclopedias, NCERT resources, fiction, periodicals, and quiet reading halls.",
    image: "/images/facilities/library.jpg",
    badge: "Knowledge Hub"
  },
  {
    name: "Sports Complex & Playgrounds",
    description: "Dedicated grounds for Cricket, Football, Basketball, Badminton, Athletics, and indoor games like Chess and Table Tennis.",
    image: "/images/facilities/sports.jpg",
    badge: "Athletics & Fitness"
  },
  {
    name: "Safe Transport Fleet",
    description: "Reliable, GPS-enabled school bus and van transportation service covering all major routes across Purnia city and suburbs.",
    image: "/images/facilities/transport.jpg",
    badge: "Purnia Coverage"
  }
];

export const academicPrograms = [
  {
    level: "Pre-Primary Wing",
    classes: "Nursery, KG-I, KG-II",
    age: "Ages 3 - 5 Years",
    focus: "Joyful play-based sensory learning, phonics, number concepts, motor coordination, storytelling, and social adaptability.",
    image: "/images/programs/pre-primary.jpg",
    highlights: ["Interactive play corner", "Rhyme & rhythm time", "Color recognition labs", "Safe care environment"]
  },
  {
    level: "Primary Wing",
    classes: "Class I to V",
    age: "Ages 6 - 10 Years",
    focus: "Core academic subjects (English, Hindi, Mathematics, EVS, Science), critical thinking, handwriting, reading comprehension, and moral ethics.",
    image: "/images/programs/primary.jpg",
    highlights: ["Language fluency labs", "Mental Math drills", "Science inquiry expos", "Art & craft workshops"]
  },
  {
    level: "Middle School Wing",
    classes: "Class VI to VIII",
    age: "Ages 11 - 13 Years",
    focus: "Advanced science and mathematics concepts, social sciences, computer applications, analytical reasoning, and co-curricular projects.",
    image: "/images/programs/middle.jpg",
    highlights: ["Hands-on lab experiments", "Debate & quiz clubs", "Computer coding", "Inter-house sports"]
  },
  {
    level: "Secondary Wing",
    classes: "Class IX to X",
    age: "Ages 14 - 15 Years",
    focus: "Rigorous CBSE Board syllabus mastery, regular chapter-wise mock tests, individualized feedback, and career orientation.",
    image: "/images/programs/secondary.jpg",
    highlights: ["100% CBSE board focus", "Pre-board diagnostics", "Science practical mastery", "Career counseling"]
  }
];

export const testimonialsList = [
  {
    name: "Siddhartha",
    role: "Parent of Class IV Student",
    rating: 5,
    text: "Recommending you the best school in Purnia city they all are having lots of activities to grow our children in effective manner because of professional teachers 🙏",
    date: "October 2023",
    verified: "Justdial Review"
  },
  {
    name: "Priya Sharma",
    role: "Parent of Class VII Student",
    rating: 5,
    text: "Excellent school with great infrastructure and dedicated teachers in Purnia. My child has shown remarkable improvement in English fluency, mathematics, and overall confidence.",
    date: "Session 2024-25",
    verified: "Google Verified Parent"
  },
  {
    name: "Rahul Kumar",
    role: "Parent of Class II & V Students",
    rating: 5,
    text: "Good school with modern digital facilities, spacious campus on Bypass Road, and very supportive staff. The management is transparent and responsive to parents.",
    date: "Session 2024-25",
    verified: "Parent Feedback"
  }
];

export const newsItems = [
  {
    id: 1,
    category: "ADMISSION",
    title: "Admissions Open for Academic Session 2026-27 (Nursery to Class X)",
    date: "September 2026",
    badgeColor: "bg-blue-600 text-white",
    link: "/admission"
  },
  {
    id: 2,
    category: "ACHIEVEMENT",
    title: "PHIS Students Excel in Purnia District Science & Robotics Exhibition",
    date: "August 2026",
    badgeColor: "bg-emerald-600 text-white",
    link: "/news/science-exhibition"
  },
  {
    id: 3,
    category: "EVENT",
    title: "Annual Sports & Athletics Meet 2026: Schedule & Registration Details",
    date: "September 2026",
    badgeColor: "bg-amber-600 text-white",
    link: "/events/sports-day"
  },
  {
    id: 4,
    category: "RESULT",
    title: "Class X CBSE Board Results: PHIS Celebrates 100% Pass Percentage with Top Distinctions",
    date: "May 2026",
    badgeColor: "bg-purple-600 text-white",
    link: "/news/board-results"
  },
  {
    id: 5,
    category: "ACTIVITY",
    title: "Inter-School Hindi & English Debate Championship — PHIS Clinches First Trophy",
    date: "July 2026",
    badgeColor: "bg-rose-600 text-white",
    link: "/news/debate-competition"
  }
];

export const feeData = {
  classes: [
    { class: "Nursery - KG II (Pre-Primary)", admission: "₹ 3,000", registration: "₹ 2,000", tuitionMonthly: "₹ 2,200", annual: "₹ 6,000", totalAnnual: "₹ 32,400" },
    { class: "Class I - V (Primary)", admission: "₹ 3,000", registration: "₹ 2,000", tuitionMonthly: "₹ 2,500", annual: "₹ 7,000", totalAnnual: "₹ 37,000" },
    { class: "Class VI - VIII (Middle)", admission: "₹ 3,000", registration: "₹ 2,000", tuitionMonthly: "₹ 2,800", annual: "₹ 8,000", totalAnnual: "₹ 41,600" },
    { class: "Class IX - X (Secondary)", admission: "₹ 3,000", registration: "₹ 2,000", tuitionMonthly: "₹ 3,200", annual: "₹ 9,000", totalAnnual: "₹ 47,400" }
  ],
  policies: [
    "Admission and Registration charges are one-time payable at the time of new enrolment.",
    "Tuition fees are payable on a monthly basis by the 10th of every calendar month.",
    "Annual composite charges include examination fees, school functions, sports activities, and library access.",
    "Safe GPS-enabled school transport is available across Purnia at ₹800 - ₹1,500/month depending on distance.",
    "Book kit and customized uniform charges are approximately ₹5,000 (one-time)."
  ]
};
