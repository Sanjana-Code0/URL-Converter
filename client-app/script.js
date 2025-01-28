document.getElementById('shortenBtn').addEventListener('click', async () => {
    const urlInput = document.getElementById('urlInput').value;
  
    if (!urlInput) {
      alert("Please enter a URL");
      return;
    }
  
    try {
      // Send POST request to the server
      const response = await fetch('http://localhost:5001', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalUrl: urlInput }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Show the shortened URL
        document.getElementById('result').style.display = 'block';
        document.getElementById('shortenedUrl').textContent = data.shortUrl;
        document.getElementById('shortenedUrl').href = data.shortUrl;
      } else {
        alert(data.error || 'Something went wrong!');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  });
  