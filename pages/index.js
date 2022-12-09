// Your YouTube API key
const API_KEY = "AIzaSyDfASpJPAzrhiYLRL5vyv4FAvAXdIdsgnk";

// The ID of the YouTube channel to search for videos
const CHANNEL_ID = "UC_CHANNEL_ID";

// The maximum number of videos to search for
const MAX_RESULTS = 10;

// An array to store the search results
const videos = [];

// Initialize the YouTube Data API client
const client = gapi.client.init({
  apiKey: API_KEY
});

// Search for videos on the specified channel
function searchVideos() {
  return client.youtube.search.list({
    part: "id",
    channelId: CHANNEL_ID,
    type: "video",
    maxResults: MAX_RESULTS
  });
}

// Get the details of the search results
function getVideoDetails(searchResults) {
  const videoIds = searchResults.map(result => result.id.videoId).join(",");
  return client.youtube.videos.list({
    part: "snippet,contentDetails",
    id: videoIds
  });
}

// Store the search results in the videos array
function storeResults(results) {
  videos.push(...results);
}

// Select a random video from the search results
function getRandomVideo() {
  const randomIndex = Math.floor(Math.random() * videos.length);
  return videos[randomIndex];
}

// Embed the selected video on the page
function playVideo(video) {
  const player = new YT.Player("player", {
    videoId: video.id,
    events: {
      onReady: function(event) {
        event.target.playVideo();
      }
    }
  });
}

// Initialize the YouTube Data API client and search for videos
gapi.load("client", () => {
  searchVideos()
    .then(getVideoDetails)
    .then(storeResults)
    .then(getRandomVideo)
    .then(playVideo);
});
