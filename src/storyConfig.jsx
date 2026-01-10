import { lazy } from 'react';

// Lazy load chapters for performance. 
// This means the code for Chapter 5 won't load until the user clicks it.
const Act1Ch1 = lazy(() => import('./chapters/act1/Ch1_TheBeginning'));

export const storyData = [
  {
    id: "act-1",
    title: "Act I: The Awakening",
    description: "In which the silence is broken.",
    chapters: [
      {
        id: "ch-1",
        title: "Chapter I: The Epilogue that Wouldn't Stay Quiet",
        path: "/read/act-1/ch-1",
        component: Act1Ch1 
      },
      // You can easily add more chapters here later
      // { id: "ch-2", title: "Chapter II: The Door", path: "/read/act-1/ch-2", component: Act1Ch2 },
    ]
  },
  {
    id: "act-2",
    title: "Act II: ???",
    description: "Deeper into the unknown. To be continued...",
    chapters: [] // Empty for now
  }
];