function types(array) {
  let buttons = [];
  for (let i = 0; i < array.length; i++) {
    const button = document.createElement('button');
    button.classList.add('button', 'rounded-pill', `background-color-${array[i].toLowerCase()}`);
    button.setAttribute('role', 'button');
    button.innerText = array[i].toUpperCase();
    buttons.push(button);
  }
  return buttons;
}

function showPoke(number) {
  const pokemon = pokedex[number - 1];
  if (!pokemon) return;
  const main = document.getElementById('main');

  const div = document.createElement("div");
  div.classList.add('main');
  div.id = 'main';

  const div2 = document.createElement("div");
  div2.classList.add('container');

  const div3 = document.createElement("div");
  div3.classList.add('buttons');

  const div4 = document.createElement("div");
  div4.classList.add('container');

  const h3 = document.createElement("h3");
  h3.classList.add('title')
  h3.innerText = pokemon.name.toUpperCase();

  const p = document.createElement("p");
  p.classList.add('description');
  p.innerText = pokemon.description;

  const buttons = types(pokemon.types);

  const img = document.createElement('img');
  img.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`;

  div4.append(img);
  div3.append(...buttons);
  div2.append(h3, p, div3);
  div.append(div2, div4);

  main.replaceWith(div);
}

const pokedex = [
  {
    id: '001',
    name: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    types: ['Grass', 'Poison']
  },
  {
    id: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    types: ['Grass', 'Poison']
  },
  {
    id: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    types: ['Grass', 'Poison']
  },
  {
    id: '004',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    types: ['Fire']
  },
  {
    id: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    types: ['Fire']
  },
  {
    id: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    types: ['Fire', 'Flying']
  },
  {
    id: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    types: ['Water']
  },
  {
    id: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    types: ['Water']
  },
  {
    id: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    types: ['Water']
  },
  {
    id: '010',
    name: 'Caterpie',
    description: 'For protection, it releases a horrible stench from the antenna on its head to drive away enemies.',
    types: ['Bug']
  }
];