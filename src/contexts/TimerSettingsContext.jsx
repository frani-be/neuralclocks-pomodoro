/**
 * This code snippet is creating a React context for managing timer settings in a React application.
 */
import React, { createContext, useState, useContext } from 'react'

const TimerSettingsContext = createContext()

export const useTimerSettings = () => useContext(TimerSettingsContext)

export const TimerSettingsProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false)
    const [hasStarted, setHasStarted] = useState(false)
    /**
     * The `defaultSettings` constant in the code snippet is defining an object that contains default
     * values for various timer settings used in a timer management context within a React application.
     * These settings include:
     * - `workMinutes`: The default duration for a work session, set to 25 minutes.
     * - `shortBreakMinutes`: The default duration for a short break between work sessions, set to 5
     * minutes.
     * - `longBreakMinutes`: The default duration for a long break after a certain number of work
     * cycles, set to 15 minutes.
     * - `numberOfCycles`: The default number of work cycles before a long break, set to 4 cycles.
     * - `autoplay`: A boolean flag indicating whether the timer should automatically start or not, set
     * to `true`.
     */
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

    /**
     * The `updateSettings` function is responsible for updating the state of timer settings in the context.
     * It takes a key-value pair as arguments and updates the corresponding setting.
     * The function ensures the following constraints:
     * - The 'shortBreakMinutes' cannot be set to a value greater than 'longBreakMinutes'.
     * If an attempt is made to set 'shortBreakMinutes' to such a value, it defaults to the current value of 'longBreakMinutes'.
     * - Similarly, 'longBreakMinutes' cannot be set to a value less than 'shortBreakMinutes'.
     * If an attempt is made to set 'longBreakMinutes' to such a value, it defaults to the current value of 'shortBreakMinutes'.
     */
    const updateSettings = (key, value) => {
        setSettings((prevSettings) => {
            const numericValue = Number(value)

            if (key === 'shortBreakMinutes' && numericValue > prevSettings.longBreakMinutes) {
                return { ...prevSettings, [key]: prevSettings.longBreakMinutes }
            } else if (key === 'longBreakMinutes' && numericValue < prevSettings.shortBreakMinutes) {
                return { ...prevSettings, [key]: prevSettings.shortBreakMinutes }
            }

            return { ...prevSettings, [key]: numericValue }
        })
    }

    return (
        <TimerSettingsContext.Provider value={{ settings, updateSettings, resetToDefaultSettings, isActive, setIsActive, hasStarted, setHasStarted }}>
            {children}
        </TimerSettingsContext.Provider>
    )
}
