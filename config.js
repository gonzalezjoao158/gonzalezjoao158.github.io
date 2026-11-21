/* =====================================================================
   CONFIGURAÇÕES DO SITE — dados que mudam com frequência
   ---------------------------------------------------------------------
   Aqui ficam os DADOS (nome, WhatsApp, línguas,
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

  // Sem preço no site (dono, 21/11, método do Anton): o valor só se diz no fim da chamada.

  // Línguas em que dás acompanhamento: "pt" (português) e/ou "en" (inglês).
  // Aparecem na FAQ "Em que língua é o acompanhamento?".
  linguas: ["pt", "en"],

  // Língua do site: o endereço manda (/ = português, /en/ = inglês). Fica "pt" só como referência.
  linguaPorOmissao: "pt",

  // Testemunhos de clientes (APENAS com autorização escrita de cada cliente).
  // Enquanto a lista estiver vazia, a secção "Feedbacks" fica escondida.
  // Exemplo de item:
  //   { nome: "Ana, 27 anos", texto: "Consegui a minha primeira elevação...", resultado: "1.ª elevação em 8 semanas" }
  feedbacks: []
};
