function typeWrite(elemento) {
    const paragrafos = elemento.innerHTML.split('<br>');
    let index = 0;
    elemento.innerHTML = '';

    function addParagraph() {
        if (index < paragrafos.length) {
            const paragrafo = paragrafos[index];
            const textoArray = paragrafo.split('');
            let i = 0;

            function addLetter() {
                if (i < textoArray.length) {
                    elemento.innerHTML += textoArray[i];
                    i++;
                    setTimeout(addLetter, 75);
                } else {
                    index++;
                    if (index < paragrafos.length) {
                        elemento.innerHTML += '<br>';
                    }
                    setTimeout(addParagraph, 1000); // Intervalo de 1 segundo entre os parágrafos
                }
            }

            addLetter();
        } else {
            index = 0;
            setTimeout(typeWrite, 5000, elemento); // Reinicia a animação após 5 segundos
        }
    }

    addParagraph();
}

const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);
