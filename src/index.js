import './style.css';

const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gameID = 'geNkiCY06ZXBLWm1WIb4';
const requestedURL = `${baseURL}/games/${gameID}/scores`;
const btnRefresh = document.querySelector('.btn-refresh');
const scoreList = document.querySelector('.score-list');

const renderScores = (items) => {
  let listItem = '';
  items.forEach((item) => {
    listItem += `<li>${item.user}: ${item.score}</li>`;
  });
  scoreList.innerHTML = listItem;
};

const getScores = async () => {
  await fetch(requestedURL)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.result);
      renderScores(json.result);
    });
};

btnRefresh.addEventListener('click', () => {
  getScores();
});

getScores();
