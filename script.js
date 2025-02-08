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
  addMadPlayer('', 'https://cdn.discordapp.com/attachments/1270922895178203200/1328869873736224798/image.png?ex=67a7ea03&is=67a69883&hm=b19da5933704ed660989f3aefdab864419e1dfbc56f151e63da6c9167d5448a4&');
  addMadPlayer('', 'https://cdn.discordapp.com/attachments/1270922895178203200/1283682248889073695/image.png?ex=67a7a881&is=67a65701&hm=68a27ce148a34bfbea924eee54d707dad448a87b70557878e31e5dea7376eb0e&');
  addMadPlayer('', 'https://media.discordapp.net/attachments/1331114042336477255/1337595986163404810/image.png?ex=67a804d6&is=67a6b356&hm=02039449d1eaa1358ecf9ba29609c13638c8aba6719e154bad76b76e2c8b2506&');
});
