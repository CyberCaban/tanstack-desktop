export const TitleBar = ({ openedPrograms }: { openedPrograms: Program[] }) => {
  return (
    <nav className="text-primary bg-background flex h-5 max-h-5 max-w-full flex-row gap-0.5 overflow-x-scroll text-xs">
      {openedPrograms.map((p) => (
        <div className="cursor-pointer bg-black/20 px-1 text-center hover:bg-black/30">
          {p.title}
        </div>
      ))}
    </nav>
  )
}
