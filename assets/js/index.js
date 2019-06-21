function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
        const cep = inputCep.value;
        if (cep.length === 8) {
            const URL = `http://ws.matheuscastiglioni.com.br/ws/cep/find/${cep}/json`;
            axios.request(URL)
                .then(resposta => mostrarResposta(resposta.data))
                .catch(erro => console.error(erro));
        }
    }
}

function mostrarResposta(cep) {
    const mensagem = `
        CEP: ${cep.cep},
        Cidade ${cep.cidade},
        Estado: ${cep.estado}
    `;
    alert(mensagem);

    
}