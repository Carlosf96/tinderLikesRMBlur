(() => {
  let la = [...document.querySelector('.likesYou__scroller').childNodes[0].childNodes].slice(1);
  la.map(l => (l.innerHTML = l.innerHTML.split('Blur(12px)').join('Blur(0px)')));
})();
