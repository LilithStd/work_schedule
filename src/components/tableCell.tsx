'use client'
import React, { useMemo, useState } from "react";
import { useRegistationStore } from "@/store/registrationStore";
import { THEME_COLORS, timer, weekTranslated } from "@/consts/template";
import Cell from "./cell";
import WorkersList from "./workersList";
import { useGlobalStore } from "@/store/globalStore";
import CurrentData from "./currentData";
import { indents, shadow } from "@/consts/globalStyles";
import AddCellIcon from '../../public/icons/SquaresPlus.svg'
import DateDaysWeek from "./dateDaysWeek";
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'

dayjs.extend(isoWeek)


export default function TableCell() {
    //state
    const [currentWeekDate, setCurrentWeekDate] = useState(dayjs())
    // 


    const nextWeek = () => {
        setCurrentWeekDate(prev => prev.add(1, 'week'))
    }

    const prevWeek = () => {
        setCurrentWeekDate(prev => prev.subtract(1, 'week'))
    }

    const goToToday = () => {
        setCurrentWeekDate(dayjs())
    }


    //store
    const registrationData = useRegistationStore(
        (state) => state.registartionData
    );

    const newWeek = new Array(7).fill(1);
    const getWeekDays = (date: dayjs.Dayjs) => {
        const start = date.startOf('isoWeek') // понедельник

        return Array.from({ length: 7 }).map((_, i) =>
            start.add(i, 'day')
        )
    }
    const weekDays = getWeekDays(currentWeekDate)

    const addRegistrationData = useRegistationStore((state) => state.createRegistrationDataCell)
    const currentLanguageApp = useGlobalStore((state) => state.currentLanguageApp)
    const currentThemeApp = useGlobalStore((state) => state.currentThemeApp)
    const additionalAppFunctional = useMemo(() => {
        return (
            <div className={`flex justify-between ${THEME_COLORS[currentThemeApp].container.main}  rounded-xl ${indents.subContainer.margin} ${indents.subContainer.padding}`}>

                <h2 className={`flex items-center justify-center ${THEME_COLORS[currentThemeApp].button} rounded-xl  p-2 w-60 text-center`}>
                    Workers Table
                </h2 >
                <div className="flex items-center justify-center gap-4">
                    <button
                        className={`${THEME_COLORS[currentThemeApp].button} p-2 rounded-lg`}
                        onClick={prevWeek}
                    >{'<'}</button>
                    <CurrentData />
                    <button
                        className={`${THEME_COLORS[currentThemeApp].button} p-2 rounded-lg`}
                        onClick={nextWeek}
                    >{'>'}</button>
                </div>

            </div >)
    }, [currentThemeApp])



    const tableContent = useMemo(() => {
        return timer.map((time) => (
            <React.Fragment key={time}>
                <div className={`rounded-xl min-h-10 justify-center flex items-center ${indents.container.margin} text-center ${THEME_COLORS[currentThemeApp].container.main}`}>
                    {time}
                </div>

                {registrationData.map((day) => {
                    const slot = day.registrationTime.find((t) => t.time === time);

                    return (
                        <div
                            key={`${day.day}-${time}`}
                            className={`rounded-xl ${THEME_COLORS[currentThemeApp].container.sub} text-center ${indents.container.margin}`}
                        >
                            {slot?.data?.length ? (
                                slot.data.map((item) => (
                                    <Cell
                                        key={item.id}
                                        id={item.id}
                                        day={day.day}
                                        time={time}
                                    />
                                ))
                            ) : (
                                <span className=" italic text-sm">empty</span>
                            )}
                            <button className={`p-2 m-2 rounded-xl ${THEME_COLORS[currentThemeApp].button} w-fit ${THEME_COLORS[currentThemeApp].hover.changeColor}`} onClick={() => addRegistrationData({ day: day.day, time })}>

                                <AddCellIcon width={30} height={30} />
                            </button>


                        </div>
                    );
                })}

            </React.Fragment>
        ));
    }, [registrationData, timer, currentThemeApp]);

    return (
        <div className={``}>
            {additionalAppFunctional}
            <div className="grid grid-cols-8 m-1">
                <div className={`m-1 rounded-xl ${THEME_COLORS[currentThemeApp].container.main} flex items-center justify-center`}>
                    Time / Day
                </div>
                {weekTranslated.map((day) => (
                    <div
                        key={day.label}
                        className={`rounded-xl min-h-10 justify-center flex-col flex items-center ${indents.container.margin} text-center ${THEME_COLORS[currentThemeApp].container.main}`}
                    >
                        <p className={``}>
                            {day.translate[currentLanguageApp]}
                        </p>

                    </div>
                ))}

                <>

                    <p className={`rounded-xl min-h-10 justify-center flex items-center ${indents.container.margin} text-center ${THEME_COLORS[currentThemeApp].container.main}`}>Workers</p>

                    {weekDays.map((day) => (

                        <div
                            key={day.format('YYYY-MM-DD')}
                            className={`
                                rounded-xl min-h-10 justify-center flex items-center ${indents.container.margin} text-center 
                                
                                ${day.isSame(dayjs(), 'day') ? `${THEME_COLORS[currentThemeApp].accentColor}` : `${THEME_COLORS[currentThemeApp].container.main}`}
                            `} >
                            {day.format('DD')}
                        </div>


                    ))}

                </>

                {/* <DateDaysWeek /> */}
                <WorkersList />
                {tableContent}
            </div>
        </div>
    );
}


