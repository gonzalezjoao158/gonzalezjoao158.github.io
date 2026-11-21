/* =====================================================================
   TEXTOS DO SITE (português e inglês) — edita aqui os textos
   ---------------------------------------------------------------------
   Cada texto tem a versão "pt" e a versão "en" lado a lado.
   - Podes usar estes marcadores, que são preenchidos automaticamente:
       {marca}     → nome da marca (config.js)
       {instagram} → link para o teu Instagram
       {linguas}   → línguas do acompanhamento (config.js → linguas)
   - Os textos podem ter HTML simples (<strong>…).
   - Dados (WhatsApp, línguas…) ficam em config.js. Sem preço no site (dono, 21/11).
   ===================================================================== */
window.TEXTOS = {

  /* ---------- Geral ---------- */
  // Título da aba e do Google (SEO, dono 8/11): "coach de calistenia online" + Portugal; até ~60 caracteres.
  "meta.titulo":    { pt: "Coach de calistenia online em Portugal | {marca}", en: "Online calisthenics coach | {marca}" },
  // Descrição para o Google (até ~155 caracteres): frase de oferta da bio, sem preço (dono, 21/11).
  "meta.descricao": {
    pt: "Ajudo quem treina há anos e não sai do sítio a desbloquear a planche, o front lever e o handstand sem overthinking. Coaching online de calistenia. Marca uma chamada.",
    en: "I help people who've trained for years and still feel stuck unlock the planche, front lever and handstand without overthinking. Online coaching. Book a call."
  },
  // Pré-visualização quando o link é partilhado (WhatsApp, Instagram…).
  "meta.og.titulo": { pt: "{marca}, coaching online de calistenia e ginásio", en: "{marca}, online calisthenics and gym coaching" },
  "meta.og.descricao": {
    pt: "Ajudo quem treina há anos e não sai do sítio a desbloquear a planche, o front lever e o handstand sem overthinking. Marca uma chamada.",
    en: "I help people who've trained for years and still feel stuck unlock the planche, front lever and handstand without overthinking. Book a call."
  },
  "saltar":         { pt: "Saltar para a marcação da chamada", en: "Skip to booking a call" },
  // Botão principal (dono, 21/11, método do Anton): marcar a chamada, sem preço no site.
  "topo.cta":       { pt: "Marcar chamada", en: "Book a call" },
  "lingua.grupo":   { pt: "Língua do site", en: "Site language" },
  "e":              { pt: "e", en: "and" },
  "lingua.pt":      { pt: "Português", en: "Portuguese" },
  "lingua.en":      { pt: "Inglês", en: "English" },

  /* ---------- Hero ---------- */
  "hero.etiqueta": { pt: "Coaching individual, online, em Portugal e no resto do mundo", en: "One-to-one coaching, online, in Portugal and worldwide" },
  "hero.credenciais": {
    pt: "Técnico Especialista em Exercício Físico e Personal Trainer certificado",
    en: "Certified Exercise Specialist and Personal Trainer"
  },
  // Frase de oferta da bio (dono, 21/11, docs/plano-modelo-anton.md §7.4).
  "hero.titulo": {
    pt: "Ajudo quem treina há anos e não sai do sítio a desbloquear a planche, o front lever e o handstand sem overthinking.",
    en: "I help people who've trained for years and still feel stuck unlock the planche, front lever and handstand without overthinking."
  },
  "hero.texto": {
    pt: "Reviso os teus vídeos 3 vezes por semana e ajusto o plano ao teu nível, ao teu objetivo e ao tempo que tens. Contacto direto por WhatsApp.",
    en: "I review your videos 3 times a week and adjust the plan to your level, your goal and the time you have. Direct contact on WhatsApp."
  },
  // Provas logo abaixo do título (dono, 11/11): só factos confirmados.
  "hero.provas": {
    pt: "Full planche, full front lever e handstand livre. 6 anos a treinar pessoas num ginásio.",
    en: "Full planche, full front lever and freestanding handstand. 6 years coaching people in a gym."
  },

  /* ---------- Para quem é ---------- */
  "paraquem.titulo": { pt: "Para quem é e o que inclui", en: "Who it's for and what's included" },
  "paraquem.intro": {
    pt: "Para quem quer treinar com intenção (no ginásio, na barra ou nos dois) e está cansado de improvisar.",
    en: "For people who want to train with purpose (in the gym, on the bar or both) and are tired of making it up as they go."
  },
  "paraquem.aria": { pt: "Objetivos", en: "Goals" },
  "paraquem.chips": {
    pt: ["Ganhar massa muscular", "Perder gordura", "Ganhar força", "Planche", "Front lever", "Muscle-up", "Handstand", "Primeiras elevações", "Sair da estagnação"],
    en: ["Build muscle", "Lose fat", "Get stronger", "Planche", "Front lever", "Muscle-up", "Handstand", "Your first pull-ups", "Break through a plateau"]
  },
  "paraquem.nota": {
    pt: "Do iniciante a quem já treina há anos: o plano parte do teu ponto de partida real.",
    en: "From beginners to people with years of training: the plan starts from where you really are."
  },

  /* ---------- Como funciona ---------- */
  "como.titulo": { pt: "Como funciona", en: "How it works" },
  "como.intro": {
    pt: "Começa por uma chamada. Se fizer sentido para os dois, o acompanhamento segue estes passos:",
    en: "It starts with a call. If we're a good fit, the coaching follows these steps:"
  },
  // Passos (pela ordem). Podes acrescentar ou remover passos — mantém o mesmo número em pt e en.
  "como.passos": {
    pt: [
      { titulo: "Chamada de 30 minutos", texto: "Falamos sobre onde estás, o que te tem travado e o que queres conseguir. No fim, se fizer sentido para os dois, explico como funciona o acompanhamento." },
      { titulo: "Videochamada de arranque", texto: "Depois de entrares, fazemos uma videochamada para te avaliar ao vivo, ver os teus movimentos e corrigir a técnica." },
      { titulo: "Plano personalizado", texto: "Em 1 a 2 dias úteis depois da videochamada recebes o teu plano de treino. O acompanhamento só começa a contar a partir desse momento." },
      { titulo: "Revisão 3 vezes por semana", texto: "Envias vídeos dos teus treinos por WhatsApp e eu reviso-os 3 vezes por semana, com correções e ajustes ao plano." }
    ],
    en: [
      { titulo: "30-minute call", texto: "We talk about where you are, what has been holding you back and what you want to achieve. At the end, if we're a good fit, I explain how the coaching works." },
      { titulo: "Kick-off video call", texto: "Once you're in, we have a video call to assess you live, look at your movements and fix your technique." },
      { titulo: "Personalised plan", texto: "You get your training plan within 1 to 2 working days after the video call. Your coaching only starts counting from that moment." },
      { titulo: "Reviews 3 times a week", texto: "You send videos of your sessions on WhatsApp and I review them 3 times a week, with corrections and plan adjustments." }
    ]
  },
  /* O que inclui (na mesma secção do "Para quem é") */
  "inclui.cartoes": {
    pt: [
      { titulo: "Ginásio, calistenia ou ambos", texto: "Escolhes o caminho; eu organizo o treino para que tudo encaixe no teu dia a dia." },
      { titulo: "Progressões claras", texto: "Etapas concretas até à skill ou ao objetivo físico que procuras." },
      { titulo: "Ajustes contínuos", texto: "O plano muda com o teu progresso, o teu cansaço e o teu feedback." },
      { titulo: "Alimentação, mentalidade e hábitos", texto: "Orientações gerais de alimentação (dentro das minhas qualificações) e apoio para criares rotina." }
    ],
    en: [
      { titulo: "Gym, calisthenics or both", texto: "You choose the path; I put the training together so it all fits into your week." },
      { titulo: "Clear progressions", texto: "Concrete steps towards the skill or physique goal you're after." },
      { titulo: "Ongoing adjustments", texto: "The plan changes with your progress, your fatigue and your feedback." },
      { titulo: "Nutrition, mindset and habits", texto: "General nutrition guidance (within my qualifications) and support to build a routine." }
    ]
  },

  /* ---------- Sobre mim ---------- */
  "sobre.titulo": { pt: "Sobre mim", en: "About me" },
  // A história do João em 4 frases (dono, 21/11, método do Anton). Só factos de docs/historia-joao.md:
  // sem o número de ebooks, sem o nome do atleta, nunca "ensina há 6 anos"; cerca de 2 anos sem skill e cerca de 10 coaches (21/11).
  "sobre.texto": {
    pt: "Vim do ginásio e fiz 1 ano de dips e elevações com peso. Mesmo assim, passei cerca de 2 anos sem uma única skill, a saltar de coach em coach (foram cerca de 10), a comprar ebooks atrás de ebooks e a perguntar-me se era capaz. Tudo mudou quando fiz coaching com um atleta que admiro: combos, visualização e parar de pensar para passar a fazer. Hoje faço full planche, full front lever e handstand livre, e é esse método que ensino.",
    en: "I came from the gym and did 1 year of weighted dips and pull-ups. Even so, I spent about 2 years without a single skill, jumping from coach to coach (around 10 of them), buying ebook after ebook and wondering if I was capable. Everything changed when I was coached by an athlete I admire: combos, visualisation and to stop overthinking and start doing. Today I do the full planche, full front lever and freestanding handstand, and that's the method I teach."
  },

  /* ---------- Feedbacks e FAQ ---------- */
  "feedbacks.titulo": { pt: "Feedbacks", en: "Feedback" },
  "faq.titulo": { pt: "Perguntas frequentes", en: "FAQ" },
  "faq.itens": {
    pt: [
      { p: "Preciso de equipamento? Posso treinar em casa?", r: "Não precisas de ginásio. O plano é feito com o que tens: ginásio completo, uma barra de elevações, paralelas, elásticos ou só o peso do corpo, em casa ou num parque. Para algumas skills de calistenia, uma barra ajuda bastante. Se for o caso, digo-te o mínimo necessário." },
      { p: "Quanto tempo preciso por semana?", r: "Depende do objetivo, mas normalmente entre 3 e 5 sessões de 45 a 75 minutos. Mais importante do que treinar muito é treinar com consistência. O plano é ajustado à tua disponibilidade real." },
      { p: "Como envio os vídeos?", r: "Por WhatsApp, em privado. No início mandas-me vídeos dos movimentos que eu te pedir, para analisar o teu ponto de partida e definirmos os primeiros objetivos. Depois, durante o acompanhamento, filmas partes dos teus treinos e eu reviso-os 3 vezes por semana. Os vídeos servem apenas para análise e nunca são partilhados." },
      { p: "Quanto custa?", r: "Depende do que precisas. Falamos do valor no fim da chamada." },
      { p: "Em que língua é o acompanhamento?", r: "Em {linguas}. Diz-me na chamada qual preferes." },
      { p: "Tenho menos de 18 anos. Posso marcar a chamada?", r: "Sim, desde que tenhas autorização dos teus pais ou do encarregado de educação, e a chamada é feita com um deles. O formulário pede-te essa confirmação." },
      { p: "Posso cancelar?", r: "Sim. Pagas à cabeça o período que escolheres e no fim renovas só se quiseres. Em qualquer plano tens 14 dias para desistir, pagando só o tempo já usado." },
      { p: "Há resultados garantidos?", r: "Não prometo resultados garantidos: dependem da tua consistência, do sono, da alimentação e do teu ponto de partida. O que garanto é um plano estruturado, acompanhamento próximo e ajustes sempre que necessário." }
    ],
    en: [
      { p: "Do I need equipment? Can I train at home?", r: "You don't need a gym. The plan is built around what you have: a full gym, a pull-up bar, dip bars, resistance bands or just your bodyweight, at home or in a park. For some calisthenics skills a bar helps a lot. If that's the case, I'll tell you the minimum you need." },
      { p: "How much time do I need each week?", r: "It depends on your goal, but usually 3 to 5 sessions of 45 to 75 minutes. Training consistently matters more than training a lot. The plan fits the time you really have." },
      { p: "How do I send the videos?", r: "Privately, on WhatsApp. At the start you send me videos of the movements I ask for, so I can analyse your starting point and we can set your first goals. Then, during the coaching, you film parts of your sessions and I review them 3 times a week. Videos are only used for analysis and are never shared." },
      { p: "How much does it cost?", r: "It depends on what you need. We go through the price at the end of the call." },
      { p: "What language is the coaching in?", r: "{linguas}. Tell me on the call which one you prefer." },
      { p: "I'm under 18. Can I book the call?", r: "Yes, as long as you have permission from your parents or legal guardian, and one of them joins the call. The form asks you to confirm this." },
      { p: "Can I cancel?", r: "Yes. You pay upfront for the period you choose, and at the end you only renew if you want to. On any plan you have 14 days to cancel, paying only for the time already used." },
      { p: "Are results guaranteed?", r: "I don't promise guaranteed results: they depend on your consistency, sleep, nutrition and starting point. What I do guarantee is a structured plan, close support and adjustments whenever they're needed." }
    ]
  },

  /* ---------- Candidatura: textos gerais ---------- */
  "cand.titulo": { pt: "Marcar chamada", en: "Book a call" },
  "cand.intro": {
    pt: "Leva cerca de 1 minuto. Depois combinamos o dia no WhatsApp. Os campos com <span class=\"obrig\" aria-hidden=\"true\">*</span> são obrigatórios.",
    en: "It takes about 1 minute. Then we pick the day on WhatsApp. Fields marked <span class=\"obrig\" aria-hidden=\"true\">*</span> are required."
  },
  "cand.privacidade": {
    pt: "As tuas respostas não são enviadas para nenhum servidor nem guardadas neste site: no fim, abre-se o WhatsApp com a mensagem pronta para enviares.",
    en: "Your answers aren't sent to any server or stored on this site: at the end, WhatsApp opens with the message ready for you to send."
  },

  /* Secções */
  "sec.a": { pt: "Sobre ti", en: "About you" },
  "sec.b": { pt: "Skill e treino", en: "Skill and training" },
  "sec.c": { pt: "Saúde", en: "Health" },

  /* Perguntas — "q.*" é o texto no formulário; "m.*" é o nome curto usado na mensagem do WhatsApp.
     Formulário curto do método do Anton (dono, 21/11, docs/plano-modelo-anton.md §7.3); o resto fala-se na chamada. */
  "q.nome":        { pt: "Nome", en: "Name" },
  "m.nome":        { pt: "Nome", en: "Name" },
  "q.idade":       { pt: "Idade", en: "Age" },
  "m.idade":       { pt: "Idade", en: "Age" },
  "a.idade":       { pt: "Se tens menos de 18 anos, precisas da autorização dos teus pais ou do encarregado de educação.", en: "If you're under 18, you need permission from your parents or legal guardian." },
  "q.autorizacao": { pt: "Tenho autorização dos meus pais/encarregado de educação para marcar esta chamada.", en: "I have permission from my parents/legal guardian to book this call." },
  "m.autorizacao": { pt: "Autorização dos pais/encarregado de educação", en: "Parent/guardian permission" },
  "q.profissao":   { pt: "Profissão", en: "Occupation" },
  "m.profissao":   { pt: "Profissão", en: "Occupation" },
  "q.local":       { pt: "De onde és?", en: "Where are you from?" },
  "m.local":       { pt: "De onde é", en: "From" },
  "q.obstaculo":   { pt: "Que skill queres conseguir, e onde estás nela agora?", en: "Which skill do you want to get, and where are you with it now?" },
  "m.obstaculo":   { pt: "Skill e nível atual", en: "Skill and current level" },
  "p.obstaculo":   { pt: "Ex.: quero o primeiro muscle-up; faço 8 elevações", en: "E.g. I want my first muscle-up; I can do 8 pull-ups" },
  "q.seguir":      { pt: "Há quanto tempo vês os meus vídeos?", en: "How long have you been watching my videos?" },
  "m.seguir":      { pt: "Há quanto tempo vê os vídeos", en: "How long they've watched the videos" },
  "q.agora":       { pt: "O que te fez escrever agora?", en: "What made you get in touch now?" },
  "m.agora":       { pt: "O que o fez escrever agora", en: "What made them get in touch now" },
  "q.limitacoes":  { pt: "Tens lesões, dores ou alguma limitação física?", en: "Do you have any injuries, pain or physical limitations?" },
  "m.limitacoes":  { pt: "Lesões, dores ou limitações", en: "Injuries, pain or limitations" },
  "p.limitacoes":  { pt: "Se não tiveres, escreve “Nenhuma”.", en: "If you don't have any, write “None”." },
  "a.limitacoes": {
    pt: "Pergunto por segurança, para adaptar o treino. Em caso de lesão ou problema de saúde, procura também a avaliação de um profissional de saúde.",
    en: "I ask for safety reasons, so I can adapt your training. If you have an injury or health issue, please also see a healthcare professional."
  },
  "q.consentimento": {
    pt: "Autorizo o tratamento dos dados que forneço, apenas para efeitos de avaliação desta candidatura e de contacto sobre o acompanhamento.",
    en: "I consent to the processing of the data I provide, solely to assess this application and to contact me about the coaching."
  },

  /* Opções de resposta */
  "op.seguir": {
    pt: ["Menos de 1 mês", "Alguns meses", "Mais de meio ano"],
    en: ["Less than 1 month", "A few months", "More than half a year"]
  },

  /* Envio e confirmação */
  "form.enviar": { pt: "Marcar chamada pelo WhatsApp", en: "Book the call via WhatsApp" },
  "form.nota": {
    pt: "Ao enviar, abre-se o WhatsApp numa nova aba com as tuas respostas. Só tens de carregar em enviar. Depois respondo-te por WhatsApp em 24 a 48 horas para combinarmos o dia da chamada.",
    en: "When you submit, WhatsApp opens in a new tab with your answers. Just hit send. I'll then reply on WhatsApp within 24 to 48 hours so we can pick the day of the call."
  },
  "conf.titulo": { pt: "Recebi o teu pedido!", en: "I've got your request!" },
  "conf.texto": {
    pt: "Vou ler as tuas respostas e respondo-te por WhatsApp nas próximas 24 a 48 horas para combinarmos o dia da chamada.",
    en: "I'll read your answers and reply on WhatsApp within the next 24 to 48 hours so we can pick the day of the call."
  },
  "conf.nota": {
    pt: "Se o WhatsApp não abriu, <a id=\"link-whatsapp\" href=\"#\" target=\"_blank\" rel=\"noopener\">carrega aqui para abrir a mensagem</a> e não te esqueças de a enviar.",
    en: "If WhatsApp didn't open, <a id=\"link-whatsapp\" href=\"#\" target=\"_blank\" rel=\"noopener\">tap here to open the message</a> and don't forget to send it."
  },
  "aviso.titulo": { pt: "Ainda não é possível enviar pelo WhatsApp", en: "Sending via WhatsApp isn't available yet" },
  "aviso.texto": {
    pt: "O número de WhatsApp para marcações ainda não está configurado. Copia as tuas respostas e envia-as por mensagem direta no Instagram para {instagram}.",
    en: "The WhatsApp number for bookings hasn't been set up yet. Copy your answers and send them as a direct message on Instagram to {instagram}."
  },
  "aviso.copiar":   { pt: "Copiar respostas", en: "Copy answers" },
  "aviso.rotulo":   { pt: "As tuas respostas", en: "Your answers" },
  "copiar.ok":      { pt: "Respostas copiadas!", en: "Answers copied!" },
  "copiar.erro":    { pt: "Não foi possível copiar automaticamente. Seleciona o texto abaixo e copia-o.", en: "Couldn't copy automatically. Select the text below and copy it." },

  /* Erros de validação */
  "err.obrigatorio":   { pt: "Este campo é obrigatório.", en: "This field is required." },
  "err.opcao":         { pt: "Escolhe pelo menos uma opção.", en: "Please choose at least one option." },
  "err.idade":         { pt: "Introduz uma idade entre 14 e 99.", en: "Please enter an age between 14 and 99." },
  "err.autorizacao":   { pt: "Para continuar, precisas da autorização dos teus pais ou do encarregado de educação.", en: "To continue, you need permission from your parents or legal guardian." },
  "err.consentimento": { pt: "Tens de dar o teu consentimento para marcar a chamada.", en: "You need to give your consent to book the call." },
  "err.resumo1":       { pt: "Falta corrigir 1 campo.", en: "1 field needs your attention." },
  "err.resumoN":       { pt: "Falta corrigir {n} campos.", en: "{n} fields need your attention." },
  "err.resumoFim":     { pt: "Revê os campos assinalados a vermelho.", en: "Please check the fields marked in red." },

  /* Mensagem do WhatsApp (gerada na língua em que o site está) */
  "msg.titulo":        { pt: "Marcar chamada, {marca}", en: "Book a call, {marca}" },
  "msg.consentimento": { pt: "Consentimento para tratamento dos dados (avaliação da candidatura): Sim", en: "Consent to data processing (application review): Yes" },
  "msg.sim":           { pt: "Sim", en: "Yes" },
  "msg.origem":        { pt: "Origem", en: "Source" },
  // Última linha da mensagem (dono, 21/11, §7.3).
  "msg.fim":           { pt: "Quero marcar a chamada. Que dias tens?", en: "I'd like to book the call. Which days work for you?" },

  /* Rodapé */
  "rodape.por": { pt: "por", en: "by" },
  "rodape.legal": { pt: "Nenhum dado do formulário é guardado neste site.", en: "No form data is stored on this site." }
};
