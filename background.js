// Списки для блокировки (можно расширить)
const adNetworks = [
  "doubleclick.net",
  "googleadservices.com",
  "googlesyndication.com",
  "adsystem.com"
];

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = details.url;
    if (adNetworks.some(domain => url.includes(domain))) {
      return { cancel: true }; // Блокируем
    }
    return { cancel: false };
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
