import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Achievements,
  Certifications,
  Internships,
  Contact,
  Footer,
  StarField,
} from "@/components";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full portfolio-main">
      {/* 3D Star field + ambient particles */}
      <StarField />
      {/* Gradient background blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-700/[0.07] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-violet-600/[0.06] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-700/[0.04] rounded-full blur-3xl" />
      </div>
      <Navbar />
      <div className="w-full mx-auto" style={{ paddingTop: '60px', paddingLeft: '60px', paddingRight: '60px', maxWidth: '1600px' }}>
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-[35%]">
            <Hero />
          </div>
          <div className="lg:w-[65%]" style={{ paddingTop: '40px', paddingRight: '0px' }}>
            <About />
          </div>
        </div>
      </div>
      <div style={{ height: '60px' }}></div>
      <Skills />
      <div style={{ height: '30px', backgroundColor: 'transparent' }}></div>
      <Certifications />
      <div style={{ height: '60px', backgroundColor: 'transparent' }}></div>
      <Achievements />
      <div style={{ height: '60px', backgroundColor: 'transparent' }}></div>
      <div className="w-full" style={{ paddingLeft: '60px', paddingRight: '60px', maxWidth: '1600px', margin: '0 auto' }}>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-[68%]">
            <Internships />
          </div>
          <div className="lg:w-[32%]">
            <Projects />
          </div>
        </div>
      </div>
      <div style={{ height: '20px', backgroundColor: 'transparent' }}></div>
      <Contact />
      <Footer />
    </main>
  );
}
