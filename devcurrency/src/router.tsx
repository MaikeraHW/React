import { createBrowserRouter } from 'react-router-dom'

import { Layout } from './components/Layout'

import { About } from './pages/about'
import { Home } from './pages/home'
import { NotFound } from './pages/notfound'

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
            path: '/',
            element: <Home/>
            },
            {
                path: '/about/:cripto',
                element: <About/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
])

export {router}