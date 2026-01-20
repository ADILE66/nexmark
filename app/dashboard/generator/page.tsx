// 📂 Fichier: app/dashboard/generator/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, LayoutDashboard, PenTool, BarChart3, ShieldCheck, Copy } from "lucide-react";

export default function GeneratorPage() {
  const [platform, setPlatform] = useState("linkedin");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");

  const handleGenerate = () => {
    setIsGenerating(true);
    setGeneratedContent(""); 
    
    setTimeout(() => {
      setIsGenerating(false);
      // Logique de génération selon la plateforme (6 réseaux maintenant !)
      switch (platform) {
        case "linkedin":
          setGeneratedContent("🚀 Nouvelle annonce stratégique !\n\nNous sommes ravis de vous présenter notre dernière innovation en matière de Marketing Digital.\n\n✅ Gain de temps\n✅ ROI optimisé (+124%)\n✅ Contenu viral\n\n👉 Testez maintenant la puissance de l'IA.\n\n#SaaS #Innovation #Marketing #AI #Business");
          break;
        case "twitter":
          setGeneratedContent("L'IA change la donne en Marketing. 🤖✨\n\nNe restez pas sur la touche. Notre nouvel outil optimise vos campagnes en temps réel.\n\n👇 Lien en bio\n#Tech #Startup #Growth #SaaS");
          break;
        case "instagram":
          setGeneratedContent("✨ Transformation Digitale ✨\n\nSwipez pour découvrir comment booster votre productivité x10 avec notre nouvelle feature.\n\n🔥 Lien en bio !\n.\n.\n#MarketingTips #Business #Entrepreneur #Success");
          break;
        case "facebook":
          setGeneratedContent("📢 GRANDE NOUVELLE pour notre communauté !\n\nVous l'attendiez, elle est enfin là. Notre nouvelle solution d'IA est disponible pour vous aider à décoller. 🚀\n\nDites-nous en commentaire ce que vous en pensez ! 👇\n\n👉 https://horizonsaas.com\n\n#Communauté #Nouveauté #Tech #BonPlan");
          break;
        case "tiktok":
          setGeneratedContent("[Texte incrusté : Comment j'ai fait x10 sur mon CA 📈]\n\nPOV : Tu découvres enfin l'outil qui fait tout le travail à ta place... 😲✨\n\nLe lien est dans ma bio, dépêche-toi avant que ça devienne payant !\n\n#Astuce #Business #IA #PourToi #FYP #Viral");
          break;
        case "pinterest":
          setGeneratedContent("📌 Inspiration Productivité 2026 📌\n\nComment organiser votre business avec l'IA ? Voici l'outil indispensable pour automatiser vos tâches.\n\n👇 Cliquez sur le lien pour lire l'article complet !\n\n💾 Sauvegardez cette épingle pour ne pas oublier.\n\n#ProductivityHacks #MarketingDigital #SaaS #Inspiration #PinIt");
          break;
      }
    }, 2000);
  };

  // Helper pour le style des boutons (Grille de 3 colonnes)
  const getButtonStyle = (p: string, colorClass: string) => 
    `py-3 rounded-lg text-sm font-medium border transition-all flex items-center justify-center gap-2 ${platform === p ? `${colorClass} text-white shadow-md transform scale-105` : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`;

  // Helper pour l'icône de prévisualisation
  const getPreviewIcon = () => {
    switch (platform) {
      case "linkedin": return { icon: "in", color: "bg-blue-700" };
      case "twitter": return { icon: "X", color: "bg-black" };
      case "instagram": return { icon: "Ig", color: "bg-pink-600" };
      case "facebook": return { icon: "f", color: "bg-blue-600" };
      case "tiktok": return { icon: "Tk", color: "bg-black" };
      case "pinterest": return { icon: "P", color: "bg-red-600" };
      default: return { icon: "?", color: "bg-gray-400" };
    }
  };

  const previewStyle = getPreviewIcon();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:block p-4 sticky top-0 h-screen">
        <div className="mb-8 px-4 py-2">
           <span className="font-bold text-xl text-blue-900">Nex<span className="text-blue-600">Mark</span></span>
        </div>
        
        <nav className="space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <LayoutDashboard size={20} /> Vue d'ensemble
          </Link>
          <Link href="/dashboard/content" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <PenTool size={20} /> Contenu IA
          </Link>
          <Link href="/dashboard/campaigns" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <BarChart3 size={20} /> Campagnes
          </Link>
          
          {/* LIEN ACTIF */}
          <div className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 font-medium rounded-lg">
            <Zap size={20} /> Générateur Viral
          </div>

          <Link href="/dashboard/compliance" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <ShieldCheck size={20} /> Conformité
          </Link>
        </nav>
      </aside>

      {/* Contenu Principal */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Zap className="text-yellow-500 fill-yellow-500" />
            Générateur Ultimate (6 Plateformes)
          </h1>
          <p className="text-gray-500 mt-1">Générez des posts optimisés pour tous vos réseaux sociaux.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Colonne Gauche : Paramètres */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-fit">
            <h2 className="font-bold text-gray-800 mb-6 flex items-center gap-2">1. Configuration</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sujet du post</label>
                <input type="text" placeholder="Ex: Lancement de notre nouvelle feature IA..." className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Plateforme cible</label>
                <div className="grid grid-cols-3 gap-3">
                  <button onClick={() => setPlatform("linkedin")} className={getButtonStyle("linkedin", "bg-blue-700 border-blue-700")}>LinkedIn</button>
                  <button onClick={() => setPlatform("twitter")} className={getButtonStyle("twitter", "bg-black border-black")}>X (Twitter)</button>
                  <button onClick={() => setPlatform("instagram")} className={getButtonStyle("instagram", "bg-pink-600 border-pink-600")}>Instagram</button>
                  <button onClick={() => setPlatform("facebook")} className={getButtonStyle("facebook", "bg-blue-600 border-blue-600")}>Facebook</button>
                  <button onClick={() => setPlatform("tiktok")} className={getButtonStyle("tiktok", "bg-black border-black")}>TikTok</button>
                  {/* Nouveau Bouton Pinterest */}
                  <button onClick={() => setPlatform("pinterest")} className={getButtonStyle("pinterest", "bg-red-600 border-red-600")}>Pinterest</button>
                </div>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg shadow-md transition-all mt-4 flex justify-center items-center gap-2 transform active:scale-[0.98]"
              >
                {isGenerating ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Création en cours...
                  </>
                ) : (
                  <>
                    <Zap size={20} /> Générer le post
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Colonne Droite : Résultat */}
          <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 flex flex-col items-center justify-center min-h-[500px]">
             {!generatedContent && !isGenerating && (
               <div className="text-center text-gray-400">
                 <Zap size={48} className="mx-auto mb-4 opacity-20" />
                 <p>Choisissez un réseau et générez !</p>
               </div>
             )}

             {isGenerating && (
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Zap className="text-blue-600 w-8 h-8 fill-blue-600" />
                  </div>
                  <p className="text-gray-500 font-medium animate-pulse">L'IA rédige pour {platform}...</p>
                </div>
             )}

             {generatedContent && !isGenerating && (
               <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <div className="p-4 border-b border-gray-100 flex items-center gap-3">
                   {/* Icône dynamique selon la plateforme */}
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${previewStyle.color}`}>
                      {previewStyle.icon}
                   </div>
                   <div>
                     <p className="font-bold text-sm text-gray-900">Votre Entreprise</p>
                     <p className="text-xs text-gray-500">À l'instant • 🌍</p>
                   </div>
                 </div>
                 <div className="p-5 text-gray-800 whitespace-pre-line leading-relaxed">
                   {generatedContent}
                 </div>
                 <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                    <button className="text-gray-500 hover:text-blue-600 text-sm font-medium flex items-center gap-2">
                      <Copy size={16} /> Copier
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 shadow-sm">
                      Publier
                    </button>
                 </div>
               </div>
             )}
          </div>
        </div>
      </main>
    </div>
  );
}