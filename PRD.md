Based on my analysis of the Sunbeam Schools website ecosystem, I'll now generate a comprehensive, phase-wise Product Requirements Document (PRD) that covers the complete website structure, UI components, styling, navigation, and content extraction.

***

# **Product Requirements Document (PRD)**
## **Sunbeam Schools Website & ERP System**
### **Complete Replication with Modular Architecture**

**Version:** 1.0  
**Date:** September 16, 2026  
**Prepared for:** Seemanchal Smartvyapaar  
**Technology Stack Recommendation:** Next.js 14+, Supabase, ShadCN UI, Tailwind CSS

***

## **Executive Summary**

Sunbeam Group of Educational Institutions operates a multi-campus educational network with CBSE and Cambridge curricula across Varanasi, Uttar Pradesh since 1972.  The website serves as the primary digital front door for prospective parents, existing parents, students, faculty applicants, and school inspectors.  The system includes a public-facing website, admission portal, student ERP portal (students.sunbeamapps.org), and multiple school-specific subdomains. [sunbeamschools](https://www.sunbeamschools.com/)

***

## **Table of Contents**

1. [System Architecture Overview](#1-system-architecture-overview)
2. [Phase 1: Core Website Structure](#2-phase-1-core-website-structure)
3. [Phase 2: Homepage Complete Content Extraction](#3-phase-2-homepage-complete-content-extraction)
4. [Phase 3: Navigation System](#4-phase-3-navigation-system)
5. [Phase 4: UI Components Library](#5-phase-4-ui-components-library)
6. [Phase 5: Styling & Design System](#6-phase-5-styling--design-system)
7. [Phase 6: ERP Portal Modules](#7-phase-6-erp-portal-modules)
8. [Phase 7: Admission & Enquiry System](#8-phase-7-admission--enquiry-system)
9. [Phase 8: School-Specific Subdomains](#9-phase-8-school-specific-subdomains)
10. [Phase 9: Footer & Contact System](#10-phase-9-footer--contact-system)
11. [Technical Implementation Guide](#11-technical-implementation-guide)

***

## **1. System Architecture Overview**

### **1.1 High-Level Architecture**

```
┌─────────────────────────────────────────────────────────┐
│                    SUNBEAM ECOSYSTEM                     │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────────┐    ┌──────────────────┐          │
│  │  Public Website  │    │   Student Portal │          │
│  │  (Main Site)     │    │   (ERP System)   │          │
│  │  sunbeamschools  │    │  students.       │          │
│  │  .com            │    │  sunbeamapps.org │          │
│  └────────┬─────────┘    └────────┬─────────┘          │
│           │                      │                       │
│           └──────────┬───────────┘                       │
│                      │                                   │
│           ┌──────────▼───────────┐                       │
│           │   Shared Services    │                       │
│           │   - Authentication   │                       │
│           │   - User Management  │                       │
│           │   - Admission System │                       │
│           │   - Content CMS      │                       │
│           └──────────┬───────────┘                       │
│                      │                                   │
│    ┌─────────────────┼─────────────────┐                │
│    │                 │                 │                │
│    ▼                 ▼                 ▼                │
│ ┌──────┐      ┌──────────┐      ┌──────────┐           │
│ │School│      │  Hostel  │      │ College  │           │
│ │Portal│      │  Portal  │      │  Portal  │           │
│ └──────┘      └──────────┘      └──────────┘           │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### **1.2 Technology Stack Analysis**

**Current Stack Indicators:**
- PHP-based backend (inferred from .php extensions) [zoominfo](https://www.zoominfo.com/c/sunbeams-school/514244083)
- Cloudflare for CDN and security [zoominfo](https://www.zoominfo.com/c/sunbeams-school/514244083)
- Multiple subdomains for school-specific content [sivad.sunbeamschools](https://sivad.sunbeamschools.com/)

**Recommended Modern Stack:**
- **Frontend:** Next.js 14+ with App Router using javascript
- **UI Components:** ShadCN UI + Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **CMS:** Sanity.io or Strapi for content management
- **Hosting:** Vercel (for Next.js)

### **1.3 Database Schema Overview**

```sql
-- Core Tables
users (id, email, role, school_id, created_at)
schools (id, name, code, address, contact_info)
students (id, user_id, roll_no, class, section, parent_id)
parents (id, user_id, phone, occupation)
admissions (id, student_id, status, session_year, documents)
erp_attendance (id, student_id, date, status)
erp_marks (id, student_id, subject, exam_type, marks)
```

***

## **2. Phase 1: Core Website Structure**

### **2.1 Project Directory Structure**

```
sunbeam-website/
├── app/
│   ├── (public)/                    # Public-facing pages
│   │   ├── page.tsx                 # Homepage
│   │   ├── about/
│   │   ├── schools/
│   │   ├── admission/
│   │   ├── contact/
│   │   └── faqs/
│   ├── (portal)/                    # Protected portal pages
│   │   ├── login/
│   │   ├── dashboard/
│   │   ├── student/
│   │   ├── parent/
│   │   └── admin/
│   ├── api/                         # API routes
│   │   ├── auth/
│   │   ├── admission/
│   │   └── erp/
│   └── layout.tsx                   # Root layout
├── components/
│   ├── ui/                          # ShadCN base components
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Sidebar.tsx
│   ├── homepage/
│   │   ├── HeroCarousel.tsx
│   │   ├── PedagogySection.tsx
│   │   ├── CurriculumSection.tsx
│   │   ├── ThriveSection.tsx
│   │   ├── ReflectSection.tsx
│   │   ├── FutureReadySection.tsx
│   │   ├── NewsInsights.tsx
│   │   └── SchoolsGrid.tsx
│   ├── admission/
│   │   ├── EnquiryForm.tsx
│   │   ├── FeeStructure.tsx
│   │   └── AdmissionSteps.tsx
│   └── erp/
│       ├── AttendanceTable.tsx
│       ├── MarksCard.tsx
│       └── ProfileCard.tsx
├── lib/
│   ├── db.ts                        # Database connection
│   ├── auth.ts                      # Auth utilities
│   └── utils.ts                     # Helper functions
├── styles/
│   ├── globals.css
│   └── variables.css                # Design tokens
├── public/
│   ├── images/
│   │   ├── hero/                    # Hero carousel images
│   │   ├── schools/                 # School building images
│   │   └── backgrounds/             # Static background images
│   └── icons/
└── config/
    ├── site.ts                      # Site metadata
    └── navigation.ts                # Nav configuration
```

### **2.2 Environment Variables**

```env
# Database
DATABASE_URL=postgresql://user:pass@host:5432/sunbeam_db
# or
MONGODB_URI=mongodb://localhost:27017/sunbeam

# Authentication
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

# Supabase (if using)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Cloudinary (for image optimization)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

***

## **3. Phase 2: Homepage Complete Content Extraction**

### **3.1 Hero Carousel Section**

**Component:** `components/homepage/HeroCarousel.tsx`

**Content Items (13 hero slides extracted):**

```typescript
const heroSlides = [
  {
    id: 1,
    title: "Protsahan 2025",
    subtitle: "Celebrating Excellence, Honouring Achievers, Inspiring Futures.",
    backgroundImage: "/images/hero/protsahan-2025.jpg",
    cta: { text: "Learn More", href: "/protsahan" }
  },
  {
    id: 2,
    title: "When Many Hands Create One Melody",
    subtitle: "Collaborative learning through music and arts",
    backgroundImage: "/images/hero/melody.jpg"
  },
  {
    id: 3,
    title: "Learning by Doing",
    subtitle: "Where Curiosity Shapes Creativity",
    backgroundImage: "/images/hero/learning-by-doing.jpg"
  },
  {
    id: 4,
    title: "Pride in Performance",
    subtitle: "Power in Leadership, Promise for Tomorrow",
    backgroundImage: "/images/hero/leadership.jpg"
  },
  {
    id: 5,
    title: "Young Sunbeam Graduates",
    subtitle: "Marching Ahead with Pride",
    backgroundImage: "/images/hero/graduates.jpg"
  },
  {
    id: 6,
    title: "Where every beat marches to the rhythm of pride",
    subtitle: "Cultural excellence and discipline",
    backgroundImage: "/images/hero/marching-band.jpg"
  },
  {
    id: 7,
    title: "Where Every Shot Builds Patience",
    subtitle: "Skill, and Confidence through sports",
    backgroundImage: "/images/hero/sports.jpg"
  },
  {
    id: 8,
    title: "Building bonds, sharing joy",
    subtitle: "Learning together through Quality Circle Time",
    backgroundImage: "/images/hero/qct.jpg"
  },
  {
    id: 9,
    title: "Innovating the Future, Together",
    subtitle: "Technology and innovation in education",
    backgroundImage: "/images/hero/innovation.jpg"
  },
  {
    id: 10,
    title: "Little Warriors Today",
    subtitle: "Confident Leaders Tomorrow",
    backgroundImage: "/images/hero/little-warriors.jpg"
  },
  {
    id: 11,
    title: "In every sapling, a promise of tomorrow",
    subtitle: "Environmental consciousness and sustainability",
    backgroundImage: "/images/hero/sapling.jpg"
  },
  {
    id: 12,
    title: "Stronger Together, Happier Together",
    subtitle: "Community and collaboration",
    backgroundImage: "/images/hero/together.jpg"
  },
  {
    id: 13,
    title: "Making a splash with skill",
    subtitle: "Stamina, and sportsmanship in swimming",
    backgroundImage: "/images/hero/swimming.jpg"
  }
]
```

**UI Component Specification:**

```tsx
// HeroCarousel.tsx - Full component structure
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

export function HeroCarousel() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <Carousel 
        opts={{ loop: true, autoplay: true, autoplayInterval: 5000 }}
        className="w-full h-full"
      >
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div 
                className="relative w-full h-full"
                style={{
                  backgroundImage: `url(${slide.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 max-w-3xl">
                    {slide.subtitle}
                  </p>
                  {slide.cta && (
                    <Button 
                      size="lg" 
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      {slide.cta.text}
                    </Button>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Arrows */}
        <Carousel.ArrowLeft className="absolute left-4 top-1/2 -translate-y-1/2" />
        <Carousel.ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2" />
        
        {/* Pagination Dots */}
        <Carousel.Pagination className="absolute bottom-8 left-1/2 -translate-x-1/2" />
      </Carousel>
    </section>
  )
}
```

### **3.2 Pedagogy Section**

**Component:** `components/homepage/PedagogySection.tsx`

**Content:**

```typescript
const pedagogyContent = {
  heading: "OUR PEDAGOGY NURTURING MINDS, HEARTS & FUTURES",
  description: "At Sunbeam, learning is not confined to textbooks — it is an ever-evolving journey of discovery, creativity, reflection, and preparation for life. Our curriculum is designed around four pillars that guide every child's growth",
  fourPillars: [
    {
      icon: "🔥",
      title: "IGNITE",
      subtitle: "Curiosity",
      description: "Igniting Curiosity. Leveraging Potential"
    },
    {
      icon: "🌱",
      title: "THRIVE",
      subtitle: "in Passions",
      description: "Talent development, life skills, and character building"
    },
    {
      icon: "🪞",
      title: "REFLECT",
      subtitle: "with Balance",
      description: "Social emotional learning, culture, mindfulness & safety"
    },
    {
      icon: "🚀",
      title: "Be FUTURE READY",
      subtitle: "for Life",
      description: "Career, leadership, technology, innovation"
    }
  ],
  closingStatement: "This is the Sunbeam way of nurturing not just scholars, but compassionate, confident, and capable citizens of tomorrow."
}
```

### **3.3 IGNITE Curriculum Section**

**Component:** `components/homepage/CurriculumSection.tsx`

**Content:**

```typescript
const igniteCurriculum = {
  heading: "IGNITE CURRICULUM",
  tagline: "Igniting Curiosity. Leveraging Potential",
  description: "Learning at Sunbeam is a journey that begins with joyful discovery in the early years and grows into rigorous exploration in the senior grades. From nurturing curiosity and creativity in young learners to fostering critical thinking, research, and problem-solving in higher classes, our classrooms are designed to inspire excellence. With innovative pedagogy, hands-on experiences, and a global outlook, we prepare students from Nursery to Class XII to excel academically, embrace challenges, and step into the world as confident and compassionate leaders.",
  
  stages: [
    {
      level: "Foundational",
      classes: "Nur - II",
      backgroundImage: "/images/backgrounds/foundational.jpg",
      focus: "Joyful discovery, curiosity, creativity"
    },
    {
      level: "Primary",
      classes: "III to V",
      backgroundImage: "/images/backgrounds/primary.jpg",
      focus: "Building foundational skills, exploration"
    },
    {
      level: "Middle",
      classes: "VI - VIII",
      backgroundImage: "/images/backgrounds/middle.jpg",
      focus: "Critical thinking, research skills"
    },
    {
      level: "Senior",
      classes: "IX to XII",
      backgroundImage: "/images/backgrounds/senior.jpg",
      focus: "Problem-solving, academic excellence, leadership"
    }
  ]
}
```

### **3.4 THRIVE Section**

**Component:** `components/homepage/ThriveSection.tsx`

**Content:**

```typescript
const thriveContent = {
  heading: "THRIVE",
  subheading: "SUNBEAM'S PARALLEL CURRICULUM FOR HOLISTIC GROWTH",
  description: "At Sunbeam, learning goes far beyond textbooks. THRIVE is our signature parallel curriculum that blends talent development, life skills, and character building. It opens the door for every child to explore passions, unlock creativity, and grow with courage, competence, and compassion.",
  features: [
    "Sports and physical development",
    "Leadership programs",
    "Arts and culture",
    "Community engagement",
    "Co-curricular activities",
    "Experiential learning",
    "Personality-shaping programs"
  ],
  outcome: "Helping students become confident, well-rounded, and socially responsible individuals."
}
```

### **3.5 REFLECT Section**

**Component:** `components/homepage/ReflectSection.tsx`

**Content:**

```typescript
const reflectContent = {
  heading: "REFLECT",
  subheading: "SOCIAL EMOTIONAL LEARNING, CULTURE, MINDFULNESS & SAFETY",
  description: "At Sunbeam, we believe that mental health forms the foundation of a happy, resilient, and successful learner. Our thoughtfully designed programs and activities create a nurturing environment where students develop emotional intelligence, cultural awareness, and a strong sense of belonging.",
  programs: [
    "Counselling services",
    "Mindfulness practices",
    "Value-based learning",
    "Community-building initiatives",
    "Cultural awareness programs",
    "Safety and belonging initiatives"
  ],
  outcome: "Every child feels safe, valued, and empowered—both in school and in life."
}
```

### **3.6 FUTURE-READY Section**

**Component:** `components/homepage/FutureReadySection.tsx`

**Content:**

```typescript
const futureReadyContent = {
  heading: "FUTURE-READY",
  subheading: "CAREER, LEADERSHIP, TECHNOLOGY, INNOVATION",
  description: "At Sunbeam Schools, we believe that education must prepare students not only for examinations but for life itself. Our Future-Ready initiatives are designed to equip learners with the knowledge, skills, mindset, and exposure they need to succeed in a rapidly changing world.",
  pillars: [
    {
      name: "Career Guidance",
      description: "Professional counseling and career path exploration"
    },
    {
      name: "Leadership Development",
      description: "Student leadership programs and responsibilities"
    },
    {
      name: "Global Collaborations",
      description: "International partnerships and exchange programs"
    },
    {
      name: "Innovative Learning",
      description: "Technology integration and modern pedagogy"
    }
  ],
  outcome: "Students step into the future with confidence, competence, and compassion."
}
```

### **3.7 News & Insights Section**

**Component:** `components/homepage/NewsInsights.tsx`

**Content (Extracted news items):**

```typescript
const newsItems = [
  {
    category: "GROUP",
    title: "Dr. Deepak Madhok, Chairperson of the Sunbeam Group of Educational Institutions, is featured among the Trailblazers of Indian Education in TIME Magazine.",
    link: "/news/trailblazers-time"
  },
  {
    category: "ANNAPURNA",
    title: "Runners-Up in the Senior Category at the Youth Democracy Debate",
    link: "/news/democracy-debate"
  },
  {
    category: "BHAGWANPURA",
    title: "Moment of Pride!",
    link: "/news/bhagwanpura-pride"
  },
  {
    category: "INDIRANAGAR",
    title: "Palette 2026 – The Colours of Heritage",
    link: "/news/palette-2026"
  },
  {
    category: "LAHARTARA",
    title: "Gwalior Fort Conquered @ 53rd Platinum Jubilee Quiz, organised by The Scindia School",
    link: "/news/gwalior-quiz"
  },
  {
    category: "SARNATH",
    title: "CBSE National Adolescent Summit 2025",
    link: "/news/adolescent-summit"
  },
  {
    category: "SUNCITY",
    title: "Dasvidaniya 2026 – Seasons of Life",
    link: "/news/dasvidaniya-2026"
  },
  {
    category: "INTERNATIONAL VARUNA",
    title: "Cambridge Primary Checkpoint 2025-26 Class 5",
    link: "/news/cambridge-checkpoint"
  },
  {
    category: "VARUNA",
    title: "CONCORDIA 6.0!",
    link: "/news/concordia-6"
  }
]
```

### **3.8 Schools & Colleges Grid**

**Component:** `components/homepage/SchoolsGrid.tsx`

**Content:**

```typescript
const schoolsAndColleges = {
  schools: [
    { name: "Sunbeam Annapurna", type: "SCHOOL", link: "/schools/annapurna" },
    { name: "Sunbeam English School Bhagwanpur", type: "SCHOOL & HOSTEL", link: "/schools/bhagwanpur" },
    { name: "Sunbeam Indiranagar", type: "SCHOOL", link: "/schools/indiranagar" },
    { name: "Sunbeam Lahartara", type: "SCHOOL & HOSTEL", link: "/schools/lahartara" },
    { name: "Sunbeam Sarnath", type: "SCHOOL", link: "/schools/sarnath" },
    { name: "Sunbeam Suncity", type: "SCHOOL & HOSTEL", link: "/schools/suncity" },
    { name: "Sunbeam International Varuna", type: "SCHOOL", link: "/schools/international-varuna" },
    { name: "Sunbeam Varuna", type: "SCHOOL & HOSTEL", link: "/schools/varuna" },
    { name: "Sunbeam Gramin School, Karsana", type: "SCHOOL", link: "/schools/gramin-karsana" }
  ],
  colleges: [
    { name: "Sunbeam College for Women Bhagwanpur", type: "COLLEGE", link: "/colleges/women-bhagwanpur" },
    { name: "Sunbeam Women's College Varuna", type: "COLLEGE", link: "/colleges/women-varuna" }
  ],
  knowledgePartners: [
    "Ayodhya", "Azamgarah", "Ballia", "Bhadohi",
    "Cholapur", "Deoria", "Dildarnagar", "Ghazipur",
    "Gonda", "Jaunpur", "Mau", "Mirzapur",
    "Mughalsarai", "Narayanpur", "Robertsganj", "Sultanpur"
  ]
}
```

***

## **4. Phase 3: Navigation System**

### **4.1 Main Navbar Component**

**Component:** `components/layout/Navbar.tsx`

**Navigation Structure:**

```typescript
const mainNavigation = {
  logo: {
    src: "/images/logo/sunbeam-logo.png",
    alt: "Sunbeam Schools",
    href: "/"
  },
  
  primaryNav: [
    {
      label: "The Group",
      href: "/about",
      children: [
        { label: "About the Group", href: "/about/group" },
        { label: "Vision & Mission", href: "/about/vision-mission" },
        { label: "Junior School Precept", href: "/about/junior-precept" },
        { label: "Middle School Precept", href: "/about/middle-precept" },
        { label: "Senior School Precept", href: "/about/senior-precept" },
        { label: "Extending Classroom Boundaries", href: "/about/extending-boundaries" },
        { label: "Leisure Time Activity", href: "/about/lta" },
        { label: "Quality Control Group", href: "/about/qcg" }
      ]
    },
    {
      label: "Schools",
      href: "/schools",
      children: [
        { label: "Sunbeam School Annapurna", href: "/schools/annapurna" },
        { label: "Sunbeam English School", href: "/schools/bhagwanpur" },
        { label: "Sunbeam School Indiranagar", href: "/schools/indiranagar" },
        { label: "Sunbeam School Lahartara", href: "/schools/lahartara" },
        { label: "Sunbeam School Suncity", href: "/schools/suncity" },
        { label: "Sunbeam School Varuna", href: "/schools/varuna" },
        { label: "Sunbeam School Sarnath", href: "/schools/sarnath" },
        { label: "Sunbeam International Varuna", href: "/schools/international-varuna" },
        { label: "Sunbeam Gramin School", href: "/schools/gramin" }
      ]
    },
    {
      label: "Hostel",
      href: "/hostel",
      children: [
        { label: "Sunbeam English School Hostel", href: "/hostel/bhagwanpur" },
        { label: "Sunbeam Hostel Lahartara", href: "/hostel/lahartara" },
        { label: "Sunbeam Hostel Suncity", href: "/hostel/suncity" },
        { label: "Sunbeam Hostel Varuna", href: "/hostel/varuna" }
      ]
    },
    {
      label: "Knowledge Partners",
      href: "/knowledge-partners",
      children: [
        { label: "Sunbeam School-Azamgarah", href: "/partners/azamgarah" },
        { label: "Sunbeam School-Ballia", href: "/partners/ballia" },
        { label: "Sunbeam School-Bhadohi", href: "/partners/bhadohi" },
        { label: "Sunbeam School-Cholapur", href: "/partners/cholapur" },
        { label: "Sunbeam School-Deoria", href: "/partners/deoria" },
        { label: "Sunbeam School-Dildarnagar", href: "/partners/dildarnagar" },
        { label: "Sunbeam School-Ayodhya", href: "/partners/ayodhya" },
        { label: "Sunbeam School-Ghazipur", href: "/partners/ghazipur" },
        { label: "Sunbeam School-Gonda", href: "/partners/gonda" },
        { label: "Sunbeam School-Jaunpur", href: "/partners/jaunpur" },
        { label: "Sunbeam School-Mau", href: "/partners/mau" },
        { label: "Sunbeam School-Mirzapur", href: "/partners/mirzapur" },
        { label: "Sunbeam School-Mughalsarai", href: "/partners/mughalsarai" },
        { label: "Sunbeam School-Narayanpur", href: "/partners/narayanpur" },
        { label: "Sunbeam School-Robertsganj", href: "/partners/robertsganj" },
        { label: "Sunbeam School-Sultanpur", href: "/partners/sultanpur" }
      ]
    },
    {
      label: "College",
      href: "/colleges",
      children: [
        { label: "Sunbeam College for Women Bhagwanpur", href: "/colleges/women-bhagwanpur" },
        { label: "Sunbeam Women's College Varuna", href: "/colleges/women-varuna" }
      ]
    },
    {
      label: "Philanthropy",
      href: "/philanthropy",
      children: [
        { label: "Karsana Gramin School", href: "/philanthropy/karsana" },
        { label: "Each one Teach one", href: "/philanthropy/each-one-teach-one" },
        { label: "Social Initiative", href: "/philanthropy/social-initiative" }
      ]
    },
    {
      label: "Admission",
      href: "/admission"
    },
    {
      label: "Contact",
      href: "/contact"
    }
  ],
  
  utilityNav: [
    { label: "Fee Structure", href: "/fee-structure" },
    { label: "Jobs", href: "/careers" },
    { label: "Admin Login", href: "/admin/login" },
    { label: "Alumni", href: "/alumni" }
  ],
  
  ctaButton: {
    label: "Admission Enquiry",
    href: "/admission/enquiry",
    variant: "default"
  }
}
```

**Navbar Component Code:**

```tsx
// components/layout/Navbar.tsx
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { MobileMenu } from './MobileMenu'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/images/logo/sunbeam-logo.png" 
              alt="Sunbeam Schools"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavigation.primaryNav.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger className="font-medium">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4">
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={child.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {child.label}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm font-medium transition-colors hover:text-orange-500"
                      >
                        {item.label}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Utility Nav & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {mainNavigation.utilityNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-orange-500"
              >
                {item.label}
              </Link>
            ))}
            <Button 
              asChild
              className="bg-orange-500 hover:bg-orange-600"
            >
              <Link href={mainNavigation.ctaButton.href}>
                {mainNavigation.ctaButton.label}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && <MobileMenu navigation={mainNavigation} onClose={() => setIsOpen(false)} />}
      </div>
    </nav>
  )
}
```

### **4.2 Breadcrumb Navigation**

**Component:** `components/layout/Breadcrumb.tsx`

```tsx
// Example breadcrumb structure for admission page
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Admission", href: "/admission" },
  { label: "Admission Assistance", href: "/admission/admissionassistance", current: true }
]
```

***

## **5. Phase 4: UI Components Library**

### **5.1 Base Components (ShadCN UI)**

**Required Components:**

```typescript
// components/ui/
- accordion.tsx
- alert.tsx
- avatar.tsx
- badge.tsx
- button.tsx
- card.tsx
- carousel.tsx
- checkbox.tsx
- dialog.tsx
- dropdown-menu.tsx
- form.tsx
- input.tsx
- label.tsx
- navigation-menu.tsx
- select.tsx
- sheet.tsx
- table.tsx
- tabs.tsx
- textarea.tsx
- toast.tsx
- tooltip.tsx
```

### **5.2 Custom Components**

#### **5.2.1 Admission Enquiry Form**

**Component:** `components/admission/EnquiryForm.tsx`

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  childFirstName: z.string().min(2, "First name required"),
  childMiddleName: z.string().optional(),
  childLastName: z.string().min(2, "Last name required"),
  dateOfBirth: z.string(),
  fatherName: z.string().min(2, "Father's name required"),
  motherName: z.string().min(2, "Mother's name required"),
  whatsappNo: z.string().min(10, "Valid WhatsApp number required"),
  email: z.string().email("Valid email required"),
  previousSchool: z.string().optional(),
  hostelRequired: z.boolean().default(false),
  message: z.string().optional()
})

export function EnquiryForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hostelRequired: false
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // API call to submit enquiry
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="childFirstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Child's First Name *</FormLabel>
                <FormControl>
                  <Input placeholder="First name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="childMiddleName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Child's Middle Name</FormLabel>
                <FormControl>
                  <Input placeholder="Middle name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="childLastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Child's Last Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth *</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="fatherName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Father's Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Father's name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="motherName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mother's Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Mother's name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="whatsappNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>WhatsApp No. *</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+91 XXXXX XXXXX" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email ID *</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="previousSchool"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Previous School Name</FormLabel>
              <FormControl>
                <Input placeholder="Previous school" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="hostelRequired"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="font-normal">
                Hostel Required
              </FormLabel>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any specific queries..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
          Submit Enquiry
        </Button>
      </form>
    </Form>
  )
}
```

#### **5.2.2 Fee Structure Component**

**Component:** `components/admission/FeeStructure.tsx`

```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const feeData = {
  classes: [
    { class: "Nursery - KG II", tuition: "₹45,000", admission: "₹25,000", annual: "₹15,000" },
    { class: "Class I - V", tuition: "₹55,000", admission: "₹25,000", annual: "₹18,000" },
    { class: "Class VI - VIII", tuition: "₹65,000", admission: "₹25,000", annual: "₹20,000" },
    { class: "Class IX - X", tuition: "₹75,000", admission: "₹25,000", annual: "₹22,000" },
    { class: "Class XI - XII", tuition: "₹85,000", admission: "₹25,000", annual: "₹25,000" }
  ]
}

export function FeeStructure() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Class</TableHead>
            <TableHead>Tuition Fee (Annual)</TableHead>
            <TableHead>Admission Fee</TableHead>
            <TableHead>Annual Charges</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {feeData.classes.map((row) => (
            <TableRow key={row.class}>
              <TableCell className="font-medium">{row.class}</TableCell>
              <TableCell>{row.tuition}</TableCell>
              <TableCell>{row.admission}</TableCell>
              <TableCell>{row.annual}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
```

#### **5.2.3 News Card Component**

**Component:** `components/homepage/NewsCard.tsx`

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface NewsCardProps {
  category: string
  title: string
  link: string
}

export function NewsCard({ category, title, link }: NewsCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardHeader>
        <Badge variant="secondary" className="w-fit mb-2">
          {category}
        </Badge>
        <CardTitle className="text-lg line-clamp-3">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <a href={link} className="text-orange-500 text-sm font-medium hover:underline">
          Read More →
        </a>
      </CardContent>
    </Card>
  )
}
```

***

## **6. Phase 5: Styling & Design System**

### **6.1 Design Tokens**

**File:** `styles/variables.css`

```css
:root {
  /* Colors - Sunbeam Brand */
  --primary: 25 100% 50%;        /* Orange #FF6B00 */
  --primary-foreground: 0 0% 100%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --accent: 25 100% 50%;
  --accent-foreground: 0 0% 100%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 47.4% 11.2%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 47.4% 11.2%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 25 100% 50%;
  --radius: 0.5rem;

  /* Typography */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-heading: 'Poppins', var(--font-sans);
  
  /* Spacing */
  --section-padding: 4rem;
  --container-max-width: 1280px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

.dark {
  --background: 222.2 47.4% 11.2%;
  --foreground: 210 40% 98%;
  --card: 222.2 47.4% 11.2%;
  --card-foreground: 210 40% 98%;
  --popover: 222.2 47.4% 11.2%;
  --popover-foreground: 210 40% 98%;
  --primary: 25 100% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 25 100% 50%;
}
```

### **6.2 Global Styles**

**File:** `styles/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-heading font-semibold tracking-tight;
  }
}

@layer components {
  .section-padding {
    @apply py-16 md:py-24;
  }
  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
  .btn-primary {
    @apply bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors;
  }
  .card-hover {
    @apply transition-shadow hover:shadow-lg;
  }
}

@layer utilities {
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600;
  }
}
```

### **6.3 Background Images Configuration**

**File:** `config/backgrounds.ts`

```typescript
export const backgroundImages = {
  hero: {
    protsahan: "/images/backgrounds/protsahan-2025.jpg",
    melody: "/images/backgrounds/melody.jpg",
    learningByDoing: "/images/backgrounds/learning-by-doing.jpg",
    leadership: "/images/backgrounds/leadership.jpg",
    graduates: "/images/backgrounds/graduates.jpg",
    marching: "/images/backgrounds/marching-band.jpg",
    sports: "/images/backgrounds/sports.jpg",
    qct: "/images/backgrounds/qct.jpg",
    innovation: "/images/backgrounds/innovation.jpg",
    littleWarriors: "/images/backgrounds/little-warriors.jpg",
    sapling: "/images/backgrounds/sapling.jpg",
    together: "/images/backgrounds/together.jpg",
    swimming: "/images/backgrounds/swimming.jpg"
  },
  curriculum: {
    foundational: "/images/backgrounds/curriculum/foundational.jpg",
    primary: "/images/backgrounds/curriculum/primary.jpg",
    middle: "/images/backgrounds/curriculum/middle.jpg",
    senior: "/images/backgrounds/curriculum/senior.jpg"
  },
  schools: {
    annapurna: "/images/backgrounds/schools/annapurna.jpg",
    bhagwanpur: "/images/backgrounds/schools/bhagwanpur.jpg",
    indiranagar: "/images/backgrounds/schools/indiranagar.jpg",
    lahartara: "/images/backgrounds/schools/lahartara.jpg",
    suncity: "/images/backgrounds/schools/suncity.jpg",
    varuna: "/images/backgrounds/schools/varuna.jpg",
    sarnath: "/images/backgrounds/schools/sarnath.jpg",
    internationalVaruna: "/images/backgrounds/schools/international-varuna.jpg"
  },
  section: {
    ignite: "/images/backgrounds/sections/ignite.jpg",
    thrive: "/images/backgrounds/sections/thrive.jpg",
    reflect: "/images/backgrounds/sections/reflect.jpg",
    futureReady: "/images/backgrounds/sections/future-ready.jpg"
  }
}
```

### **6.4 Tailwind Configuration**

**File:** `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        heading: ['var(--font-heading)'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
```

***

## **7. Phase 6: ERP Portal Modules**

### **7.1 Authentication System**

**Component:** `app/(portal)/login/page.tsx`

```tsx
import { LoginForm } from '@/components/erp/LoginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <img 
            src="/images/logo/sunbeam-logo.png" 
            alt="Sunbeam Schools"
            className="h-16 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold">Student Portal</h1>
          <p className="text-muted-foreground">Login to access your dashboard</p>
        </div>
        <LoginForm />
        <div className="mt-6 text-center">
          <a 
            href="/activate-account" 
            className="text-sm text-orange-500 hover:underline"
          >
            Activate Account
          </a>
          <span className="mx-2">|</span>
          <a 
            href="/forgot-password" 
            className="text-sm text-orange-500 hover:underline"
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  )
}
```

### **7.2 Student Dashboard**

**Component:** `app/(portal)/student/dashboard/page.tsx`

```tsx
import { StatsCard } from '@/components/erp/StatsCard'
import { AttendanceChart } from '@/components/erp/AttendanceChart'
import { RecentMarks } from '@/components/erp/RecentMarks'
import { UpcomingEvents } from '@/components/erp/UpcomingEvents'

export default function StudentDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg p-6">
        <h1 className="text-3xl font-bold">Welcome, Student Name!</h1>
        <p className="text-orange-100 mt-2">Class X-A | Roll No: 12345</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatsCard 
          title="Attendance" 
          value="92%" 
          trend="+2%" 
          icon="📊"
        />
        <StatsCard 
          title="Average Marks" 
          value="87%" 
          trend="+5%" 
          icon="📚"
        />
        <StatsCard 
          title="Assignments" 
          value="12/15" 
          trend="Pending: 3" 
          icon="📝"
        />
        <StatsCard 
          title="Next Exam" 
          value="5 Days" 
          trend="Mathematics" 
          icon="📅"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Attendance Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Attendance Overview</h2>
          <AttendanceChart />
        </div>

        {/* Recent Marks */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Marks</h2>
          <RecentMarks />
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
        <UpcomingEvents />
      </div>
    </div>
  )
}
```

### **7.3 ERP Database Schema**

```sql
-- Users & Authentication
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL, -- 'student', 'parent', 'teacher', 'admin'
  school_id UUID REFERENCES schools(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Schools
CREATE TABLE schools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  code VARCHAR(10) UNIQUE NOT NULL,
  address TEXT,
  phone VARCHAR(20),
  email VARCHAR(255),
  logo_url VARCHAR(500)
);

-- Students
CREATE TABLE students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  roll_no VARCHAR(10) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  middle_name VARCHAR(100),
  last_name VARCHAR(100) NOT NULL,
  date_of_birth DATE NOT NULL,
  class VARCHAR(20) NOT NULL,
  section VARCHAR(10),
  parent_id UUID REFERENCES parents(id),
  admission_year INTEGER,
  is_active BOOLEAN DEFAULT true
);

-- Parents
CREATE TABLE parents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  father_name VARCHAR(255),
  mother_name VARCHAR(255),
  phone VARCHAR(20),
  occupation VARCHAR(255),
  address TEXT
);

-- Attendance
CREATE TABLE attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id),
  date DATE NOT NULL,
  status VARCHAR(20) NOT NULL, -- 'present', 'absent', 'late', 'excused'
  remarks TEXT,
  UNIQUE(student_id, date)
);

