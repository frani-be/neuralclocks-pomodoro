import React, { createContext, useState, useContext } from 'react'

const TimerSettingsContext = createContext()

export const useTimerSettings = () => useContext(TimerSettingsContext)

export const TimerSettingsProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false)
    const [hasStarted, setHasStarted] = useState(false)
    const defaultSettings = {
        workMinutes: 25,
        shortBreakMinutes: 5,
        longBreakMinutes: 15,
        numberOfCycles: 4,
        autoplay: true
    }

    const [settings, setSettings] = useState(defaultSettings)

    const resetToDefaultSettings = () => {
        setSettings(defaultSettings)
    }

    const updateSettings = (key, value) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [key]: value
        }))
    }

    return (
        <TimerSettingsContext.Provider value={{ settings, updateSettings, resetToDefaultSettings, isActive, setIsActive, hasStarted, setHasStarted }}>
            {children}
        </TimerSettingsContext.Provider>
    )
}
