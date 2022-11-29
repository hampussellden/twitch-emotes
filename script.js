const emotes = [
  ['images/5Head.png'],
  ['images/COPIUM.png'],
  ['images/EZY.png'],
  ['images/FeelsAmazingMan.png'],
  ['images/FeelsBadMan.png'],
  ['images/FeelsOkayMan.png'],
  ['images/HYPERS.png'],
  ['images/KEKL.png'],
  ['images/KEKLEO.png'],
  ['images/KEKW.png'],
  ['images/KEKWait.png'],
  ['images/LULW.png'],
  ['images/Madge.png'],
  ['images/monkaChrist.png'],
  ['images/monkaH.png'],
  ['images/monkaMEGA.png'],
  ['images/monkaOMEGA.png'],
  ['images/monkaTOS.png'],
  ['images/monkaW.png'],
  ['images/OMEGALUL.png'],
  ['images/PauseChamp.png'],
  ['images/peepoBlush.png'],
  ['images/peepoFat.png'],
  ['images/peepoHappy.png'],
  ['images/Pepega.png'],
  ['images/PepegaCredit.png'],
  ['images/PepeHands.png'],
  ['images/pepeJAM.png'],
  ['images/PepeLaugh.png'],
  ['images/PepoThink.png'],
  ['images/pikachuS.png'],
  ['images/Pog.png'],
  ['images/Pogey.png'],
  ['images/POGGERS.png'],
  ['images/Prayge.png'],
  ['images/Sadge.png'],
  ['images/sadKEK.png'],
  ['images/WICKED.png'],
  ['images/widepeepoHappy.png'],
  ['images/widepeepoSad.png'],
  ['images/YEP.png'],
];

const body = document.querySelector('body');
//Area prep

const createEmote = (emote, area) => {
  const image = document.createElement('img');
  image.src = emote;
  image.classList.add('bullet');
  area.appendChild(image);
};
const getEmote = () => {
  const index = Math.floor(Math.random() * (emotes.length - 0));
  return emotes[index];
};
// const getMouseYPos = (e) => {
//   const cursorY = e.clientY;
// };
// body.addEventListener('click', getMouseYPos());

const container = document.querySelector('div.container');
const areas = document.querySelectorAll('div.area');

areas.forEach((area) => {
  area.addEventListener('click', () => {
    createEmote(getEmote(), area);
  });
});
