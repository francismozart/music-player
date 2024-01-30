const serverURL = "http://127.0.0.1:3001";

async function requestToServer(endpoint: string) {
  const res = await fetch(`${serverURL}/${endpoint}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function requestSongs() {
  return await requestToServer("songs");
}

export async function requestSong(songId: string) {
  return await requestToServer(`song/${songId}`);
}

export async function requestRelated(relatedSongsIds: string) {
  return await requestToServer(`related/?songs=${relatedSongsIds}`);
}
