// Scripts principais: interações, animações simples e armazenamento local
document.addEventListener('DOMContentLoaded', () => {
  // Ano automático no rodapé
  document.getElementById('year').textContent = new Date().getFullYear();

  // Estatísticas animadas (simulação)
  animateStat('stat1', 28, '%'); // ex: 28% redução
  animateStat('stat2', 3200, 't'); // 3200 toneladas sequetradas
  animateStat('stat3', 42, '%'); // 42% economia de água

  // CTA rolagem suave
  document.getElementById('learn-more').addEventListener('click', () => {
    document.getElementById('sobre').scrollIntoView({behavior:'smooth'});
  });

  // Newsletter: salvar e confirmar const newsletterForm = document.getElementById('newsletter-form'); newsletterForm.addEventListener('submit', (e) => { e.preventDefault(); const email = document.getElementById('email').value.trim(); if(!validateEmail(email)) { showToast('Email inválido'); return; } saveSubscriber(email); showToast('Insc

  // Formulário de contato (simulação)
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('contato-email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    if(!nome || !email || !mensagem){ showToast('Preencha todos os campos'); return; }
    // Simula envio — normalmente aqui chamaria API
    console.log('Contato:', {nome,email,mensagem,quando:new Date().toISOString()});
    showToast('Mensagem enviada! Entraremos em contato.');
    contactForm.reset();
  });

  documento

  // CTAs

//

diversão

função salvarSu

l

//
// Observações rápidas:
// - Substitua imagens placeholder por imagens reais na pasta ou URLs.
// - Para funcionalidade real (envio de e-mail, API, mapa), integre endpoints no script.
// - CSS e texto foram pensados para acessibilidade básica e responsividade.
//