document.getElementById('fetch-btn').addEventListener('click', async () => {
  const url = document.getElementById('url').value.trim();
  const resultDiv = document.getElementById('result');

  if (!url) {
    alert('Please enter a YouTube URL');
    return;
  }

  resultDiv.innerHTML = '<p>Fetching video data...</p>';

  try {
    const response = await fetch(`/api/download?url=${encodeURIComponent(url)}`);
    const data = await response.json();

    if (data.error) {
      resultDiv.innerHTML = `<p style="color:red">${data.error}</p>`;
      return;
    }

    resultDiv.innerHTML = `
      <h2>${data.title}</h2>
      <img src="${data.thumbnail}" alt="Thumbnail" style="width:100%; border-radius:10px;">
      <h3>Download Options:</h3>
      ${data.videoOptions
        .map(
          (option) => `
          <div class="video-option">
            <span>${option.quality}</span>
            <a href="${option.url}" target="_blank" download>Download</a>
          </div>`
        )
        .join('')}
      ${data.audio ? `
        <div class="video-option">
          <span>Audio (MP3)</span>
          <a href="${data.audio}" target="_blank" download>Download</a>
        </div>` : ''}
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p style="color:red">Failed to load video data. Try again!</p>`;
  }
});
