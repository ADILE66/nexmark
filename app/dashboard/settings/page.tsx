"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutDashboard, PenTool, BarChart3, ShieldCheck, Zap, User, CreditCard, Bell, Save, Mail, Check } from "lucide-react";

export default function SettingsPage() {
  const [name, setName] = useState("Jean Dupont");
  const [email, setEmail] = useState("jean.dupont@horizonsaas.com");
  const [isSaving, setIsSaving] = useState(false);
  const [showSaved, setShowSaved] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    // Simulation sauvegarde
    setTimeout(() => {
      setIsSaving(false);
      setShowSaved(true);
      setTimeout(() => setShowSaved(false), 3000); // Cache le message après 3s
    }, 1000);
  };

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
          <Link href="/dashboard/campaigns" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"><BarChart3 size={20} /> Campagnes</Link>
          <Link href="/dashboard/generator" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"><Zap size={20} /> Générateur Viral</Link>
          <Link href="/dashboard/compliance" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"><ShieldCheck size={20} /> Conformité</Link>
          <div className="my-4 border-t border-gray-100"></div>
          {/* LIEN ACTIF */}
          <div className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 font-medium rounded-lg"><User size={20} /> Paramètres</div>
        </nav>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <User className="text-gray-600" /> Paramètres du Compte
          </h1>
          <p className="text-gray-500 mt-1">Gérez vos informations personnelles.</p>
        </header>

        <div className="max-w-4xl space-y-6">
          
          {/* Carte Profil */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm relative">
            <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <User size={20} className="text-blue-600" /> Informations Personnelles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Adresse Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end items-center gap-4">
              {showSaved && <span className="text-green-600 font-medium flex items-center gap-1 animate-in fade-in"><Check size={18}/> Sauvegardé !</span>}
              <button 
                onClick={handleSave}
                disabled={isSaving}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                {isSaving ? "..." : <><Save size={18} /> Enregistrer</>}
              </button>
            </div>
          </div>

          {/* Carte Abonnement (Reste visuelle pour l'instant) */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5"><CreditCard size={150} /></div>
            <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2"><CreditCard size={20} className="text-purple-600" /> Mon Abonnement</h2>
            <div className="flex items-center justify-between bg-purple-50 p-4 rounded-lg border border-purple-100 mb-6">
              <div>
                <p className="text-sm text-purple-800 font-bold uppercase tracking-wide">Plan Actuel</p>
                <p className="text-2xl font-bold text-gray-900">Pro Illimité</p>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Actif</span>
            </div>
            <div className="flex gap-4">
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50">Gérer les factures</button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700">Mettre à niveau</button>
            </div>
          </div>

          {/* Carte Notifications */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2"><Bell size={20} className="text-orange-600" /> Notifications</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div><p className="font-medium text-gray-900">Rapports Hebdomadaires</p></div>
                <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer"><div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div></div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}