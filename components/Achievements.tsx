'use client';
import { useState, useRef, useEffect } from 'react';

const achievements = [
  {
    title: "Ideathon Winner",
    description: "Sairam Ideathon 4.0 Winner - Developed innovative Traffic Management solution aligned with SDG Goal 11: Sustainable Cities and Communities",
    image: "/ideathon-winner.jpg",
  },
  {
    title: "Praestantia 2K24",
    description: "First Place in Flicker Frenzy - Department of Electronics and Communication Engineering, Sri Sai Ram Institute of Technology",
    image: "/praestantia-certificate.png",
  },
  {
    title: "NPTEL Cloud Computing",
    description: "Elite Certificate with 75% score - Ranked in Top 5% among 27,874 candidates in Cloud Computing course",
    image: "/nptel-cloud.png",
  },
  {
    title: "Wadhwani Foundation",
    description: "Certificate of Program Completion - Ignite for Entrepreneurs India - Gained hands-on entrepreneurial skills through coursework and assessments",
    image: "/wadhwani.png",
  },
  {
    title: "NPTEL Programming in Java",
    description: "Elite Certificate with 62% score - Successfully completed Programming in Java course",
    image: "/nptel-programming-in-java.png",
  },
];

const CARD_WIDTH = 420 + 32; // card width + gap

export default function Achievements() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
      cancelAnimationFrame(animationFrameId);
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
        <h2 className="text-4xl font-bold text-center" style={{ marginBottom: '50px' }}>
          Achievements
        </h2>
        <div
          ref={scrollRef}
          className="relative overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', marginTop: '20px' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex gap-8" style={{ width: 'fit-content' }}>
            {[...achievements, ...achievements, ...achievements].map((achievement, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[420px] bg-gray-800 rounded-xl hover:bg-gray-700 transition-all overflow-hidden"
                style={{ border: '1px solid rgba(139, 92, 246, 0.25)' }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Certificate image — full width, no padding, no gaps */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    filter: 'brightness(0.88)',
                    borderBottom: '1px solid rgba(139, 92, 246, 0.25)',
                  }}
                  draggable={false}
                />
                {/* Text content */}
                <div style={{ padding: '20px 24px 24px' }}>
                  <h3 className="text-lg font-bold mb-2 text-white text-center">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-center">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
