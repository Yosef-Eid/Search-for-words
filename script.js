
document.getElementById('searchBox').addEventListener('input', function () {
  let searchValue = this.value;
  let textContentElement = document.getElementById('textContent');
  let originalText = textContentElement.textContent; // Changed from .value to .textContent to correctly get the text from a div element

  if (searchValue) {
    let regex = new RegExp(searchValue, 'gi');
    let highlightedText = originalText.replace(regex, function (match) {
      return `<span class="highlight">${match}</span>`;
    });
    textContentElement.innerHTML = highlightedText;
  } else {
    textContentElement.textContent = originalText; // Changed from .innerHTML to .textContent to avoid potential XSS vulnerabilities when resetting the content
  }
});