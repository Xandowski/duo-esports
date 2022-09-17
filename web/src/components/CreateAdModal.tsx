import { GameController } from 'phosphor-react'
import { Input } from './Form/Input'
import * as Dialog from '@radix-ui/react-dialog'
import { InputCheckbox } from './Form/InputCheckbox'
import { SelectGame } from './Form/SelectGame'
import { ToggleGroupWeekDays } from './Form/ToggleGroupWeekDays'
import { FormEvent, useState } from 'react'
import { api } from '../services/api'

export function CreateAdModal() {
  const [weekDaysSelected, setweekDaysSelected] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
   

    try {
      await api.post(`/games/${data.game}/ads`, {
        name: data.name,
        yearPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDaysSelected.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel
      })
      
      alert('Criado com sucesso')
    } catch (error) {
      console.log(error)
      alert('Deu ruim')
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60"/>

      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[488px] shadow-black/25">
        <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>
        
          <form className="flex flex-col gap-y-4 mt-8" onSubmit={handleCreateAd}>
            <div className="flex flex-col gap-2">
              <label htmlFor="game" className="font-semibold">Qual o game?</label>
              <SelectGame/>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name">Seu nome (ou nickname)</label>
              <Input id="name" name="name" type="text" placeholder="Como te chamam dentro do game?"/>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                <Input id="yearsPlaying" name="yearsPlaying" type="text" placeholder="Tudo bem ser zero"/>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="discord">Qual o seu discord?</label>
                <Input id="discord" name="discord" type="text" placeholder="Usuário#0000"/>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="weekDays">Quando costuma jogar?</label>
                <ToggleGroupWeekDays
                  weekDaysSelected={weekDaysSelected}
                  setWeekDaysSelected={setweekDaysSelected}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="hourStar">Qual horário do dia?</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input id="hourStart" name="hourStart"type="time" placeholder="De" />
                  <Input id="hourEnd" name="hourEnd"type="time" placeholder="Até"/>
                </div>
              </div>
            </div>

            <label className="flex gap-2 mt-2 text-sm">
              <InputCheckbox
                useVoiceChannel={useVoiceChannel}
                setUseVoiceChannel={setUseVoiceChannel}
              />
              Costumo me conectar ao chat de voz
            </label>

            <footer className="flex justify-end gap-4 mt-4">
              <Dialog.Close type="button" className="bg-zinc-500 hover:bg-zinc-600 py-[14px] px-5 rounded-md font-semibold">Cancelar</Dialog.Close>
              <button className="flex items-center gap-3 bg-violet-500 py-[14px] hover:bg-violet-600 px-5 rounded-md font-semibold" type="submit">
                <GameController size={24}/>
                Encontrar Duo
              </button>
            </footer>
          </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}