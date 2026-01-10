import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';
import ChapterList from './components/ChapterList';
import { storyData } from './storyConfig';

// Layout wrapper for Chapter pages
const ChapterLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-paper dark:bg-void transition-colors duration-500">
      <nav className="fixed top-0 left-0 p-6 z-40">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-stone-500 hover:text-ink dark:hover:text-stone-300 transition-colors font-sans text-sm uppercase tracking-wide"
        >
          <ArrowLeft size={16} /> Index
        </Link>
      </nav>
      
      <main className="max-w-3xl mx-auto pt-32 px-6 pb-32">
        {children}
      </main>
    </div>
  );
};

// Layout wrapper for Home
const HomeLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-paper dark:bg-void transition-colors duration-500">
      {children}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ThemeToggle />
      <Routes>
        <Route 
          path="/" 
          element={
            <HomeLayout>
              <ChapterList arcs={storyData} />
            </HomeLayout>
          } 
        />
        
        {/* Dynamically generate routes based on config */}
        {storyData.map((arc) => (
          arc.chapters.map((chapter) => (
            <Route 
              key={chapter.id}
              path={chapter.path}
              element={
                <ChapterLayout>
                  <Suspense fallback={<div className="text-center mt-20 text-stone-400 animate-pulse">Loading...</div>}>
                    <chapter.component />
                  </Suspense>
                </ChapterLayout>
              }
            />
          ))
        ))}
      </Routes>
    </Router>
  );
}

export default App;