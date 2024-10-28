// Função para converter texto em áudio
function speakText(text) {
  // Cancela qualquer fala pendente para evitar sobreposição
  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = 'pt-BR'; // Define o idioma para português brasileiro

  // Log para verificação no console
  console.log("Falando:", text);

  window.speechSynthesis.speak(speech);
}

// Seleciona todos os elementos com a classe 'transcricao'
const elements = document.querySelectorAll('.transcricao');

// Adiciona um evento de mouseover para cada elemento
elements.forEach(element => {
  element.addEventListener('mouseover', () => {
      // Pega o texto do elemento e chama a função para ler em voz alta
      speakText(element.textContent);
  });
});
