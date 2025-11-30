interface Props {
    title: string,
    voice: string,
    moreAboutTheVoice: string
}

export function Card({title, voice, moreAboutTheVoice}: Props) {
    return(
         <div className="group bg-slate-900 border border-green-800 p-5 hover:border-cyan-400 transition-colors duration-300">
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-xs text-green-500 uppercase tracking-wider mb-3">{voice}</p>
            <p className="text-sm text-gray-400">{moreAboutTheVoice}</p>
        </div>
    );
}