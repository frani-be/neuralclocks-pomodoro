import React, { useState, useEffect } from 'react'
import { useTimerSettings } from '../contexts/TimerSettingsContext'
import ControlButton from './ControlButton'

const Timer = () => {
    const { settings } = useTimerSettings()

    let workMinutes = settings.workMinutes * 60
    let shortBreakMinutes = settings.shortBreakMinutes * 60
    let longBreakMinutes = settings.longBreakMinutes * 60
    let numberOfCycles = settings.numberOfCycles

    const [timeLeft, setTimeLeft] = useState(workMinutes)
    const [isActive, setIsActive] = useState(false)
    const [cycle, setCycle] = useState('work')
    const [cyclesCompleted, setCyclesCompleted] = useState(0)

    const nextCycle = () => {
        if (cycle === 'work') {
            const newCyclesCompleted = cyclesCompleted + 1
            setCyclesCompleted(newCyclesCompleted)
            const isLongBreak = newCyclesCompleted % numberOfCycles === 0
            setCycle(isLongBreak ? 'longBreak' : 'shortBreak')
            setTimeLeft(isLongBreak ? longBreakMinutes : shortBreakMinutes)
        } else {
            setCycle('work')
            setTimeLeft(workMinutes)
        }
    }

    useEffect(() => {
        let interval = null

        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((timeLeft) => timeLeft - 1)
            }, 1000)
        } else if (!isActive && timeLeft > 0) {
            clearInterval(interval)
        } else if (timeLeft === 0) {
            clearInterval(interval)
            if (cyclesCompleted < numberOfCycles) {
                nextCycle()
                setIsActive(true)
            } else if (cyclesCompleted === numberOfCycles) {
                resetTimer();
            }
        }

        return () => clearInterval(interval)
    }, [isActive, timeLeft, cycle, cyclesCompleted])

    const toggleTimer = () => {
        setIsActive(!isActive)
    }

    const resetTimer = () => {
        setTimeLeft(workMinutes)
        setIsActive(false)
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
