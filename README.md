# chrome-calepino (Calepino)

A Chrome extension to search for selected text on [Priberam](https://dicionario.priberam.org/) and [Infopédia](https://www.infopedia.pt/) (online Portuguese dictionaries).

## References

- [priberam-chrome](https://github.com/rfer/priberam-chrome).
- [Getting started](https://developer.chrome.com/docs/extensions/mv3/getstarted/).
- [API Reference](https://developer.chrome.com/docs/extensions/reference/):
  - [chrome.contextMenus](https://developer.chrome.com/docs/extensions/reference/contextMenus/).
  - [chrome.tabs](https://developer.chrome.com/docs/extensions/reference/tabs/).
  - [chrome.i18n](https://developer.chrome.com/docs/extensions/reference/i18n/) (not available in service workers).
- [Manage events with service workers](https://developer.chrome.com/docs/extensions/mv3/background_pages/).
- [Calepino](https://dicionario.priberam.org/calepino).
- [Supported locales](https://developer.chrome.com/docs/webstore/i18n/#choosing-locales-to-support).

## Notes

- `chrome://extensions/`.
- [chrome.i18n.getMessage example for v3 manifest?](https://github.com/GoogleChrome/chrome-extensions-samples/issues/546) (open) issue.
- To test translations (macOS): `System Preferences` > `Language & Region` > `Apps` > `Google Chrome` (add it if you don't have it on the list).
