"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutDashboard, PenTool, BarChart3, ShieldCheck, Plus, Search, Filter, MoreHorizontal, ArrowUpRight, Calendar, Zap, X, User } from "lucide-react";

export default function CampaignsPage() {
  // 1. État pour la liste des campagnes (Données initiales)
  const [campaigns, setCampaigns] = useState([
    { id: 1, name: "Lancement Été 2026", status: "Active", platform: "LinkedIn", budget: "2,500 €", roi: "+124%", date: "12 Jan 2026" },
    { id: 2, name: "Promo Black Friday", status: "Terminée", platform: "Instagram", budget: "1,200 €", roi: "+340%", date: "20 Nov 2025" },
    { id: 3, name: "Webinar IA & SaaS", status: "Brouillon", platform: "Email", budget: "0 €", roi: "-", date: "Prochainement" },
  ]);

  // 2. État pour les filtres et la modale
  const [filter, setFilter] = useState("Tous");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCampaign, setNewCampaign] = useState({ name: "", platform: "LinkedIn", budget: "" });

  // 3. Logique d'ajout
  const handleAddCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    const campaign = {
      id: campaigns.length + 1,
      name: newCampaign.name,
      status: "Active", // Par défaut
      platform: newCampaign.platform,
      budget: newCampaign.budget + " €",
      roi: "-", // Pas encore de ROI
      date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })
    };
    setCampaigns([campaign, ...campaigns]); // Ajoute en haut de liste
    setIsModalOpen(false); // Ferme la modale
    setNewCampaign({ name: "", platform: "LinkedIn", budget: "" }); // Reset
  };

  // 4. Logique de filtrage
  const filteredCampaigns = filter === "Tous" 
    ? campaigns 
    : campaigns.filter(c => c.status === filter);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:block p-4 sticky top-0 h-screen">
        <div className="mb-8 px-4 py-2">
           <span className="font-bold text-xl text-blue-900">Nex<span className="text-blue-600">Mark</span></span>
        </div>
        <nav className="space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"><LayoutDashboard size={20} /> Vue d'ensemble</Link>
          <Link href="/dashboard/content" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"><PenTool size={20} /> Contenu IA</Link>
          <div className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 font-medium rounded-lg"><BarChart3 size={20} /> Campagnes</div>
          <Link href="/dashboard/generator" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"><Zap size={20} /> Générateur Viral</Link>
          <Link href="/dashboard/compliance" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"><ShieldCheck size={20} /> Conformité</Link>
          <div className="my-4 border-t border-gray-100"></div>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"><User size={20} /> Paramètres</Link>
        </nav>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto relative">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <BarChart3 className="text-blue-600" /> Mes Campagnes
            </h1>
            <p className="text-gray-500 mt-1">Gérez vos budgets et analysez le ROI.</p>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow-sm transition-colors">
            <Plus size={18} /> Nouvelle Campagne
          </button>
        </header>

        {/* Filtres Actifs */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Rechercher..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg outline-none focus:border-blue-500" />
          </div>
          <div className="flex gap-2">
            {['Tous', 'Active', 'Brouillon', 'Terminée'].map((status) => (
              <button 
                key={status}
                onClick={() => setFilter(status)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${filter === status ? 'bg-blue-100 text-blue-700' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Tableau Dynamique */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold">
                <th className="px-6 py-4">Nom</th>
                <th className="px-6 py-4">Statut</th>
                <th className="px-6 py-4">Plateforme</th>
                <th className="px-6 py-4">Budget</th>
                <th className="px-6 py-4">ROI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredCampaigns.map((camp) => (
                <tr key={camp.id} className="hover:bg-gray-50 transition-colors animate-in fade-in">
                  <td className="px-6 py-4 font-medium text-gray-900">{camp.name}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                      camp.status === 'Active' ? 'bg-green-50 text-green-700 border-green-100' :
                      camp.status === 'Terminée' ? 'bg-gray-100 text-gray-600 border-gray-200' :
                      'bg-yellow-50 text-yellow-700 border-yellow-100'
                    }`}>
                      {camp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{camp.platform}</td>
                  <td className="px-6 py-4 font-medium">{camp.budget}</td>
                  <td className="px-6 py-4 text-green-600 font-medium">{camp.roi}</td>
                </tr>
              ))}
              {filteredCampaigns.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-gray-500">Aucune campagne trouvée.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* MODALE D'AJOUT (Popup) */}
        {isModalOpen && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm rounded-xl">
            <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md animate-in zoom-in-95 duration-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Créer une campagne</h3>
                <button onClick={() => setIsModalOpen(false)}><X className="text-gray-400 hover:text-gray-600" /></button>
              </div>
              <form onSubmit={handleAddCampaign} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom de la campagne</label>
                  <input required type="text" className="w-full p-2 border rounded-lg" value={newCampaign.name} onChange={e => setNewCampaign({...newCampaign, name: e.target.value})} placeholder="Ex: Soldes d'hiver" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Plateforme</label>
                  <select className="w-full p-2 border rounded-lg bg-white" value={newCampaign.platform} onChange={e => setNewCampaign({...newCampaign, platform: e.target.value})}>
                    <option>LinkedIn</option>
                    <option>Instagram</option>
                    <option>Google Ads</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Budget (€)</label>
                  <input required type="number" className="w-full p-2 border rounded-lg" value={newCampaign.budget} onChange={e => setNewCampaign({...newCampaign, budget: e.target.value})} placeholder="1000" />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 mt-4">Lancer la campagne</button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}