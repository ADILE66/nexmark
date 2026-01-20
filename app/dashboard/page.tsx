// 📂 Fichier: app/dashboard/page.tsx
"use client";

import { useState } from "react";
import MarketingChart from "../../components/MarketingChart"; 
import Link from "next/link";
import { 
  LayoutDashboard, PenTool, BarChart3, ShieldCheck, Zap, User, 
  ArrowUpRight, ArrowDownRight, TrendingUp, Users, DollarSign, Activity 
} from "lucide-react";

export default function DashboardPage() {
  const [period, setPeriod] = useState("Mois");

  // 1. Données simulées pour chaque période
  const stats = {
    "7J": { roi: "+12%", budget: "4,500 €", conversion: "2.1%", trend: "up" },
    "Mois": { roi: "+124%", budget: "45,000 €", conversion: "3.8%", trend: "up" },
    "Année": { roi: "+310%", budget: "520k €", conversion: "4.5%", trend: "up" }
  };

  const chartData = {
    "7J": [
      { name: 'Lun', revenue: 2400 }, { name: 'Mar', revenue: 1398 }, { name: 'Mer', revenue: 9800 },
      { name: 'Jeu', revenue: 3908 }, { name: 'Ven', revenue: 4800 }, { name: 'Sam', revenue: 3800 }, { name: 'Dim', revenue: 4300 }
    ],
    "Mois": [
      { name: 'S1', revenue: 12000 }, { name: 'S2', revenue: 19000 }, { name: 'S3', revenue: 15000 }, { name: 'S4', revenue: 28000 }
    ],
    "Année": [
      { name: 'Jan', revenue: 45000 }, { name: 'Avr', revenue: 32000 }, { name: 'Juil', revenue: 78000 }, { name: 'Oct', revenue: 95000 }
    ]
  };

  // Sélection des données actuelles
  const currentStats = stats[period as keyof typeof stats];
  const currentChart = chartData[period as keyof typeof chartData];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar (Menu Gauche Complet) */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:block p-4 sticky top-0 h-screen">
        <div className="mb-8 px-4 py-2">
           <span className="font-bold text-xl text-blue-900">Nex<span className="text-blue-600">Mark</span></span>
        </div>
        <nav className="space-y-1">
          <div className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 font-medium rounded-lg cursor-default">
            <LayoutDashboard size={20} /> Vue d'ensemble
          </div>
          <Link href="/dashboard/content" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"><PenTool size={20} /> Contenu IA</Link>
          <Link href="/dashboard/campaigns" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"><BarChart3 size={20} /> Campagnes</Link>
          <Link href="/dashboard/generator" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"><Zap size={20} /> Générateur Viral</Link>
          <Link href="/dashboard/compliance" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"><ShieldCheck size={20} /> Conformité</Link>
          <div className="my-4 border-t border-gray-100"></div>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"><User size={20} /> Paramètres</Link>
        </nav>
      </aside>

      {/* Contenu Principal */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Tableau de Bord</h1>
            <p className="text-gray-500">Bienvenue, voici vos performances.</p>
          </div>
          
          {/* Filtres Temporels */}
          <div className="bg-white p-1 rounded-lg border border-gray-200 flex shadow-sm">
            {["7J", "Mois", "Année"].map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${period === p ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                {p}
              </button>
            ))}
          </div>
        </header>
        
        {/* Cartes KPI Dynamiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Carte ROI */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md group">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 font-medium flex items-center gap-2"><TrendingUp size={16}/> ROI Global</p>
                <p className="text-3xl font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors">{currentStats.roi}</p>
              </div>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
                <ArrowUpRight size={12} /> +12%
              </span>
            </div>
            <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-[80%] transition-all duration-1000" style={{ width: period === '7J' ? '30%' : '80%' }}></div>
            </div>
          </div>
          
          {/* Carte Budget */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md group">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 font-medium flex items-center gap-2"><DollarSign size={16}/> Budget Dépensé</p>
                <p className="text-3xl font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors">{currentStats.budget}</p>
              </div>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">En cours</span>
            </div>
            <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: period === 'Année' ? '90%' : '50%' }}></div>
            </div>
          </div>

          {/* Carte Conversion */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md group">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 font-medium flex items-center gap-2"><Users size={16}/> Conversion</p>
                <p className="text-3xl font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors">{currentStats.conversion}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1 ${period === '7J' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                 {period === '7J' ? <><ArrowDownRight size={12}/> -0.5%</> : <><ArrowUpRight size={12}/> +2.4%</>}
              </span>
            </div>
            <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 transition-all duration-1000" style={{ width: period === '7J' ? '20%' : '45%' }}></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Zone Graphique (2/3 de la largeur) */}
          <div className="lg:col-span-2">
             <MarketingChart data={currentChart} />
          </div>

          {/* Activités Récentes (1/3 de la largeur) - NOUVEAU */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><Activity size={18} className="text-blue-500"/> Activité Récente</h3>
            <div className="space-y-4">
              {[
                { text: "Campagne 'Été 2026' lancée", time: "Il y a 2h", type: "success" },
                { text: "Scan conformité terminé", time: "Il y a 5h", type: "info" },
                { text: "Nouveau post généré (LinkedIn)", time: "Hier", type: "purple" },
                { text: "Alerte budget atteint (80%)", time: "Hier", type: "warning" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                  <div className={`w-2 h-2 mt-2 rounded-full ${item.type === 'success' ? 'bg-green-500' : item.type === 'warning' ? 'bg-orange-500' : item.type === 'purple' ? 'bg-purple-500' : 'bg-blue-500'}`}></div>
                  <div>
                    <p className="text-sm text-gray-800 font-medium">{item.text}</p>
                    <p className="text-xs text-gray-400">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-sm text-gray-500 hover:text-blue-600 font-medium border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              Voir tout l'historique
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}