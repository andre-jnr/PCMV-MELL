const reconhecimento = new window.SpeechRecognition()
const textarea = document.getElementById('texto-falado')

reconhecimento.onresult = function (event) {
  const textoFalado = event.results[0][0].transcript
  textarea.value += textoFalado
}

function ativarReconhecimento() {
  reconhecimento.start()
}

const botaoMicrofone = document.getElementById('microphone-button')
botaoMicrofone.addEventListener('click', ativarReconhecimento)
