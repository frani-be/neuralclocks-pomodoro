import './App.css'
import { TimerSettingsProvider } from './contexts/TimerSettingsContext'
import Settings from './components/Settings'
import Timer from './components/Timer'

function App() {

  return (
    <>
      <header className="row">
        <div className="container">
          <h1 className="text-center mt-5 mb-4">Pomodoro Timer</h1>
        </div>
      </header>
      <TimerSettingsProvider>
        <main className="container my-5">
          <div className="d-flex flex-column flex-xl-row justify-content-center align-items-center align-items-xl-start gap-5 ">
            <section id="timer" className="d-flex flex-column justify-content-center align-items-center pt-4 gap-3">
              <Timer />
            </section>
            <section id="settings" className="d-flex flex-column justify-content-start align-items-start bg-white shadow-sm pt-4 pb-5 px-4 rounded-4 col-xl-4 col-md-8 col-12 mb-5 mb-xl-0 gap-3">
              <Settings />
            </section>
          </div>
        </main>
      </TimerSettingsProvider>
    </>
  )
}

export default App
