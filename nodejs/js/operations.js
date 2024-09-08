const cats = [
  {
    catName: "Nami",
    catDesc: "A fierce cat born and raised in the wild, capable to hunt multiple preys at the same time. Considered as the alpha cat of the family.",
    catPers: "Brave and Elegant",
    catImg: 'assets/Nami.jpg',
  },
  {
    catName: "Mora",
    catDesc: "A gentle cat with a gentleman attitude. Never gets mad and always befriend others even if they're aggresive",
    catPers: "Diplomat and Kind",
    catImg: 'assets/Mora.jpg',
  },
  {
    catName: "Slurpee",
    catDesc: "A fat cat that likes to eat and cry.",
    catPers: "Fat and Dirty",
    catImg: 'assets/Slurpee.jpg',
  },
  {
    catName: "Lemon",
    catDesc: "An indoor cat that likes to explore the world in the comfort of her own home",
    catPers: "Adventurous and Cute",
    catImg: 'assets/Lemon.jpg',
  },
  {
    catName: "Kiwi",
    catDesc: "Like Slurpee, he likes to eat a lot and loves to explore outside. With a unique facial feature, which is his tongue always hang out of his mouth sideways",
    catPers: "Veliceraptor and Mlep",
    catImg: 'assets/Kiwi.jpg',
  },
]

function createShowcase (cat) {
  const catShowcase = document.createElement('div');
  catShowcase.classList.add('grid', 'col-span-5', 'grid-cols-subgrid');

  const catImgContainer = document.createElement('div');
  const catImgLiner = document.createElement('div');
  const catImg = document.createElement('img');

  catImgContainer.classList.add('relative', 'col-span-3');
  catImgLiner.classList.add('absolute', 'inset-0', 'left-0', 'w-8', 'h-full', 'bg-pink-500')
  catImg.src = cat.catImg;

  const catDescContainer = document.createElement('div');
  const catDescName = document.createElement('p');
  const catDescDesc = document.createElement('p');
  const catDescPers = document.createElement('p');

  catDescContainer.classList.add('col-span-2', 'flex', 'flex-col', 'gap-4');
  catDescName.classList.add('text-2xl', 'font-bold');
  catDescPers.classList.add('italic')

  catDescName.textContent = cat.catName;
  catDescDesc.textContent = cat.catDesc;
  catDescPers.textContent = cat.catPers;

  catDescContainer.append(catDescName, catDescDesc, catDescPers);
  catImgContainer.append(catImgLiner, catImg);
  catShowcase.append(catImgContainer, catDescContainer);

  return catShowcase;
}

const catShowcaseContainer = document.querySelector('#showCase');

cats.forEach(cat => catShowcaseContainer.appendChild(createShowcase(cat)))