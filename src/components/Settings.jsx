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
        <div>
            <ControlButton text="Reset to Defaults" onClick={resetToDefaultSettings} disabled={hasStarted} />
            <RangeInput label="Work Duration" value={settings.workMinutes} onChange={(value) => updateSettings('workMinutes', value)} disabled={hasStarted} />
            <RangeInput label="Short Break Duration" value={settings.shortBreakMinutes} onChange={(value) => updateSettings('shortBreakMinutes', value)} disabled={hasStarted} />
            <RangeInput label="Long Break Duration" value={settings.longBreakMinutes} onChange={(value) => updateSettings('longBreakMinutes', value)} disabled={hasStarted} />
            <NumberInput label="Number of Cycles" value={settings.numberOfCycles} onChange={(value) => updateSettings('numberOfCycles', value)} disabled={hasStarted} />
            <Checkbox label="Autoplay on Cycle End" checked={settings.autoplay} onChange={handleAutoplayChange} disabled={hasStarted} />
        </div>
    )
}

export default Settings