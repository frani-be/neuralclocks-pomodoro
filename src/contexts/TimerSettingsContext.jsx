import React, { createContext, useState, useContext } from 'react'

const TimerSettingsContext = createContext()

export const useTimerSettings = () => useContext(TimerSettingsContext)

export const TimerSettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState({
        workMinutes: 25,
        shortBreakMinutes: 5,
        longBreakMinutes: 15,
        numberOfCycles: 4
    })

    const updateSettings = (key, value) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [key]: value
        }))
    }

    return (
        <TimerSettingsContext.Provider value={{ settings, updateSettings }}>
            {children}
        </TimerSettingsContext.Provider>
    )
}
