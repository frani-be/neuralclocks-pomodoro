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

    const progressElement = document.getElementById('progress')
    const updateProgressClass = (newClass) => {
        const classesToRemove = ["progress-work", "progress-short-break", "progress-long-break", "progress-default"]
        document.body.classList.remove(...classesToRemove)
        document.body.classList.add(newClass)
    }
    

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

    const toggleTimer = () => {
        setIsActive(!isActive)
    }
    
    const restartTimer = () => {
        setTimeLeft(workMinutes)
        setIsActive(false)
        setHasStarted(false)
        setCycle('work')
        setCyclesCompleted(0)
        updateProgressClass("progress-default")
    }

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
                    <span className='fs-1 font-monospace'>{formatTime()}</span>
                    <h3 className="fs-5">{hasStarted === true ? (cycle === 'work' ? 'Work Time' : (cycle === 'shortBreak' ? 'Short Break' : 'Long Break')) : "Ready to start"}</h3>
                </div>
            </div>  
            
            <h4 className="my-3">Cycles: {cyclesCompleted + '/' + numberOfCycles}</h4>

            <div className="d-flex justify-content-start gap-3">
                <ControlButton text={isActive ? 'Pause' : 'Play'} onClick={toggleTimer} disabled={false} buttonType="primary" label={isActive ? 'Pause timer' : 'Play timer'} />
                <ControlButton text='Restart' onClick={restartTimer} disabled={false} buttonType="danger" label="Restart timer" />
            </div>
        </>
    )
}

export default Timer
