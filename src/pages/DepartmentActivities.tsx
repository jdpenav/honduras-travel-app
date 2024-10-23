import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Calendar, Users, Star } from 'lucide-react';
import Navbar from '../components/Navbar';

// Dummy data - in a real app, this would come from an API
const activitiesByDepartment = {
  atlantida: {
    name: 'Atlántida',
    activities: [
      {
        id: 1,
        title: 'Pico Bonito National Park Trek',
        description: 'Guided hiking tour through lush rainforest trails',
        image: 'https://images.unsplash.com/photo-1589820933732-5594c9d89076?auto=format&fit=crop&q=80',
        price: 75,
        duration: '6 hours',
        rating: 4.8,
        groupSize: '2-8'
      },
      // Add more activities
    ]
  },
  // Add more departments
};

const DepartmentActivities: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const department = activitiesByDepartment[id as keyof typeof activitiesByDepartment];

  if (!department) {
    return (
      <>
        <Navbar scrolled={true} />
        <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Department not found</h2>
            <a href="/departments" className="text-[#0076C0] hover:underline mt-4 inline-block">
              Return to Departments
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar scrolled={true} />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="text-[#0076C0]" size={24} />
            <h1 className="text-4xl font-bold">Activities in {department.name}</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {department.activities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="text-yellow-400" size={16} fill="currentColor" />
                    <span className="font-semibold">{activity.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Calendar size={16} />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Users size={16} />
                      <span>{activity.groupSize}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#0076C0]">
                      ${activity.price}
                    </span>
                    <button className="px-4 py-2 bg-[#0076C0] text-white rounded-lg hover:bg-[#005a91] transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentActivities;