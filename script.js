/* ==========================================================
   Gonzalez Coach — lógica da página e do formulário
   - Textos: i18n.js (pt/en) · Dados: config.js
   - Nada é enviado para servidores nem guardado: as respostas
     são apenas transformadas numa mensagem de WhatsApp.
   ========================================================== */
(function () {
  "use strict";

  var LINGUAS_SITE = ["pt", "en"];
  var CHAVE_LINGUA = "gc-lingua";
  var L = "pt";
  var linguaEscolhidaNoForm = false;
  var ultimoUrl = "";

  function cfg() { return window.CONFIG || {}; }
  function textos() { return window.TEXTOS || {}; }
  function cada(sel, fn) { document.querySelectorAll(sel).forEach(fn); }

  /* ---------- Língua ---------- */
  function linguaInicial() {
    var guardada = null;
    try { guardada = window.localStorage.getItem(CHAVE_LINGUA); } catch (e) { guardada = null; }
    if (LINGUAS_SITE.indexOf(guardada) !== -1) return guardada;
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "";
    if (/^en\b/i.test(nav)) return "en";
    if (/^pt\b/i.test(nav)) return "pt";
    var omissao = cfg().linguaPorOmissao;
    return LINGUAS_SITE.indexOf(omissao) !== -1 ? omissao : "pt";
  }
  function guardarLingua(l) {
    try { window.localStorage.setItem(CHAVE_LINGUA, l); } catch (e) { /* sem armazenamento: ignora */ }
  }

  /* ---------- Formatação ---------- */
  function fmtNumero(v) {
    var n = Math.round(v * 100) / 100;
    var s = n % 1 === 0 ? String(n) : n.toFixed(2);
    return L === "pt" ? s.replace(".", ",") : s;
  }
  function fmtValor(v) {
    var moeda = cfg().moeda || "€";
    return L === "en" ? moeda + fmtNumero(v) : fmtNumero(v) + " " + moeda;
  }
  function precoBase() { var p = cfg().preco; return p != null ? +p : 100; }
  // Vagas de fundador (config.js): só números inteiros ≥ 0; restantes nunca acima do total.
  function vagas() {
    var v = cfg().vagasFundador || {};
    var total = Math.max(0, Math.floor(+v.total) || 0);
    var restantes = Math.min(total, Math.max(0, Math.floor(+v.restantes) || 0));
    return { total: total, restantes: restantes };
  }
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
  // Substitui os marcadores {preco}, {marca}, {instagram}, {linguas} (e outros passados em vars).
  function subst(v, vars) {
    var c = cfg();
    var ig = (c.instagram || "").replace(/^@/, "");
    var base = {
      marca: escapar(c.marca || ""),
      preco: t2("preco.mes", { valor: fmtValor(precoBase()) }),
      instagram: '<a href="https://instagram.com/' + encodeURIComponent(ig) + '" target="_blank" rel="noopener">@' + escapar(ig) + "</a>",
      vagasTotal: String(vagas().total),
      vagasRestantes: String(vagas().restantes),
      garantiaDias: String(c.garantiaDias != null ? +c.garantiaDias : 7)
    };
    return v.replace(/\{(\w+)\}/g, function (m, k) {
      if (vars && vars[k] != null) return vars[k];
      if (k === "linguas") return nomesLinguas(L === "pt");
      return base[k] != null ? base[k] : m;
    });
  }
  // Versão simples (sem marcadores base), para evitar recursão no {preco}.
  function t2(chave, vars) {
    return String(bruto(chave)).replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
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
    cada('[data-config="preco"]', function (el) { el.textContent = fmtNumero(precoBase()); });
    cada('[data-config="moeda"]', function (el) { el.textContent = c.moeda || "€"; });
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

    // Vagas de fundador: o destaque só aparece enquanto houver vagas livres.
    var haVagas = vagas().restantes > 0;
    cada("[data-fundador]", function (el) { el.hidden = !haVagas; });

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
  function itensDuracao() {
    var ds = Array.isArray(cfg().duracoes) ? cfg().duracoes : [];
    return ds.filter(function (d) { return d && d.meses; }).map(function (d) {
      var rotulo = d.maisDe ? t("dur.mais", { n: d.meses }) : (+d.meses === 1 ? t("dur.mes") : t("dur.meses", { n: d.meses }));
      var extra = "";
      if (!d.maisDe && +d.desconto > 0) {
        var total = precoBase() * d.meses * (1 - d.desconto / 100);
        extra = t("dur.desconto", { d: d.desconto, total: fmtValor(total) });
      }
      return { rotulo: rotulo, extra: extra };
    });
  }
  function itensOpcoes(chave) {
    if (chave === "duracao") return itensDuracao();
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
    var c = cfg();
    document.documentElement.lang = L === "en" ? "en" : "pt-PT";
    document.title = (c.marca || "Coaching") + " — " + textoSimples(t("meta.titulo"));
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
    cada("[data-i18n-cartoes]", function (g) {
      g.innerHTML = "";
      lista(g.getAttribute("data-i18n-cartoes")).forEach(function (p, i) {
        var a = document.createElement("article");
        a.className = "cartao";
        var n = document.createElement("span");
        n.className = "cartao__num";
        n.textContent = (i < 9 ? "0" : "") + (i + 1);
        var h = document.createElement("h3");
        h.textContent = p.titulo || "";
        var tx = document.createElement("p");
        tx.textContent = p.texto || "";
        a.appendChild(n);
        a.appendChild(h);
        a.appendChild(tx);
        g.appendChild(a);
      });
    });
    cada("[data-i18n-faq]", function (f) {
      var abertos = Array.prototype.map.call(f.querySelectorAll("details"), function (d) { return d.open; });
      f.innerHTML = "";
      lista(f.getAttribute("data-i18n-faq")).forEach(function (item, i) {
        var d = document.createElement("details");
        if (abertos[i]) d.open = true;
        var s = document.createElement("summary");
        s.textContent = item.p || "";
        var r = document.createElement("p");
        r.innerHTML = subst(item.r || "");
        d.appendChild(s);
        d.appendChild(r);
        f.appendChild(d);
      });
    });
    cada(".opcoes[data-opcoes]", renderOpcoes);
    cada("[data-lingua]", function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lingua") === L)); });
    var pv = document.getElementById("preco-valor");
    if (pv) pv.classList.toggle("preco__valor--moeda-antes", L === "en");

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
    return "";
  }

  function validar(form) {
    limparErros(form);
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

  /* ---------- Botão PT/EN ---------- */
  function iniciarLinguas() {
    cada("[data-lingua]", function (b) {
      b.addEventListener("click", function () {
        var nova = b.getAttribute("data-lingua");
        if (nova === L) return;
        L = nova;
        guardarLingua(L);
        aplicarLingua();
        var link = document.getElementById("link-whatsapp");
        if (link && ultimoUrl) link.href = ultimoUrl;
      });
    });
  }

  L = linguaInicial();
  aplicarDados();
  aplicarLingua();
  iniciarFormulario();
  iniciarLinguas();
})();
