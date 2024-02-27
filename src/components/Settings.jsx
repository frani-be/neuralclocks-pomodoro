/**
 * The Settings component in a React application allows users to customize timer settings and reset
 * them to default values.
 * @returns The `Settings` component is being returned. It contains various input fields for setting
 * timer durations, number of cycles, and autoplay option, along with a button to reset settings to
 * default.
 */
import React from 'react'
import { useTimerSettings } from '../contexts/TimerSettingsContext'
import RangeInput from './RangeInput'
import NumberInput from './NumberInput'
import ControlButton from './ControlButton'
import Checkbox from './Checkbox'

const Settings = () => {
    const { settings, updateSettings, hasStarted, resetToDefaultSettings } = useTimerSettings()

    const handleAutoplayChange = (e) => {
        updateSettings('autoplay', e.target.checked)
    }
    
    return (
        <>
            <h2>Settings</h2>
            <RangeInput label="Work Duration" value={settings.workMinutes} onChange={(value) => updateSettings('workMinutes', value)} disabled={hasStarted} inputFor="work" />
            <RangeInput label="Short Break Duration" value={settings.shortBreakMinutes} onChange={(value) => updateSettings('shortBreakMinutes', value)} disabled={hasStarted} inputFor="short-break" />
            <RangeInput label="Long Break Duration" value={settings.longBreakMinutes} onChange={(value) => updateSettings('longBreakMinutes', value)} disabled={hasStarted} inputFor="long-break" />
            <NumberInput label="Number of Cycles" value={settings.numberOfCycles} onChange={(value) => updateSettings('numberOfCycles', value)} disabled={hasStarted} />
            <Checkbox label="Autoplay at the end of each cycle" checked={settings.autoplay} onChange={handleAutoplayChange} disabled={hasStarted} />
            <ControlButton text="Reset to Defaults" onClick={resetToDefaultSettings} disabled={hasStarted} buttonType="secondary" label="Reset settings to default" />
        </>
    )
}

export default Settings