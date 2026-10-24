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
   - Os textos podem ter HTML simples (<strong>, <span class="destaque">…).
   - Dados (WhatsApp, preço, descontos, línguas…) ficam em config.js.
   ===================================================================== */
window.TEXTOS = {

  /* ---------- Geral ---------- */
  "meta.titulo":    { pt: "Calistenia e Ginásio", en: "Calisthenics & Gym Coaching" },
  "meta.descricao": {
    pt: "Coaching online de calistenia e ginásio: análise dos teus movimentos por vídeo, videochamada, plano de treino personalizado e revisão dos teus treinos 3 vezes por semana.",
    en: "Online calisthenics and gym coaching: video analysis of your movements, a video call, a personalised training plan and reviews of your training videos 3 times a week."
  },
  "saltar":         { pt: "Saltar para a candidatura", en: "Skip to the application" },
  "topo.cta":       { pt: "Candidata-te", en: "Apply" },
  "lingua.grupo":   { pt: "Língua do site", en: "Site language" },
  "preco.mes":      { pt: "{valor}/mês", en: "{valor}/month" },
  "e":              { pt: "e", en: "and" },
  "lingua.pt":      { pt: "Português", en: "Portuguese" },
  "lingua.en":      { pt: "Inglês", en: "English" },

  /* ---------- Hero ---------- */
  "hero.etiqueta": { pt: "Calistenia · Ginásio · Acompanhamento individual", en: "Calisthenics · Gym · One-to-one coaching" },
  "hero.credenciais": {
    pt: "Técnico Especialista em Exercício Físico · Personal Trainer certificado",
    en: "Certified Exercise Specialist · Certified Personal Trainer"
  },
  "hero.titulo": {
    pt: "Evolui com um <span class=\"destaque\">plano estruturado</span> e alguém a acompanhar cada passo.",
    en: "Progress with a <span class=\"destaque\">structured plan</span> and someone by your side at every step."
  },
  "hero.texto": {
    pt: "Treino personalizado para o teu objetivo, o teu nível e o tempo que tens — com análise dos teus movimentos por vídeo, videochamada inicial e contacto direto por WhatsApp.",
    en: "Training built around your goal, your level and the time you actually have — with video analysis of your movements, an initial video call and direct contact on WhatsApp."
  },
  // Diferencial: revisão de vídeos 3x por semana (não nomear outros coaches).
  "hero.diferencial": {
    pt: "<strong>Revisão dos teus vídeos 3x por semana</strong> — não só o check-in semanal habitual no coaching online.",
    en: "<strong>Your training videos reviewed 3x a week</strong> — not just the usual weekly check-in of online coaching."
  },
  "hero.cta2": { pt: "Como funciona", en: "How it works" },
  "hero.nota": { pt: "Vagas limitadas · {preco} · sem fidelização", en: "Limited spots · {preco} · no lock-in" },

  /* ---------- Vagas de fundador (aparecem só enquanto config.js → vagasFundador.restantes > 0) ---------- */
  "fundador.titulo": { pt: "Vagas de fundador", en: "Founding spots" },
  "fundador.texto": {
    pt: "Os primeiros {vagasTotal} clientes entram a {preco} e, em troca, autorizam-me a partilhar o seu testemunho.",
    en: "The first {vagasTotal} clients join at {preco} and, in return, let me share their testimonial."
  },
  "fundador.contador": { pt: "{vagasRestantes} de {vagasTotal} vagas disponíveis", en: "{vagasRestantes} of {vagasTotal} spots available" },

  /* ---------- Para quem é ---------- */
  "paraquem.titulo": { pt: "Para quem é", en: "Who it's for" },
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
  "como.abordagem": {
    pt: "O acompanhamento olha para o todo: o treino, claro, mas também orientações gerais de alimentação (dentro das minhas qualificações), a mentalidade e os hábitos do dia a dia que sustentam a evolução. Não prometo resultados garantidos — garanto método, acompanhamento próximo e ajustes sempre que for preciso.",
    en: "The coaching looks at the whole picture: training, of course, but also general nutrition guidance (within my qualifications), mindset and the everyday habits that keep progress going. I don't promise guaranteed results — I promise a method, close support and adjustments whenever they're needed."
  },

  /* ---------- O que inclui ---------- */
  "inclui.titulo": { pt: "O que inclui", en: "What's included" },
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
    pt: "Treino desde os 14 anos. Comecei pela musculação, que me deu a base de força e de disciplina, e há 3 anos dedico-me também às skills de calistenia. Juntar os dois mundos ensinou-me que força, técnica e paciência andam sempre juntas. Hoje uso essa experiência e a minha formação para criar planos à medida de cada pessoa e acompanhar de perto a sua evolução.",
    en: "I've been training since I was 14. I started with strength training in the gym, which gave me a solid base of strength and discipline, and for the last 3 years I've also been focused on calisthenics skills. Combining both worlds taught me that strength, technique and patience always go hand in hand. Today I use that experience and my qualifications to build plans tailored to each person and to follow their progress closely."
  },
  "sobre.qualificacoes": {
    pt: ["Técnico Especialista em Exercício Físico", "Certificação de Personal Trainer"],
    en: ["Certified Exercise Specialist", "Personal Trainer certification"]
  },

  /* ---------- Preço ---------- */
  "preco.etiqueta": { pt: "Acompanhamento mensal", en: "Monthly coaching" },
  "preco.periodo":  { pt: "/mês", en: "/month" },
  "preco.lista": {
    pt: ["Análise inicial dos teus movimentos por vídeo", "Videochamada de cerca de 1 hora", "Plano de treino personalizado em 1–2 dias úteis", "Ginásio, calistenia ou ambos", "Revisão dos vídeos dos teus treinos 3 vezes por semana", "Contacto próximo por WhatsApp", "Ajustes ao plano sempre que necessário", "Orientação nutricional geral"],
    en: ["Initial video analysis of your movements", "Video call of about 1 hour", "Personalised training plan within 1–2 working days", "Gym, calisthenics or both", "Reviews of your training videos 3 times a week", "Close contact on WhatsApp", "Plan adjustments whenever needed", "General nutrition guidance"]
  },
  "preco.linguas":  { pt: "Acompanhamento em {linguas}", en: "Coaching in {linguas}" },
  "preco.planos":   { pt: "Planos de 3 e 6 meses com desconto — vê as opções no formulário.", en: "3- and 6-month plans come with a discount — see the options in the form." },
  "preco.garantia": {
    pt: "<strong>Garantia de {garantiaDias} dias:</strong> se nos primeiros {garantiaDias} dias depois de receberes o plano não estiveres satisfeito, paras e devolvo-te o valor pago.",
    en: "<strong>{garantiaDias}-day guarantee:</strong> if you're not happy within the first {garantiaDias} days after receiving your plan, you can stop and I'll refund what you paid."
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
      { p: "Preciso de equipamento?", r: "Não obrigatoriamente. O plano é feito com o que tens: ginásio completo, uma barra de elevações, paralelas, elásticos ou só o peso do corpo. Para algumas skills de calistenia, uma barra ajuda bastante — se for o caso, digo-te o mínimo necessário." },
      { p: "Posso treinar em casa?", r: "Sim. Muitos objetivos de calistenia e de condição física podem ser trabalhados em casa ou num parque. Indicas no formulário onde treinas e o plano adapta-se." },
      { p: "Quanto tempo preciso por semana?", r: "Depende do objetivo, mas normalmente entre 3 e 5 sessões de 45 a 75 minutos. Mais importante do que treinar muito é treinar com consistência — o plano é ajustado à tua disponibilidade real." },
      { p: "Como envio os vídeos?", r: "Por WhatsApp, em privado. No início mandas-me vídeos dos movimentos que eu te pedir, para analisar o teu ponto de partida e definirmos os primeiros objetivos. Depois, durante o acompanhamento, filmas partes dos teus treinos e eu reviso-os 3 vezes por semana. Os vídeos servem apenas para análise e nunca são partilhados." },
      { p: "Como é a videochamada?", r: "Depois de analisar os teus vídeos, marcamos uma chamada de cerca de 1 hora. Avalio as tuas capacidades ao vivo, corrijo a técnica, praticamos os movimentos e tiramos dúvidas — é daí que sai o teu plano." },
      { p: "Quando começa a contar o mês?", r: "Só a partir do momento em que recebes o teu plano de treino (1 a 2 dias úteis depois da videochamada). A análise inicial e a chamada não contam para o mês." },
      { p: "Há desconto para mais meses?", r: "Sim: os planos de 3 e 6 meses têm desconto. Os valores aparecem na pergunta sobre a duração, no formulário." },
      { p: "Em que língua é o acompanhamento?", r: "Em {linguas} — escolhes no formulário." },
      { p: "Tenho menos de 18 anos. Posso candidatar-me?", r: "Sim, desde que tenhas autorização dos teus pais ou do encarregado de educação. O formulário pede-te essa confirmação." },
      { p: "Posso cancelar?", r: "Sim. O pagamento é mensal e não há fidelização: se quiseres parar, basta avisar antes do mês seguinte." },
      { p: "E se não ficar satisfeito na 1.ª semana?", r: "Tens uma garantia: se nos primeiros {garantiaDias} dias depois de receberes o plano não estiveres satisfeito, paras e devolvo-te o valor pago. Basta dizeres-me por WhatsApp." },
      { p: "Há resultados garantidos?", r: "Não prometo resultados garantidos — dependem da tua consistência, do sono, da alimentação e do teu ponto de partida. O que garanto é um plano estruturado, acompanhamento próximo e ajustes sempre que necessário." }
    ],
    en: [
      { p: "Do I need equipment?", r: "Not necessarily. The plan is built around what you have: a full gym, a pull-up bar, dip bars, resistance bands or just your bodyweight. For some calisthenics skills a bar helps a lot — if that's the case, I'll tell you the minimum you need." },
      { p: "Can I train at home?", r: "Yes. Many calisthenics and fitness goals can be worked on at home or in a park. Tell me in the form where you train and the plan adapts to it." },
      { p: "How much time do I need each week?", r: "It depends on your goal, but usually 3 to 5 sessions of 45 to 75 minutes. Training consistently matters more than training a lot — the plan fits the time you really have." },
      { p: "How do I send the videos?", r: "Privately, on WhatsApp. At the start you send me videos of the movements I ask for, so I can analyse your starting point and we can set your first goals. Then, during the coaching, you film parts of your sessions and I review them 3 times a week. Videos are only used for analysis and are never shared." },
      { p: "What's the video call like?", r: "After analysing your videos, we book a call of about 1 hour. I assess what you can do live, fix your technique, we practise the movements and answer your questions — that's what your plan is built from." },
      { p: "When does my month start?", r: "Only once you receive your training plan (1 to 2 working days after the video call). The initial analysis and the call don't count towards the month." },
      { p: "Is there a discount for longer plans?", r: "Yes: 3- and 6-month plans are discounted. You'll see the prices in the question about duration in the form." },
      { p: "What language is the coaching in?", r: "{linguas} — you choose in the form." },
      { p: "I'm under 18. Can I apply?", r: "Yes, as long as you have permission from your parents or legal guardian. The form asks you to confirm this." },
      { p: "Can I cancel?", r: "Yes. You pay monthly and there's no lock-in: if you want to stop, just let me know before the next month." },
      { p: "What if I'm not happy in the first week?", r: "You're covered by a guarantee: if you're not happy within the first {garantiaDias} days after receiving your plan, you can stop and I'll refund what you paid. Just tell me on WhatsApp." },
      { p: "Are results guaranteed?", r: "I don't promise guaranteed results — they depend on your consistency, sleep, nutrition and starting point. What I do guarantee is a structured plan, close support and adjustments whenever they're needed." }
    ]
  },

  /* ---------- Candidatura: textos gerais ---------- */
  "cand.titulo": { pt: "Candidatura", en: "Application" },
  "cand.intro": {
    pt: "Preenche com calma e sinceridade — quanto melhor eu perceber o teu caso, melhor te posso ajudar. Os campos com <span class=\"obrig\" aria-hidden=\"true\">*</span> são obrigatórios.",
    en: "Take your time and be honest — the better I understand your situation, the better I can help. Fields marked <span class=\"obrig\" aria-hidden=\"true\">*</span> are required."
  },
  "cand.privacidade": {
    pt: "As tuas respostas não são enviadas para nenhum servidor nem guardadas neste site: no fim, abre-se o WhatsApp com a mensagem pronta para enviares.",
    en: "Your answers aren't sent to any server or stored on this site: at the end, WhatsApp opens with the message ready for you to send."
  },
  "opcional": { pt: "(opcional)", en: "(optional)" },
  "varios":   { pt: "(podes escolher vários)", en: "(choose all that apply)" },

  /* Secções */
  "sec.a": { pt: "Sobre ti", en: "About you" },
  "sec.b": { pt: "Objetivos e nível", en: "Goals and level" },
  "sec.c": { pt: "Motivação", en: "Motivation" },
  "sec.d": { pt: "Saúde e condições de treino", en: "Health and training setup" },
  "sec.e": { pt: "Investimento e disponibilidade", en: "Investment and availability" },

  /* Perguntas — "q.*" é o texto no formulário; "m.*" é o nome curto usado na mensagem do WhatsApp */
  "q.nome":        { pt: "Nome", en: "Name" },
  "m.nome":        { pt: "Nome", en: "Name" },
  "q.instagram":   { pt: "Instagram", en: "Instagram" },
  "p.instagram":   { pt: "@utilizador", en: "@username" },
  "m.instagram":   { pt: "Instagram", en: "Instagram" },
  "q.telefone":    { pt: "WhatsApp", en: "WhatsApp" },
  "m.telefone":    { pt: "WhatsApp", en: "WhatsApp" },
  "a.telefone":    { pt: "É por aqui que entro em contacto contigo.", en: "This is how I'll get in touch with you." },
  "q.email":       { pt: "Email", en: "Email" },
  "m.email":       { pt: "Email", en: "Email" },
  "q.idade":       { pt: "Idade", en: "Age" },
  "m.idade":       { pt: "Idade", en: "Age" },
  "a.idade":       { pt: "Se tens menos de 18 anos, precisas da autorização dos teus pais ou do encarregado de educação.", en: "If you're under 18, you need permission from your parents or legal guardian." },
  "q.autorizacao": { pt: "Tenho autorização dos meus pais/encarregado de educação para me candidatar.", en: "I have permission from my parents/legal guardian to apply." },
  "m.autorizacao": { pt: "Autorização dos pais/encarregado de educação", en: "Parent/guardian permission" },
  "q.alturapeso":  { pt: "Altura e peso", en: "Height and weight" },
  "m.alturapeso":  { pt: "Altura e peso", en: "Height and weight" },
  "p.alturapeso":  { pt: "Ex.: 1,78 m · 75 kg", en: "E.g. 5'10\" · 165 lb, or 1.78 m · 75 kg" },
  "q.localvive":   { pt: "Onde vives?", en: "Where do you live?" },
  "m.localvive":   { pt: "Onde vive", en: "Location" },
  "p.localvive":   { pt: "Cidade, país", en: "City, country" },
  "q.profissao":   { pt: "Profissão", en: "Occupation" },
  "m.profissao":   { pt: "Profissão", en: "Occupation" },
  "q.temposemana": { pt: "Quanto tempo tens por semana para treinar?", en: "How much time do you have to train each week?" },
  "m.temposemana": { pt: "Tempo para treinar por semana", en: "Weekly training time" },
  "p.temposemana": { pt: "Ex.: 4 dias, cerca de 1 hora por dia", en: "E.g. 4 days, about 1 hour a day" },
  "q.objetivo":    { pt: "Quais são os teus objetivos?", en: "What are your goals?" },
  "m.objetivo":    { pt: "Objetivos", en: "Goals" },
  "q.outro":       { pt: "Qual?", en: "Which one?" },
  "q.nivel":       { pt: "Como descreves o teu nível atual?", en: "How would you describe your current level?" },
  "m.nivel":       { pt: "Nível atual", en: "Current level" },
  "p.nivel": {
    pt: "Há quanto tempo treinas, o que já consegues fazer (ex.: 8 elevações, 20 s de handstand na parede), como é o teu treino hoje…",
    en: "How long you've been training, what you can already do (e.g. 8 pull-ups, a 20 s wall handstand), what your training looks like today…"
  },
  "q.qualidades":  { pt: "Diz-me as tuas 3 principais qualidades e os teus 3 principais defeitos", en: "Tell me your 3 biggest strengths and your 3 biggest weaknesses" },
  "m.qualidades":  { pt: "3 qualidades e 3 defeitos", en: "3 strengths and 3 weaknesses" },
  "p.qualidades":  { pt: "Pode ser no treino ou na vida em geral.", en: "In training or in life in general." },
  "q.motivo":      { pt: "O que te levou a querer trabalhar comigo?", en: "What made you want to work with me?" },
  "m.motivo":      { pt: "O que o levou a querer trabalhar comigo", en: "Why they want to work with me" },
  "q.motivomais":  { pt: "Conta-me mais", en: "Tell me more" },
  "m.motivomais":  { pt: "Conta-me mais", en: "Tell me more" },
  "q.limitacoes":  { pt: "Tens lesões, dores ou alguma limitação física?", en: "Do you have any injuries, pain or physical limitations?" },
  "m.limitacoes":  { pt: "Lesões, dores ou limitações", en: "Injuries, pain or limitations" },
  "p.limitacoes":  { pt: "Se não tiveres, escreve “Nenhuma”.", en: "If you don't have any, write “None”." },
  "a.limitacoes": {
    pt: "Pergunto por segurança, para adaptar o treino. Em caso de lesão ou problema de saúde, procura também a avaliação de um profissional de saúde.",
    en: "I ask for safety reasons, so I can adapt your training. If you have an injury or health issue, please also see a healthcare professional."
  },
  "q.equipamento": { pt: "Onde treinas e que equipamento tens?", en: "Where do you train and what equipment do you have?" },
  "m.equipamento": { pt: "Onde treina e equipamento", en: "Training location and equipment" },
  "p.equipamento": { pt: "Ex.: ginásio completo; em casa tenho barra de elevações e elásticos.", en: "E.g. full gym; at home I have a pull-up bar and resistance bands." },
  "e.info": {
    pt: "O acompanhamento custa <strong>{preco}</strong> e inclui a análise inicial dos teus movimentos, a videochamada, o plano personalizado, a revisão dos teus treinos 3 vezes por semana e contacto por WhatsApp. Sem fidelização.",
    en: "Coaching costs <strong>{preco}</strong> and includes the initial analysis of your movements, the video call, your personalised plan, reviews of your training 3 times a week and contact on WhatsApp. No lock-in."
  },
  "q.investimento": { pt: "Estás disponível para este investimento?", en: "Are you ready for this investment?" },
  "m.investimento": { pt: "Investimento", en: "Investment" },
  "q.duracao":      { pt: "Durante quanto tempo pensas trabalhar comigo?", en: "How long are you planning to work with me?" },
  "m.duracao":      { pt: "Duração prevista", en: "Planned duration" },
  "q.lingua":       { pt: "Em que língua preferes o acompanhamento?", en: "Which language would you prefer for the coaching?" },
  "m.lingua":       { pt: "Língua do acompanhamento", en: "Coaching language" },
  "q.inicio":       { pt: "Quando gostavas de começar?", en: "When would you like to start?" },
  "m.inicio":       { pt: "Quando quer começar", en: "Start date" },
  "q.consentimento": {
    pt: "Autorizo o tratamento dos dados que forneço, apenas para efeitos de avaliação desta candidatura e de contacto sobre o acompanhamento.",
    en: "I consent to the processing of the data I provide, solely to assess this application and to contact me about the coaching."
  },

  /* Opções de resposta (a última opção de "op.objetivo" é sempre o "Outro", que pede "Qual?") */
  "op.objetivo": {
    pt: ["Físico / estética", "Ganhar massa muscular", "Perder gordura", "Força", "Planche", "Front lever", "Handstand", "Muscle-up", "Outro"],
    en: ["Physique / aesthetics", "Build muscle", "Lose fat", "Strength", "Planche", "Front lever", "Handstand", "Muscle-up", "Other"]
  },
  "op.motivo": {
    pt: ["Estou estagnado(a)", "Os resultados estão a ser lentos", "Falta de disciplina", "Estou a regredir", "Lesões", "Outro"],
    en: ["I've hit a plateau", "My results are slow", "Lack of discipline", "I'm going backwards", "Injuries", "Other"]
  },
  "op.investimento": {
    pt: ["Sim, estou pronto(a) a investir", "Tenho dúvidas, quero falar primeiro"],
    en: ["Yes, I'm ready to invest", "I have questions, I'd like to talk first"]
  },
  "op.inicio": {
    pt: ["O quanto antes", "Nas próximas 2 semanas", "Dentro de 1 mês", "Ainda não sei"],
    en: ["As soon as possible", "Within the next 2 weeks", "Within a month", "Not sure yet"]
  },
  /* Duração (as opções e os descontos estão em config.js → duracoes) */
  "dur.mes":      { pt: "1 mês", en: "1 month" },
  "dur.meses":    { pt: "{n} meses", en: "{n} months" },
  "dur.mais":     { pt: "Mais de {n} meses", en: "More than {n} months" },
  "dur.desconto": { pt: "{d}% de desconto · {total}", en: "{d}% off · {total}" },

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
  "err.email":         { pt: "Introduz um email válido.", en: "Please enter a valid email address." },
  "err.idade":         { pt: "Introduz uma idade entre 14 e 99.", en: "Please enter an age between 14 and 99." },
  "err.telefone":      { pt: "Introduz um número de WhatsApp válido (com indicativo, se não for português).", en: "Please enter a valid WhatsApp number, including the country code." },
  "err.outro":         { pt: "Escreve qual é o outro objetivo no campo “Qual?”.", en: "Please type your other goal in the “Which one?” field." },
  "err.autorizacao":   { pt: "Para continuar, precisas da autorização dos teus pais ou do encarregado de educação.", en: "To continue, you need permission from your parents or legal guardian." },
  "err.consentimento": { pt: "Tens de dar o teu consentimento para enviar a candidatura.", en: "You need to give your consent to send the application." },
  "err.resumo1":       { pt: "Falta corrigir 1 campo.", en: "1 field needs your attention." },
  "err.resumoN":       { pt: "Falta corrigir {n} campos.", en: "{n} fields need your attention." },
  "err.resumoFim":     { pt: "Revê os campos assinalados a vermelho.", en: "Please check the fields marked in red." },

  /* Mensagem do WhatsApp (gerada na língua em que o site está) */
  "msg.titulo":        { pt: "Candidatura — {marca}", en: "Application — {marca}" },
  "msg.consentimento": { pt: "Consentimento para tratamento dos dados (avaliação da candidatura): Sim", en: "Consent to data processing (application review): Yes" },
  "msg.sim":           { pt: "Sim", en: "Yes" },

  /* Rodapé */
  "rodape.legal": { pt: "Nenhum dado do formulário é guardado neste site.", en: "No form data is stored on this site." }
};
