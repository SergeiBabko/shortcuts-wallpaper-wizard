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
 *   newApi: string,
 *   oldApi: string,
 * }
 */

// Variables
let params, searchParams, imageParams, apiParams;

const defaultSearchParameters = {
  useTopic: true,
  randomTopic: false,
  useSearch: false,
  randomSearch: false,
  topics: [
    'wallpapers',
    'renders',
    'travel',
    'nature',
    'street photography',
    'experimental',
    'textures & patterns',
    'animals',
    'architecture & interior',
    'fashion & beauty',
    'film',
    'food & drink',
    'people',
    'spirituality',
    'business & work',
    'athletics',
    'health',
    'current events',
    'arts & culture'
  ],
  search: [
    'wallpaper',
  ]
};

const defaultImageParameters = {
  originalImage: false,
  format: 'jpg',
  quality: 100,
  sharp: 15,
  unsharpMask: 5,
  maskRadius: 1,
  fit: 'crop',
  crop: 'center',
  defaultSize: 2560,
  offset: 500,
};

const defaultApiParameters = {
  clientId: '',
  newApi: 'https://api.unsplash.com/photos/random',
  oldApi: 'https://source.unsplash.com/random',
};

const topics = new Map([
  ['wallpapers', { title: 'wallpapers', id: 'bo8jQKTaE0Y' }],
  ['renders', { title: '3d-renders', id: 'CDwuwXJAbEw' }],
  ['travel', { title: 'travel', id: 'Fzo3zuOHN6w' }],
  ['nature', { title: 'nature', id: '6sMVjTLSkeQ' }],
  ['street photography', { title: 'street-photography', id: 'xHxYTMHLgOc' }],
  ['experimental', { title: 'experimental', id: 'qPYsDzvJOYc' }],
  ['textures & patterns', { title: 'textures-patterns', id: 'iUIsnVtjB0Y' }],
  ['animals', { title: 'animals', id: 'Jpg6Kidl-Hk' }],
  ['architecture & interior', { title: 'architecture-interior', id: 'M8jVbLbTRws' }],
  ['fashion & beauty', { title: 'fashion-beauty', id: 'S4MKLAsBB74' }],
  ['film', { title: 'film', id: 'hmenvQhUmxM' }],
  ['food & drink', { title: 'food-drink', id: 'xjPR4hlkBGA' }],
  ['people', { title: 'people', id: 'towJZFskpGg' }],
  ['spirituality', { title: 'spirituality', id: '_8zFHuhRhyo' }],
  ['business & work', { title: 'business-work', id: 'aeu6rL-j6ew' }],
  ['athletics', { title: 'athletics', id: 'Bn-DjrcBrwo' }],
  ['health', { title: 'health', id: '_hb-dl4Q-4U' }],
  ['current events', { title: 'current-events', id: 'BJJMtteDJA4' }],
  ['arts & culture', { title: 'arts-culture', id: 'bDo48cUhwnY' }],
]);

// JavaScript Functions
function render() {
  prepareParams();
  updateParamsArrays();
  const parameters = {
    unsplashUrl: generateUnsplashUrl(),
    imageParameters: generateUnsplashImageParams(),
  };
  const htmlOutput = JSON.stringify(parameters);
  document.body.textContent = encodeURIComponent(htmlOutput);
}

function prepareParams() {
  params = {
    ...(searchParams || defaultSearchParameters),
    ...(imageParams || defaultImageParameters),
    ...(apiParams || defaultApiParameters),
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
  const url = params.clientId ? params.newApi : params.oldApi;
  return url + generateUnsplashQueryParams();
}

function generateUnsplashQueryParams() {
  let unsplashQueryParams;
  const queryParams = getQueryParams({
    topics: getTopic(),
    query: getSearch()
  });
  if (params.clientId) {
    unsplashQueryParams = `?${queryParams.toString()}`;
  } else {
    // Compress image to load it faster
    // We will use url without query in the Shortcut
    const sizeHack = 10;
    const topics = getQueryParam(queryParams, 'topics');
    const search = getQueryParam(queryParams, 'query');
    unsplashQueryParams = `/${sizeHack}x${sizeHack}?${topics}${search}`;
  }
  return encodeURI(unsplashQueryParams);
}

function getTopic() {
  if (!params.useTopic) return;
  const topicId = params.randomTopic ? getRandomFromArr(params.topics) : params.topics[0];
  const topic = topics.get(topicId);
  return params.clientId ? topic?.id : topic?.title;
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

function getQueryParam(queryParams, query) {
  return queryParams.has(query) ? queryParams.get(query) : '';
}

function generateUnsplashImageParams() {
  if (params.originalImage) return '';
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
  return Math.round((width > height ? width : height) * window.devicePixelRatio + offset) || defaultSize;
}

function getRandomFromArr(arr) {
  if (!arr || !arr.length) return;
  return arr[Math.floor(Math.random() * arr.length)];
}
