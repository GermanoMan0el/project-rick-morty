'use client';

import { useState, useEffect } from 'react';
import { HeaderGallery } from './components/HeaderGallery';
import { X } from 'lucide'; // Importando ícone de fechar (se não tiver a lib, troque por texto "X")

interface CharacterLocation {
  name: string;
  url: string;
}

interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown' | string;
  species: string;
  image: string;
  location: CharacterLocation;
  origin: {
    name: string;
  }
}

interface ApiResponse {
  results: Character[];
}

export default function Page() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  // 1. Estado para controlar qual personagem está aberto no Modal
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data: ApiResponse = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error("Erro ao carregar dados do multiverso:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);

  if (loading) {
    return (
      <div className="bg-black h-screen flex flex-col justify-center items-center text-lime-400 font-mono">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-lime-500 mb-4 shadow-[0_0_20px_#84cc16]"></div>
        <p className="animate-pulse tracking-widest">CALIBRATING PORTAL GUN...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 font-mono relative overflow-hidden">

      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900 via-slate-950 to-black"></div>
      
      <div className="relative z-10 p-6 md:p-10">
        <HeaderGallery />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 container mx-auto">
          {characters.map((char) => (
            <div 
              key={char.id} 

              onClick={() => setSelectedChar(char)}
              className="group relative cursor-pointer bg-black border border-green-900 hover:border-lime-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(132,204,22,0.4)] rounded-lg overflow-hidden hover:-translate-y-2"
            >
              {/* Imagem */}
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={char.image} 
                  alt={char.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-lime-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-3 bg-slate-900/90 border-t border-green-800 text-center">
                 <h2 className="text-sm font-bold text-green-100 truncate group-hover:text-lime-400 transition-colors">
                  {char.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
\\
      {selectedChar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          
          <div className="bg-slate-900 border-2 border-lime-500 shadow-[0_0_50px_rgba(132,204,22,0.3)] max-w-3xl w-full rounded-xl overflow-hidden relative flex flex-col md:flex-row">
            
            {/* Botão Fechar */}
            <button 
              onClick={() => setSelectedChar(null)}
              className="absolute top-3 right-3 z-20 bg-black/50 hover:bg-red-600 text-green-400 hover:text-white rounded-full py-2 px-4 transition-colors border border-green-500/30 cursor-pointer"
            >
              X
            </button>

            {/* Imagem Grande no Modal */}
            <div className="w-full md:w-2/5 relative">
              <img 
                src={selectedChar.image} 
                alt={selectedChar.name} 
                className="w-full h-full object-cover"
              />
              <div className={`absolute bottom-4 left-4 px-3 py-1 font-bold text-xs uppercase tracking-widest border shadow-lg rounded
                  ${selectedChar.status === 'Alive' ? 'bg-green-500 text-black border-green-400' : 
                    selectedChar.status === 'Dead' ? 'bg-red-600 text-white border-red-400' : 'bg-gray-600 text-white border-gray-400'}`}>
                  {selectedChar.status}
              </div>
            </div>

            {/* Informações Detalhadas */}
            <div className="w-full md:w-3/5 p-8 flex flex-col justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black">
              
              <h2 className="text-3xl font-black text-white mb-2">{selectedChar.name}</h2>
              <p className="text-xs text-green-600 uppercase tracking-[0.2em] mb-8 border-b border-green-900 pb-4">
                Identificação Multiversal #{selectedChar.id}
              </p>

              <div className="space-y-6">
                
                {/* Espécie */}
                <div className="group">
                   <p className="text-[10px] text-green-500 uppercase font-bold mb-1">Espécie</p>
                   <p className="text-lg text-green-100 font-medium pl-3 border-l-2 border-cyan-500">
                     {selectedChar.species}
                   </p>
                </div>

                {/* Localização */}
                <div className="group">
                   <p className="text-[10px] text-green-500 uppercase font-bold mb-1">Localização Atual</p>
                   <p className="text-lg text-lime-300 font-medium pl-3 border-l-2 border-lime-500 animate-pulse">
                     {selectedChar.location.name}
                   </p>
                </div>

                {/* Origem */}
                <div className="group">
                   <p className="text-[10px] text-green-500 uppercase font-bold mb-1">Origem</p>
                   <p className="text-lg text-green-100 font-medium pl-3 border-l-2 border-purple-500">
                     {selectedChar.origin.name}
                   </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}