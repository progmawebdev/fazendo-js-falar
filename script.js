let btn = document.querySelector(".falar")

btn.addEventListener("click", () =>{
    let texto = document.querySelector(".ipt-text").value
    let voz = new SpeechSynthesisUtterance(texto)

    //Configuração

    voz.lang = 'pt-PT'
    voz.pitch = 1
    voz.volume = 1
    voz.rate = 1

    //Método Speak()

    speechSynthesis.speak(voz)

    
})