const url_pokemon_assets = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full';
const main = document.getElementById('main')
const owlpokemons = document.getElementById('owlpokemons')
const pokedex = []

let localpoke = localStorage.getItem('pkmn')
if (localpoke && typeof localpoke === 'string')
  localpoke = parseInt(localpoke)

function types(array) {
  let buttons = []
  for (let i = 0; i < array.length; i++) {
    const button = document.createElement('button')
    button.classList.add('button', 'rounded-pill', `background-color-${array[i].toLowerCase()}`)
    button.setAttribute('role', 'button')
    button.innerText = array[i].toUpperCase()
    buttons.push(button)
  }
  return buttons
}

function showPoke(number) {
  if (!number || (number + 1) > pokedex.length)
    number = 1

  const pokemon = pokedex[number]
  if (!pokemon) return

  localStorage.setItem('pkmn', number)

  const div2 = document.createElement("div")
  div2.classList.add('container')

  const div3 = document.createElement("div")
  div3.classList.add('buttons')

  const div4 = document.createElement("div")
  div4.classList.add('container')
  div4.classList.add('container-poke')

  const div5 = document.createElement("div")
  div5.classList.add('description')

  const h3 = document.createElement("h3")
  h3.classList.add('title')
  h3.innerText = pokemon.name.toUpperCase()

  const p = document.createElement("p")
  p.classList.add('description')
  p.innerText = pokemon.description

  const buttons = types(pokemon.types)

  const p2 = document.createElement("p")
  p2.innerText = `Height: ${pokemon.height}m`

  const img = document.createElement('img')
  img.src = `${url_pokemon_assets}/${pokemon.id}.png`
  img.style.height = `${pokemon.height * 10}cm`
  img.classList.add('img-poke')

  div5.append(p2)
  div4.append(img)
  div3.append(...buttons)
  div2.append(h3, p, div5, div3)

  main.replaceChildren(div2, div4)
}

function showOwlPokemons() {
  const div1 = document.createElement("div")
  div1.classList.add('owl-carousel', 'owl-theme')

  for (let i = 1; i < pokedex.length; i++) {
    const pokemon = pokedex[i]

    const img = document.createElement('img')
    img.classList.add('box-filme')
    img.src = `${url_pokemon_assets}/${pokemon.id}.png`

    const div2 = document.createElement("div")
    div2.classList.add('item', 'poke')
    div2.id = pokemon.id
    div2.setAttribute('onClick', `showPoke(${i})`)
    div2.append(img)

    div1.append(div2)
  }
  owlpokemons.replaceChildren(div1)

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })
}

$.getJSON('assets/json/pokedex.json', (data) => pokedex.push(...data))
  .then(() => showPoke(localpoke) & showOwlPokemons())