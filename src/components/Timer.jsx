/**
 * The Timer component in this React application manages a countdown timer with customizable work,
 * short break, and long break durations, along with control buttons for starting, pausing, and
 * restarting the timer.
 * @returns The `Timer` component is being returned. It contains JSX elements for displaying the timer,
 * progress bar, control buttons, and cycle information based on the timer settings and state
 * variables.
 */
import React, { useState, useEffect } from 'react'
import { useTimerSettings } from '../contexts/TimerSettingsContext'
import ControlButton from './ControlButton'
import CircularProgress from './CircularProgress'
import soundFile from '../assets/click.mp3'

const Timer = () => {
    const { settings, isActive, setIsActive, hasStarted, setHasStarted } = useTimerSettings()

    let workMinutes = settings.workMinutes * 60
    let shortBreakMinutes = settings.shortBreakMinutes * 60
    let longBreakMinutes = settings.longBreakMinutes * 60
    let numberOfCycles = settings.numberOfCycles

    const [timeLeft, setTimeLeft] = useState(workMinutes)
    const [cycle, setCycle] = useState('work')
    const [cyclesCompleted, setCyclesCompleted] = useState(0)

    const totalTime = cycle === 'work' ? workMinutes : cycle === 'shortBreak' ? shortBreakMinutes : longBreakMinutes
    const progress = (timeLeft / totalTime) * 100

    /**
    * The code snippet you provided is defining a function `updateProgressClass` that is intended to
    * update the CSS class of the `body` element based on the `newClass` parameter passed to it. 
    */
    const updateProgressClass = (newClass) => {
        const classesToRemove = ["progress-work", "progress-short-break", "progress-long-break", "progress-default"]
        document.body.classList.remove(...classesToRemove)
        document.body.classList.add(newClass)
    }

    /**
     * The `nextCycle` function in JavaScript React manages the progression of work, short breaks, and
     * long breaks based on the number of cycles completed and user settings.
     */
    const nextCycle = () => {
        if (cycle === 'work') {
            const newCyclesCompleted = cyclesCompleted + 1
            setCyclesCompleted(newCyclesCompleted)
            if (newCyclesCompleted % numberOfCycles === 0) {
                setCycle('longBreak')
                setTimeLeft(longBreakMinutes)
                updateProgressClass("progress-long-break")
            } else {
                setCycle('shortBreak')
                setTimeLeft(shortBreakMinutes)
                updateProgressClass("progress-short-break")
            }
        } else {
            setCycle('work')
            setTimeLeft(workMinutes)
            updateProgressClass("progress-work")
        }

        if (cyclesCompleted < numberOfCycles) {
            if (settings.autoplay) {
                setIsActive(true)
            } else {
                setIsActive(!isActive)
            }
        } else {
            restartTimer()
        }
    }

    /**
    * The `useEffect` hook in the provided code snippet is responsible for managing the timer
    * functionality within the `Timer` component in the React application. 
    */
    useEffect(() => {
        if (!isActive && hasStarted) {
            return
        }

        if (!isActive) {
            setTimeLeft(workMinutes)
        }

        let interval = null

        if (isActive && timeLeft > 0) {
            if (!hasStarted) {
                updateProgressClass("progress-work")
                setHasStarted(true)
            }
            interval = setInterval(() => {
                setTimeLeft((timeLeft) => timeLeft - 1)
            }, 1000)
        } else if (!isActive && timeLeft > 0) {
            clearInterval(interval)
        } else if (timeLeft === 0) {
            clearInterval(interval)
            nextCycle()
            const audio = new Audio(soundFile);
            audio.play();
        }

        return () => clearInterval(interval)
    }, [workMinutes, isActive, timeLeft, hasStarted])

    /**
     * The function `toggleTimer` toggles the value of `isActive` in a React component.
     */
    const toggleTimer = () => {
        setIsActive(!isActive)
    }

    /**
     * The `restartTimer` function resets the timer to its initial state for a work cycle in a React
     * application.
     */
    const restartTimer = () => {
        setTimeLeft(workMinutes)
        setIsActive(false)
        setHasStarted(false)
        setCycle('work')
        setCyclesCompleted(0)
        updateProgressClass("progress-default")
    }

    /**
     * The `formatTime` function takes a time value in seconds and returns a formatted string in the
     * format "mm:ss".
     * @returns The `formatTime` function returns a formatted time string in the format "mm:ss" where
     * mm represents minutes and ss represents seconds. The function pads the minutes and seconds with
     * a leading '0' if they are less than 10.
     */
    const formatTime = () => {
        const minutes = Math.floor(timeLeft / 60)
        const seconds = timeLeft % 60
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    return (
        <>
            <h2>Timer</h2>

            <div className="position-relative d-inline-block" id="progress">
                <CircularProgress size={300} progress={progress} />
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <span className='fs-1 font-monospace' data-test="timer-value">{formatTime()}</span>
                    <h3 className="fs-5">{hasStarted === true ? (cycle === 'work' ? 'Work Time' : (cycle === 'shortBreak' ? 'Short Break' : 'Long Break')) : "Ready to start"}</h3>
                </div>
            </div>

            <h4>Cycles: {cyclesCompleted + '/' + numberOfCycles}</h4>

            <div className="d-flex justify-content-start gap-3">
                <ControlButton text={isActive ? 'Pause' : 'Play'} onClick={toggleTimer} disabled={false} buttonType="primary" label={isActive ? 'Pause timer' : 'Play timer'} />
                <ControlButton text='Restart' onClick={restartTimer} disabled={false} buttonType="danger" label="Restart timer" />
            </div>
        </>
    )
}

export default Timer
