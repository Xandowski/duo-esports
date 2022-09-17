import * as ToggleGroup from '@radix-ui/react-toggle-group'

interface ToggleGroupWeekDaysProps {
  weekDaysSelected: string[]
  setWeekDaysSelected: React.Dispatch<React.SetStateAction<string[]>>
}

export function ToggleGroupWeekDays({weekDaysSelected, setWeekDaysSelected}:ToggleGroupWeekDaysProps) {
  const weekDays = [
    {"id": "0", "week": "D"},
    {"id": "1", "week": "S"},
    {"id": "2", "week": "T"},
    {"id": "3", "week": "Q"},
    {"id": "4", "week": "Q"},
    {"id": "5", "week": "S"},
    {"id": "6", "week": "S"},
  ]

  return (
    <ToggleGroup.Root
      type='multiple' 
      className="grid grid-cols-4 gap-2"
      value={weekDaysSelected}
      onValueChange={setWeekDaysSelected}
    >
      { weekDays && weekDays.map((weekDay) => {
        return(
          <ToggleGroup.Item
            className={`font-bold p-2 rounded ${weekDaysSelected.includes(weekDay.id) ? 'bg-violet-500' : 'bg-zinc-900'}`}
            key={weekDay.id} 
            value={weekDay.id} 
          >
            {weekDay.week}
          </ToggleGroup.Item>
        )
      })}
    </ToggleGroup.Root>
  )
}