import { Store } from '@tanstack/store'
import React from 'react'

const placeholder: Program[] = [
  { title: '2131', id: 'abc', component: React.createElement('div') },
  { title: 'Hello world', id: 'asd', component: 'Hellow orld' },
] as const
export const store = new Store(placeholder as Program[])

export const openProgram = (p: ProgramIcon) => {
  store.setState((st) => [
    ...st,
    {
      id: Math.random().toString(16).slice(8),
      title: p.title,
      component: p.component,
    },
  ])
}
