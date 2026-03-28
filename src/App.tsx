/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Instagram, Mail, ChevronRight, ArrowDown, X } from 'lucide-react';
import { SEASONS } from './constants';
import { Season, Photo } from './types';

export default function App() {
  const [activeSeason, setActiveSeason] = useState<Season>('spring');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);

  const currentSeasonData = SEASONS.find(s => s.id === activeSeason)!;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-1000" style={{ backgroundColor: `${currentSeasonData.color}08` }}>
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-6 flex justify-between items-center ${
          isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-2 group cursor-pointer">
          <Camera className={`w-6 h-6 transition-colors duration-500 ${isScrolled ? 'text-neutral-900' : 'text-white'}`} />
          <span className={`text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-500 ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
            Aranya Jinshanling
          </span>
        </div>

        <div className="hidden md:flex gap-8">
          {SEASONS.map((season) => (
            <button
              key={season.id}
              onClick={() => setActiveSeason(season.id)}
              className={`text-xs uppercase tracking-widest transition-all duration-300 relative py-1 ${
                activeSeason === season.id 
                  ? (isScrolled ? 'text-neutral-900' : 'text-white') 
                  : (isScrolled ? 'text-neutral-400 hover:text-neutral-900' : 'text-white/50 hover:text-white')
              }`}
            >
              {season.title}
              {activeSeason === season.id && (
                <motion.div 
                  layoutId="activeSeason"
                  className={`absolute bottom-0 left-0 right-0 h-[1px] ${isScrolled ? 'bg-neutral-900' : 'bg-white'}`}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          <Instagram className={`w-5 h-5 cursor-pointer transition-colors duration-500 ${isScrolled ? 'text-neutral-900' : 'text-white'}`} />
          <Mail className={`w-5 h-5 cursor-pointer transition-colors duration-500 ${isScrolled ? 'text-neutral-900' : 'text-white'}`} />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSeason}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/30 z-10" />
            <img
              src={currentSeasonData.heroImage}
              alt={currentSeasonData.title}
              className="w-full h-full object-cover cursor-zoom-in"
              referrerPolicy="no-referrer"
              onClick={() => setSelectedImage({
                id: 'hero',
                url: currentSeasonData.heroImage,
                title: currentSeasonData.title,
                location: 'Hero View'
              })}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-6">
          <motion.div
            key={`${activeSeason}-title`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h2 className="serif text-xl md:text-2xl italic mb-4 opacity-80 tracking-widest">
              {currentSeasonData.chineseTitle}
            </h2>
            <h1 className="serif text-7xl md:text-9xl font-light tracking-tighter mb-8">
              {currentSeasonData.title}
            </h1>
            <p className="max-w-lg mx-auto text-sm md:text-base font-light leading-relaxed opacity-90 tracking-wide">
              {currentSeasonData.description}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-60">Scroll to Explore</span>
            <ArrowDown className="w-4 h-4 opacity-40 animate-bounce" />
          </motion.div>
        </div>

        {/* Vertical Rail Text */}
        <div className="absolute left-6 bottom-32 z-20 hidden lg:block">
          <div className="writing-vertical-rl text-[10px] uppercase tracking-[0.5em] text-white/40">
            Photography by Independent Artist
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h3 className="serif text-4xl md:text-5xl mb-6">Capturing the Essence</h3>
            <p className="text-neutral-500 leading-relaxed font-light">
              Aranya Jinshanling is more than a community; it's a living dialogue between architecture and the rugged beauty of the mountains. Each season tells a different story of light, texture, and silence.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs uppercase tracking-widest font-medium group cursor-pointer">
            View Full Archive <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <AnimatePresence mode="wait">
            {currentSeasonData.gallery.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className={`group relative ${index % 2 === 1 ? 'md:mt-24' : ''}`}
              >
                <div 
                  className="overflow-hidden aspect-[4/5] bg-neutral-100 cursor-zoom-in"
                  onClick={() => setSelectedImage(photo)}
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:object-contain group-hover:scale-110 group-hover:bg-neutral-200"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <h4 className="serif text-2xl mb-1">{photo.title}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-400">{photo.location}</p>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-300">0{index + 1}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      {/* Seasonal Switcher (Bottom Mobile) */}
      <div className="md:hidden fixed bottom-10 left-1/2 -translate-x-1/2 z-40 bg-white/20 backdrop-blur-2xl px-8 py-4 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] flex gap-8 border border-white/30">
        {SEASONS.map((season) => (
          <button
            key={season.id}
            onClick={() => setActiveSeason(season.id)}
            className={`text-sm tracking-widest transition-all duration-300 serif-sc ${
              activeSeason === season.id ? 'text-neutral-900 font-medium scale-125' : 'text-neutral-500 hover:text-neutral-700'
            }`}
          >
            {season.chineseTitle.split(' · ')[0]}
          </button>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="serif text-5xl md:text-7xl mb-8 opacity-90">Let's witness the <br />mountain together.</h2>
            <div className="flex flex-wrap gap-8">
              <a href="#" className="text-sm uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-colors">Inquiries</a>
              <a href="#" className="text-sm uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-colors">Exhibitions</a>
              <a href="#" className="text-sm uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-colors">Prints</a>
            </div>
          </div>
          <div className="flex flex-col justify-end gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">Contact</p>
            <p className="text-lg font-light">sean.zheng2008@gmail.com</p>
            <div className="flex gap-4 mt-4">
              <Instagram className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
              <Camera className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-white/30">
          <p>© 2026 Aranya Jinshanling Photography</p>
          <p>Designed for the Four Seasons</p>
        </div>
      </footer>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-full max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="mt-8 text-center text-white">
                <h4 className="serif text-3xl mb-2">{selectedImage.title}</h4>
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">{selectedImage.location}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
