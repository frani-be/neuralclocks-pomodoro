import React, { useState, useEffect } from 'react'

const Timer = () => {
    let workminutes = 25
    const [timeLeft, setTimeLeft] = useState(workminutes * 60)

    const [isActive, setIsActive] = useState(false)

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
            resetTimer()
        }

        return () => clearInterval(interval)
    }, [isActive, timeLeft])

    const toggleTimer = () => {
        setIsActive(!isActive)
    }

    const resetTimer = () => {
        setTimeLeft(workminutes * 60)
        setIsActive(false)
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
            <button onClick={toggleTimer}>
                {isActive ? 'Pause' : 'Start'}
            </button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}

export default Timer
