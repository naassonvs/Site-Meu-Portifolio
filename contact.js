document.addEventListener('DOMContentLoaded', function() {
    const contactCards = document.querySelectorAll('.contact-card');
    const subjectInput = document.getElementById('subject');
    const contactForm = document.getElementById('contactForm');
    
    // Configura os cards de contato
    contactCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove a seleção de todos os cards
            contactCards.forEach(c => c.classList.remove('selected'));
            
            // Adiciona seleção ao card clicado
            this.classList.add('selected');
            
            // Atualiza o assunto do formulário
            const contactType = this.getAttribute('data-contact-type');
            let subject = '';
            
            switch(contactType) {
                case 'job':
                    subject = 'Oportunidade de Trabalho';
                    break;
                case 'project':
                    subject = 'Orçamento de Projeto';
                    break;
                case 'chat':
                    subject = 'Conversa sobre Tecnologia';
                    break;
            }
            
            subjectInput.value = subject;
        });
    });
    
    // Validação do formulário
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!document.querySelector('.contact-card.selected')) {
            alert('Por favor, selecione um tipo de contato antes de enviar.');
            return;
        }
        
        // Aqui você pode adicionar o código para enviar o formulário
        // Por exemplo, usando Fetch API ou formspree
        
        alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
        contactForm.reset();
        contactCards.forEach(c => c.classList.remove('selected'));
    });
});