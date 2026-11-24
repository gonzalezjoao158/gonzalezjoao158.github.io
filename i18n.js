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
    pt: "Ajudo quem treina há anos a sair do plateau: planche, front lever e handstand. Coaching online de calistenia. Manda SKILL no Instagram.",
    en: "I help people who've trained for years break through the plateau: planche, front lever and handstand. Online coaching. DM SKILL on Instagram."
  },
  // Pré-visualização quando o link é partilhado (WhatsApp, Instagram…).
  "meta.og.titulo": { pt: "{marca}, coaching online de calistenia e ginásio", en: "{marca}, online calisthenics and gym coaching" },
  "meta.og.descricao": {
    pt: "Ajudo quem treina há anos a sair do plateau: planche, front lever e handstand. Manda SKILL no Instagram.",
    en: "I help people who've trained for years break through the plateau: planche, front lever and handstand. DM SKILL on Instagram."
  },
  "saltar":         { pt: "Saltar para a marcação da chamada", en: "Skip to booking a call" },
  // Botão principal (dono, 21/11, método do Anton): marcar a chamada, sem preço no site.
  "topo.cta":       { pt: "Marcar chamada", en: "Book a call" },
  // Botão principal (dono 24/11, estrutura do site do Anton): abre a DM do Instagram e copia a palavra SKILL.
  "skill.cta":      { pt: "Manda SKILL no Instagram", en: "DM SKILL on Instagram" },
  "skill.curto":    { pt: "Manda SKILL", en: "DM SKILL" }, // versão curta para o topo (cabe numa linha no telemóvel)
  "skill.copiado":  { pt: "SKILL copiado. Cola na mensagem e envia.", en: "SKILL copied. Paste it in the message and send." },
  "skill.ajuda":    { pt: "Respondo-te por mensagem. Se fizer sentido para os dois, marcamos uma chamada.", en: "I'll reply by message. If we're a good fit, we book a call." },
  "chamada.cta":    { pt: "Já falámos? Marca a chamada", en: "Already talked? Book the call" },
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
    pt: "Ajudo quem treina há anos a sair do plateau: planche, front lever e handstand.",
    en: "I help people who've trained for years break through the plateau: planche, front lever and handstand."
  },
  "hero.provas": {
    pt: "Full planche, full front lever e handstand livre. 6 anos a treinar pessoas num ginásio.",
    en: "Full planche, full front lever and freestanding handstand. 6 years coaching people in a gym."
  },

  /* ---------- Para quem é ---------- */
  "paraquem.titulo": { pt: "Para quem é", en: "Who it's for" },
  "paraquem.intro": {
    pt: "Para quem treina há anos e está parado (plateau) numa destas skills:",
    en: "For people who have trained for years and are stuck (plateau) on one of these skills:"
  },
  "paraquem.aria": { pt: "Skills", en: "Skills" },
  "paraquem.chips": {
    pt: ["Planche", "Front lever", "Handstand"],
    en: ["Planche", "Front lever", "Handstand"]
  },
  "paraquem.nota": {
    pt: "Se já tentaste de tudo (programas, ebooks, coaches) e continuas no mesmo sítio, eu estive aí.",
    en: "If you've already tried everything (programs, ebooks, coaches) and you're still in the same place, I've been there."
  },
  "naoepara.titulo": { pt: "Não é para ti se…", en: "It's not for you if…" },
  "naoepara.lista": {
    pt: ["Estás a começar agora.", "Queres resultados rápidos.", "Trocas de método todas as semanas e não queres parar."],
    en: ["You're just starting out.", "You want quick results.", "You switch methods every week and don't want to stop."]
  },

  /* ---------- Vídeo central (só aparece com o link em config.js) ---------- */
  "video.titulo": { pt: "Vê isto primeiro", en: "Watch this first" },

  /* ---------- O problema: 3 mitos em 1.ª pessoa (só factos de docs/historia-joao.md) ---------- */
  "problema.titulo": { pt: "O problema", en: "The problem" },
  "problema.mitos": {
    pt: [
      { titulo: "Achava que me faltava informação.", texto: "Comprava ebooks atrás de ebooks e procurava mais na internet. Afinal tinha era informação a mais." },
      { titulo: "Achava que me faltava força.", texto: "Vim do ginásio e fiz 1 ano de dips e elevações com peso. Mesmo assim, passei cerca de 2 anos sem uma skill." },
      { titulo: "Achava que o próximo método é que era.", texto: "Passei por cerca de 10 coaches à procura de um método secreto. Saltava de coach em coach." }
    ],
    en: [
      { titulo: "I thought I was missing information.", texto: "I bought ebook after ebook and kept searching online. It turned out I had too much information." },
      { titulo: "I thought I was missing strength.", texto: "I came from the gym and did 1 year of weighted dips and pull-ups. Even so, I spent about 2 years without a single skill." },
      { titulo: "I thought the next method was the one.", texto: "I went through about 10 coaches looking for a secret method. I jumped from coach to coach." }
    ]
  },
  "problema.chave": {
    pt: "Não me faltava informação. Era impaciência disfarçada de vontade de aprender.",
    en: "I wasn't missing information. It was impatience disguised as wanting to learn."
  },

  /* ---------- Sobre mim ---------- */
  "sobre.titulo": { pt: "Quem sou", en: "Who I am" },
  // A história do João em 4 frases (dono, 21/11, método do Anton). Só factos de docs/historia-joao.md:
  // sem o número de ebooks, sem o nome do atleta, nunca "ensina há 6 anos"; cerca de 2 anos sem skill e cerca de 10 coaches (21/11).
  "sobre.texto": {
    pt: "Tudo mudou quando fiz coaching com um atleta que admiro. Aprendi a treinar por combos, a treinar by feeling (a rotina adapta-se a mim, não eu à rotina) e a visualizar cada movimento. E aprendi a ter paciência. Hoje faço full planche, full front lever e handstand livre, e é esse método que ensino.",
    en: "Everything changed when I was coached by an athlete I admire. I learned to train in combos, to train by feeling (the routine adapts to me, not me to the routine) and to visualise every movement. And I learned to be patient. Today I do the full planche, full front lever and freestanding handstand, and that's the method I teach."
  },


  /* ---------- Feedbacks (escondido até haver testemunhos autorizados) ---------- */
  "feedbacks.titulo": { pt: "Feedbacks", en: "Feedback" },
  /* ---------- Candidatura: textos gerais ---------- */
  "cand.titulo": { pt: "Marcar chamada", en: "Book a call" },
  "cand.passo": {
    pt: "Este é o passo depois de falarmos por mensagem e antes da chamada.",
    en: "This is the step after we've talked by message and before the call."
  },
  // Antes estava na FAQ (saiu a 24/11): menores, saúde, 14 dias e línguas, em texto curto junto do formulário.
  "cand.regras": {
    pt: "Se tens menos de 18 anos, precisas da autorização dos teus pais ou do encarregado de educação, e a chamada é feita com um deles. Se tens uma lesão ou um problema de saúde, procura também a avaliação de um profissional de saúde. Em qualquer plano tens 14 dias para desistir, pagando só o tempo já usado. O acompanhamento é em {linguas}.",
    en: "If you're under 18, you need permission from your parents or legal guardian, and the call is done with one of them. If you have an injury or a health condition, also get it checked by a health professional. On any plan you have 14 days to cancel, paying only for the time already used. Coaching is available in {linguas}."
  },
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
  "p.obstaculo":   { pt: "Ex.: estou parado na tuck planche há meses", en: "E.g. I've been stuck on the tuck planche for months" },
  "q.tentaste":    { pt: "O que já tentaste até agora (programas, ebooks, coaches)?", en: "What have you already tried (programs, ebooks, coaches)?" },
  "m.tentaste":    { pt: "O que já tentou", en: "What they've already tried" },
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
