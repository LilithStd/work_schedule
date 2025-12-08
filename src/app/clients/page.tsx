'use client'
import Calendar from '@/components/calendar'
import { indents } from '@/consts/globalStyles'
import { THEME_COLORS } from '@/consts/template'
import { useGlobalStore } from '@/store/globalStore'


export default function Clients() {
    // stores
    const currentThemeApp = useGlobalStore((state) => state.currentThemeApp)
    // 
    return (
        <div className={`flex flex-col min-h-screen  
        `}>
            <div className={`rounded-xl ${THEME_COLORS[currentThemeApp].button}  ${indents.mainContainer.margin} ${indents.mainContainer.padding}`}>
                <p>Clients</p>
                <Calendar />
            </div>

        </div>
    )
}
