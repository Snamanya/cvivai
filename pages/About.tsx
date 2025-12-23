
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="text-stone-400 uppercase tracking-widest text-xs mb-4">Our History</h4>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Founded on the <br/>Principles of Grace.</h2>
              <p className="text-stone-600 text-lg mb-6 leading-relaxed">
                Established in 1984, Azure Horizon began as a boutique guesthouse for wandering artists and intellectuals. Today, it stands as a global benchmark for sustainable luxury and tailored service.
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Our philosophy is simple: hospitality is not an industry, it is a ritual. We treat every guest as a lifelong friend, ensuring that their stay is etched in memory forever.
              </p>
              <div className="grid grid-cols-2 gap-8 text-center bg-stone-50 p-8 rounded-sm">
                <div>
                  <div className="text-4xl font-serif mb-2">40+</div>
                  <div className="text-xs uppercase tracking-widest text-stone-400">Years of Luxury</div>
                </div>
                <div>
                  <div className="text-4xl font-serif mb-2">15</div>
                  <div className="text-xs uppercase tracking-widest text-stone-400">Design Awards</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/id/175/800/1000" alt="History" className="w-full rounded-sm shadow-2xl" />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-stone-900/5 -z-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-900 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-16">The Pillars of Azure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-left border-l border-white/20 pl-8">
              <h3 className="text-xl font-serif mb-4">Environmental Stewardship</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                We are committed to preserving the beauty that surrounds us. 100% of our energy is sourced from renewable solar arrays, and we operate a zero-plastic facility.
              </p>
            </div>
            <div className="text-left border-l border-white/20 pl-8">
              <h3 className="text-xl font-serif mb-4">Local Craftsmanship</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                From the hand-woven linens to the artisanal furniture in our lobby, we partner exclusively with local craftsmen to celebrate the heritage of our region.
              </p>
            </div>
            <div className="text-left border-l border-white/20 pl-8">
              <h3 className="text-xl font-serif mb-4">Authentic Connection</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Our staff are storytellers. They don't just guide you to your room; they share the secrets of the coast and the soul of our hotel.
              </p>
            </div>
            <div className="text-left border-l border-white/20 pl-8">
              <h3 className="text-xl font-serif mb-4">Uncompromising Privacy</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                In a world that is always connected, we offer the ultimate luxury: the freedom to be unreachable in total seclusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <h2 className="text-3xl font-serif">Meet the Visionaries</h2>
            <p className="text-stone-500 max-w-md text-sm mt-4 md:mt-0 italic">
              "The heart of Azure Horizon is our people. Every smile, every gesture, is a part of our shared legacy."
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1,2,3,4].map(i => (
              <div key={i} className="bg-white p-6 rounded-sm shadow-sm">
                <img src={`https://picsum.photos/id/${i+100}/300/300`} className="w-full aspect-square object-cover mb-4 rounded-sm grayscale" alt="Team" />
                <h4 className="font-semibold text-stone-900">Alexandria Smith</h4>
                <p className="text-stone-400 text-xs uppercase tracking-widest mt-1">General Manager</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
