import page from "../photoGallery/page"

export function Navigation() {
    return (
        <div className="bg-amber-700 flex-1">
          <nav className="menu py-10 mx-7">
            {/* Component menu */}
            <h2 className="bg-black text-4xl p-4">SÉRIE RICK E MORTY</h2>
            <ul className="bg-emerald-400 text-[25px] list-disc ">
              {/* Aqui a gente precisa trabalha com rotas!! */}
              <li><a className="hover:text-red-950 duration-300 ease-in" href="/aboutTheSeries">SOBRE A SÉRIE</a></li>
              <li><a className="hover:text-red-950 duration-300 ease-in" href="/photoGallery">GALERIA DE FOTO</a></li>
            </ul>
          </nav>
        </div>
    )
}
