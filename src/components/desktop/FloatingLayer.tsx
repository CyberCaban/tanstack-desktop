import { store } from '@/lib/programs-store'
import { useStore } from '@tanstack/react-store'
import { ProgramWindow } from './ProgramWindow'

export const FloatingLayer = (_props: {}) => {
  const openedPrograms = useStore(store)
  return (
    <div className="floating-layer">
      {openedPrograms.map((p) => {
        return <ProgramWindow program={p} />
      })}
    </div>
  )
}
