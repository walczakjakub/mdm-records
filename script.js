const artistsArray = [wiked, lilCap, mollyRollin, sparkyKNE, cocaineCowboy, saintBalenci, bigToe, 
  blackNWhite, jarne, jakeUp, eliPorter, aubreyAdams, tonyGarcia, raidenRufio, aliceHefner, harlowAustin,
  z3d, lukeD, ljHuncho, brisBane, klaas2, font, patywp, luissssa, kalera, RJ1] 

const contentDiv = document.getElementById('content');
console.log(contentDiv)

function openInNewTab(url) {
  let win = window.open(url, '_blank');
}

function createDiv(elType, appendTo, classType) {
  const newDiv = document.createElement(elType)
  newDiv.classList.add(classType)
  appendTo.appendChild(newDiv)
  return newDiv
}


function addArtist(e) {
  const artistContainerDiv = createDiv('div', contentDiv, 'artist')

  const artistPhotoDiv = createDiv('img', artistContainerDiv, 'artist-photo')
  const artistNameDiv = createDiv('p', artistContainerDiv, 'artist-name')
  const artistLinksDiv = createDiv('div', artistContainerDiv, 'artist-links')

  artistPhotoDiv.src = e.photo

  artistNameDiv.innerText = e.name

  const artistSpotifyDiv = createDiv('img', artistLinksDiv, 'artist-spotify')
  artistSpotifyDiv.src = 'img/spotify.png'
  artistSpotifyDiv.addEventListener('click', () => openInNewTab(e.spotify))

  const artistSoundcloudDiv = createDiv('img', artistLinksDiv, 'artist-soundcloud')
  artistSoundcloudDiv.src = 'img/soundcloud.png'
  artistSoundcloudDiv.addEventListener('click', () => openInNewTab(e.soundcloud))

  const artistAppleDiv = createDiv('img', artistLinksDiv, 'artist-apple')
  artistAppleDiv.src = 'img/apple.png'
  artistAppleDiv.addEventListener('click', () => openInNewTab(e.apple))
}

artistsArray.forEach(i => 
  addArtist(i)
  )