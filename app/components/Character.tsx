import React, { useState, useEffect } from 'react';

interface Props {
    name?: string;
    image?: string
}

function Character({ name, image }: Props) {
    return (
        <div className="bg-black p-1 flex flex-col items-center rounded-[5px] shadow-xl/20">
            <img className="h-40" src={image} alt={name} />
            <span className="text-[15px] italic">{name}</span>
        </div>
    );
}

export function CharacterList() {
    const [characters, setCharacters] = useState<Props[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchCharacters = async () => {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            if (!response.ok) {
                throw new Error('Erro ao buscar dados');
            }
            const data = await response.json();
            
            // A API retorna a lista de personagens em 'data.results'
            // Atualiza o estado com os dados que correspondem à interface Props
            setCharacters(data.results.map((char: any) => ({
                name: char.name,
                image: char.image
            })));
        } catch (error) {
            console.error("Houve um erro na requisição:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, []); // O array vazio garante que rode apenas uma vez

    // Renderização condicional e mapeamento
    if (loading) {
        return <div>Carregando personagens...</div>;
    }

    if (characters.length === 0) {
        return <div>Nenhum personagem encontrado.</div>;
    }

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {/*Usa o método .map() para criar uma lista de elementos */}
            {characters
                // .slice(0, 5) para pegar apenas os 5 primeiros
                .slice(0, 4) 
                .map((character, index) => (
                    <Character 
                        key={index} 
                        name={character.name}
                        image={character.image}
                    />
            ))}
        </div>
    );
}
