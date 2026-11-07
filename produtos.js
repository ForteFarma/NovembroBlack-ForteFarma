const produtos = [
    {
        nome: "Expert Memory",
        marca: "Green Life is Good",
        apresentacao: "60 cápsulas • 500 mg • 30 g",
        categoria: "SUPLEMENTO ALIMENTAR",
        descricao: "Fórmula com alecrim, ashwagandha, camomila, cúrcuma, gengibre, ginkgo biloba, ginseng, hortelã e sálvia.",
        imagem: "produtos/expert-memory.jpg",
        precoAntigo: 69.90,
        preco: 59.99,
        condicao: "Consulte disponibilidade nas lojas."
    },
    {
        nome: "Dor Zero",
        marca: "Green Life is Good",
        apresentacao: "60 cápsulas • 500 mg • 30 g",
        categoria: "SUPLEMENTO ALIMENTAR",
        descricao: "Com alho, bacurina, colágeno tipo II, gengibre, manacá, mureré, quebra-pedra, sucupira, salsaparrilha, vitamina D3 e vitamina K2.",
        imagem: "produtos/dor-zero.jpg",
        precoAntigo: 69.90,
        preco: 59.99,
        condicao: "Consulte disponibilidade nas lojas."
    },
    {
        nome: "Gel Pescador",
        marca: "Anil Cosméticos",
        apresentacao: "250 g",
        categoria: "COSMÉTICOS",
        descricao: "Gel com óleo de peixe, arnica e castanha-da-índia.",
        imagem: "produtos/gel-pescador.jpg",
        precoAntigo: 59.99,
        preco: 39.90,
        condicao: "Consulte disponibilidade nas lojas."
    },

    // LINHA NUAGE MASCULINA

    {
        nome: "Sport Action",
        marca: "Nuage Masculino",
        apresentacao: "150 ml • 90 g • Aerossol",
        categoria: "PERFUMARIA",
        descricao: "Antitranspirante com 48h de proteção, jato seco sem álcool.",
        imagem: "Produtos/sport-action.png",
        precoAntigo: 11.99,
        preco: 6.99,
        condicao: "Consulte disponibilidade nas lojas."
    },
    {
        nome: "Elegance",
        marca: "Nuage Masculino",
        apresentacao: "150 ml • 90 g • Aerossol",
        categoria: "PERFUMARIA",
        descricao: "Antitranspirante com 48h de proteção, jato seco sem álcool.",
        imagem: "Produtos/elegance.png",
        precoAntigo: 11.99,
        preco: 6.99,
        condicao: "Consulte disponibilidade nas lojas."
    },
    {
        nome: "Excellence",
        marca: "Nuage Masculino",
        apresentacao: "150 ml • 90 g • Aerossol",
        categoria: "PERFUMARIA",
        descricao: "Antitranspirante com 48h de proteção, jato seco sem álcool.",
        imagem: "Produtos/excellence.png",
        precoAntigo: 11.99,
        preco: 6.99,
        condicao: "Consulte disponibilidade nas lojas."
    },
    {
        nome: "Essential",
        marca: "Nuage Masculino",
        apresentacao: "150 ml • 90 g • Aerossol",
        categoria: "PERFUMARIA",
        descricao: "Antitranspirante com 48h de proteção, jato seco sem álcool.",
        imagem: "Produtos/essential.png",
        precoAntigo: 11.99,
        preco: 6.99,
        condicao: "Consulte disponibilidade nas lojas."
    },

    // LINHA NUAGE FEMININA

    {
        nome: "Infinity",
        marca: "Nuage Feminino",
        apresentacao: "150 ml • 90 g • Aerossol",
        categoria: "PERFUMARIA",
        descricao: "Antitranspirante com 48h de proteção, jato seco sem álcool.",
        imagem: "Produtos/infinity.png",
        precoAntigo: 11.99,
        preco: 6.99,
        condicao: "Consulte disponibilidade nas lojas."
    },
    {
        nome: "Diva",
        marca: "Nuage Feminino",
        apresentacao: "150 ml • 90 g • Aerossol",
        categoria: "PERFUMARIA",
        descricao: "Antitranspirante com 48h de proteção, jato seco sem álcool.",
        imagem: "Produtos/diva.png",
        precoAntigo: 11.99,
        preco: 6.99,
        condicao: "Consulte disponibilidade nas lojas."
    },
    {
        nome: "Inspiration",
        marca: "Nuage Feminino",
        apresentacao: "150 ml • 90 g • Aerossol",
        categoria: "PERFUMARIA",
        descricao: "Antitranspirante com 48h de proteção, jato seco sem álcool.",
        imagem: "Produtos/inspiration.png",
        precoAntigo: 11.99,
        preco: 6.99,
        condicao: "Consulte disponibilidade nas lojas."
    },
    {
        nome: "Sport Action",
        marca: "Nuage Feminino",
        apresentacao: "150 ml • 90 g • Aerossol",
        categoria: "PERFUMARIA",
        descricao: "Antitranspirante com 48h de proteção, jato seco sem álcool.",
        imagem: "Produtos/sport-action-femme.png",
        precoAntigo: 11.99,
        preco: 6.99,
        condicao: "Consulte disponibilidade nas lojas."
    },

    // LEITE DE MAGNÉSIA

    {
        nome: "Leite de Magnésia",
        marca: "Uniphar",
        apresentacao: "120 ml • Suspensão oral • Uso adulto",
        categoria: "ANTIÁCIDO | LAXANTE SUAVE",
        descricao: "Hidróxido de magnésio 8%.",
        imagem: "Produtos/leite-de-magnesia.png",
        precoAntigo: 19.99,
        preco: 14.99,
        ofertaEspecial: "2 unidades por R$ 19,99",
        condicao: "Consulte disponibilidade nas lojas."
    },

    // ABSORVENTE DEFINITY

    {
        nome: "Absorvente Definity",
        marca: "Definity",
        apresentacao: "Contém 8 absorventes higiênicos",
        categoria: "PERFUMARIA",
        descricao: "Normal com abas, cobertura suave para fluxo moderado.",
        imagem: "Produtos/definity.png",
        precoAntigo: 4.99,
        preco: 2.99,
        condicao: "Consulte disponibilidade nas lojas."
    }
];

const grade = document.getElementById("gradeProdutos");

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function carregarProdutos() {
    grade.innerHTML = produtos.map(produto => `
        <article class="produto">

            <div class="produto-imagem">
                <span class="desconto">OFERTA BLACK</span>

                <img
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                    loading="lazy"
                >
            </div>

            <div class="produto-info">

                <span class="categoria">
                    ${produto.categoria}
                </span>

                <h3>${produto.nome}</h3>

                <p class="marca">
                    ${produto.marca} • ${produto.apresentacao}
                </p>

                <p class="descricao-produto">
                    ${produto.descricao}
                </p>

                <p class="preco-antigo">
                    De R$ ${formatarPreco(produto.precoAntigo)}
                </p>

                <p class="preco">
                    <small>R$</small> ${formatarPreco(produto.preco)}
                </p>

                ${produto.ofertaEspecial ? `
                    <p class="oferta-especial">
                        ${produto.ofertaEspecial}
                    </p>
                ` : ""}

                <p class="condicao">
                    ${produto.condicao}
                </p>

            </div>
        </article>
    `).join("");
}

carregarProdutos();