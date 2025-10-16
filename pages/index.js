import { useMemo, useState, useEffect } from 'react';
import { events as dataset } from '@/data/events';
import DaySelector from '@/components/DaySelector';
import EventCard from '@/components/EventCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [day, setDay] = useState('day1');

  // fade-in on switch
  const list = useMemo(() => dataset[day] || [], [day]);

  useEffect(() => {
    // optional: scroll to top when day changes
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [day]);

  return (
    <main className="min-h-screen relative text-white font-poppins">
      <div className="body-bg" />
      <div className="body-overlay" />

      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-4 pt-12 pb-6 md:pt-16">
        <div className="text-center">
          <h1 className="neon-text font-orbitron font-extrabold text-3xl md:text-5xl leading-tight">
            AAROHAṆ 2025–26 EVENT TIMELINE
          </h1>
          <p className="mt-3 text-white/80 text-sm md:text-base">
            National Institute of Technology, Durgapur
          </p>
        </div>

        {/* Day selector */}
        <div className="mt-6 md:mt-8">
          <DaySelector activeDay={day} onChange={setDay} />
        </div>
      </section>

      {/* Timeline */}
      <section className="relative max-w-6xl mx-auto px-3 md:px-4 pb-24">
        <div className="timeline-line hidden md:block" />

        <AnimatePresence mode="wait">
          <motion.div
            key={day}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 gap-6 md:gap-y-12 relative"
          >
            {list.map((ev, i) => (
              <EventCard key={`${ev.name}-${i}`} event={ev} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* mobile vertical line with dots */}
        <div className="md:hidden mt-8 border-l-2 border-white/20 mx-6"></div>
      </section>

      {/* Back to top */}
      <BackToTop />
    </main>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full bg-gradient-to-r from-neonPink to-electricBlue text-deepViolet font-bold shadow-neon"
          aria-label="Back to top"
        >
          ↑ Top
        </motion.button>
      )}
    </AnimatePresence>
  );
}
