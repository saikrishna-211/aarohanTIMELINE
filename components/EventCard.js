import { motion } from 'framer-motion';
import { useMemo } from 'react';

const iconMap = {
  tech: '💡',
  workshop: '🛠️',
  fun: '🎮',
  performance: '🎤',
  default: '✨',
};

export default function EventCard({ event, index }) {
  const side = index % 2 === 0 ? 'left' : 'right';
  const icon = useMemo(() => iconMap[event.type] || iconMap.default, [event.type]);

  const variants = {
    hidden: { opacity: 0, y: 24, x: side === 'left' ? -24 : 24 },
    show: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <div className={`w-full md:w-1/2 ${side === 'left' ? 'md:pr-10 md:self-start' : 'md:pl-10 md:self-end'} relative` }>
      {/* connector dot */}
      <span className="pulse-dot hidden md:block" style={{ top: 36 }} />

      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        className={`glass glow-border rounded-xl p-5 md:p-6 text-white/90 shadow-neon hover:shadow-[0_0_16px_rgba(255,0,255,0.7),_0_0_24px_rgba(0,255,255,0.6)] transition-shadow duration-300 ${side === 'left' ? 'md:mr-auto' : 'md:ml-auto'}`}
      >
        <div className="flex items-start gap-3">
          <div className="text-2xl md:text-3xl" aria-hidden>
            {icon}
          </div>
          <div>
            <h3 className="font-orbitron text-lg md:text-xl font-extrabold text-white">
              {event.name}
            </h3>
            {event.club && (
              <p className="text-neonPink font-semibold text-sm">[{event.club}]</p>
            )}
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm">
              <p>
                <span className="text-electricBlue font-semibold">Time: </span>
                <span className="text-white/80">{event.time}</span>
              </p>
              <p>
                <span className="text-electricBlue font-semibold">Venue: </span>
                <span className="text-white/80">{event.venue}</span>
              </p>
            </div>
            <div className="mt-4">
              <motion.a
                whileHover={{ scale: 1.03, boxShadow: '0 0 14px rgba(255,0,255,0.7), 0 0 22px rgba(0,255,255,0.6)' }}
                href="#"
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
              >
                Learn More →
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
