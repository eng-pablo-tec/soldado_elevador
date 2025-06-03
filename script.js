document.querySelector('#btn_opcoes').addEventListener('click', function() {

  let audio = new Audio('assets/sound1.mp3');
  audio.play();

  let tela1 = document.querySelector('.tela1');
  tela1.style.display = 'none';

  let tela_opcoes = document.querySelector('.opcoes');
  tela_opcoes.style.display = 'inline-block';
});

document.querySelector('#btn_novo').addEventListener('click', function() {

  let audio = new Audio('assets/sound1.mp3');
  audio.play();

  let tela1 = document.querySelector('.tela1');
  tela1.style.display = 'none';

  let tela_opcoes = document.querySelector('.tela2');
  tela_opcoes.style.display = 'inline-block';
});

let isAbaixado = false;  // Variável para verificar se o personagem está abaixado

document.addEventListener('keydown', function(event) {
  let personagem = document.querySelector('.personagem img');

  // Verifica se o personagem está abaixado (pressionando "S")
  if (event.key === 's' || event.key === 'S') {
    isAbaixado = true;  // Marca que o personagem está abaixado
    personagem.src = './assets/0-soldado1.png';  // Muda a imagem para abaixado
    personagem.style.height = '60%';
    personagem.style.width = '60%';
    personagem.style.position = 'relative';
    personagem.style.left = personagem.style.left || '25px';  // Mantém a posição 'left' atual
  }

  // Quando pressionado "W", o personagem volta para a posição de "em pé"
  if (event.key === 'w' || event.key === 'W') {
    isAbaixado = false;  // Marca que o personagem não está mais abaixado
    personagem.src = './assets/0-soldado2.png';  // Muda a imagem para em pé
    personagem.style.height = '100%';
    personagem.style.width = '100%';
    personagem.style.position = 'relative';
    personagem.style.top = personagem.style.top || '0';  // Mantém a posição 'top' atual
    personagem.style.left = personagem.style.left || '25px';  // Mantém a posição 'left' atual
  }

  // Impede o movimento quando o personagem estiver abaixado
  if (isAbaixado) return;

  // Movimento para a direita com a tecla 'D'
  if (event.key === 'd' || event.key === 'D') {
    let currentLeft = parseInt(personagem.style.left) || 0; // Pega a posição atual ou 0 se não houver valor
    personagem.style.left = (currentLeft + 10) + 'px';  // Move 10px para a direita
  }

  // Movimento para a esquerda com a tecla 'A'
  if (event.key === 'a' || event.key === 'A') {
    let currentLeft = parseInt(personagem.style.left) || 0; // Pega a posição atual ou 0 se não houver valor
    personagem.style.left = (currentLeft - 10) + 'px';  // Move 10px para a esquerda
  }
});
