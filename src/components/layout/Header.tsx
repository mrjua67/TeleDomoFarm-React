import React, { useState, useEffect } from 'react';
import { Menu, Search, Bell, User, MapPin } from 'lucide-react';

interface Location {
  country: string;
  city: string;
}

export function Header() {
  const [location, setLocation] = useState<Location | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    // Get location from localStorage or fetch it
    const savedLocation = localStorage.getItem('visitorLocation');
    if (savedLocation) {
      setLocation(JSON.parse(savedLocation));
    } else {
      // In a real app, you would use a geolocation service here
      const mockLocation = { country: 'Colombia', city: 'Úbita, Boyacá' };
      localStorage.setItem('visitorLocation', JSON.stringify(mockLocation));
      setLocation(mockLocation);
    }
  }, []);

  return (
    <header className="h-16 bg-white border-b px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded-md"
        >
          <Menu className="h-5 w-5" />
        </button>
        
        <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
          Categorías
        </button>
      </div>

      <div className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="search"
            placeholder="Buscar..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {location && (
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-1 text-green-600" />
            <span>{location.city}</span>
          </div>
        )}
        
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell className="h-5 w-5" />
        </button>
        
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <User className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}