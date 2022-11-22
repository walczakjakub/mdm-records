// const wiked = {
//   name: "Wiked",
//   photo: "img/wiked.png",
//   spotify: "https://open.spotify.com/artist/1F0tFgHafshRmaZUXROUCg?si=_qO6S4d3QTOzWHYqjAA1Pw",
//   soundcloud: "https://soundcloud.com/ogwiked",
//   apple: "https://music.apple.com/us/artist/wiked/1511344353"
// }

// const lilCap = {
//   name: "Lil Cap",
//   photo: "img/wiked.png",
//   spotify: "https://open.spotify.com/artist/7sEq6DRIZq9lR8Vw21rzAj?si=2NbtenK5QJGid-pB3gnVLw",
//   soundcloud: "https://soundcloud.com/jandlmusic",
//   apple: "https://music.apple.com/us/artist/lil-cap/1641913172"
// }

const artistsArray = [wiked, lilCap, mollyRollin, sparkyKNE, cocaineCowboy, saintBalenci, bigToe, 
  blackNWhite, jarne, jakeUp, eliPorter, aubreyAdams, tonyGarcia, raidenRufio, aliceHefner, harlowAustin,
  z3d, lukeD, ljHuncho, brisBane, klaas2, font, patywp, luissssa, kalera] 

const contentDiv = document.getElementById('content');
console.log(contentDiv)

function openInNewTab(url) {
  let win = window.open(url, '_blank');
  //win.focus();
}

function createDiv(elType, appendTo, classType) {
  const newDiv = document.createElement(elType)
  newDiv.classList.add(classType)
  appendTo.appendChild(newDiv)
  return newDiv
}

// function addArtist() {
//   const artistContainerDiv = createDiv('div', contentDiv, 'artist')

//   const artistTopDiv = createDiv('div', artistContainerDiv, 'artist-top')
//   const artistBottomDiv = createDiv('div', artistContainerDiv, 'artist-bottom')

//   const artistNameDiv = createDiv('p', artistTopDiv, 'artist-name')
//   artistNameDiv.innerText = artistsArray[0].name

//   const artistPhotoDiv = createDiv('img', artistTopDiv, 'artist-photo')
//   artistPhotoDiv.src = artistsArray[0].photo

//   const artistSpotifyDiv = createDiv('img', artistBottomDiv, 'artist-spotify')
//   artistSpotifyDiv.src = 'img/spotify.png'
//   artistSpotifyDiv.addEventListener('click', () => openInNewTab(artistsArray[0].spotify))

//   const artistSoundcloudDiv = createDiv('img', artistBottomDiv, 'artist-soundcloud')
//   artistSoundcloudDiv.src = 'img/soundcloud.png'
//   artistSoundcloudDiv.addEventListener('click', () => openInNewTab(artistsArray[0].soundcloud))

//   const artistAppleDiv = createDiv('img', artistBottomDiv, 'artist-apple')
//   artistAppleDiv.src = 'img/apple.png'
//   artistAppleDiv.addEventListener('click', () => openInNewTab(artistsArray[0].apple))
// }

//addArtist()

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