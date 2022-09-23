import "./styles/main.css";
import logoImg from "./assets/logo.svg";
import { MagnifyingGlassPlus } from "phosphor-react";
function App() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center my-20">
      <img src={logoImg} />
      <h1 className="text-white text-6xl font-black mt-16">
        Seu{" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-1.png" />
          <div className="w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-sm text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-2.png" />
          <div className="w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex Legends</strong>
            <span className="text-sm text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-3.png" />
          <div className="w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Counter Strike
            </strong>
            <span className="text-sm text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-4.png" />
          <div className="w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              World of Warcraft
            </strong>
            <span className="text-sm text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-5.png" />
          <div className="w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-sm text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-6.png" />
          <div className="w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-sm text-zinc-300">4 anúncios</span>
          </div>
        </a>
      </div>
      <div className="pt-1 mt-8 self-stretch rounded-lg overflow-hidden bg-nlw-gradient">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl font-black text-white block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className="px-4 py-3 bg-violet-500 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
