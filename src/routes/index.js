import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../components/Home'
import About from '../components/About'
import Services from '../components/Services'
import Resources from '../components/Resources'
import Contact from '../components/Contact'
const router = createBrowserRouter(
   [
    {
        path : '/',
        element : <App />,
        children : [
            {
                path : 'home',
                element : <Home />

            },
            {
                path :'about',
                element : <About />
            },
            {
              path : 'services',
              element : <Services />
            },
            {
                path : 'resources',
                element : <Resources />
            },
            {
                path : 'contact',
                element : <Contact />
            }
        ]
    }
   ]
)


export default router