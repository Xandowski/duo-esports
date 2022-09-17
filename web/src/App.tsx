import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import './styles/main.css'
import logo from './assets/images/logo.svg'
import { api } from './services/api'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { CreateAdModal } from './components/CreateAdModal'

interface Games {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Games[]>()

  useEffect(() => {
    api.get('/games')
      .then(res => {
        setGames(res.data)
      })
  }, [])
  
  return (
    <div className="flex flex-col items-center mt-20 mb-32 max-w-[1344px] mx-auto">
      <img src={logo} className="" alt="logo" />

      <h1 className="text-6xl font-black text-white my-20">
        Seu <span className="bg-duo-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mb-8">
        {
          games && games.map((game) => {
            return(
              <GameBanner
                key={game.id}
                bannerUrl={game.bannerUrl}
                title={game.title}
                adsCount={game._count.ads}
              />
            )
          })
        }
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
