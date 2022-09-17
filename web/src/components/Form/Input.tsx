import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input(props: InputProps) {
  return (
    <input className="py-3 px-2 bg-zinc-900 rounded text-sm placeholder:text-zinc-500" {...props}/>
    
  )
}