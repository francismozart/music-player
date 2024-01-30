import s from "./playbutton.module.css";
import PlayArrow from "@mui/icons-material/PlayArrow";
import Pause from "@mui/icons-material/Pause";

interface IPlayButton {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const DEFAULT_ICON_STYLE = {
  width: 32,
  height: 32,
  color: "#000",
};

export function PlayButton({ isPlaying, setIsPlaying }: IPlayButton) {
  return (
    <button className={s.playButton} onClick={() => setIsPlaying(!isPlaying)}>
      {isPlaying ? (
        <Pause sx={DEFAULT_ICON_STYLE} />
      ) : (
        <PlayArrow sx={DEFAULT_ICON_STYLE} />
      )}
    </button>
  );
}
