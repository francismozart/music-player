const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3001;
const payload = JSON.parse(
  fs.readFileSync("./server-payload.json", { encoding: "utf8" })
);
const SERVER_URL = `http://${hostname}:${port}`;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Max-Age", 2592000);

  if (req.url === "/songs") {
    const songs = payload?.songs.map((i) => ({
      id: i.id,
      song: i.song,
    }));
    res.end(JSON.stringify({ songs }));
    return;
  }

  if (req.url.includes("/song")) {
    const artistId = req.url.split("/")[2];
    const artist = payload?.songs?.find((artist) => artist.id == artistId);
    res.end(JSON.stringify(artist));
    return;
  }

  if (req.url.includes("/related")) {
    const url = new URL(`${SERVER_URL}${req.url}`);
    const searchParams = url.searchParams;
    const relatedSongsIds = searchParams.get("songs").split(":");

    const relatedSongs = payload?.songs?.filter((song) =>
      relatedSongsIds.includes(song.id.toString())
    );
    res.end(JSON.stringify(relatedSongs));
    return;
  }

  res.end(JSON.stringify([]));
});

server.listen(port, hostname, () => {
  console.log(`Server running at ${SERVER_URL}/`);
});
