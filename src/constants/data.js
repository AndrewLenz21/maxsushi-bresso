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

const antipasti = [
  {
    title: '01. Involtino primavera 6pz',
    price: '€2,50',
    tags: 'Verdure miste',
  },
  {
    title: '02. Involtini Vietnam 5pz',
    price: '€4,50',
    tags: 'Sfoglia di riso con carne, verdure miste',
  },
  {
    title: '03. Gamberi Stick 5pz',
    price: '€4,50',
    tags: '',
  },
  {
    title: '04. Tempura Gamberi 5pz',
    price: '€4,50',
    tags: '',
  },
  {
    title: '05. Patatine fritte',
    price: '€2,00',
    tags: '',
  },
  {
    title: '08. Cotoletta di pollo fritto',
    price: '€2,50',
    tags: '',
  },
  {
    title: '10. Gyoza alla griglia di carne 5pz',
    price: '€4,50',
    tags: '',
  },
  {
    title: '11. Nuvolette di drago',
    price: '€1,50',
    tags: '',
  },
  {
    title: '12. Edamane fagiolini di soia con sale',
    price: '€2,00',
    tags: '',
  },
  {
    title: '20. Goma wakame',
    price: '€2,50',
    tags: '',
  },
];

const insalate = [
  {
    title: '21. Salmon salad',
    price: '€3,50',
    tags: 'Insalata mista, mais, salmone crudo, salsa sesamo',
  },
  {
    title: '22. Gamberi salad',
    price: '€3,50',
    tags: 'Insalata mista, mais, gamberi, salsa sesamo',
  },
]

const tartare = [
  {
    title: '23. Tartar riso bianco',
    price: '€4,50',
    tags: 'Tartare di salmone, riso bianco, avocado, sesamo, tobiko',
  },
  {
    title: '25. Tartar riso venere',
    price: '€4,50',
    tags: 'Tartare di salmone, riso venere, avocado, sesamo, tobiko',
  },
  {
    title: '26. Tartar sake',
    price: '€6,00',
    tags: 'Tartare di salmone, kataifi, salsa ponzu',
  },
]

const onigiri = [
  {
    title: '27. Onigiri sake',
    price: '€2,50',
    tags: 'Riso bianco, salmone crudo, salsa teriyaki',
  },
  {
    title: '28. Onigiri negro',
    price: '€2,50',
    tags: 'Riso venere, salmone crudo, salsa teriyaki',
  },
]

const temaki = [
  {
    title: '30. Temaki tuna',
    price: '€3,00',
    tags: 'Tonno, avocado, philadelphia, insalata',
  },
  {
    title: '31. Temaki tempura',
    price: '€3,00',
    tags: 'Gamberi fritti, philadelphia, insalata, salsa teriyaki',
  },
  {
    title: '33. Temaki salmon',
    price: '€3,00',
    tags: 'Salmone, avocado, philadelphia, insalata',
  },
]

