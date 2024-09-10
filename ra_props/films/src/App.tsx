import { Stars } from './components/Stars/Stars'
import './App.css'

const count: number = 1;

function App() {

    return (
        <div className='App'>
            <Stars count={count} />
        </div>
    )
}

export default App
