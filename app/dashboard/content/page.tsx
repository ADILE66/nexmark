"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LayoutDashboard, PenTool, BarChart3, Settings, Wand2, CheckCircle2, AlertCircle, Zap, ShieldCheck, User, Save } from "lucide-react";

export default function ContentPage() {
  const [text, setText] = useState("");
  const [score, setScore] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [feedback, setFeedback] = useState({ length: "Trop court", keywords: false });

  // Analyse en temps réel
  useEffect(() => {
    let tempScore = 0;
    const words = text.trim().split(/\s+/).length;
    
    // Critère 1: Longueur (0 à 50 pts)
    if (text.length > 0) tempScore += 10;
    if (words > 10) tempScore += 20;
    if (words > 30) tempScore += 20;

    // Critère 2: Mots Clés (0 à 50 pts)
    const hasSaaS = /saas/i.test(text);
    const hasMarketing = /marketing/i.test(text);
    const hasIA = /ia/i.test(text) || /intelligence/i.test(text);
    
    if (hasSaaS) tempScore += 15;
    if (hasMarketing) tempScore += 15;
    if (hasIA) tempScore += 20;

    setScore(tempScore > 100 ? 100 : tempScore);
    
    setFeedback({
      length: words > 30 ? "Parfait" : "Trop court",
      keywords: (hasSaaS && hasMarketing && hasIA)
    });
  }, [text]);

  // Simulation : L'IA écrit le texte pour toi
  const handleImproveAI = () => {
    setIsAnimating(true);
    const perfectText = "Découvrez comment notre solution SaaS révolutionne le Marketing Digital grâce à l'Intelligence Artificielle (IA). Optimisez vos campagnes et gagnez du temps dès aujourd'hui.";
    
    // Effet machine à écrire rapide
    let i = 0;
    setText(""); // Reset
    const interval = setInterval(() => {
      setText((prev) => prev + perfectText.charAt(i));
      i++;
      if (i >= perfectText.length) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 30);
  };

  const handlePublish = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col sticky top-0 h-screen">
        <div className="p-6 border-b border-gray-100">
           <span className="font-bold text-xl text-blue-900">Nex<span className="text-blue-600">Mark</span></span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"><LayoutDashboard size={20} /> Vue d'ensemble</Link>
          <div className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 font-medium rounded-lg"><PenTool size={20} /> Contenu IA</div>
          <Link href="/dashboard/campaigns" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"><BarChart3 size={20} /> Campagnes</Link>
          <Link href="/dashboard/generator" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"><Zap size={20} /> Générateur Viral</Link>
          <Link href="/dashboard/compliance" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"><ShieldCheck size={20} /> Conformité</Link>
          <div className="my-4 border-t border-gray-100"></div>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"><User size={20} /> Paramètres</Link>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Notification de succès */}
        {showSuccess && (
          <div className="absolute top-20 right-8 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-in slide-in-from-top-5 z-50">
            <CheckCircle2 size={20} /> Contenu publié avec succès !
          </div>
        )}

        <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Wand2 className="text-purple-600" /> Éditeur Intelligent
          </h1>
          <button onClick={handlePublish} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-sm transition-all active:scale-95">
            Publier le contenu
          </button>
        </header>

        <div className="flex-1 flex overflow-hidden">
          {/* Zone d'écriture */}
          <div className="flex-1 p-8 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 min-h-[600px] p-8 relative">
              <input type="text" placeholder="Titre de votre article..." className="w-full text-3xl font-bold text-gray-800 placeholder-gray-300 border-none outline-none mb-6" />
              <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Écrivez ici ou laissez l'IA le faire..."
                className="w-full h-[500px] text-lg text-gray-600 placeholder-gray-300 border-none outline-none resize-none"
              ></textarea>
              
              {/* Bouton Flottant IA si vide */}
              {text.length === 0 && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="text-gray-400 mb-4">Besoin d'inspiration ?</p>
                  <button 
                    onClick={handleImproveAI}
                    className="bg-purple-50 text-purple-700 border border-purple-200 px-6 py-3 rounded-full font-medium hover:bg-purple-100 transition-colors flex items-center gap-2 mx-auto"
                  >
                    <Wand2 size={18} /> Générer un brouillon auto
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Analyse IA Temps Réel */}
          <div className="w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto">
            <div className="mb-8 text-center">
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full border-4 mb-2 relative transition-all duration-500 ${score >= 80 ? 'border-green-100 bg-green-50' : 'border-red-100 bg-red-50'}`}>
                <span className={`text-3xl font-bold transition-colors ${score >= 80 ? 'text-green-600' : 'text-red-600'}`}>{score}</span>
              </div>
              <p className="text-sm font-medium text-gray-500">Score SEO</p>
            </div>

            <div className="space-y-4">
              <div className={`p-4 rounded-lg border transition-colors ${feedback.length === "Parfait" ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                <div className="flex items-center gap-2 font-semibold mb-1">
                  {feedback.length === "Parfait" ? <CheckCircle2 size={16} className="text-green-600"/> : <AlertCircle size={16} className="text-red-600"/>}
                  <span className={feedback.length === "Parfait" ? "text-green-700" : "text-red-700"}>Longueur</span>
                </div>
                <p className="text-xs text-gray-600">{feedback.length === "Parfait" ? "Longueur optimale." : "Écrivez plus de texte."}</p>
              </div>

              <div className={`p-4 rounded-lg border transition-colors ${feedback.keywords ? 'bg-green-50 border-green-100' : 'bg-yellow-50 border-yellow-100'}`}>
                 <div className="flex items-center gap-2 font-semibold mb-1">
                  {feedback.keywords ? <CheckCircle2 size={16} className="text-green-600"/> : <AlertCircle size={16} className="text-yellow-600"/>}
                  <span className={feedback.keywords ? "text-green-700" : "text-yellow-700"}>Mots-clés</span>
                </div>
                <p className="text-xs text-gray-600">{feedback.keywords ? "Mots-clés détectés !" : "Manque: SaaS, Marketing, IA"}</p>
              </div>

              <button 
                onClick={handleImproveAI}
                disabled={isAnimating}
                className="w-full py-3 border border-purple-200 bg-purple-50 text-purple-700 rounded-lg font-medium hover:bg-purple-100 transition-colors flex items-center justify-center gap-2 mt-4"
              >
                {isAnimating ? "Rédaction..." : <><Wand2 size={16} /> Améliorer avec l'IA</>}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}