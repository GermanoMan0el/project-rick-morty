'use client';

import { useState, useEffect } from 'react';
import { HeaderGallery } from './components/HeaderGallery';

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
      {/* Background Decorativo (Efeito Espacial/Portal) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900 via-slate-950 to-black"></div>
      
      <div className="relative z-10 p-6 md:p-10">
        <HeaderGallery />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 container mx-auto">
          {characters.map((char) => (
            <div 
              key={char.id} 
              className="group relative bg-black border-2 border-green-800 hover:border-lime-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(132,204,22,0.4)]"
            >
              {/* Efeito de Glitch/Scanline na imagem */}
              <div className="relative overflow-hidden border-b-2 border-green-900 group-hover:border-lime-500/50">
                <img 
                  src={char.image} 
                  alt={char.name} 
                  className="w-full h-72 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-90 group-hover:opacity-100"
                />
                
                {/* Overlay de Scanline (linhas horizontais) */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none"></div>
                
                {/* Badge de Status "Holográfica" */}
                <div className={`absolute top-0 right-0 p-2 z-20 font-bold text-xs uppercase tracking-widest border-l-2 border-b-2 
                  ${char.status === 'Alive' 
                    ? 'bg-green-900/80 text-green-300 border-green-500' 
                    : char.status === 'Dead' 
                      ? 'bg-red-900/80 text-red-300 border-red-500' 
                      : 'bg-gray-900/80 text-gray-300 border-gray-500'}`}>
                  {char.status}
                </div>
              </div>

              {/* Informações estilo Terminal */}
              <div className="p-5 space-y-4 relative">
                <h2 className="text-2xl font-bold text-lime-400 truncate group-hover:text-cyan-300 transition-colors">
                  {char.name}
                </h2>
                
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1">
                    <p className="text-green-700 font-bold uppercase">Espécie</p>
                    <p className="text-green-100">{char.species}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-green-700 font-bold uppercase">Origem</p>
                    <p className="text-green-100 truncate">{char.origin.name}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-green-900/50">
                  <p className="text-green-700 font-bold uppercase text-[10px] mb-1">Última Localização Conhecida</p>
                  <div className="flex items-center text-cyan-400 text-sm">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse mr-2"></span>
                    {char.location.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}