import { motion } from 'framer-motion';

const days = [
  { id: 'day1', label: 'Day 1 – Oct 17, 2025' },
  { id: 'day2', label: 'Day 2 – Oct 18, 2025' },
  { id: 'day3', label: 'Day 3 – Oct 19, 2025' },
];

export default function DaySelector({ activeDay, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
      {days.map((d) => {
        const isActive = activeDay === d.id;
        return (
          <motion.button
            key={d.id}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onChange(d.id)}
            className={`neon-btn ${isActive ? 'active' : ''}`}
          >
            {d.label}
          </motion.button>
        );
      })}
    </div>
  );
}
