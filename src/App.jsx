import './App.css'
import { TimerSettingsProvider } from './contexts/TimerSettingsContext'
import Settings from './components/Settings'
import Timer from './components/Timer'

function App() {

  return (
    <>
      <header className="row mt-3 mb-5">
        <div className="container">
          <h1 className="text-center">Pomodoro Timer</h1>
        </div>
      </header>
      <TimerSettingsProvider>
        <main className="container">
          <div className="row g-5">
            <section className="col-12 col-md-6">
              <Timer />
            </section>
            <section className="col-12 col-md-6">
              <Settings />
            </section>
          </div>
        </main>
      </TimerSettingsProvider>
    </>
  )
}

export default App
