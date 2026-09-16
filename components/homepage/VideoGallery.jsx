'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Play, Video, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/siteData';

const videoList = [
  {
    title: 'Science Expo & Innovation Fair',
    category: 'Academics & STEM',
    thumbnail: '/PHIS/gallery/34789627_2063065620623207_5911851530360717312_n.jpg',
    videoSrc: '/PHIS/videos/science-expo-1.mp4',
    instagramUrl: 'https://www.instagram.com/_pragya_heritage_/'
  },
  {
    title: 'Science Project Demonstration',
    category: 'STEM Exhibits',
    thumbnail: '/PHIS/gallery/34811866_2063064630623306_6640622246865928192_n.jpg',
    videoSrc: '/PHIS/videos/science-expo-2.mp4',
    instagramUrl: 'https://www.instagram.com/_pragya_heritage_/'
  },
  {
    title: 'Robotics & Working Models',
    category: 'Innovation Fair',
    thumbnail: '/PHIS/gallery/35070783_2063066203956482_181647962382794752_n.jpg',
    videoSrc: '/PHIS/videos/science-expo-3.mp4',
    instagramUrl: 'https://www.instagram.com/_pragya_heritage_/'
  },
  {
    title: 'Junior Scientific Showcase',
    category: 'Student Projects',
    thumbnail: '/PHIS/gallery/48425010_2202095403386894_3893730656638730240_n.jpg',
    videoSrc: '/PHIS/videos/science-expo-4.mp4',
    instagramUrl: 'https://www.instagram.com/_pragya_heritage_/'
  },
  {
    title: 'Annual Sports Day Athletics',
    category: 'Sports & Fitness',
    thumbnail: '/PHIS/gallery/41395055_2145129919083443_528795712058556416_n.jpg',
    videoSrc: '/PHIS/videos/sports-activities.mp4',
    instagramUrl: 'https://www.instagram.com/_pragya_heritage_/'
  },
  {
    title: 'Campus Library & Resource Tour',
    category: 'Facilities',
    thumbnail: '/PHIS/gallery/48412506_2202095776720190_8285816015128887296_n.jpg',
    videoSrc: '/PHIS/videos/library.mp4',
    instagramUrl: 'https://www.instagram.com/_pragya_heritage_/'
  },
  {
    title: 'Cultural Garba & Folk Dance',
    category: 'Cultural Celebrations',
    thumbnail: '/PHIS/gallery/50592065_2222045048058596_1139053716633026560_n.jpg',
    videoSrc: '/PHIS/videos/garba-dance.mp4',
    instagramUrl: 'https://www.instagram.com/_pragya_heritage_/'
  },
  {
    title: 'Annual Function & Prize Giving',
    category: 'School Events',
    thumbnail: '/PHIS/gallery/50745292_2222045408058560_6786571450401685504_n.jpg',
    videoSrc: '/PHIS/videos/annual-function.mp4',
    instagramUrl: 'https://www.instagram.com/_pragya_heritage_/'
  }
];

export function VideoGallery() {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const videoRefs = useRef({});

  const handleMouseEnter = (index) => {
    setHoveredVideo(index);
    const video = videoRefs.current[index];
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  const handleMouseLeave = (index) => {
    setHoveredVideo(null);
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 text-white relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="badge-phis bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-3 mx-auto">
            <Video className="w-3.5 h-3.5 text-amber-400" />
            <span>CAMPUS IN MOTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-white">
            Campus Life in Motion
          </h2>
          <p className="text-sm sm:text-base text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Experience the vibrant atmosphere at Pragya Heritage through video highlights from our science expos, sports meets, cultural celebrations, and campus life.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoList.map((video, index) => (
            <div
              key={index}
              className="relative group rounded-3xl overflow-hidden shadow-xl bg-blue-900/40 border border-blue-800/80 hover:border-amber-400/80 transition-all duration-300 flex flex-col cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Media Container */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                {/* Fallback image poster */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Video (plays on hover if available) */}
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video.videoSrc}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  muted
                  loop
                  playsInline
                  preload="none"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Category badge */}
                <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase shadow">
                  {video.category}
                </span>

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-blue-950 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-amber-400 transition-all">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-blue-950/80">
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1 mb-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-blue-300">
                    Hover to preview reel
                  </p>
                </div>

                <a
                  href={video.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 pt-3 border-t border-blue-900 flex items-center justify-between text-xs font-bold text-amber-400 hover:text-amber-300"
                >
                  <span>Watch on Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All on Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-phis-gold inline-flex items-center text-sm py-3.5 px-8 font-black shadow-xl hover:scale-105 transition-transform"
          >
            <span>Follow @_pragya_heritage_ on Instagram</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
