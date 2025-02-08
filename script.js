export function addMadPlayer(playerName, playerImage) {
  const playersList = document.getElementById('players-list');
  
  const playerCard = document.createElement('div');
  playerCard.classList.add('player-card');
  
  const nameElement = document.createElement('h2');
  nameElement.textContent = playerName;
  
  const imageElement = document.createElement('img');
  imageElement.src = playerImage;
  imageElement.alt = playerName;
  imageElement.classList.add('player-image');
  
  playerCard.appendChild(nameElement);
  playerCard.appendChild(imageElement);
  
  playersList.appendChild(playerCard);
}

// Example usage
window.addEventListener('DOMContentLoaded', () => {
  addMadPlayer('', 'https://cdn.discordapp.com/attachments/1270922895178203200/1328869873736224798/image.png');
  addMadPlayer('', 'https://cdn.discordapp.com/attachments/1270922895178203200/1283682248889073695/image.png');
  addMadPlayer('', 'https://media.discordapp.net/attachments/1331114042336477255/1337595986163404810/image.png');
});
