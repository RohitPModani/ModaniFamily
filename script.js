let historyStack = [];

function showPerson(personId) {
  historyStack.push(document.querySelector('.page.visible'));
  showPage(personId);
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('visible'));
    document.getElementById(pageId).classList.add('visible');
  }

function goBack() {
  if (historyStack.length) {
    const previousPage = historyStack.pop();
    document.querySelectorAll('.page').forEach(page => page.classList.remove('visible'));
    previousPage.classList.add('visible');
  }
}

// Initialize landing page
showPage('landing-page');
