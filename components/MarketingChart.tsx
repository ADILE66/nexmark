// 📂 Fichier: components/MarketingChart.tsx
"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// On définit que le composant accepte des "données" en paramètre
export default function MarketingChart({ data }: { data?: any[] }) {
  // Données par défaut si rien n'est fourni (sécurité)
  const defaultData = [
    { name: 'Lun', invest: 4000, revenue: 2400 },
    { name: 'Mar', invest: 3000, revenue: 1398 },
    { name: 'Mer', invest: 2000, revenue: 9800 },
    { name: 'Jeu', invest: 2780, revenue: 3908 },
    { name: 'Ven', invest: 1890, revenue: 4800 },
    { name: 'Sam', invest: 2390, revenue: 3800 },
    { name: 'Dim', invest: 3490, revenue: 4300 },
  ];

  const chartData = data || defaultData;

  return (
    <div className="h-[400px] w-full bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-800">Performance (Revenus vs Invest.)</h3>
        <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-xs text-gray-500"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Revenus</span>
        </div>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#9ca3af', fontSize: 12}}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#9ca3af', fontSize: 12}}
              tickFormatter={(value) => `${value/1000}k`}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              formatter={(value: number) => [`${value} €`, "Revenu"]}
            />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#3b82f6" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorRevenue)" 
              animationDuration={1000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}