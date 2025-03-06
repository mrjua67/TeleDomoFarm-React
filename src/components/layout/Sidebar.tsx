import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Sprout,
  BarChart3,
  ClipboardList,
  CircleDollarSign,
  MessageSquare,
  Settings,
  ArrowLeft,
  Leaf
} from 'lucide-react';
import { cn } from '../../lib/utils';

const navigation = [
  { name: 'Dashboard', to: '/', icon: LayoutDashboard },
  { name: 'Siembras y Cosechas', to: '/crops', icon: Sprout },
  { name: 'Estadísticas', to: '/statistics', icon: BarChart3 },
  { name: 'Tareas', to: '/tasks', icon: ClipboardList },
  { name: 'Inventario Ganadero', to: '/livestock', icon: CircleDollarSign },
  { name: 'Comentarios', to: '/comments', icon: MessageSquare },
  { name: 'Settings', to: '/settings', icon: Settings },
];

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col bg-white border-r">
      <div className="flex h-16 items-center gap-2 px-6 border-b">
        <Leaf className="h-6 w-6 text-green-600" />
        <span className="font-semibold text-xl">TeleDomoFarm</span>
      </div>
      
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'flex items-center px-4 py-2 text-sm font-medium rounded-md',
                  isActive
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-600 hover:bg-gray-50'
                )
              }
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4">
        <button className="flex w-full items-center justify-center gap-2 rounded-md bg-red-100 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-200">
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>
      </div>
    </div>
  );
}