import 'normalize.css'
import './index.css'
import { createRoot } from 'react-dom/client'

const Index = () => <h1>Hello, world!</h1>

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('No root element found')
const root = createRoot(rootEl)
root.render(<Index />)
