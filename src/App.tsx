import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Search, ChevronDown } from 'lucide-react';
import Slider from './components/Slider';
import PopularDestinations from './components/PopularDestinations';
import Navbar from './components/Navbar';
import LocationFilters from './components/LocationFilters';
import DepartmentsPage from './pages/DepartmentsPage';
import DepartmentActivities from './pages/DepartmentActivities';

function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} />
      
      <section className="relative h-screen">
        <Slider />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="max-w-4xl w-full px-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center mb-6">
              Discover Honduras
            </h1>
            <p className="text-white text-xl md:text-2xl text-center mb-8">
              Experience the heart of Central America
            </p>
            
            <div className="bg-white rounded-lg p-4 shadow-xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search destinations, activities, or places..."
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-6 py-2 bg-[#0076C0] text-white rounded-lg hover:bg-[#005a91] transition-colors">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      <LocationFilters />
      <PopularDestinations />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Visit Honduras?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Rich History",
                description: "Explore ancient Mayan ruins and colonial cities",
                image: "https://images.unsplash.com/photo-1608874973277-a34ed4aba3f8?auto=format&fit=crop&q=80"
              },
              {
                title: "Natural Beauty",
                description: "Discover pristine beaches and lush rainforests",
                image: "https://images.unsplash.com/photo-1589820933732-5594c9d89076?auto=format&fit=crop&q=80"
              },
              {
                title: "Vibrant Culture",
                description: "Experience authentic Honduran traditions",
                image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80"
              }
            ].map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/department/:id" element={<DepartmentActivities />} />
      </Routes>
    </Router>
  );
}

export default App;