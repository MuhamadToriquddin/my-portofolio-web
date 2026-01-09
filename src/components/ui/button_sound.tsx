import soundOn from "../../assets/icon/sound on.png";
import clickSound from "../../assets/audio/click.mp3"
import useSound from 'use-sound';
import soundOff from "../../assets/icon/sound off.png"

function ButtonSound() {
  const isPlaying = false
  const [play]=useSound(clickSound,{volume:0.2})
  const onClick = ()=>{
    play()
  }
  return (
    <button onClick={onClick}  className="border-4 border-button-fg  p-1  transition-colors">
      <img src={isPlaying?soundOn:soundOff} alt="Sound button" className="w-8 h-8 object-contain" />
    </button>
  );
}

export default ButtonSound;
