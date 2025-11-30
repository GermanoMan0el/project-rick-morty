import page from "../photoGallery/page"

export function Navigation() {
    return (
        <div className="flex-1">
          <nav className="menu py-10 mx-7">
            {/* Component menu */}
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-green-300 to-cyan-400 drop-shadow-[0_0_10px_rgba(132,204,22,0.6)] transform -rotate-1 p-4">SÉRIE RICK E MORTY</h1>
            <ul className="text-[25px] pl-4">
              {/* Aqui a gente precisa trabalha com rotas!! */}
              <li>
                <a className="hover:text-lime-500 duration-300 ease-in" href="/aboutTheSeries">
                  SOBRE A SÉRIE
                </a>
              </li>
              <li>
                <a className="hover:text-lime-500 duration-300 ease-in" href="/photoGallery">
                  GALERIA DE FOTO
                </a>
              </li>
            </ul>
          </nav>
        </div>
    )
}
