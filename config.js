/* =====================================================================
   CONFIGURAÇÕES DO SITE — dados que mudam com frequência
   ---------------------------------------------------------------------
   Aqui ficam os DADOS (nome, WhatsApp, preço, descontos, línguas,
   testemunhos). Os TEXTOS do site, em português e inglês, estão em
   site/i18n.js. Guarda o ficheiro e faz commit/push: o site é
   atualizado automaticamente no GitHub Pages.
   ===================================================================== */
window.CONFIG = {
  // O teu nome, tal como queres que apareça no site (ex.: "João Gonzalez").
  nome: "João Gonzalez",

  // Nome da marca / do serviço (aparece no topo e no título da página).
  marca: "Gonzalez Coach",

  // Utilizador do Instagram, SEM o @.
  instagram: "ganzalez666",

  // Número de WhatsApp para onde vão as candidaturas.
  // Formato internacional, sem "+", sem espaços (ex.: "351912345678").
  // Enquanto estiver vazio, o formulário mostra um aviso e um botão "Copiar respostas".
  whatsapp: "351911855080",

  // Preço mensal do acompanhamento (só o número) e moeda.
  preco: 100,
  moeda: "€",

  // Vagas de fundador: os primeiros clientes entram a este preço e autorizam a partilha do testemunho.
  //   total:     número de vagas de fundador
  //   restantes: vagas ainda livres — ATUALIZA À MÃO sempre que entrar um fundador.
  // Com restantes: 0, o destaque das vagas desaparece sozinho do site.
  vagasFundador: { total: 4, restantes: 4 },

  // Garantia: dias (depois de o cliente receber o plano) em que pode parar e receber o valor pago de volta.
  // Usado nos textos através do marcador {garantiaDias}.
  garantiaDias: 7,

  // Opções da pergunta "Durante quanto tempo pensas trabalhar comigo?".
  //   meses:    duração do plano
  //   desconto: percentagem de desconto (opcional). O site calcula sozinho o total a partir do preço,
  //             ex.: 3 meses com 10% → "10% de desconto · 270 €".
  //   maisDe:   true para a opção "Mais de X meses" (sem preço calculado).
  duracoes: [
    { meses: 1 },
    { meses: 3, desconto: 10 },
    { meses: 6, desconto: 15 },
    { meses: 6, maisDe: true }
  ],

  // Línguas em que dás acompanhamento: "pt" (português) e/ou "en" (inglês).
  // Aparecem no preço, na FAQ e na pergunta "Em que língua preferes o acompanhamento?".
  linguas: ["pt", "en"],

  // Língua do site quando o visitante ainda não escolheu: "pt", ou "en" se o navegador estiver em inglês.
  linguaPorOmissao: "pt",

  // Testemunhos de clientes (APENAS com autorização escrita de cada cliente).
  // Enquanto a lista estiver vazia, a secção "Feedbacks" fica escondida.
  // Exemplo de item:
  //   { nome: "Ana, 27 anos", texto: "Consegui a minha primeira elevação...", resultado: "1.ª elevação em 8 semanas" }
  feedbacks: []
};
