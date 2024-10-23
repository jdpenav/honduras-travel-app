import React from 'react';
import { MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';

const departments = [
  { id: 'atlantida', name: 'Atlántida', image: 'https://images.unsplash.com/photo-1589820933732-5594c9d89076?auto=format&fit=crop&q=80' },
  { id: 'colon', name: 'Colón', image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80' },
  { id: 'comayagua', name: 'Comayagua', image: 'https://images.unsplash.com/photo-1608874973277-a34ed4aba3f8?auto=format&fit=crop&q=80' },
  { id: 'copan', name: 'Copán', image: 'https://images.unsplash.com/photo-1589820933732-5594c9d89076?auto=format&fit=crop&q=80' },
  { id: 'cortes', name: 'Cortés', image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80' },
  { id: 'choluteca', name: 'Choluteca', image: 'https://images.unsplash.com/photo-1608874973277-a34ed4aba3f8?auto=format&fit=crop&q=80' },
  // Add more departments as needed
];

const DepartmentsPage: React.FC = () => {
  return (
    <>
      <Navbar scrolled={true} />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-4">Explore Honduras by Department</h1>
          <p className="text-gray-600 text-center mb-12">Discover unique experiences in each region</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <a
                key={dept.id}
                href={`/department/${dept.id}`}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="text-white" size={20} />
                      <h3 className="text-2xl font-bold text-white">{dept.name}</h3>
                    </div>
                    <p className="text-white/80 mt-2">Click to explore activities</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentsPage;