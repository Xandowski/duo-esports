import { MagnifyingGlassPlus } from "phosphor-react"
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner() {
  return (
    <div className="pt-1 bg-duo-gradient rounded-lg w-[1200px]">
      <div className="w-full bg-[#2A2634] py-6 px-8 rounded-lg max-w-[1200px] border-t border-duo-gradient flex justify-between">
        <div>
          <strong className="text-2xl font-black text-white">Não encontrou seu duo?</strong>
          <p className="text-base text-zinc-400">Publique um anúncio para encontrar novos players!</p>
        </div>

        <Dialog.Trigger className="bg-violet-500 hover:bg-violet-600 px-4 py-3 rounded-md text-white text-base transition-colors flex gap-3 items-center">
          <MagnifyingGlassPlus size={24}/>
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  )
}