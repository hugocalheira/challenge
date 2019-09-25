export default async function Player(track, playing, setPlaying) {
    const { id, preview_url: url } = track;
    const audio = await new Audio(url);
    if (playing) {
        playing.audio.pause();
    }

    if (playing === false || audio.src !== playing.audio.src) {
        setPlaying({ id, audio });
        audio.play();
        audio.addEventListener('ended', () => setPlaying(false));
        return;
    }
    setPlaying(false);
}
