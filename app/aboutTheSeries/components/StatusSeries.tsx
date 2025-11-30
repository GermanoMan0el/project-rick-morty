export function StatusSeries() {
    return (
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
    )
}