<div align="center">
  <img src="https://img.shields.io/badge/YouTube_Video_Downloader-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="Project Banner" />
  <h1>📹 YouTube Video Downloader</h1>
  <p>A sleek, fast, and lightweight web app to download YouTube videos in multiple formats (MP4, MP3). Built with Node.js, Express, and ❤️</p>
  <a href="https://your-project.vercel.app">🌐 Live Demo</a> •
  <a href="#features">🚀 Features</a> •
  <a href="#installation">📦 Installation</a> •
  <a href="#contributing">🤝 Contributing</a> •
  <a href="#license">📄 License</a>
</div>

<br />

---

## 📸 Project Snapshot
<div align="center">
  <img src="https://via.placeholder.com/800x400.png?text=Screenshot+of+App" alt="App Screenshot" />
  <p><i>A glimpse of the YouTube Video Downloader in action!</i></p>
</div>

---

## 🚀 Features
- **⚡ Fast Downloads**: Optimized for speed using `ytdl-core`.
- **📹 Multiple Formats**: Download videos in 360p, 720p, 1080p (MP4).
- **🎵 Audio Extraction**: Get MP3 audio from any YouTube video.
- **📱 Responsive Design**: Works seamlessly on desktop and mobile.
- **🔒 Error Handling**: Alerts for invalid URLs or failed downloads.
- **💻 Serverless Deployment**: Hosted effortlessly on Vercel.

---

## 🛠️ Tech Stack
| **Technology** | **Description** |
| -------------- | --------------- |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) | Backend runtime for JavaScript |
| ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) | Minimalist web framework |
| ![ytdl-core](https://img.shields.io/badge/ytdl--core-FF0000?style=flat&logo=youtube&logoColor=white) | YouTube video processing library |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Structure and layout |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Styling and animations |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Frontend logic and interactivity |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) | Serverless deployment |

---

## 📦 Installation
Follow these steps to run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/youtube-downloader.git
   cd youtube-downloader
   <footer>
  <!-- Your existing footer content -->
  <button id="donate-btn" style="background: orange; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
    ☕️ Donate Bitcoin
  </button>

  <!-- Modal Popup -->
  <div id="donate-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); justify-content: center; align-items: center;">
    <div style="background: white; padding: 20px; border-radius: 10px; text-align: center; width: 90%; max-width: 400px;">
      <h3>Support My Work ❤️</h3>
      <p>Scan the QR code or copy the address:</p>
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=bitcoin:YOUR_BITCOIN_ADDRESS?label=Donation&message=Thanks%20for%20supporting%20my%20work!" 
           alt="Bitcoin QR Code" 
           style="width: 200px; margin: 10px auto; border: 1px solid #ddd; border-radius: 10px;">
      <p><code id="btc-address">YOUR_BITCOIN_ADDRESS</code></p>
      <button onclick="navigator.clipboard.writeText('YOUR_BITCOIN_ADDRESS').then(() => alert('Address copied!'))" 
              style="background: #007bff; color: white; border: none; padding: 10px; border-radius: 5px;">
        Copy Address
      </button>
      <br /><br />
      <a href="bitcoin:YOUR_BITCOIN_ADDRESS?label=Donation&message=Thanks%20for%20supporting%20my%20work!" 
         target="_blank" 
         style="text-decoration: none; color: orange;">
        Open in Wallet
      </a>
      <br /><br />
      <button onclick="document.getElementById('donate-modal').style.display='none'" 
              style="background: red; color: white; border: none; padding: 10px; border-radius: 5px;">
        Close
      </button>
    </div>
  </div>

  <script>
    document.getElementById('donate-btn').onclick = function() {
      document.getElementById('donate-modal').style.display = 'flex';
    };
  </script>
</footer>
