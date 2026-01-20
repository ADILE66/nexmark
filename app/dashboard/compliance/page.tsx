"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, AlertTriangle, Lock, FileText, LayoutDashboard, PenTool, BarChart3, Zap, User, RefreshCw, Check } from "lucide-react";

export default function CompliancePage() {
  const [isScanning, setIsScanning] = useState(false);
  const [lastScan, setLastScan] = useState("Il y a 2h");
  const [aiWarning, setAiWarning] = useState(true); // Warning actif au début

  const handleScan = () => {
    setIsScanning(true);
    // Simulation du scan (3 secondes)
    setTimeout(() => {
      setIsScanning(false);
      setLastScan("À l'instant");
      setAiWarning(false); // Le scan corrige le problème !
    }, 3000);
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
          
          {/* LIEN ACTIF */}
          <div className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 font-medium rounded-lg"><ShieldCheck size={20} /> Conformité</div>
          <div className="my-4 border-t border-gray-100"></div>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"><User size={20} /> Paramètres</Link>
        </nav>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <ShieldCheck className="text-blue-600" /> Centre de Conformité
            </h1>
            <p className="text-gray-500 mt-1">Audit en temps réel de vos données.</p>
          </div>
          <button 
            onClick={handleScan}
            disabled={isScanning}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-bold border border-blue-700 flex items-center gap-2 hover:bg-blue-700 transition-colors"
          >
            {isScanning ? <RefreshCw className="animate-spin" size={18} /> : <Zap size={18} />}
            {isScanning ? "Analyse en cours..." : "Lancer un Scan complet"}
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* RGPD */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><Lock size={100} /></div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">RGPD / GDPR</h3>
            <p className="text-3xl font-bold text-green-600 mb-2">100%</p>
            <p className="text-sm text-gray-500">Données chiffrées & sécurisées.</p>
            <div className="mt-4 w-full bg-gray-100 h-2 rounded-full"><div className="bg-green-500 h-2 rounded-full w-full"></div></div>
          </div>

          {/* AI Act - Dynamique */}
          <div className={`bg-white p-6 rounded-xl border shadow-sm relative overflow-hidden transition-colors ${aiWarning ? 'border-yellow-200' : 'border-green-200'}`}>
             <div className={`absolute top-0 right-0 p-4 opacity-10 ${aiWarning ? 'text-yellow-600' : 'text-green-600'}`}><AlertTriangle size={100} /></div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">EU AI Act</h3>
            {aiWarning ? (
              <>
                <p className="text-3xl font-bold text-yellow-600 mb-2">Attention</p>
                <p className="text-sm text-gray-500">2 contenus générés non marqués.</p>
              </>
            ) : (
              <>
                <p className="text-3xl font-bold text-green-600 mb-2">Conforme</p>
                <p className="text-sm text-gray-500">Tous les contenus sont marqués.</p>
              </>
            )}
          </div>

          {/* Cookies */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Consentement</h3>
            <p className="text-3xl font-bold text-blue-600 mb-2">4.8/5</p>
            <p className="text-sm text-gray-500">Taux d'acceptation élevé.</p>
          </div>
        </div>

        {/* Journal d'Audit */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="px-6 py-4 border-b border-gray-100"><h3 className="font-bold text-gray-800">Journal d'Audit</h3></div>
          <div className="divide-y divide-gray-100">
            {/* Nouvelle entrée si scan terminé */}
            {!aiWarning && (
              <div className="p-6 flex items-center gap-3 bg-green-50 animate-in slide-in-from-top-2">
                  <div className="bg-green-100 p-2 rounded-full text-green-600"><Check size={18} /></div>
                  <div>
                    <p className="font-medium text-gray-900">Scan manuel effectué</p>
                    <p className="text-xs text-gray-500">À l'instant • Problèmes résolus</p>
                  </div>
                  <span className="ml-auto text-green-700 font-bold text-xs px-2 py-1 bg-green-200 rounded">Succès</span>
              </div>
            )}
            <div className="p-6 flex items-center gap-3">
                <FileText className="text-blue-500" size={18} />
                <div>
                  <p className="font-medium text-gray-900">Scan automatique</p>
                  <p className="text-xs text-gray-500">{lastScan}</p>
                </div>
                <span className="ml-auto text-green-600 bg-green-50 px-2 py-1 rounded text-xs">Succès</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}