-- Marks/Grades
CREATE TABLE marks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id),
  subject VARCHAR(100) NOT NULL,
  exam_type VARCHAR(50) NOT NULL, -- 'unit_test', 'mid_term', 'final'
  marks_obtained DECIMAL(5,2),
  max_marks DECIMAL(5,2),
  grade VARCHAR(5),
  term VARCHAR(20),
  academic_year INTEGER
);

-- Admissions
CREATE TABLE admissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id),
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'approved', 'rejected'
  session_year VARCHAR(20),
  class_applied VARCHAR(20),
  submitted_at TIMESTAMP DEFAULT NOW(),
  reviewed_at TIMESTAMP,
  reviewed_by UUID REFERENCES users(id)
);
```

***

## **8. Phase 7: Admission & Enquiry System**

### **8.1 Admission Workflow**

```typescript
const admissionWorkflow = {
  steps: [
    {
      step: 1,
      title: "Online Enquiry",
      description: "Fill the enquiry form with student details",
      duration: "Instant"
    },
    {
      step: 2,
      title: "Form Collection",
      description: "Collect admission form from school office or download",
      duration: "From 16th November",
      note: "Admission forms for new session 2026-27 available from 16th November 2025"  [sunbeamschool](https://sunbeamschool.in/contact_us.html)
    },
    {
      step: 3,
      title: "Form Submission",
      description: "Submit completed form with required documents",
      documents: [
        "Birth Certificate (original & photocopy)",
        "Previous school's Transfer Certificate (if applicable)",
        "Previous academic report cards",
        "Aadhaar card of student & parents",
        "Passport-size photographs (student & parents)"
      ]  [sunbeamschools](https://www.sunbeamschools.com/school/bhagwanpur/admission-faqs)
    },
    {
      step: 4,
      title: "Interaction/Entrance Test",
      description: "Student appears for interaction or entrance test"
    },
    {
      step: 5,
      title: "Parent Meeting",
      description: "Meeting with parents for final selection"
    },
    {
      step: 6,
      title: "Result Declaration",
      description: "Shortlisted candidates displayed at School Notice Board and website"  [sunbeamschools](https://www.sunbeamschools.com/school/bhagwanpur/admission-faqs)
    }
  ],
  
  ageCriteria: [
    { class: "Nursery", age: 3 },
    { class: "KG - I", age: 4 },
    { class: "KG - II", age: 5 },
    { class: "Class - I", age: 6 },
    { class: "Class - II", age: 7 },
    { class: "Class - III", age: 8 },
    { class: "Class - IV", age: 9 },
    { class: "Class - V", age: 10 },
    { class: "Class - VI", age: 11 },
    { class: "Class - VII", age: 12 },
    { class: "Class - VIII", age: 13 },
    { class: "Class - IX", age: 14 },
    { class: "Class - XI", age: 16 }
  ],
  
  importantDates: {
    admissionsStart: "16th November every year",
    academicSessionStart: "April",
    formAvailability: "16th November 2025 (for 2026-27 session)"  [sunbeamschool](https://sunbeamschool.in/contact_us.html)
  },
  
  contactInfo: {
    centralHelpline: "+91 9721452435"  [sunbeam.clevelandmetroschools](https://sunbeam.clevelandmetroschools.org/faqs),
    email: "info@sunbeamschools.com"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure),
    admissionEmail: "helpline@sunbeamschools.co.in"  [sunbeamschools](https://www.sunbeamschools.com/school/lahartara/how-to-reach-us.php)
  }
}
```

### **8.2 Admission API Routes**

**File:** `app/api/admission/enquiry/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['childFirstName', 'childLastName', 'dateOfBirth', 'whatsappNo', 'email']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
    }
    
    // Insert into database
    const { data, error } = await supabase
      .from('admission_enquiries')
      .insert([{
        child_first_name: body.childFirstName,
        child_middle_name: body.childMiddleName,
        child_last_name: body.childLastName,
        date_of_birth: body.dateOfBirth,
        father_name: body.fatherName,
        mother_name: body.motherName,
        whatsapp_no: body.whatsappNo,
        email: body.email,
        previous_school: body.previousSchool,
        hostel_required: body.hostelRequired,
        message: body.message,
        status: 'pending',
        created_at: new Date().toISOString()
      }])
    
    if (error) throw error
    
    // Send confirmation email (implement with your email service)
    // await sendConfirmationEmail(body.email)
    
    return NextResponse.json({
      success: true,
      message: 'Enquiry submitted successfully. Our admission team will connect with you shortly.'  [sunbeamschool](https://sunbeamschool.in/contact_us.html)
    })
    
  } catch (error) {
    console.error('Admission enquiry error:', error)
    return NextResponse.json(
      { error: 'Failed to submit enquiry' },
      { status: 500 }
    )
  }
}
```

***

## **9. Phase 8: School-Specific Subdomains**

### **9.1 Subdomain Architecture**

```typescript
const subdomainConfig = {
  main: {
    domain: "www.sunbeamschools.com",
    schools: ["all"],
    purpose: "Main website with all schools information"
  },
  schoolSpecific: [
    {
      subdomain: "anp",
      fullDomain: "anp.sunbeamschools.com",
      school: "Sunbeam Annapurna",
      email: "anp@sunbeamschools.com"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure)
    },
    {
      subdomain: "bhagwanpur",
      fullDomain: "bhagwanpur.sunbeamschools.com",
      school: "Sunbeam English School Bhagwanpur",
      email: "bhagwanpur@sunbeamschools.com"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure)
    },
    {
      subdomain: "indiranagar",
      fullDomain: "indiranagar.sunbeamschools.com",
      school: "Sunbeam Indiranagar",
      email: "sbsindiranagar@gmail.com"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure)
    },
    {
      subdomain: "lht",
      fullDomain: "lht.sunbeamschools.com",
      school: "Sunbeam Lahartara",
      email: "lht@sunbeamschools.com"  [crft](https://www.crft.studio/lookup/technology-detection)
    },
    {
      subdomain: "sct",
      fullDomain: "sct.sunbeamschools.com",
      school: "Sunbeam Suncity",
      email: "sct@sunbeamschools.com"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure)
    },
    {
      subdomain: "varuna",
      fullDomain: "varuna.sunbeamschools.com",
      school: "Sunbeam Varuna",
      email: "varuna@sunbeamschools.com"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure)
    },
    {
      subdomain: "sarnath",
      fullDomain: "sarnathad.sunbeamschools.com",
      school: "Sunbeam Sarnath",
      email: "sarnath@sunbeamschools.com"  [scribd](https://www.scribd.com/document/792915218/Admission-Notice-2025-26-2)
    },
    {
      subdomain: "siv",
      fullDomain: "siv.sunbeamschools.com",
      school: "Sunbeam International Varuna",
      email: "siv@sunbeamschools.com"  [sunbeamschools](https://www.sunbeamschools.com/school/varuna/404.php)
    }
  ],
  portal: {
    student: "students.sunbeamapps.org"  [zoominfo](https://www.zoominfo.com/c/sunbeams-school/514244083),
    emis: "emis.sunbeaminfo.com"  [sunbeamschools](https://www.sunbeamschools.com/Admission/admissionassistance)
  }
}
```

### **9.2 School Contact Information Database**

```typescript
const schoolContacts = {
  groupOffice: {
    address: "Plot No. 206, Bhagwanpur, Varanasi - 221005, India"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure),
    email: "info@sunbeamschools.com"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure)
  },
  schools: [
    {
      name: "Sunbeam School Annapurna",
      address: "C 32/22 - S, Annapurna Nagar Colony, Near Vidhyapeeth Road, Varanasi - 221002"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure),
      phones: ["+91 9721452600", "+91 9721452524", "0542 - 2222131"]  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure),
      email: "anp@sunbeamschools.com"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure)
    },
    {
      name: "Sunbeam School Bhagwanpur",
      address: "Plot No. 206, Sunbeam English School, Bhagwanpur, Lanka, Varanasi - 221005"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure),
      phone: "+91 9721452100"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure),
      email: "bhagwanpur@sunbeamschools.com"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure)
    },
    {
      name: "Sunbeam School Indiranagar",
      address: "N-6/9C, Chitaipur, Varanasi - 221005 (U.P.)"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure),
      phone: "+91 9721452177"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure),
      email: "sbsindiranagar@gmail.com"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure)
    },
    {
      name: "Sunbeam School Lahartara",
      address: "Near Lahartara Overbridge, (behind DRM Office), Lahartara, Varanasi - 221002"  [crft](https://www.crft.studio/lookup/technology-detection),
      phone: "9721452500"  [crft](https://www.crft.studio/lookup/technology-detection),
      email: "lht@sunbeamschools.com"  [crft](https://www.crft.studio/lookup/technology-detection)
    },
    {
      name: "Sunbeam School Sarnath",
      address: "Plot No. 198, Near Ashapur Overbridge Chauraha, Beside Ramleela Maidan, Varanasi(U.P.) - 221007"  [scribd](https://www.scribd.com/document/792915218/Admission-Notice-2025-26-2),
      phone: "+91 9721401089"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure),
      email: "sarnath@sunbeamschools.com"  [scribd](https://www.scribd.com/document/792915218/Admission-Notice-2025-26-2)
    },
    {
      name: "Sunbeam School Suncity",
      address: "Plot No. 821 Ga, Bachhaon Road, Karsana, Varanasi, Uttar Pradesh, 221011, India"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure),
      phone: "+91 9721452900"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure),
      email: "sct@sunbeamschools.com"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure)
    },
    {
      name: "Sunbeam International Varuna",
      address: "Central Jail Road, Varuna, Varanasi(U.P.) - INDIA"  [sunbeamschools](https://www.sunbeamschools.com/school/varuna/404.php),
      phones: ["+91 9721452433", "+91 9721452700"]  [sunbeamschools](https://www.sunbeamschools.com/school/varuna/404.php),
      emails: ["siv@sunbeamschools.com", "varuna@sunbeamschools.com"]  [sunbeamschools](https://www.sunbeamschools.com/school/varuna/404.php)
    },
    {
      name: "Sunbeam Gramin School Karsana",
      address: "Sunbeam Gramin School, Karsana, Bachhaon, Varanasi, Uttar Pradesh, INDIA"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure),
      phone: "+91 9721452621"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure),
      email: "graminschool@suncity.sunbeamschools.com"  [sunbeamschools](https://www.sunbeamschools.com/school/siv/fee-structure)
    }
  ],
  colleges: [
    {
      name: "Sunbeam College for Women Bhagwanpur",
      type: "COLLEGE"
    },
    {
      name: "Sunbeam Women's College Varuna",
      type: "COLLEGE"
    }
  ]
}
```

***

## **10. Phase 9: Footer & Contact System**

### **10.1 Footer Component**

**Component:** `components/layout/Footer.tsx`

```tsx
import Link from 'next/link'
import { footerLinks } from '@/config/footer'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <img 
              src="/images/logo/sunbeam-logo-white.png" 
              alt="Sunbeam Schools"
              className="h-12 mb-4"
            />
            <p className="text-gray-300 mb-4">
              Sunbeam Group of Educational Institutions is one of India's most trusted and future-ready school groups, offering CBSE and international curricula, hostels, global programmes, innovation-led learning - shaping excellence in Varanasi, Uttar Pradesh, India since 1972.  [sunbeamschools](https://www.sunbeamschools.com/)
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="https://facebook.com/sunbeamschools" className="text-gray-300 hover:text-white">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/sunbeamschools" className="text-gray-300 hover:text-white">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href="https://youtube.com/sunbeamschools" className="text-gray-300 hover:text-white">
                <YoutubeIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Schools */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Schools</h3>
            <ul className="space-y-2">
              {footerLinks.schools.map((school) => (
                <li key={school.name}>
                  <Link 
                    href={school.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {school.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-2">
                <LocationIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Plot No. 206, Bhagwanpur, Varanasi - 221005, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                <span>+91 9721452435</span>
              </li>
              <li className="flex items-center space-x-2">
                <EmailIcon className="w-5 h-5 flex-shrink-0" />
                <span>info@sunbeamschools.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sunbeam Group of Educational Institutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-gray-400 hover:text-white">
                Terms & Conditions
              </Link>
            </div>
            <p className="text-gray-500 text-xs">
              Developed by Rangoli It Solutions  [sunbeamschool](https://sunbeamschool.in/contact_us.html)
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

const footerLinks = {
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Admission", href: "/admission" },
    { label: "Fee Structure", href: "/fee-structure" },
    { label: "Careers", href: "/careers" },
    { label: "Alumni", href: "/alumni" },
    { label: "Contact", href: "/contact" },
    { label: "FAQs", href: "/faqs" }
  ],
  schools: [
    { name: "Annapurna", href: "/schools/annapurna" },
    { name: "Bhagwanpur", href: "/schools/bhagwanpur" },
    { name: "Indiranagar", href: "/schools/indiranagar" },
    { name: "Lahartara", href: "/schools/lahartara" },
    { name: "Suncity", href: "/schools/suncity" },
    { name: "Varuna", href: "/schools/varuna" },
    { name: "Sarnath", href: "/schools/sarnath" },
    { name: "International Varuna", href: "/schools/international-varuna" }
  ]
}
```

### **10.2 Contact Page Component**

**Component:** `app/contact/page.tsx`

```tsx
import { schoolContacts } from '@/config/schoolContacts'
import { ContactForm } from '@/components/contact/ContactForm'

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        {/* Main Office */}
        <div className="bg-orange-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">SUNBEAM GROUP</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-medium text-gray-600">Postal Address</h3>
              <p>{schoolContacts.groupOffice.address}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-600">Contact Numbers</h3>
              <p>+91 9721452435</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-600">Email Address</h3>
              <p>{schoolContacts.groupOffice.email}</p>
            </div>
          </div>
        </div>

        {/* All Schools Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {schoolContacts.schools.map((school) => (
            <div key={school.name} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3">{school.name}</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-gray-600">Address:</span>
                  <p className="text-gray-700">{school.address}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Phone:</span>
                  <p className="text-gray-700">{school.phone}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Email:</span>
                  <p className="text-gray-700">{school.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Send us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
```

***

## **11. Technical Implementation Guide**

### **11.1 Phase-wise Implementation Roadmap**

#### **Phase 1: Foundation (Week 1-2)**
- [ ] Set up Next.js 14 project with TypeScript
- [ ] Configure Tailwind CSS and ShadCN UI
- [ ] Set up database (Supabase/MongoDB)
- [ ] Implement authentication system
- [ ] Create base layout components (Navbar, Footer)

#### **Phase 2: Homepage (Week 3-4)**
- [ ] Build Hero Carousel with all 13 slides
- [ ] Implement Pedagogy section with 4 pillars
- [ ] Create IGNITE curriculum section
- [ ] Build THRIVE section
- [ ] Implement REFLECT section
- [ ] Create FUTURE-READY section
- [ ] Build News & Insights grid
- [ ] Implement Schools & Colleges grid

#### **Phase 3: Navigation & Routing (Week 5)**
- [ ] Implement all primary navigation items
- [ ] Create dropdown menus for Schools, Hostel, Knowledge Partners
- [ ] Build breadcrumb navigation
- [ ] Implement mobile responsive menu

#### **Phase 4: Admission System (Week 6-7)**
- [ ] Build enquiry form with validation
- [ ] Create admission workflow pages
- [ ] Implement fee structure display
- [ ] Set up API routes for form submission
- [ ] Create admin dashboard for enquiry management

#### **Phase 5: ERP Portal (Week 8-10)**
- [ ] Build student login/registration
- [ ] Create student dashboard
- [ ] Implement attendance tracking
- [ ] Build marks/grade management
- [ ] Create parent portal
- [ ] Implement teacher dashboard

#### **Phase 6: School Subdomains (Week 11-12)**
- [ ] Set up subdomain routing
- [ ] Create school-specific pages
- [ ] Implement contact pages for all schools
- [ ] Build school-specific galleries

#### **Phase 7: Testing & Deployment (Week 13-14)**
- [ ] Comprehensive testing
- [ ] Performance optimization
- [ ] SEO implementation
- [ ] Deploy to production

### **11.2 Key Dependencies**

```json
{
  "dependencies": {
    "next": "14.2.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "@supabase/supabase-js": "^2.45.0",
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-select": "^2.1.1",
    "@hookform/resolvers": "^3.9.0",
    "zod": "^3.23.8",
    "react-hook-form": "^7.52.1",
    "tailwindcss": "^3.4.6",
    "tailwindcss-animate": "^1.0.7",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.4.0",
    "lucide-react": "^0.417.0",
    "embla-carousel-react": "^8.1.7"
  }
}
```

### **11.3 Background Images Directory Structure**

```
public/images/backgrounds/
├── hero/
│   ├── protsahan-2025.jpg
│   ├── melody.jpg
│   ├── learning-by-doing.jpg
│   ├── leadership.jpg
│   ├── graduates.jpg
│   ├── marching-band.jpg
│   ├── sports.jpg
│   ├── qct.jpg
│   ├── innovation.jpg
│   ├── little-warriors.jpg
│   ├── sapling.jpg
│   ├── together.jpg
│   └── swimming.jpg
├── curriculum/
│   ├── foundational.jpg
│   ├── primary.jpg
│   ├── middle.jpg
│   └── senior.jpg
├── sections/
│   ├── ignite.jpg
│   ├── thrive.jpg
│   ├── reflect.jpg
│   └── future-ready.jpg
├── schools/
│   ├── annapurna.jpg
│   ├── bhagwanpur.jpg
│   ├── indiranagar.jpg
│   ├── lahartara.jpg
│   ├── suncity.jpg
│   ├── varuna.jpg
│   ├── sarnath.jpg
│   └── international-varuna.jpg
└── static/
    ├── pattern-1.jpg
    ├── pattern-2.jpg
    ├── gradient-1.jpg
    └── texture-1.jpg
```

***

## **Appendix A: Complete Content Extraction Summary**

### **Homepage Sections (Complete)**

1. **Hero Carousel** - 13 slides with titles and subtitles [sunbeamschools](https://www.sunbeamschools.com/)
2. **Pedagogy Section** - 4 pillars (IGNITE, THRIVE, REFLECT, FUTURE-READY) [sunbeamschools](https://www.sunbeamschools.com/)
3. **IGNITE Curriculum** - 4 stages (Foundational, Primary, Middle, Senior) [sunbeamschools](https://www.sunbeamschools.com/)
4. **THRIVE Section** - Parallel curriculum for holistic growth [sunbeamschools](https://www.sunbeamschools.com/)
5. **REFLECT Section** - SEL, culture, mindfulness, safety [sunbeamschools](https://www.sunbeamschools.com/)
6. **FUTURE-READY Section** - Career, leadership, technology, innovation [sunbeamschools](https://www.sunbeamschools.com/)
7. **News & Insights** - 9 news items from various schools [sunbeamschools](https://www.sunbeamschools.com/)
8. **Schools Grid** - 9 schools + 2 colleges [sunbeamschools](https://www.sunbeamschools.com/)
9. **Knowledge Partners** - 16 partner schools [sunbeamschools](https://www.sunbeamschools.com/)
10. **Affiliations & Accreditations** - CBSE, Cambridge [sunbeamschools](https://www.sunbeamschools.com/)
11. **Admission Enquiry CTA** - Form with helpline info [sunbeamschools](https://www.sunbeamschools.com/)

### **Footer Content (Complete)**

- Group office address and contact [sunbeamschools](https://sunbeamschools.com/how-to-reach-us.php)
- All 9 school addresses with phones and emails [sunbeamschools](https://sunbeamschools.com/how-to-reach-us.php)
- 2 college listings [sunbeamschools](https://www.sunbeamschools.com/)
- 16 knowledge partner locations [sunbeamschools](https://www.sunbeamschools.com/)
- Social media links
- Quick links navigation
- Developer credit: "Developed by Rangoli It Solutions" [sunbeamschools](https://www.sunbeamschools.com/Admission/admissionassistance)

***

This PRD provides a complete blueprint for replicating the Sunbeam Schools website and ERP system with all UI components, styling, navigation, content, and background images. Each phase is modular and can be implemented incrementally following the phased development approach you're familiar with.