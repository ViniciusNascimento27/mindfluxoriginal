document.addEventListener('DOMContentLoaded', () => {
  const gameBoard = document.getElementById('game-board');
  const restartButton = document.getElementById('restart-button');
  const cardsArray = [
    'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D',
    'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'
  ];

  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;
  let matchedPairs = 0;

  // Embaralhar cartas
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Criar cartas
  function createBoard() {
    shuffle(cardsArray);
    cardsArray.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.card = item;
      card.innerHTML = `
        <div class="front">?</div>
        <div class="back">${item}</div>
      `;
      card.addEventListener('click', flipCard);
      gameBoard.appendChild(card);
    });
  }

  // Limpar o tabuleiro
  function clearBoard() {
    gameBoard.innerHTML = '';
  }

  // Reiniciar o jogo e iniciar uma nova partida
  function restartGame() {
    matchedPairs = 0;
    clearBoard();
    createBoard();
    restartButton.style.display = 'none';
  }

  // Virar carta
  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!firstCard) {
      firstCard = this;
      return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
  }

  // Verificar se há um par
  function checkForMatch() {
    const isMatch = firstCard.dataset.card === secondCard.dataset.card;

    if (isMatch) {
      disableCards();
      matchedPairs++;
      if (matchedPairs === cardsArray.length / 2) {
        setTimeout(() => {
          alert('Você venceu!');
          restartButton.style.display = 'block';
        }, 500);
      }
    } else {
      unflipCards();
    }
  }

  // Desabilitar cartas
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }

  // Desvirar cartas
  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      resetBoard();
    }, 1500);
  }

  // Resetar o tabuleiro
  function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
  }

  // Adicionar evento ao botão de reinício
  restartButton.addEventListener('click', () => {
    restartGame();
    setTimeout(() => alert('Novo jogo iniciado! Boa sorte!'), 300);
  });

  // Inicializar o tabuleiro do jogo
  createBoard();
});