const hoso = [
  {
    title: '34. Hoso sake salmone 6pz',
    price: '€3,00',
    tags: '',
  },
  {
    title: '35. Hoso kani 6pz',
    price: '€3,00',
    tags: 'Surimi di granchio',
  },
  {
    title: '38. Hoso ebi 6pz',
    price: '€3,00',
    tags: 'Gamberi fritti',
  },
  {
    title: '39. Hoso maguro 6pz',
    price: '€3,00',
    tags: 'Tonno',
  },
  {
    title: '68. Hoso fritto Tokyo 8pz',
    price: '€4,50',
    tags: 'Hoso fritto, philadelphia, salsa teriyaki',
  },
  {
    title: '69. Hoso fritto sake 8pz',
    price: '€5,00',
    tags: 'Hoso fritto, philadelphia, tartar sake, salsa teriyaki',
  },
]
const maki = [
  {
    title: '36. Kappa maki 6pz',
    price: '€2,50',
    tags: 'Cetriolo',
  },
  {
    title: '37. Avo maki 6pz',
    price: '€2,50',
    tags: 'Avocado',
  },
]
const gunkan = [
  {
    title: '40. Gunkan spicy sake 4pz',
    price: '€4,00',
    tags: 'Salmone, salsa maio piccante, sesamo',
  },
  {
    title: '41. Gunkan philadelphia 4pz',
    price: '€4,50',
    tags: 'Salmone crudo',
  },
]
const sushiroll = [
  {
    title: '44. Tuna roll 8pz',
    price: '€5,50',
    tags: 'Tonno, avocado, philadelphia',
  },
  {
    title: '45. Spicy tuna roll 8pz',
    price: '€5,00',
    tags: 'Tonno crudo, salsa maiopiccante, sesamo',
  },
  {
    title: '51. Spicy sake roll 8pz',
    price: '€4,50',
    tags: 'Salmone crudo, salsa maiopiccante, sesamo',
  },
  {
    title: '52. California roll 8pz',
    price: '€4,00',
    tags: 'Surimi di granchio crudo, avocado, tobiko',
  },
  {
    title: '53. Philadelphia roll 8pz',
    price: '€4,50',
    tags: 'Salmone crudo, avocado, philadelphia, sesamo',
  },
  {
    title: '54. Ebiten roll 8pz',
    price: '€4,50',
    tags: 'Gamberi fritti, philadelphia, kataifi, salsa teriyaki',
  },
  {
    title: '55. Sake mandorle roll 8pz',
    price: '€5,00',
    tags: 'Salmone crudo, avocado, philadelphia, mandorle, sesamo',
  },
  {
    title: '56. Scottato roll 8pz',
    price: '€5,50',
    tags: 'Salmone crudo, avocado, sesamo, salmone cotto esterno, salsa teriyaki',
  },
  {
    title: '57. Tiger roll 8pz',
    price: '€5,50',
    tags: 'Gamberi fritti, salmone crudo, philadelphia, sesamo, salsa teriyaki',
  },
  {
    title: '58. Miura roll 8pz',
    price: '€4,00',
    tags: 'Salmone cotto, philadelphia, sesamo, salsa teriyaki',
  },
  {
    title: '59. Dragon roll 8pz',
    price: '€5,50',
    tags: 'Gamberi fritti, avocado, philadelphia, sesamo, salsa teriyaki',
  },
  {
    title: '60. Rainbow roll 8pz',
    price: '€6,00',
    tags: 'Salmone, avocado, philadelphia, pesce misto all\\esterno, sesamo',
  },
  {
    title: '61. Chicken roll 8pz',
    price: '€4,00',
    tags: 'Pollo fritto, insalata, sesamo, salsa teriyaki',
  },
  {
    title: '62. Miura black roll 8pz',
    price: '€5,00',
    tags: 'Salmone cotto, philadelphia, salsa teriyaki',
  },
  {
    title: '63. Sake black roll 8pz',
    price: '€5,50',
    tags: 'Salmone crudo, avocado, sesamo, salsa maiopiccante',
  },
  {
    title: '65. Black ebiten roll 8pz',
    price: '€5,00',
    tags: 'Gamberi fritti, mandorle, salsa teriyaki',
  },
]
const ball = [
  {
    title: '66. Ball nero 6pz',
    price: '€2,50',
    tags: 'Palline di riso venere, philadelphia, salsa teriyaki',
  },
  {
    title: '67. Ball bianco 6pz',
    price: '€2,50',
    tags: 'Palline di riso bianco, philadelphia, salsa teriyaki',
  },
]
const nigiri = [
  {
    title: '80. Nigiri misto 6pz',
    price: '€6,00',
    tags: 'Salmone, tonno, branzino',
  },
  {
    title: '81. Nigiri sake 6pz',
    price: '€6,00',
    tags: 'Salmone',
  },
  {
    title: '82. Nigiri suzuki 6pz',
    price: '€6,00',
    tags: 'Branzino',
  },
  {
    title: '83. Nigiri maguro 6pz',
    price: '€6,50',
    tags: 'Tonno',
  },
]
const sashimi = [
  {
    title: '85. Sashimi salmone 8pz',
    price: '€7,00',
    tags: '',
  },
  {
    title: '87. Chirashi salmone',
    price: '€6,50',
    tags: 'Salmone, avocado, tobiko, kataifi, salsa teriyaki, sesamo',
  },
]
const pastariso = [
  {
    title: '101. Riso bianco di sushi',
    price: '€2,00',
    tags: '',
  },
  {
    title: '102. Riso cantonese',
    price: '€3,50',
    tags: 'Uova, piselli, prosciutto cotto',
  },
  {
    title: '103. Riso con gamberi, uova, piselli, gamberi',
    price: '€4,00',
    tags: 'Uova, piselli, gamberi',
  },
  {
    title: '104. Riso con pollo fritto',
    price: '€4,00',
    tags: 'Uova, piselli, pollo fritto',
  },
  {
    title: '105. Veggie noddle',
    price: '€4,00',
    tags: 'Spaguetti saltati con verdure miste, uova',
  },
  {
    title: '106. Noodle king',
    price: '€4,50',
    tags: 'Spaguetti saltati con verdure miste, uova, gamberi',
  },
  {
    title: '107. Chicken noodle',
    price: '€4,50',
    tags: 'Spaguetti saltati con verdure miste, uova, pollo fritto',
  },
  {
    title: '108. Veggie udon',
    price: '€4,50',
    tags: 'Spaguetti giaponesse con verdure miste, uova',
  },
  {
    title: '109. Yaki udon',
    price: '€5,00',
    tags: 'Spaguetti giaponesse con frutti di mare, uova',
  },
  {
    title: '110. Spaguetti di riso con verdure e uova saltati',
    price: '€4,00',
    tags: '',
  },
  {
    title: '111. Spaguetti di riso saltati con gamberi',
    price: '€4,50',
    tags: 'Verdure, uova, gamberi',
  },
  {
    title: '112. Spaguetti di soia saltati con verdure',
    price: '€4,00',
    tags: '',
  },
  {
    title: '113. Spaguetti di soia saltati con gamberi',
    price: '€4,50',
    tags: '',
  },
  {
    title: '114. Spaguetti di soia saltati con maiale piccante',
    price: '€4,00',
    tags: '',
  },
  {
    title: '117. Ramen in brodo',
    price: '€6,00',
    tags: '',
  },
]
const pollo = [
  {
    title: '121. Pollo piccante',
    price: '€4,50',
    tags: '',
  },
  {
    title: '122. Pollo alle mandorle',
    price: '€4,50',
    tags: '',
  },
]
const manzo = [
  {
    title: '123. Veggie manzo',
    price: '€5,00',
    tags: 'Carne di manzo, verdure',
  },
  {
    title: '124. Spicy manzo',
    price: '€5,00',
    tags: 'Carne di manzo, salsa piccante',
  },
]
const gamberi = [
  {
    title: '125. Veggie gamberi',
    price: '€5,00',
    tags: '',
  },
  {
    title: '126. Gamberi in sale e pepe',
    price: '€5,00',
    tags: '',
  },
  {
    title: '127. Spicy gamberi',
    price: '€5,00',
    tags: 'Gamberi in salsa piccante',
  },
]
const boxsushi = [
  {
    title: '201. Small Box 24pz',
    price: '€14,00',
    tags: '6 hosomaki kappa. 8 uramaki tiger, 6 nigiri mix, 4 sashimi salmone',
  },
  {
    title: '202. Medio Box 28pz',
    price: '€18.00',
    tags: '6 hosomaki sake, 8 scottato roll, 8 tiger roll, 6 nigiri mix',
  },
  {
    title: '203. Maki Sushi Box 48pz',
    price: '€26.00',
    tags: '12 hoso sake, 6 hoso ebi, 8 philadelphia roll, 8 tiger roll, 6 nigiri mix, 8 sashimi sake',
  },
  {
    title: '204. Happy Salmon 60pz',
    price: '€33,00',
    tags: '12 hoso sake, 8 phila roll, 8 tiger roll, 8 sashimi salmone, 6 nigiri salmone, 8 california roll, 4 gunkan spicy sake, 6 ball bianco',
  },
  {
    title: '205. Hapy Sushi 68pz',
    price: '€38,00',
    tags: '12 hoso sake, 6 hoso tonno, 8 scottato roll, 8 tiger roll, 8 california roll, 8 phila roll, 6 nigiri mix, 12 nigiri salmone, 16 sashimi salmone',
  },
  {
    title: '206. Max Box 84pz',
    price: '€49,00',
    tags: '12 hoso sake, 6 hoso tonno, 8 scottato roll, 8 tiger roll, 8 california roll, 8 phila roll, 6 nigiri mix, 12 nigiri salmone, 16 sashimi salmone',
  },
  {
    title: '208. Sushi Box 1 20pz',
    price: '€10,00',
    tags: '6 nigiri mix, 8 philadelphia roll, 6 hoso sake',
  },
  {
    title: '209. Sushi Box 2',
    price: '€13,00',
    tags: '6 nigiri mix, 6 nigiri sake, 8 philadelphia roll, 6 hoso sake',
  },
]
const poke = [
  {
    title: '301. Poke Salmon',
    price: '€7,00',
    tags: 'Salmone, avocado, edamame, mango, algue, sesamo, salsa poke',
  },
  {
    title: '302. Poke Maguro',
    price: '€7,00',
    tags: 'Tonno, avocado, edamame, mango, algue, sesamo, salsa poke',
  },
  {
    title: '303. Poke Gamberi',
    price: '€7,00',
    tags: 'Gamberi, edamame, mais, algue, sesamo, salsa poke',
  },
  {
    title: '304. Poke King',
    price: '€8,00',
    tags: 'Salmone, tonno, edamame, algue sesamo, salsa poke',
  },
  {
    title: '305. Poke Red Moon',
    price: '€8,00',
    tags: 'Gamberi, tonno, salmone, branzino, algue, sesamo, salsa poke',
  },
  {
    title: '306. Poke Vegge',
    price: '€6,00',
    tags: 'Avocado, edamame, algue, pomodoro, sesamo, cetriolo, salsa poke',
  },
  {
    title: '307. Poke Chicken',
    price: '€7,00',
    tags: 'Pollo fritto, avocado, edamame, pomodoro, algue, sesamo, salsa teriyaki',
  },
  {
    title: '308. Poke Love',
    price: '€7,00',
    tags: 'Gamberi fritti, pollo fritto, avocado, algue, cipolle fritte, salsa teriyaki',
  },
]
const salse = [
  {
    title: 'Salsa teriyaki',
    price: '€0,30',
    tags: '',
  },
  {
    title: 'Salsa agropiccante',
    price: '€0,30',
    tags: '',
  },
  {
    title: 'Wasabi',
    price: '€0,20',
    tags: '',
  },
  {
    title: 'Zenzero',
    price: '€0,20',
    tags: '',
  },
  {
    title: 'Soia',
    price: '€0,20',
    tags: '',
  },
]
const bevande = [
  {
    title: 'Tè Limone 330ml',
    price: '€3,00',
    tags: '',
  },
  {
    title: 'Tè Pesca 330ml',
    price: '€3,00',
    tags: '',
  },
  {
    title: 'Coca-cola 330ml',
    price: '€2,50',
    tags: '',
  },
  {
    title: 'Coca-cola zero 330ml',
    price: '€2,50',
    tags: '',
  },
  {
    title: 'Sprite 330ml',
    price: '€2,50',
    tags: '',
  },
  {
    title: 'Fanta 330ml',
    price: '€2,50',
    tags: '',
  },
  {
    title: 'Acqua naturale 300ml',
    price: '€1,00',
    tags: '',
  },
  {
    title: 'Acqua frizzante 300ml',
    price: '€1,00',
    tags: '',
  },
]
const birre = [
  {
    title: 'Asahi 500ml',
    price: '€5,00',
    tags: '',
  },
  {
    title: 'Sapporo 500ml',
    price: '€5,00',
    tags: '',
  },
  {
    title: 'Tsingtao 650ml',
    price: '€5,00',
    tags: '',
  },
  {
    title: 'Moretti 660ml',
    price: '€4,50',
    tags: '',
  },
]
export default { sushis, rolls, antipasti, insalate, tartare, onigiri, temaki, hoso, maki, gunkan, sushiroll, ball, nigiri, sashimi, pastariso, pollo, manzo, gamberi, boxsushi, poke, salse, bevande, birre };
