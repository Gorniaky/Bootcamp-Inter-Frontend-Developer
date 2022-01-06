const url_pokemon_assets = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full';
const main = document.getElementById('main');

const pokedex = [];
$.getJSON('assets/json/pokedex.json', (data) => pokedex.push(...data))

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
  img.src = `${url_pokemon_assets}/${pokemon.id}.png`;

  div4.append(img);
  div3.append(...buttons);
  div2.append(h3, p, div3);

  main.replaceChildren(div2, div4);
}

setTimeout(() => showPoke(1), 100)