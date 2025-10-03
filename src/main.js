import './style.css'
import logoImage from './assets/Logo.jpeg'
import profileImage from './assets/FotoPerfil.jpeg'
import oabImage from './assets/fotoOAB.jpeg'

document.querySelector('#app').innerHTML = `
  <div class="page">
    <header class="hero" id="inicio">
      <nav class="navbar">
        <a class="brand" href="#inicio">
          <img src="${logoImage}" alt="Logotipo Edjair José Advocacia" class="brand-logo" />
          <div class="brand-text">
            <span class="brand-name">Edjair José</span>
            <span class="brand-subtitle">Advocacia & Consultoria</span>
          </div>
        </a>
        <div class="nav-links">
          <a href="#areas">Áreas de atuação</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
          <a class="button primary" href="https://wa.me/5581994170391" target="_blank" rel="noreferrer">Agende uma consulta</a>
        </div>
      </nav>
      <div class="hero-content">
        <div class="hero-text">
          <p class="hero-kicker">Defesa jurídica com foco em resultados</p>
          <h1>Assessoria estratégica para proteger seus direitos</h1>
          <p class="hero-description">
            Atuação personalizada em Direito Previdenciário, Trabalhista e Cível,
            oferecendo orientação clara, atendimento humano e decisões embasadas para pessoas e empresas.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="https://wa.me/5581994170391" target="_blank" rel="noreferrer">Falar via WhatsApp</a>
            <a class="button outline" href="#areas">Conheça as áreas</a>
          </div>
        </div>
        <div class="hero-profile">
          <img src="${profileImage}" alt="Advogado Edjair José sorrindo" />
        </div>
      </div>
    </header>

    <section id="areas" class="section practice-areas">
      <div class="section-header">
        <span class="section-kicker">Áreas de atuação</span>
        <h2>Experiência ampla para demandas estratégicas</h2>
        <p>Suporte completo, desde a consultoria preventiva até a condução de litígios complexos.</p>
      </div>
      <div class="area-grid">
        <article class="area-card">
          <h3>Direito Previdenciário</h3>
          <p>Planejamento e revisão de benefícios, aposentadorias especiais, pensões e ações perante o INSS.</p>
        </article>
        <article class="area-card">
          <h3>Direito Trabalhista</h3>
          <p>Defesa de trabalhadores e empregadores em ações trabalhistas, acordos e consultoria preventiva.</p>
        </article>
        <article class="area-card">
          <h3>Direito Cível e Contratos</h3>
          <p>Elaboração, análise e negociação contratual, responsabilidade civil e resolução de conflitos.</p>
        </article>
        <article class="area-card">
          <h3>Direito Empresarial</h3>
          <p>Suporte jurídico para empresas, compliance, governança e gestão de riscos legais.</p>
        </article>
      </div>
    </section>

    <section id="sobre" class="section about">
      <div class="about-content">
        <div class="about-text">
          <span class="section-kicker">Sobre Edjair José</span>
          <h2>Compromisso com ética, clareza e proximidade</h2>
          <p>
            Com sólida formação acadêmica e mais de uma década de experiência jurídica, Edjair José atua com
            proximidade, alinhando estratégia e empatia para conduzir cada caso com segurança e transparência.
          </p>
          <ul class="about-list">
            <li>Acompanhamento personalizado em todas as etapas do processo;</li>
            <li>Comunicação direta e linguagem acessível para tomada de decisões informada;</li>
            <li>Atualização constante frente às mudanças legislativas e jurisprudenciais.</li>
          </ul>
        </div>
        <div class="about-images">
          <img class="profile-photo" src="${profileImage}" alt="Retrato profissional de Edjair José" />
          <div class="credential-card">
            <img src="${oabImage}" alt="Carteira profissional OAB de Edjair José" />
            <p>OAB regularmente inscrito e em dia com as exigências da Ordem dos Advogados do Brasil.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section commitment">
      <div class="commitment-card">
        <h2>Atendimento humanizado e estratégico</h2>
        <p>
          Antes de propor qualquer ação, compreendemos o contexto do cliente, avaliamos riscos e
          construímos a melhor alternativa jurídica, priorizando soluções eficientes e econômicas.
        </p>
        <div class="pill-list">
          <span class="pill">Diagnóstico jurídico detalhado</span>
          <span class="pill">Relatórios claros e objetivos</span>
          <span class="pill">Negociação e mediação de conflitos</span>
        </div>
      </div>
    </section>

    <section id="contato" class="section contact">
      <div class="contact-card">
        <div class="contact-intro">
          <span class="section-kicker">Contato</span>
          <h2>Pronto para ouvir você</h2>
          <p>
            Entre em contato para apresentar o seu caso, tirar dúvidas e agendar uma reunião presencial ou online.
          </p>
        </div>
        <div class="contact-details">
          <div class="contact-item">
            <strong>Telefone / WhatsApp</strong>
            <a href="tel:+5581994170391">(81) 99417-0391</a>
          </div>
          <div class="contact-item">
            <strong>E-mail</strong>
            <a href="mailto:contato@edjairjose.adv.br">contato@edjairjose.adv.br</a>
          </div>
          <div class="contact-item">
            <strong>Endereço</strong>
            <p>Atendimento em Brasília e região, com opções de reuniões virtuais para clientes em todo o Brasil.</p>
          </div>
        </div>
        <a class="button primary full" href="https://wa.me/5581994170391" target="_blank" rel="noreferrer">Agendar consulta agora</a>
      </div>
    </section>

    <footer class="footer">
      <p>© ${new Date().getFullYear()} Edjair José Advocacia. Todos os direitos reservados.</p>
      <p>Este site tem caráter informativo e está em conformidade com o Código de Ética da OAB.</p>
    </footer>
  </div>
`
