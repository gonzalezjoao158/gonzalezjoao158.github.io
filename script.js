/* ==========================================================
   Gonzalez Coach — lógica da página e do formulário
   - Textos: i18n.js (pt/en) · Dados: config.js
   - Nada é enviado para servidores nem guardado: as respostas
     são apenas transformadas numa mensagem de WhatsApp.
   ========================================================== */
(function () {
  "use strict";

  var LINGUAS_SITE = ["pt", "en"];
  // A língua é a da página: / é português e /en/ é inglês (SEO, dono 8/11). Nunca muda sozinha pela língua do navegador.
  var L = /^en\b/i.test(document.documentElement.lang) ? "en" : "pt";
  var linguaEscolhidaNoForm = false;
  var ultimoUrl = "";

  /* ---------- Origem da visita (?origem=bio|story|reel|dm|outro; dm = link enviado na DM da palavra SKILL) ----------
     Só valores de uma lista fechada; qualquer outro valor conta como "outro".
     Nunca entra texto livre do URL na mensagem. Fica só em memória e no sessionStorage (sem cookies). */
  var ORIGENS = ["bio", "story", "reel", "dm", "guia", "en", "outro"];
  var CHAVE_ORIGEM = "gc-origem";
  function lerOrigem() {
    var v = null;
    try {
      var m = /[?&]origem=([^&#]*)/.exec(window.location.search || "");
      if (m) {
        var bruto = "";
        try { bruto = decodeURIComponent(m[1].replace(/\+/g, " ")); } catch (e) { bruto = ""; }
        bruto = bruto.trim().toLowerCase();
        v = ORIGENS.indexOf(bruto) !== -1 ? bruto : "outro";
      }
    } catch (e) { v = null; }
    if (v) {
      try { window.sessionStorage.setItem(CHAVE_ORIGEM, v); } catch (e) { /* sem armazenamento: fica só em memória */ }
      return v;
    }
    try { v = window.sessionStorage.getItem(CHAVE_ORIGEM); } catch (e) { v = null; }
    return ORIGENS.indexOf(v) !== -1 ? v : "";
  }
  // Na página inglesa, sem outra origem, a candidatura leva "Source: en" (não fica guardado na sessão).
  var ORIGEM = lerOrigem() || (L === "en" ? "en" : "");
  function linhaOrigem() { return ORIGEM ? textoSimples(t("msg.origem")) + ": " + ORIGEM : ""; }

  function cfg() { return window.CONFIG || {}; }
  function textos() { return window.TEXTOS || {}; }
  function cada(sel, fn) { document.querySelectorAll(sel).forEach(fn); }

  /* ---------- Línguas do acompanhamento (sem preço no site: dono, 21/11) ---------- */
  function linguasAtendimento() {
    var l = Array.isArray(cfg().linguas) ? cfg().linguas : ["pt"];
    return l.filter(function (x) { return LINGUAS_SITE.indexOf(x) !== -1; });
  }
  function nomesLinguas(minusculas) {
    var nomes = linguasAtendimento().map(function (c) {
      var n = t("lingua." + c);
      return minusculas ? n.toLowerCase() : n;
    });
    if (nomes.length < 2) return nomes.join("");
    return nomes.slice(0, -1).join(", ") + " " + t("e") + " " + nomes[nomes.length - 1];
  }
  function escapar(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }

  /* ---------- Tradução ---------- */
  function bruto(chave) {
    var e = textos()[chave];
    if (!e) return chave;
    return e[L] != null ? e[L] : e.pt;
  }
  function t(chave, vars) {
    var v = bruto(chave);
    return typeof v === "string" ? subst(v, vars) : v;
  }
  // Substitui os marcadores {marca}, {instagram}, {linguas} (e outros passados em vars).
  function subst(v, vars) {
    var c = cfg();
    var ig = (c.instagram || "").replace(/^@/, "");
    var base = {
      marca: escapar(c.marca || ""),
      instagram: '<a href="https://instagram.com/' + encodeURIComponent(ig) + '" target="_blank" rel="noopener">@' + escapar(ig) + "</a>"
    };
    return v.replace(/\{(\w+)\}/g, function (m, k) {
      if (vars && vars[k] != null) return vars[k];
      if (k === "linguas") return nomesLinguas(L === "pt");
      return base[k] != null ? base[k] : m;
    });
  }
  function textoSimples(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    return d.textContent;
  }
  function lista(chave) { var v = bruto(chave); return Array.isArray(v) ? v : []; }

  /* ---------- Conteúdo que não depende da língua ---------- */
  function aplicarDados() {
    var c = cfg();
    var ig = (c.instagram || "").replace(/^@/, "");
    if (c.marca) cada('[data-config="marca"]', function (el) { el.textContent = c.marca; });
    if (c.nome) cada('[data-config="nome"]', function (el) { el.textContent = c.nome; });
    if (ig) {
      cada('[data-config="instagram-link"]', function (el) {
        el.href = "https://instagram.com/" + encodeURIComponent(ig);
        el.textContent = el.textContent.replace(/@[\w.]+/, "@" + ig);
      });
    }
    var base = (c.nome && c.nome.charAt(0) !== "[") ? c.nome : (c.marca || "Coaching");
    var iniciais = base.split(/\s+/).filter(Boolean).slice(0, 2)
      .map(function (p) { return p.charAt(0).toUpperCase(); }).join("");
    cada('[data-config="iniciais"]', function (el) { el.textContent = iniciais || "GC"; });

    var rodapeNome = document.getElementById("rodape-nome");
    if (rodapeNome) rodapeNome.hidden = !c.nome || c.nome === c.marca;
    var ano = document.getElementById("ano");
    if (ano) ano.textContent = new Date().getFullYear();

    // Feedbacks: só mostra a secção se houver itens.
    var itens = Array.isArray(c.feedbacks) ? c.feedbacks.filter(function (f) { return f && f.texto; }) : [];
    var seccao = document.getElementById("feedbacks");
    var alvo = document.getElementById("lista-feedbacks");
    if (seccao && alvo && itens.length) {
      itens.forEach(function (f) {
        var fig = document.createElement("figure");
        fig.className = "cartao feedback";
        var bq = document.createElement("blockquote");
        bq.textContent = "“" + f.texto + "”";
        var cap = document.createElement("figcaption");
        var nome = document.createElement("strong");
        nome.textContent = f.nome || "Cliente";
        cap.appendChild(nome);
        if (f.resultado) {
          var r = document.createElement("span");
          r.className = "feedback__resultado";
          r.textContent = f.resultado;
          cap.appendChild(document.createElement("br"));
          cap.appendChild(r);
        }
        fig.appendChild(bq);
        fig.appendChild(cap);
        alvo.appendChild(fig);
      });
      seccao.hidden = false;
    }
  }

  /* ---------- Opções de resposta ---------- */
  function itensOpcoes(chave) {
    if (chave === "lingua") return linguasAtendimento().map(function (c) { return { rotulo: t("lingua." + c), codigo: c }; });
    return lista(chave).map(function (r) { return { rotulo: r }; });
  }
  function renderOpcoes(cont) {
    var chave = cont.getAttribute("data-opcoes");
    var campo = cont.closest(".campo");
    var temOutro = campo && campo.hasAttribute("data-outro");
    var marcados = Array.prototype.map.call(cont.querySelectorAll("input:checked"), function (i) { return i.getAttribute("data-indice"); });
    var itens = itensOpcoes(chave);
    cont.innerHTML = "";
    itens.forEach(function (it, i) {
      var label = document.createElement("label");
      label.className = "opcao";
      var input = document.createElement("input");
      input.type = cont.getAttribute("data-tipo") || "radio";
      input.name = cont.getAttribute("data-nome");
      input.setAttribute("value", it.extra ? it.rotulo + " (" + it.extra + ")" : it.rotulo);
      input.setAttribute("data-indice", String(i));
      if (it.codigo) input.setAttribute("data-codigo", it.codigo);
      if (temOutro && i === itens.length - 1) input.setAttribute("data-outro-opcao", "");
      if (marcados.indexOf(String(i)) !== -1) input.checked = true;
      var span = document.createElement("span");
      span.textContent = it.rotulo;
      if (it.extra) {
        var small = document.createElement("small");
        small.className = "opcao__extra";
        small.textContent = it.extra;
        span.appendChild(small);
      }
      label.appendChild(input);
      label.appendChild(span);
      cont.appendChild(label);
    });
    // A língua do acompanhamento vem pré-selecionada com a língua do site (até o visitante escolher).
    if (chave === "lingua" && !linguaEscolhidaNoForm) {
      cont.querySelectorAll("input").forEach(function (i) { i.checked = i.getAttribute("data-codigo") === L; });
    }
  }

  /* ---------- Aplicar a língua à página ---------- */
  function aplicarLingua() {
    document.documentElement.lang = L === "en" ? "en" : "pt-PT";
    document.title = textoSimples(t("meta.titulo"));
    cada("[data-i18n]", function (el) { el.innerHTML = t(el.getAttribute("data-i18n")); });
    cada("[data-i18n-content]", function (el) { el.setAttribute("content", textoSimples(t(el.getAttribute("data-i18n-content")))); });
    cada("[data-i18n-ph]", function (el) { el.setAttribute("placeholder", textoSimples(t(el.getAttribute("data-i18n-ph")))); });
    cada("[data-i18n-aria]", function (el) { el.setAttribute("aria-label", textoSimples(t(el.getAttribute("data-i18n-aria")))); });
    cada("[data-i18n-lista]", function (ul) {
      ul.innerHTML = "";
      lista(ul.getAttribute("data-i18n-lista")).forEach(function (txt) {
        var li = document.createElement("li");
        li.textContent = txt;
        ul.appendChild(li);
      });
    });
    // Listas com HTML simples (ex.: factos com o link do Instagram).
    cada("[data-i18n-html-lista]", function (ul) {
      ul.innerHTML = "";
      lista(ul.getAttribute("data-i18n-html-lista")).forEach(function (txt) {
        var li = document.createElement("li");
        li.innerHTML = subst(txt);
        ul.appendChild(li);
      });
    });
    cada("[data-i18n-passos]", function (ol) {
      ol.innerHTML = "";
      lista(ol.getAttribute("data-i18n-passos")).forEach(function (p) {
        var li = document.createElement("li");
        var h = document.createElement("h3");
        h.textContent = p.titulo || "";
        var tx = document.createElement("p");
        tx.textContent = p.texto || "";
        li.appendChild(h);
        li.appendChild(tx);
        ol.appendChild(li);
      });
    });
    cada(".opcoes[data-opcoes]", renderOpcoes);
    // PT/EN são ligações para a outra página; a língua atual fica marcada.
    cada("[data-lingua]", function (b) {
      if (b.getAttribute("data-lingua") === L) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current");
    });

    // "Qual?" visível se "Outro" estiver escolhido; erros antigos ficam noutra língua, por isso limpam-se.
    cada(".campo[data-outro]", atualizarOutro);
    var form = document.getElementById("form-candidatura");
    if (form) { limparErros(form); document.getElementById("erro-resumo").hidden = true; }
  }

  /* ---------- Leitura dos campos ---------- */
  function ativo(campo) { return !campo.closest("[hidden]"); }

  function outroEmFalta(campo) {
    var id = campo.getAttribute("data-outro");
    if (!id) return false;
    var o = campo.querySelector("input[data-outro-opcao]");
    return !!(o && o.checked && !document.getElementById(id).value.trim());
  }
  function valorCampo(campo) {
    var grupo = campo.querySelector(".opcoes");
    if (grupo) {
      var outroId = campo.getAttribute("data-outro");
      return Array.prototype.map.call(grupo.querySelectorAll("input:checked"), function (i) {
        if (outroId && i.hasAttribute("data-outro-opcao")) {
          return i.value + ": " + (document.getElementById(outroId).value.trim() || "—");
        }
        return i.value;
      }).join(", ");
    }
    var cb = campo.querySelector('input[type="checkbox"]');
    if (cb) return cb.checked ? t("msg.sim") : "";
    var el = campo.querySelector("input, select, textarea");
    return el ? el.value.trim() : "";
  }

  /* ---------- Validação ---------- */
  function limparErros(form) {
    form.querySelectorAll(".campo--erro").forEach(function (c) { c.classList.remove("campo--erro"); });
    form.querySelectorAll(".erro-msg").forEach(function (e) { e.remove(); });
    form.querySelectorAll("[aria-invalid]").forEach(function (e) { e.removeAttribute("aria-invalid"); e.removeAttribute("aria-describedby"); });
  }

  function marcarErro(campo, msg) {
    campo.classList.add("campo--erro");
    var p = document.createElement("p");
    p.className = "erro-msg";
    p.id = "erro-" + Math.random().toString(36).slice(2, 8);
    p.textContent = msg;
    campo.appendChild(p);
    var el = outroEmFalta(campo) ? document.getElementById(campo.getAttribute("data-outro")) :
             (campo.querySelector("input:not([type=radio]):not([type=checkbox]), select, textarea") || campo.querySelector("input"));
    if (el) {
      el.setAttribute("aria-invalid", "true");
      el.setAttribute("aria-describedby", p.id);
    }
  }

  function erroDe(campo) {
    var v = valorCampo(campo);
    var tipo = campo.getAttribute("data-tipo");
    if (campo.hasAttribute("data-obrigatorio") && !v) {
      var k = campo.getAttribute("data-erro");
      return k ? t(k) : (campo.querySelector(".opcoes") ? t("err.opcao") : t("err.obrigatorio"));
    }
    if (v && tipo === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return t("err.email");
    if (v && tipo === "idade" && !(/^\d+$/.test(v) && +v >= 14 && +v <= 99)) return t("err.idade");
    if (v && tipo === "telefone" && v.replace(/\D/g, "").length < 9) return t("err.telefone");
    if (outroEmFalta(campo)) return t("err.outro");
    var cond = campo.getAttribute("data-obrigatorio-se"); // "nome:indice" (ex.: trava:2 = "Outra coisa")
    if (cond && !v) {
      var partes = cond.split(":");
      var f = campo.closest("form"); var marcado = f && f.querySelector('input[name="' + partes[0] + '"]:checked');
      if (marcado && marcado.getAttribute("data-indice") === partes[1]) return t("err.obrigatorio");
    }
    return "";
  }

  function validar(form) {
    limparErros(form);
    void form.offsetWidth; // recomeça o realce dos campos com erro em cada tentativa de envio
    var n = 0;
    form.querySelectorAll(".campo").forEach(function (campo) {
      if (!ativo(campo)) return;
      var msg = erroDe(campo);
      if (msg) { marcarErro(campo, msg); n++; }
    });
    var resumo = document.getElementById("erro-resumo");
    if (n) {
      resumo.innerHTML = "";
      var s = document.createElement("strong");
      s.textContent = n === 1 ? t("err.resumo1") : t("err.resumoN", { n: n });
      resumo.appendChild(s);
      resumo.appendChild(document.createTextNode(" " + t("err.resumoFim")));
      resumo.hidden = false;
      var primeiro = form.querySelector(".campo--erro");
      var foco = primeiro && (primeiro.querySelector("[aria-invalid]") || primeiro.querySelector("input, select, textarea"));
      if (primeiro) primeiro.scrollIntoView({ behavior: "smooth", block: "center" });
      if (foco) foco.focus({ preventScroll: true });
    } else {
      resumo.hidden = true;
    }
    return n === 0;
  }

  /* ---------- Mensagem para o WhatsApp ---------- */
  function montarMensagem(form) {
    var linhas = ["*" + textoSimples(t("msg.titulo")) + "*", ""];
    form.querySelectorAll("fieldset").forEach(function (fs) {
      var letra = fs.querySelector(".legend__letra");
      var nome = fs.querySelector("legend [data-i18n]");
      linhas.push("*" + (letra ? letra.textContent + ". " : "") + (nome ? nome.textContent : "") + "*");
      fs.querySelectorAll(".campo").forEach(function (campo) {
        if (!ativo(campo)) return;
        var v = valorCampo(campo) || "—";
        var q = textoSimples(t(campo.getAttribute("data-q")));
        // Respostas longas ou com várias linhas ficam na linha seguinte, para ler melhor.
        if (campo.querySelector("textarea") && (v.indexOf("\n") !== -1 || v.length > 60)) {
          linhas.push("• " + q + ":");
          linhas.push(v);
        } else {
          linhas.push("• " + q + ": " + v);
        }
      });
      linhas.push("");
    });
    linhas.push(textoSimples(t("msg.consentimento")));
    if (ORIGEM) linhas.push(linhaOrigem());
    linhas.push("", textoSimples(t("msg.fim")));
    return linhas.join("\n");
  }

  /* ---------- Copiar ---------- */
  function copiar(texto, estado) {
    function fallback() {
      var ta = document.getElementById("texto-respostas");
      ta.focus();
      ta.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      estado.textContent = ok ? t("copiar.ok") : t("copiar.erro");
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(texto).then(function () { estado.textContent = t("copiar.ok"); }, fallback);
    } else {
      fallback();
    }
  }

  /* ---------- Botão principal: abre a DM do Instagram e copia "SKILL" (dono 24/11) ---------- */
  var PALAVRA = "SKILL";
  function copiarPalavra() {
    function antigo() {
      var ta = document.createElement("textarea");
      ta.value = PALAVRA;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      return ok;
    }
    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(PALAVRA).catch(antigo);
        return true;
      }
    } catch (e) { /* segue para o método antigo */ }
    return antigo();
  }
  var temporizadorAviso;
  function iniciarSkill() {
    var ig = (cfg().instagram || "").replace(/^@/, "");
    var aviso = document.getElementById("skill-aviso");
    cada("[data-skill]", function (a) {
      if (ig) a.href = "https://ig.me/m/" + encodeURIComponent(ig);
      a.addEventListener("click", function () {
        // Não se cancela o clique: o Instagram abre na mesma; a palavra fica copiada para colar.
        if (!copiarPalavra() || !aviso) return;
        aviso.textContent = t("skill.copiado");
        aviso.classList.add("skill-aviso--ativo");
        clearTimeout(temporizadorAviso);
        temporizadorAviso = setTimeout(function () { aviso.classList.remove("skill-aviso--ativo"); aviso.textContent = ""; }, 4000);
      });
    });
  }

  /* ---------- Vídeo central do YouTube (só com o link em config.js) ---------- */
  function iniciarVideo() {
    var url = String(cfg().videoCentral || "").trim();
    var m = /(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/|\/live\/)([\w-]{11})/.exec(url);
    var seccao = document.getElementById("video");
    var alvo = document.getElementById("video-central");
    if (!m || !seccao || !alvo) return;
    var f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + m[1];
    f.title = textoSimples(t("video.titulo"));
    f.loading = "lazy";
    f.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen";
    f.setAttribute("allowfullscreen", "");
    f.referrerPolicy = "strict-origin-when-cross-origin";
    alvo.appendChild(f);
    seccao.hidden = false;
  }

  /* ---------- "Outro" e autorização parental ---------- */
  function atualizarOutro(campo) {
    var o = campo.querySelector("input[data-outro-opcao]");
    var input = document.getElementById(campo.getAttribute("data-outro"));
    var wrap = input && input.closest(".campo__extra");
    if (wrap) wrap.hidden = !(o && o.checked);
  }
  function atualizarAutorizacao() {
    var idade = document.getElementById("idade");
    var wrap = document.getElementById("autorizacao-wrap");
    if (!idade || !wrap) return;
    var v = idade.value.trim();
    wrap.hidden = !(/^\d+$/.test(v) && +v > 0 && +v < 18);
  }

  /* ---------- Formulário ---------- */
  function iniciarFormulario() {
    var form = document.getElementById("form-candidatura");
    if (!form) return;
    var confirmacao = document.getElementById("confirmacao");
    var aviso = document.getElementById("aviso-sem-whatsapp");
    var textoRespostas = document.getElementById("texto-respostas");
    var estado = document.getElementById("estado-copiar");

    form.addEventListener("change", function (e) {
      var alvo = e.target;
      if (alvo.name === "lingua") linguaEscolhidaNoForm = true;
      var campo = alvo.closest(".campo");
      if (campo && campo.hasAttribute("data-outro") && alvo.matches(".opcoes input")) {
        atualizarOutro(campo);
        if (alvo.hasAttribute("data-outro-opcao") && alvo.checked) document.getElementById(campo.getAttribute("data-outro")).focus();
      }
      limparErroDe(e);
    });
    form.addEventListener("input", limparErroDe);

    // Tecla "Seguinte"/Enter do teclado do telemóvel: passa ao campo seguinte em vez de enviar a meio.
    form.addEventListener("keydown", function (e) {
      var el = e.target;
      if (e.key !== "Enter" || e.isComposing || !el.matches("input[type=text], input[type=tel], input[type=email]")) return;
      e.preventDefault();
      var campos = Array.prototype.filter.call(form.querySelectorAll("input:not([type=hidden]), textarea, select, button[type=submit]"), function (c) {
        return !c.disabled && !c.closest("[hidden]");
      });
      var seguinte = campos[campos.indexOf(el) + 1];
      if (seguinte) seguinte.focus();
    });
    var idade = document.getElementById("idade");
    idade.addEventListener("input", atualizarAutorizacao);
    idade.addEventListener("change", atualizarAutorizacao);
    atualizarAutorizacao();

    // Remover o erro de um campo assim que for corrigido.
    function limparErroDe(e) {
      var campo = e.target.closest(".campo");
      if (campo && campo.classList.contains("campo--erro") && !erroDe(campo)) {
        campo.classList.remove("campo--erro");
        var m = campo.querySelector(".erro-msg");
        if (m) m.remove();
        campo.querySelectorAll("[aria-invalid]").forEach(function (el) { el.removeAttribute("aria-invalid"); el.removeAttribute("aria-describedby"); });
      }
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      confirmacao.hidden = true;
      aviso.hidden = true;
      if (!validar(form)) return;

      var mensagem = montarMensagem(form);
      var numero = String(cfg().whatsapp || "").replace(/\D/g, "");

      if (!numero) {
        textoRespostas.value = mensagem;
        estado.textContent = "";
        aviso.hidden = false;
        aviso.focus({ preventScroll: true });
        aviso.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);
      ultimoUrl = url;
      document.getElementById("link-whatsapp").href = url;
      window.open(url, "_blank", "noopener");
      form.hidden = true;
      confirmacao.hidden = false;
      confirmacao.focus({ preventScroll: true });
      confirmacao.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    document.getElementById("botao-copiar").addEventListener("click", function () {
      copiar(textoRespostas.value, estado);
    });
  }

  aplicarDados();
  aplicarLingua();
  iniciarSkill();
  iniciarVideo();
  iniciarFormulario();
})();
