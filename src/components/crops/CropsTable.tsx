import React, { useState } from 'react';
import { Edit2, Trash2, Plus } from 'lucide-react';

interface Crop {
  id: number;
  seed: string;
  type: string;
  status: string;
  assignedDays: number;
  verifiedDays: number;
}

const initialCrops: Crop[] = [
  {
    id: 1,
    seed: "Maíz",
    type: "Cereal",
    status: "En progreso",
    assignedDays: 120,
    verifiedDays: 45
  },
  {
    id: 2,
    seed: "Papa",
    type: "Tubérculo",
    status: "Sin empezar",
    assignedDays: 150,
    verifiedDays: 0
  },
  {
    id: 3,
    seed: "Aracacha",
    type: "Tubérculo",
    status: "por finalizar",
    assignedDays: 150,
    verifiedDays: 0
  }
];

export function CropsTable() {
  const [crops, setCrops] = useState<Crop[]>(() => {
    const savedCrops = localStorage.getItem('crops');
    return savedCrops ? JSON.parse(savedCrops) : initialCrops;
  });

  const handleDelete = (id: number) => {
    const newCrops = crops.filter(crop => crop.id !== id);
    setCrops(newCrops);
    localStorage.setItem('crops', JSON.stringify(newCrops));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Siembras y Cosechas</h1>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Incluir Cultivo
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Semilla</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cultivo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tiempo Designado</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Días Comprobados</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Opciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {crops.map((crop) => (
              <tr key={crop.id}>
                <td className="px-6 py-4 whitespace-nowrap">{crop.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{crop.seed}</td>
                <td className="px-6 py-4 whitespace-nowrap">{crop.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{crop.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">{crop.assignedDays} días</td>
                <td className="px-6 py-4 whitespace-nowrap">{crop.verifiedDays} días</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex gap-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <Edit2 className="h-5 w-5" />
                    </button>
                    <button 
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(crop.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}