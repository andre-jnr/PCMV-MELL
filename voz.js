var gravando = false
var recognition = null

function verificaStatus() {
  if (gravando == true) {
    recognition.start()
  }
}

function iniciacao() {
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
  recognition = new SpeechRecognition()
  recognition.interimResults = true
  recognition.lang = 'pt-BR'

  var p = document.createElement('span')
  const fala = document.querySelector('.fala')
  fala.appendChild(p)

  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')

    p.textContent = transcript + ', '
    if (e.results[0].isFinal) {
      p = document.createElement('span')
      fala.appendChild(p)
    }
  })
  recognition.addEventListener('end', verificaStatus)
  recognition.start()
}

function checarGravacao() {
  if (gravando == true) {
    gravando = false
    recognition.stop()
    document.getElementById('btn_speech').innerHTML = 'Transcrever áudio'
  } else if (recognition) {
    gravando = true
    recognition.start()
    document.getElementById('btn_speech').innerHTML = 'Interromper'
  } else {
    console.log('iniciando...')
    gravando = true
    iniciacao()
    document.getElementById('btn_speech').innerHTML = 'Interromper'
  }
}

function rolaScroll() {
  const w = document.querySelector('.fala')
  w.scrollTop = w.scrollHeight
}

setInterval(rolaScroll, 1000)
