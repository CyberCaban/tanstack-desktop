import { createFileRoute } from '@tanstack/react-router'
import { Content, TitleBar } from '@/components/desktop'
import { useStore } from '@tanstack/react-store'
import { store } from '@/lib/programs-store'
import { FloatingLayer } from '@/components/desktop/FloatingLayer'

export const Route = createFileRoute('/desktop')({
  component: RouteComponent,
})

function RouteComponent() {
  const openedPrograms = useStore(store)

  return (
    <main className="flex h-full flex-col">
      <TitleBar openedPrograms={openedPrograms}></TitleBar>
      <Content></Content>
      <FloatingLayer />
    </main>
  )
}
