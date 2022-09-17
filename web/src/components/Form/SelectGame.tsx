import * as Select from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

interface Games {
  id: string
  title: string
}

export function SelectGame() {
  const [games, setGames] = useState<Games[]>()

  useEffect(() => {
    api.get('/games')
      .then(res => {
        setGames(res.data)
      })
  }, [])

  return (
    <Select.Root name="game">
      <Select.Trigger  className="inline-flex items-center justify-between rounded px-[15px] text-[0.813rem]  h-9 bg-zinc-900 text-zinc-500 gap-[5px] shadow-md hover:bg-[#17171a]" aria-label="Jogo">
        <Select.Value placeholder="Selecione um jogo..."/>
        <Select.SelectIcon>
          <ChevronDownIcon className="text-violet-500"/>
        </Select.SelectIcon>
      </Select.Trigger>
      
      <Select.Portal  className="w-[410px] translate-y-[40px] translate-x-3 text-zinc-500">
        <Select.Content className="bg-zinc-900 rounded-md shadow-xl">
          <Select.ScrollUpButton>
            <ChevronUpIcon/>
          </Select.ScrollUpButton>
          <Select.Viewport className="p-1">
            <Select.Group>
              {games && games.map((game) => {
                return(
                  <Select.Item id="game" key={game.id} value={game.id} className="flex items-center h-6 relative select-none hover:bg-violet-500 rounded hover:text-white pl-6 py-4">
                    <Select.ItemText >{game.title}</Select.ItemText>
                    <Select.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
                      <CheckIcon />
                    </Select.ItemIndicator>
                  </Select.Item>
                )
              })}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}