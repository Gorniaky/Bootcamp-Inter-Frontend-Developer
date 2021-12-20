const BASE_URL = 'https://aws.random.cat/meow',
  catBtn = document.getElementById('change-cat'),
  catImg = document.getElementById('cat'),

  getCats = async () => {
    const { file } = await fetch(BASE_URL).then(response => response.json()).catch();
    return file;
  },

  loadImg = async () => {
    catImg.src = await getCats();
  };

catBtn.addEventListener('click', loadImg);

loadImg();