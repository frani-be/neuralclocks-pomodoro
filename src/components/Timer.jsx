import React, { useState, useEffect } from 'react'
import { useTimerSettings } from '../contexts/TimerSettingsContext'
import ControlButton from './ControlButton'

const Timer = () => {
    const { settings, isActive, setIsActive } = useTimerSettings()

    let workMinutes = settings.workMinutes * 60
    let shortBreakMinutes = settings.shortBreakMinutes * 60
    let longBreakMinutes = settings.longBreakMinutes * 60
    let numberOfCycles = settings.numberOfCycles

    const [timeLeft, setTimeLeft] = useState(workMinutes)
    const [cycle, setCycle] = useState('work')
    const [cyclesCompleted, setCyclesCompleted] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)

    const nextCycle = () => {
        if (cycle === 'work') {
            const newCyclesCompleted = cyclesCompleted + 1
            setCyclesCompleted(newCyclesCompleted)
            if (newCyclesCompleted % numberOfCycles === 0) {
                setCycle('longBreak')
                setTimeLeft(longBreakMinutes)
                return 
            } else {
                setCycle('shortBreak')
                setTimeLeft(shortBreakMinutes)
            }     
        } else {
            setCycle('work')
            setTimeLeft(workMinutes)
        }
    
        if (cyclesCompleted < numberOfCycles) {
            setIsActive(true)
        } else {
            resetTimer()
        }
    }

    useEffect(() => {

        if (!isActive && hasStarted) {
            return
        }

        if (!isActive) {
            setTimeLeft(workMinutes)
        }

        let interval = null

        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((timeLeft) => timeLeft - 1)
            }, 1000)
        } else if (!isActive && timeLeft > 0) {
            clearInterval(interval)
        } else if (timeLeft === 0) {
            clearInterval(interval)
            nextCycle()
        }

        return () => clearInterval(interval)
    }, [workMinutes, isActive, timeLeft])

    const toggleTimer = () => {
        setHasStarted(true)
        setIsActive(!isActive)
    }

    const resetTimer = () => {
        setTimeLeft(workMinutes)
        setIsActive(false)
        setHasStarted(false)
        setCycle('work')
        setCyclesCompleted(0)
    }

    const formatTime = () => {
        const minutes = Math.floor(timeLeft / 60)
        const seconds = timeLeft % 60
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    return (
        <div>
            <h2>Timer</h2>
            <div>{formatTime()}</div>
            <h3>{cycle === 'work' ? 'Work Time' : (cycle === 'shortBreak' ? 'Short Break' : 'Long Break')}</h3>
            <h4>Cycles: {cyclesCompleted + '/' + numberOfCycles}</h4>
            <ControlButton text={isActive ? 'Pause' : 'Play'} onClick={toggleTimer} />
            <ControlButton text='Reset' onClick={resetTimer} />
        </div>
    )
}

export default Timer
