$(document).ready(function() {

    // 1. Inicialização do Carrossel (Slick Carousel)
    $('#assets').slick({
        autoplay: true, // Faz o carrossel rodar sozinho
        dots: true,     // Adiciona os pontinhos de navegação
        arrows: false   // Remove as setas laterais para um visual mais limpo
    });

    // 2. Máscaras dos campos (jQuery Mask)
    // Máscara de telefone que se adapta para 8 ou 9 dígitos no celular
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });

    // 3. Validação do formulário (jQuery Validate)
    $('form').validate({
        // Regras de validação para cada campo (identificado pelo atributo 'name')
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true // Valida se o formato é de um e-mail válido
            },
            telefone: {
                required: true,
                minlength: 15 // Garante que o telefone foi preenchido por completo
            },
            cpf: {
                required: true,
                minlength: 14 // Garante que o CPF foi preenchido por completo
            },
            endereco: {
                required: true
            },
            cep: {
                required: true,
                minlength: 9 // Garante que o CEP foi preenchido por completo
            }
        },
        // Mensagens de erro personalizadas (opcional, mas recomendado)
        // O plugin já usa as mensagens do messages_pt_BR.min.js, mas podemos sobrescrever
        messages: {
            nome: "Por favor, insira o seu nome completo",
            telefone: "Por favor, insira um telefone válido",
            cpf: "Por favor, insira um CPF válido",
            cep: "Por favor, insira um CEP válido"
        },
        // Função a ser executada quando o formulário for válido e enviado
        submitHandler: function(form) {
            alert("Cadastro realizado com sucesso!");
            form.reset(); // Limpa o formulário após o envio
        },
        // Função para invalidar o envio se houver campos inválidos
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos. Por favor, corrija-os.`);
            }
        }
    });
});