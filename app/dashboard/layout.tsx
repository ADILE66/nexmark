"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, PenTool, BarChart3, ShieldCheck, Settings, Menu, X, LogOut } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Tableau de bord', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Générateur', href: '/dashboard/generator', icon: PenTool },
    { name: 'Campagnes', href: '/dashboard/campaigns', icon: BarChart3 },
    { name: 'Conformité', href: '/dashboard/compliance', icon: ShieldCheck },
    { name: 'Réglages', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      
      {/* Sidebar ORDI */}
      <aside className="hidden md:flex w-64 bg-white border-r border-gray-200 flex-col fixed h-full z-10">
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
           <span className="font-bold text-xl text-blue-900">Nex<span className="text-blue-600">Mark</span></span>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-100 mt-auto">
            <Link href="/" className="flex items-center gap-3 px-4 py-3 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
              <LogOut size={20} />
              <span className="font-medium">Déconnexion</span>
            </Link>
        </div>
      </aside>

      {/* Barre Haut MOBILE */}
      <div className="md:hidden fixed top-0 w-full bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4 h-16 shadow-sm">
         <span className="font-bold text-xl text-blue-900">Nex<span className="text-blue-600">Mark</span></span>
         <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg focus:outline-none"
         >
           {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
         </button>
      </div>

      {/* Menu Déroulant MOBILE */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900/50 md:hidden backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="absolute right-0 top-16 w-3/4 max-w-sm h-[calc(100vh-4rem)] bg-white border-l border-gray-200 shadow-2xl overflow-y-auto p-4" onClick={(e) => e.stopPropagation()}>
             <nav className="space-y-2">
              {navigation.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="flex items-center gap-3 px-4 py-4 text-gray-700 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all border border-transparent hover:border-blue-100"
                >
                  <item.icon size={22} />
                  <span className="font-medium text-lg">{item.name}</span>
                </Link>
              ))}
               <div className="my-6 border-t border-gray-100 pt-6">
                  <Link href="/" className="flex items-center gap-3 px-4 py-4 text-red-600 rounded-xl hover:bg-red-50 transition-all">
                    <LogOut size={22} />
                    <span className="font-medium text-lg">Déconnexion</span>
                  </Link>
               </div>
            </nav>
          </div>
        </div>
      )}

      {/* Contenu Principal */}
      <main className="flex-1 md:ml-64 p-4 pt-20 md:p-8 md:pt-8 min-h-screen">
        {children}
      </main>
    </div>
  );
}