import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

interface InputCheckboxProps {
  useVoiceChannel: boolean
  setUseVoiceChannel: React.Dispatch<React.SetStateAction<boolean>>
}

export function InputCheckbox({useVoiceChannel, setUseVoiceChannel}: InputCheckboxProps) {
  return (
    <Checkbox.Root
      checked={useVoiceChannel}
      onCheckedChange={(checked) => {
        if(checked) {
          return setUseVoiceChannel(true)
        }
        return setUseVoiceChannel(false)
      }}
      className="w-6 h-6 p-1 rounded-md bg-zinc-900 ">
      <Checkbox.Indicator>
        <Check className="w-4 h-4  text-emerald-400" />
      </Checkbox.Indicator>
    </Checkbox.Root>
  )
}