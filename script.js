// Espera o documento HTML ser completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todos os links de navegação e todas as seções de conteúdo
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    // Adiciona um "ouvinte" de clique para cada link do menu
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Previne o comportamento padrão do link (que seria recarregar a página)
            event.preventDefault();

            // Pega o ID da seção alvo a partir do atributo 'data-target' do link clicado
            const targetId = this.getAttribute('data-target');

            // Remove a classe 'active' de todos os links para desativá-los
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            // Adiciona a classe 'active' apenas ao link que foi clicado
            this.classList.add('active');
            
            // Esconde todas as seções de conteúdo
            contentSections.forEach(section => {
                section.classList.remove('active');
            });

            // Mostra a seção de conteúdo correspondente ao link clicado
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});