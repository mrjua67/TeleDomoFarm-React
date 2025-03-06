import React from 'react';
import { Map, Users, DollarSign } from 'lucide-react';
import { DashboardCard } from './DashboardCard';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Dashboard &gt; Home</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Terreno"
          value="600m x 600m"
          icon={Map}
          color="bg-blue-500"
        />
        <DashboardCard
          title="Encargados"
          value="6 Encargados"
          icon={Users}
          color="bg-green-500"
        />
        <DashboardCard
          title="Producción"
          value="$2543 USD"
          icon={DollarSign}
          color="bg-purple-500"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Ubicación</h2>
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31753.790568308683!2d-73.32126931931152!3d5.308661999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a3f0c4f605555%3A0x35f32c5f002879f4!2zw5piaXRhLCBCb3lhY8Oh!5e0!3m2!1ses!2sco!4v1710644022037!5m2!1ses!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mt-4 flex gap-4">
          <a
            href="https://www.google.com/maps?q=Úbita,+Boyacá"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Ampliar Mapa
          </a>
          <a
            href="https://www.google.com/maps/dir//Úbita,+Boyacá"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Cómo llegar
          </a>
        </div>
      </div>
    </div>
  );
}