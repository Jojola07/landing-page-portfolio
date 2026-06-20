function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const servico = document.getElementById('servico').value;
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome === '' || email === '' || servico === '' || mensagem === '') {
        Swal.fire({
            icon: 'error',
            title: 'Campos obrigatórios',
            text: 'Por favor, preencha todos os campos antes de agendar.',
            background: '#1a1a1a',
            color: '#f5f5f5',
            confirmButtonColor: '#c9a84c'
        });
        return;
    }


    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
        Swal.fire({
            icon: 'error',
            title: 'Email Inválido',
            text: 'Por favor, insira um email válido.',
            background: '#1a1a1a',
            color: '#f5f5f5',
            confirmButtonColor: '#c9a84c'
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Agendamento enviado!',
        text: 'Em breve entraremos em contato no seu e-mail para confirmar seu horário.',
        background: '#1a1a1a',
        color: '#f5f5f5',
        confirmButtonColor: '#c9a84c'
    });
}