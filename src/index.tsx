import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import { Main, About, Contacts } from '@/pages'
import './styles/index.scss'

let router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/about',
        element: (
          <Suspense fallback={'Loading...'}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contacts',
        element: (
          <Suspense fallback={'Loading...'}>
            <Contacts />
          </Suspense>
        ),
      },
    ],
  },
])

const root = document.getElementById('root')

if (!root) {
  throw new Error('root not found')
}

const container = createRoot(root)

container.render(<RouterProvider router={router} />)
