'use client'
import { indents } from '@/consts/globalStyles'
import { MONTHS, THEME_COLORS } from '@/consts/template'
import { useGlobalStore } from '@/store/globalStore'
import dayjs from 'dayjs'
import { ViewTransition, useState } from 'react'
import AddClientIcon from '../../../public/icons/user-plus.svg'


export default function Clients() {
    // state
    const [openMonth, setOpenMonth] = useState<string | null>(null);
    const [choosedNumberDay, setChoosedNumberDay] = useState<string>('')
    // 
    // consts

    // 
    // stores
    const currentThemeApp = useGlobalStore((state) => state.currentThemeApp)
    // 
    //components

    const handleClick = (monthLabel: string) => {
        setOpenMonth((prev) => (prev === monthLabel ? null : monthLabel));
    };

    const dataCell = (data: string) => {
        const dataToView = data;
        return (
            <div className={`${THEME_COLORS[currentThemeApp].subContainer} ${dataToView === '' ? '' : 'p-4'} rounded-xl flex min-w-50 items-center justify-center`}>
                {dataToView}
            </div>
        )
    }


    const createClientBlock = (
        <div className={`flex rounded-xl w-full ${THEME_COLORS[currentThemeApp].container} ${indents.container.padding} ${indents.container.margin} `}>
            <div className={`flex`}>
                <div className={`${THEME_COLORS[currentThemeApp].container}`}>
                    {dataCell(choosedNumberDay)}
                </div>

                <div>
                    {choosedNumberDay !== '' && <AddClientIcon className={`m-6`} width={50} height={50} />}
                </div>

            </div>

        </div>
    )

    const listMonths = (
        <div className={`flex flex-col w-1/2 rounded-xl ${indents.container.margin} ${indents.container.padding} gap-4 ${THEME_COLORS[currentThemeApp].container}`}>
            {MONTHS.map((month) => {
                const isOpen = openMonth === month.LABEL;

                const year = dayjs().year();
                const daysInMonth = dayjs(`${year}-${month.NUMBER_MONTH}`).daysInMonth();
                const fullDayData = (day: number) => {
                    const currentDayData = dayjs(`${year}-${month.NUMBER_MONTH}-${day.toString()}`).format('D MMMM YYYY')
                    return currentDayData
                };
                const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

                return (
                    <div key={month.LABEL} className="flex flex-col">
                        <button
                            className={`${THEME_COLORS[currentThemeApp].subContainer} rounded-xl cursor-pointer h-10`}
                            onClick={() => handleClick(month.LABEL)}
                        >
                            {month.LABEL}
                        </button>

                        {isOpen && (
                            <div className="grid grid-cols-7 m-2 gap-2">
                                {daysArray.map((day) => (
                                    <button
                                        key={day}
                                        className={`
                                            ${indents.button.padding} ${THEME_COLORS[currentThemeApp].subContainer} ${THEME_COLORS[currentThemeApp].hover} 
                                            rounded 
                                            text-center
                                            cursor-pointer
                                        `}
                                        onClick={() => {
                                            setChoosedNumberDay(fullDayData(day))
                                        }}
                                    >
                                        {day}
                                    </button>
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
            <div className={`flex flex-col  rounded-xl ${THEME_COLORS[currentThemeApp].button}  ${indents.mainContainer.margin} ${indents.mainContainer.padding} `}>
                <p className={`text-center`}>Clients</p>
                <div className={`flex w-full gap-4`}>
                    {createClientBlock}
                    {listMonths}
                </div>

            </div>

        </div>
    )
}
