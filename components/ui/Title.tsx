import { memo } from 'react'

interface TitleProps {
  children: string
}

const Title = memo(function Title(props: TitleProps) {
  return <h1 className="text-xl font-extrabold lg:text-[32px]">{props.children}</h1>
})

export default Title
