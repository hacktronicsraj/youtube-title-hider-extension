function hideTitleOfCurrentVideo() {
  const videoTitle = document.querySelector('#above-the-fold #title h1.ytd-watch-metadata');
  if (videoTitle) {
    videoTitle.style.opacity = '0';
    videoTitle.style.userSelect = 'none';
  }
}

function showTitlesInSidebar() {
  const sidebarTitles = document.querySelectorAll('ytd-compact-video-renderer #video-title, ytd-grid-video-renderer #video-title');
  sidebarTitles.forEach(title => {
    title.style.opacity = '1';
    title.style.userSelect = 'auto';
  });
}

function handleTitles() {
  hideTitleOfCurrentVideo();
  showTitlesInSidebar();
}

// Run the function when the page loads
handleTitles();

// Use a MutationObserver to handle dynamic content loading
const observer = new MutationObserver(handleTitles);
observer.observe(document.body, { childList: true, subtree: true });

// Additionally, run the function when the URL changes (for single-page app navigation)
let lastUrl = location.href; 
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    handleTitles();
  }
}).observe(document, {subtree: true, childList: true});