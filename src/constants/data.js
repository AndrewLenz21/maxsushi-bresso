import images from './images';

const sushis = [
  {
    title: '201. Small Box 24pz',
    price: '€ 14,00',
    tags: '6 hozomaki kappa, 8 uramaki tiger, 6 nigiri mix, 4 sashimi salmone',
  },
  {
    title: '202. Medio Box 28pz',
    price: '€ 18,00',
    tags: '6 hosomaki sake, 8 scottato roll, 8 tiger roll, 6 nigiri mix',
  },
  {
    title: '203. Maki Sushi Box 48pz',
    price: '€26,00',
    tags: '12 hoso sake, 6 hoso ebi,8 philadelphia roll, 8 tiger roll, 6 nigiri mix, 8 sashimi sake',
  },
  {
    title: '208. Sushi Box 1 20pz',
    price: '€10,00',
    tags: '6 nigiri mix, 8 philadelphia roll, 6 hoso sake',
  },
  {
    title: '209. Sushi Box 2 26pz',
    price: '€13,00',
    tags: '6 nigiri mix, 6 nigiri sake, 8 philadelphia roll, 6 hoso sake',
  },
];

const rolls = [
  {
    title: '052. California Roll 8 pz',
    price: '€4,00',
    tags: 'Surimi di granchio crudo, avocado, tobiko',
  },
  {
    title: '053. Philadelphia Roll 8 pz',
    price: '€4,50',
    tags: 'Salmone crudo, avocado, philadelphia, sesamo',
  },
  {
    title: '054. Ebiten Roll 8 pz',
    price: '€4,50',
    tags: 'Gamberi friti, philadelphia, kataifi, salsa teriyaki',
  },
  {
    title: '055. Sake Mandorle Roll 8 pz',
    price: '€5,00',
    tags: 'Salmone crudo, avocado, philadelphia, mandorle, sesamo',
  },
  {
    title: '058. Miura Roll 8 pz',
    price: '€4,00',
    tags: 'Salmone cotto, philadelphia, sesamo, salsa teriyaki',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { sushis, rolls, awards };
