$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000',{
    })

    $('#cpf').mask('000.000.000-00',{
    })

    $('#cep').mask('00000-000',{
    })

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco:{
                required: true
            },
            cidade: {
                required: true,
            },
            estado: {
                required: true
            },
            bairro: {
                required: true
            },
            cep:{
                required: true
            }
        },
        messages:{
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail',
            telefone: 'Por favor, insira seu telefone',
            cpf: 'Por favor, insira seu CPF',
            endereco: 'Por favor, insira seu endereço',
            cidade: 'Por favor, insira sua cidade',
            estado: 'Por favor, insira seu estado',
            bairro: 'Por favor, insira seu bairro',
            cep: 'Por favor, insira seu CEP',
        },
    })
})
