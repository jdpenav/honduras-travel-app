import React from 'react';
import { MapPin } from 'lucide-react';

const destinations = [
  {
    name: "Roatan",
    description: "Crystal clear waters and world-class diving",
    image: "https://images.unsplash.com/photo-1589820933732-5594c9d89076?auto=format&fit=crop&q=80",
    rating: 4.8
  },
  {
    name: "Copan Ruins",
    description: "Ancient Mayan archaeological site",
    image: "https://images.unsplash.com/photo-1608874973277-a34ed4aba3f8?auto=format&fit=crop&q=80",
    rating: 4.9
  },
  {
    name: "La Ceiba",
    description: "Adventure capital of Honduras",
    image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80",
    rating: 4.7
  }
];

const PopularDestinations: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img src={dest.image} alt={dest.name} className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg text-sm font-semibold">
                  ★ {dest.rating}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin size={18} className="text-[#0076C0] mr-2" />
                  <h3 className="text-xl font-semibold">{dest.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{dest.description}</p>
                <button className="w-full py-2 bg-[#0076C0] text-white rounded-lg hover:bg-[#005a91] transition-colors">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;