"use client"

import { CharacterList } from "./components/Character"
import { HouseIcon } from "@phosphor-icons/react"
import { Navigation } from "./components/Navigation";
import { History } from "./components/History";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <header className=" w-full flex justify-center items-center min-h-24">
        <span className="text-7xl italic">Mundo Rick e Morty</span>
      </header>
      <main className="h-[calc(100vh-96px)]  bg-amber-400 flex">
        <Navigation />
        <div className="content flex-2 p-4 flex flex-col gap-10">
          <div className="flex">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, officiis ipsa placeat expedita est officia unde et magni ipsam deserunt quam labore esse laudantium delectus? Consectetur, itaque dignissimos. Similique, quas.</p>
            <button className="bg-green-500 px-2 rounded-[5px] flex justify-center items-center shadow-lg cursor-pointer hover:bg-green-700 duration-500">
              <HouseIcon size={32}/>
            </button>
          </div>
          <History />
          <div className="flex flex-col items-center gap-2 ">
            <h2 className="text-2xl text-pink-600 italic uppercase">Personagens Principais</h2>
              {/* Cada card vai ser um componente, passando props para cada um ter suas caracteristicasa */}
              <div className="flex gap-x-5">
                <CharacterList />
              </div>               
          </div>
        </div>
      </main>
      {/* <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-xl min-w-[500px] mx-auto">
          <h2 className="text-xl font-bold mb-4">Nome</h2>
          <p>Este é o conteúdo do seu modal.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Fechar
          </button>
        </div>
      </div> */}
    </div>
  );
}
