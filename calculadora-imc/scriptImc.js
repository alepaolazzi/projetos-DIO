// capturar evento de submit form
// queryselector- seleciona qualquer tag no documento e salva na variavel a ele atribuida.
const form = document.querySelector("#formulario");

//addEventListener -- percebe o que acontece no form e atualiza oq mudar
form.addEventListener('submit', function(e) { // o e significa evento e envia para um local
    e.preventDefault(); // faz com q fique na msm página
    const inputPeso = e.target.querySelector("#peso");
    const inputAltura = e.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        setResultado('Peso Inválido', false);
        return;
    }

    if(!altura) {
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc); 
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
})

    function getNivelImc(imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if(imc >= 39.9) return nivel[5];
        if(imc >= 34.9) return nivel[4];
        if(imc >= 29.9) return nivel[3];
        if(imc >= 24.9) return nivel[2];
        if(imc >= 18.5) return nivel[1];
        if(imc < 18.5) return nivel[0];
    }

    function getImc(peso, altura) {
        const imc = peso / (altura ** 2)
        return imc.toFixed(2)
    }

    function criaP() {
        const p = document.createElement('p'); /* cria o p */
        return p;
    }

    function setResultado(msg, isValid) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = "";
        const p = criaP();

        if(isValid) {
            p.classList.add('.paragrafo-resultado') /* adiciona uma class css ao p criado*/
        } else {
            p.classList.add(".bad");
        }

        p.innerHTML = msg;
        resultado.appendChild(p); /* faz com q o p seja filho da div com id resultado */
    }