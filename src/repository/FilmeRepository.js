import conexao from "./connection";

export async function listarFilmes(); {
    const comando = 'selec * from tb_filme';
    const resultado = await conexao.query(comando);
    return resultado[0];
}

