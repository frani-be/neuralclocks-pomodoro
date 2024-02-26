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
          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center align-items-lg-start gap-5 ">
            <section className="d-flex flex-column justify-content-center align-items-center py-3">
              <Timer />
            </section>
            <section className="d-flex flex-column justify-content-start align-items-start bg-light py-3 px-4 rounded-4">
              <Settings />
            </section>
          </div>
        </main>
      </TimerSettingsProvider>
    </>
  )
}

export default App
