import React from 'react'
import { useTimerSettings } from '../contexts/TimerSettingsContext'
import RangeInput from './RangeInput'
import NumberInput from './NumberInput'

const Settings = () => {
    const { settings, updateSettings, isActive } = useTimerSettings()
    return (
        <div>
            <RangeInput label="Work Duration" value={settings.workMinutes} onChange={(value) => updateSettings('workMinutes', value)} disabled={isActive} />
            <RangeInput label="Short Break Duration" value={settings.shortBreakMinutes} onChange={(value) => updateSettings('shortBreakMinutes', value)} disabled={isActive} />
            <RangeInput label="Long Break Duration" value={settings.longBreakMinutes} onChange={(value) => updateSettings('longBreakMinutes', value)} disabled={isActive} />
            <NumberInput label="Number of Cycles" value={settings.numberOfCycles} onChange={(value) => updateSettings('numberOfCycles', value)} disabled={isActive} />
        </div>
    )
}

export default Settings