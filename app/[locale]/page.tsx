import { Greeting } from './greeting'

export default function Home() {
  return (
    <div className="h-[200vh]">
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <Greeting />
      </div>
    </div>
  )
}
