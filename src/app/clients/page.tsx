'use client'
import Calendar from '@/components/calendar'
import { indents } from '@/consts/globalStyles'
import { MONTHS, THEME_COLORS } from '@/consts/template'
import { useGlobalStore } from '@/store/globalStore'
import dayjs from 'dayjs'


export default function Clients() {
    // consts
    const daysOfMonth = (currentMonth: string) => dayjs(currentMonth).daysInMonth()
    // 
    // stores
    const currentThemeApp = useGlobalStore((state) => state.currentThemeApp)
    // 
    //components
    const listMonths =
        <div className={`flex flex-col gap-2 justify-end`}>
            {MONTHS.map((month) => <button key={month.LABEL} onClick={() => {
                const currentYear = dayjs().year().toString() + month.NUMBER_MONTH
                console.log(daysOfMonth(currentYear))
            }}>{month.LABEL}</button>)}
        </div>


    // 
    return (
        <div className={`flex flex-col min-h-screen  
        `}>
            <div className={`flex flex-col rounded-xl ${THEME_COLORS[currentThemeApp].button}  ${indents.mainContainer.margin} ${indents.mainContainer.padding}`}>
                <p>Clients</p>
                {listMonths}
            </div>

        </div>
    )
}
