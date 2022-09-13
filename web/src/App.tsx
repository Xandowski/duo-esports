import './styles/main.css'
import logo from './assets/images/logo.svg'
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {
  return (
    <div className="flex flex-col items-center mt-20 mb-32 max-w-[1344px] mx-auto">
      <img src={logo} className="" alt="logo" />

      <h1 className="text-6xl font-black text-white my-20">
        Seu <span className="bg-duo-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mb-8">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-1.png" alt="game 1" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white">League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-2.png" alt="game 2" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white">Apex Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-3.png" alt="game 3" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white">Counter-Strike</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-4.png" alt="game 4" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white">World of Warcraft</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-5.png" alt="game 5" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white">Dota 2</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-6.png" alt="game 6" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white">Fortnite</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-duo-gradient rounded-lg w-[1200px]">
        <div className="w-full bg-[#2A2634] py-6 px-8 rounded-lg max-w-[1200px] border-t border-duo-gradient flex justify-between">
          <div>
            <strong className="text-2xl font-black text-white">Não encontrou seu duo?</strong>
            <p className="text-base text-zinc-400">Publique um anúncio para encontrar novos players!</p>
          </div>

          <button className="bg-violet-500 hover:bg-violet-600 px-4 py-3 rounded-md text-white text-base transition-colors flex gap-3 items-center">
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
