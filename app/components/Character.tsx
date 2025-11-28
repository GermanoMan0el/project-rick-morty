import React, { useState, useEffect } from 'react';

// A interface de Props é mantida como você definiu
interface Props {
    name?: string;
    image?: string
}

function handlePopUp() {
    
}

// Seu componente Character (mantido como você definiu)
function Character({ name, image }: Props) {
    return (
        <div onClick={handlePopUp} className="bg-black p-1 flex flex-col items-center rounded-[5px] shadow-xl/20">
            <img className="h-40" src={image} alt={name} /> {/* Boa prática usar o 'name' no 'alt' */}
            <span className="text-[15px] italic">{name}</span>
        </div>
    );
}

// --- Componente que fará a requisição e renderizará a lista ---

export function CharacterList() {
    // 1. Estado para armazenar os personagens
    const [characters, setCharacters] = useState<Props[]>([]);
    // 2. Estado para lidar com o carregamento (opcional, mas recomendado)
    const [loading, setLoading] = useState(true);

    // 3. Função para buscar os dados
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
            // Poderia adicionar um estado para exibir uma mensagem de erro aqui
        } finally {
            setLoading(false); // Indica que o carregamento terminou
        }
    };

    // 4. useEffect para rodar a função de busca APENAS na montagem do componente
    useEffect(() => {
        fetchCharacters();
    }, []); // O array vazio garante que rode apenas uma vez

    // 5. Renderização condicional e mapeamento
    if (loading) {
        return <div>Carregando personagens...</div>;
    }

    if (characters.length === 0) {
        return <div>Nenhum personagem encontrado.</div>;
    }

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {/* O React usa o método .map() para criar uma lista de elementos */}
            {characters
                // 🚀 Adiciona .slice(0, 5) para pegar apenas os 5 primeiros
                .slice(0, 4) 
                .map((character, index) => (
                    <Character 
                        // A 'key' continua sendo necessária para a renderização de listas
                        key={index} 
                        name={character.name}
                        image={character.image}
                    />
            ))}
        </div>
    );
}
