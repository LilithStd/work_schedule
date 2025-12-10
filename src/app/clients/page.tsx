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
    const [openMonth, setOpenMonth] = useState<string | null>(null);
    const handleClick = (monthLabel: string) => {
        setOpenMonth((prev) => (prev === monthLabel ? null : monthLabel));
    };

    const listMonths = (
        <div className="flex flex-col gap-2">
            {MONTHS.map((month) => {
                const isOpen = openMonth === month.LABEL;

                const year = dayjs().year();
                const daysInMonth = dayjs(`${year}-${month.NUMBER_MONTH}`).daysInMonth();
                const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

                return (
                    <div key={month.LABEL} className="flex flex-col gap-2">
                        <button
                            className="bg-blue-500 text-white rounded px-3 py-1"
                            onClick={() => handleClick(month.LABEL)}
                        >
                            {month.LABEL}
                        </button>

                        {isOpen && (
                            <div className="grid grid-cols-7 gap-2">
                                {daysArray.map((day) => (
                                    <div
                                        key={day}
                                        className="p-2 bg-gray-200 rounded text-center"
                                    >
                                        {day}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );

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
