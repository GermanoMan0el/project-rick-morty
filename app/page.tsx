"use client"

import { Person } from "./components/Person"
import { HouseIcon } from "@phosphor-icons/react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <header className="bg-red-400 w-full flex justify-center items-center min-h-24">
        <span className="text-7xl italic">Mundo Rick e Morty</span>
      </header>
      <main className="h-[calc(100vh-96px)]  bg-amber-400 flex">
        <div className="bg-amber-700 flex-1">
          <nav className="menu py-10 mx-7">
            {/* Component menu */}
            <h2 className="bg-black text-4xl p-4">SÉRIE RICK E MORT</h2>
            <ul className="bg-emerald-400 text-[25px] list-disc ">
              {/* Aqui a gente precisa trabalha com rotas!! */}
              <li><a className="hover:text-red-950 duration-300 ease-in" href="#">SOBRE A SÉRIE</a></li>
              <li><a className="hover:text-red-950 duration-300 ease-in" href="#">GALERIA DE FOTO</a></li>
            </ul>
          </nav>
        </div>
        <div className="content bg-blue-400 flex-2 p-4 flex flex-col gap-10">
          <div className="flex">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, officiis ipsa placeat expedita est officia unde et magni ipsam deserunt quam labore esse laudantium delectus? Consectetur, itaque dignissimos. Similique, quas.</p>
            <button className="bg-green-500 px-2 rounded-[5px] flex justify-center items-center shadow-lg cursor-pointer hover:bg-green-700 duration-500">
              <HouseIcon size={32}/>
            </button>
          </div>
          <div>
            <span className="text-pink-400 font-bold italic text-[20px]">HISTÓRIA</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam facere quam ducimus repellendus explicabo numquam officia, et, magnam delectus vero. Accusamus, eaque. Aut perferendis nesciunt iste rerum minus. Architecto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis iusto quae in dignissimos nemo, maxime voluptatibus repellendus sapiente quam commodi maiores aliquam voluptates magnam, velit consequuntur laboriosam sed officiis! Numquam!</p>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <h2 className="text-2xl text-pink-600 italic uppercase">Personagens Principais</h2>
              {/* Cada card vai ser um componente, passando props para cada um ter suas caracteristicasa */}
              <div className="flex gap-x-5">
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
              </div>               
          </div>
        </div>
      </main>
    </div>
  );
}
