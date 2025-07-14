import { openProgram } from '@/lib/programs-store'
import { AirVentIcon } from 'lucide-react'
import { Slider } from '../ui/slider'

const programIcons: ProgramIcon[] = [
  {
    title: '123123',
    component: <Slider />,
  },
  {
    title: 'zone',
    component: <circle width={10} height={10} color="red" />,
  },
  {
    title: 'asdf',
    component: <Slider />,
  },
  {
    title: 'zxc󱧞',
    component: <Slider />,
  },
] as const

export const Content = (_props: {}) => {
  return (
    <div className="desktop-icons flex h-3/5 flex-col flex-wrap content-start gap-2 p-3">
      {[...programIcons, ...programIcons, ...programIcons, ...programIcons].map(
        (icon) => {
          return (
            <section
              key={icon.title}
              className="flex w-20 flex-col items-center bg-black/30 p-2"
              onDoubleClick={() => openProgram(icon)}
            >
              <AirVentIcon />
              {icon.title}
            </section>
          )
        },
      )}
    </div>
  )
}
