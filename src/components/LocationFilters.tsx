import React, { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

const departments = {
  'Atlántida': ['La Ceiba', 'Tela', 'El Porvenir'],
  'Colón': ['Trujillo', 'Tocoa', 'Bonito Oriental'],
  'Copán': ['Santa Rosa de Copán', 'Copán Ruinas', 'La Entrada'],
  'Cortés': ['San Pedro Sula', 'Puerto Cortés', 'Choloma'],
  'Francisco Morazán': ['Tegucigalpa', 'Valle de Ángeles', 'Santa Lucía'],
  'Islas de la Bahía': ['Roatán', 'Guanaja', 'Utila'],
};

const LocationFilters: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [isDepOpen, setIsDepOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);

  const handleDepartmentSelect = (dept: string) => {
    setSelectedDepartment(dept);
    setSelectedCity('');
    setIsDepOpen(false);
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsCityOpen(false);
  };

  return (
    <section className="py-8 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="relative w-full md:w-64">
            <button
              onClick={() => setIsDepOpen(!isDepOpen)}
              className="w-full px-4 py-2 bg-white border rounded-lg flex items-center justify-between hover:border-[#0076C0] transition-colors"
            >
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#0076C0]" />
                <span className="text-gray-700">
                  {selectedDepartment || 'Select Department'}
                </span>
              </div>
              <ChevronDown size={18} className={`transition-transform ${isDepOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDepOpen && (
              <div className="absolute z-50 w-full mt-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {Object.keys(departments).map((dept) => (
                  <button
                    key={dept}
                    onClick={() => handleDepartmentSelect(dept)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                  >
                    {dept}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative w-full md:w-64">
            <button
              onClick={() => setIsCityOpen(!isCityOpen)}
              disabled={!selectedDepartment}
              className={`w-full px-4 py-2 bg-white border rounded-lg flex items-center justify-between transition-colors ${
                selectedDepartment ? 'hover:border-[#0076C0]' : 'opacity-50 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#0076C0]" />
                <span className="text-gray-700">
                  {selectedCity || 'Select City'}
                </span>
              </div>
              <ChevronDown size={18} className={`transition-transform ${isCityOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isCityOpen && selectedDepartment && (
              <div className="absolute z-50 w-full mt-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {departments[selectedDepartment as keyof typeof departments].map((city) => (
                  <button
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                  >
                    {city}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            className="w-full md:w-auto px-6 py-2 bg-[#0076C0] text-white rounded-lg hover:bg-[#005a91] transition-colors flex items-center justify-center gap-2"
            onClick={() => {
              // Handle filter application here
              console.log('Filtering by:', { selectedDepartment, selectedCity });
            }}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationFilters;