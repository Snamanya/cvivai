
import React from 'react';
import { MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  const categories: ('Appetizers' | 'Main Course' | 'Desserts' | 'Drinks')[] = ['Appetizers', 'Main Course', 'Desserts', 'Drinks'];

  return (
    <div className="pt-20 bg-stone-50 min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://picsum.photos/id/42/1920/1080" 
          alt="Menu" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.5]"
        />
        <div className="relative z-10 text-center px-4">
          <h4 className="text-white text-xs uppercase tracking-[0.4em] mb-4">Culinary Excellence</h4>
          <h1 className="text-4xl md:text-7xl text-white font-serif">The Azure Table</h1>
        </div>
      </section>

      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-stone-500 uppercase tracking-widest text-xs mb-4">Fine Dining Experience</p>
          <h2 className="text-3xl font-serif">A Symphony of Flavors</h2>
          <div className="w-20 h-px bg-stone-300 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-serif mb-10 border-b border-stone-200 pb-2">{category}</h3>
              <div className="space-y-8">
                {MENU_ITEMS.filter(item => item.category === category).map((item) => (
                  <div key={item.id} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-lg font-medium group-hover:text-stone-500 transition-colors uppercase tracking-wider">{item.name}</h4>
                      <div className="flex-1 border-b border-dotted border-stone-300 mx-4"></div>
                      <span className="text-lg font-serif">${item.price}</span>
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-stone-900 text-white text-center rounded-sm">
          <h3 className="text-3xl font-serif mb-6">Reserve Your Table</h3>
          <p className="text-stone-400 mb-8 max-w-md mx-auto">Join us for an unforgettable evening. We recommend booking at least 48 hours in advance for dinner service.</p>
          <button className="border border-white/30 px-10 py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-all">
            Book a Reservation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Menu;
