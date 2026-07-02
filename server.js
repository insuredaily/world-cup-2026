import express from 'express';
import cors from 'cors';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const app = express();
app.use(cors());

// Cache the token so we don't spam the site
let cachedUrl = null;
let lastFetchTime = 0;
const CACHE_DURATION = 1000 * 60 * 60 * 2; // 2 hours

// The SBS page URL you want to extract the video from
// (You will need to replace this with the actual URL)
const SBS_VIDEO_URL = "YOUR_SBS_ON_DEMAND_VIDEO_URL_HERE";

app.get('/api/stream-url', async (req, res) => {
    const now = Date.now();

    // Return cached URL if it's still valid
    if (cachedUrl && (now - lastFetchTime) < CACHE_DURATION) {
        return res.json({ url: cachedUrl });
    }

    try {
        console.log("Fetching new stream URL using yt-dlp...");
        // yt-dlp -g prints the direct stream URL(s)
        const { stdout } = await execAsync(`yt-dlp -g "${SBS_VIDEO_URL}"`);
        
        const urls = stdout.trim().split('\n');
        // Usually, the first one is the video stream, or it's a single master playlist
        const streamUrl = urls[0];

        if (streamUrl) {
            cachedUrl = streamUrl;
            lastFetchTime = now;
            return res.json({ url: cachedUrl });
        } else {
            throw new Error("No URL returned from yt-dlp");
        }
    } catch (error) {
        console.error("Error fetching stream URL:", error);
        res.status(500).json({ error: "Failed to fetch stream URL" });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Token refresh server running on http://localhost:${PORT}`);
    console.log(`Don't forget to set SBS_VIDEO_URL in server.js!`);
});
