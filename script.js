const texts = [
    "O desenvolvimento de software exige prática e dedicação para se tornar um programador experiente.",
    "A criatividade e a lógica são habilidades essenciais para resolver problemas complexos na programação.",
    "Aprender a programar abre portas para inúmeras oportunidades no mundo digital e na tecnologia."
];
let startTime, originalText;

function startTest() {
    const textDisplay = document.getElementById("text-display");
    const inputBox = document.getElementById("input-box");
    const result = document.getElementById("result");
    originalText = texts[Math.floor(Math.random() * texts.length)];
    textDisplay.innerHTML = originalText.split('').map(letter => `<span>${letter}</span>`).join('');
    inputBox.value = "";
    inputBox.disabled = false;
    inputBox.focus();
    result.textContent = "";
    startTime = new Date().getTime();
}

function checkTyping() {
    const inputBox = document.getElementById("input-box");
    const textDisplay = document.getElementById("text-display").children;
    const typedText = inputBox.value;

    for (let i = 0; i < textDisplay.length; i++) {
        if (typedText[i] === undefined) {
            textDisplay[i].classList.remove("correct", "incorrect");
        } else if (typedText[i] === originalText[i]) {
            textDisplay[i].classList.add("correct");
            textDisplay[i].classList.remove("incorrect");
        } else {
            textDisplay[i].classList.add("incorrect");
            textDisplay[i].classList.remove("correct");
        }
    }

    if (typedText === originalText) {
        finishTest();
    }
}

function finishTest() {
    const inputBox = document.getElementById("input-box");
    inputBox.disabled = true;
    
    const wordsTyped = originalText.split(" ").length;
    const timeElapsed = (new Date().getTime() - startTime) / 1000;
    const wpm = timeElapsed > 0 ? Math.round((wordsTyped / timeElapsed) * 60) : 0;
    document.getElementById("result").textContent = `Palavras por minuto: ${wpm}`;
}