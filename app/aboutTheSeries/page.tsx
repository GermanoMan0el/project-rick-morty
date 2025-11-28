'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 font-mono relative overflow-hidden text-green-100">
      {/* Background Decorativo (Mesmo da Galeria para consistência) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-lime-900 via-slate-950 to-black"></div>

      <div className="relative z-10 container mx-auto p-6 md:p-12">
        
        {/* Header / Título */}
        <header className="mb-16 border-b border-green-800 pb-6">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            PROJECT: RICK AND MORTY
          </h1>
          <div className="flex items-center gap-4 mt-4 text-xs md:text-sm text-green-600 uppercase tracking-widest">
            <span className="bg-green-900/30 px-2 py-1 border border-green-800 rounded">Classified: Level 5</span>
            <span className="animate-pulse">● System Online</span>
          </div>
        </header>

        {/* Conteúdo Principal Dividido em Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Coluna da Esquerda: Sinopse e Info (8 colunas) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Seção: Sinopse (Estilo Arquivo de Texto) */}
            <section className="bg-black/50 border-l-4 border-lime-500 p-6 md:p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <h2 className="text-2xl font-bold text-lime-400 mb-4 flex items-center gap-2">
                <span className="text-cyan-400">{'>'}</span> LOG_ENTRY: SYNOPSIS
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                A série segue as desventuras de <strong className="text-cyan-300">Rick Sanchez</strong>, um cientista cínico e genial, e seu neto de bom coração, mas fretful, <strong className="text-cyan-300">Morty Smith</strong>. 
                Dividindo seu tempo entre a vida doméstica e viagens interdimensionais, a dupla frequentemente se encontra em cenários apocalípticos, enfrentando alienígenas e dilemas morais complexos.
              </p>
              <div className="mt-6 text-xs text-green-600 font-bold border-t border-green-900 pt-2">
                STATUS: EM TRANSMISSÃO // ADULT SWIM
              </div>
            </section>

            {/* Seção: Os Criadores (Estilo Cards Tech) */}
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                <span className="text-lime-400">{'>'}</span> CREATORS_DATABASE
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Card Criador 1 */}
                <div className="group bg-slate-900 border border-green-800 p-5 hover:border-cyan-400 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">Dan Harmon</h3>
                  <p className="text-xs text-green-500 uppercase tracking-wider mb-3">Writer / Co-Creator</p>
                  <p className="text-sm text-gray-400">Conhecido por sua narrativa complexa e meta-humor (ex: Community).</p>
                </div>
                {/* Card Criador 2 */}
                <div className="group bg-slate-900 border border-green-800 p-5 hover:border-cyan-400 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">Justin Roiland</h3>
                  <p className="text-xs text-green-500 uppercase tracking-wider mb-3">Voice Actor / Co-Creator</p>
                  <p className="text-sm text-gray-400">A voz original de ambos os protagonistas e o caos criativo da série.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Coluna da Direita: Stats e Links (4 colunas) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Widget de Estatísticas */}
            <div className="bg-green-950/20 border border-green-600/30 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lime-500 to-transparent opacity-50"></div>
              <h3 className="text-green-400 font-bold mb-4 uppercase text-sm tracking-widest">Series Stats</h3>
              
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-green-900 pb-2">
                  <span className="text-gray-400">Temporadas</span>
                  <span className="text-2xl font-bold text-cyan-300">7</span>
                </li>
                <li className="flex justify-between items-center border-b border-green-900 pb-2">
                  <span className="text-gray-400">Episódios</span>
                  <span className="text-2xl font-bold text-cyan-300">71+</span>
                </li>
                <li className="flex justify-between items-center pb-2">
                  <span className="text-gray-400">IMDb Rating</span>
                  <span className="text-2xl font-bold text-lime-400">9.1</span>
                </li>
              </ul>
            </div>

            {/* "Tech Stack" da Animação (Fictício/Temático) */}
            <div className="space-y-2">
                <h3 className="text-green-600 font-bold uppercase text-xs">Production Technology</h3>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-800 text-xs text-cyan-200 border border-cyan-900">Toon Boom Harmony</span>
                    <span className="px-3 py-1 bg-slate-800 text-xs text-cyan-200 border border-cyan-900">After Effects</span>
                    <span className="px-3 py-1 bg-slate-800 text-xs text-cyan-200 border border-cyan-900">Portal Fluid</span>
                </div>
            </div>

            {/* CTA para a Galeria */}
            <div className="mt-8 pt-8 border-t border-green-800 text-center">
                <p className="mb-4 text-sm text-gray-400">Acesso aos arquivos dos personagens:</p>
                <button className="w-full py-4 bg-lime-600 text-black font-bold uppercase tracking-widest hover:bg-lime-400 hover:shadow-[0_0_20px_#84cc16] transition-all duration-300 clip-path-polygon cursor-pointer">
                    Acessar Galeria
                </button>
            </div>

          </div>
        </div>

        {/* Footer Decorativo */}
        <footer className="mt-20 border-t border-green-900 pt-6 text-center text-green-800 text-xs">
          <p>C-137 DIMENSION DATA STREAM © 2025</p>
        </footer>
      </div>
    </div>
  );
}