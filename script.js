document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. MENU RESPONSIVO (HAMBÚRGUER)
    // ==========================================================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    };

    hamburger.addEventListener('click', toggleMenu);

    // Fecha o menu ao clicar em qualquer link (Single Page Application UX)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) toggleMenu();
        });
    });


    // ==========================================================================
    // 2. SCROLL SUAVE E ACTIVE LINK TRACKING
    // ==========================================================================
    const sections = document.querySelectorAll('section');
    const navbar = document.querySelector('.navbar');

    // Efeito Blur/Scrolled na Navbar ao rolar a página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Highlight do link ativo no menu de acordo com a seção visível
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // offset compensa a altura da navbar
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSectionId)) {
                link.classList.add('active');
            }
        });
    });


    // ==========================================================================
    // 3. ANIMAÇÃO DE CONTADOR PROGRESSIVO (INTERSECTION OBSERVER)
    // ==========================================================================
    const counters = document.querySelectorAll('.counter-number');
    const animationSpeed = 200; // Quanto menor, mais rápido o contador chega ao final

    const startCounterAnimation = (counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText;
            
            // Incremento calculado dinamicamente baseado na velocidade estipulada
            const increment = Math.ceil(target / animationSpeed);

            if (current < target) {
                counter.innerText = Math.min(current + increment, target);
                setTimeout(updateCount, 15); // Loop a cada 15ms para fluidez
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    };

    // Criação do observer para disparar os contadores apenas quando a seção estiver visível
    const impactObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Dispara a animação individual de cada elemento de contagem
                counters.forEach(counter => startCounterAnimation(counter));
                // Desativa o observer após a execução para evitar re-gatilhos involuntários
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3 // Dispara quando 30% da seção de impacto estiver em tela
    });

    const impactSection = document.getElementById('impacto');
    if(impactSection) {
        impactObserver.observe(impactSection);
    }


    // ==========================================================================
    // 4. VALIDAÇÃO E EVENTO DO FORMULÁRIO DE CONTATO
    // ==========================================================================
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento padrão da página (SPA)

        // Captura opcional dos dados enviados
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validação simples extra antes do envio
        if (name && email && message) {
            // Em ambiente real, aqui entraria um fetch para a API/Backend
            alert(`Obrigado pelo contato, ${name}! Sua mensagem foi enviada com sucesso para nossos especialistas da AgroForte.`);
            
            // Reseta todos os campos do formulário após confirmação
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
});