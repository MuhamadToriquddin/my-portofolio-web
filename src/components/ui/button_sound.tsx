import soundOn from "../../assets/icon/sound on.png";
import soundOf from "../../assets/icon/sound off.png";

function ButtonSound() {
  return (
    <button className="border-4 border-black p-1 hover:bg-gray-100 transition-colors">
      {/* Gunakan tag img dan perbesar ukurannya, misal w-8 (32px) */}
      <img src={soundOn} alt="Sound On" className="w-8 h-8 object-contain" />
    </button>
  );
}

export default ButtonSound;
