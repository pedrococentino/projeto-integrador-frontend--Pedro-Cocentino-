const formulario = document.getElementById('form-planeta');
const campoData = document.getElementById('data-jogatina');
const aviso = document.getElementById('aviso-form');

// A data máxima é sempre o dia de hoje, então não precisa atualizar na mão.
const hoje = new Date();
const mes = String(hoje.getMonth() + 1).padStart(2, '0');
const dia = String(hoje.getDate()).padStart(2, '0');
campoData.max = `${hoje.getFullYear()}-${mes}-${dia}`;

// O navegador só dispara o "submit" se todas as validações passarem.
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const explorador = document.getElementById('nome-explorador').value.trim();
    const planeta = document.getElementById('nome-planeta').value.trim();

    aviso.textContent = `Planeta ${planeta} registrado, ${explorador}! Boa viagem pelo sistema solar.`;
    formulario.reset();
});