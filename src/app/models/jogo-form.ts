export interface JogoForm {
    nome: string;
    preco?: number;
    desenvolvedora: string;
    dataLancamento?: Date;
    classificacao: number;
    tags: string[];
    categoria?: number;
    imagem?: File;
    descricao?: string;
    plataforma: string[];
    disponivelVenda: boolean;
}