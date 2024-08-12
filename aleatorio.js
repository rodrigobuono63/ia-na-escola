const nomes = ["Luíza", "Júlia", "Maria Eduarda", "Talia", "Amanda", "Gustavo", "Rodrigo"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)