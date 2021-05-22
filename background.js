function search(data) {
  // More info: https://developer.chrome.com/docs/extensions/reference/contextMenus/#type-OnClickData
  const priberamQuery = `https://dicionario.priberam.org/${data.selectionText}`;
  const infopediaQuery = `https://www.infopedia.pt/dicionarios/lingua-portuguesa/${data.selectionText}`;

  chrome.tabs.create({ url: priberamQuery, active: true });
  chrome.tabs.create({ url: infopediaQuery, active: false });
}

// More info:
// - https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language
// - https://groups.google.com/a/chromium.org/g/chromium-extensions/c/dG6JeZGkN5w/m/61Ptejh0BAAJ
function setMenuOptionTitle() {
  const lang = navigator.language;
  let title;

  if (lang.startsWith('en')) {
    title = 'Search Priberam and Infopédia for "%s"';
  } else if (lang.startsWith('pt')) {
    title = 'Pesquisar no Priberam e na Infopédia por "%s"';
  } else {
    title = 'Search Priberam and Infopédia for "%s"';
  }

  return title;
}

// More info: https://stackoverflow.com/questions/44248143/cant-seem-to-get-chrome-contextmenus-onclicked-to-fire-in-chrome-extension
chrome.runtime.onInstalled.addListener(() => {
  const title = setMenuOptionTitle();

  chrome.contextMenus.create({
    id: 'calepino-priberam-infopedia',
    title: title,
    contexts: ['selection'],
    type: 'normal',
  });
});

chrome.contextMenus.onClicked.addListener(search);
