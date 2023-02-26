function printScreenDimensions() {
  const screenSize = document.getElementById('screen-size');
  const width = Math.floor(window.screen.width * window.devicePixelRatio);
  const height = Math.floor(window.screen.height * window.devicePixelRatio);
  screenSize.innerHTML = `Screen Size: ${width}x${height}`;
}

function showImages(parameters) {
  const originalText = document.getElementById('original-text');
  const updatedText = document.getElementById('updated-text');
  const original = document.getElementById('original-image');
  const updated = document.getElementById('updated-image');
  original.onload = () => originalText.innerHTML = `Original (${original.naturalWidth}x${original.naturalHeight})`;
  updated.onload = () => updatedText.innerHTML = `With Custom Settings (${updated.naturalWidth}x${updated.naturalHeight})`;
  original.src = parameters.unsplashUrlOriginal;
  updated.src = parameters.unsplashUrlUpdated;
}

function openImage(event) {
  if (event.target.src) window.open(event.target.src, '_blank');
}

const creator = {
  year: 2023,
  creator: 'Segich',
  url: 'https://tinyurl.com/wallpaper-wizard'
};

printScreenDimensions();
prepareVariables(null, null, null, creator);
showImages(render(false));
