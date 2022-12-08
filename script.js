/* Generate new areas if window is resized.
Will only generate new areas if the containers height increased because of the resizing.
Also removes the children from the container so that we don't end up with excess divs and so it keeps even/odd consistent*/
getAreas();
window.addEventListener('resize', () => {
  if (container.childElementCount < spaceToFill()) {
    removeChildren();
    getAreas();
    makeAreasClickable();
  }
});

//AREAS CLICKABLE
const makeAreasClickable = () => {
  const areas = document.querySelectorAll('div.area');
  areas.forEach((area) => {
    area.addEventListener('click', () => {
      createEmote(getEmote(), area);
    });
  });
};
makeAreasClickable();

//HUNTER
const hunter = document.querySelector('img.hunter');
container.addEventListener('mousemove', (e) => {
  let top = e.pageY;
  hunter.style.top = top + 'px';
});

// TARGET
const target = document.querySelector('img.target');
container.addEventListener('click', (e) => {
  let targetTop = getRandomArbitrary(15, 95);
  target.style.top = targetTop + 'vh';
});

//PARTY BUTTON
const partyBtn = document.querySelector('button.party-btn');
const dancers = document.querySelector('div.dancers');
partyBtn.addEventListener('click', () => {
  dancers.classList.toggle('dancing');
  body.classList.toggle('party-mode');
  if (partyBtn.textContent === 'Party Mode') {
    partyBtn.textContent = 'Normal Mode';
  } else {
    partyBtn.textContent = 'Party Mode';
  }
});

//shuffle dancers with every reload
gifs = shuffle(gifs);
for (let i = 0; i < 5; i++) {
  createDancer(i);
}
