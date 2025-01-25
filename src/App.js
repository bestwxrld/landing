import React from 'react';
import { useInView } from 'react-intersection-observer';
import LandingPage from './pages/LandingPage';
import LandingPage2 from './pages/LandingPage2';

function App() {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <div
        ref={ref1}
        className={`transition-opacity duration-1000 ${inView1 ? 'opacity-100' : 'opacity-0'}`}
      >
        <LandingPage />
      </div>

      <div
        ref={ref2}
        className={`transition-opacity duration-1000 ${inView2 ? 'opacity-100' : 'opacity-0'}`}
      >
        <LandingPage2 />
      </div>
    </div>
  );
}

export default App;
