import Link from "next/link";
import { ArrowRight, Zap, ShieldCheck, BarChart3, CheckCircle2 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 1. Navbar (Menu du haut) */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-2xl text-blue-900 flex items-center gap-2 tracking-tight">
            Nex<span className="text-blue-600">Mark</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-gray-600 font-medium hover:text-blue-600 transition-colors hidden md:block">
              Connexion
            </Link>
            <Link href="/dashboard" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-200">
              Essai Gratuit <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="pt-24 pb-32 px-6 bg-gradient-to-b from-white to-blue-50/50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-8 border border-blue-100 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            NexMark V2.0 est disponible
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight leading-[1.1]">
            Le Marketing du Futur <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Propulsé par NexMark</span>
          </h1>
          
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            La plateforme tout-en-un pour les marketeurs ambitieux. Génération virale, Analytics et Conformité RGPD en un seul endroit.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href="/dashboard" className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 transform hover:-translate-y-1">
              Démarrer avec NexMark <Zap size={20} />
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-400 grayscale opacity-70">
            <span>TRUSTED BY</span>
            <span className="font-bold">GOOGLE</span>
            <span className="font-bold">MICROSOFT</span>
            <span className="font-bold">UBER</span>
          </div>
        </div>
      </section>

      {/* 3. Features Grid */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">La Suite NexMark</h2>
            <p className="text-gray-500 text-lg">Des outils puissants pour une croissance exponentielle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Générateur Viral</h3>
              <p className="text-gray-500 leading-relaxed">Créez des posts pour LinkedIn, X et Instagram en un clic grâce à notre IA.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & ROI</h3>
              <p className="text-gray-500 leading-relaxed">Suivez la performance de vos campagnes en temps réel.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conformité Totale</h3>
              <p className="text-gray-500 leading-relaxed">Dormez sur vos deux oreilles. Conformité RGPD et EU AI Act automatique.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="bg-white py-12 border-t border-gray-100 text-center">
        <div className="flex items-center justify-center gap-2 font-bold text-gray-900 mb-4 text-xl">
           Nex<span className="text-blue-600">Mark</span>
        </div>
        <p className="text-gray-400 text-sm">© 2026 NexMark Inc. Tous droits réservés.</p>
      </footer>
    </div>
  );
}