import './App.css'
import { TimerSettingsProvider } from './contexts/TimerSettingsContext'
import Settings from './components/Settings'
import Timer from './components/Timer'

function App() {

  return (
    <>
      <h1>Pomodoro Timer</h1>
      <TimerSettingsProvider>
        <Timer />
        <Settings />
      </TimerSettingsProvider>
    </>
  )
}

export default App
