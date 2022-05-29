import React from 'react'
import { createRoot } from 'react-dom/client'

// @ts-ignore
import AppRouter from './core/AppRouter.tsx'

const container = document.getElementById('root')

// Create a root.
const root = createRoot(container)

// Initial render
root.render(<AppRouter name="React modular" />)
