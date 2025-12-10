'use client'
import { indents } from '@/consts/globalStyles'
import { MONTHS, THEME_COLORS } from '@/consts/template'
import { useGlobalStore } from '@/store/globalStore'
import dayjs from 'dayjs'
import { useState } from 'react'


export default function Clients() {
    // state
    const [days, setDays] = useState<number[]>([]);
    const [isOpen, setIsOpen] = useState(false)
    const [chooseMonthToOpen, setChooseMonthToOpen] = useState('')
    // 
    // consts

    // 
    // stores
    const currentThemeApp = useGlobalStore((state) => state.currentThemeApp)
    // 
    //components
    const listMonths =
        <div className={`flex flex-col gap-2 justify-end`}>
            {MONTHS.map((month) => <button key={month.LABEL} onClick={() => {
                const year = dayjs().year();
                const currentMonth = month.NUMBER_MONTH;
                const daysInMonth = dayjs(`${year}-${currentMonth}-01`).daysInMonth();
                const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

                if (isOpen && chooseMonthToOpen === month.LABEL) {
                    // Повторный клик по тому же месяцу — закрываем
                    setIsOpen(false);
                    setDays([]);
                    setChooseMonthToOpen('');
                    return;
                }

                // Клик по другому месяцу или первое открытие
                setChooseMonthToOpen(month.LABEL);
                setIsOpen(true);
                setDays(daysArray);
            }}>{month.LABEL}</button>)}
            {isOpen && days.length !== 0 && <div className="grid grid-cols-7 gap-2 mt-4">
                {days.map((day) => (
                    <div key={day} className="p-2 bg-gray-200 rounded text-center">
                        {day}
                    </div>
                ))}
            </div>}

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
