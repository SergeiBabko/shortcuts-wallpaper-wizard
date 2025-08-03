/**
 * @Copyright
 * Copyright (C) 2023 Sergei Babko (Segich)
 *
 * @Description
 * 🌅🌉🏞️     Wallpaper Wizard     🏞️🌉🌅
 *
 * An automation that eliminates the need for manual Unsplash link
 * customization by generating links with user-defined image parameters,
 * that can be used in Apple Shortcuts for quick access to your preferred images.
 *
 * @Interfaces:
 * interface SearchParameters {
 *   useTopic: boolean,
 *   randomTopic: boolean,
 *   useSearch: boolean,
 *   randomSearch: boolean,
 *   topics: string[],
 *   search: string[],
 * }
 *
 * interface ImageParameters {
 *   originalImage: boolean,
 *   format: string,
 *   quality: number,
 *   sharp: number,
 *   unsharpMask: number,
 *   maskRadius: number,
 *   fit: string,
 *   crop: string,
 *   defaultSize: number,
 *   offset: number,
 * }
 *
 * interface ApiParameters {
 *   clientId: string,
 *   unsplashApi: string,
 *   picsumApi: string,
 * }
 *
 * interface ExecutionResult {
 *   unsplashUrlOriginal: string,
 *   unsplashUrlUpdated: string,
 * }
 */


// /////////////////////////////////////
// GLOBAL VARIABLES
// /////////////////////////////////////


let params;


// /////////////////////////////////////
// DEFAULT VARIABLES
// /////////////////////////////////////


const defaultSearchParameters = {
  useTopic: true,
  randomTopic: false,
  useSearch: false,
  randomSearch: false,
  topics: [
    'wallpapers',
    'nature',
    'renders',
    'textures & patterns',
    'travel',
    'film',
    'people',
    'architecture & interior',
    'street-photography',
    'experimental',
    'illustration',
    '3d',
    'flat',
    'hand drawn',
    'icons',
    'line art',
    'patterns',
    'fashion & beauty',
    'business & work',
    'food & drink',
    'sports',
    'archival'
  ],
  search: [
    'wallpaper',
  ]
};

const defaultImageParameters = {
  originalImage: true,
  format: 'jpg',
  quality: 100,
  sharp: 15,
  unsharpMask: 5,
  maskRadius: 1,
  fit: 'crop',
  crop: 'center',
  defaultSize: 3000,
  offset: 500,
};

const defaultApiParameters = {
  clientId: '',
  unsplashApi: 'https://api.unsplash.com/photos/random',
  picsumApi: 'https://picsum.photos/',
};

const topics = new Map([
  ['wallpapers', { id: 'bo8jQKTaE0Y', key: 'wallpapers', title: 'Wallpapers' }],
  ['nature', { id: '6sMVjTLSkeQ', key: 'nature', title: 'Nature' }],
  ['renders', { id: 'CDwuwXJAbEw', key: '3d-renders', title: '3D Renders' }],
  ['textures & patterns', { id: 'iUIsnVtjB0Y', key: 'textures-patterns', title: 'Textures' }],
  ['travel', { id: 'Fzo3zuOHN6w', key: 'travel', title: 'Travel' }],
  ['film', { id: 'hmenvQhUmxM', key: 'film', title: 'Film' }],
  ['people', { id: 'towJZFskpGg', key: 'people', title: 'People' }],
  ['architecture & interior', { id: 'M8jVbLbTRws', key: 'architecture-interior', title: 'Architecture & Interiors' }],
  ['street-photography', { id: 'xHxYTMHLgOc', key: 'street-photography', title: 'Street Photography' }],
  ['experimental', { id: 'qPYsDzvJOYc', key: 'experimental', title: 'Experimental' }],
  ['illustration', { id: 'If65AuNOOxQ', key: 'illustration-wallpapers', title: 'Wallpapers' }],
  ['3d', { id: 'whIY33yKE84', key: '3d', title: '3D' }],
  ['flat', { id: 'pIF7l5_hgxg', key: 'flat', title: 'Flat' }],
  ['hand drawn', { id: 'tthdwfNPCcw', key: 'hand-drawn', title: 'Hand Drawn' }],
  ['icons', { id: 'FkTvWj0W5bo', key: 'icons', title: 'Icons' }],
  ['line art', { id: 'rNbj3NBAY_w', key: 'line-art', title: 'Line Art' }],
  ['patterns', { id: 'upmleWZC83Y', key: 'patterns', title: 'Patterns' }],
  ['fashion & beauty', { id: 'S4MKLAsBB74', key: 'fashion-beauty', title: 'Fashion & Beauty' }],
  ['business & work', { id: 'aeu6rL-j6ew', key: 'business-work', title: 'Business & Work' }],
  ['food & drink', { id: 'xjPR4hlkBGA', key: 'food-drink', title: 'Food & Drink' }],
  ['sports', { id: 'Bn-DjrcBrwo', key: 'sports', title: 'Sports' }],
  ['archival', { id: 'E--_pnIirG4', key: 'archival', title: 'Archival' }]
]);


// /////////////////////////////////////
// EXECUTION
// /////////////////////////////////////


