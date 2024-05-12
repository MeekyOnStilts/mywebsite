const form = document.getElementById('extension-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const extensionId = document.getElementById('extension-id').value;
  const url = `https://chrome.google.com/webstore/detail/${extensionId}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      resultDiv.textContent = `The extension with ID ${extensionId} exists.`;
    } else {
      resultDiv.textContent = `The extension with ID ${extensionId} does not exist.`;
    }
  } catch (error) {
    resultDiv.textContent = `An error occurred: ${error.message}`;
  }
});