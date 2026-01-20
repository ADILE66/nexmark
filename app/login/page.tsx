// 📂 Fichier: app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Lock, Mail, Github, Linkedin } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation d'une connexion (2 secondes)
    setTimeout(() => {
      router.push("/dashboard"); // Redirection vers le tableau de bord
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Colonne Gauche : Formulaire */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-24">
        <div className="mb-10">
           <Link href="/" className="font-bold text-2xl text-blue-900 flex items-center tracking-tight mb-8">
           <span className="font-bold text-xl text-blue-900">Nex<span className="text-blue-600">Mark</span></span>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Bon retour ! 👋</h1>
          <p className="text-gray-500">Entrez vos coordonnées pour accéder à votre espace.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email professionnel</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="email" 
                placeholder="nom@entreprise.com" 
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required 
              />
            </div>
            <div className="flex justify-end mt-2">
              <a href="#" className="text-sm text-blue-600 hover:underline font-medium">Mot de passe oublié ?</a>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
          >
            {isLoading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <>Se connecter <ArrowRight size={20} /></>
            )}
          </button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
            <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">Ou continuer avec</span></div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium text-gray-700">
              <Github size={20} /> GitHub
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium text-gray-700">
              <Linkedin size={20} className="text-blue-700" /> LinkedIn
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-gray-500">
          Pas encore de compte ? <Link href="#" className="text-blue-600 font-bold hover:underline">Créer un compte</Link>
        </p>
      </div>

      {/* Colonne Droite : Image / Déco (Cachée sur mobile) */}
      <div className="hidden lg:flex w-1/2 bg-blue-600 relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-90"></div>
        <div className="relative z-10 text-white max-w-lg">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl">
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-xl font-medium leading-relaxed mb-6">
              "NexMark a complètement transformé notre façon de gérer le marketing. L'IA génère des posts viraux en quelques secondes, c'est bluffant !"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                S
              </div>
              <div>
                <p className="font-bold">Sarah Connor</p>
                <p className="text-blue-200 text-sm">CMO @ Skynet Corp</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Cercles décoratifs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}