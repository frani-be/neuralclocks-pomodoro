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
          <div className="d-flex flex-column flex-xl-row justify-content-center align-items-center align-items-xl-start gap-5 ">
            <section id="timer" className="d-flex flex-column justify-content-center align-items-center py-3">
              <Timer />
            </section>
            <section id="settings" className="d-flex flex-column justify-content-start align-items-start bg-white shadow-sm pt-3 pb-4 px-4 rounded-4 col-xl-4 col-md-8 col-12 mb-5 mb-xl-0">
              <Settings />
            </section>
          </div>
        </main>
      </TimerSettingsProvider>
    </>
  )
}

export default App
