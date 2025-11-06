'use client'
import { useGlobalStore } from '@/store/globalStore'
import React from 'react'
import MoonIcons from '../../public/icons/moon.svg'
import SunIcons from '../../public/icons/sun.svg'
import { THEME } from '@/consts/template'

// interface ThemmSwitcherProps {

// }

export default function ThemeSwitcher() {
    const setCurrentTheme = useGlobalStore((state) => state.setCurrentTheme)
    const currentTheme = useGlobalStore((state) => state.currentThemeApp)
    return (
        <div className="flex justify-center items-center p-2 shadow-lg">
            {currentTheme === THEME.LIGHT ? <MoonIcons onClick={() => { setCurrentTheme(THEME.DARK) }} /> : <SunIcons onClick={() => { setCurrentTheme(THEME.LIGHT) }} />}
        </div>
    )
}
