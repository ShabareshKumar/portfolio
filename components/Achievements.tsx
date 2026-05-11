'use client';
import { useState, useRef, useEffect } from 'react';

export default function Achievements() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const achievements = [
    {
      title: "Ideathon Winner",
      description: "Sairam Ideathon 4.0 Winner - Developed innovative Traffic Management solution aligned with SDG Goal 11: Sustainable Cities and Communities",
      image: "/ideathon-winner.jpg"
    },
    {
      title: "Praestantia 2K24",
      description: "First Place in Flicker Frenzy - Department of Electronics and Communication Engineering, Sri Sai Ram Institute of Technology",
      image: "/praestantia-certificate.png"
    },
    {
      title: "NPTEL Cloud Computing",
      description: "Elite Certificate with 75% score - Ranked in Top 5% among 27,874 candidates in Cloud Computing course",
      image: "/nptel-cloud.png"
    },
    {
      title: "Wadhwani Foundation",
      description: "Certificate of Program Completion - Ignite for Entrepreneurs India - Gained hands-on entrepreneurial skills through coursework and assessments",
      image: "/wadhwani.png"
    },
    {
      title: "NPTEL Programming in Java",
      description: "Elite Certificate with 62% score - Successfully completed Programming in Java course",
      image: "/nptel-programmin in java.png"
    }
  ];

  const CARD_WIDTH = 350 + 32;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isDragging) return;

    const totalWidth = achievements.length * CARD_WIDTH;
    el.scrollLeft = totalWidth;

    let animationFrameId: number;
    const scroll = () => {
      if (!el || isPaused || isDragging) return;
      
      el.scrollLeft += 1;
      
      if (el.scrollLeft >= totalWidth * 2) {
        el.scrollLeft = totalWidth;
      }
      
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  return (
    <section id="achievements" className="py-20" style={{ marginBottom: '30px' }}>
      <div className="max-w-[1600px] mx-auto px-[60px]">
        <h2 className="text-4xl font-bold text-center" style={{ marginBottom: '50px' }}>Achievements</h2>
        <div
          ref={scrollRef}
          className="relative overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', marginTop: '20px' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex gap-8"
            style={{ width: 'fit-content' }}
          >
            {[...achievements, ...achievements, ...achievements].map((achievement, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-all"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="mb-4">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-auto object-contain rounded-lg border-2 border-purple-500/50"
                    style={{ filter: 'brightness(0.85)' }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white text-center">{achievement.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed px-4 text-center">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}