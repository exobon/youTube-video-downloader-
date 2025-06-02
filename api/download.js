const express = require('express');
const ytdl = require('ytdl-core');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Route to get video info and download links
app.get('/api/download', async (req, res) => {
  const { url } = req.query;

  if (!url || !ytdl.validateURL(url)) {
    return res.status(400).json({ error: 'Invalid YouTube URL' });
  }

  try {
    const info = await ytdl.getInfo(url);
    const formats = info.formats.filter(
      (format) => format.hasVideo && format.hasAudio
    );

    const audioOnly = info.formats.find(
      (format) => format.hasAudio && !format.hasVideo
    );

    const videoOptions = formats
      .filter((format) => format.qualityLabel)
      .map((format) => ({
        quality: format.qualityLabel,
        url: format.url,
      }));

    res.json({
      title: info.videoDetails.title,
      thumbnail: info.videoDetails.thumbnails[0].url,
      videoOptions,
      audio: audioOnly ? audioOnly.url : null,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch video data' });
  }
});

// Vercel serverless function handler
module.exports = app;
