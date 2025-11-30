"use client"

import { CharacterList } from "./components/Character"
import { HouseIcon } from "@phosphor-icons/react"
import { Navigation } from "./components/Navigation";
import { History } from "./components/History";

export default function Home() {

  return (
    // Container Principal: Fundo escuro (Slate-950) e fonte Monoespaçada (Terminal)
    <div className="flex flex-col min-h-screen bg-slate-950 font-mono text-green-100 relative overflow-hidden">
      
      {/* Background Decorativo (Gradiente Espacial) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-lime-900 via-slate-950 to-black"></div>

      <header className="relative z-10 w-full flex justify-center items-center min-h-32 border-b border-green-900/50 shadow-[0_0_20px_rgba(132,204,22,0.1)]">
        <span className="text-5xl md:text-7xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-green-300 to-cyan-400 drop-shadow-[0_0_10px_rgba(132,204,22,0.6)] transform -rotate-1">
          Mundo Rick e Morty
        </span>
      </header>

      <main className="relative z-10 flex flex-1 h-[calc(100vh-128px)] overflow-hidden flex-col">
      
        <aside>
            <Navigation />
        </aside>
        
        <div className="content flex-1 p-6 md:p-10 flex flex-col gap-10 overflow-y-auto custom-scrollbar">
          
          <div className="flex flex-col md:flex-row gap-4 items-center bg-black/40 p-6 border-l-4 border-cyan-500 rounded-r-xl backdrop-blur-md shadow-lg">
            <p className="flex-1 text-lg text-gray-300 leading-relaxed">
              <strong className="text-lime-400">{'>'} SYSTEM_MSG:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, officiis ipsa placeat expedita est officia unde et magni ipsam deserunt quam labore esse laudantium delectus?
            </p>
            
            <button className="group border border-green-500 text-green-400 p-3 rounded-lg shadow-[0_0_10px_rgba(34,211,238,0.1)] hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_#22c55e] transition-all duration-300 cursor-pointer hidden">
              <HouseIcon size={32} weight="duotone" />
            </button>
          </div>
          
          <div className="bg-slate-900/30 border border-green-900/30 rounded-xl p-4">
             <h3 className="text-xs text-green-600 font-bold uppercase tracking-widest mb-4 border-b border-green-900 pb-2">Recent Logs</h3>
             <History />
          </div>
          
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-black italic uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]">
              Personagens Principais
            </h2>
            
            <div className="flex gap-x-5 overflow-x-auto pb-4 custom-scrollbar">
               <CharacterList />
            </div>               
          </div>

        </div>
      </main>
    </div>
  );
}