
import React from 'react';
import { Link } from 'react-router-dom';
import { ROOMS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/400/1920/1080" 
            alt="Hero" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h4 className="text-white text-sm uppercase tracking-[0.4em] mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">Exclusivity at its finest</h4>
          <h1 className="text-5xl md:text-8xl text-white font-serif mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">Where the sky meets the soul.</h1>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            <Link to="/booking" className="bg-white text-stone-900 px-10 py-4 text-sm uppercase tracking-widest hover:bg-stone-200 transition-all">
              Discover Rooms
            </Link>
            <Link to="/about" className="bg-transparent border border-white text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-all">
              Our Story
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-8">A Sanctuary of Quiet Sophistication</h2>
          <p className="text-stone-600 leading-relaxed text-lg mb-12 italic">
            "Azure Horizon was born from a desire to create a space where time slows down, and every detail is a testament to the art of hospitality. We believe that true luxury isn't just about what you see, but how you feel."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <i className="fa-solid fa-water text-3xl mb-4 text-stone-400"></i>
              <h3 className="font-serif text-xl mb-2">Prime Location</h3>
              <p className="text-stone-500 text-sm">Nestled on the edge of the world, overlooking the endless ocean.</p>
            </div>
            <div className="p-6">
              <i className="fa-solid fa-spa text-3xl mb-4 text-stone-400"></i>
              <h3 className="font-serif text-xl mb-2">Holistic Wellness</h3>
              <p className="text-stone-500 text-sm">Experience our world-class spa treatments and meditation retreats.</p>
            </div>
            <div className="p-6">
              <i className="fa-solid fa-utensils text-3xl mb-4 text-stone-400"></i>
              <h3 className="font-serif text-xl mb-2">Gourmet Dining</h3>
              <p className="text-stone-500 text-sm">Award-winning culinary experiences that tantalize the senses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h4 className="text-stone-400 uppercase tracking-widest text-xs mb-2">Accommodations</h4>
              <h2 className="text-4xl md:text-5xl font-serif">Our Signature Rooms</h2>
            </div>
            <Link to="/booking" className="mt-4 md:mt-0 text-stone-900 border-b border-stone-900 pb-1 text-sm uppercase tracking-widest hover:text-stone-500 hover:border-stone-500 transition-all">
              View All Suites
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {ROOMS.slice(0, 3).map((room) => (
              <div key={room.id} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/5] mb-6">
                  <img 
                    src={room.imageUrl} 
                    alt={room.type} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-white/90 backdrop-blur px-4 py-2 text-xs uppercase tracking-widest text-stone-900">
                      From ${room.price} / Night
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-2 group-hover:text-stone-600 transition-colors">{room.type}</h3>
                <p className="text-stone-500 text-sm line-clamp-2">{room.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Gallery */}
      <section className="bg-stone-900 py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/id/350/600/800" className="w-full h-full object-cover aspect-square rounded-sm" alt="Pool" />
                <img src="https://picsum.photos/id/292/600/800" className="w-full h-full object-cover aspect-square rounded-sm translate-y-8" alt="Dining" />
              </div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 border border-white/20 hidden md:block"></div>
            </div>
            <div>
              <h4 className="text-stone-400 uppercase tracking-widest text-xs mb-4">The Lifestyle</h4>
              <h2 className="text-4xl md:text-6xl font-serif mb-8">Elegance is an Attitude.</h2>
              <p className="text-stone-400 mb-10 text-lg leading-relaxed">
                Whether it's the morning dew on your private terrace or the evening glow of the sunset at our rooftop lounge, every moment at Azure Horizon is designed to be timeless.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center space-x-4 border-b border-white/10 pb-4">
                  <span className="text-2xl font-serif">01</span>
                  <span className="text-sm uppercase tracking-widest">Private Beach Access</span>
                </li>
                <li className="flex items-center space-x-4 border-b border-white/10 pb-4">
                  <span className="text-2xl font-serif">02</span>
                  <span className="text-sm uppercase tracking-widest">Personal Concierge 24/7</span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="text-2xl font-serif">03</span>
                  <span className="text-sm uppercase tracking-widest">Chauffeur Service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
