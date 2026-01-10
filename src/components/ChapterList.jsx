import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ArcItem = ({ arc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8 border-b border-stone-200 dark:border-stone-800 pb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <div>
          <h2 className="text-2xl font-serif text-ink dark:text-stone-200 group-hover:text-stone-500 transition-colors">
            {arc.title}
          </h2>
          <p className="text-sm text-stone-500 font-sans mt-1">{arc.description}</p>
        </div>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-stone-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <ul className="pl-4 mt-4 space-y-3 border-l-2 border-stone-100 dark:border-stone-900 ml-2">
              {arc.chapters.length > 0 ? (
                arc.chapters.map((chapter) => (
                  <li key={chapter.id}>
                    <Link 
                      to={chapter.path}
                      className="block font-sans text-stone-600 dark:text-stone-400 hover:text-ink dark:hover:text-stone-100 hover:translate-x-1 transition-all duration-300"
                    >
                      {chapter.title}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="text-xs text-stone-400 italic pl-2">Coming soon...</li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ChapterList = ({ arcs }) => {
  return (
    <div className="max-w-2xl mx-auto pt-24 px-6 pb-20">
      <header className="mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-thin tracking-tighter text-ink dark:text-stone-100 mb-4">
          Stranger Things - The Unfinished Tale
        </h1>
        <p className="text-stone-500 font-sans tracking-widest text-xs uppercase">
          
        </p>
      </header>
      
      <div className="space-y-2">
        {arcs.map((arc) => (
          <ArcItem key={arc.id} arc={arc} />
        ))}
      </div>
      <footer className="mt-12 text-center text-sm text-stone-500 italic">
        Wasn't joking when I said I was gonna blow your mind
      </footer>
    </div>
  );
};

export default ChapterList;