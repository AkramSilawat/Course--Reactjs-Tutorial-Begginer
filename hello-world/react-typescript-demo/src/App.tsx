import './App.css'
import { Greet } from './components/Greet'


function App() {
    return (
        <div clssName='App'>
            <Greet name='Akram' messageCount={20} isLoggedIn={false}/>
        </div>
    )
}

export default App