'use client'
import { indents } from '@/consts/globalStyles'
import { CLIENT_DATA_STATUS, MONTHS, THEME_COLORS } from '@/consts/template'
import { useGlobalStore } from '@/store/globalStore'
import dayjs from 'dayjs'
import { ViewTransition, useState } from 'react'
import AddClientIcon from '../../../public/icons/user-plus.svg'
import CreateClientForm from '@/components/clientComponents/createClientForm'



export default function Clients() {
    // state
    const [openMonth, setOpenMonth] = useState<string | null>(null);
    const [choosedDay, setChoosedDay] = useState<string>('')
    const [isHoverOnElement, setIsHoverOnElement] = useState(false)
    const [clientDataStatus, setClientDataStatus] = useState(
        { status: false, typeEditStatus: CLIENT_DATA_STATUS.CREATE_NEW }
    )
    // const []
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
    const handleClientDataStatus = () => {
        setClientDataStatus(prev => ({
            ...prev,
            status: true
        }));
    }

    const dataCell = (data: string) => {
        const dataToView = data;
        return (
            <div className={`${THEME_COLORS[currentThemeApp].container.sub} ${dataToView === '' ? '' : 'p-4'} rounded-xl flex min-w-50 items-center justify-center`}>
                {dataToView}
            </div>
        )
    }


    const createClientBlock = (
        <div className={`flex rounded-xl w-full ${THEME_COLORS[currentThemeApp].container.main} ${indents.container.padding} ${indents.container.margin} `}>
            <div className={`flex m-2 w-full gap-2`}>
                {choosedDay !== '' && <div className={`flex flex-col gap-2  h-fit w-full `}>
                    <div className={`${THEME_COLORS[currentThemeApp].container.sub} w-2xs rounded-xl`}>
                        {dataCell(choosedDay)}
                    </div>

                    <div
                        className={`border-2 rounded-xl p-4 ${isHoverOnElement || clientDataStatus.status ? 'opacity-100' : 'opacity-30'} flex justify-center  `}
                        onMouseEnter={() => setIsHoverOnElement(true)}
                        onMouseLeave={() => setIsHoverOnElement(false)}
                    >
                        {!clientDataStatus.status && <AddClientIcon className={``} width={40} height={40} onClick={handleClientDataStatus} />}
                        {clientDataStatus.status && <CreateClientForm statusEditType={clientDataStatus.typeEditStatus} data={choosedDay} />}
                    </div>
                </div>}



            </div>

        </div>
    )

    const listMonths = (
        <div className={`flex flex-col w-1/2 rounded-xl ${indents.container.margin} ${indents.container.padding} gap-4 ${THEME_COLORS[currentThemeApp].container.main}`}>
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
                            className={`${THEME_COLORS[currentThemeApp].container.sub} rounded-xl cursor-pointer h-10`}
                            onClick={() => handleClick(month.LABEL)}
                        >
                            {month.LABEL}
                        </button>

                        {isOpen && (
                            <div className={`grid grid-cols-7  m-2 gap-2 ${THEME_COLORS[currentThemeApp].container.main}`}>
                                {daysArray.map((day) => (
                                    <button
                                        key={day}
                                        className={`
                                            ${indents.button.padding}  ${THEME_COLORS[currentThemeApp].hover}
                                            ${choosedDay === fullDayData(day) ? THEME_COLORS[currentThemeApp].element.active : THEME_COLORS[currentThemeApp].container.input}
                                            rounded 
                                            text-center
                                            cursor-pointer
                                        `}
                                        onClick={() => {
                                            setClientDataStatus(prev => ({ ...prev, status: false }))
                                            if (choosedDay === fullDayData(day)) {
                                                setChoosedDay('')

                                            } else {
                                                setChoosedDay(fullDayData(day))
                                            }

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
        <div className={`flex flex-col min-h-screen`}>
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
