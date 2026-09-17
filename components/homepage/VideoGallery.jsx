'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, X, Video } from 'lucide-react';

const videos = [
  {
    id: 1,
    src: '/PHIS/videos/science-expo-1.mp4',
    title: 'Science Expo & Innovation Fair',
    category: 'ACADEMICS & STEM'
  },
  {
    id: 2,
    src: '/PHIS/videos/science-expo-2.mp4',
    title: 'Science Project Demonstration',
    category: 'STEM EXHIBITS'
  },
  {
    id: 3,
    src: '/PHIS/videos/science-expo-3.mp4',
    title: 'Rain Water Harvesting Model',
    category: 'INNOVATION FAIR'
  },
  {
    id: 4,
    src: '/PHIS/videos/activity-1.mp4',
    title: 'Saturday Half Class Activity',
    category: 'EXTRA ACTIVITIES'
  },
  {
    id: 5,
    src: '/PHIS/videos/sports.mp4',
    title: 'School Football Saturday Half Day',
    category: 'SPORTS & FITNESS'
  },
  {
    id: 6,
    src: '/PHIS/videos/library.mp4',
    title: 'Campus Library & Resource Tour',
    category: 'FACILITIES'
  },
  {
    id: 7,
    src: '/PHIS/videos/garba.mp4',
    title: 'Cultural Garba & Folk Dance',
    category: 'CULTURAL CELEBRATIONS'
  },
  {
    id: 8,
    src: '/PHIS/videos/mothers-day.mp4',
    title: 'Mother\'s Day Celebrations & School Events',
    category: 'SCHOOL EVENTS'
  }
];

export function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRefs = useRef({});
  const activePreviewId = useRef(null);

  const handleMouseEnter = (id) => {
    if (activePreviewId.current && activePreviewId.current !== id) {
      const previousVideo = videoRefs.current[activePreviewId.current];
      if (previousVideo) {
        previousVideo.pause();
        previousVideo.currentTime = 0;
        previousVideo.muted = true;
      }
    }

    const video = videoRefs.current[id];
    if (!video) return;

    activePreviewId.current = id;
    video.muted = true;
    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {});
    }
  };

  const handleMouseLeave = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    video.muted = true;

    if (activePreviewId.current === id) {
      activePreviewId.current = null;
    }
  };

  const openVideo = (video) => {
    if (activePreviewId.current) {
      const activeVideo = videoRefs.current[activePreviewId.current];
      if (activeVideo) {
        activeVideo.pause();
        activeVideo.currentTime = 0;
        activeVideo.muted = true;
      }
      activePreviewId.current = null;
    }

    const preview = videoRefs.current[video.id];
    if (preview) {
      preview.pause();
      preview.currentTime = 0;
      preview.muted = true;
    }

    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeVideo();
      }
    };

    if (selectedVideo) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selectedVideo]);

  return (
    <section id="videos" className="bg-[#172f75] py-20 text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 mb-3">
            <Video className="h-3.5 w-3.5 text-yellow-400" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
              Campus Life
            </span>
          </div>

          <h2 className="text-4xl font-bold text-white md:text-5xl tracking-tight">
            Moments That Inspire
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-blue-100">
            Explore science, sports, culture, creativity, and everyday learning at
            Pragya Heritage International School.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {videos.map((video) => (
            <article
              key={video.id}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-blue-700/60 bg-[#172b68] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-2xl flex flex-col justify-between"
              onMouseEnter={() => handleMouseEnter(video.id)}
              onMouseLeave={() => handleMouseLeave(video.id)}
              onClick={() => openVideo(video)}
            >
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <video
                  ref={(element) => {
                    videoRefs.current[video.id] = element;
                  }}
                  src={video.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-yellow-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-950 shadow-md">
                  {video.category}
                </span>

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-blue-900 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-400">
                    <Play className="ml-1 h-6 w-6 fill-current" />
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="line-clamp-2 text-lg font-bold text-white transition-colors group-hover:text-yellow-300">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-sm text-blue-200">
                    Click to watch with sound
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={selectedVideo.title}
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-[#101d46] border border-blue-700/50 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeVideo}
              aria-label="Close video"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="aspect-video bg-black">
              <video
                key={selectedVideo.id}
                src={selectedVideo.src}
                autoPlay
                controls
                playsInline
                className="h-full w-full object-contain"
                onLoadedMetadata={(event) => {
                  event.currentTarget.muted = false;
                  event.currentTarget.volume = 1;
                  event.currentTarget.play().catch(() => {});
                }}
              />
            </div>

            <div className="p-6">
              <span className="rounded-full bg-yellow-500 px-3 py-1 text-xs font-bold uppercase text-slate-950">
                {selectedVideo.category}
              </span>

              <h2 className="mt-3 text-2xl font-bold text-white">
                {selectedVideo.title}
              </h2>

              <p className="mt-2 text-sm text-blue-200">
                Enjoy this moment from Pragya Heritage International School.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
