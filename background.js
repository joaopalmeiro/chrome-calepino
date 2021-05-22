function search(data) {
  // More info: https://developer.chrome.com/docs/extensions/reference/contextMenus/#type-OnClickData
  const priberamQuery = `https://dicionario.priberam.org/${data.selectionText}`;
  const infopediaQuery = `https://www.infopedia.pt/dicionarios/lingua-portuguesa/${data.selectionText}`;

  chrome.tabs.create({ url: priberamQuery, active: true });
  chrome.tabs.create({ url: infopediaQuery, active: false });
}

// More info: https://stackoverflow.com/questions/44248143/cant-seem-to-get-chrome-contextmenus-onclicked-to-fire-in-chrome-extension
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'calepino-priberam-infopedia',
    title: 'Search Priberam and Infopédia for "%s"',
    contexts: ['selection'],
    type: 'normal',
  });
});

chrome.contextMenus.onClicked.addListener(search);
