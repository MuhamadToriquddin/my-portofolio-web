import soundOn from "../../assets/icon/sound on.png";


function ButtonSound() {
  return (
    <button className="border-4 hover:border-black hover:bg-gray-100  p-1 border-slate-500 transition-colors">
      {/* Gunakan tag img dan perbesar ukurannya, misal w-8 (32px) */}
      <img src={soundOn} alt="Sound On" className="w-8 h-8 object-contain" />
    </button>
  );
}

export default ButtonSound;
