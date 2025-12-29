'use client'
import { indents } from '@/consts/globalStyles'
import { CLIENT_DATA_STATUS, CLIENT_FORM_TRANSLATED, MONTHS, THEME_COLORS, timer } from '@/consts/template'
import { useGlobalStore } from '@/store/globalStore'
import dayjs from 'dayjs'
import { ViewTransition, useEffect, useState } from 'react'
import AddClientIcon from '../../../public/icons/user-plus.svg'
import CreateClientForm from '@/components/clientComponents/createClientForm'
import { ClientDataType, useClientStore } from '@/store/clientStore'
import ClientDataContainer from '@/components/clientComponents/clientDataContainer'





export default function Clients() {
    // state
    const [openMonth, setOpenMonth] = useState<string | null>(null);
    const [currentClientData, setCurrentClientData] = useState<ClientDataType[]>([]);
    const [clientEditData, setClientEditData] = useState<ClientDataType>()
    const [isOpenCreateClientForm, setIsOpenCreateClientForm] = useState(false)
    const [choosedDay, setChoosedDay] = useState<string>('')
    const [timeToCreateClient, setTimeToCreateClient] = useState<string>('')
    const [isHoverOnElement, setIsHoverOnElement] = useState(false)
    const [clientDataStatus, setClientDataStatus] = useState(
        { status: false, typeEditStatus: CLIENT_DATA_STATUS.CREATE_NEW }
    )
    // const []
    const TIME = [...timer]
    // 
    // consts


    // 
    // stores
    const currentThemeApp = useGlobalStore((state) => state.currentThemeApp)
    const currentLanguageApp = useGlobalStore((state) => state.currentLanguageApp)
    const clientsList = useClientStore((state) => state.clientsList)
    // 
    // functions
    const handleEditClientData = (data: ClientDataType) => {
        setIsOpenCreateClientForm(true)
        setClientDataStatus({
            status: true,
            typeEditStatus: CLIENT_DATA_STATUS.EDIT_CURRENT
        })
        setClientEditData(data)
    }
    // /
    //components

    const handleClick = (monthLabel: string) => {
        setOpenMonth((prev) => (prev === monthLabel ? null : monthLabel));


    };
    const handleClientDataStatus = (time: string) => {
        if (clientDataStatus.typeEditStatus !== CLIENT_DATA_STATUS.CREATE_NEW) {
            setClientDataStatus({
                status: true,
                typeEditStatus: CLIENT_DATA_STATUS.CREATE_NEW
            })
        }
        setIsOpenCreateClientForm(true)
        setTimeToCreateClient(time)
        setClientDataStatus(prev => ({
            ...prev,
            status: true
        }));
    }

    const dataCell = (data: string) => {
        const dataToView = data;
        return (
            <div className={`${THEME_COLORS[currentThemeApp].button} ${dataToView === '' ? '' : 'p-4'} rounded-xl flex min-w-50 items-center justify-center`}>
                {dataToView}
            </div>
        )
    }

    useEffect(() => {
        setCurrentClientData(clientsList.filter(client => client.data === choosedDay))
    }, [choosedDay, clientsList])

    const createClientBlock = (
        <div className={`flex rounded-xl w-full ${THEME_COLORS[currentThemeApp].container.sub} ${indents.container.padding} ${indents.container.margin} `}>
            <div className={`flex m-2 w-full gap-2`}>
                {choosedDay !== '' && <div className={`flex flex-col gap-2  h-fit w-full `}>
                    <div className={`flex gap-2 justify-between `}>
                        <button className={`${THEME_COLORS[currentThemeApp].button} w-2xs rounded-xl`}>
                            {dataCell(choosedDay)}
                        </button>

                        {
                            (clientDataStatus.status && isOpenCreateClientForm) && <button className={`${THEME_COLORS[currentThemeApp].button} w-2xs rounded-xl`}
                                onClick={() => {
                                    setIsOpenCreateClientForm(false)
                                    setClientDataStatus({ status: false, typeEditStatus: CLIENT_DATA_STATUS.NOTHING })
                                }}>
                                <p>Return</p>
                            </button>
                        }
                    </div>



                    <div
                        className={` flex justify-center  `}
                    // onMouseEnter={() => setIsHoverOnElement(true)}
                    // onMouseLeave={() => setIsHoverOnElement(false)}
                    >
                        {(clientDataStatus.status && isOpenCreateClientForm) &&
                            <CreateClientForm
                                statusEditType={clientDataStatus.typeEditStatus}
                                data={choosedDay}
                                time={timeToCreateClient}
                                clientEditData={clientEditData}
                                callBack={setIsOpenCreateClientForm}
                                clientData={setCurrentClientData}
                            />
                        }
                        {!isOpenCreateClientForm &&
                            <div className={`flex flex-col w-full items-center justify-center`}>
                                {TIME.map((time) => {
                                    const clientsForTime = currentClientData.filter(
                                        (client) => client.time === time
                                    );
                                    return (
                                        <div key={time} className={`flex items-center justify-between border-1 rounded-xl border-white-300 p-2 mb-2 w-full ${THEME_COLORS[currentThemeApp].container.sub}`}>
                                            <div className={`w-full flex rounded-lg justify-between items-center`}>
                                                <h2 className={`flex font-bold justify-center text-center w-1/2 text-3xl`}>{time}</h2>
                                                <div
                                                    className={` border-1 w-full flex flex-col gap-2 justify-center items-center rounded-lg border-white-300 m-2  min-h-10 ${THEME_COLORS[currentThemeApp].container.input}`}
                                                    onMouseEnter={() => setIsHoverOnElement(true)}
                                                    onMouseLeave={() => setIsHoverOnElement(false)}
                                                >
                                                    {clientsForTime.length > 0 &&
                                                        <div className={`w-full  gap-2 flex p-2 flex-col`}>
                                                            {
                                                                clientsForTime.map((client) => (
                                                                    <ClientDataContainer
                                                                        key={client.id}
                                                                        clientData={[client]}
                                                                        time={time}
                                                                        editCallBack={handleEditClientData}
                                                                    />
                                                                ))
                                                            }
                                                        </div>
                                                    }
                                                    <div
                                                        className={`flex m-2 ${THEME_COLORS[currentThemeApp].hover.changeColor} ${THEME_COLORS[currentThemeApp].hover.changeScale} p-2 w-11/12 justify-center rounded-xl border  cursor-pointer `}
                                                        onClick={() => handleClientDataStatus(time)}
                                                    >
                                                        <AddClientIcon width={40} height={40} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        }



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
                            className={`${month.LABEL === openMonth ? THEME_COLORS[currentThemeApp].accentColor : THEME_COLORS[currentThemeApp].container.sub} ${THEME_COLORS[currentThemeApp].hover.changeColor} rounded-xl cursor-pointer h-10`}
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
                                            ${indents.button.padding}  ${THEME_COLORS[currentThemeApp].hover.changeColor}
                                            ${choosedDay === fullDayData(day) ? THEME_COLORS[currentThemeApp].element.active : THEME_COLORS[currentThemeApp].container.input}
                                            rounded 
                                            text-center
                                            cursor-pointer
                                        `}
                                        onClick={() => {
                                            setCurrentClientData([]);
                                            setClientDataStatus(prev => ({ ...prev, status: false }))

                                            if (choosedDay === fullDayData(day)) {
                                                setChoosedDay('')

                                            } else {
                                                setChoosedDay(fullDayData(day))
                                                setIsOpenCreateClientForm(false)
                                                setClientDataStatus({ status: false, typeEditStatus: CLIENT_DATA_STATUS.NOTHING })

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
            <div className={`flex flex-col  rounded-xl ${THEME_COLORS[currentThemeApp].container.main}  ${indents.mainContainer.margin} ${indents.mainContainer.padding} `}>
                <p className={`text-center`}>Clients</p>
                <div className={`flex w-full gap-4`}>
                    {createClientBlock}
                    {listMonths}
                </div>

            </div>

        </div>
    )
}