function render(sendToBody = true) {
  updateParamsArrays();
  const unsplashUrlOriginal = params.passed ? generateUnsplashUrl() : getRandomPirate();
  const unsplashUrlUpdated = params.passed && params.clientId ? unsplashUrlOriginal + generateUnsplashImageParams() : unsplashUrlOriginal;
  const parameters = { unsplashUrlOriginal, unsplashUrlUpdated };
  if (sendToBody) {
    const htmlOutput = JSON.stringify(parameters);
    document.body.textContent = encodeURIComponent(htmlOutput);
  }
  return parameters;
}


// /////////////////////////////////////
// FUNCTIONS
// /////////////////////////////////////


function prepareVariables(searchParams, imageParams, apiParams, creator) {
  params = {
    ...(searchParams || defaultSearchParameters),
    ...(imageParams || defaultImageParameters),
    ...(apiParams || defaultApiParameters),
    passed: checkCopyright(creator)
  };
}

function updateParamsArrays() {
  const valuesToCheck = ['topics', 'search'];
  valuesToCheck.forEach((key) => {
    const value = params[key];
    if (typeof value === 'string') params[key] = [value];
  });
}

function generateUnsplashUrl() {
  return params.clientId ? prepareNewUrl(params.unsplashApi) : prepareOldUrl(params.picsumApi);
}

function prepareNewUrl(apiUrl) {
  const headers = [
    {
      name: 'Accept-Version',
      value: 'v1'
    },
    {
      name: 'Authorization',
      value: `Client-ID ${params.clientId}`
    },
  ];
  const queryParams = generateUnsplashQueryParams();
  const image = JSON.parse(getFromUrl(`${apiUrl}${queryParams}`, 'responseText', headers));
  return image.urls.raw;
}

function prepareOldUrl(apiUrl) {
  const screenSize = getScreenSize();
  return getFromUrl(`${apiUrl}${screenSize}`, 'responseURL');
}

function generateUnsplashQueryParams() {
  const queryParams = getQueryParams({
    topics: getTopic(),
    query: getSearch()
  });
  const unsplashQueryParams = `?${queryParams.toString()}`;
  return encodeURI(unsplashQueryParams);
}

function getTopic() {
  if (!params.useTopic) return;
  const topicId = params.randomTopic ? getRandomFromArr(params.topics) : params.topics[0];
  const topic = topics.get(topicId);
  return params.clientId ? topic?.id : topic?.key;
}

function getSearch() {
  if (params.useTopic || !params.useSearch) return;
  const search = params.randomSearch ? getRandomFromArr(params.search) : params.search[0];
  return search?.trim();
}

function getQueryParams(query) {
  const emptyValues = [];
  const nullableValues = ['false', 'null', 'undefined', ''];
  const queryParams = new URLSearchParams(query);
  queryParams.forEach((value, key) => {
    const trimmedValue = value.replaceAll(' ', '');
    const isNullable = nullableValues.find(nValue => nValue === trimmedValue);
    if (isNullable || trimmedValue.length === 0) {
      emptyValues.push(key);
    }
  });
  emptyValues.forEach(key => queryParams.delete(key));
  return queryParams;
}

function generateUnsplashImageParams() {
  if (params.originalImage) {
    // Unsplash may provide binary stream instead of image, so I have to convert it to jpg anyway
    const queryParams = getQueryParams({
      fm: 'jpg',
      q: 100,
    });
    return '&' + queryParams.toString();
  }
  const { format, quality, sharp, unsharpMask, maskRadius, fit, crop } = params;
  const screenSize = getScreenSize();
  const queryParams = getQueryParams({
    fm: format,
    fit: fit,
    w: screenSize,
    h: screenSize,
    sharp: sharp,
    usm: unsharpMask,
    usmrad: maskRadius,
    q: format === 'jpg' && quality,
    crop: fit === 'crop' && crop,
    'max-h': fit === 'crop' && screenSize,
    'max-w': fit === 'crop' && screenSize,
    'min-h': fit === 'crop' && screenSize,
    'min-w': fit === 'crop' && screenSize,
  });
  return '&' + queryParams.toString();
}

function getScreenSize() {
  const { defaultSize, offset } = params;
  const width = window.screen.width;
  const height = window.screen.height;
  return Math.round(Math.max(width, height) * window.devicePixelRatio + offset) || defaultSize;
}

function getRandomFromArr(arr) {
  if (!arr || !arr.length) return;
  return arr[Math.floor(Math.random() * arr.length)];
}

function checkCopyright(creator) {
  const copyright = JSON.parse(getFromUrl('https://tinyurl.com/wallpaper-wizard-copyright', 'responseText'));
  return JSON.stringify(copyright) === JSON.stringify(creator);
}

function getRandomPirate() {
  const idx = Math.floor(Math.random() * 5) + 1;
  return `https://raw.githubusercontent.com/SergeiBabko/shortcuts-wallpaper-wizard/main/assets/pirates/${idx}.jpg`;
}


// /////////////////////////////////////
// HTTP
// /////////////////////////////////////


/**
 * respType: responseText | responseURL
 */
function getFromUrl(url, respType, headers) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  headers?.forEach((header) => xhr.setRequestHeader(header.name, header.value));
  xhr.send(null);
  if (xhr.status !== 200) return;
  return xhr[respType];
}


// /////////////////////////////////////
// SHORTCUT SETTINGS AND EXECUTION
// /////////////////////////////////////
