const whatsappNumero = "5513996613883";

const mensagemWhatsApp = encodeURIComponent(
    "Olá! Acessei a página Novembro Black da Forte Farma e gostaria de mais informações sobre as ofertas."
);

const linkWhatsApp = `https://wa.me/${whatsappNumero}?text=${mensagemWhatsApp}`;
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
        imagem: "produtos/sport-action.png",
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
        imagem: "produtos/elegance.png",
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
        imagem: "produtos/excellence.png",
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
        imagem: "produtos/essential.png",
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
        imagem: "produtos/infinity.png",
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
        imagem: "produtos/diva.png",
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
        imagem: "produtos/inspiration.png",
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
        imagem: "produtos/sport-action-femme.png",
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
        imagem: "produtos/leite-de-magnesia.png",
        precoAntigo: 19.99,
        preco: 11.99,
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
        imagem: "produtos/definity.png",
        precoAntigo: 4.99,
        preco: 2.99,
     condicao: "Consulte disponibilidade nas lojas."
    },

    // SABONETES ALBANY

    {
        nome: "Sabonete Albany – Perfumes da Natureza",
        marca: "Albany",
        apresentacao: "80 g",
        categoria: "PERFUMARIA",
        descricao: "Sabonetes com fragrâncias delicadas para o cuidado diário.",
        opcoes: [
            "Lavanda Delicada",
            "Rosa Aveludada",
            "Lírio Selvagem",
            "Frutas Vermelhas"
        ],
        imagem: "produtos/albany-perfumes.png",
        precoAntigo: 7.99,
        preco: 2.99,
     condicao: "Consulte disponibilidade nas lojas."
    },
    {
        nome: "Sabonete Albany – Antibac",
        marca: "Albany",
        apresentacao: "80 g",
        categoria: "PERFUMARIA",
        descricao: "Com extrato de aveia. Elimina até 99% das bactérias.",
        imagem: "produtos/albany-antibac.png",
        precoAntigo: 7.99,
        preco: 2.99,
     condicao: "Consulte disponibilidade nas lojas."
    },

    // 1. MEDICAMENTOS E FARMÁCIA
  {
    nome: "Nistatina + Óxido de Zinco",
    marca: "Germed",
    apresentacao: "100.000 UI + 200 mg/g, pomada, bisnaga 60 g",
    categoria: "Medicamentos",
    descricao: "Pomada dermatológica em bisnaga de 60 g.",
    imagem: "",
    precoAntigo: "36.07",
    preco: "17.99",
 condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Aludor",
    marca: "Aludor",
    apresentacao: "100 mg/mL, solução oral, 20 mL",
    categoria: "Medicamentos",
    descricao: "Solução oral em embalagem de 20 mL.",
    imagem: "",
    precoAntigo: "17.96",
    preco: "9.99",
 condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Perfenol",
    marca: "Perfenol",
    apresentacao: "400 mg + 4 mg + 4 mg, caixa com 20 cápsulas",
    categoria: "Medicamentos",
    descricao: "Embalagem com 20 cápsulas.",
    imagem: "",
    precoAntigo: "25.42",
    preco: "8.99",
 condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Loratadina",
    marca: "Genérico",
    apresentacao: "10 mg, caixa com 12 comprimidos",
    categoria: "Medicamentos",
    descricao: "Embalagem com 12 comprimidos de 10 mg.",
    imagem: "",
    precoAntigo: "14.86",
    preco: "7.50",
 condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Leite de Magnésia",
    marca: "Não informada na planilha",
    apresentacao: "80 mg/mL, frasco 120 mL",
    categoria: "Medicamentos",
    descricao: "Suspensão oral em frasco de 120 mL.",
    imagem: "",
    precoAntigo: "19.99",
    preco: "11.99",
 condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Gel Pescador",
    marca: "Pescador",
    apresentacao: "Pote 250 g",
    categoria: "Cuidados pessoais",
    descricao: "Gel em pote de 250 g.",
    imagem: "",
    precoAntigo: "39.90",
    preco: "31.99",
 condicao: "Consulte disponibilidade nas lojas."
  },

  // 2. SUPLEMENTOS
  {
    nome: "Expert Memory",
    marca: "Green Life",
    apresentacao: "60 cápsulas",
    categoria: "Suplementos",
    descricao: "Suplemento em embalagem com 60 cápsulas.",
    imagem: "",
    precoAntigo: "59.99",
    preco: "42.99",
 condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Dor Zero",
    marca: "Green Life",
    apresentacao: "60 cápsulas",
    categoria: "Suplementos",
    descricao: "Suplemento em embalagem com 60 cápsulas.",
    imagem: "",
    precoAntigo: "59.99",
    preco: "42.99",
 condicao: "Consulte disponibilidade nas lojas."
  },

  // 3. SABONETES ALBANY
  {
    nome: "Sabonete Lavanda Delicada",
    marca: "Albany",
    apresentacao: "85 g",
    categoria: "Higiene pessoal",
    descricao: "Sabonete em barra, fragrância Lavanda Delicada.",
    imagem: "",
    precoAntigo: "3.99",
    preco: "2.49",
 condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Sabonete Frutas Vermelhas",
    marca: "Albany",
    apresentacao: "85 g",
    categoria: "Higiene pessoal",
    descricao: "Sabonete em barra, fragrância Frutas Vermelhas.",
    imagem: "",
    precoAntigo: "3.99",
    preco: "2.49",
 condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Sabonete Branco Cuidado",
    marca: "Albany",
    apresentacao: "85 g",
    categoria: "Higiene pessoal",
    descricao: "Sabonete em barra Branco Cuidado.",
    imagem: "",
    precoAntigo: "3.99",
    preco: "2.49",
 condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Sabonete Lírio Selvagem",
    marca: "Albany",
    apresentacao: "85 g",
    categoria: "Higiene pessoal",
    descricao: "Sabonete em barra, fragrância Lírio Selvagem.",
    imagem: "",
    precoAntigo: "3.99",
    preco: "2.49",
 condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Sabonete Hidratação Intensiva",
    marca: "Albany",
    apresentacao: "85 g",
    categoria: "Higiene pessoal",
    descricao: "Sabonete em barra Hidratação Intensiva.",
    imagem: "",
    precoAntigo: "3.99",
    preco: "2.49",
 condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Sabonete Rosa Aveludada",
    marca: "Albany",
    apresentacao: "85 g",
    categoria: "Higiene pessoal",
    descricao: "Sabonete em barra, fragrância Rosa Aveludada.",
    imagem: "",
    precoAntigo: "3.99",
    preco: "2.49",
 condicao: "Consulte disponibilidade nas lojas."
  },

  // 4. HIGIENE E CUIDADOS PESSOAIS
  {
    nome: "Absorvente Definity",
    marca: "Definity",
    apresentacao: "Pacote com 8 unidades, com abas",
    categoria: "Higiene pessoal",
    descricao: "Absorvente com abas, pacote com 8 unidades.",
    imagem: "",
    precoAntigo: "3.99",
    preco: "2.49",
 condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Fixodent Original",
    marca: "Fixodent",
    apresentacao: "21 g",
    categoria: "Higiene bucal",
    descricao: "Produto para fixação de próteses dentárias.",
    imagem: "",
    precoAntigo: "34.99",
    preco: "28.49",
 condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Dilatador Nasal Sancare Médio",
    marca: "Sancare",
    apresentacao: "Pacote com 10 unidades",
    categoria: "Cuidados pessoais",
    descricao: "Dilatador nasal tamanho médio, pacote com 10 unidades.",
    imagem: "",
    precoAntigo: "29.99",
    preco: "22.49",
condicao: "Consulte disponibilidade nas lojas."
  },

  // 5. ACESSÓRIOS DE HIGIENE BUCAL
  {
    nome: "Capa Protetora GP6 Média Transparente",
    marca: "GP6",
    apresentacao: "Tamanho 40, transparente",
    categoria: "Higiene bucal",
    descricao: "Capa protetora média, tamanho 40, transparente.",
    imagem: "",
    precoAntigo: "8.99",
    preco: "4.49",
condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Capa Protetora GP6 Dura Leitosa",
    marca: "GP6",
    apresentacao: "Tamanho 40, leitosa",
    categoria: "Higiene bucal",
    descricao: "Capa protetora dura, tamanho 40, leitosa.",
    imagem: "",
    precoAntigo: "8.99",
    preco: "4.49",
    condicao:"Consulte disponibilidade nas lojas." 
  },
  {
    nome: "Capa Protetora GP6 Média Preta",
    marca: "GP6",
    apresentacao: "Tamanho 38, preta",
    categoria: "Higiene bucal",
    descricao: "Capa protetora média, tamanho 38, preta.",
    imagem: "",
    precoAntigo: "8.99",
    preco: "4.49",
    condicao: "Consulte disponibilidade nas lojas."
  },

  // 6. DESODORANTES NUAGE
  {
    nome: "Desodorante Nuage Diva",
    marca: "Nuage",
    apresentacao: "Feminino, 48 horas, aerosol 150 mL",
    categoria: "Desodorantes",
    descricao: "Desodorante aerosol feminino, fragrância Diva.",
    imagem: "",
    precoAntigo: "11.99",
    preco: "7.49",
    condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Desodorante Nuage Infinity",
    marca: "Nuage",
    apresentacao: "Feminino, 48 horas, aerosol 150 mL",
    categoria: "Desodorantes",
    descricao: "Desodorante aerosol feminino, fragrância Infinity.",
    imagem: "",
    precoAntigo: "11.99",
    preco: "7.49",
    condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Desodorante Nuage Inspiration",
    marca: "Nuage",
    apresentacao: "Feminino, 48 horas, aerosol 150 mL",
    categoria: "Desodorantes",
    descricao: "Desodorante aerosol feminino, fragrância Inspiration.",
    imagem: "",
    precoAntigo: "11.99",
    preco: "7.49",
    condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Desodorante Nuage Sport Action Feminino",
    marca: "Nuage",
    apresentacao: "Feminino, 48 horas, aerosol 150 mL",
    categoria: "Desodorantes",
    descricao: "Desodorante aerosol feminino, fragrância Sport Action.",
    imagem: "",
    precoAntigo: "11.99",
    preco: "7.49",
    condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Desodorante Nuage Elegance",
    marca: "Nuage",
    apresentacao: "Masculino, 48 horas, aerosol 150 mL",
    categoria: "Desodorantes",
    descricao: "Desodorante aerosol masculino, fragrância Elegance.",
    imagem: "",
    precoAntigo: "11.99",
    preco: "7.49",
    condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Desodorante Nuage Sport Action Masculino",
    marca: "Nuage",
    apresentacao: "Masculino, 48 horas, aerosol 150 mL",
    categoria: "Desodorantes",
    descricao: "Desodorante aerosol masculino, fragrância Sport Action.",
    imagem: "",
    precoAntigo: "11.99",
    preco: "7.49",
    condicao: "Consulte disponibilidade nas lojas."
  },

  // 7. GIOV BABY
  {
    nome: "Desodorante Giov Baby Blue",
    marca: "Giov Baby",
    apresentacao: "0% alumínio, frasco 50 mL",
    categoria: "Desodorantes",
    descricao: "Desodorante 0% alumínio, fragrância Blue.",
    imagem: "",
    precoAntigo: "24.99",
    preco: "15.99",
    condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Desodorante Giov Baby Classic",
    marca: "Giov Baby",
    apresentacao: "0% alumínio, frasco 50 mL",
    categoria: "Desodorantes",
    descricao: "Desodorante 0% alumínio, fragrância Classic.",
    imagem: "",
    precoAntigo: "24.99",
    preco: "15.99",
    condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Desodorante Giov Baby Neutral",
    marca: "Giov Baby",
    apresentacao: "0% alumínio, frasco 50 mL",
    categoria: "Desodorantes",
    descricao: "Desodorante 0% alumínio, fragrância Neutral.",
    imagem: "",
    precoAntigo: "24.99",
    preco: "15.99",
    condicao:"Consulte disponibilidade nas lojas."
  },
  {
    nome: "Desodorante Aerosol Giov Baby Blue",
    marca: "Giov Baby",
    apresentacao: "0% alumínio, aerosol 150 mL",
    categoria: "Desodorantes",
    descricao: "Desodorante aerosol 0% alumínio, fragrância Blue.",
    imagem: "",
    precoAntigo: "25.99",
    preco: "16.99",
    condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Desodorante Aerosol Giov Baby Neutral",
    marca: "Giov Baby",
    apresentacao: "0% alumínio, aerosol 150 mL",
    categoria: "Desodorantes",
    descricao: "Desodorante aerosol 0% alumínio, fragrância Neutral.",
    imagem: "",
    precoAntigo: "25.99",
    preco: "16.99",
    condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Desodorante Creme Giov Baby Vanilla",
    marca: "Giov Baby",
    apresentacao: "60 g",
    categoria: "Desodorantes",
    descricao: "Desodorante em creme, fragrância Vanilla.",
    imagem: "",
    precoAntigo: "15.99",
    preco: "10.99",
    condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Desodorante Creme Giov Baby Blue",
    marca: "Giov Baby",
    apresentacao: "60 g",
    categoria: "Desodorantes",
    descricao: "Desodorante em creme, fragrância Blue.",
    imagem: "",
    precoAntigo: "15.99",
    preco: "10.99",
    condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Desodorante Creme Giov Baby Rosé",
    marca: "Giov Baby",
    apresentacao: "60 g",
    categoria: "Desodorantes",
    descricao: "Desodorante em creme, fragrância Rosé.",
    imagem: "",
    precoAntigo: "15.99",
    preco: "10.99",
    condicao: "Consulte disponibilidade nas lojas."
  },
  {
    nome: "Desodorante Creme Giov Baby Classic",
    marca: "Giov Baby",
    apresentacao: "60 g",
    categoria: "Desodorantes",
    descricao: "Desodorante em creme, fragrância Classic.",
    imagem: "",
    precoAntigo: "15.99",
    preco: "10.99",
    condicao: "Consulte disponibilidade nas lojas."
  },

  // 8. EQUIPAMENTOS
  {
    nome: "Inalador Inalex Mini Portátil",
    marca: "Inalex",
    apresentacao: "Aparelho portátil de inalação",
    categoria: "Equipamentos de saúde",
    descricao: "Aparelho portátil para inalação.",
    imagem: "",
    precoAntigo: "139.99",
    preco: "94.99",
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
    grade.innerHTML = produtos.map(produto => {

       const opcoesMensagem = produto.opcoes
    ? ` Opções disponíveis: ${produto.opcoes.join(", ")}.`
    : "";

const mensagem = encodeURIComponent(
    `Olá! Acessei a Novembro Black da Forte Farma e tenho interesse em ${produto.nome}, por R$ ${formatarPreco(produto.preco)}.${opcoesMensagem} Gostaria de mais informações sobre a disponibilidade.`
);

        const linkProduto = `https://wa.me/${whatsappNumero}?text=${mensagem}`;

        return `
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

                <a
                    href="${linkProduto}"
                    class="botao-whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fa-brands fa-whatsapp"></i>
                    COMPRAR PELO WHATSAPP
                </a>

            </div>
        </article>
        `;
    }).join("");
}

carregarProdutos();

document.getElementById("whatsappBtn").href = linkWhatsApp;

