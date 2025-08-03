function printScreenDimensions() {
  const screenSize = document.getElementById('screen-size');
  const width = Math.floor(window.screen.width * window.devicePixelRatio);
  const height = Math.floor(window.screen.height * window.devicePixelRatio);
  screenSize.innerHTML = `Screen Size: ${width}x${height}`;
}

function showImages(parameters) {
  const wallTitle = document.getElementById('wallpaper-title');
  const wallImage = document.getElementById('wallpaper-image');
  wallImage.onload = () => wallTitle.innerHTML = `Wallpaper: ${wallImage.naturalWidth}x${wallImage.naturalHeight}`;
  wallImage.src = parameters.unsplashUrlOriginal;
}

function openImage(event) {
  if (event.target.src) window.open(event.target.src, '_blank');
}

function getFromUrl(url, respType, headers) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  headers?.forEach((header) => xhr.setRequestHeader(header.name, header.value));
  xhr.send(null);
  if (xhr.status !== 200) return;
  return xhr[respType];
}

const copyright = JSON.parse(getFromUrl('https://tinyurl.com/wallpaper-wizard-copyright', 'responseText'));

printScreenDimensions();
prepareVariables(null, null, null, copyright);
showImages(render(false));
