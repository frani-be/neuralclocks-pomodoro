import './App.css'
import { TimerSettingsProvider } from './contexts/TimerSettingsContext'
import Settings from './components/Settings'
import Timer from './components/Timer'

function App() {

  return (
    <>
      <TimerSettingsProvider>
        <div className="container">
          <div className="row mt-3 mb-5">
            <h1 className="text-center">Pomodoro Timer</h1>
          </div>
          <div className="row g-5">
            <div className="col-12 col-md-6">
              <Timer />
            </div>
            <div className="col-12 col-md-6">
              <Settings />
            </div>
          </div>
        </div>
      </TimerSettingsProvider>
    </>
  )
}

export default App
