import { motion, useDragControls } from 'motion/react'

export const ProgramWindow = ({ program }: { program: Program }) => {
  const dragControls = useDragControls()

  function startDrag(event: React.PointerEvent) {
    dragControls.start(event)
  }
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragControls={dragControls}
      dragListener={false}
      key={program.id}
      className="absolute top-1/2 left-1/2 h-30 min-h-[70px] w-30 min-w-[120px] resize overflow-auto bg-blue-600"
    >
      <div
        className="window-decoration border-primary cursor-grab border px-2 select-none"
        onPointerDown={startDrag}
      >
        {program.title}
      </div>
      <div className="resize">{program.component}</div>
    </motion.div>
  )
}
