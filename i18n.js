/* =====================================================================
   TEXTOS DO SITE (português e inglês) — edita aqui os textos
   ---------------------------------------------------------------------
   Cada texto tem a versão "pt" e a versão "en" lado a lado.
   - Podes usar estes marcadores, que são preenchidos automaticamente:
       {preco}     → preço mensal formatado (ex.: "100 €/mês" / "€100/month")
       {marca}     → nome da marca (config.js)
       {instagram} → link para o teu Instagram
       {linguas}   → línguas do acompanhamento (config.js → linguas)
       {vagasTotal}, {vagasRestantes} → vagas de fundador (config.js → vagasFundador)
       {garantiaDias} → dias da garantia (config.js → garantiaDias)
   - Os textos podem ter HTML simples (<strong>…).
   - Dados (WhatsApp, preço, descontos, línguas…) ficam em config.js.
   ===================================================================== */
window.TEXTOS = {

  /* ---------- Geral ---------- */
  // Título da aba e do Google (SEO, dono 8/11): "coach de calistenia online" + Portugal; até ~60 caracteres.
  "meta.titulo":    { pt: "Coach de calistenia online em Portugal | {marca}", en: "Online calisthenics coach | {marca}" },
  // Descrição para o Google (até ~155 caracteres).
  "meta.descricao": {
    pt: "Coach de calistenia online em Portugal: plano de treino personalizado, análise dos teus vídeos 3x por semana e contacto por WhatsApp. Calistenia e ginásio.",
    en: "Online calisthenics coach based in Portugal: a personalised training plan, your videos reviewed 3x a week and contact on WhatsApp. Calisthenics and gym."
  },
  // Pré-visualização quando o link é partilhado (WhatsApp, Instagram…).
  "meta.og.titulo": { pt: "{marca}, coaching online de calistenia e ginásio", en: "{marca}, online calisthenics and gym coaching" },
  "meta.og.descricao": {
    pt: "Plano de treino personalizado, análise dos teus movimentos por vídeo e acompanhamento por WhatsApp. Candidata-te.",
    en: "A personalised training plan, video analysis of your movements and support on WhatsApp. Apply now."
  },
  "saltar":         { pt: "Saltar para a candidatura", en: "Skip to the application" },
  "topo.cta":       { pt: "Candidata-te", en: "Apply" },
  "lingua.grupo":   { pt: "Língua do site", en: "Site language" },
  "preco.mes":      { pt: "{valor}/mês", en: "{valor}/month" },
  "e":              { pt: "e", en: "and" },
  "lingua.pt":      { pt: "Português", en: "Portuguese" },
  "lingua.en":      { pt: "Inglês", en: "English" },

  /* ---------- Hero ---------- */
  "hero.etiqueta": { pt: "Coaching individual, online, em Portugal e no resto do mundo", en: "One-to-one coaching, online, in Portugal and worldwide" },
  "hero.credenciais": {
    pt: "Técnico Especialista em Exercício Físico e Personal Trainer certificado",
    en: "Certified Exercise Specialist and Personal Trainer"
  },
  "hero.titulo": {
    pt: "Coaching online de calistenia e ginásio",
    en: "Online calisthenics and gym coaching"
  },
  "hero.texto": {
    pt: "Evolui com um plano estruturado e alguém a acompanhar cada passo. Treino feito para o teu objetivo, o teu nível e o tempo que tens, com análise dos teus movimentos por vídeo, videochamada inicial e contacto direto por WhatsApp.",
    en: "Progress with a structured plan and someone by your side at every step. Training built around your goal, your level and the time you have, with video analysis of your movements, an initial video call and direct contact on WhatsApp."
  },
  // Diferencial: revisão de vídeos 3x por semana (não nomear outros coaches).
  "hero.diferencial": {
    pt: "<strong>Revisão dos teus vídeos 3x por semana</strong> — não só o check-in semanal habitual no coaching online.",
    en: "<strong>Your training videos reviewed 3x a week</strong> — not just the usual weekly check-in of online coaching."
  },
  "hero.nota": { pt: "{preco}, sem fidelização. As vagas são limitadas.", en: "{preco} with no lock-in. Spots are limited." },

  /* ---------- Vagas de fundador (aparecem só enquanto config.js → vagasFundador.restantes > 0) ---------- */
  "fundador.texto": {
    pt: "Os primeiros {vagasTotal} clientes entram a {preco} e mantêm esse preço para sempre, mesmo que suba (enquanto continuarem clientes sem interrupção). Em troca, autorizam-me a partilhar o seu testemunho.",
    en: "The first {vagasTotal} clients join at {preco} and keep that price for good, even if it goes up (as long as they stay clients without a break). In return, they let me share their testimonial."
  },
  // Linha curta (topo e cartão do preço); as condições completas estão em fundador.texto, no cartão do preço.
  "fundador.curto": {
    pt: "<strong>Fundador:</strong> <span class=\"fundador__contador\">{vagasRestantes} de {vagasTotal}</span> vagas, preço fixo se não parares",
    en: "<strong>Founding spots:</strong> <span class=\"fundador__contador\">{vagasRestantes} of {vagasTotal}</span>, price locked while you stay"
  },

  /* ---------- Para quem é ---------- */
  "paraquem.titulo": { pt: "Para quem é e o que inclui", en: "Who it's for and what's included" },
  "paraquem.intro": {
    pt: "Para quem quer treinar com intenção — no ginásio, na barra ou nos dois — e está cansado de improvisar.",
    en: "For people who want to train with purpose — in the gym, on the bar or both — and are tired of making it up as they go."
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
    pt: "Começa pela candidatura. Se fizer sentido para os dois, o acompanhamento segue estes passos:",
    en: "It starts with your application. If we're a good fit, the coaching follows these steps:"
  },
  // Passos (pela ordem). Podes acrescentar ou remover passos — mantém o mesmo número em pt e en.
  "como.passos": {
    pt: [
      { titulo: "Análise dos teus movimentos", texto: "Mandas-me vídeos dos teus movimentos. Analiso-os e, com base nisso, definimos os primeiros objetivos e a ordem pela qual os vamos trabalhar." },
      { titulo: "Videochamada", texto: "Fazemos uma videochamada de cerca de 1 hora para te avaliar ao vivo, corrigir a técnica e praticar os movimentos em conjunto." },
      { titulo: "Plano personalizado", texto: "Em 1 a 2 dias úteis depois da chamada recebes o teu plano de treino. O mês de acompanhamento só começa a contar a partir desse momento." },
      { titulo: "Acompanhamento por WhatsApp", texto: "Durante a semana falamos por WhatsApp. Envias vídeos dos teus treinos e eu reviso-os 3 vezes por semana, com correções e ajustes ao plano." }
    ],
    en: [
      { titulo: "Movement analysis", texto: "You send me videos of your movements. I analyse them and, from there, we set your first goals and the order we'll tackle them in." },
      { titulo: "Video call", texto: "We have a video call of about 1 hour to assess you live, fix your technique and practise the movements together." },
      { titulo: "Personalised plan", texto: "You get your training plan within 1 to 2 working days after the call. Your coaching month only starts counting from that moment." },
      { titulo: "WhatsApp coaching", texto: "During the week we keep in touch on WhatsApp. You send videos of your sessions and I review them 3 times a week, with corrections and plan adjustments." }
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
  // Texto curto sobre ti (2–4 frases).
  "sobre.texto": {
    pt: "Comecei pela musculação, que me deu a base de força e de disciplina, e depois vieram as skills de calistenia. Juntar os dois mundos ensinou-me que força, técnica e paciência andam sempre juntas. Hoje uso essa experiência e a minha formação para criar planos à medida de cada pessoa e acompanhar de perto a sua evolução.",
    en: "I started with strength training in the gym, which gave me a solid base of strength and discipline, and then came calisthenics skills. Combining both worlds taught me that strength, technique and patience always go hand in hand. Today I use that experience and my qualifications to build plans tailored to each person and to follow their progress closely."
  },
  // Prova social com factos confirmados pelo dono (docs/contexto.md). Nada inventado, sem promessas.
  "sobre.factos.aria": { pt: "Factos", en: "Facts" },
  "sobre.factos": {
    pt: ["<strong>+1000 seguidores</strong> no Instagram {instagram}", "<strong>Full planche</strong> nas paralelas", "<strong>Full front lever</strong>", "<strong>Handstand</strong> livre", "Treino desde os <strong>14 anos</strong>", "<strong>3 anos</strong> dedicado às skills de calistenia", "<strong>Técnico Especialista em Exercício Físico</strong> e <strong>Personal Trainer</strong> certificado", "Treino no <strong>Algarve</strong>"],
    en: ["<strong>1000+ followers</strong> on Instagram {instagram}", "<strong>Full planche</strong> on parallettes", "<strong>Full front lever</strong>", "<strong>Freestanding handstand</strong>", "Training since I was <strong>14</strong>", "<strong>3 years</strong> focused on calisthenics skills", "<strong>Certified Exercise Specialist</strong> and <strong>Personal Trainer</strong>", "I train in the <strong>Algarve</strong>"]
  },

  /* ---------- Preço ---------- */
  "preco.etiqueta": { pt: "Acompanhamento mensal", en: "Monthly coaching" },
  "preco.periodo":  { pt: "/mês", en: "/month" },
  "preco.lista": {
    pt: ["Análise inicial dos teus movimentos por vídeo", "Videochamada de cerca de 1 hora", "Plano de treino personalizado em 1–2 dias úteis", "Ginásio, calistenia ou ambos", "Revisão dos vídeos dos teus treinos 3 vezes por semana", "Contacto próximo por WhatsApp", "Ajustes ao plano sempre que necessário", "Orientação nutricional geral"],
    en: ["Initial video analysis of your movements", "Video call of about 1 hour", "Personalised training plan within 1–2 working days", "Gym, calisthenics or both", "Reviews of your training videos 3 times a week", "Close contact on WhatsApp", "Plan adjustments whenever needed", "General nutrition guidance"]
  },
  "preco.linguas":  { pt: "Acompanhamento em {linguas}", en: "Coaching in {linguas}" },
  // Planos com desconto: os valores são calculados a partir de config.js (preco e duracoes).
  "preco.planos":   { pt: "Planos com desconto: {lista}.", en: "Discounted plans: {lista}." },
  "lista.e":        { pt: " e ", en: " and " },
  "preco.plano":    { pt: "{rotulo}: {total} no total ({d}% de desconto)", en: "{rotulo}: {total} in total ({d}% off)" },
  "preco.garantia": {
    pt: "<strong>Garantia de {garantiaDias} dias, só no plano mensal:</strong> se nos primeiros {garantiaDias} dias depois de receberes o plano não estiveres satisfeito, paras e devolvo-te o valor pago. <small>Os planos de 3 e 6 meses já têm desconto e não incluem esta garantia. Em qualquer plano tens 14 dias para desistir, pagando só o tempo já usado.</small>",
    en: "<strong>{garantiaDias}-day guarantee, monthly plan only:</strong> if you're not happy within the first {garantiaDias} days after receiving your plan, you can stop and I'll refund what you paid. <small>The 3- and 6-month plans are already discounted and don't include this guarantee. On any plan you have 14 days to cancel, paying only for the time already used.</small>"
  },
  "preco.nota": {
    pt: "Pagamento mensal, sem fidelização. O primeiro mês só começa a contar quando receberes o plano.",
    en: "Paid monthly, no lock-in. Your first month only starts counting once you receive your plan."
  },

  /* ---------- Feedbacks e FAQ ---------- */
  "feedbacks.titulo": { pt: "Feedbacks", en: "Feedback" },
  "faq.titulo": { pt: "Perguntas frequentes", en: "FAQ" },
  "faq.itens": {
    pt: [
      { p: "Preciso de equipamento? Posso treinar em casa?", r: "Não precisas de ginásio. O plano é feito com o que tens: ginásio completo, uma barra de elevações, paralelas, elásticos ou só o peso do corpo, em casa ou num parque. Para algumas skills de calistenia, uma barra ajuda bastante — se for o caso, digo-te o mínimo necessário." },
      { p: "Quanto tempo preciso por semana?", r: "Depende do objetivo, mas normalmente entre 3 e 5 sessões de 45 a 75 minutos. Mais importante do que treinar muito é treinar com consistência — o plano é ajustado à tua disponibilidade real." },
      { p: "Como envio os vídeos?", r: "Por WhatsApp, em privado. No início mandas-me vídeos dos movimentos que eu te pedir, para analisar o teu ponto de partida e definirmos os primeiros objetivos. Depois, durante o acompanhamento, filmas partes dos teus treinos e eu reviso-os 3 vezes por semana. Os vídeos servem apenas para análise e nunca são partilhados." },
      { p: "Há desconto para mais meses?", r: "Sim: os planos de 3 e 6 meses têm desconto (os valores estão na secção do preço). A duração combinamos na conversa por WhatsApp." },
      { p: "Em que língua é o acompanhamento?", r: "Em {linguas} — escolhes no formulário." },
      { p: "Tenho menos de 18 anos. Posso candidatar-me?", r: "Sim, desde que tenhas autorização dos teus pais ou do encarregado de educação. O formulário pede-te essa confirmação." },
      { p: "Posso cancelar?", r: "Sim. O pagamento é mensal e não há fidelização: se quiseres parar, basta avisar antes do mês seguinte." },
      { p: "E se não ficar satisfeito na 1.ª semana?", r: "No plano mensal tens uma garantia: se nos primeiros {garantiaDias} dias depois de receberes o plano não estiveres satisfeito, paras e devolvo-te o valor pago. Basta dizeres-me por WhatsApp. Os planos de 3 e 6 meses já têm desconto e não incluem esta garantia. Em qualquer plano tens 14 dias para desistir, pagando só o tempo já usado." },
      { p: "Há resultados garantidos?", r: "Não prometo resultados garantidos — dependem da tua consistência, do sono, da alimentação e do teu ponto de partida. O que garanto é um plano estruturado, acompanhamento próximo e ajustes sempre que necessário." }
    ],
    en: [
      { p: "Do I need equipment? Can I train at home?", r: "You don't need a gym. The plan is built around what you have: a full gym, a pull-up bar, dip bars, resistance bands or just your bodyweight, at home or in a park. For some calisthenics skills a bar helps a lot — if that's the case, I'll tell you the minimum you need." },
      { p: "How much time do I need each week?", r: "It depends on your goal, but usually 3 to 5 sessions of 45 to 75 minutes. Training consistently matters more than training a lot — the plan fits the time you really have." },
      { p: "How do I send the videos?", r: "Privately, on WhatsApp. At the start you send me videos of the movements I ask for, so I can analyse your starting point and we can set your first goals. Then, during the coaching, you film parts of your sessions and I review them 3 times a week. Videos are only used for analysis and are never shared." },
      { p: "Is there a discount for longer plans?", r: "Yes: 3- and 6-month plans are discounted (you'll find the prices in the pricing section). We agree on the duration in our WhatsApp chat." },
      { p: "What language is the coaching in?", r: "{linguas} — you choose in the form." },
      { p: "I'm under 18. Can I apply?", r: "Yes, as long as you have permission from your parents or legal guardian. The form asks you to confirm this." },
      { p: "Can I cancel?", r: "Yes. You pay monthly and there's no lock-in: if you want to stop, just let me know before the next month." },
      { p: "What if I'm not happy in the first week?", r: "The monthly plan comes with a guarantee: if you're not happy within the first {garantiaDias} days after receiving your plan, you can stop and I'll refund what you paid. Just tell me on WhatsApp. The 3- and 6-month plans are already discounted and don't include this guarantee. On any plan you have 14 days to cancel, paying only for the time already used." },
      { p: "Are results guaranteed?", r: "I don't promise guaranteed results — they depend on your consistency, sleep, nutrition and starting point. What I do guarantee is a structured plan, close support and adjustments whenever they're needed." }
    ]
  },

  /* ---------- Candidatura: textos gerais ---------- */
  "cand.titulo": { pt: "Candidatura", en: "Application" },
  "cand.intro": {
    pt: "Leva cerca de 2 minutos — o resto falamos no WhatsApp. Os campos com <span class=\"obrig\" aria-hidden=\"true\">*</span> são obrigatórios.",
    en: "It takes about 2 minutes — we'll talk about the rest on WhatsApp. Fields marked <span class=\"obrig\" aria-hidden=\"true\">*</span> are required."
  },
  "cand.privacidade": {
    pt: "As tuas respostas não são enviadas para nenhum servidor nem guardadas neste site: no fim, abre-se o WhatsApp com a mensagem pronta para enviares.",
    en: "Your answers aren't sent to any server or stored on this site: at the end, WhatsApp opens with the message ready for you to send."
  },

  /* Secções */
  "sec.a": { pt: "Sobre ti", en: "About you" },
  "sec.b": { pt: "Objetivo e treino", en: "Goal and training" },
  "sec.c": { pt: "Saúde", en: "Health" },

  /* Perguntas — "q.*" é o texto no formulário; "m.*" é o nome curto usado na mensagem do WhatsApp.
     O resto (altura e peso, profissão, tempo para treinar, motivação, duração, quando começar…) pergunta-se no WhatsApp. */
  "q.nome":        { pt: "Nome", en: "Name" },
  "m.nome":        { pt: "Nome", en: "Name" },
  "q.instagram":   { pt: "Instagram", en: "Instagram" },
  "p.instagram":   { pt: "@utilizador", en: "@username" },
  "m.instagram":   { pt: "Instagram", en: "Instagram" },
  "q.telefone":    { pt: "WhatsApp", en: "WhatsApp" },
  "m.telefone":    { pt: "WhatsApp", en: "WhatsApp" },
  "a.telefone":    { pt: "É por aqui que entro em contacto contigo.", en: "This is how I'll get in touch with you." },
  "q.idade":       { pt: "Idade", en: "Age" },
  "m.idade":       { pt: "Idade", en: "Age" },
  "a.idade":       { pt: "Se tens menos de 18 anos, precisas da autorização dos teus pais ou do encarregado de educação.", en: "If you're under 18, you need permission from your parents or legal guardian." },
  "q.autorizacao": { pt: "Tenho autorização dos meus pais/encarregado de educação para me candidatar.", en: "I have permission from my parents/legal guardian to apply." },
  "m.autorizacao": { pt: "Autorização dos pais/encarregado de educação", en: "Parent/guardian permission" },
  "q.lingua":      { pt: "Em que língua preferes o acompanhamento?", en: "Which language would you prefer for the coaching?" },
  "m.lingua":      { pt: "Língua do acompanhamento", en: "Coaching language" },
  "q.objetivo":    { pt: "Qual é o teu objetivo principal?", en: "What's your main goal?" },
  "m.objetivo":    { pt: "Objetivo principal", en: "Main goal" },
  "q.outro":       { pt: "Qual?", en: "Which one?" },
  "q.obstaculo":   { pt: "O que te está a travar mais, ou que skill queres conseguir?", en: "What's holding you back most, or which skill do you want to get?" },
  "m.obstaculo":   { pt: "Principal obstáculo / skill", en: "Main obstacle / skill" },
  "p.obstaculo":   { pt: "Ex.: estagnei nas elevações; quero o primeiro muscle-up", en: "E.g. stuck on pull-ups; I want my first muscle-up" },
  "q.nivel":       { pt: "Qual é o teu nível atual?", en: "What's your current level?" },
  "m.nivel":       { pt: "Nível atual", en: "Current level" },
  "q.equipamento": { pt: "Onde treinas e que equipamento tens?", en: "Where do you train and what equipment do you have?" },
  "m.equipamento": { pt: "Onde treina e equipamento", en: "Training location and equipment" },
  "p.equipamento": { pt: "Ex.: ginásio; em casa, barra e elásticos", en: "E.g. gym; at home, pull-up bar and bands" },
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

  /* Opções de resposta (a última opção de "op.objetivo" é sempre o "Outro", que pede "Qual?") */
  "op.objetivo": {
    pt: ["Físico / estética", "Ganhar massa muscular", "Perder gordura", "Força", "Planche", "Front lever", "Handstand", "Muscle-up", "Outro"],
    en: ["Physique / aesthetics", "Build muscle", "Lose fat", "Strength", "Planche", "Front lever", "Handstand", "Muscle-up", "Other"]
  },
  "op.nivel": {
    pt: ["Nunca treinei", "Iniciante (até 6 meses)", "Intermédio (6 meses a 2 anos)", "Avançado (mais de 2 anos)"],
    en: ["I've never trained", "Beginner (up to 6 months)", "Intermediate (6 months to 2 years)", "Advanced (more than 2 years)"]
  },
  /* Duração (planos com desconto na secção do preço; valores em config.js → duracoes) */
  "dur.mes":      { pt: "1 mês", en: "1 month" },
  "dur.meses":    { pt: "{n} meses", en: "{n} months" },

  /* Envio e confirmação */
  "form.enviar": { pt: "Enviar candidatura pelo WhatsApp", en: "Send application via WhatsApp" },
  "form.nota": {
    pt: "Ao enviar, abre-se o WhatsApp numa nova aba com as tuas respostas — só tens de carregar em enviar. Depois, analiso a tua candidatura e entro em contacto contigo por WhatsApp em 24–48 horas.",
    en: "When you submit, WhatsApp opens in a new tab with your answers — just hit send. I'll then review your application and get back to you on WhatsApp within 24–48 hours."
  },
  "conf.titulo": { pt: "Recebi a tua candidatura!", en: "I've got your application!" },
  "conf.texto": {
    pt: "Vou analisá-la e entro em contacto contigo por WhatsApp nas próximas 24–48 horas.",
    en: "I'll review it and get back to you on WhatsApp within the next 24–48 hours."
  },
  "conf.nota": {
    pt: "Se o WhatsApp não abriu, <a id=\"link-whatsapp\" href=\"#\" target=\"_blank\" rel=\"noopener\">carrega aqui para abrir a mensagem</a> e não te esqueças de a enviar.",
    en: "If WhatsApp didn't open, <a id=\"link-whatsapp\" href=\"#\" target=\"_blank\" rel=\"noopener\">tap here to open the message</a> and don't forget to send it."
  },
  "aviso.titulo": { pt: "Ainda não é possível enviar pelo WhatsApp", en: "Sending via WhatsApp isn't available yet" },
  "aviso.texto": {
    pt: "O número de WhatsApp para candidaturas ainda não está configurado. Copia as tuas respostas e envia-as por mensagem direta no Instagram para {instagram}.",
    en: "The WhatsApp number for applications hasn't been set up yet. Copy your answers and send them as a direct message on Instagram to {instagram}."
  },
  "aviso.copiar":   { pt: "Copiar respostas", en: "Copy answers" },
  "aviso.rotulo":   { pt: "As tuas respostas", en: "Your answers" },
  "copiar.ok":      { pt: "Respostas copiadas!", en: "Answers copied!" },
  "copiar.erro":    { pt: "Não foi possível copiar automaticamente — seleciona o texto abaixo e copia-o.", en: "Couldn't copy automatically — select the text below and copy it." },

  /* Erros de validação */
  "err.obrigatorio":   { pt: "Este campo é obrigatório.", en: "This field is required." },
  "err.opcao":         { pt: "Escolhe pelo menos uma opção.", en: "Please choose at least one option." },
  "err.idade":         { pt: "Introduz uma idade entre 14 e 99.", en: "Please enter an age between 14 and 99." },
  "err.telefone":      { pt: "Introduz um número de WhatsApp válido (com indicativo, se não for português).", en: "Please enter a valid WhatsApp number, including the country code." },
  "err.outro":         { pt: "Escreve qual é o outro objetivo no campo “Qual?”.", en: "Please type your other goal in the “Which one?” field." },
  "err.autorizacao":   { pt: "Para continuar, precisas da autorização dos teus pais ou do encarregado de educação.", en: "To continue, you need permission from your parents or legal guardian." },
  "err.consentimento": { pt: "Tens de dar o teu consentimento para enviar a candidatura.", en: "You need to give your consent to send the application." },
  "err.resumo1":       { pt: "Falta corrigir 1 campo.", en: "1 field needs your attention." },
  "err.resumoN":       { pt: "Falta corrigir {n} campos.", en: "{n} fields need your attention." },
  "err.resumoFim":     { pt: "Revê os campos assinalados a vermelho.", en: "Please check the fields marked in red." },

  /* ---------- Teste de nível (grátis, tudo no navegador: nada é guardado nem enviado) ----------
     teste.perguntas: as 5 primeiras dão pontos (opção 1 = 0 … opção 4 = 3); a 6.ª (objetivo) não conta.
     Níveis pela soma (0–15): 0–4 Começar, 5–8 Base, 9–12 Intermédio, 13–15 Skills.
     Menos de 5 elevações: no máximo Base. Skills só com 10+ elevações e 6+ dips. Lógica em script.js (nivelTeste). */
  "hero.teste":      { pt: "Não sabes o teu nível? Faz o teste grátis", en: "Not sure about your level? Take the free test" },
  "teste.titulo":    { pt: "Teste: qual é o teu nível de calistenia?", en: "Test: what's your calisthenics level?" },
  "teste.intro": {
    pt: "6 perguntas rápidas, cerca de 1 minuto. As respostas ficam só no teu navegador e nada é guardado nem enviado.",
    en: "6 quick questions, about 1 minute. Your answers stay in your browser and nothing is stored or sent."
  },
  "teste.comecar":   { pt: "Começar o teste", en: "Start the test" },
  "teste.progresso": { pt: "Pergunta {n} de {total}", en: "Question {n} of {total}" },
  "teste.voltar":    { pt: "Voltar", en: "Back" },
  "teste.repetir":   { pt: "Repetir o teste", en: "Take the test again" },
  "teste.resultado": { pt: "O teu nível", en: "Your level" },
  "teste.escala":    { pt: "Os 4 níveis do teste", en: "The 4 levels of the test" },
  "teste.objetivo":  { pt: "O teu objetivo é {objetivo}.", en: "Your goal is {objetivo}." },
  "teste.passo":     { pt: "O teu 1.º passo", en: "Your first step" },
  "teste.nota": {
    pt: "Este teste é só uma orientação geral e não substitui uma avaliação. Se tens dores ou lesões, fala com um profissional de saúde antes de treinar.",
    en: "This test is only general guidance and does not replace an assessment. If you have pain or injuries, talk to a health professional before training."
  },
  "teste.wa":        { pt: "Falar comigo no WhatsApp", en: "Chat with me on WhatsApp" },
  "teste.waMensagem": {
    pt: "Olá João! Fiz o teste de nível no site e o meu resultado foi {nivel}. O meu objetivo é {objetivo}.",
    en: "Hi João! I took the level test on the website and my result was {nivel}. My goal is {objetivo}."
  },
  "teste.perguntas": {
    pt: [
      { p: "Quantas elevações seguidas fazes, com boa técnica?", o: ["Nenhuma", "1 a 4", "5 a 9", "10 ou mais"] },
      { p: "E quantos dips seguidos nas paralelas?", o: ["Nenhum", "1 a 5", "6 a 14", "15 ou mais"] },
      { p: "Quantas flexões seguidas fazes?", o: ["Menos de 5", "5 a 14", "15 a 29", "30 ou mais"] },
      { p: "Como está o teu pino (handstand)?", o: ["Ainda não faço", "Na parede, até 30 segundos", "Na parede, 30 segundos ou mais", "Livre, alguns segundos"] },
      { p: "Há quanto tempo treinas com regularidade?", o: ["Ainda não treino", "Menos de 6 meses", "6 meses a 2 anos", "Mais de 2 anos"] },
      { p: "Qual é o teu objetivo principal?", o: ["Primeiras elevações e base", "Força e massa muscular", "Muscle-up ou pino livre", "Planche ou front lever"] }
    ],
    en: [
      { p: "How many pull-ups in a row can you do with good form?", o: ["None", "1 to 4", "5 to 9", "10 or more"] },
      { p: "And how many dips in a row on parallel bars?", o: ["None", "1 to 5", "6 to 14", "15 or more"] },
      { p: "How many push-ups in a row can you do?", o: ["Fewer than 5", "5 to 14", "15 to 29", "30 or more"] },
      { p: "How is your handstand?", o: ["I can't do one yet", "Against the wall, up to 30 seconds", "Against the wall, 30 seconds or more", "Freestanding, a few seconds"] },
      { p: "How long have you been training regularly?", o: ["I don't train yet", "Less than 6 months", "6 months to 2 years", "More than 2 years"] },
      { p: "What's your main goal?", o: ["First pull-ups and a solid base", "Strength and muscle", "Muscle-up or freestanding handstand", "Planche or front lever"] }
    ]
  },
  "teste.objetivos": {
    pt: ["as primeiras elevações e a base", "força e massa muscular", "o muscle-up ou o pino livre", "a planche ou o front lever"],
    en: ["your first pull-ups and a solid base", "strength and muscle", "the muscle-up or a freestanding handstand", "the planche or the front lever"]
  },
  "teste.niveis": {
    pt: [
      { nome: "Começar", texto: "Estás no início, e é o melhor momento para construir bem. Agora o mais importante é aprender a técnica base e criar o hábito de treinar.", passo: "Treina 2 a 3 vezes por semana com flexões (inclinadas, se for preciso), remadas com o peso do corpo e suspensões na barra. Só aumenta a dificuldade quando a técnica estiver limpa." },
      { nome: "Base", texto: "Já tens força para os exercícios básicos. Nesta fase conta mais a consistência e a técnica de cada repetição do que treinar até à falha.", passo: "Escolhe 3 exercícios base (elevações, dips e flexões), descansa 2 a 3 minutos entre séries e regista as repetições de cada treino para veres a tua evolução." },
      { nome: "Intermédio", texto: "Tens uma boa base de força. É uma boa altura para começar as primeiras skills com progressões, sem saltar etapas.", passo: "Escolhe uma skill de cada vez (por exemplo, o pino contra a parede ou a L-sit) e treina a progressão no início do treino, quando ainda estás fresco." },
      { nome: "Skills", texto: "Tens força e controlo para trabalhar skills avançadas. Daqui para a frente, a evolução depende de um plano bem doseado e de técnica afinada.", passo: "Filma os teus treinos de lado e compara com a técnica certa. Planeia o volume e o descanso para não sobrecarregares cotovelos, pulsos e ombros." }
    ],
    en: [
      { nome: "Getting started", texto: "You're at the start, and it's the best moment to build things properly. Right now the most important thing is to learn the basic technique and make training a habit.", passo: "Train 2 to 3 times a week with push-ups (incline ones if needed), bodyweight rows and hangs from the bar. Only make it harder once your technique is clean." },
      { nome: "Base", texto: "You already have the strength for the basic exercises. At this stage consistency and the technique of each rep matter more than training to failure.", passo: "Pick 3 basic exercises (pull-ups, dips and push-ups), rest 2 to 3 minutes between sets and write down your reps each session so you can see your progress." },
      { nome: "Intermediate", texto: "You have a good strength base. It's a good time to start your first skills with progressions, without skipping steps.", passo: "Pick one skill at a time (for example, the wall handstand or the L-sit) and train its progression at the start of your session, while you're still fresh." },
      { nome: "Skills", texto: "You have the strength and control to work on advanced skills. From here on, progress depends on a well-dosed plan and refined technique.", passo: "Film your sessions from the side and compare them with the right technique. Plan volume and rest so you don't overload your elbows, wrists and shoulders." }
    ]
  },

  /* Mensagem do WhatsApp (gerada na língua em que o site está) */
  "msg.titulo":        { pt: "Candidatura — {marca}", en: "Application — {marca}" },
  "msg.consentimento": { pt: "Consentimento para tratamento dos dados (avaliação da candidatura): Sim", en: "Consent to data processing (application review): Yes" },
  "msg.sim":           { pt: "Sim", en: "Yes" },
  "msg.origem":        { pt: "Origem", en: "Source" },

  /* Botão fixo do WhatsApp (só no telemóvel) */
  "wa.aria":     { pt: "Falar comigo no WhatsApp", en: "Chat with me on WhatsApp" },
  "wa.mensagem": { pt: "Olá João! Vi o site do {marca} e tenho uma dúvida sobre o coaching online.", en: "Hi João! I saw the {marca} website and I have a question about the online coaching." },

  /* Rodapé */
  "rodape.por": { pt: "por", en: "by" },
  "rodape.legal": { pt: "Nenhum dado do formulário é guardado neste site.", en: "No form data is stored on this site." }
};
