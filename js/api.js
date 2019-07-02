export async function sendQuery(artist, song) {
    
    let url = await fetch (`https://api.lyrics.ovh/v1/${artist}/${song}`);
    let response = await url.json();
    return {response};
}
