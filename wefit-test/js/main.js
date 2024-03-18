const elements = {
  menuList: document.querySelector('.btn-group-vertical'),
  headerCard: document.querySelector('.jumbotron'),
  headerCardBtn: document.querySelector('.jumbotron > a'),

  cardWrapper: document.querySelector('.container .row:nth-of-type(3)'),
  cardListChildren: [...document.querySelector('.container .row:nth-of-type(3)').children],
  cardAnimalBtn: document.querySelector('.container .row:nth-of-type(3) div:nth-of-type(2) .card .card-body a'),

  ulList: document.querySelector('.list-group'),
  activeListItem: document.querySelector('.active'),
};

elements.menuList.classList.replace("btn-group-vertical", "btn-group-horizontal");

elements.headerCard.classList.add("bg-secondary", "text-white", "text-right");
elements.headerCardBtn.classList.replace("btn-primary", "btn-success");
elements.cardAnimalBtn.classList.replace("btn-primary", "btn-success");

const [firstCard, secondCard, thirdCard, fourthCard, fifthCard] = elements.cardListChildren;

const reorderCardList = (...cards) => {
  const reorderedCards = [cards[0], cards[4], cards[1], cards[3], cards[2]];

  elements.cardListChildren.forEach(card => card.remove());

  reorderedCards.forEach(card => elements.cardWrapper.appendChild(card));
};

reorderCardList(firstCard, secondCard, thirdCard, fourthCard, fifthCard);

elements.activeListItem.classList.remove('active');

const insertListItem = (text) => {
  const listItem = document.createElement('li');
  listItem.innerText = text;
  listItem.classList.add('list-group-item');

  if (text === 'Quarto Item') {
    listItem.classList.add('active');
  }

  elements.ulList.appendChild(listItem);
};

insertListItem("Quarto Item");
insertListItem("Quinto Item");
